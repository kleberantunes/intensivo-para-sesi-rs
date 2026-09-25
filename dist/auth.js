/* Firebase identity and progress synchronization. Developed by AK Labs. */
(async function () {
  'use strict';
  const config=window.FIREBASE_CONFIG, P=window.AKProgress;
  const el=id=>document.getElementById(id);
  let user=null, ready=false, epoch=0, pending=null, revision=0, running=null, timer=null, unsubscribe=null;
  let transferGuest=null, signingInGuest=false, api=null, db=null;
  const current=()=>P.copy(window.getAppState());
  function status(text,pendingStatus=true) {
    const badge=el('syncStatus');
    badge.textContent=text;badge.className='sync-badge '+(pendingStatus?'pending':'synced');
    badge.title=text;badge.setAttribute('aria-live','polite');
  }
  function queue(state) {
    pending=P.copy(state);revision++;
    status('Salvo no aparelho · envio pendente');
    if(!ready)return;
    clearTimeout(timer);timer=setTimeout(flush,350);
  }
  async function flush() {
    if(running)return running;
    if(!ready||!user||!pending)return false;
    clearTimeout(timer);
    const activeEpoch=epoch, identity=user;
    running=(async()=>{
      try {
        while(pending&&ready&&epoch===activeEpoch) {
          const snapshot=P.copy(pending),sentRevision=revision;
          status('Sincronizando…');
          const committed=await commit(identity,snapshot);
          if(epoch!==activeEpoch)return false;
          window.applyCloudState(P.merge(current(),committed));
          if(sentRevision===revision)pending=null;
          else pending=P.merge(pending,committed);
        }
        if(epoch===activeEpoch)status('Sincronizado',false);
        return true;
      } catch(err) {
        console.error('Sincronização não confirmada:',err.code||err.message);
        if(epoch===activeEpoch) {
          if(err.code==='access-blocked'){ready=false;status('Acesso suspenso');}
          else {status('Salvo no aparelho · nuvem pendente');timer=setTimeout(flush,15000);}
        }
        return false;
      } finally {running=null;}
    })();
    return running;
  }
  window.cloudSync={isReady:()=>ready,scheduleSave:queue,flushSave:flush};
  window.addEventListener('online',()=>{if(ready)queue(current());});
  window.addEventListener('pagehide',flush);
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')flush();else if(ready)queue(current());});
  function payload(state,identity) {
    return {...P.normalize(state),userEmail:identity.email||'',
      userName:identity.isAnonymous?'Usuário não logado · '+identity.uid.slice(0,6):(identity.displayName||'Estudante'),
      userPhoto:identity.photoURL||'',isAnonymous:!!identity.isAnonymous,appVersion:'1.7.1',lastUpdated:Date.now()};
  }
  async function commit(identity,snapshot,extra={}) {
    const ref=api.doc(db,'users',identity.uid);
    return api.runTransaction(db,async tx=>{
      const saved=await tx.get(ref);
      const cloud=saved.exists()?saved.data():null;
      if(cloud?.status==='blocked')throw Object.assign(new Error('Acesso suspenso'),{code:'access-blocked'});
      const merged=P.merge(snapshot,cloud);
      const userStatus=cloud?.status||'active';
      const userCreated=cloud?.createdAt||Date.now();
      tx.set(ref,{...payload(merged,identity),...extra,status:userStatus,createdAt:userCreated,lastUpdated:Date.now()},{merge:true});
      return merged;
    });
  }
  function identityUI(identity) {
    const guest=!identity||identity.isAnonymous;
    el('loginBtn').classList.toggle('hidden',!guest);
    el('userProfile').classList.toggle('hidden',guest);
    el('guestLabel').classList.toggle('hidden',!guest);
    el('guestLabel').textContent=identity?.isAnonymous?'Visitante · '+identity.uid.slice(0,6):'Visitante';
    el('visitorNotice').classList.toggle('hidden',!guest);
    if(!guest) {
      el('userName').textContent=identity.displayName?.split(' ')[0]||'Estudante';
      el('userAvatar').src=identity.photoURL||'default-avatar.svg';
    }
    let adminLink=el('adminPanelLink');
    const isAdmin=!!identity?.email&&(window.ADMIN_EMAILS||[]).includes(identity.email);
    if(isAdmin&&!adminLink) {
      adminLink=document.createElement('a');adminLink.id='adminPanelLink';adminLink.href='admin.html';
      adminLink.className='btn-admin-nav';adminLink.textContent='Painel Admin';el('authContainer').prepend(adminLink);
    }
    adminLink?.classList.toggle('hidden',!isAdmin);
  }
  if(!config?.apiKey){status('Somente neste aparelho · serviço indisponível');return;}
  try {
    const [{initializeApp},authApi,firestore]=await Promise.all([
      import('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js'),
      import('https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js'),
      import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js')]);
    api=firestore;
    const firebaseApp=initializeApp(config),auth=authApi.getAuth(firebaseApp);
    db=api.getFirestore(firebaseApp);
    async function handleIdentity(identity) {
      const generation=++epoch;ready=false;user=identity;clearTimeout(timer);unsubscribe?.();unsubscribe=null;
      identityUI(identity);
      if(!identity) {
        status('Conectando visitante…');
        if(!signingInGuest) {
          signingInGuest=true;
          try {await authApi.signInAnonymously(auth);}
          catch(err){console.error('Visitante sem conexão:',err.code);status('Somente neste aparelho · visitante offline');}
          finally{signingInGuest=false;}
        }
        return;
      }
      const transfer=transferGuest;
      if(transfer)window.applyCloudState(transfer.state);
      window.activateProgressUser(identity.uid,!!transfer);
      pending=current();revision++;
      status('Carregando histórico…');
      const initialize=async()=>{
        try {
          const data=await commit(identity,current(),{lastLoginAt:Date.now(),...(transfer?{guestOriginUid:transfer.uid}:{})});
          if(epoch!==generation)return;
          window.applyCloudState(P.merge(current(),data));
          transferGuest=null;ready=true;pending=current();revision++;
          unsubscribe=api.onSnapshot(api.doc(db,'users',identity.uid),snap=>{
            if(epoch!==generation||!snap.exists()||snap.metadata.hasPendingWrites)return;
            if(snap.data().status==='blocked'){ready=false;status('Acesso suspenso');return;}
            window.applyCloudState(P.merge(current(),snap.data()));
          },err=>{console.error('Atualização do histórico:',err.code);status('Histórico local · conexão pendente');});
          // Wait for any save of the previous identity to settle before draining this identity's queue.
          if(running)await running;
          if(epoch===generation)await flush();
        } catch(err) {
          if(epoch!==generation)return;
          console.error('Histórico não sincronizado:',err.code||err.message);
          status(err.code==='access-blocked'?'Acesso suspenso':'Salvo no aparelho · aguardando conexão');
          if(err.code!=='access-blocked')timer=setTimeout(initialize,15000);
        }
      };
      await initialize();
    }
    authApi.onAuthStateChanged(auth,handleIdentity);
    el('syncStatus').onclick=async()=>{
      if(!ready){status('Aguardando conexão · histórico preservado no aparelho');return;}
      queue(current());const ok=await flush();
      if(ok)window.toast('Gravação confirmada na nuvem.');
    };
    el('loginBtn').onclick=async()=>{
      el('loginBtn').disabled=true;
      status('Conectando Google…');
      const provider=new authApi.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      const guestProgress=current();
      const guestUid=user?.isAnonymous?user.uid:null;
      try {
        let loggedUser=null;
        if(guestUid) {
          try {
            const linkRes=await authApi.linkWithPopup(auth.currentUser,provider);
            loggedUser=linkRes.user;
          } catch(err) {
            if(err.code==='auth/credential-already-in-use'||err.code==='auth/account-exists-with-different-credential') {
              const credential=authApi.GoogleAuthProvider.credentialFromError(err);
              transferGuest={uid:guestUid,state:guestProgress};
              if(credential) {
                const signRes=await authApi.signInWithCredential(auth,credential);
                loggedUser=signRes.user;
              } else {
                const signRes=await authApi.signInWithPopup(auth,provider);
                loggedUser=signRes.user;
              }
            } else if(err.code==='auth/provider-already-linked') {
              loggedUser=auth.currentUser;
            } else {
              throw err;
            }
          }
        } else {
          const signRes=await authApi.signInWithPopup(auth,provider);
          loggedUser=signRes.user;
        }
        if(loggedUser) {
          await handleIdentity(loggedUser);
          window.toast('Login realizado com sucesso! Bem-vindo(a), '+(loggedUser.displayName?loggedUser.displayName.split(' ')[0]:'Estudante')+'.');
        }
      } catch(err) {
        transferGuest=null;
        console.error('Login não concluído:',err.code,err.message);
        if(err.code==='auth/popup-blocked') {
          window.toast('Janela pop-up bloqueada pelo navegador. Permita pop-ups para fazer login.');
        } else if(err.code!=='auth/popup-closed-by-user') {
          window.toast('Não foi possível entrar. Seu progresso permanece seguro neste aparelho.');
        }
        status('Salvo no aparelho · conexão pendente');
      } finally {el('loginBtn').disabled=false;}
    };
    el('logoutBtn').onclick=async()=>{
      await flush();
      ready=false;pending=null;window.detachProgressUser();
      await authApi.signOut(auth);window.toast('Conta desconectada. Histórico guardado nesta conta.');
    };
  } catch(err) {
    console.error('Serviço indisponível:',err.code||err.message);
    status('Somente neste aparelho · conexão indisponível');
  }
})();
