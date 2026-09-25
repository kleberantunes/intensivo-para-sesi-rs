/* Developed by AK Labs. Mergeable progress; no credentials in local storage. */
(function(root) {
  'use strict';
  const KEY='intensivo-sesi-rs', LEGACY='isabele-sesi', OWNER=KEY+':owner';
  const copy=value=>JSON.parse(JSON.stringify(value));
  const num=value=>Math.max(0,Math.floor(Number(value)||0));
  const mathTopics=new Set(['Porcentagem','Frações','Números decimais','Razão e proporção','Regra de três','Equações','Gráficos e tabelas','Tratamento da informação','Perímetro','Área','Ângulos','Triângulos','Teorema de Pitágoras','Média aritmética']);
  const pair=x=>{const a=num(x?.a);return {a,c:Math.min(a,num(x?.c))};};
  function mergePairs(a={},b={}) {
    const out={};
    for(const key of new Set([...Object.keys(a),...Object.keys(b)])) {
      const x=pair(a[key]),y=pair(b[key]);
      // Preserve an observed pair; never combine attempts from one snapshot with successes from another.
      out[key]=y.a>x.a||(y.a===x.a&&y.c>x.c)?y:x;
    }
    return out;
  }
  function counter(x={}) {
    const answered=num(x.answered);
    return {answered,correct:Math.min(answered,num(x.correct)),topics:mergePairs(x.topics),subjects:mergePairs(x.subjects)};
  }
  function normalize(value={}) {
    const x=value&&typeof value==='object'?value:{};
    const baseline=counter(x.progressVersion===2?x.legacyBaseline:x);
    if(!Object.keys(baseline.subjects).length) {
      for(const [topic,stats] of Object.entries(baseline.topics)) {
        const subject=mathTopics.has(topic)?'math':'port';
        const entry=baseline.subjects[subject]||{a:0,c:0};
        entry.a+=stats.a;entry.c+=stats.c;baseline.subjects[subject]=entry;
      }
    }
    const sessions={};
    if(x.progressVersion===2) for(const [id,data] of Object.entries(x.sessions||{})) sessions[id]=counter(data);
    const result={progressVersion:2,legacyBaseline:baseline,sessions,answered:baseline.answered,correct:baseline.correct,
      topics:copy(baseline.topics),subjects:copy(baseline.subjects),
      errors:Array.isArray(x.errors)?x.errors:[],essay:typeof x.essay==='string'?x.essay:'',
      essayUpdatedAt:num(x.essayUpdatedAt),essayHistory:Array.isArray(x.essayHistory)?x.essayHistory:[],
      checks:x.checks&&typeof x.checks==='object'?x.checks:{},completed:Array.isArray(x.completed)?x.completed:[],
      seen:x.seen&&typeof x.seen==='object'?x.seen:{}};
    for(const session of Object.values(sessions)) {
      result.answered+=session.answered;result.correct+=session.correct;
      for(const field of ['topics','subjects']) for(const [key,p] of Object.entries(session[field])) {
        const entry=result[field][key]||{a:0,c:0};entry.a+=p.a;entry.c+=p.c;result[field][key]=entry;
      }
    }
    return result;
  }
  const union=(a,b,key)=>Array.from(new Map([...a,...b].map(x=>[key(x),x])).values());
  function merge(left,right) {
    const a=normalize(left),b=normalize(right);
    const x=a.legacyBaseline,y=b.legacyBaseline;
    const baseline=y.answered>x.answered||(y.answered===x.answered&&y.correct>x.correct)?y:x;
    const sessions={...a.sessions};
    for(const [id,other] of Object.entries(b.sessions)) {
      if(!sessions[id]||other.answered>sessions[id].answered) sessions[id]=other;
    }
    const essay=b.essayUpdatedAt>a.essayUpdatedAt?b:a.essayUpdatedAt>b.essayUpdatedAt?a:b.essay.length>a.essay.length?b:a;
    const seen={...a.seen};
    for(const [key,values] of Object.entries(b.seen)) seen[key]=[...new Set([...(Array.isArray(seen[key])?seen[key]:[]),...(Array.isArray(values)?values:[])])];
    return normalize({...a,legacyBaseline:{...baseline,topics:mergePairs(a.legacyBaseline.topics,b.legacyBaseline.topics),subjects:mergePairs(a.legacyBaseline.subjects,b.legacyBaseline.subjects)},sessions,
      essay:essay.essay,essayUpdatedAt:essay.essayUpdatedAt,
      essayHistory:union(a.essayHistory,b.essayHistory,x=>x.id||x.prompt+'_'+x.timestamp),
      errors:union(a.errors,b.errors,x=>x.question),checks:{...b.checks,...a.checks},
      completed:[...new Set([...a.completed,...b.completed])],seen});
  }
  function record(state,sessionId,subject,topic,correct) {
    const next=normalize(state),session=next.sessions[sessionId]||counter();
    session.answered++;if(correct)session.correct++;
    for(const [field,key] of [['topics',topic],['subjects',subject]]) {
      const p=session[field][key]||{a:0,c:0};p.a++;if(correct)p.c++;session[field][key]=p;
    }
    next.sessions[sessionId]=session;return normalize(next);
  }
  function storage(store) {
    const read=key=>{try{return JSON.parse(store.getItem(key)||'null')}catch{return null}};
    const owner=()=>store.getItem(OWNER)||'';
    const scoped=uid=>KEY+':user:'+uid;
    function write(value) {
      const data=normalize(value),key=owner()?scoped(owner()):KEY;
      const previous=read(key);
      if(previous) store.setItem(key+':backup',JSON.stringify(merge(previous,read(key+':backup'))));
      store.setItem(key,JSON.stringify(data));
      store.setItem(KEY,JSON.stringify(data));
      return data;
    }
    function load() {
      const uid=owner();
      if(uid)return merge(read(scoped(uid)),read(scoped(uid)+':backup'));
      const data=merge(merge(read(KEY),read(LEGACY)),read(KEY+':backup'));
      write(data);return data;
    }
    function activate(uid,current,transfer=false) {
      const previousOwner=owner();
      let data=merge(read(scoped(uid)),read(scoped(uid)+':backup'));
      if(!previousOwner||previousOwner===uid||transfer)data=merge(current,data);
      store.setItem(OWNER,uid);write(data);return data;
    }
    function detach(current) {
      write(current);store.setItem(OWNER,'signed-out');write(normalize());
      return normalize();
    }
    return {load,write,activate,detach,owner};
  }
  root.AKProgress={normalize,merge,record,storage,copy};
  if(typeof module!=='undefined')module.exports=root.AKProgress;
})(typeof window!=='undefined'?window:globalThis);
