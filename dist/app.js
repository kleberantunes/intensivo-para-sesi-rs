const $=s=>document.querySelector(s), app=$('#app');
const escapeHTML=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const progressStore=window.AKProgress.storage(localStorage);
const progressSession=crypto.randomUUID();
const state=progressStore.load();
let lastEssay=state.essay;
const save=()=>{if(state.essay!==lastEssay){state.essayUpdatedAt=Date.now();lastEssay=state.essay;}progressStore.write(state);window.cloudSync?.scheduleSave(state);};
const toast=t=>{const e=$('#toast');e.textContent=t;e.style.cssText='position:fixed;right:18px;bottom:18px;background:#10233f;color:white;padding:14px 18px;border-radius:12px;z-index:99;box-shadow:0 10px 30px #10233f44';setTimeout(()=>e.style.display='none',2200);e.style.display='block'};
window.toast=toast;
window.getAppState=()=>state;
window.applyCloudState=cloudState=>{Object.assign(state,window.AKProgress.normalize(cloudState));lastEssay=state.essay;progressStore.write(state);if(typeof currentRoute!=='undefined'&&['home','progress','errors'].includes(currentRoute))window.refreshView?.();};
window.activateProgressUser=(uid,transfer=false)=>{window.applyCloudState(progressStore.activate(uid,state,transfer));};
window.detachProgressUser=()=>{window.applyCloudState(progressStore.detach(state));};
const questionBank=window.AK_QUESTION_BANK;
if(!questionBank||!Array.isArray(questionBank.math)||!Array.isArray(questionBank.port))throw new Error('Banco de questões não carregado.');
const math=questionBank.math,port=questionBank.port;
state.seen=state.seen||{};
const lessons={math:[['Números e operações','Porcentagem, frações, decimais, razão, proporção e regra de três','Transforme a situação em partes do total. Em porcentagem, calcule a parte e depois some ou subtraia conforme o problema.','Uma compra de R$ 200 com 15% de desconto: 10% = 20 e 5% = 10; desconto = 30; preço = R$ 170.','Antes de calcular, marque se a quantidade aumenta ou diminui.'],['Equações','Descobrir um valor desconhecido mantendo a igualdade equilibrada.','Se x + 12 = 35, subtraia 12 dos dois lados: x = 23.','Faça a operação inversa e confira substituindo o resultado.'],['Geometria','Perímetro mede o contorno; área mede a superfície. Em triângulos retângulos, a²+b²=c².','Sala de 5 m por 4 m: perímetro 18 m; área 20 m².','Escreva sempre a unidade: m no perímetro e m² na área.'],['Tratamento da informação','Leia título, legenda, eixos e unidade antes de comparar dados. Média é soma dividida pela quantidade.','Notas 6, 8 e 7: soma 21; 21 ÷ 3 = 7.','Não escolha só o maior número: confirme o que a pergunta solicita.']],port:[['Interpretação','Encontre o assunto, a ideia principal e as evidências no próprio texto.','Se o texto repete razões para economizar água, essa defesa é sua ideia principal.','Separe o que está escrito do que pode ser concluído.'],['Estrutura textual','Narrativas contam acontecimentos; dissertações discutem ideias; cada gênero atende a uma finalidade.','Uma notícia informa um fato recente; uma campanha busca orientar ou convencer.','Observe forma, público, objetivo e onde o texto circula.'],['Argumentação','Tese é a ideia defendida. Argumentos são razões, exemplos ou dados que a sustentam.','“Precisamos de mais árvores porque elas reduzem o calor” — antes de “porque” está a tese; depois, o argumento.','Fato pode ser verificado; opinião expressa julgamento.'],['Figuras de linguagem','Criam efeitos de sentido: metáfora, comparação, ironia, hipérbole e personificação.','“A notícia voou” é metáfora; “rápido como um raio” é comparação.','Leia o contexto: figuras raramente devem ser entendidas ao pé da letra.']]};
const essays=['Uso consciente das redes sociais','A importância da educação','Tecnologia na vida dos jovens','Convivência e respeito às diferenças','Responsabilidade dos jovens com o meio ambiente'];
const socio=['Seu grupo entrega um projeto amanhã e alguém não concluiu a parte.','Você tem pouco tempo e três tarefas importantes.','Duas pessoas do grupo defendem soluções opostas.','Você percebe que cometeu um erro que afeta a equipe.','Um colega está nervoso antes de apresentar.','O material disponível não é suficiente para todos.','Você recebe uma crítica com a qual não concorda.','O plano inicial falha perto do prazo.','Um integrante fala pouco, mas conhece bem o tema.','Você precisa escolher entre rapidez e qualidade.','O grupo começa a discutir e perde o foco.','Uma tarefa parece difícil e você pensa em desistir.','Você recebe informações incompletas para decidir.','O resultado foi pior que o esperado.','Você lidera uma atividade com pessoas de ritmos diferentes.'];
const routes={home,trail,practice,essay,errors,progress,finalReview,beforeTest,socioPage,simulation,challenge,library,officialExam};
let currentRoute='home',currentArg=null;
function go(name,arg){currentRoute=name||'home';currentArg=arg;(routes[name]||home)(arg);window.scrollTo({top:0,behavior:'smooth'});$('#nav').classList.remove('open')}
window.refreshView=()=>(routes[currentRoute]||home)(currentArg);
document.addEventListener('click',e=>{const b=e.target.closest('[data-go]');if(b)go(b.dataset.go,b.dataset.arg)});$('#menuBtn').onclick=()=>$('#nav').classList.toggle('open');
function home(){app.innerHTML=`<div class="shell"><section class="hero"><div class="hero-main"><span class="eyebrow" style="color:#71d9e9">Preparação intensiva · SESI/SENAI 2025/2026</span><h1>Treine no nível real da seleção oficial.</h1><p>Banco completo com 340 questões aprofundadas no padrão oficial de gratuidade Inova Médio (Língua Portuguesa e Matemática).</p><div class="actions"><button class="btn warn" data-go="officialExam">Caderno Oficial 2025 (40 Qs)</button><button class="btn light" data-go="trail">Trilha de estudo</button><button class="btn ghost" data-go="challenge">Desafio rápido (10 min)</button></div></div><aside class="date-card" style="cursor:pointer;" data-go="officialExam" title="Clique para abrir o Simulado Oficial 2025"><span class="eyebrow" style="color:#513b00">Caderno oficial</span><strong>40</strong><div><b>Prova Real 2025</b><p>20 Português · 20 Matemática · Resoluções completas</p></div></aside></section><section class="grid"><button class="card span2" style="border: 2px solid #2864dc; background: linear-gradient(135deg, #edf3ff 0%, #ffffff 100%); cursor:pointer;" data-go="officialExam"><span class="eyebrow" style="color:#2864dc; font-weight:800;">Destaque Oficial</span><h3 style="margin-top:6px; color:#10233f;">Simulado Oficial SESI/SENAI 2025</h3><p>Resolva exatamente as 40 questões originais do processo seletivo oficial de gratuidade (Q01 a Q20 Português, Q21 a Q40 Matemática) com gabarito oficial comentado.</p></button><button class="card" data-go="simulation"><span class="eyebrow">Banco de 340 Qs</span><h3>Simulado Final</h3><p>Simulação dinâmica com 40 questões sorteadas e nota por área.</p></button><button class="card" data-go="practice"><span class="eyebrow">Treino contínuo</span><h3>Praticar Blocos</h3><p>Blocos de 5 questões com correção instantânea e explicação.</p></button><button class="card" data-go="library" data-arg="math"><span class="icon">∑</span><h3>Matemática</h3><p>Álgebra, equações, geometria, proporcionalidade e dados.</p></button><button class="card" data-go="library" data-arg="port"><span class="icon">Aa</span><h3>Língua Portuguesa</h3><p>Interpretação, coesão, sintaxe, gêneros e argumentação.</p></button><button class="card" data-go="essay"><span class="icon">✎</span><h3>Produção Textual</h3><p>Estrutura em 4 parágrafos e histórico de versões.</p></button><button class="card" data-go="socioPage"><span class="icon">◇</span><h3>Socioemocional</h3><p>Decida com calma e analise consequências.</p></button><button class="card span2" data-go="trail"><span class="eyebrow">Plano de estudo</span><h3>Trilha intensiva</h3><p>Blocos curtos organizados pelas habilidades mais cobradas.</p></button><button class="card" data-go="errors"><span class="eyebrow">Reforço</span><h3>Meus Erros</h3><p>${state.errors.length} registro(s) para revisar.</p></button><button class="card span2" data-go="finalReview"><span class="eyebrow">Revisão</span><h3>Revisão Final</h3><p>Revise as habilidades essenciais e seus erros.</p></button><button class="card" data-go="beforeTest"><span class="eyebrow">Dia da prova</span><h3>Antes da prova</h3><p>10 minutos, sem conteúdo novo.</p></button><button class="card" data-go="progress"><span class="eyebrow">Painel</span><h3>Meu Progresso</h3><p>${state.answered} questões respondidas.</p></button></section></div>`}
function trail(day='fri'){const fri=[['Matemática','Porcentagem, frações, decimais, razão, proporção, regra de três e equações'],['Português','Interpretação, ideia principal, explícito, implícito, inferência, finalidade, autor e leitor, fato e opinião'],['Matemática','Gráficos, tabelas, média e tratamento da informação'],['Português','Narrativa, dissertação, gêneros e argumentação']];const sat=[['Matemática','Geometria, perímetro, área, ângulos, triângulos e Pitágoras'],['Português','Metáfora, comparação, ironia, hipérbole, personificação e função argumentativa'],['Produção Textual','Introdução, dois desenvolvimentos e conclusão'],['Treino de prova','Desafio rápido, simulado e correção dos próprios erros']];const data=day==='fri'?fri:sat;app.innerHTML=`<div class="shell"><div class="section-head"><div><span class="eyebrow">Rota objetiva</span><h1>Trilha de estudo</h1><p>Avance sem esperar dominar tudo. Seus erros serão priorizados automaticamente.</p></div></div><div class="day-tabs"><button class="${day==='fri'?'active':''}" onclick="trail('fri')">Sexta · Fundamentos</button><button class="${day==='sat'?'active':''}" onclick="trail('sat')">Sábado · Complemento</button></div><div class="blocks">${data.map((x,i)=>`<article class="block"><span class="num">${i+1}</span><div><h3>${x[0]}</h3><p>${x[1]}</p></div><button class="btn" data-go="${x[0]==='Produção Textual'?'essay':x[0]==='Treino de prova'?'challenge':'practice'}" data-arg="${x[0]==='Português'?'port':'math'}">Estudar bloco</button></article>`).join('')}</div></div>`}
function library(sub='math'){const title=sub==='math'?'Matemática':'Língua Portuguesa';app.innerHTML=`<div class="shell"><div class="subject-head"><span class="eyebrow" style="color:#72ddec">Biblioteca essencial</span><h1>${title}</h1><p>${sub==='math'?'Resolva problemas entendendo cada passo.':'Leia buscando evidências, intenção e efeito de sentido.'}</p><button class="btn warn" data-go="practice" data-arg="${sub}">Praticar agora</button></div><div class="topic-grid">${lessons[sub].map(x=>`<article class="lesson"><h3>${x[0]}</h3><div class="label">Conceito</div><p>${x[1]}</p><div class="label">Exemplo</div><p>${x[2]}</p><div class="label">Atenção</div><div class="callout">${x[3]}</div></article>`).join('')}</div></div>`}
let practiceSet=[],practiceIndex=0;
function practice(sub='priority'){let pool=sub==='port'?port:sub==='math'?math:[...math,...port];const weak=state.errors.map(e=>e.topic);pool=[...pool].sort((a,b)=>weak.filter(x=>x===b[0]).length-weak.filter(x=>x===a[0]).length);practiceSet=pool.slice(0,5);practiceIndex=0;renderPractice()}
function renderPractice(){const q=practiceSet[practiceIndex];app.innerHTML=`<div class="shell"><div class="section-head"><div><span class="eyebrow">Aprender → praticar → corrigir</span><h1>Questão ${practiceIndex+1} de ${practiceSet.length}</h1><p>${q[0]} · resposta e resolução aparecem logo após a escolha.</p></div></div>${questionHTML(q,'practiceQ')}<div class="actions"><button class="btn hidden" id="nextPractice">${practiceIndex===practiceSet.length-1?'Concluir bloco':'Próxima questão'}</button></div></div>`;bindImmediate(q,'practiceQ',()=>{const b=$('#nextPractice');b.classList.remove('hidden');b.onclick=()=>{practiceIndex++;practiceIndex<practiceSet.length?renderPractice():(toast('Bloco concluído'),go('progress'))}})}
function questionHTML(q,id){return `<article class="question" id="${id}"><span class="eyebrow">${q[0]}</span><h3>${q[1]}</h3><div class="options">${q[2].map((o,i)=>`<button class="option" data-choice="${i}">${String.fromCharCode(65+i)}. ${o}</button>`).join('')}</div><div class="feedback hidden"></div></article>`}
function getPedagogicTip(topic, isMath) {
  const t = (topic || '').toLowerCase();
  if (t.includes('porcentagem')) {
    return 'Dica prática: Calcule sempre 10% (dividindo por 10) ou 1% (dividindo por 100) como ponto de partida mental. Depois multiplique ou subtraia conforme o enunciado.';
  }
  if (t.includes('regra de três') || t.includes('proporç') || t.includes('razão')) {
    return 'Passo a passo: 1) Alinhe as grandezas em colunas; 2) Se uma sobe e a outra também sobe, multiplique em cruz (direta); se uma sobe e a outra diminui, multiplique em linha reta (inversa).';
  }
  if (t.includes('equaç') || t.includes('álgebra')) {
    return 'Estratégia segura: Isole a letra fazendo a operação inversa dos dois lados (+ vira -, × vira ÷). Para ter certeza, substitua o valor encontrado no lugar de x na equação original.';
  }
  if (t.includes('perímetro') || t.includes('área') || t.includes('geometria')) {
    return 'Atenção redobrada: Perímetro é apenas a soma do contorno (unidade linear: m, cm). Área é o produto da superfície (unidade quadrada: m², cm²). Nunca confunda as fórmulas!';
  }
  if (t.includes('pitágoras') || t.includes('triângulo')) {
    return 'Lembre-se: No triângulo retângulo, a hipotenusa é o lado oposto ao ângulo de 90° (o maior lado). A soma dos quadrados dos catetos é igual ao quadrado da hipotenusa: a² + b² = c².';
  }
  if (t.includes('gráfico') || t.includes('tabela') || t.includes('média') || t.includes('informação')) {
    return 'Método de leitura: 1) Leia o título e a legenda antes dos números; 2) Verifique as unidades dos eixos; 3) Na média aritmética, some todos os valores e divida pelo total de itens.';
  }
  if (t.includes('interpretação') || t.includes('inferência') || t.includes('leitura')) {
    return 'Regra de ouro: Volte ao texto e encontre o trecho que comprova a resposta. Evite alternativas que extrapolam (afirmam mais do que o texto diz) ou que são opiniões fora do tema.';
  }
  if (t.includes('figura') || t.includes('metáfora') || t.includes('ironia')) {
    return 'Guia de figuras: Metáfora = sentido figurado direto; Comparação = usa termo comparativo (“como”); Ironia = diz o inverso com tom crítico; Hipérbole = exagero intencional; Personificação = atributos humanos a animais ou objetos.';
  }
  if (t.includes('coesão') || t.includes('conjunção') || t.includes('relação')) {
    return 'Sentido dos conectivos: “Além disso / e” = adição; “Mas / porém / contudo” = oposição/contraste; “Porque / visto que” = causa; “Portanto / logo” = conclusão; “Embora” = concessão.';
  }
  return isMath 
    ? 'Passo a passo: Destaque os números e a pergunta final. Faça a operação com calma e verifique se o valor encontrado faz sentido prático no contexto do problema.' 
    : 'Passo a passo: Releia a frase no texto, analise o contexto geral e elimine as opções com afirmações exageradas ou fora do tema.';
}

function renderPedagogicFeedback(q, userChoice, isCorrect, showRetry = false) {
  const isM = math.includes(q);
  const correctLetter = String.fromCharCode(65 + q[3]);
  const userLetter = userChoice !== undefined && userChoice !== null ? String.fromCharCode(65 + userChoice) : '';
  const tip = getPedagogicTip(q[0], isM);

  if (isCorrect) {
    return `
      <div class="pedagogic-box correct">
        <div class="pedagogic-header">
          <span class="pedagogic-badge">🎯 Parabéns! Você acertou a questão!</span>
          <span class="pedagogic-topic">${q[0]}</span>
        </div>
        <div class="pedagogic-content">
          <div class="pedagogic-section">
            <h4>💡 Por que a alternativa ${correctLetter} está correta:</h4>
            <div style="background:#f0fdf4; padding:12px 14px; border-radius:10px; border:1px solid #bbf7d0; line-height:1.6;">
              <b>Alternativa correta (${correctLetter}):</b> ${q[2][q[3]]}<br><br>
              ${q[4]}
            </div>
          </div>
          <div class="pedagogic-tip-box">
            <b>⚡ Dica para a prova SESI-RS:</b> ${tip}
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="pedagogic-box wrong">
      <div class="pedagogic-header">
        <span class="pedagogic-badge">❌ Resposta Incorreta · Veja como resolver</span>
        <span class="pedagogic-topic">${q[0]}</span>
      </div>

      <div class="pedagogic-comparison">
        <div class="comparison-card wrong">
          <small>❌ Sua escolha (${userLetter}):</small>
          <div><b>${userLetter}.</b> ${userChoice !== null && userChoice !== undefined ? q[2][userChoice] : 'Não respondeu'}</div>
        </div>
        <div class="comparison-card correct">
          <small>✅ Gabarito Correto (${correctLetter}):</small>
          <div><b>${correctLetter}.</b> ${q[2][q[3]]}</div>
        </div>
      </div>

      <div class="pedagogic-content">
        <div class="pedagogic-section">
          <h4>🧠 Entenda o erro e aprenda a resolver passo a passo:</h4>
          <div style="background:#f8fafc; padding:14px 16px; border-radius:12px; border:1px solid var(--line); line-height:1.6;">
            <b>Resolução explicada:</b><br>
            ${q[4]}
          </div>
        </div>

        <div class="pedagogic-tip-box">
          <b>⚡ Como acertar questões como essa na prova:</b><br>
          ${tip}
        </div>

        ${showRetry ? `
          <div class="pedagogic-actions" style="margin-top:16px;">
            <button class="btn light" id="retryQuestionBtn" style="font-size:0.86rem; padding:9px 16px; border:1px solid var(--blue); color:var(--blue); font-weight:700; cursor:pointer;">
              🔄 Tentar Novamente Esta Questão
            </button>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function bindImmediate(q, id, done) {
  const root = $('#' + id);
  if (!root) return;
  const attachHandlers = () => {
    root.querySelectorAll('.option').forEach(b => {
      b.onclick = () => {
        if (root.dataset.done) return;
        root.dataset.done = '1';
        const c = +b.dataset.choice, ok = c === q[3];
        b.classList.add(ok ? 'correct' : 'wrong');
        root.querySelectorAll('.option')[q[3]].classList.add('correct');
        const f = root.querySelector('.feedback');
        f.classList.remove('hidden');
        f.innerHTML = renderPedagogicFeedback(q, c, ok, !ok);

        if (!ok) {
          const retryBtn = f.querySelector('#retryQuestionBtn');
          if (retryBtn) {
            retryBtn.onclick = () => {
              delete root.dataset.done;
              root.querySelectorAll('.option').forEach(opt => opt.classList.remove('correct', 'wrong'));
              f.classList.add('hidden');
              f.innerHTML = '';
            };
          }
        }

        record(q, c, ok);
        done();
      };
    });
  };
  attachHandlers();
}
function record(q,c,ok){Object.assign(state,window.AKProgress.record(state,progressSession,math.includes(q)?'math':'port',q[0],ok));if(!ok)state.errors.unshift({subject:math.includes(q)?'Matemática':'Português',topic:q[0],question:q[1],chosen:q[2][c],correct:q[2][q[3]],explain:q[4]});save()}
function essay(){
  app.innerHTML=`<div class="shell">
    <div class="section-head">
      <div>
        <span class="eyebrow">Produção textual</span>
        <h1>Escreva com uma estrutura segura.</h1>
        <p>Introdução apresenta a ideia; cada desenvolvimento explica um argumento; a conclusão retoma e fecha o raciocínio.</p>
      </div>
    </div>
    <div class="essay-layout">
      <aside class="card">
        <h3>Escolha uma proposta</h3>
        <div class="prompt-list">
          ${essays.map((x,i)=>`<button class="${i===0?'active':''}" onclick="selectPrompt(this,'${x}')">${i+1}. ${x}</button>`).join('')}
        </div>
        <div class="callout">
          <b>Plano rápido</b><br>
          1. Qual ideia vou defender?<br>
          2. Quais dois argumentos sustentam essa ideia?<br>
          3. Como vou concluir?
        </div>
      </aside>
      <section class="writer">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
          <div>
            <span class="eyebrow" id="essayPrompt" style="margin:0 0 4px 0; display:inline-block;">${essays[0]}</span>
            <h2 style="margin:0;">Meu texto</h2>
          </div>
          <button id="newEssayBtn" class="btn light btn-sm" style="font-size:0.8rem; padding:6px 12px; cursor:pointer;" title="Começar uma nova redação">
            ➕ Novo Texto (Limpar)
          </button>
        </div>
        <textarea id="essayText" placeholder="Comece planejando. Depois escreva com suas próprias palavras...">${state.essay||''}</textarea>
        <div class="counter">
          <span id="wordCount">0 palavras</span>
          <span id="paraCount">0 parágrafos</span>
        </div>
        <div class="checks">
          ${['Introdução','Desenvolvimento 1','Desenvolvimento 2','Conclusão'].map((x,i)=>`<label><input type="checkbox" data-check="${i}" ${state.checks[i]?'checked':''}> ${x}</label>`).join('')}
        </div>
        <div class="actions" style="margin-top:20px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; padding-top:16px; border-top:1px solid var(--line);">
          <button id="saveEssayBtn" class="btn" style="min-width:180px; font-size:0.95rem;">
            💾 Salvar Redação
          </button>
          <span id="essaySaveStatus" class="muted" style="font-size:0.86rem; display:inline-flex; align-items:center; gap:6px;">
            ☁️ Salvo automaticamente
          </span>
        </div>
      </section>
    </div>

    <!-- HISTÓRICO DE REDAÇÕES E PROGRESSÃO -->
    <section class="card" style="margin-top:28px; padding:24px;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:18px;">
        <div>
          <span class="eyebrow" style="color:var(--blue);">Evolução Textual</span>
          <h2 style="margin:4px 0;">📚 Histórico de Redações & Ideias</h2>
          <p class="muted" style="margin:0;">Acompanhe sua evolução ao longo dos treinos, compare versões e recupere rascunhos para continuar aprimorando.</p>
        </div>
        <div id="historyCountBadge" class="score ok" style="font-size:0.85rem; padding:6px 14px;">
          ${(state.essayHistory || []).length} versão(ões) salva(s)
        </div>
      </div>
      <div id="essayHistoryContainer"></div>
    </section>
  </div>`;

  const t = $('#essayText'), saveBtn = $('#saveEssayBtn'), newBtn = $('#newEssayBtn'), statusEl = $('#essaySaveStatus');

  const count = () => {
    const s = t.value.trim();
    $('#wordCount').textContent = `${s ? s.split(/\s+/).length : 0} palavras`;
    $('#paraCount').textContent = `${s ? s.split(/\n\s*\n/).filter(Boolean).length : 0} parágrafos`;
    state.essay = t.value;
    save();
    if (statusEl) {
      statusEl.innerHTML = `<span>⏳</span> Salvando alterações...`;
    }
  };

  t.oninput = count;
  count();
  if (statusEl) statusEl.innerHTML = `<span>☁️</span> Salvo`;

  document.querySelectorAll('[data-check]').forEach(x => x.onchange = () => {
    state.checks[x.dataset.check] = x.checked;
    save();
    if (statusEl) statusEl.innerHTML = `<span>☁️</span> Salvo`;
  });

  // Salvar no Histórico com registro de versão
  if (saveBtn) {
    saveBtn.onclick = async () => {
      const text = t.value.trim();
      if (!text) {
        toast('Escreva seu texto antes de salvar no histórico.');
        return;
      }

      state.essay = t.value;
      state.essayHistory = Array.isArray(state.essayHistory) ? state.essayHistory : [];

      const currentPromptText = document.getElementById("essayPrompt") ? document.getElementById("essayPrompt").textContent : essays[0];
      const wordCount = text.split(/\s+/).filter(Boolean).length;
      const paraCount = text.split(/\n\s*\n/).filter(Boolean).length;
      const now = Date.now();
      const dateStr = new Date(now).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" }) + " às " + new Date(now).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

      const existingIdx = state.essayHistory.findIndex(h => h.text.trim() === text && h.prompt === currentPromptText);
      if (existingIdx !== -1) {
        state.essayHistory[existingIdx].timestamp = now;
        state.essayHistory[existingIdx].dateFormatted = dateStr;
        state.essayHistory[existingIdx].checks = { ...(state.checks || {}) };
      } else {
        state.essayHistory.unshift({
          id: "essay_" + now,
          prompt: currentPromptText,
          text: t.value,
          wordCount,
          paraCount,
          checks: { ...(state.checks || {}) },
          timestamp: now,
          dateFormatted: dateStr
        });
      }

      save();

      if (window.cloudSync && typeof window.cloudSync.flushSave === 'function') {
        saveBtn.disabled = true;
        saveBtn.innerHTML = `<span>⏳ Gravando na nuvem...</span>`;
        await window.cloudSync.flushSave();
      }

      saveBtn.disabled = false;
      saveBtn.style.background = '#15803d';
      saveBtn.innerHTML = `<span>✓ Redação Salva!</span>`;
      if (statusEl) {
        const hora = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        statusEl.innerHTML = `<span>✅</span> Salvo às ${hora}`;
      }
      renderEssayHistory();
      toast('Redação gravada no histórico e salva na nuvem! ☁️');
      setTimeout(() => {
        saveBtn.style.background = '';
        saveBtn.innerHTML = `💾 Salvar Redação`;
      }, 2500);
    };
  }

  // Iniciar nova redação
  if (newBtn) {
    newBtn.onclick = () => {
      const currentText = t.value.trim();
      if (currentText.length > 0) {
        const alreadyInHistory = (state.essayHistory || []).some(h => h.text.trim() === currentText);
        if (!alreadyInHistory) {
          state.essayHistory = state.essayHistory || [];
          state.essayHistory.unshift({
            id: "essay_" + Date.now(),
            prompt: document.getElementById("essayPrompt") ? document.getElementById("essayPrompt").textContent : essays[0],
            text: t.value,
            wordCount: currentText.split(/\s+/).filter(Boolean).length,
            paraCount: currentText.split(/\n\s*\n/).filter(Boolean).length,
            checks: { ...(state.checks || {}) },
            timestamp: Date.now(),
            dateFormatted: new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" }) + " às " + new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
          });
        }
      }

      t.value = '';
      state.essay = '';
      state.checks = {};
      document.querySelectorAll('[data-check]').forEach(x => x.checked = false);
      count();
      renderEssayHistory();
      toast('Editor limpo para nova redação! O texto anterior está salvo no histórico.');
      t.focus();
    };
  }

  renderEssayHistory();
}

function renderEssayHistory(){
  const container = document.getElementById("essayHistoryContainer");
  const badge = document.getElementById("historyCountBadge");
  if (!container) return;

  const history = state.essayHistory || [];
  if (badge) badge.textContent = `${history.length} versão(ões) no histórico`;

  if (!history.length) {
    container.innerHTML = `
      <div style="text-align:center; padding:36px 16px; background:#f8fafc; border-radius:14px; border:1px dashed var(--line); color:var(--muted);">
        <div style="font-size:1.8rem; margin-bottom:8px;">📝</div>
        <b>Nenhuma redação registrada no histórico ainda.</b>
        <p style="font-size:0.9rem; margin-top:4px;">Escreva suas ideias no editor acima e clique no botão <b>"💾 Salvar Redação"</b> para registrar sua progressão aqui!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div style="display:grid; gap:14px;">
      ${history.map(item => {
        const words = item.wordCount || (item.text ? item.text.trim().split(/\s+/).filter(Boolean).length : 0);
        const paras = item.paraCount || (item.text ? item.text.trim().split(/\n\s*\n/).filter(Boolean).length : 0);
        const checksCount = Object.values(item.checks || {}).filter(Boolean).length;
        const dateStr = item.dateFormatted || (item.timestamp ? new Date(item.timestamp).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }) : "Recente");

        return `
          <article style="background:#fff; border:1px solid var(--line); border-radius:14px; padding:18px; box-shadow:0 2px 6px rgba(16,35,63,0.03);">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:10px; margin-bottom:10px;">
              <div>
                <span class="eyebrow" style="color:var(--blue); font-size:0.75rem; margin-bottom:4px; display:inline-block;">Proposta</span>
                <h4 style="margin:0; font-size:1.05rem; color:var(--ink);">${item.prompt || 'Proposta Geral'}</h4>
              </div>
              <div style="font-size:0.82rem; font-weight:700; color:var(--muted); background:#f1f5f9; padding:4px 10px; border-radius:20px;">
                📅 ${dateStr}
              </div>
            </div>

            <div style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:12px; font-size:0.82rem;">
              <span style="background:#edf3ff; color:var(--blue); font-weight:700; padding:4px 10px; border-radius:8px;">
                ✍️ ${words} palavras
              </span>
              <span style="background:#f8fafc; color:var(--ink); font-weight:600; padding:4px 10px; border-radius:8px; border:1px solid var(--line);">
                📑 ${paras} parágrafo(s)
              </span>
              <span style="background:${checksCount === 4 ? '#e9f8f1' : '#f8fafc'}; color:${checksCount === 4 ? '#15803d' : 'var(--muted)'}; font-weight:600; padding:4px 10px; border-radius:8px; border:1px solid var(--line);">
                ${checksCount === 4 ? '✅ Estrutura completa (4/4)' : `⏳ ${checksCount}/4 tópicos`}
              </span>
            </div>

            <details style="background:#f8fafc; border-radius:10px; border:1px solid var(--line); padding:10px 14px; margin-bottom:14px;">
              <summary style="cursor:pointer; font-weight:700; font-size:0.88rem; color:var(--blue); user-select:none;">
                👁️ Visualizar texto completo desta versão (${words} palavras)
              </summary>
              <div style="margin-top:12px; font-size:0.92rem; line-height:1.7; color:var(--ink); white-space:pre-wrap; border-top:1px dashed #cbd5e1; padding-top:10px;">${item.text}</div>
            </details>

            <div style="display:flex; justify-content:flex-end; gap:8px; flex-wrap:wrap;">
              <button class="btn light btn-sm" onclick="window.loadEssayFromHistory('${item.id}')" style="font-size:0.82rem; padding:7px 13px; cursor:pointer;">
                ✏️ Carregar no Editor
              </button>
              <button class="btn light btn-sm" onclick="window.deleteEssayFromHistory('${item.id}')" style="font-size:0.82rem; padding:7px 11px; color:var(--red); cursor:pointer;">
                🗑️ Excluir
              </button>
            </div>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

window.loadEssayFromHistory = function(id) {
  const item = (state.essayHistory || []).find(h => h.id === id);
  if (!item) return;

  const t = document.getElementById("essayText");
  if (!t) return;

  if (t.value.trim().length > 0 && t.value.trim() !== item.text.trim()) {
    if (!confirm("Deseja carregar esta versão no editor? O texto atual será substituído (mas continua seguro no histórico).")) {
      return;
    }
  }

  t.value = item.text || "";
  state.essay = item.text || "";
  state.checks = { ...(item.checks || {}) };

  if (item.prompt) {
    const promptEl = document.getElementById("essayPrompt");
    if (promptEl) promptEl.textContent = item.prompt;
    document.querySelectorAll(".prompt-list button").forEach(b => {
      b.classList.toggle("active", b.textContent.includes(item.prompt));
    });
  }

  document.querySelectorAll("[data-check]").forEach(x => {
    x.checked = !!state.checks[x.dataset.check];
  });

  const s = t.value.trim();
  const wordCountEl = document.getElementById("wordCount");
  const paraCountEl = document.getElementById("paraCount");
  if (wordCountEl) wordCountEl.textContent = `${s ? s.split(/\s+/).length : 0} palavras`;
  if (paraCountEl) paraCountEl.textContent = `${s ? s.split(/\n\s*\n/).filter(Boolean).length : 0} parágrafos`;

  save();
  t.scrollIntoView({ behavior: 'smooth', block: 'center' });
  t.focus();
  toast("Redação carregada no editor!");
};

window.deleteEssayFromHistory = function(id) {
  if (!confirm("Deseja realmente remover esta versão do histórico?")) return;
  state.essayHistory = (state.essayHistory || []).filter(h => h.id !== id);
  save();
  if (window.cloudSync && typeof window.cloudSync.flushSave === 'function') {
    window.cloudSync.flushSave();
  }
  renderEssayHistory();
  toast("Versão removida do histórico.");
};

function selectPrompt(el,text){document.querySelectorAll('.prompt-list button').forEach(x=>x.classList.remove('active'));el.classList.add('active');$('#essayPrompt').textContent=text}
function errors(){
  const count = state.errors.length;
  app.innerHTML = `
    <div class="shell">
      <div class="section-head">
        <div>
          <span class="eyebrow">Caderno de Erros Pedagógico</span>
          <h1>Meus Erros (${count})</h1>
          <p>O segredo para a aprovação é entender o porquê de cada erro e aprender o passo a passo exato para acertar na prova.</p>
        </div>
        ${count ? `
          <div style="display:flex; gap:10px; flex-wrap:wrap;">
            <button class="btn warn" data-go="practice" data-arg="priority">🎯 Treinar Meus Erros</button>
            <button class="btn light" id="clearResolvedErrorsBtn" style="font-size:0.86rem; padding:10px 14px;">🗑️ Limpar Erros</button>
          </div>
        ` : ''}
      </div>

      ${count ? `
        <div style="display:grid; gap:20px;">
          ${state.errors.slice(0, 30).map((e, idx) => {
            const isM = e.subject === 'Matemática';
            const tip = getPedagogicTip(e.topic, isM);
            return `
              <article class="question" style="border-left: 5px solid var(--red); padding:24px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; flex-wrap:wrap; gap:8px;">
                  <span class="eyebrow" style="color:var(--red); font-weight:800;">${idx + 1}. ${escapeHTML(e.subject)} · ${escapeHTML(e.topic)}</span>
                </div>
                <h3 style="margin-top:0; font-size:1.08rem; line-height:1.5;">${escapeHTML(e.question)}</h3>

                <div class="pedagogic-comparison" style="border-radius:12px; margin: 16px 0;">
                  <div class="comparison-card wrong">
                    <small>❌ Sua Escolha Marcada:</small>
                    <div>${escapeHTML(e.chosen)}</div>
                  </div>
                  <div class="comparison-card correct">
                    <small>✅ Gabarito Correto:</small>
                    <div>${escapeHTML(e.correct)}</div>
                  </div>
                </div>

                <div style="background:#f8fafc; border:1px solid var(--line); border-radius:12px; padding:16px; margin-top:14px; line-height:1.6;">
                  <h4 style="margin:0 0 8px; color:var(--ink); font-size:0.95rem; display:flex; align-items:center; gap:6px;">
                    💡 Resolução Comentada & Como Fazer:
                  </h4>
                  <div style="color:#334155; font-size:0.92rem;">${e.explain}</div>
                </div>

                <div class="pedagogic-tip-box" style="margin-top:12px;">
                  <b>⚡ Dica do Professor para a Prova SESI-RS:</b> ${tip}
                </div>
              </article>
            `;
          }).join('')}
        </div>
      ` : `
        <div class="empty">
          <h2>Nenhum erro registrado ainda! 🎉</h2>
          <p>Quando você praticar ou fizer simulados e errar alguma questão, a explicação completa passo a passo ficará guardada aqui para você revisar.</p>
          <button class="btn" data-go="practice">Começar a Praticar</button>
        </div>
      `}
    </div>
  `;

  const clearBtn = document.getElementById('clearResolvedErrorsBtn');
  if (clearBtn) {
    clearBtn.onclick = () => {
      if (!confirm('Deseja zerar o caderno de erros para recomeçar seus treinos?')) return;
      state.errors = [];
      save();
      errors();
      toast('Caderno de erros limpo!');
    };
  }
}
function progress(){const rate=state.answered?Math.round(state.correct/state.answered*100):0;const essayP=Math.min(100,(state.essay.trim().split(/\s+/).filter(Boolean).length>=120?60:20)+Object.values(state.checks).filter(Boolean).length*10);const weak=Object.entries(state.topics).filter(([,v])=>v.c/v.a<.6).map(([k])=>k);const strong=Object.entries(state.topics).filter(([,v])=>v.a>0&&v.c/v.a>=.8).map(([k])=>k);app.innerHTML=`<div class="shell"><div class="section-head"><div><span class="eyebrow">Meu progresso</span><h1>O próximo passo está claro.</h1><p>A prioridade é reduzir erros nos assuntos mais frágeis, não completar tudo.</p></div></div><div class="metric-grid">${[['Questões',state.answered],['Acertos',state.correct],['Erros',state.answered-state.correct],['Taxa de acerto',rate+'%']].map(x=>`<div class="card"><small>${x[0]}</small><div class="stat">${x[1]}</div></div>`).join('')}</div><div class="grid" style="margin-top:16px">${[['Matemática',subjectRate(math)],['Português',subjectRate(port)],['Produção textual',essayP],['Socioemocional',state.completed.includes('socio')?100:0]].map(x=>`<div class="card"><h3>${x[0]}</h3><div class="stat">${x[1]}%</div><div class="progressbar"><i style="width:${x[1]}%"></i></div></div>`).join('')}</div><div class="grid" style="margin-top:16px"><div class="card span2"><h3>Assuntos dominados</h3><p>${strong.join(' · ')||'Continue praticando para identificar seus pontos fortes.'}</p></div><div class="card span2"><h3>Precisam de revisão</h3><p>${weak.join(' · ')||'Nenhuma prioridade detectada por enquanto.'}</p><button class="btn" data-go="practice" data-arg="priority">Estudar o que mais preciso</button></div></div></div>`}
function subjectRate(pool){const stats=state.subjects[pool===math?'math':'port']||{a:0,c:0};return stats.a?Math.round(stats.c/stats.a*100):0}
function socioPage(i=0){if(i>=socio.length){if(!state.completed.includes('socio'))state.completed.push('socio');save();return app.innerHTML=`<div class="shell"><div class="empty"><span class="eyebrow">Concluído</span><h1>Você analisou 15 situações.</h1><p>Não existe uma personalidade “certa”. O importante é considerar consequências, comunicar-se e agir com responsabilidade.</p><button class="btn" data-go="progress">Ver progresso</button></div></div>`}app.innerHTML=`<div class="shell"><div class="situation"><div class="stepper">${socio.map((_,n)=>`<i class="${n<i?'done':''}"></i>`).join('')}</div><span class="eyebrow">Situação ${i+1} de ${socio.length}</span><h1>${socio[i]}</h1><p class="muted">Esta etapa avalia decisões em uma narrativa gamificada. Autoconhecimento e resolução de problemas têm maior peso.</p><div class="options"><button class="option" onclick="socioFeedback(${i},this)">Paro, entendo o problema e converso com as pessoas envolvidas antes de agir.</button><button class="option" onclick="socioFeedback(${i},this)">Escolho a solução mais rápida sem consultar ninguém.</button><button class="option" onclick="socioFeedback(${i},this)">Ignoro a situação e espero que outra pessoa resolva.</button></div><div class="feedback hidden" id="socioF"><b>Antes de decidir, considere:</b><br>Consequências · comunicação · responsabilidade · colaboração · recursos disponíveis · controle emocional.<div class="actions"><button class="btn" onclick="socioPage(${i+1})">Próxima situação</button></div></div></div></div>`}
function socioFeedback(i,el){document.querySelectorAll('.situation .option').forEach(x=>x.classList.remove('selected'));el.classList.add('selected');$('#socioF').classList.remove('hidden')}
function officialExam(){const official=questionBank.officialExam;if(!official||!Array.isArray(official)||official.length!==40)return toast('Caderno oficial de 40 questões não carregado.');quizMode('Simulado Oficial SESI/SENAI 2025',official,true)}
function challenge(){quizMode('Desafio de 10 minutos',[...drawUnseen(math,3,'challenge-math'),...drawUnseen(port,3,'challenge-port')],false)}
function simulation(){quizMode('Simulado Final',[...drawUnseen(math,20,'simulation-math'),...drawUnseen(port,20,'simulation-port')],true)}
function quizMode(title,set,sim){let answers={};app.innerHTML=`<div class="shell"><div class="section-head"><div><span class="eyebrow">${sim?'Sem respostas durante a prova':'Rodada rápida'}</span><h1>${title}</h1><p>${sim?(set.length===40?'40 questões no padrão real da prova (20 Português + 20 Matemática).':'20 questões de Matemática, 20 de Português e proposta textual.'):'3 questões de Matemática e 3 de Português.'}</p></div></div><form id="quiz">${set.map((q,n)=>`<article class="question"><span class="eyebrow">${math.includes(q)?'Matemática':'Língua Portuguesa'} · ${q[0]}</span><h3>Questão ${n+1}. ${q[1]}</h3><div class="options">${q[2].map((o,i)=>`<label class="option"><input type="radio" name="q${n}" value="${i}"> ${String.fromCharCode(65+i)}. ${o}</label>`).join('')}</div></article>`).join('')}${sim?`<article class="question"><span class="eyebrow">Produção Textual</span><h3>Proposta: ${essays[Math.floor(Math.random()*essays.length)]}</h3><p>Faça o texto na área de redação. Ele precisa ser avaliado separadamente.</p></article>`:''}<button class="btn" type="submit">Finalizar e ver resultado</button></form></div>`;$('#quiz').onsubmit=e=>{e.preventDefault();let complete=true;set.forEach((q,n)=>{const x=e.target.elements['q'+n];if(!x.value)complete=false;else answers[n]=+x.value});if(!complete)return toast('Responda todas as questões antes de finalizar.');let mc=0,pc=0;set.forEach((q,n)=>{const ok=answers[n]===q[3];if(ok)(math.includes(q)?mc++:pc++);record(q,answers[n],ok)});showResult(title,set,mc,pc,sim,answers)}}
function showResult(title,set,mc,pc,sim,answers){const mtotal=set.filter(x=>math.includes(x)).length,ptotal=set.length-mtotal;const wrong=set.filter((q,i)=>{const e=state.errors.find(x=>x.question===q[1]);return !!e}).map(q=>q[0]);const totalScore=mc+pc,totalQ=set.length;const overallRate=Math.round((totalScore/totalQ)*100);app.innerHTML=`<div class="shell"><div class="subject-head"><span class="eyebrow" style="color:#72ddec">Resultado Geral</span><h1>${title}</h1><p>Você acertou <b>${totalScore} de ${totalQ} questões</b> (${overallRate}% de aproveitamento geral).</p></div><div class="grid"><div class="card span2"><small>Matemática</small><div class="stat">${mc} / ${mtotal}</div><span class="score ${mc/mtotal>=.5?'ok':'bad'}">${mc/mtotal>=.5?'Acima do corte (50%)':'Atenção: abaixo de 50%'}</span></div><div class="card span2"><small>Língua Portuguesa</small><div class="stat">${pc} / ${ptotal}</div><span class="score ${pc/ptotal>=.5?'ok':'bad'}">${pc/ptotal>=.5?'Acima do corte (50%)':'Atenção: abaixo de 50%'}</span></div></div><article class="card" style="margin-top:16px"><h3>Diagnóstico pedagógico</h3><p>${wrong.length?'<b>Pontos para reforçar:</b> '+[...new Set(wrong)].join(' · '):'Excelente desempenho! Nenhum erro registrado nesta rodada.'}</p><div class="actions">${answers?'<button class="btn" id="toggleReviewBtn">🔍 Ver Gabarito & Resoluções</button>':''}<button class="btn ghost" data-go="practice" data-arg="priority">Estudar somente o que errei</button>${sim?'<button class="btn ghost" data-go="essay">Fazer a redação</button>':'<button class="btn ghost" data-go="challenge">Outra rodada</button>'}<button class="btn ghost" data-go="home">Início</button></div></article>${answers?`<section id="reviewSection" class="hidden" style="margin-top:24px"><div class="section-head"><div><span class="eyebrow">Revisão Detalhada</span><h2>Gabarito Comentado (${totalQ} Questões)</h2><p>Confira a alternativa assinalada, a resposta oficial e a resolução comentada.</p></div></div><div style="display:grid; gap:16px;">${set.map((q,n)=>{const userChoice=answers[n],isCorrect=userChoice===q[3];return `<article class="question" style="border-left:5px solid ${isCorrect?'var(--green)':'var(--red)'};"><span class="eyebrow">${math.includes(q)?'Matemática':'Língua Portuguesa'} · ${q[0]}</span><h3>Questão ${n+1}. ${q[1]}</h3><div class="options">${q[2].map((o,i)=>{let cls='option',mark='';if(i===q[3]){cls+=' correct';mark=' ✅ (Gabarito Oficial)'}if(i===userChoice&&!isCorrect){cls+=' wrong';mark=' ❌ (Sua resposta)'}else if(i===userChoice&&isCorrect){mark=' 🎯 (Você acertou)'}return `<div class="${cls}"><b>${String.fromCharCode(65+i)}.</b> ${o} <span style="font-weight:700;">${mark}</span></div>`}).join('')}</div>${renderPedagogicFeedback(q,userChoice,isCorrect,false)}</article>`}).join('')}</div></section>`:''}</div>`;if(answers){const btn=document.getElementById('toggleReviewBtn'),sec=document.getElementById('reviewSection');if(btn&&sec){btn.onclick=()=>{sec.classList.toggle('hidden');btn.textContent=sec.classList.contains('hidden')?'🔍 Ver Gabarito & Resoluções':'🔼 Ocultar Gabarito';if(!sec.classList.contains('hidden'))sec.scrollIntoView({behavior:'smooth'})}}}}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function drawUnseen(pool,count,key){let seen=new Set(state.seen[key]||[]);let available=pool.filter(q=>!seen.has(q[1]));if(available.length<count){seen=new Set();available=[...pool]}const picked=shuffle(available).slice(0,count);state.seen[key]=[...seen,...picked.map(q=>q[1])];save();return picked}
function finalReview(){const own=state.errors.slice(0,6).map(e=>e.topic);app.innerHTML=`<div class="shell"><div class="section-head"><div><span class="eyebrow">Sábado à noite · 30–45 min</span><h1>Revisão Final</h1><p>Somente fórmulas, estratégias e os erros que apareceram durante o estudo.</p></div></div><article class="card"><ul class="review-list"><li><b>Porcentagem:</b> parte = total × taxa ÷ 100.</li><li><b>Regra de três:</b> organize grandezas na mesma ordem.</li><li><b>Equações:</b> faça a mesma operação nos dois lados.</li><li><b>Perímetro:</b> soma dos lados. <b>Área do retângulo:</b> base × altura.</li><li><b>Pitágoras:</b> a² + b² = c² no triângulo retângulo.</li><li><b>Interpretação:</b> volte ao texto e procure evidências.</li><li><b>Argumentação:</b> tese é a ideia; argumento é a razão.</li><li><b>Figuras:</b> metáfora (sentido figurado), comparação (como), ironia (contraste), hipérbole (exagero), personificação (ação humana).</li><li><b>Redação:</b> introdução + argumento 1 + argumento 2 + conclusão.</li><li><b>Meus erros:</b> ${own.join(', ')||'nenhum registrado ainda'}.</li></ul><div class="actions"><button class="btn" data-go="errors">Rever meus erros</button><button class="btn ghost" data-go="beforeTest">Ver preparação de domingo</button></div></article></div>`}
function beforeTest(){app.innerHTML=`<div class="shell"><div class="section-head"><div><span class="eyebrow">Domingo · 10 minutos</span><h1>Antes da prova</h1><p>Sem conteúdo novo. Respire, leia com atenção e use o que já treinou.</p></div></div><div class="topic-grid">${[['Matemática',['Leia o problema inteiro','Identifique os dados e a pergunta','Monte a operação','Confira a resposta']],['Português',['Leia primeiro o texto','Procure evidências','Separe explícito de inferência','Observe autor e objetivo']],['Produção textual',['Planeje antes de escrever','Faça introdução e argumentos','Conclua o raciocínio','Releia antes de entregar']],['Socioemocional',['Entenda o problema','Considere alternativas','Pense nas consequências','Responda com coerência']]].map(x=>`<article class="lesson"><span class="eyebrow">${x[0]}</span><ul>${x[1].map(y=>`<li>${y}</li>`).join('')}</ul></article>`).join('')}</div></div>`}
home();
