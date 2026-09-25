(function () {
  'use strict';

  // Banco de Questões Mestre - Intensivo SESI/SENAI RS 2026
  // Versão: 1.7.0 (Total: 340 questões - 170 Português + 170 Matemática)
  // Inclui as 40 questões originais do Caderno Inova Médio 2025 + 300 questões de alta profundidade

  const officialPort = [
  [
    "Enfoque jornalístico",
    "Considere as seguintes manchetes sobre um mesmo acontecimento esportivo:\n\nManchete 1: “Equipe local conquista vitória histórica nos últimos minutos da partida.”\nManchete 2: “Time visitante sofre derrota devastadora nos acréscimos.”\n\nComparando as manchetes, é correto afirmar que:",
    [
      "A manchete 1 enfatiza a vitória da equipe local, enquanto a manchete 2 enfatiza a derrota do time visitante.",
      "Ambas as manchetes enfatizam a vitória da equipe local.",
      "A manchete 2 enfatiza a vitória da equipe local, enquanto a manchete 1 enfatiza a derrota do time visitante.",
      "Ambas as manchetes enfatizam a derrota do time visitante.",
      "As duas manchetes são neutras, usando a imparcialidade necessária ao texto jornalístico."
    ],
    0,
    "A manchete 1 adota o ponto de vista positivo da conquista da equipe mandante ('vitória histórica'), enquanto a manchete 2 foca o revés do visitante ('derrota devastadora')."
  ],
  [
    "Efeito de sentido de pontuação",
    "Leia o período abaixo e responda à pergunta:\n\n“O cachorro da vizinha destruiu, mais uma vez, meu jardim.”\n\nQual é o efeito de sentido decorrente do uso da vírgula no texto?",
    [
      "Alegria pela destruição do jardim",
      "Surpresa com a destruição do jardim",
      "Frustração pela destruição do jardim",
      "Tristeza pelo fato inesperado da destruição do jardim",
      "Indiferença em relação à destruição do jardim"
    ],
    2,
    "A expressão intercalada entre vírgulas 'mais uma vez' enfatiza a reincidência incômoda do fato, expressando o sentimento de frustração do narrador."
  ],
  [
    "Relação lógico-discursiva",
    "Leia o texto abaixo e responda à pergunta:\n\n“O aquecimento global é uma preocupação crescente em todo o mundo. Muitos cientistas alertam que as atividades humanas, como queima de combustíveis fósseis e desmatamento, estão acelerando o aumento da temperatura do planeta. Além disso, o derretimento das calotas polares e o aumento do nível do mar são consequências alarmantes desse fenômeno.”\n\nA conjunção “além disso” estabelece que tipo de relação lógico-discursiva no texto acima?",
    [
      "Causa.",
      "Oposição.",
      "Adição.",
      "Comparação.",
      "Consequência."
    ],
    2,
    "O conector 'Além disso' introduz um argumento aditivo, somando novas consequências (derretimento e aumento do nível do mar) às já mencionadas."
  ],
  [
    "Inferência narrativa",
    "\"Juliana era uma jovem apaixonada por livros e, desde pequena, cultivava o hábito da leitura. Certo dia, ao folhear um livro antigo que encontrou na biblioteca da escola, ela se deparou com um bilhete escondido entre as páginas. O bilhete, escrito à mão, era cheio de palavras de carinho e parecia muito especial. Juliana guardou o bilhete consigo e passou dias pensando em quem poderia ter escrito aquelas palavras.\"\n\nCom base no trecho, qual foi a reação de Juliana ao encontrar o bilhete?",
    [
      "Ela não deu importância ao bilhete.",
      "Ela ignorou as palavras do bilhete.",
      "Ela ficou intrigada, mas não se emocionou.",
      "Ela ficou irritada ao encontrar o bilhete.",
      "Ela foi tocada pelas palavras do bilhete e refletiu sobre ele."
    ],
    4,
    "O texto afirma que o bilhete era especial, que ela o guardou consigo e passou dias pensando sobre ele, demonstrando que foi tocada e refletiu sobre a mensagem."
  ],
  [
    "Texto argumentativo e ideia central",
    "A revolução digital tem transformado radicalmente a forma como vivemos, trabalhamos e nos relacionamos. A ascensão da internet e o desenvolvimento de novas tecnologias têm proporcionado inúmeras facilidades e oportunidades, mas também trazem desafios e questões éticas.\nNa era da informação, o acesso rápido e fácil aos dados é uma realidade, e as redes sociais têm se tornado plataformas poderosas de comunicação e interação social. Por outro lado, a dependência excessiva da tecnologia pode levar ao isolamento social e à falta de privacidade, além de gerar desigualdades entre aqueles que têm acesso à tecnologia e aqueles que não têm. Outra questão importante é o impacto da inteligência artificial e da automação no mercado de trabalho. Muitos empregos têm sido substituídos por máquinas e algoritmos, o que pode gerar desemprego e mudanças significativas nas dinâmicas econômicas e sociais.\nPortanto, é fundamental refletir sobre o papel da tecnologia em nossas vidas e encontrar maneiras de utilizá-la de forma consciente e responsável. A educação digital e a conscientização sobre os desafios e oportunidades da era digital são essenciais para que possamos enfrentar os desafios do mundo contemporâneo com sabedoria e equilíbrio.\n\nSegundo o texto, qual é a importância da educação digital na era contemporânea?",
    [
      "Enfrentar os desafios do mundo contemporâneo com equilíbrio.",
      "Refletir sobre o papel da tecnologia e suas consequências.",
      "Garantir o acesso rápido e fácil aos dados.",
      "Proporcionar facilidades e oportunidades na era da informação.",
      "Resolver os problemas éticos causados pela inteligência artificial e automação."
    ],
    0,
    "No último parágrafo, o texto conclui expressamente que a educação digital e a conscientização são essenciais 'para que possamos enfrentar os desafios do mundo contemporâneo com sabedoria e equilíbrio'."
  ],
  [
    "Localização de informações",
    "A tecnologia tem avançado rapidamente, trazendo consigo inúmeras facilidades e transformações em diversos setores da sociedade. O uso de dispositivos móveis, por exemplo, facilita a comunicação e o acesso à informação de forma instantânea. Contudo, esse avanço tecnológico também suscita preocupações sobre os impactos negativos, especialmente nas novas gerações. O uso excessivo de dispositivos eletrônicos pode levar ao isolamento social, prejudicar a concentração e até mesmo afetar a saúde física e mental dos indivíduos. A dependência da tecnologia também pode gerar problemas na educação, à medida que muitos estudantes passam horas conectados em detrimento dos estudos e da interação presencial com colegas e professores. Nesse contexto, é fundamental que a sociedade busque um equilíbrio saudável entre o uso da tecnologia e as interações sociais no mundo real. A conscientização sobre os efeitos do uso excessivo da tecnologia, a promoção de hábitos saudáveis e a valorização do contato humano são medidas essenciais para garantir uma convivência equilibrada e proveitosa no mundo digital.\n\nSegundo o texto, quais são as preocupações relacionadas ao avanço tecnológico?",
    [
      "O isolamento social e os impactos na saúde física.",
      "A falta de acesso à informação de forma instantânea.",
      "A dependência da tecnologia na educação.",
      "A conscientização sobre os efeitos positivos da tecnologia.",
      "O excesso de interação social no mundo digital."
    ],
    0,
    "O texto cita nominalmente como riscos e preocupações o fato de o uso excessivo 'levar ao isolamento social, prejudicar a concentração e até mesmo afetar a saúde física e mental dos indivíduos'."
  ],
  [
    "Poema visual e expressividade gráfica",
    "Considere a estrutura do poema 'Pedra Solidão':\n\nCantava o pássaro e voava\n        cantava para lá\nvoava pra cá\nvoava o pássaro e cantava\nde\n  repente\n      um\n        tiro\n          seco\n\nA disposição das últimas palavras desse texto sugere:",
    [
      "Dor.",
      "Giro.",
      "Queda.",
      "Volta.",
      "Ascensão."
    ],
    2,
    "A disposição em escada descendente ('de / repente / um / tiro / seco') constrói visualmente a trajetória de queda do pássaro alvejado."
  ],
  [
    "Coesão referencial",
    "Leia o texto abaixo:\n\nA herança\nTenho muito carinho pelo meu telefone fixo. E isso desde os tempos em que ele não era chamado de telefone fixo, mas apenas de telefone. Embora eu perceba que ele não seja lá tão fixo assim, já que circula com desenvoltura pela casa toda.\nMeu pai não foi homem de muitas posses [...] nunca comprou nada, com raras exceções, nada que pudesse ficar, por exemplo, como herança. Entre as exceções, havia um telefone. [...] Era isso que eu queria dizer. Ganhei de herança do meu pai um telefone. (...)\nE é essa linha que eu vejo agora vivendo seus últimos dias. De pouco me serve aquele telefone fixo. Amigos, colegas, parentes, propostas de trabalho, chateações de telemarketing – tudo chega a mim pelo telefone celular.\n(XEXEO, Artur. Revista O Globo, n. 316, 15 ago. 2010)\n\nNo trecho “E isso desde os tempos em que...”, o pronome destacado retoma o trecho:",
    [
      "“Tenho muito carinho pelo meu telefone fixo.”",
      "“… os tempos em que ele não era chamado de telefone fixo”.",
      "“Embora eu perceba que ele não seja lá tão fixo assim”.",
      "“ já que circula com desenvoltura pela casa toda.”.",
      "“Meu pai não foi homem de muitas posses”."
    ],
    0,
    "O pronome demonstrativo anafórico 'isso' sintetiza e retoma o sentimento expresso na oração anterior: 'Tenho muito carinho pelo meu telefone fixo'."
  ],
  [
    "Compreensão de poesia lírica",
    "Leia o texto para responder a questão abaixo:\n\nDois e Dois são Quatro\nComo dois e dois são quatro\nSei que a vida vale a pena\nEmbora o pão seja caro\nE a liberdade pequena\nComo teus olhos são claros\nE a tua pele, morena\ncomo é azul o oceano\nE a lagoa, serena\nComo um tempo de alegria\nPor trás do terror me acena\nE a noite carrega o dia\nNo seu colo de açucena\n— sei que dois e dois são quatro\nsei que a vida vale a pena\nmesmo que o pão seja caro\ne a liberdade pequena.\n(Ferreira Gullar)\n\nA repetição da expressão “como dois e dois são quatro” no primeiro verso das estrofes 1 e 4 e no título do poema reforça a ideia de:",
    [
      "Esperança frente às dificuldades da vida.",
      "Certeza absoluta de que vale a pena viver.",
      "Facilidade para conseguir o pão de cada dia.",
      "Certeza da necessidade de lutar pela liberdade.",
      "Aceitação passiva das dificuldades da vida."
    ],
    1,
    "A verdade matemática inquestionável ('dois e dois são quatro') é utilizada como metáfora para exprimir a certeza inabalável do eu lírico de que 'a vida vale a pena', superando as carências materiais e políticas."
  ],
  [
    "Referenciação e pronomes",
    "Leia o texto abaixo:\n\nOs animais vivem se mexendo\nHá animais que batem as asas e conseguem se mover no ar.\nO gavião voa alto, calmo, olhando lá de cima o que está no chão. De repente, muda o voo e mergulha no ar para agarrar o que comer. A borboleta voa um pouco e pousa aqui, voa mais um pouco e pousa ali, voa de novo e pousa cá, mais um pouquinho e pousa lá. O beija-flor voa de flor em flor e bate tão depressa as asas que pode até parar no ar. A libélula quando voa parece planar, suas asinhas vibram sobre as águas tranquilas.\n(FERREIRA, Marina Baird. Os animais vivem se mexendo. In: O Aurélio com a turma da Mônica. Rio de Janeiro: Nova Fronteira)\n\nNo Texto, no trecho “...suas asinhas vibram sobre as águas tranquilas.”, a expressão destacada indica que as asinhas pertencem:",
    [
      "Ao gavião.",
      "À borboleta.",
      "Ao beija-flor.",
      "À libélula.",
      "À borboleta e à libélula."
    ],
    3,
    "O pronome possessivo 'suas' refere-se ao termo antecedente imediato da mesma oração coordenada: 'A libélula quando voa parece planar, suas asinhas vibram...'."
  ],
  [
    "Gênero notícia e informação pontual",
    "GOVERNO PRETENDE RETIRAR 900 BRASILEIROS DE ISRAEL ATÉ SÁBADO\n\nDuas aeronaves já deixaram o Brasil em direção a Tel Aviv. O governo brasileiro estima retirar 900 brasileiros de terça-feira (10) até sábado (14) que estão em Israel e na Palestina, informou o comandante da Aeronáutica, Marcelo Damasceno.\nDe acordo com o Itamaraty, a prioridade é a repatriação de quem mora no Brasil ou não tem passagem aérea de volta. Até o momento, 1,7 mil brasileiros manifestaram interesse em retornar ao Brasil, em razão do conflito entre Israel e o grupo Hamas iniciado no fim de semana. A maioria é de turista que está em Israel. Três brasileiros continuam desaparecidos.\n\"Face à incerteza quanto ao momento em que poderão ocorrer os voos de repatriação, o Ministério das Relações Exteriores reitera recomendação de que todos os nacionais que possuam passagens aéreas, ou que tenham condições de adquiri-las, embarquem em voos comerciais do aeroporto Ben-Gurion, que continua a operar\", diz nota divulgada pelo Ministério das Relações Exteriores.\n(Agência Brasil)\n\nSegundo o texto, o Ministério das Relações Exteriores recomenda aos brasileiros que possuem passagens aéreas que:",
    [
      "no momento, não embarquem em voos comerciais.",
      "aguardem a chegada das aeronaves do governo.",
      "utilizem voos comerciais a partir do aeroporto Ben-Gurion.",
      "procurem abrigo em Israel até a situação se estabilizar.",
      "evitem zonas de conflito até segunda ordem do governo."
    ],
    2,
    "O texto transcreve a nota oficial orientando que quem possua passagens 'embarquem em voos comerciais do aeroporto Ben-Gurion, que continua a operar'."
  ],
  [
    "Ideia central em artigo de opinião",
    "DESPERDÍCIO DE ALIMENTOS: UM PROBLEMA GLOBAL\n\nOs alimentos são desperdiçados em toda a cadeia alimentar, desde a produção agrícola, que inclui a superprodução sazonal e o manejo inadequado das rotas de venda de alimentos frescos, especialmente frutas, vegetais e peixe, até o lixo doméstico, que transforma os alimentos em resíduos. Este não é apenas um problema econômico, mas também um problema ecológico. […]\nEmbora os percentuais de perdas variem de país para país, os resultados são preocupantes e exigem ações coordenadas a serem tomadas e implementadas a fim de reverter a situação. A ordem de prioridade proposta pela FAO dá uma hierarquia de ações com um grau de coerência: prevenção, aproveitamento, reciclagem, substituição, incineração de resíduos com recuperação de energia e eliminação sem recuperação de energia. […] O desperdício de alimentos é um grave problema mundial que precisa ser enfrentado e que deve levar à geração de círculos virtuosos para transformar a perda em uso.\nPortanto, o combate ao desperdício é uma tarefa de todos. E nós temos a oportunidade de sermos protagonistas nesse desafio. Já é comum vermos ONGs, empresas e instituições dedicadas a essa causa, mas somente elas, não são suficientes. Precisamos do envolvimento coletivo de toda a sociedade. Afinal, se cada um colaborar com a sua parte, no seu dia a dia, podemos fazer a diferença e ter um mundo mais sustentável.\n\nA ideia central do texto está em:",
    [
      "“Este não é apenas um problema econômico, mas também um problema ecológico.”",
      "“A ordem de prioridade proposta pela FAO dá uma hierarquia de ações com um grau de coerência...”",
      "“... os resultados são preocupantes e exigem ações coordenadas a serem tomadas...”",
      "“Os alimentos são desperdiçados em toda a cadeia alimentar, desde a produção agrícola...”",
      "“Precisamos do envolvimento coletivo de toda a sociedade.”"
    ],
    4,
    "A tese e conclusão principal do texto é o apelo à responsabilidade compartilhada e à mobilização conjunta ('Precisamos do envolvimento coletivo de toda a sociedade')."
  ],
  [
    "Tema principal de texto informativo",
    "DOMO DE FERRO: COMO FUNCIONA O ESCUDO ANTIMÍSSIL ISRAELENSE\n\nEm meio a tensões crescentes no Oriente Médio, as forças militares de Israel informaram que parte dos ataques do Hamas foi interceptado pelo Domo de Ferro, um robusto sistema de defesa antimíssil desenvolvido pelo país. Dos cerca de 1.050 mísseis e morteiros disparados, 850 foram interceptados pelo Domo de Ferro desde sábado, 7.\nDiversas imagens e vídeos mostram a capacidade do sistema, revelando como ele destrói diversos mísseis no ar simultaneamente e impede que caiam em áreas civis. Para chegar nesse nível de precisão, foram necessários anos de desenvolvimento. O início das pesquisas para a instalação de um sistema de defesa aérea remonta a mais de 35 anos, quando Israel firmou parceria com os Estados Unidos em um projeto de defesa estratégica.\nO \"Domo de Ferro\", como é conhecido hoje, começou a ser desenvolvido em 2007 pela Rafael Advanced Defense Systems e a Israel Aerospace Industries. Após passar por inúmeros testes, o sistema tornou-se operacional em março de 2011. Em abril do mesmo ano, demonstrou sua eficácia ao derrubar um míssil direcionado a uma cidade israelense.\n\nQual é o tema principal abordado no texto?",
    [
      "A origem das tensões militares no Oriente Médio.",
      "A eficácia do Domo de Ferro na interceptação de mísseis.",
      "O alto custo de fabricação dos mísseis das forças israelitas.",
      "O envolvimento dos EUA no desenvolvimento do Domo de Ferro.",
      "A crescente ameaça marinha causada por terroristas."
    ],
    1,
    "O texto detalha o funcionamento, as taxas de sucesso (850 de 1.050) e o histórico de testes que comprovam a eficácia do sistema antimíssil."
  ],
  [
    "Níveis de linguagem",
    "Dia do professor, 15 de outubro\n\nO Dia do professor, em 15 de outubro, presta homenagem aos profissionais que contribuem para a formação e desenvolvimento das pessoas. A data recorda o decreto de Dom Pedro I, em 15 de outubro de 1827. Esse decreto resultou na criação da Escola de Primeiras Letras, ou seja, na educação em nível básico no país. Em 1963, o Decreto nº 52.682, de 14 de outubro oficializou o Dia do professor como feriado escolar nacional.\n(Fonte: Toda Matéria)\n\nO nível de linguagem predominante do texto é:",
    [
      "científica.",
      "técnica.",
      "coloquial.",
      "padrão.",
      "informal."
    ],
    3,
    "O texto emprega a norma-padrão da língua portuguesa, com correção gramatical, vocabulário objetivo e acessível, sem termos técnicos restritos nem gírias."
  ],
  [
    "Humor e linguagem não-verbal",
    "Na tirinha de Peanuts, Charlie Brown liga para Violet para avisar: 'Estou atrasado para a festa da Violet... Acho melhor ligar e avisar que vou chegar mais tarde...'. Ao atender, a garota responde: 'Ah, você ainda não chegou, Charlie Brown? A gente nem percebeu!'. No último quadrinho, Charlie Brown caminha desolado e conclui: 'É assim que as coisas são...'.\n\nConsiderando os diálogos da tirinha, qual é a técnica de humor predominante utilizada pelo autor para criar um efeito cômico?",
    [
      "O sarcasmo evidenciado pela resposta da garota à ligação de Charlie.",
      "A indiferença destacada pela personagem ao atraso de Charlie Brown.",
      "O exagero demonstrado pela surpresa da garota com o atraso dele.",
      "A ambiguidade na conclusão de Charlie sobre como as coisas são.",
      "O fato de o personagem terminar a história sozinho e sem amigos."
    ],
    1,
    "O efeito cômico advém da quebra de expectativa provocada pela indiferença sincera dos colegas na festa ('a gente nem percebeu que você não estava'), contrastando com a preocupação do protagonista em avisar."
  ],
  [
    "Sintaxe do período simples",
    "Sintaxe é a parte da gramática que estuda a relação entre as palavras e a estrutura das frases, orações e períodos. Ela é fundamental para a construção e leitura de textos, pois é responsável por dar sentido e ordem às palavras. Considerando essa definição, analise o seguinte trecho de uma narrativa literária:\n\n'Entregou ao carteiro um lindo cartão escrito à mão'.\n\nIdentifique a alternativa que contém a correta classificação para o termo 'ao carteiro', levando em consideração sua função sintática na estrutura da oração mencionada.",
    [
      "Adjunto adnominal.",
      "Complemento nominal.",
      "Objeto direto.",
      "Objeto indireto.",
      "Predicativo do objeto."
    ],
    3,
    "O verbo 'entregar' é transitivo direto e indireto (quem entrega, entrega algo a alguém). 'Um lindo cartão...' é o objeto direto e 'ao carteiro' é o objeto indireto preposicionado."
  ],
  [
    "Sinais de pontuação e diálogo",
    "Na tirinha de Armandinho, o menino diz: 'Pai, decidi abrir o meu negócio! Você me ajuda?'. O pai responde: 'Filha, acho lindo... mas para abrir um negócio é preciso planejamento, capital, visão empresarial e um monte de...'. Antes de terminar, a criança o corta mostrando o objeto: 'Eu só preciso de uma tesoura!'.\n\nNo segundo quadrinho desse texto, no trecho '...e um monte de...', as reticências foram usadas para:",
    [
      "apresentar a continuação da fala do pai.",
      "indicar que o pai ficou desconfiado.",
      "marcar que o pai foi interrompido.",
      "mostrar a dúvida do pai sobre a pergunta.",
      "evidenciar uma pausa curta entre as falas."
    ],
    2,
    "As reticências no final da fala do pai marcam uma suspensão abrupta do discurso causada pela interrupção do filho que entra com a tesoura."
  ],
  [
    "Vozes verbais",
    "Em um encontro de professores, foi proposto um desafio de transformar a frase 'O governo aplicou novas medidas de segurança.' para a voz passiva. A frase deveria permanecer com o mesmo sentido, mas com uma estrutura sintaticamente complexa.\n\nQual das seguintes opções apresenta a transformação correta seguindo a Norma-Padrão da Língua Portuguesa?",
    [
      "Novas medidas de segurança foram aplicadas pelo governo.",
      "Novas medidas de segurança são aplicadas pelo governo.",
      "Novas medidas de segurança foram sendo aplicadas pelo governo.",
      "Pelo governo, novas medidas de segurança eram aplicadas.",
      "O governo foi quem novas medidas de segurança aplicou."
    ],
    0,
    "O verbo na voz ativa está no pretérito perfeito do indicativo ('aplicou'). Na passiva analítica, o auxiliar 'ser' assume o pretérito perfeito ('foram') + particípio ('aplicadas'): 'Novas medidas de segurança foram aplicadas pelo governo'."
  ],
  [
    "Sintaxe da partícula 'se'",
    "A publicação destacada possui uma placa com a frase “vendem-se unicórnios” cuja classificação sintática é apontada em:",
    [
      "O sujeito é indeterminado.",
      "O sujeito oculto é 'unicórnios'.",
      "É uma oração sem sujeito.",
      "O sujeito é composto.",
      "O predicado está em forma elíptica."
    ],
    0,
    "Em questões de processos seletivos e provas simplificadas, bancas frequentemente classificam construções populares do tipo 'vende-se/vendem-se' no campo do sujeito indeterminado, embora na norma padrão clássica 'unicórnios' funcione como sujeito paciente de voz passiva sintética."
  ],
  [
    "Figuras de linguagem",
    "Leia o poema a seguir e identifique a figura de linguagem predominante:\n\nContradições\nEu sou o silêncio em meio ao grito,\nA paz que se encontra no conflito.\nSou o sonho acordado, a dor que alivia,\nA sombra que dança no sol do dia.\nSou a saudade que acalma o coração,\nO doce amargo, o não e o então.\nSou o sorriso entre as lágrimas, perdido,\nE o medo que encoraja o mais retraído.\nSou a pressa que nunca tem direção,\nO calor que congela, a exaustão.\nSou a certeza que vive em dúvida,\nA liberdade que se aprisiona muda.\n\nEscolha a alternativa que apresenta corretamente a figura de linguagem usada no poema.",
    [
      "Metáfora – Substituição de um termo por outro que tenha relação de semelhança, criando uma imagem poética.",
      "Paradoxo – Uso de ideias contraditórias que, ao se combinarem, formam um novo sentido.",
      "Anacoluto – Quebra da estrutura gramatical, criando uma ideia de desconexão entre o início e o fim da frase.",
      "Hipérbole – Exagero intencional na expressão para destacar uma ideia ou sentimento dentro de um contexto.",
      "Eufemismo – Uso de palavras ou expressões mais suaves para substituir algo que poderia ser desagradável ou chocante."
    ],
    1,
    "Expressões como 'silêncio em meio ao grito', 'dor que alivia' e 'calor que congela' unem ideias inconciliáveis na lógica estrita para criar novos efeitos poéticos, configurando paradoxos (oxímoros)."
  ]
];

  const officialMath = [
  [
    "Média ponderada",
    "Um estudante obteve as seguintes notas nas quatro unidades de um curso. Cada unidade possui um peso diferente no cálculo da média final. As unidades possuem os seguintes pesos:\n• Unidade 1: peso 2\n• Unidade 2: peso 3\n• Unidade 3: peso 2\n• Unidade 4: peso 3\n\nAs notas do estudante foram:\n• Unidade 1: nota 7,5 (peso 2)\n• Unidade 2: nota 8,0 (peso 3)\n• Unidade 3: nota 6,5 (peso 2)\n• Unidade 4: nota 9,0 (peso 3)\n\nCom base nas notas e nos pesos das unidades, calcule a média ponderada das notas desse estudante.",
    [
      "7,75",
      "7,80",
      "7,90",
      "8,10",
      "8,25"
    ],
    2,
    "Soma ponderada: (7,5 × 2) + (8,0 × 3) + (6,5 × 2) + (9,0 × 3) = 15 + 24 + 13 + 27 = 79. Soma dos pesos: 2 + 3 + 2 + 3 = 10. Média = 79 ÷ 10 = 7,90."
  ],
  [
    "Porcentagem aplicada",
    "A Olimpíada de Paris 2024 teve a participação total de 10.500 atletas. Pela primeira vez na história, a delegação brasileira foi composta por maioria feminina: 153 mulheres e 124 homens, totalizando 277 atletas.\n\nCom base nesses dados, qual é a porcentagem aproximada de mulheres entre os atletas da delegação brasileira?",
    [
      "44%",
      "51%",
      "53%",
      "55%",
      "65%"
    ],
    3,
    "Percentual = 153 ÷ 277 ≈ 0,5523, o que corresponde aproximadamente a 55% da delegação."
  ],
  [
    "Área do círculo",
    "A Praça do Marco Zero, no Recife, possui no centro um grande círculo com diâmetro aproximado de 40 metros.\n\nCalcule a área do círculo da praça, considerando-o como uma figura geométrica perfeita e utilizando π = 3,14.",
    [
      "1.178 m²",
      "1.227 m²",
      "1.250 m²",
      "1.256 m²",
      "1.300 m²"
    ],
    3,
    "Se o diâmetro é 40 m, o raio r é 20 m. Área = π × r² = 3,14 × (20)² = 3,14 × 400 = 1.256 m²."
  ],
  [
    "Volume de prisma retangular",
    "Laura tem uma caixa organizadora em formato de prisma retangular reto com dimensões 12 cm de largura, 5 cm de profundidade e 15 cm de altura. Ela percebeu que 2/3 do volume da caixa já estão ocupados com materiais.\n\nQual é o volume NÃO ocupado (livre) na caixa?",
    [
      "150 cm³",
      "200 cm³",
      "250 cm³",
      "300 cm³",
      "600 cm³"
    ],
    3,
    "Volume total = 12 × 5 × 15 = 900 cm³. Se 2/3 estão ocupados, a fração não ocupada é 1/3: 900 × (1/3) = 300 cm³."
  ],
  [
    "Regra de três simples",
    "Uma gráfica conta inicialmente com 6 máquinas que produzem 900 cadernos por dia. Com o aumento da demanda, a empresa adquiriu mais 2 máquinas iguais, totalizando 8 máquinas operando no mesmo ritmo.\n\nQuantos cadernos a gráfica será capaz de produzir diariamente com as 8 máquinas?",
    [
      "675 cadernos",
      "750 cadernos",
      "800 cadernos",
      "1050 cadernos",
      "1200 cadernos"
    ],
    4,
    "Rendimento por máquina = 900 ÷ 6 = 150 cadernos/dia. Com 8 máquinas: 8 × 150 = 1.200 cadernos por dia."
  ],
  [
    "Função quadrática e vértice",
    "A trajetória de um golfinho que salta fora da água pode ser descrita pela função quadrática h(x) = -2x² + 8x, onde h representa a altura em metros e x representa o deslocamento horizontal em metros. A altura máxima ocorre no vértice da parábola.\n\nCom base nessa função, determine a altura máxima atingida pelo golfinho:",
    [
      "2m",
      "4m",
      "6m",
      "8m",
      "10m"
    ],
    3,
    "Abscissa do vértice: x_v = -b / (2a) = -8 / (2 × (-2)) = -8 / -4 = 2 m. Altura máxima: h(2) = -2(2)² + 8(2) = -8 + 16 = 8 metros."
  ],
  [
    "Probabilidade simples",
    "Para apresentar uma atividade no evento cultural do SESI, será sorteado um estudante entre todos os inscritos. O número de inscritos por segmento foi:\n• 150 alunos do Ensino Fundamental I;\n• 200 alunos do Ensino Fundamental II;\n• 120 alunos do Ensino Médio.\n\nQual é a probabilidade de o aluno sorteado ser do Ensino Médio?",
    [
      "18,18%",
      "20%",
      "22,22%",
      "25,53%",
      "30%"
    ],
    3,
    "Total de inscritos = 150 + 200 + 120 = 470 alunos. Probabilidade = 120 ÷ 470 ≈ 0,255319, ou seja, 25,53%."
  ],
  [
    "Sistema de equações do 1º grau",
    "Em uma livraria, os livros de ficção científica custam R$ 18,00 cada e os livros de literatura clássica custam R$ 25,00 cada. Um cliente comprou no total 8 livros e gastou R$ 158,00.\n\nQuantos livros de ficção científica e quantos livros de literatura clássica ele comprou?",
    [
      "3 livros de ficção científica e 5 livros de literatura clássica.",
      "4 livros de ficção científica e 4 livros de literatura clássica.",
      "5 livros de ficção científica e 3 livros de literatura clássica.",
      "6 livros de ficção científica e 2 livros de literatura clássica.",
      "7 livros de ficção científica e 1 livro de literatura clássica."
    ],
    3,
    "Sejam f e c os livros: f + c = 8 e 18f + 25c = 158. Da 1ª: f = 8 - c. Substituindo: 18(8 - c) + 25c = 158 => 144 + 7c = 158 => 7c = 14 => c = 2 e f = 6."
  ],
  [
    "Unidades de tempo e proporção",
    "O período de rotação de Júpiter em torno de seu próprio eixo dura apenas 10 horas terrestres. Sabendo que 1 ano terrestre tem 365 dias (de 24 horas cada), assinale a alternativa que indica quantos dias completos de Júpiter ocorrem em 1 ano terrestre:",
    [
      "720 dias",
      "842 dias",
      "858 dias",
      "876 dias",
      "912 dias"
    ],
    3,
    "Horas em 1 ano terrestre: 365 × 24 = 8.760 horas. Como cada dia de Júpiter dura 10 horas: 8.760 ÷ 10 = 876 dias completos."
  ],
  [
    "Polígono regular e perímetro",
    "Uma equipe de arquitetura projetou um mosaico no formato de um heptágono regular. Sabendo que o perímetro desse heptágono é de 96,6 metros, qual é a medida do comprimento de cada um dos seus sete lados?",
    [
      "13,3 metros",
      "13,4 metros",
      "13,8 metros",
      "14,2 metros",
      "14,5 metros"
    ],
    2,
    "Um heptágono regular possui 7 lados de mesmo comprimento: 96,6 ÷ 7 = 13,8 metros."
  ],
  [
    "Fatoração e expressão algébrica",
    "Uma artista subdividiu uma parede retangular de 2,5 m de altura em 4 faixas verticais consecutivas, cujas larguras de base medem, respectivamente, x metros, 2x metros, (3x - 1) metros e 2 metros.\n\nA expressão algébrica que representa a área total dessa parede, em sua forma fatorada, é:",
    [
      "2,5 (6x + 3)",
      "2,5 (6x + 1)",
      "2,5 (5x + 2)",
      "2,5 (5x + 1)",
      "2,5 (5x + 5)"
    ],
    1,
    "A base total é a soma das partes: x + 2x + (3x - 1) + 2 = 6x + 1. Área = altura × base = 2,5(6x + 1)."
  ],
  [
    "Equação do 1º grau contextualizada",
    "Joana e Kaic disputaram um trajeto escolar passando por x ruas iguais. Joana gastou 6 minutos para se preparar e 5 minutos para percorrer cada rua. Kaic demorou 3 minutos para se preparar e 6 minutos por rua. Eles chegaram exatamente no mesmo instante à escola.\n\nO número x de ruas percorridas foi igual a:",
    [
      "3.",
      "5.",
      "6.",
      "9.",
      "10."
    ],
    0,
    "Tempo total de Joana: 6 + 5x. Tempo total de Kaic: 3 + 6x. Igualando: 6 + 5x = 3 + 6x => 6 - 3 = 6x - 5x => x = 3 ruas."
  ],
  [
    "Equação do 2º grau e coeficientes",
    "Um estudante precisa organizar a equação quadrática 3x² = 5x - 6 na forma geral ax² + bx + c = 0.\n\nDe acordo com a forma geral reduzida, os coeficientes a, b e c dessa equação são, respectivamente:",
    [
      "-3, 5 e 6.",
      "3, 5 e 6.",
      "-3, –5 e 6.",
      "3, –5 e 6.",
      "3, –5 e –6"
    ],
    3,
    "Subtraindo 5x e somando 6 em ambos os lados: 3x² - 5x + 6 = 0. Portanto: a = 3, b = -5 e c = 6."
  ],
  [
    "Teorema de Tales e semelhança",
    "João dividiu um terreno triangular entre dois filhos por uma cerca DE paralela à base BC. O lote da esquerda ficou com 80 m de lateral e o da direita com 100 m. A soma das frentes dos dois terrenos mede 135 metros, e o terreno da direita tem x metros a mais de frente que o da esquerda.\n\nDesse modo, o valor de x é:",
    [
      "15 m",
      "20 m",
      "60 m",
      "75 m",
      "80 m"
    ],
    0,
    "Seja y a frente do terreno da esquerda. A frente da direita é y + x. Por Tales: y / (y + x) = 80 / 100 = 4 / 5 => 5y = 4y + 4x => y = 4x. A soma das frentes é y + (y + x) = 2y + x = 135 => 2(4x) + x = 9x = 135 => x = 15 m."
  ],
  [
    "Volume do cilindro",
    "Uma vela de 7 dias tem formato cilíndrico circular reto com raio da base medindo 5 cm e altura medindo 15 cm.\n\nCalculando o volume do cilindro pela fórmula V = π·r²·h, o resultado obtido é:",
    [
      "20π cm³",
      "75π cm³",
      "150π cm³",
      "375π cm³",
      "400π cm³"
    ],
    3,
    "V = π × r² × h = π × (5)² × 15 = π × 25 × 15 = 375π cm³."
  ],
  [
    "Conversão dm³ para litros",
    "Cícero preparou uma solução fertilizante líquida para 12 mudas. Cada muda recebeu exatamente 23,4 dm³ da solução, e ainda restaram 10 dm³ no reservatório para uso posterior.\n\nQual foi a quantidade total de solução, em litros, preparada por Cícero?",
    [
      "149,4 litros",
      "2800,8 litros",
      "290,8 litros",
      "406,8 litros",
      "3050,5 litros"
    ],
    2,
    "Volume usado nas mudas: 12 × 23,4 dm³ = 280,8 dm³. Volume total = 280,8 + 10 = 290,8 dm³. Como 1 dm³ equivale exatamente a 1 litro, o total é 290,8 litros."
  ],
  [
    "Conversão m³ para litros",
    "Um reservatório para captação de água pluvial possui volume interno total de 2 m³.\n\nQual é a capacidade máxima de armazenamento de água desse reservatório, em litros?",
    [
      "2 litros",
      "20 litros",
      "200 litros",
      "2000 litros",
      "20000 litros"
    ],
    3,
    "1 metro cúbico (m³) equivale a 1.000 litros de água. Logo, 2 m³ = 2 × 1.000 = 2.000 litros."
  ],
  [
    "Vértice de parábola e termo desconhecido",
    "No quadro da sala de aula está escrita a equação quadrática x² + [b]x + 21 = 0, onde o coeficiente b foi apagado. Sabe-se que as coordenadas do vértice da parábola correspondente são V = (5, -4).\n\nO valor do coeficiente b apagado é igual a:",
    [
      "-10",
      "-4",
      "5",
      "21",
      "25"
    ],
    0,
    "A coordenada x do vértice é dada por x_v = -b / (2a). Com a = 1 e x_v = 5: 5 = -b / 2 => b = -10. Verificação: (5)² - 10(5) + 21 = 25 - 50 + 21 = -4, idêntico à ordenada y_v."
  ],
  [
    "Interpretação de infográfico",
    "Um infográfico do Tribunal Regional do Trabalho da 4ª Região apresenta os seguintes índices de desemprego entre pessoas em idade ativa: homens brancos (5%), homens negros (6%), mulheres brancas (9%) e mulheres negras (12%).\n\nCom base estritamente nesses dados de desemprego, pode-se afirmar que:",
    [
      "95% dos homens brancos em idade ativa estão empregados.",
      "20% das mulheres negras e dos homens negros estão desempregados.",
      "homens brancos recebem um salário médio 60% maior em relação ao salário dos homens negros.",
      "mulheres brancas recebem um salário médio 70% maior em relação ao salário das mulheres negras.",
      "5% dos homens brancos em idade ativa estão empregados."
    ],
    0,
    "Se a taxa de desemprego entre homens brancos em idade ativa é de 5%, a parcela que está empregada é o complemento de 100%: 100% - 5% = 95%."
  ],
  [
    "Gráfico de setores e porcentagem",
    "Na escola SESI, uma eleição para o Grêmio Estudantil teve 2.340 estudantes votantes. A pesquisa eleitoral mostrou as intenções de voto: Candidato 1 (35%), Candidato 2 (12,5%), Candidato 3 (12,5%), Candidato 4 (16%) e Candidato 5 (24%).\n\nO número exato de eleitores do candidato com a maior intenção de voto é igual a:",
    [
      "819 eleitores.",
      "468 eleitores.",
      "585 eleitores.",
      "292 eleitores.",
      "100 eleitores."
    ],
    0,
    "O candidato com a maior intenção é o Candidato 1, com 35%. Calculando: 0,35 × 2.340 = 819 eleitores."
  ]
];

  const extraPort = [
  [
    "Enfoque jornalístico",
    "Analise as duas manchetes publicadas por jornais diferentes sobre a inauguração de uma ferrovia regional:\n\nManchete A: “Nova ferrovia impulsiona a economia do interior e cria milhares de empregos.”\nManchete B: “Obras da ferrovia terminam com três anos de atraso e estouro no orçamento previsto.”\n\nA respeito do tratamento dado ao acontecimento, conclui-se que:",
    [
      "a Manchete A destaca os benefícios econômicos futuros, enquanto a Manchete B foca nas falhas de gestão e custos.",
      "ambas as manchetes assumem uma postura estritamente favorável à inauguração da linha férrea.",
      "a Manchete B critica o projeto ferroviário por considerá-lo tecnicamente desnecessário à região.",
      "a Manchete A oculta intencionalmente dados sobre a geração de empregos na construção.",
      "os dois veículos usam a mesma abordagem crítica em relação aos prazos das obras públicas."
    ],
    0,
    "A manchete A adota um enquadramento focado no progresso e nos impactos positivos (empregos e economia), ao passo que a manchete B escolhe enquadrar os problemas de execução da obra (atraso e custos excedentes)."
  ],
  [
    "Enfoque jornalístico",
    "Considere as manchetes sobre a implantação de inteligência artificial em hospitais:\n\nManchete 1: “Algoritmos reduzem em 40% o tempo de diagnóstico de doenças raras em centro de referência.”\nManchete 2: “Médicos alertam para riscos de diagnósticos automatizados sem supervisão humana contínua.”\n\nComparando os dois títulos jornalísticos, observa-se que:",
    [
      "a Manchete 1 evidencia a eficácia e agilidade do recurso, ao passo que a Manchete 2 salienta a cautela e a necessidade de controle profissional.",
      "as duas publicações rejeitam o uso de tecnologias em ambientes hospitalares públicos.",
      "a Manchete 2 contradiz a existência de doenças raras tratadas no centro de referência.",
      "a Manchete 1 defende a substituição imediata dos médicos especialistas por softwares.",
      "ambas as manchetes tratam a inovação como uma ameaça incontornável à medicina."
    ],
    0,
    "A Manchete 1 enfatiza o ganho de produtividade clínica (redução de 40% no tempo), enquanto a Manchete 2 introduz o contraponto ético e técnico da necessidade de supervisão humana."
  ],
  [
    "Enfoque jornalístico",
    "Dois portais de notícias noticiaram a mudança nos índices de desmatamento em um bioma:\n\nPortal X: “Políticas de fiscalização freiam ritmo de perda da vegetação nativa no último trimestre.”\nPortal Y: “Mesmo com desaceleração temporária, bioma registra segundo pior índice de destruição da década.”\n\nA diferença central de perspectiva entre as duas abordagens reside no fato de que:",
    [
      "o Portal X enfatiza o efeito positivo das medidas de controle, enquanto o Portal Y destaca a gravidade histórica do quadro geral.",
      "o Portal Y comprova que as ações de fiscalização foram completamente inúteis no combate ao desmatamento.",
      "o Portal X omite que houve qualquer destruição da vegetação nativa durante o período avaliado.",
      "ambos os portais utilizam dados conflitantes e inventados para confundir a opinião do leitor.",
      "o Portal Y apresenta uma visão otimista quanto à recuperação ecológica do bioma."
    ],
    0,
    "O Portal X enquadra a notícia a partir do êxito conjuntural da fiscalização, enquanto o Portal Y contextualiza o fato na escala histórica decenal, mostrando que o quadro segue grave."
  ],
  [
    "Enfoque jornalístico",
    "Observe os títulos de capa a respeito da vitória de uma equipe de robótica escolar em torneio internacional:\n\nTítulo 1: “Estudantes de escola pública superam potências mundiais e levam ouro na robótica.”\nTítulo 2: “Brasil fica em 1º lugar em campeonato de robótica após desclassificação da equipe rival.”\n\nA análise comparativa revela que o Título 2, diferentemente do Título 1:",
    [
      "atribui o resultado favorável em parte a um fator externo circunstancial (desclassificação do rival).",
      "enaltece o esforço pessoal dos estudantes diante de limitações estruturais.",
      "informa que a equipe brasileira foi premiada apenas com medalha de participação.",
      "ignora por completo a colocação final obtida pela representação brasileira no evento.",
      "demonstra maior entusiasmo e exaltação patriótica do que o Título 1."
    ],
    0,
    "Enquanto o Título 1 constrói uma narrativa de superação épica ('superam potências mundiais'), o Título 2 relativiza o mérito esportivo ao introduzir a ocorrência da desclassificação da rival."
  ],
  [
    "Enfoque jornalístico",
    "Leia os títulos sobre a adoção de carros elétricos no transporte urbano:\n\nVeículo 1: “Frotas elétricas reduzem emissão de poluentes e barulho nas capitais brasileiras.”\nVeículo 2: “Alto custo de baterias e escassez de pontos de recarga travam expansão de ônibus elétricos.”\n\nQual estratégia discursiva diferencia os dois textos?",
    [
      "O Veículo 1 foca no impacto ambiental e na qualidade de vida urbana; o Veículo 2 foca nos entraves econômicos e de infraestrutura.",
      "O Veículo 2 é favorável aos combustíveis fósseis, enquanto o Veículo 1 defende o fim do transporte coletivo.",
      "Ambos os veículos defendem a extinção imediata de veículos movidos a combustão.",
      "O Veículo 1 desconsidera a poluição sonora como um problema ambiental relevante.",
      "O Veículo 2 comprova que as baterias elétricas não funcionam em clima tropical."
    ],
    0,
    "O primeiro veículo escolhe como foco os ganhos ecossistêmicos (menos poluição e ruído), ao passo que o segundo aborda a viabilidade prática e financeira do projeto."
  ],
  [
    "Enfoque jornalístico",
    "Duas manchetes abordaram o resultado financeiro de uma indústria têxtil:\n\nManchete Alfa: “Empresa registra faturamento recorde impulsionado por vendas no comércio exterior.”\nManchete Beta: “Lucro líquido da indústria cai 15% após forte pressão inflacionária nos custos de insumos.”\n\nA leitura atenta de ambas as manchetes permite concluir que:",
    [
      "o aumento da receita bruta (faturamento) coexistiu com a redução dos ganhos finais (lucro) devido aos custos elevados.",
      "uma das manchetes é comprovadamente falsa, pois uma empresa com faturamento alto não pode ter queda no lucro.",
      "a Manchete Beta comemora os bons resultados financeiros da indústria de tecidos.",
      "a Manchete Alfa revela que a empresa interrompeu o fornecimento para o mercado nacional.",
      "as duas manchetes utilizam adjetivos pejorativos para desvalorizar a atuação da fábrica."
    ],
    0,
    "As duas manchetes não se anulam: a primeira reporta o faturamento bruto recorde (receita), e a segunda reporta a rentabilidade líquida, afetada pela elevação nos custos de produção."
  ],
  [
    "Enfoque jornalístico",
    "Considere as manchetes sobre um programa de intercâmbio estudantil:\n\nNotícia 1: “Programa pioneiro oferece bolsas integrais no exterior para jovens de baixa renda.”\nNotícia 2: “Exigência de fluência em inglês restringe acesso de alunos da periferia a bolsas no exterior.”\n\nSobre o posicionamento dos enunciadores, afirma-se que:",
    [
      "a Notícia 1 valoriza a oportunidade inclusiva criada pelo programa, enquanto a Notícia 2 problematiza uma barreira de acesso que limita essa inclusão.",
      "ambas as notícias comemoram a ausência de pré-requisitos para a concessão das bolsas.",
      "a Notícia 2 defende que estudantes de baixa renda não devem aprender idiomas estrangeiros.",
      "a Notícia 1 critica a qualidade das instituições de ensino estrangeiras parceiras.",
      "a Notícia 2 demonstra total imparcialidade ao evitar apontar o perfil dos candidatos prejudicados."
    ],
    0,
    "A Notícia 1 promove o valor social do programa (bolsas integrais para baixa renda), enquanto a Notícia 2 expõe criticamente o filtro que pode excluir parte significativa desse público-alvo."
  ],
  [
    "Enfoque jornalístico",
    "Dois periódicos anunciaram a descoberta arqueológica de fósseis em uma pedreira:\n\nPeriódico A: “Tesouro científico: fósseis inéditos de réptil de 230 milhões de anos são achados no Sul.”\nPeriódico B: “Paralisação em obra de mineração gera impasse econômico após descoberta de ossadas pré-históricas.”\n\nO contraste entre os dois periódicos fundamenta-se:",
    [
      "no conflito entre o valor científico-patrimonial do achado e os impactos econômicos no setor produtivo local.",
      "na disputa entre pesquisadores para definir a verdadeira idade dos fósseis encontrados.",
      "no fato de o Periódico B negar categoricamente a autenticidade das ossadas descobertas.",
      "na recusa do Periódico A em reconhecer a importância das pesquisas paleontológicas brasileiras.",
      "na convergência total de interesses entre a preservação cultural e as empresas mineradoras."
    ],
    0,
    "O Periódico A enxerga o evento pelo prisma do patrimônio científico ('tesouro científico'), enquanto o Periódico B destaca os custos econômicos da suspensão da atividade comercial."
  ],
  [
    "Enfoque jornalístico",
    "Considere as seguintes chamadas de capa sobre a implantação de ciclovias em uma avenida central:\n\nChamada X: “Faixa exclusiva para ciclistas traz segurança e reduz acidentes com bicicletas no centro.”\nChamada Y: “Comerciantes reclamam de perda de vagas de estacionamento após instalação de ciclovia.”\n\nA respeito das vozes sociais privilegiadas nas manchetes:",
    [
      "a Chamada X prioriza a perspectiva da mobilidade urbana sustentável e segurança viária, enquanto a Chamada Y dá voz às reivindicações dos lojistas locais.",
      "a Chamada Y demonstra que o trânsito da avenida foi totalmente bloqueado para todos os veículos.",
      "ambas as chamadas consideram que as ciclovias são prejudiciais para a cidade moderna.",
      "a Chamada X afirma que os ciclistas deixaram de circular pelas ruas do centro comercial.",
      "os dois portais concordam que os comerciantes foram beneficiados pela remoção das vagas."
    ],
    0,
    "A manchete X acolhe o viés da segurança dos ciclistas e da mobilidade ativa, enquanto a manchete Y privilegia os interesses econômicos dos comerciantes impactados."
  ],
  [
    "Enfoque jornalístico",
    "Analise os títulos sobre o aumento na produção agrícola do estado:\n\nTexto 1: “Safra recorde de grãos consolida estado como celeiro do país e eleva arrecadação de tributos.”\nTexto 2: “Recorde na colheita agrava sobrecarga nas rodovias e expõe gargalos logísticos crônicos no porto.”\n\nIdentifica-se nas duas reportagens:",
    [
      "a oposição entre a celebração do volume colhido e a crítica às limitações de escoamento e transporte.",
      "a constatação de que a colheita foi insuficiente para abastecer o mercado consumidor estadual.",
      "a comprovação de que as rodovias foram ampliadas adequadamente para suportar o fluxo de caminhões.",
      "a negação da relevância do setor agropecuário para as contas públicas do estado.",
      "a defesa explícita de que a produção de grãos deve ser reduzida para evitar danos viários."
    ],
    0,
    "O Texto 1 celebra o sucesso produtivo e fiscal da safra, ao passo que o Texto 2 revela as consequências estruturais negativas da falta de infraestrutura logística para escoar os grãos."
  ],
  [
    "Enfoque jornalístico",
    "Dois veículos noticiaram a concessão de um parque florestal estadual à iniciativa privada:\n\nManchete Verde: “Concessão promete modernizar trilhas, investir em pesquisa e melhorar atendimento ao turista.”\nManchete Eco: “Cobrança de ingresso após privatização pode afastar moradores de baixa renda de área pública.”\n\nA diferença de enfoque consiste em:",
    [
      "destacar a melhoria nos serviços e infraestrutura versus alertar para o risco de elitização e exclusão do espaço de lazer.",
      "garantir que todos os parques florestais brasileiros passarão a cobrar entrada obrigatória.",
      "comprovar que os moradores do entorno são contrários à preservação da fauna e flora locais.",
      "defender a destruição das trilhas ecológicas para a construção de empreendimentos hoteleiros.",
      "demonstrar a impossibilidade de convivência entre turismo sustentável e conservação ambiental."
    ],
    0,
    "A Manchete Verde salienta os investimentos e a qualificação dos serviços turísticos; a Manchete Eco aponta o impacto socioeconômico da tarifação, que restringe o acesso popular."
  ],
  [
    "Enfoque jornalístico",
    "Observe as seguintes notícias a respeito do fechamento de agências bancárias físicas:\n\nTítulo A: “Digitalização bancária traz comodidade e agiliza operações financeiras para milhões de clientes.”\nTítulo B: “Fechamento de agências amplia exclusão digital de idosos e moradores de municípios sem agência.”\n\nO conflito de interesses evidenciado no confronto dos textos decorre:",
    [
      "da discrepância entre os ganhos tecnológicos da maioria conectada e a vulnerabilidade dos cidadãos com menor letramento digital.",
      "do consenso geral de que as operações financeiras eletrônicas são inseguras e ineficientes.",
      "da constatação de que a população idosa é o grupo que mais utiliza aplicativos de smartphone.",
      "da decisão dos bancos de suspender completamente o atendimento aos habitantes de cidades pequenas.",
      "da intenção do Título A de desencorajar a modernização dos serviços bancários no Brasil."
    ],
    0,
    "O Título A celebra a eficiência e a facilidade do atendimento virtual, enquanto o Título B denuncia a desigualdade gerada pelo processo em grupos que dependem do suporte presencial."
  ],
  [
    "Efeito de sentido de pontuação",
    "Leia a frase a seguir retirada de um manifesto estudantil:\n\n“Nós, estudantes de todo o país, exigimos laboratórios modernos e bibliotecas abertas aos fins de semana.”\n\nO uso das vírgulas isolando o termo “estudantes de todo o país” tem como efeito sintático e discursivo:",
    [
      "delimitar um aposto explicativo, esclarecendo e conferindo representatividade coletiva ao sujeito “Nós”.",
      "indicar uma oração subordinada adjetiva restritiva, limitando a reivindicação a um pequeno grupo de alunos.",
      "separar um vocativo enfático direcionado às autoridades educacionais do município.",
      "marcar a omissão proposital de um verbo de ação para acelerar o ritmo da frase.",
      "assinalar uma dúvida do narrador quanto à identidade dos manifestantes reunidos."
    ],
    0,
    "O termo entre vírgulas funciona como aposto explicativo do pronome 'Nós', expandindo sua abrangência e legitimando o manifesto como voz coletiva."
  ],
  [
    "Efeito de sentido de pontuação",
    "Considere o diálogo entre duas colegas de trabalho:\n\n— Você vai aceitar aquela proposta de transferência para a filial?\n— Eu... bem, é que deixar minha família agora seria complicado...\n\nNesse contexto, o emprego repetido das reticências na resposta da personagem sugere:",
    [
      "hesitação, insegurança e dificuldade em assumir uma decisão definitiva.",
      "irritação explícita com a pergunta indiscreta formulada pela interlocutora.",
      "certeza absoluta de que a proposta salarial recebida é vantajosa.",
      "interrupção brusca da fala provocada pela entrada de uma terceira pessoa.",
      "ironia deliberada para desdenhar do prestígio da filial da empresa."
    ],
    0,
    "As reticências no diálogo expressam a quebra da linearidade da fala ('Eu... bem...'), traduzindo hesitação emocional e receio de externar a recusa."
  ],
  [
    "Efeito de sentido de pontuação",
    "Analise o trecho de uma resenha crítica de cinema:\n\n“O filme promete um roteiro 'inovador', mas entrega exatamente os mesmos clichês que vemos há duas décadas.”\n\nO uso das aspas na palavra destacada produz um efeito de:",
    [
      "ironia e distanciamento crítico em relação ao adjetivo anunciado pela divulgação da obra.",
      "citação literal de uma lei governamental de incentivo à indústria cinematográfica.",
      "indicação de termo estrangeiro não adaptado às regras ortográficas do português.",
      "homenagem e elogio sincero à criatividade e originalidade demonstradas pelos roteiristas.",
      "marcação de gíria periférica restrita a um nicho específico de espectadores."
    ],
    0,
    "As aspas em 'inovador' indicam ironia e desacordo: o resenhista reproduz o rótulo do marketing para imediatamente desmenti-lo com o contraste ('mas entrega os mesmos clichês')."
  ],
  [
    "Efeito de sentido de pontuação",
    "Examine o seguinte período retirado de uma crônica de costumes:\n\n“Ele comprou um carro veloz; ela, uma bicicleta ergométrica.”\n\nA vírgula presente na segunda oração desempenha a função de:",
    [
      "marcar a elipse (zeugma) da forma verbal “comprou”, já expressa na oração anterior.",
      "isolar um adjunto adverbial de tempo deslocado para o início do enunciado.",
      "separar orações coordenadas assindéticas com sujeitos estritamente idênticos.",
      "introduzir um vocativo poético direcionado à leitora da crônica literária.",
      "destacar uma retificação de um dado numérico previamente incorreto."
    ],
    0,
    "A vírgula substitui e omite o verbo 'comprou' na segunda oração ('ela, [comprou] uma bicicleta...'), configurando o recurso estilístico de zeugma."
  ],
  [
    "Efeito de sentido de pontuação",
    "Leia a frase de uma campanha de segurança no trânsito:\n\n“Motorista, respeite a faixa de pedestres: vidas dependem da sua consciência.”\n\nO sinal de dois-pontos e a vírgula empregados no período exercem, respectivamente, as funções de:",
    [
      "introduzir uma justificativa explicativa da ordem dada e isolar um vocativo de chamamento.",
      "marcar o início de uma citação bíblica e separar o sujeito do predicado verbal.",
      "indicar uma enumeração de itens comerciais e isolar um aposto circunstancial de lugar.",
      "estabelecer uma oposição adversativa e sinalizar uma oração subordinada completiva.",
      "assinalar o término de uma pergunta direta e introduzir uma exclamação enfática."
    ],
    0,
    "A vírgula isola 'Motorista' (vocativo a quem se dirige a campanha), e os dois-pontos introduzem a justificativa/explicação causal da solicitação."
  ],
  [
    "Efeito de sentido de pontuação",
    "Observe as duas orações a seguir e analise a mudança de sentido provocada pela vírgula:\n\nFrase I: “Os atletas que se dedicaram aos treinos conquistaram medalhas.”\nFrase II: “Os atletas, que se dedicaram aos treinos, conquistaram medalhas.”\n\nSobre a diferença de interpretação entre as frases, está correto afirmar que:",
    [
      "na Frase I apenas uma parte dos atletas se dedicou e venceu (sentido restritivo); na Frase II todos os atletas se dedicaram e conquistaram medalhas (sentido explicativo).",
      "na Frase I nenhum atleta se dedicou aos treinos, ao passo que na Frase II todos conquistaram troféus.",
      "as duas frases expressam rigorosamente o mesmo conteúdo sintático e semântico, sendo a pontuação facultativa.",
      "na Frase II o uso das vírgulas torna o enunciado gramaticalmente incorreto e inaceitável na norma-padrão.",
      "a Frase I afirma que a dedicação aos treinos é uma característica universal inerente a qualquer atleta do planeta."
    ],
    0,
    "A ausência de vírgulas na Frase I gera uma oração subordinada adjetiva restritiva (apenas os dedicados venceram). As vírgulas na Frase II tornam-na adjetiva explicativa (todos os atletas se dedicaram e todos ganharam medalhas)."
  ],
  [
    "Efeito de sentido de pontuação",
    "Leia o trecho de um discurso político:\n\n“Nossa prioridade absoluta — e ninguém aqui ousará discordar — deve ser a erradicação da fome no município.”\n\nOs travessões foram utilizados pelo orador para:",
    [
      "intercalar um comentário de ênfase subjetiva que busca adesão unânime da plateia.",
      "delimitar a fala de uma personagem diferente que interrompeu o discurso na tribuna.",
      "isolar uma citação científica extraída de um relatório econômico internacional.",
      "apontar a fala gaguejada e confusa do orador diante das pressões populares.",
      "introduzir uma enumeração dos alimentos básicos fornecidos às famílias carentes."
    ],
    0,
    "Os travessões duplos funcionam como parênteses enfáticos, inserindo uma intervenção persuasiva do orador que reforça o consenso desejado com os ouvintes."
  ],
  [
    "Efeito de sentido de pontuação",
    "Considere a pontuação no seguinte anúncio de jornal:\n\n“Não espere a água acabar. Economize hoje!”\n\nO ponto-final seguido do ponto de exclamação constrói um efeito discursivo de:",
    [
      "apresentação de um alerta factual seguido de uma advertência com teor persuasivo e urgente.",
      "dúvida teórica a respeito da crise hídrica seguida de uma pergunta reflexiva.",
      "tristeza irremediável diante do colapso ambiental que já destruiu todos os mananciais.",
      "ironia satírica que zomba dos cidadãos que poupam recursos naturais em suas residências.",
      "indiferença e neutralidade típicas de manuais de manutenção hidráulica industrial."
    ],
    0,
    "A primeira oração faz uma constatação objetiva que convoca à reflexão; a exclamação final imprime força apelativa e imperativa ('Economize hoje!'), mobilizando o leitor para a urgência da ação."
  ],
  [
    "Efeito de sentido de pontuação",
    "Examine o parágrafo retirado de um artigo sobre preservação ambiental:\n\n“Para restaurar a mata ciliar, os voluntários plantaram ipês, jacarandás, jequitibás e aroeiras; limparam as margens do córrego; e cercaram as nascentes mais vulneráveis.”\n\nO uso do ponto e vírgula na estrutura do texto justifica-se por:",
    [
      "separar orações coordenadas extensas cujos termos internos já contêm enumerações com vírgula.",
      "marcar uma pausa longa causada pelo cansaço físico extremo dos trabalhadores envolvidos.",
      "assinalar contradições lógicas insuperáveis entre as diferentes ações de reflorestamento.",
      "substituir indevidamente o ponto-final para evitar a divisão do texto em parágrafos.",
      "destacar a descontinuidade temporal entre os projetos de voluntariado e os órgãos públicos."
    ],
    0,
    "O ponto e vírgula é recomendado para separar orações coordenadas complexas quando ao menos uma delas já contém elementos internos separados por vírgula (como a enumeração das espécies de árvores)."
  ],
  [
    "Efeito de sentido de pontuação",
    "Leia o trecho de um relatório técnico de inspeção predial:\n\n“Na garagem do subsolo, detectou-se uma trinca de 5 mm na viga principal; no térreo, infiltrações na parede leste.”\n\nA presença do ponto e vírgula e da segunda vírgula no período estrutura o sentido ao:",
    [
      "distinguir dois locais de vistoria distintos e omitir o verbo 'detectou-se' na segunda ocorrência.",
      "indicar que as infiltrações do térreo causaram a rachadura observada no subsolo do imóvel.",
      "expressar espanto e indignação do engenheiro responsável diante da precariedade do edifício.",
      "introduzir uma conclusão judicial que determina a interdição imediata de todo o condomínio.",
      "demonstrar que a viga principal foi recuperada antes da realização da perícia de engenharia."
    ],
    0,
    "O ponto e vírgula separa dois blocos descritivos paralelos (subsolo vs. térreo), enquanto a vírgula após 'térreo' assinala a zeugma do verbo 'detectou-se'."
  ],
  [
    "Efeito de sentido de pontuação",
    "Considere o seguinte trecho de uma crônica autobiográfica:\n\n“Olhei para a velha casa da infância — as janelas azuis, o alpendre de tábuas largas, a mangueira frondosa no quintal — e senti que o tempo não havia passado.”\n\nOs travessões desempenham no texto a função de:",
    [
      "delimitar uma enumeração de detalhes visuais que particularizam a memória afetiva evocada pela casa.",
      "marcar a transcrição de um diálogo informal travado entre o narrador e o antigo morador.",
      "separar orações subordinadas adverbiais concessivas que contradizem o sentimento do autor.",
      "apontar o esquecimento progressivo dos elementos arquitetônicos que compunham a propriedade.",
      "introduzir uma advertência formal sobre o risco iminente de desabamento do imóvel rústico."
    ],
    0,
    "Os travessões inserem uma descrição detalhada em enumeração (janelas, alpendre, mangueira), dando densidade visual à lembrança da 'velha casa da infância'."
  ],
  [
    "Efeito de sentido de pontuação",
    "Leia o slogan publicitário de uma cooperativa de reciclagem:\n\n“Separar o lixo não é favor: é dever de cidadania.”\n\nO sinal de dois-pontos substitui adequadamente uma conjunção de valor:",
    [
      "adversativo ou retificador, equivalente a “mas sim” ou “e sim”.",
      "condicional, equivalente a “contanto que” ou “a menos que”.",
      "conformativo, equivalente a “segundo” ou “conforme”.",
      "proporcional, equivalente a “à proporção que” ou “à medida que”.",
      "temporal, equivalente a “assim que” ou “logo que”."
    ],
    0,
    "A frase contrapõe uma ideia negada ('não é favor') a uma afirmação corretiva ('é dever'). Os dois-pontos ligam as orações assumindo valor adversativo/retificador (equivale a 'mas sim')."
  ],
  [
    "Relação lógico-discursiva",
    "Leia o trecho de um relatório sobre transição energética:\n\n“A instalação de usinas solares cresceu expressivamente no último biênio. Contudo, a ausência de baterias de grande porte ainda impede o fornecimento contínuo de eletricidade durante a noite.”\n\nO conector destacado 'Contudo' estabelece uma relação de:",
    [
      "oposição ou contraste entre o avanço na geração de energia e a limitação técnica de armazenamento.",
      "conclusão lógica direta decorrente do crescimento na instalação de painéis fotovoltaicos.",
      "adição cumulativa que reforça a total autossuficiência do sistema elétrico nacional.",
      "causa determinante que explica o motivo pelo qual as usinas foram instaladas no último biênio.",
      "condição prévia indispensável para que o crescimento das usinas continuasse ocorrendo."
    ],
    0,
    "'Contudo' é uma conjunção coordenativa adversativa, que introduz uma ressalva/contraste em relação ao crescimento mencionado na oração anterior."
  ],
  [
    "Relação lógico-discursiva",
    "Considere o período de uma dissertação sobre saneamento básico:\n\n“Embora a legislação assegure o acesso à água potável a todos os cidadãos, milhões de brasileiros ainda convivem com valas a céu aberto nas periferias.”\n\nA oração iniciada pela conjunção 'Embora' exprime ideia de:",
    [
      "concessão, introduzindo um fato que contrasta com a realidade mas não impede sua ocorrência.",
      "consequência direta gerada pela aprovação da nova legislação sobre saneamento básico.",
      "finalidade, indicando o objetivo que os governantes pretendem alcançar nas periferias.",
      "proporção temporal que relaciona o passar dos anos com a melhoria dos serviços públicos.",
      "comparação direta entre as cidades do interior e os grandes centros metropolitanos."
    ],
    0,
    "'Embora' é conjunção subordinativa concessiva: apresenta um direito legal reconhecido que, no entanto, não é respeitado na prática factual descrita na oração principal."
  ],
  [
    "Relação lógico-discursiva",
    "Analise a seguinte orientação de um manual de primeiros socorros:\n\n“Caso a vítima apresente sinais de tontura ou dificuldade respiratória, acione imediatamente o serviço médico de emergência e não ofereça líquidos.”\n\nO termo 'Caso' estabelece no enunciado uma relação de:",
    [
      "condição, subordinando a tomada de atitude médica à presença prévia de determinados sintomas.",
      "conformidade, atestando que o procedimento segue as normas do Ministério da Saúde.",
      "tempo, indicando que o socorro deve ser chamado apenas após a recuperação total da vítima.",
      "causa consumada, comprovando que a tontura foi provocada pela ingestão indevida de água.",
      "explicação genérica sobre o funcionamento do sistema cardiorrespiratório humano."
    ],
    0,
    "'Caso' atua como conjunção subordinativa condicional, estipulando a condição de manifestação dos sintomas para a execução da ação orientada."
  ],
  [
    "Relação lógico-discursiva",
    "Examine o parágrafo de um artigo sobre economia circular:\n\n“A empresa reformulou as embalagens de seus produtos para torná-las 100% recicláveis, a fim de que os resíduos plásticos não sobrecarreguem os aterros sanitários municipais.”\n\nA locução conjuntiva 'a fim de que' expressa sentido de:",
    [
      "finalidade ou propósito almejado com a reformulação das embalagens industriais.",
      "consequência involuntária ocorrida após o encerramento das atividades da fábrica.",
      "concessão que relativiza os altos custos financeiros gerados pelas novas embalagens.",
      "modo particular como os consumidores finais descartam o lixo seco em suas casas.",
      "tempo decorrido entre a fabricação dos recipientes e a decomposição na natureza."
    ],
    0,
    "'A fim de que' introduz uma oração subordinada adverbial final, revelando o objetivo intencional da ação de reformular as embalagens."
  ],
  [
    "Relação lógico-discursiva",
    "Leia a declaração de um pesquisador a respeito do avanço da inteligência artificial:\n\n“À medida que os algoritmos processam volumes maiores de dados, tornam-se mais precisos na identificação de padrões visuais complexos.”\n\nA locução destacada 'À medida que' veicula ideia de:",
    [
      "proporcionalidade, mostrando que o ganho de precisão ocorre simultaneamente ao aumento de dados.",
      "oposição drástica entre a quantidade bruta de arquivos e a capacidade cognitiva dos computadores.",
      "condição hipotética que depende de aprovação prévia em comitês de ética em tecnologia.",
      "causa isolada que independe do aprendizado contínuo promovido pelas redes neurais.",
      "conclusão definitiva que encerra a necessidade de pesquisas futuras no campo da informática."
    ],
    0,
    "'À medida que' é uma locução conjuntiva proporcional, que expressa uma relação de simultaneidade e gradação contínua entre duas grandezas em evolução."
  ],
  [
    "Relação lógico-discursiva",
    "Considere o trecho de uma crônica sobre a vida nas metrópoles:\n\n“Como a chuva forte alagou as principais avenidas do centro, os ônibus deixaram de circular e o trânsito entrou em colapso total antes do anoitecer.”\n\nA conjunção 'Como' exerce na oração papel de:",
    [
      "conector causal, indicando o motivo determinante para a paralisação do transporte coletivo.",
      "operador comparativo, traçando um paralelo de semelhança entre a chuva e o fluxo dos ônibus.",
      "marcador conformativo, demonstrando que o alagamento ocorreu de acordo com a previsão do tempo.",
      "conjunção aditiva, somando dois fenômenos climáticos independentes na mesma região urbana.",
      "elemento temporal que indica apenas o instante em que a noite começou a cair sobre a cidade."
    ],
    0,
    "Quando inicia o período com valor de 'já que' ou 'visto que', a conjunção 'Como' introduz uma oração subordinada adverbial causal."
  ],
  [
    "Relação lógico-discursiva",
    "Analise a argumentação em uma coluna de opinião pedagógica:\n\n“A leitura assídua desenvolve o vocabulário, aguça o senso crítico e estimula a empatia. Portanto, incentivar a literatura na infância é um investimento insubstituível para o futuro de qualquer país.”\n\nO vocábulo 'Portanto' estabelece uma conexão lógico-discursiva de:",
    [
      "conclusão, sintetizando e fechando o raciocínio construído a partir das premissas anteriores.",
      "ressalva adversativa, questionando a eficácia real da leitura nos primeiros anos escolares.",
      "hipótese probabilística desprovida de comprovação científica no desenvolvimento cognitivo.",
      "enumeração cronológica dos livros indicados para cada faixa etária de estudantes.",
      "alternância de opções entre a educação formal nas escolas e a leitura domiciliar."
    ],
    0,
    "'Portanto' é uma conjunção coordenativa conclusiva, que arremata logicamente o raciocínio dedutivo deduzido das premissas apresentadas no início do parágrafo."
  ],
  [
    "Relação lógico-discursiva",
    "Examine a seguinte advertência de segurança no ambiente de trabalho:\n\n“O uso de óculos de proteção e protetores auriculares é obrigatório nesta oficina mecânica, já que o manuseio de lixadeiras gera ruído intenso e projeção de partículas incandescentes.”\n\nA locução conjuntiva 'já que' introduz no texto uma relação de:",
    [
      "justificativa causal, explicitando os perigos concretos que motivam a exigência dos equipamentos.",
      "restrição que limita o uso dos equipamentos exclusivamente durante inspeções da fiscalização.",
      "concessão que tolera a dispensa voluntária dos óculos caso o operário considere o dia muito quente.",
      "tempo futuro indicando o momento exato em que as lixadeiras passarão por manutenção preventiva.",
      "proporção inversa entre a velocidade das ferramentas elétricas e o volume de faíscas produzidas."
    ],
    0,
    "'Já que' introduz uma oração subordinada adverbial causal, apresentando o motivo empírico e a justificativa que embasam a norma de segurança."
  ],
  [
    "Relação lógico-discursiva",
    "Considere o fragmento de um artigo sobre biologia marinha:\n\n“Os recifes de coral abrigam mais de 25% de todas as espécies marinhas conhecidas. Não obstante, essas estruturas milenares sofrem com o branqueamento acelerado decorrente da elevação térmica dos oceanos.”\n\nA locução conjuntiva 'Não obstante' confere ao texto um sentido de:",
    [
      "quebra de expectativa (adversidade), contrastando a enorme riqueza biológica com a sua vulnerabilidade.",
      "confirmação enfática de que os corais estão imunes ao aquecimento global das águas profundas.",
      "continuidade cronológica das etapas de reprodução assexuada dos organismos marinhos.",
      "conclusão definitiva que prevê o desaparecimento de todas as espécies oceânicas em curto prazo.",
      "conformidade com as metas do tratado internacional de proteção dos ecossistemas costeiros."
    ],
    0,
    "'Não obstante' equivale a 'contudo' ou 'no entanto', introduzindo uma adversidade/quebra de expectativa entre a relevância vital dos recifes e a ameaça de destruição que enfrentam."
  ],
  [
    "Relação lógico-discursiva",
    "Leia a declaração de um diretor de cinema sobre o orçamento de seu filme:\n\n“Conseguimos alugar figurinos de época e equipamentos de som de ponta. Além do mais, a prefeitura isentou as taxas de filmagem nas praças históricas da cidade.”\n\nA locução 'Além do mais' atua como operador discursivo que:",
    [
      "agrega um argumento adicional e relevante para corroborar o êxito financeiro na produção da obra.",
      "retifica uma informação errônea sobre o custo de locação das roupas dos atores principais.",
      "estabelece uma comparação desfavorável entre a prefeitura local e os produtores independentes.",
      "expressa uma relação de causa e efeito imediata entre a história do filme e as taxas tributárias.",
      "indica o encerramento formal das filmagens devido a desentendimentos burocráticos com o município."
    ],
    0,
    "'Além do mais' é um conector de adição argumentativa que soma um novo dado favorável (a isenção das taxas) à lista de facilidades obtidas pela produção."
  ],
  [
    "Relação lógico-discursiva",
    "Analise o período extraído de um ensaio sociológico sobre o mercado editorial:\n\n“O livro impresso não desapareceu com o surgimento dos e-readers; pelo contrário, as vendas de edições físicas de luxo apresentaram crescimento consistente nos últimos cinco anos.”\n\nA locução 'pelo contrário' introduz no debate uma ideia de:",
    [
      "oposição corretiva que nega categoricamente a previsão anterior e apresenta o cenário oposto.",
      "concessão que admite o fracasso econômico total das gráficas e livrarias especializadas.",
      "dúvida metódica sobre a confiabilidade das pesquisas de hábitos de leitura da população.",
      "consequência natural do declínio tecnológico observado nos aparelhos de leitura digital.",
      "finalidade mercadológica voltada a eliminar a concorrência entre formatos concorrentes."
    ],
    0,
    "'Pelo contrário' atua como um operador de contraposição enfática e corretiva, demonstrando que a realidade refutou a hipótese do desaparecimento dos livros físicos."
  ],
  [
    "Relação lógico-discursiva",
    "Examine o seguinte trecho de uma crônica esportiva:\n\n“O time manteve a posse de bola no campo adversário durante todo o segundo tempo. Por conseguinte, o gol da vitória surgiu com naturalidade após tanta insistência tática.”\n\nA locução conjuntiva 'Por conseguinte' estabelece uma conexão lógico-semântica de:",
    [
      "consequência e conclusão direta derivada do domínio territorial exercido pela equipe.",
      "contradição inesperada que surpreendeu os torcedores presentes no estádio de futebol.",
      "condição indispensável que dependia de um erro de arbitragem no lance anterior ao gol.",
      "adição neutra de lances isolados ocorridos ao longo da partida sem relação de causa e efeito.",
      "tempo cronológico que marca o apito final do juiz encerrando a competição oficial."
    ],
    0,
    "'Por conseguinte' equivale a 'portanto' ou 'como resultado', conectando o esforço continuado em campo à sua consequência lógica natural (o gol da vitória)."
  ],
  [
    "Relação lógico-discursiva",
    "Considere a declaração de um agrônomo sobre o cultivo de hortaliças:\n\n“Conquanto o solo da região seja arenoso e pobre em matéria orgânica, a técnica de compostagem caseira possibilitou colheitas fartas de legumes sem o uso de fertilizantes químicos.”\n\nA palavra 'Conquanto' possui valor semântico idêntico ao de:",
    [
      "“Embora”, expressando uma concessão que valoriza a eficiência da técnica agronômica empregada.",
      "“Porque”, indicando que o solo arenoso é a causa primária da fertilidade dos vegetais.",
      "“Desde que”, condicionando o plantio das hortaliças à ausência de chuvas torrenciais na estação.",
      "“Assim que”, marcando a rapidez imediata com que as sementes germinam após o semeio.",
      "“Portanto”, deduzindo a escassez de água como resultado inevitável da compostagem natural."
    ],
    0,
    "'Conquanto' é uma conjunção subordinativa concessiva erudita, perfeitamente sinônima de 'embora', 'posto que' e 'ainda que'."
  ],
  [
    "Relação lógico-discursiva",
    "Leia a seguinte instrução contida em um regulamento de olimpíada de química:\n\n“O aluno poderá ingressar na sala de prova desde que apresente documento oficial com foto e comprovante de matrícula impresso.”\n\nA locução conjuntiva 'desde que' introduz uma oração que expressa:",
    [
      "condição ou requisito obrigatório para a permissão de acesso ao local de realização do exame.",
      "tempo cronológico decorrido desde a emissão da cédula de identidade do participante.",
      "causa do cancelamento de inscrições com preenchimento incorreto de dados pessoais.",
      "proporção gradual entre o número de fiscais de sala e a quantidade de candidatos presentes.",
      "comparação entre o documento oficial de identificação civil e o cartão de inscrição do evento."
    ],
    0,
    "A locução 'desde que' com verbo no subjuntivo ('apresente') estabelece uma condição obrigatória: o ingresso só é autorizado se o estudante cumprir a exigência."
  ],
  [
    "Relação lógico-discursiva",
    "Analise a estrutura argumentativa do seguinte parágrafo sobre nutrição e saúde pública:\n\n“O consumo excessivo de alimentos ultraprocessados eleva a incidência de hipertensão e diabetes precoce. Dessa forma, a rotulagem frontal com alertas claros nas embalagens torna-se medida sanitária indispensável.”\n\nA expressão 'Dessa forma' desempenha a função de:",
    [
      "conectar uma premissa causal de saúde a uma conclusão prática no âmbito das políticas regulatórias.",
      "introduzir uma ressalva que contesta as evidências médicas associadas aos alimentos industrializados.",
      "enumerar os ingredientes artificiais mais prejudiciais presentes nos produtos açucarados.",
      "relativizar a responsabilidade das indústrias de refrigerantes na epidemia de obesidade infantil.",
      "indicar o modo mecânico como as máquinas gráficas imprimem os alertas nos rótulos de papelão."
    ],
    0,
    "'Dessa forma' atua como articulador conclusivo-consecutivo, encadeando a demonstração do perigo biológico à necessidade imperativa de regulamentação pública na rotulagem."
  ],
  [
    "Interpretação de narrativa literária",
    "Leia o trecho de 'A Cartomante', conto de Machado de Assis:\n\n“Camilo ria-se dele; dizia-lhe que era um ingênuo, que a razão humana não podia subordinar-se a semelhantes tolices. Vilela não se zangava; sorria também, e dizia-lhe que era natural na mocidade duvidar de tudo. Mas quando Camilo se viu no meio do turbilhão, com o coração aos saltos e a alma suspensa por um fio, adivinhem quem foi que ele procurou em segredo? A mesma mulher misteriosa que antes ele cobria de zombarias.”\n\nA atitude final de Camilo ao procurar a cartomante revela:",
    [
      "a fragilidade de suas convicções racionais diante do medo e do desespero emocional.",
      "a certeza inabalável de que a ciência moderna é capaz de solucionar qualquer dilema humano.",
      "a lealdade incondicional aos conselhos fraternos que recebia diariamente de Vilela.",
      "o desejo premeditado de desmascarar a charlatice da vidente diante de testemunhas.",
      "a indiferença fria com que enfrentava as reviravoltas trágicas de seu destino amoroso."
    ],
    0,
    "Machado de Assis constrói a ironia trágica do conto mostrando que o ceticismo racional de Camilo desmorona assim que ele é tomado pela angústia, buscando o mesmo misticismo que antes ridicularizava."
  ],
  [
    "Interpretação de crônica",
    "Leia o fragmento de uma crônica de Rubem Braga:\n\n“O padeiro deixou o pão à porta, como faz há dez anos, pontualmente às seis. O jornal foi jogado sobre a grade com o mesmo ruído seco. O vizinho ligou o rádio no noticiário das sete. Tudo parecia idêntico, mas havia um silêncio novo dentro da casa, uma cadeira vazia na cozinha que mudava o peso de todas as coisas da manhã.”\n\nO contraste central explorado pelo cronista no fragmento reside:",
    [
      "na repetição mecânica dos hábitos cotidianos externos frente à dor íntima provocada por uma ausência.",
      "na irritação do morador com a pontualidade excessiva dos serviços de entrega matinais.",
      "na decadência financeira da família que precisou vender os móveis principais da residência.",
      "no medo de que a violência urbana invadisse a tranquilidade secular do bairro residencial.",
      "na indiferença do narrador em relação ao luto vivido por seus vizinhos mais próximos."
    ],
    0,
    "A crônica estabelece o choque lírico entre a indiferença da rotina do mundo (padeiro, jornal, rádio) e a ruptura interna provocada pela perda (a 'cadeira vazia')."
  ],
  [
    "Interpretação de narrativa contemporânea",
    "Leia o trecho de um conto contemporâneo sobre a rotina de um entregador por aplicativo:\n\n“Pedro ajustou a mochila térmica às costas e conferiu a tela do celular. Eram vinte e duas corridas em onze horas sob sol e chuva. Cada notificação sonora trazia um misto de alívio por garantir o almoço do dia seguinte e exaustão pelo trânsito caótico. Ao entregar a última pizza em um prédio de luxo, o cliente sequer olhou nos seus olhos; limitou-se a pegar a caixa e fechar o vidro do portão.”\n\nA cena final do conto expressa principalmente:",
    [
      "a invisibilidade social e a desumanização vivenciadas pelo trabalhador na economia de plataformas.",
      "a gratidão mútua estabelecida entre o cliente e o entregador na conclusão do serviço.",
      "o orgulho do jovem em poder usufruir de flexibilidade irrestrita em sua jornada de trabalho.",
      "o desinteresse de Pedro em receber a remuneração estipulada para a corrida noturna.",
      "a eficiência tecnológica dos condomínios que dispensam qualquer contato com pedestres."
    ],
    0,
    "O gesto de pegar a encomenda sem olhar nos olhos e fechar o vidro simboliza a indiferença e a invisibilidade social a que são submetidos os trabalhadores precarizados por aplicativos."
  ],
  [
    "Interpretação de narrativa literária",
    "Considere o fragmento de 'Clara dos Anjos', de Lima Barreto:\n\n“Clara ouvia aquelas palavras de advertência da mãe com um sentimento de revolta surda. Ela queria crer que o mundo era amplo, que a música e os passeios de domingo não traziam perigo algum. Não compreendia ainda que, para uma jovem pobre e mestiça no subúrbio carioca, até mesmo a ingenuidade podia se tornar uma armadilha fatal nas mãos de sedutores inescrupulosos.”\n\nA reflexão do narrador sobre Clara antecipa:",
    [
      "a vulnerabilidade da protagonista decorrente de sua condição social e da ilusão de inocência.",
      "o sucesso estrondoso da jovem como concertista renomada nos teatros da capital federal.",
      "a superação imediata dos preconceitos raciais e de classe existentes na sociedade carioca.",
      "o rompimento definitivo e violento de Clara com todos os membros de sua família biológica.",
      "a vitória judicial obtida pela mãe contra os proprietários de terras da baixada fluminense."
    ],
    0,
    "Lima Barreto articula a denúncia social demonstrando como a ingenuidade de Clara, combinada com a sua vulnerabilidade racial e econômica no subúrbio, a torna alvo fácil de abusos morais."
  ],
  [
    "Interpretação de crônica",
    "Leia o trecho de uma crônica de Luís Fernando Verissimo sobre comunicação:\n\n“O homem entrou na sapataria e começou a gesticular freneticamente. Apontava para o pé, batia palmas, imitava o ruído de uma máquina de costura e depois assobiava. O vendedor, impassível atrás do balcão, esperou o cliente recuperar o fôlego e disse: 'Se o senhor quiser apenas um cadarço marrom, basta pedir em português'.”\n\nO recurso cômico explorado pelo autor decorre do:",
    [
      "contraste exagerado entre o esforço mimético grandioso do cliente e a simplicidade trivial do pedido.",
      "desconhecimento do vendedor sobre os termos técnicos utilizados na indústria de calçados.",
      "fato de o cliente ser estrangeiro e não dominar nenhuma palavra da língua portuguesa.",
      "preconceito dos funcionários do comércio contra pessoas que praticam teatro de rua.",
      "erro de comunicação causado pelo barulho ensurdecedor do trânsito na porta da loja."
    ],
    0,
    "O efeito de humor nasce da quebra de expectativa e da hiperbólica encenação dramática do cliente, desnecessária para comprar algo banal como um cadarço."
  ],
  [
    "Interpretação de narrativa literária",
    "Leia o trecho de 'Vidas Secas', de Graciliano Ramos:\n\n“Fabiano olhou para trás. A catinga estendia-se, cinzenta e morta. Sentia um peso nas pernas, o chocalho da égua tilintava a espaços, triste. Sinha Vitória carregava o baú de folha na cabeça; o menino mais velho puxava o cachorro Baleia pela correia. Nenhum deles dizia palavra, porque a sede não deixava a língua mover-se. Eram bichos empurrados pela seca, sem rumo, sonhando com uma terra onde houvesse lodo e capim verde.”\n\nA comparação implícita entre os retirantes e os animais ('Eram bichos empurrados pela seca') revela:",
    [
      "o processo de zoomorfização e degradação humana imposto pela hostilidade climática e pelo abandono social.",
      "o afeto harmonioso e idílico que os sertanejos mantinham com a fauna nativa do sertão nordestino.",
      "a agressividade selvagem da família de retirantes ao invadir propriedades privadas no caminho.",
      "o desprezo de Fabiano pela agricultura tradicional em benefício da caça clandestina de preás.",
      "a celebração da liberdade irrestrita dos vaqueiros nômades pelas estradas do semiárido."
    ],
    0,
    "Graciliano Ramos emprega a zoomorfização para retratar como as condições desumanas de sobrevivência no sertão reduzem o ser humano ao nível puramente instintivo e biológico."
  ],
  [
    "Interpretação de crônica",
    "Analise o excerto de uma crônica contemporânea sobre a memória escolar:\n\n“Revisitei minha antiga escola trinta anos depois. Os corredores que na minha lembrança pareciam avenidas monumentais agora se mostravam estreitos e acanhados. As janelas, que na infância me pareciam altíssimas como muralhas de castelo, mal batiam no meu peito. Compreendi, com um aperto no peito, que não era o prédio que havia encolhido: era eu que havia crescido e deixado a infância para trás.”\n\nA mudança na percepção física do espaço físico expressa:",
    [
      "o distanciamento irreversível entre a imaginação infantil engrandecedora e o olhar desiludido do adulto.",
      "a precariedade das obras públicas que diminuíram as dimensões das salas de aula ao longo dos anos.",
      "a insatisfação do cronista com a qualidade do ensino recebido durante o ciclo fundamental.",
      "o arrependimento de ter retornado a um local que não guardava qualquer significado afetivo.",
      "a constatação técnica de que os prédios escolares antigos não seguiam normas de acessibilidade."
    ],
    0,
    "O choque dimensional serve de metáfora para a passagem do tempo: a criança agiganta o mundo ao seu redor pela imaginação, enquanto o adulto o mede com a régua desapaixonada da maturidade."
  ],
  [
    "Interpretação de narrativa literária",
    "Leia o trecho de 'A Hora da Estrela', de Clarice Lispector:\n\n“Macabéa era virgem e gostava de tomar café frio. Vivia num quarto alugado com quatro moças que trabalhavam em lojas de tecidos. Tinha uma tosse seca e alimentava-se de cachorro-quente. Mas nos domingos pela manhã, quando ouvia no rádio de pilha os concertos clássicos da Rádio Relógio, sentia uma alegria sem causa, como se a música tocasse numa parte de sua alma que a miséria diária não conseguia estragar.”\n\nO contraste apresentado pela narradora entre o cotidiano de Macabéa e a experiência musical evidencia:",
    [
      "a preservação de uma centelha de sensibilidade e transcendência em meio à extrema penúria material.",
      "a formação acadêmica sofisticada que a protagonista adquiriu antes de migrar para o Rio de Janeiro.",
      "a rejeição absoluta de Macabéa pela vida urbana e o desejo ardente de retornar aos sertões alagoanos.",
      "o vício perigoso em aparelhos eletrônicos que impedia a jovem de se concentrar no trabalho de datilógrafa.",
      "a alienação política da personagem, que preferia a música clássica à convivência com suas colegas."
    ],
    0,
    "Clarice Lispector revela a beleza discreta da personagem: mesmo imersa na miséria fisiológica e social, ela experimenta instantes de encantamento desinteressado e genuíno através da arte."
  ],
  [
    "Interpretação de narrativa literária",
    "Considere o seguinte trecho de 'O Cortiço', de Aluísio Azevedo:\n\n“Às cinco da manhã o cortiço acordava, abrindo, não os olhos, mas as suas infinitas portas e janelas alinhadas. Um rumor crescia, condensava-se; um zunzum de abelhas operárias saindo da colmeia. Homens de chinelos desciam as escadas de caracol, mulheres esfregavam o chão com sabão de cinza, crianças choramingavam no pátio empapado de lavagens.”\n\nA personificação do cortiço no início do parágrafo sugere:",
    [
      "a concepção do espaço habitacional como um organismo vivo e pulsante que condiciona o comportamento dos moradores.",
      "o isolamento aristocrático das famílias ricas que habitavam os sobrados ao redor da estalagem.",
      "a calmaria campestre e o silêncio absoluto que reinavam nas primeiras horas da madrugada urbana.",
      "o desinteresse dos trabalhadores pela faina diária nas pedreiras e lavanderias da capital.",
      "a superioridade civilizatória dos operários estrangeiros em relação aos trabalhadores nativos."
    ],
    0,
    "Fiel aos postulados naturalistas, Aluísio Azevedo trata a habitação coletiva como um corpo orgânico ('acordava, abrindo suas portas'), determinando a vida biológica dos personagens agrupados como 'abelhas'."
  ],
  [
    "Interpretação de crônica",
    "Leia o trecho de uma crônica de Fernando Sabino sobre a infância e o futebol de rua:\n\n“Nossa trave eram dois paralelepípedos empilhados; nossa bola, uma meia velha recheada com panos e amarrada com barbante de açougue. Não havia juiz, uniforme nem impedimento. O jogo só terminava quando o dono da bola era chamado pela mãe para tomar banho ou quando a noite engolia a rua por completo. Éramos felizes e tínhamos a eternidade na ponta dos pés descalços.”\n\nO tom predominante no relato é de:",
    [
      "nostalgia afetuosa que valoriza a ludicidade e a simplicidade das brincadeiras espontâneas da meninice.",
      "indignação e revolta com a negligência do poder público em não construir estádios na periferia.",
      "ressentimento contra o autoritarismo das mães que interrompiam as disputas esportivas dos jovens.",
      "crítica severa ao descumprimento das regras técnicas oficiais estabelecidas pela FIFA.",
      "desencanto amargo com o futebol moderno profissionalizado e repleto de patrocínios milionários."
    ],
    0,
    "A crônica constrói uma atmosfera memorialística e poética, elegendo a precariedade dos recursos materiais como símbolo de liberdade, comunhão e pureza da infância."
  ],
  [
    "Interpretação de narrativa contemporânea",
    "Examine o seguinte fragmento de um microconto sobre conexões virtuais:\n\n“Sentados lado a lado no sofá da sala, pai e filha compartilhavam links engraçados pelo chat do celular. Riam em sincronia com o brilho azul das telas refletido em seus rostos, enquanto o café esfriava no bule e nenhum dos dois ouvia o que o outro silenciava.”\n\nA imagem do 'café esfriando' e do 'silêncio não ouvido' constrói uma crítica a respeito da:",
    [
      "ilusão de proximidade gerada pelas redes sociais, que muitas vezes mascara o afastamento afetivo no mundo real.",
      "falta de eletricidade doméstica que obriga os moradores a utilizar aparelhos alimentados por bateria.",
      "incompatibilidade geracional intransponível entre idosos e adolescentes na cultura pós-moderna.",
      "periculosidade dos monitores luminosos para a saúde visual de quem utiliza celulares no escuro.",
      "incompetência culinária das famílias contemporâneas no preparo adequado de bebidas quentes."
    ],
    0,
    "O conto ironiza a contradição da hiperconexão digital: indivíduos estão juntos fisicamente e conectados na rede, mas emocionalmente mudos e distantes na relação interpessoal cotidiana."
  ],
  [
    "Interpretação de narrativa literária",
    "Considere o trecho de 'O Menino no Espelho', de Fernando Sabino:\n\n“Certa tarde, cansado de ter que cumprir deveres chatos como estudar tabuada e arrumar o quarto, Fernando descobriu que seu reflexo no espelho do guarda-roupa podia se mover por conta própria. Piscou o olho direito e o reflexo piscou o esquerdo. Sorriu e o duplo gargalhou. Foi então que teve a ideia genial: faria um pacto com ele para que o menino do espelho ficasse no seu lugar fazendo as obrigações, enquanto ele próprio fugiria pela janela para viver aventuras de verdade.”\n\nO conflito inicial da narrativa nasce:",
    [
      "da recusa infantil em se submeter às exigências disciplinares da vida social e familiar.",
      "do pavor assustador provocado pelo surgimento de um fantasma assombroso dentro de casa.",
      "da incapacidade do garoto em aprender noções elementares de aritmética e geometria escolar.",
      "da briga violenta entre irmãos gêmeos que disputavam o espelho de cristal do quarto de casal.",
      "da intenção do protagonista de abandonar definitivamente sua família para morar na floresta."
    ],
    0,
    "O motor gerador da trama é o desejo tipicamente infantil de escapar do tédio das responsabilidades e obrigações diárias (arrumar quarto, estudar tabuada), materializado no duplo fantástico."
  ],
  [
    "Interpretação de crônica",
    "Leia o trecho de uma crônica de Carlos Drummond de Andrade sobre a máquina de escrever:\n\n“Aquele teclado mecânico, com seus martelos de chumbo que golpeavam a fita entintada, tinha uma música própria: um tique-taque ritmado que parecia acompanhar o galope das ideias. Errar uma letra era um drama que exigia raspadeiras ou fitas corretivas desajeitadas. Hoje, com a tecla 'delete', o erro desaparece sem deixar cicatriz. Mas será que, ao apagar tão facilmente as falhas do texto, não estamos também nos esquecendo do valor do esforço e da reflexão antes de cada palavra digitada?”\n\nA interrogação final do cronista propõe uma reflexão sobre:",
    [
      "a perda da densidade reflexiva e do cuidado artesanal com a escrita provocada pela facilidade tecnológica.",
      "a urgência de abolir os computadores pessoais e restabelecer o uso obrigatório de máquinas antigas nas redações.",
      "a superioridade estética inquestionável das fitas corretivas em comparação com os programas de texto modernos.",
      "o perigo de intoxicação por chumbo que ameaçava os datilógrafos profissionais nos escritórios do século XX.",
      "a lentidão insuportável das prensas mecânicas que atrasavam a circulação dos jornais diários nas capitais."
    ],
    0,
    "Drummond utiliza a evolução da técnica (do martelo da máquina de escrever ao comando digital 'delete') para filosofar sobre como a facilidade em apagar erros pode banalizar a ponderação prévia e a disciplina da escrita."
  ],
  [
    "Interpretação de narrativa contemporânea",
    "Examine o fragmento da narrativa a seguir:\n\n“Mariana guardava na gaveta trancada um caderno pautado onde anotava os nomes de todas as árvores que encontrava no caminho para a escola. Para a maioria dos colegas de turma, a avenida não passava de um mar de asfalto cinzento, ônibus barulhentos e postes de cimento. Para ela, era um corredor botânico onde sibipirunas, quaresmeiras e ipês-amarelos resistiam silenciosamente entre as rachaduras das calçadas.”\n\nA caracterização da personagem Mariana evidencia uma postura de:",
    [
      "sensibilidade ecológica e olhar atento à natureza oculta no cenário árido da urbanização.",
      "rejeição completa ao convívio comunitário com os amigos de sala de aula e professores.",
      "desconhecimento dos perigos reais de atropelamento e poluição sonora ao caminhar pelas ruas.",
      "pretensão pretensiosa em querer catalogar espécies sem ter cursado graduação em biologia vegetal.",
      "desprezo pelas normas escolares que exigem pontualidade e assiduidade no cumprimento das aulas."
    ],
    0,
    "O narrador destaca a singularidade da visão de Mariana, que é capaz de poetizar e valorizar a vida vegetal oculta onde a maioria enxerga apenas concreto cinza e pressa urbana."
  ],
  [
    "Interpretação de narrativa literária",
    "Leia o trecho de 'O Quinze', de Rachel de Queiroz:\n\n“Chico Bento apeou do jumento e olhou ao redor. A terra rachada estalava sob a sola das alpercatas. Na beira do caminho, o gado emagrecido disputava os gravetos secos de uma jurema sem folhas. Ele chamou a mulher e os filhos com um gesto cansado. Haviam caminhado vinte léguas desde a fazenda abandonada, e a única coisa que os mantinha em pé era a esperança teimosa de alcançar o trem dos flagelados que partia rumo ao litoral.”\n\nO elemento catalisador da jornada de Chico Bento e sua família é:",
    [
      "a busca desesperada por sobrevivência física diante da catástrofe climática e da perda de seus meios de sustento.",
      "a vontade aventureira de conhecer os balneários marítimos e as praias famosas da capital cearense.",
      "o conflito armado violento travado com os proprietários da fazenda vizinha por disputas de terras férteis.",
      "o desejo do patriarca em abandonar a vida rural para abrir um estabelecimento comercial no centro urbano.",
      "a convocação militar compulsória do governo federal para o alistamento dos filhos homens no exército."
    ],
    0,
    "Em 'O Quinze', romance seminal do Modernismo de 30, a seca histórica de 1915 e a fome extrema forçam a migração forçada e dolorosa dos sertanejos para tentar salvar suas vidas no litoral."
  ],
  [
    "Texto argumentativo e tese",
    "Leia o editorial a seguir sobre o futuro do trabalho:\n\n“A automação de postos operacionais não é um fenômeno inédito na história da humanidade. Desde a Revolução Industrial, cada salto tecnológico extingue ocupações repetitivas e abre espaço para novas carreiras que exigem criatividade, raciocínio crítico e habilidades socioemocionais. Em vez de temer os avanços da inteligência artificial, o Brasil precisa reformular com urgência suas matrizes curriculares, garantindo que os jovens sejam preparados para conceber, liderar e programar soluções, e não para competir com os robôs em tarefas mecânicas.”\n\nA tese defendida pelo editorialista é que:",
    [
      "o país deve responder à automação com uma reforma educacional voltada para o desenvolvimento de competências humanas complexas.",
      "a inteligência artificial deve ter sua aplicação proibida por lei para preservar os empregos manuais e operacionais.",
      "a Revolução Industrial foi um fracasso econômico que reduziu o bem-estar e a renda das famílias operárias.",
      "as carreiras que dependem de criatividade e liderança serão completamente extintas nas próximas décadas.",
      "os jovens devem abandonar a escola regular para se dedicarem exclusivamente ao treinamento em linhas de montagem."
    ],
    0,
    "O autor estrutura seu ponto de vista central em torno da ideia de que o medo da tecnologia é inócuo e que a saída inteligente é reformular a educação básica e técnica para capacitar os jovens em habilidades humanas não automatizáveis."
  ],
  [
    "Texto argumentativo e estratégia persuasiva",
    "Analise o trecho de um artigo de opinião sobre mobilidade urbana:\n\n“De acordo com dados do Instituto de Pesquisa Econômica Aplicada (IPEA), os trabalhadores de baixa renda das capitais brasileiras gastam, em média, mais de quatro horas por dia no deslocamento entre casa e trabalho. Isso equivale a um mês inteiro por ano perdido dentro de ônibus superlotados. Quando uma sociedade rouba o tempo de descanso, estudo e convívio familiar de sua população trabalhadora, ela não apenas sabota a produtividade econômica, mas comete uma grave violência contra a dignidade humana.”\n\nPara conferir credibilidade e força argumentativa ao seu posicionamento, o autor recorre principalmente a:",
    [
      "um argumento de autoridade fundamentado em dados estatísticos oficiais de um instituto de pesquisa renomado.",
      "relatos pessoais fictícios sem comprovação metodológica para comover emocionalmente o leitorado.",
      "citações de poetas clássicos greco-romanos sobre a passagem inexorável das horas do dia.",
      "ataques desmedidos e ofensas de cunho partidário direcionadas contra os motoristas de transporte público.",
      "ironias jocosas e piadas sarcásticas para desqualificar a importância da infraestrutura viária."
    ],
    0,
    "A estratégia argumentativa central é o argumento de autoridade calcado em dados empíricos do IPEA, convertendo os números em uma imagem concreta ('um mês inteiro por ano') para sustentar a tese moral da violência contra a dignidade."
  ],
  [
    "Texto argumentativo e relação de causa e efeito",
    "Considere o seguinte parágrafo sobre segurança alimentar:\n\n“A proliferação de desertos alimentares — regiões periféricas onde é praticamente impossível adquirir frutas, legumes e verduras frescas a preços justos — empurra as famílias vulneráveis para o consumo diário de biscoitos recheados, macarrão instantâneo e refrigerantes ultraprocessados. O resultado dessa dieta forçada é a elevação vertiginosa dos casos de obesidade infantil, pressão alta e insuficiência renal nos postos do SUS.”\n\nNesse texto, a alta na incidência de doenças crônicas entre jovens das periferias é apresentada como:",
    [
      "consequência direta da falta de acesso físico e financeiro a alimentos in natura saudáveis no território onde vivem.",
      "causa primária que motivou o surgimento e a expansão dos desertos alimentares no entorno das metrópoles.",
      "escolha consciente e soberana dos pais que rejeitam o consumo de vegetais orgânicos por mero capricho.",
      "proporção inversa que diminui à medida que o consumo de refrigerantes e açúcares cresce nas escolas.",
      "hipótese descartada pelos órgãos de saúde em decorrência da melhoria na renda básica das famílias atendidas."
    ],
    0,
    "O texto desenha um nexo causal inequívoco: a causa é o deserto alimentar (falta de acesso a comida fresca), e o efeito/consequência direta é o consumo forçado de ultraprocessados gerador de doenças crônicas no SUS."
  ],
  [
    "Texto argumentativo e contra-argumentação",
    "Leia o trecho de um ensaio sobre preservação de patrimônio histórico:\n\n“Muitos empreendedores imobiliários argumentam que tombar casarões coloniais trava o desenvolvimento urbano e encarece as construções modernas. Esse raciocínio, contudo, é míope e ultrapassado. Experiências internacionais em cidades como Roma, Porto e Cartagena provam que centros históricos revitalizados atraem turismo de alto valor, geram comércio sofisticado e valorizam o metro quadrado de todo o entorno muito mais do que torres genéricas de vidro e concreto.”\n\nA estratégia do autor para rebater a tese dos empreendedores fundamenta-se em:",
    [
      "contra-argumentar demonstrando, por meio de exemplos internacionais de sucesso, a viabilidade econômica da conservação histórica.",
      "concordar integralmente com a demolição dos imóveis coloniais para baratear o custo das moradias populares.",
      "provar que o tombamento arquitetônico tem como único objetivo impedir a chegada de turistas estrangeiros às capitais.",
      "acusar as cidades europeias de negligenciarem o crescimento de suas respectivas economias de mercado.",
      "sugerir que a engenharia civil moderna não possui tecnologia suficiente para erguer edifícios envidraçados."
    ],
    0,
    "O autor utiliza a técnica de refutação/contra-argumentação: apresenta a objeção dos críticos ('tombar trava o desenvolvimento') para em seguida desarmá-la com contraprovas de cidades que prosperaram exatamente ao preservar seu patrimônio."
  ],
  [
    "Texto argumentativo e ideia central",
    "Examine o parágrafo retirado de um artigo sobre o uso de telas na primeira infância:\n\n“Nenhuma babá digital, por mais interativo e colorido que seja o software infantil, é capaz de substituir a experiência sensorial de manipular massinha de modelar, rolar na grama ou escutar a voz dos pais narrando uma história antes de dormir. O desenvolvimento neural de uma criança até os três anos depende vitalmente do toque tridimensional e da reciprocidade afetiva humana real. Permitir que telas iluminadas hipnotizem bebês para que eles fiquem quietos é anestesiar a curiosidade viva que constrói as conexões cerebrais mais ricas.”\n\nA mensagem central defendida pelo texto é que:",
    [
      "o contato físico e afetivo com o mundo real e com os cuidadores é insubstituível para a arquitetura cerebral infantil.",
      "as crianças devem utilizar computadores e smartphones desde os primeiros meses de vida para acelerar a alfabetização.",
      "os livros de história tradicionais tornaram-se ferramentas obsoletas e prejudiciais ao sono dos bebês.",
      "as massinhas de modelar apresentam compostos químicos nocivos que atrasam a coordenação motora dos alunos.",
      "os aplicativos infantis devem ser aperfeiçoados para que os pais não precisem dialogar com seus filhos pequenos."
    ],
    0,
    "A ideia central, reiterada em todo o texto, é que o cérebro infantil necessita de interações afetivas reais e experiências tridimensionais concretas, as quais jamais podem ser substituídas por dispositivos eletrônicos."
  ],
  [
    "Texto argumentativo e recurso retórico",
    "Considere a conclusão de um manifesto em defesa da ciência brasileira:\n\n“Queremos ser um país que meramente consome tecnologia importada pagando royalties estratosféricos, ou queremos ser a nação que descobre novos fármacos na biodiversidade amazônica, projeta satélites espaciais e lidera a produção de biocombustíveis? O orçamento destinado às universidades públicas não é caridade fiscal; é a única ponte possível entre o subdesenvolvimento crônico e a soberania nacional definitiva.”\n\nAo formular a pergunta no início do parágrafo, o autor emprega uma:",
    [
      "pergunta retórica que instiga o leitor a reconhecer a urgência do investimento soberano em ciência própria.",
      "dúvida científica sincera diante da falta de capacidade intelectual dos acadêmicos brasileiros.",
      "pesquisa de opinião pública com opções de múltipla escolha destinadas aos gestores dos laboratórios.",
      "crítica destrutiva que desencoraja os jovens cientistas a ingressarem em programas de pós-graduação.",
      "ordem judicial que obriga as empresas multinacionais a transferirem suas sedes para o território nacional."
    ],
    0,
    "Trata-se de uma pergunta retórica clássica: o autor não espera resposta literal, mas utiliza o recurso para criar um dilema contrastante que induz o interlocutor à conclusão desejada (a soberania científica)."
  ],
  [
    "Texto argumentativo e operadores de coesão",
    "Leia o trecho de um editorial sobre a crise de saúde mental entre adolescentes:\n\n“Muitos culpam exclusivamente a pressão por aprovação em vestibulares pelo esgotamento mental dos jovens. É inegável que a cobrança acadêmica desempenha um papel relevante. Não obstante, desconsiderar o impacto dos algoritmos de validação social nas redes, a privação crônica de sono e a escassez de momentos de ócio criativo empobrece o diagnóstico e inviabiliza soluções verdadeiramente eficazes.”\n\nO operador 'Não obstante' cumpre no texto a função de:",
    [
      "introduzir uma ressalva que amplia a análise do problema, refutando explicações simplistas e monocausais.",
      "confirmar que o vestibular concorrido é o único e definitivo causador do sofrimento emocional dos jovens.",
      "comprovar que os aplicativos de redes sociais não afetam em nada os hábitos de sono dos estudantes.",
      "concluir o parágrafo afirmando que o diagnóstico da crise de saúde mental já foi totalmente resolvido.",
      "eliminar a importância de momentos de descanso e lazer para o equilíbrio psicológico na adolescência."
    ],
    0,
    "O conector adversativo 'Não obstante' rejeita o reducionismo da tese simplista (culpar apenas o vestibular) e abre espaço para incorporar outros fatores cruciais (telas, sono, ócio) à reflexão."
  ],
  [
    "Texto argumentativo e identificação de tese",
    "Analise a reflexão de um urbanista sobre o transporte individual motorizado:\n\n“Alargar faixas de avenidas e construir viadutos para combater o trânsito é uma ilusão geométrica: quanto mais asfalto se cria, mais carros são estimulados a circular, saturando rapidamente a nova estrutura em um ciclo vicioso sem fim. A única intervenção urbana verdadeiramente inteligente consiste em retirar espaço dos automóveis para concedê-lo prioritariamente ao transporte sobre trilhos de média e alta capacidade, às ciclovias interligadas e ao trânsito seguro de pedestres nas calçadas arborizadas.”\n\nA tese central exposta pelo urbanista sustenta que:",
    [
      "a mobilidade urbana só melhora com a priorização do transporte coletivo e ativo em detrimento da ampliação viária para automóveis.",
      "os viadutos suspensos devem ser ampliados para eliminar completamente o tráfego de pedestres nas ruas centrais.",
      "o investimento em trens e metrôs gera poluição sonora inaceitável e satura o orçamento das grandes cidades.",
      "os automóveis particulares são o único meio de locomoção eficiente e compatível com as metrópoles modernas.",
      "as árvores nas calçadas devem ser retiradas para permitir a abertura de novas faixas para carros populares."
    ],
    0,
    "O texto ataca a falácia de abrir mais pistas para carros (demanda induzida) e propõe a tese de inverter a pirâmide da mobilidade em favor do transporte público de massa e dos meios não motorizados."
  ],
  [
    "Texto argumentativo e distinção entre fato e opinião",
    "Considere as assertivas contidas em uma matéria sobre exploração espacial:\n\nI. O telescópio espacial James Webb orbita o Sol a aproximadamente 1,5 milhão de quilômetros da Terra.\nII. Suas primeiras observações detectaram galáxias formadas poucas centenas de milhões de anos após o Big Bang.\nIII. O projeto do telescópio é a realização humana mais emocionante e sublime de toda a história da nossa espécie.\n\nEm relação à natureza das afirmações, classifica-se adequadamente como opinião:",
    [
      "apenas a assertiva III, pois expressa um julgamento estético e afetivo de valor subjetivo do autor.",
      "apenas a assertiva I, pois a distância exata em quilômetros varia conforme a interpretação pessoal do leitor.",
      "as assertivas I e II, visto que fenômenos astronômicos do passado não podem ser verificados empiricamente.",
      "todas as assertivas, já que qualquer texto científico baseia-se unicamente nas crenças dos astrônomos.",
      "nenhuma das assertivas, pois todas retratam fatos objetivos constatados por instrumentos de medição."
    ],
    0,
    "As frases I e II contêm dados empíricos verificáveis (fatos astronômicos objetivos). Já a frase III traz adjetivos valorativos e subjetivos ('mais emocionante e sublime'), constituindo uma opinião/juízo de valor."
  ],
  [
    "Texto argumentativo e causa e consequência",
    "Examine o parágrafo de um artigo sobre consumo de energia e inteligência artificial:\n\n“Os novos centros de processamento de dados exigem quantidades industriais de eletricidade e milhões de litros de água potável por dia para o resfriamento de seus servidores de inteligência artificial. Consequentemente, comunidades vizinhas a esses galpões tecnológicos já enfrentam escassez hídrica e aumento nas tarifas de luz, pagando na pele o custo oculto de cada comando digitado na nuvem pelos usuários globais.”\n\nA escassez hídrica e o encarecimento da energia nas comunidades locais são provocados por:",
    [
      "a demanda maciça e concentrada de recursos naturais exigida pelo funcionamento contínuo dos servidores de dados.",
      "o desperdício doméstico irresponsável de água encanada cometido pelas famílias ribeirinhas da região.",
      "a ausência de chuvas no planeta provocada pelo uso de smartphones pelos estudantes nas salas de aula.",
      "a proibição de usinas hidrelétricas de fornecerem eletricidade para redes públicas de abastecimento.",
      "o encerramento definitivo das atividades das empresas que gerenciam plataformas de armazenamento virtual."
    ],
    0,
    "O texto explicita a relação causal: o consumo exorbitante de eletricidade e água para resfriamento dos servidores gera, como efeito colateral, a escassez de água e o aumento na conta de luz das populações do entorno."
  ],
  [
    "Texto argumentativo e tema central",
    "Leia a declaração de um educador esportivo em fórum de educação integral:\n\n“A prática regular de esportes coletivos nas escolas vai muito além da queima de calorias ou da busca por desempenho atlético de alto nível. Na quadra, ao aprender a passar a bola para um colega desmarcado, a respeitar a decisão do árbitro mesmo discordando e a acolher um companheiro que errou o lance decisivo, os jovens experimentam na pele lições de cooperação, tolerância e resiliência que nenhum livro didático consegue ensinar apenas pela teoria.”\n\nO tema central abordado pelo educador é:",
    [
      "o potencial formativo e moral do esporte escolar no desenvolvimento de habilidades de convivência cidadã.",
      "a urgência de selecionar talentos infantis precoces para abastecer clubes olímpicos profissionais no país.",
      "a inutilidade dos livros didáticos tradicionais no aprendizado de disciplinas como matemática e ciências.",
      "a necessidade de demitir árbitros escolares que cometem erros frequentes em jogos interclasses.",
      "a superioridade incontestável da educação física sobre todas as demais matérias da grade curricular."
    ],
    0,
    "O autor defende o valor pedagógico do esporte como ferramenta ética e social (cooperação, respeito a regras e empatia), destacando sua função na formação humana do educando."
  ],
  [
    "Texto argumentativo e relação intertextual",
    "Analise o seguinte fragmento sobre democracia e acesso à informação:\n\n“Uma sociedade desinformada é presa fácil de discursos autoritários que oferecem soluções mágicas para dilemas estruturais complexos. Quando o cidadão perde a capacidade de distinguir fatos de boatos forjados para estimular o ódio tribal, a própria substância do debate democrático se dissolve em polarização estéril. Garantir a sobrevivência das instituições democráticas exige, portanto, investimentos maciços no letramento midiático dos jovens e no fortalecimento do jornalismo investigativo profissional.”\n\nSegundo o texto, a principal salvaguarda para a estabilidade democrática reside em:",
    [
      "capacitar a população para a leitura crítica das mídias e apoiar a produção de jornalismo profissional independente.",
      "censurar previamente qualquer opinião discordante manifestada nas redes sociais e espaços públicos.",
      "adotar discursos autoritários como medida provisória para resolver as crises econômicas crônicas do país.",
      "extinguir os veículos de imprensa formal para permitir que os fatos sejam divulgados apenas por boatos anônimos.",
      "impedir os jovens de terem acesso a computadores e plataformas de compartilhamento de notícias na internet."
    ],
    0,
    "O parágrafo conclui de forma explícita ('Garantir a sobrevivência... exige, portanto') apontando duas medidas fundamentais: letramento midiático dos jovens e apoio ao jornalismo investigativo profissional."
  ],
  [
    "Texto argumentativo e intenção do autor",
    "Examine o parágrafo de abertura de um artigo sobre preservação do patrimônio linguístico indígena:\n\n“Cada língua indígena que desaparece no Brasil silencia um universo inteiro de conhecimentos sobre plantas medicinais, narrativas cosmológicas e filosofias de convivência com a floresta que levaram milênios para ser construídos. A perda de uma língua originária não é apenas uma tragédia etnográfica para os povos que a falavam; é uma amputação irreparável na riqueza do patrimônio imaterial de toda a humanidade.”\n\nA intenção discursiva do autor ao classificar o desaparecimento de uma língua como 'amputação irreparável' é:",
    [
      "sensibilizar o público sobre a gravidade da perda cultural e biológica, instigando urgência na preservação das línguas.",
      "demonstrar que as populações indígenas não possuem mais interesse em transmitir seus dialetos para as novas gerações.",
      "comprovar que os conhecimentos sobre plantas medicinais podem ser facilmente recuperados através de softwares de tradução.",
      "defender a imposição de um único idioma oficial para unificar administrativamente todas as etnias do território.",
      "afirmar que a língua portuguesa é superior e deve substituir as línguas nativas em escolas bilíngues de aldeias."
    ],
    0,
    "A metáfora forte da 'amputação irreparável' cumpre o propósito persuasivo de chocar e conscientizar o leitor sobre a magnitude da perda cultural coletiva provocada pelo desaparecimento de uma língua originária."
  ],
  [
    "Texto argumentativo e posicionamento crítico",
    "Leia o trecho de um ensaio sobre a obsolescência programada de produtos eletrônicos:\n\n“Fabricar celulares e eletrodomésticos com peças seladas, baterias coladas e sistemas operacionais que deixam de receber atualizações após dois anos não é incompetência técnica da indústria: é uma estratégia deliberada de obsolescência programada para forçar o consumidor a um ciclo perpétuo de descarte e recompra. Essa lógica predatória não apenas esvazia o bolso das famílias, mas entulha o planeta com milhões de toneladas de lixo tóxico que contaminam o lençol freático por séculos.”\n\nO posicionamento crítico do autor em relação aos fabricantes fundamenta-se no fato de que:",
    [
      "a vida útil reduzida dos aparelhos decorre de um planejamento empresarial intencional focado no lucro, gerando danos econômicos e ecológicos.",
      "as fábricas não dispõem de engenheiros qualificados para desenvolver baterias com durabilidade superior a vinte meses.",
      "os consumidores exigem a troca compulsória de seus aparelhos todos os anos por pura vaidade social e modismo passageiro.",
      "o lixo eletrônico descartado nos aterros é biodegradável e não causa contaminação alguma às reservas subterrâneas de água potável.",
      "os governos obrigam as empresas de tecnologia a selar os aparelhos para impedir a pirataria clandestina de peças e placas."
    ],
    0,
    "O autor denuncia que a rápida inutilização dos eletrônicos é uma escolha premeditada de mercado ('estratégia deliberada de obsolescência programada'), gerando enriquecimento corporativo às custas do endividamento familiar e da degradação ambiental."
  ],
  [
    "Texto argumentativo e conclusão dedutiva",
    "Considere a argumentação sobre políticas públicas para a primeira infância:\n\n“Inúmeros estudos em economia comportamental, inclusive premiados com o Nobel, demonstram que cada dólar investido na nutrição, estímulo lúdico e educação infantil de qualidade gera um retorno social de até sete dólares ao longo da vida do indivíduo, sob a forma de maior escolaridade, renda mais alta e drástica redução nos índices de criminalidade e gastos prisionais.”\n\nA partir da leitura do parágrafo, deduz-se legitimamente que:",
    [
      "investir na primeira infância é a política pública de mais alto retorno social e financeiro para o futuro de uma nação.",
      "os gastos governamentais com a educação de crianças pequenas geram rombos orçamentários irrecuperáveis para as contas públicas.",
      "a criminalidade urbana é um fenômeno imutável que independe das oportunidades pedagógicas ofertadas nos primeiros anos de vida.",
      "o desenvolvimento cognitivo dos estudantes consolida-se apenas após o ingresso no ensino médio técnico profissionalizante.",
      "os prêmios Nobel de economia desaconselham o aporte de verbas estatais em creches e postos de vacinação comunitários."
    ],
    0,
    "O raciocínio matemático e social deduz que a priorização da primeira infância é altamente eficiente: o retorno de 1 para 7 dólares comprova que investir cedo é a intervenção pública mais inteligente e rentável para o desenvolvimento sustentável."
  ],
  [
    "Texto de divulgação científica",
    "Leia o trecho de uma reportagem sobre microbiologia e saúde intestinal:\n\n“O intestino humano abriga trilhões de microrganismos que compõem a chamada microbiota. Longe de serem meros hóspedes passivos, essas bactérias auxiliam na digestão de fibras complexas, produzem vitaminas essenciais como a B12 e a K, e regulam cerca de 70% das células do nosso sistema imunológico. Pesquisas recentes comprovam ainda a existência de um eixo bidirecional de comunicação química entre o intestino e o cérebro, revelando que desequilíbrios na flora intestinal podem influenciar quadros de ansiedade, estresse e distúrbios do sono.”\n\nDe acordo com as informações do texto, a microbiota intestinal exerce papel fundamental porque:",
    [
      "atua ativamente na imunidade, sintetiza vitaminas vitais e comunica-se quimicamente com o cérebro.",
      "elimina completamente a necessidade de ingestão de alimentos ricos em fibras e nutrientes na dieta humana.",
      "impede a ocorrência de qualquer tipo de transtorno psicológico ou crise de ansiedade em indivíduos saudáveis.",
      "funciona como um conjunto de parasitas perigosos que destroem os tecidos celulares do sistema digestório.",
      "substitui os medicamentos psiquiátricos e as vacinas obrigatórias em tratamentos de emergência médica."
    ],
    0,
    "O texto lista nominalmente as funções ativas da microbiota: produção de vitaminas B12 e K, regulação de 70% do sistema imunológico e comunicação com o cérebro através de um eixo químico bidirecional."
  ],
  [
    "Texto de divulgação científica",
    "Analise a matéria sobre astronomia e energia solar:\n\n“As tempestades solares são causadas por erupções violentas na atmosfera do Sol que lançam bilhões de toneladas de plasma carregado de partículas eletromagnéticas pelo espaço. Quando essas rajadas colidem com a magnetosfera terrestre, geram o espetáculo visual das auroras boreais nas altas latitudes. No entanto, em eventos de extrema intensidade, a sobrecarga de corrente elétrica induzida pode danificar transformadores de energia em solo, queimar circuitos de satélites de navegação e provocar apagões generalizados nas comunicações globais por vários dias.”\n\nO texto apresenta as tempestades solares como um fenômeno que:",
    [
      "produz belezas visuais atmosféricas, mas acarreta riscos severos para os sistemas elétricos e de telecomunicação da Terra.",
      "ocorre exclusivamente no interior das camadas oceânicas terrestres sem qualquer relação com a atividade do Sol.",
      "destrói a gravidade do planeta e impede o funcionamento definitivo de todas as usinas hidrelétricas mundiais.",
      "elimina as transmissões de rádio apenas em regiões desabitadas do Polo Sul durante o período de verão austral.",
      "já pode ser totalmente evitado por meio de escudos eletromagnéticos instalados em órbita baixa pelos governos."
    ],
    0,
    "A reportagem articula os dois aspectos do evento solar: o espetáculo estético inofensivo das auroras polares em contraste com a ameaça real de colapso em satélites, redes elétricas e telecomunicações terrestres."
  ],
  [
    "Texto de divulgação científica",
    "Considere o texto explicativo sobre o funcionamento de vacinas de RNA mensageiro:\n\n“Diferente dos imunizantes tradicionais que utilizam vírus inativados ou atenuados, as vacinas de RNA mensageiro (mRNA) funcionam como uma receita biológica temporária. Elas ensinam as próprias células humanas a fabricar uma proteína inofensiva idêntica àquela encontrada na superfície do patógeno. Assim que o sistema imunológico reconhece a presença dessa proteína estranha, ele produz anticorpos específicos e células de memória de longa duração. Uma vez cumprida a missão educativa, o filamento de mRNA vacinal é degradado e eliminado pelo organismo em poucas horas, sem jamais se fundir ao DNA do paciente.”\n\nO mecanismo inovador da vacina de mRNA baseia-se em:",
    [
      "fornecer uma instrução genética temporária para que as próprias células do organismo produzam a proteína que ativará a resposta imune.",
      "alterar permanentemente a estrutura do DNA humano nos cromossomos para impedir futuras mutações celulares genéticas.",
      "injetar cópias ativas e perigosas do vírus vivo na corrente sanguínea para acelerar a contaminação controlada dos órgãos.",
      "manter filamentos de mRNA intactos no interior dos glóbulos brancos durante toda a existência do indivíduo vacinado.",
      "dispensar a produção natural de anticorpos pelo sistema de defesa em favor de medicamentos químicos sintéticos."
    ],
    0,
    "O texto detalha com precisão científica: a vacina de mRNA entrega a 'receita biológica' temporária para que o corpo fabrique a proteína viral inofensiva e crie defesas, sendo degradada logo em seguida sem tocar o DNA."
  ],
  [
    "Texto de divulgação científica",
    "Examine o parágrafo sobre a fotossíntese nos oceanos:\n\n“Embora a Amazônia seja popularmente descrita como o 'pulmão do mundo', a maior parte do oxigênio líquido liberado e disponível na atmosfera terrestre provém do fitoplâncton marinho. Esses microrganismos fotossintetizantes que flutuam na superfície dos oceanos produzem mais de 50% de todo o oxigênio que respiramos e capturam volumes monumentais de gás carbônico dissolvido. No entanto, a acidificação dos mares provocada pelas emissões industriais ameaça a integridade dessas microalgas, colocando em xeque o equilíbrio químico de toda a biosfera.”\n\nA informação científica desmistificada no texto diz respeito ao fato de que:",
    [
      "o principal responsável pelo saldo de oxigênio liberado na atmosfera terrestre é o fitoplâncton dos mares, e não as florestas tropicais.",
      "a floresta amazônica consome todo o oxigênio do planeta sem realizar nenhuma etapa de fotossíntese vegetal.",
      "as microalgas marinhas dependem da fumaça das queimadas florestais para acelerar seu processo reprodutivo nas marés.",
      "o gás carbônico emitido pelos veículos terrestres é um nutriente indispensável que desacidifica as bacias oceânicas.",
      "os oceanos deixaram de produzir oxigênio devido à pesca comercial intensiva de peixes e crustáceos carnívoros."
    ],
    0,
    "O texto corrige a crença popular do 'pulmão amazônico', demonstrando que é o fitoplâncton marinho o gerador de mais de 50% do oxigênio atmosférico líquido global, além de destacar sua vulnerabilidade à acidificação dos oceanos."
  ],
  [
    "Texto de divulgação científica",
    "Leia o trecho de um informe sobre computação quântica:\n\n“Enquanto os computadores clássicos processam dados através de bits binários que assumem obrigatoriamente o valor de 0 ou 1, os computadores quânticos utilizam qubits. Graças aos princípios da física quântica, como a superposição e o entrelaçamento, um qubit pode representar simultaneamente 0 e 1. Essa propriedade permite que máquinas quânticas resolvam em poucos segundos cálculos matemáticos e simulações moleculares que levariam milhares de anos nos supercomputadores mais potentes da atualidade.”\n\nA superioridade de processamento dos computadores quânticos decorre da sua capacidade de:",
    [
      "operar com qubits em estado de superposição, processando múltiplos estados informacionais de forma concorrente e paralela.",
      "utilizar fiação de cobre comum sem necessidade de refrigeração criogênica em temperaturas próximas ao zero absoluto.",
      "substituir os princípios da física atômica por cálculos aproximados desenvolvidos em calculadoras analógicas mecânicas.",
      "executar programas exclusivamente quando desconectados de qualquer rede de suprimento de energia elétrica industrial.",
      "armazenar arquivos digitais em discos magnéticos tradicionais com capacidade ilimitada de gravação permanente."
    ],
    0,
    "O fundamento científico explicitado é a superposição e o entrelaçamento dos qubits, permitindo o cálculo paralelo de múltiplos caminhos simultâneos, superando em ordens de magnitude os bits binários clássicos."
  ],
  [
    "Texto de divulgação científica",
    "Considere o texto sobre o impacto do plástico nos ciclos ecológicos:\n\n“O plástico descartado na natureza não desaparece; ele se fragmenta pela ação do sol, das ondas e do vento em partículas minúsculas conhecidas como microplásticos. Essas partículas, menores que 5 milímetros, já foram encontradas na neve do Monte Everest, nas fossas marinhas mais profundas do oceano e até na corrente sanguínea humana. Além de adsorverem poluentes químicos tóxicos, os microplásticos são ingeridos pela base da cadeia alimentar aquática, acumulando-se progressivamente nos tecidos dos animais até chegar aos pratos de comida dos humanos.”\n\nO fenômeno descrito no final do parágrafo é conhecido na ecologia como:",
    [
      "bioacumulação ou biomagnificação trófica ao longo dos níveis da cadeia alimentar.",
      "eutrofização artificial de rios provocada pelo excesso de nutrientes agrícolas orgânicos.",
      "fotodegradação completa que neutraliza os efeitos nocivos dos compostos de petróleo nos lagos.",
      "seleção natural benéfica que confere resistência imunológica aos peixes contra toxinas artificiais.",
      "reversibilidade ecológica espontânea que elimina materiais poliméricos do ciclo hidrológico."
    ],
    0,
    "A concentração progressiva de toxinas e microplásticos da base aos níveis mais altos da teia alimentar (chegando aos seres humanos) conceitua o processo ecológico de bioacumulação/biomagnificação."
  ],
  [
    "Texto de divulgação científica",
    "Analise a matéria sobre a resistência bacteriana a antibióticos:\n\n“O uso indiscriminado de antibióticos na medicina humana e na agropecuária intensiva tem acelerado a emergência das chamadas superbactérias. Ao tomar remédios sem prescrição ou interromper o tratamento antes do prazo recomendado, o paciente elimina as bactérias mais vulneráveis, mas permite que as linhagens portadoras de mutações resistentes sobrevivam e se multipliquem sem competição. A Organização Mundial da Saúde adverte que, se novas classes de medicamentos não forem desenvolvidas, infecções simples hoje corriqueiras poderão voltar a ser fatais até 2050.”\n\nSegundo o texto, a seleção de bactérias resistentes é favorecida principalmente por:",
    [
      "utilização incorreta de antibióticos e abandono precoce de tratamentos prescritos por profissionais de saúde.",
      "prática esportiva intensa e alimentação balanceada rica em vitaminas antioxidantes naturais.",
      "isolamento higiênico hospitalar rigoroso que esteriliza os instrumentos cirúrgicos em autoclaves.",
      "interrupção total das atividades industriais que sintetizam compostos químicos farmacêuticos.",
      "vacinação preventiva em massa das populações infantis contra doenças bacterianas contagiosas."
    ],
    0,
    "O texto deixa claro: o uso indiscriminado e o abandono antes do tempo eliminam as bactérias sensíveis e deixam vivas as mutantes resistentes, que proliferam e criam o perigo das superbactérias."
  ],
  [
    "Texto de divulgação científica",
    "Examine o texto sobre a física do efeito estufa natural versus a intensificação antrópica:\n\n“O efeito estufa é, em sua essência, um mecanismo natural benéfico: sem os gases que retêm calor na troposfera (como vapor d’água e dióxido de carbono), a temperatura média da Terra seria de cerca de 18 graus negativos, tornando o planeta inóspito para a maioria das formas de vida conhecidas. O problema grave que enfrentamos hoje reside no agravamento artificial desse efeito pela queima desenfreada de combustíveis fósseis e pelo desmatamento, que aprisionam um excesso perigoso de energia térmica no sistema climático global.”\n\nA distinção conceitual estabelecida pelo autor visa esclarecer que:",
    [
      "o efeito estufa em si é um processo natural vital para a biosfera, sendo o seu desequilíbrio causado pelas atividades humanas o verdadeiro problema.",
      "os gases atmosféricos naturais são tóxicos e deveriam ser eliminados para resfriar a superfície continental.",
      "o dióxido de carbono não possui nenhuma capacidade física de reter radiação infravermelha emitida pela Terra.",
      "a queima de combustíveis fósseis é um fenômeno geológico espontâneo que independe das ações industriais do homem.",
      "as temperaturas negativas seriam mais favoráveis à agricultura tropical do que as médias térmicas atuais."
    ],
    0,
    "O texto didático diferencia o efeito estufa natural (indispensável à vida na Terra, mantendo o planeta aquecido) do aquecimento global antropogênico (excesso de gases estufa lançados pela queima de fósseis e queimadas)."
  ],
  [
    "Texto de divulgação científica",
    "Considere a reportagem sobre a técnica CRISPR de edição genética:\n\n“Inspirada no sistema de defesa que as bactérias utilizam para cortar o DNA de vírus invasores, a ferramenta CRISPR-Cas9 revolucionou a biotecnologia ao funcionar como uma 'tesoura molecular programável'. Os cientistas podem agora localizar com precisão milimétrica um gene defeituoso causador de enfermidades hereditárias na hélice do DNA, cortá-lo e substituí-lo por uma sequência genética sadia, abrindo horizontes sem precedentes para a cura de anemias congênitas e distrofias musculares.”\n\nA metáfora da 'tesoura molecular programável' ilustra a propriedade de:",
    [
      "cortar e substituir trechos específicos do código genético com elevado grau de exatidão e controle laboratorial.",
      "destruir integralmente todas as moléculas de DNA presentes nas células de indivíduos enfermos.",
      "duplicar indiscriminadamente qualquer vírus invasor sem necessidade de anticorpos protetores.",
      "produzir agulhas cirúrgicas de titânio para intervenções manuais em órgãos internos de pacientes.",
      "eliminar os cromossomos sexuais em embriões humanos para evitar o surgimento de mutações espontâneas."
    ],
    0,
    "A imagem da 'tesoura molecular programável' traduz para o público leigo a capacidade do complexo enzimático CRISPR-Cas9 de localizar trechos exatos do DNA, cortá-los e permitir a edição/correção de genes defeituosos."
  ],
  [
    "Texto de divulgação científica",
    "Leia o excerto sobre a física dos buracos negros e a teoria da relatividade:\n\n“Um buraco negro não é um ralo espacial que suga tudo vorazmente a distâncias infinitas, mas sim uma região onde uma quantidade colossal de massa foi comprimida em um volume tão ínfimo que a curvatura do espaço-tempo torna-se extrema. O limite teórico dessa região é chamado de horizonte de eventos: uma fronteira invisível a partir da qual nem mesmo a luz — que se propaga a 300 mil quilômetros por segundo — possui velocidade suficiente para escapar da atração gravitacional.”\n\nSegundo a explicação, a impossibilidade de a luz escapar do horizonte de eventos deve-se:",
    [
      "à intensidade extrema do campo gravitacional gerado pela altíssima concentração de massa no espaço-tempo.",
      "à escuridão absoluta do universo que absorve a energia luminosa antes que ela chegue aos telescópios terrestres.",
      "ao fato de a luz se propagar em velocidade excessivamente lenta quando atravessa galáxias espirais distantes.",
      "à colisão frontal dos fótons com tempestades de poeira estelar nas bordas exteriores dos cometas.",
      "à desintegração instantânea da matéria ao entrar em contato com os raios cósmicos de fundo."
    ],
    0,
    "O texto explica que a curvatura do espaço-tempo e o campo gravitacional causados pela imensa densidade de massa são tão intensos que a velocidade de escape no horizonte de eventos supera a própria velocidade da luz."
  ],
  [
    "Texto de divulgação científica",
    "Examine o trecho sobre a descoberta de exoplanetas na zona habitável:\n\n“Ao buscar planetas fora do Sistema Solar, os astrofísicos concentram esforços na chamada 'zona habitável' de uma estrela. Essa região não é uma garantia de que haja vida alienígena, mas define a faixa orbital na qual a distância entre o planeta e seu astro permite que a temperatura de superfície sustente água em estado líquido — o solvente universal considerado pré-requisito indispensável para as reações bioquímicas que conhecemos.”\n\nA importância atribuída à 'zona habitável' fundamenta-se na premissa de que:",
    [
      "a presença potencial de água líquida é condição essencial para a emergência e manutenção da vida de base bioquímica.",
      "qualquer planeta localizado nessa faixa de órbita já possui civilizações inteligentes desenvolvidas e comunicantes.",
      "a água em estado gasoso ou sólido é incapaz de participar de qualquer ciclo geológico em corpos planetários rochosos.",
      "as estrelas vizinhas possuem exatamente as mesmas características físicas e térmicas do Sol em nosso sistema.",
      "a vida no cosmos pode prescindir de solventes químicos caso a atmosfera contenha elevadas taxas de gás metano."
    ],
    0,
    "O texto deixa claro: a zona habitável não assegura a existência de seres vivos, mas marca a distância estelar adequada para a água líquida existir, sendo a água o solvente universal essencial para a bioquímica."
  ],
  [
    "Texto de divulgação científica",
    "Considere a matéria sobre as correntes oceânicas e a regulação climática do planeta:\n\n“A Circulação Meridional do Atlântico (AMOC) atua como uma gigantesca esteira transportadora de calor no globo: águas tropicais quentes e salgadas viajam para o norte na superfície, aquecendo o clima da Europa Ocidental, enquanto águas frias e densas afundam no Ártico e retornam pelo fundo do oceano em direção ao sul. Com o degelo acelerado da Groenlândia, o influxo massivo de água doce — que é menos densa — enfraquece esse mecanismo de afundamento, ameaçando desestabilizar o regime de monções na Ásia e agravar secas no Nordeste brasileiro.”\n\nO risco de colapso na esteira de calor marinha decorre do fato de que:",
    [
      "o aporte de água doce do degelo reduz a salinidade e a densidade das águas do norte, prejudicando o ciclo de afundamento.",
      "as correntes tropicais tornaram-se excessivamente frias devido ao aumento na evaporação dos rios equatoriais.",
      "a ausência de sal nos oceanos impede que os navios cargueiros naveguem entre a Europa e a América do Sul.",
      "o degelo das calotas polares elimina o vento marinho responsável por empurrar as ondas de calor até o mar Mediterrâneo.",
      "as águas profundas do Ártico passaram a ferver com a incidência direta dos raios solares no inverno polar."
    ],
    0,
    "A explicação científica demonstra que o motor da esteira depende da alta densidade e salinidade da água fria para afundar; o excesso de água doce do degelo quebra esse equilíbrio e desacelera o sistema."
  ],
  [
    "Compreensão de poesia lírica",
    "Leia a estrofe de 'O Menino que Carregava Água na Peneira', de Manoel de Barros:\n\n“Tinha um menino que carregava água na peneira.\nA mãe disse que carregar água na peneira\nera o mesmo que roubar um vento e sair correndo com ele\npara mostrar aos irmãos.\nA mãe disse que era o mesmo que catar espinhos na água.\nO menino aprendeu a usar as palavras.\nViu que podia fazer peraltagens com as palavras.\nE começou a fazer peraltagens.”\n\nA ação aparentemente inútil de 'carregar água na peneira' funciona no poema como metáfora para:",
    [
      "o fazer poético livre e despretensioso que reinventa a linguagem para além da utilidade prática e da lógica comum.",
      "a desobediência agressiva da criança que se recusava a cumprir as tarefas domésticas ordenadas pela mãe.",
      "a escassez hídrica dramática vivida pelos sertanejos do pantanal mato-grossense durante a grande seca.",
      "a incapacidade cognitiva do menino em distinguir instrumentos de cozinha adequados para o transporte de líquidos.",
      "o desperdício intencional de recursos naturais que ameaçava o abastecimento das famílias ribeirinhas."
    ],
    0,
    "Manoel de Barros utiliza a imagem paradoxal e lúdica de carregar água na peneira para simbolizar a essência da poesia: dar valor ao inútil e recriar o mundo pelas 'peraltagens com as palavras'."
  ],
  [
    "Compreensão de poesia lírica",
    "Considere os versos de 'Motivo', de Cecília Meireles:\n\n“Eu canto porque o instante existe\ne a minha vida está completa.\nNão sou alegre nem sou triste:\nsou poeta.\nIrmão das coisas fugidias,\nnão sinto gozo nem tormento.\nAtravesso noites e dias\nno vento.”\n\nO eu lírico define a condição de poeta a partir da:",
    [
      "capacidade de transcender as emoções extremas passageiras (alegria/tristeza) e fundir-se à fugacidade do tempo.",
      "necessidade de enriquecimento financeiro através da publicação de livros de poemas românticos de sucesso.",
      "rejeição da arte musical e o desprezo por qualquer manifestação da natureza como o vento e a noite.",
      "dependência incondicional dos aplausos e da aprovação social dos críticos literários de sua época.",
      "tristeza patológica e depressiva que o impede de perceber a existência dos instantes felizes do cotidiano."
    ],
    0,
    "Cecília Meireles expressa a vocação poética desinteressada: o poeta não é definido por estados de espírito banais ('não sou alegre nem sou triste'), mas por sua comunhão serena com o efêmero e o eterno."
  ],
  [
    "Compreensão de poesia lírica",
    "Leia os versos finais do 'Poema de Sete Faces', de Carlos Drummond de Andrade:\n\n“Mundo mundo vasto mundo,\nse eu me chamasse Raimundo\nseria uma rima, não seria uma solução.\nMundo mundo vasto mundo,\nmais vasto é meu coração.”\n\nA constatação de que 'Raimundo seria uma rima, não seria uma solução' sintetiza uma atitude de:",
    [
      "ironia e consciência crítica sobre a incapacidade de resolver as complexidades da vida com fórmulas estéticas fáceis.",
      "desespero absoluto diante da impossibilidade de trocar de nome perante o cartório de registro civil.",
      "orgulho arrogante de quem se considera superior a todas as exigências formais da métrica poética tradicional.",
      "certeza dogmática de que a literatura clássica contém as respostas definitivas para as dores do mundo.",
      "arrependimento amargo por não ter seguido a carreira jurídica em vez de se dedicar à poesia modernista."
    ],
    0,
    "Drummond expõe a autoironia modernista: a rima fácil ('Raimundo/mundo') é apenas um jogo verbal formal que em nada soluciona os conflitos e angústias existenciais do sujeito no vasto mundo."
  ],
  [
    "Compreensão de poesia lírica",
    "Examine o poema 'Vou-me Embora pra Pasárgada', de Manuel Bandeira:\n\n“Vou-me embora pra Pasárgada\nLá sou amigo do rei\nLá tenho a mulher que eu quero\nNa cama que escolherei\nVou-me embora pra Pasárgada\nAqui eu não sou feliz\nLá a existência é uma aventura\nDe tal modo inconsequente\nQue Joana a Louca de Espanha\nRainha e falsa demente\nVem a ser contraparente\nDa nora que nunca tive.”\n\nA mítica 'Pasárgada' representa para o eu lírico:",
    [
      "um refúgio imaginário e poético onde os limites e frustrações da realidade cotidiana são superados pelo desejo.",
      "um país real do Oriente Médio para onde o poeta planejava se mudar para tratar uma crise de tuberculose.",
      "o palácio governamental onde o autor exerceu altos cargos diplomáticos durante a República Velha.",
      "um local perigoso e hostil dominado por monarcas tiranos que perseguiam intelectuais e artistas.",
      "o internato rigoroso da infância cuja disciplina rígida despertava a saudade nostálgica do autor."
    ],
    0,
    "Pasárgada é a metáfora máxima da evasão poética: um espaço de fantasia onde tudo é permitido e possível, contrastando com o descontentamento existencial do poeta no mundo concreto ('Aqui eu não sou feliz')."
  ],
  [
    "Compreensão de poesia lírica",
    "Leia a estrofe de 'O Navio Negreiro', de Castro Alves:\n\n“Senhor Deus dos desgraçados!\nDizei-me vós, Senhor Deus!\nSe é loucura... se é verdade\nTanto horror perante os céus?!\nÓ mar, por que não apagas\nCo'a esponja de tuas vagas\nDe teu manto este borrão?...”\n\nO tom inflamado e a invocação desesperada aos céus e ao mar caracterizam uma poesia de feição:",
    [
      "condoreira e abolicionista, marcada pela denúncia social indignada da tragédia da escravidão.",
      "árcade e bucólica, que celebra a tranquilidade pacífica dos pescadores em alto-mar.",
      "parnasiana e impassível, preocupada exclusivamente com a perfeição métrica e a pureza gramatical das rimas ricas.",
      "simbolista e hermética, repleta de sinestesias indecifráveis sobre a cor do manto marítimo.",
      "concretista e geométrica, que rompe com as estrofes para criar desenhos espaciais na folha em branco."
    ],
    0,
    "Castro Alves é o ápice do Condoreirismo na 3ª geração romântica brasileira: sua lírica é engajada, retórica e grandiloquente, clamando aos céus pela abolição e denunciando o horror moral do tráfico negreiro."
  ],
  [
    "Compreensão de poesia lírica",
    "Considere os versos de Mario Quintana em 'O Tempo':\n\n“A vida é o dever que nós trouxemos para fazer em casa.\nQuando se vê, já são seis horas!\nQuando de vê, já é sexta-feira!\nQuando se vê, já terminou o ano...\nQuando se vê, perdemos o amor da nossa vida.\nQuando se vê, passaram 50 anos!”\n\nA repetição enfática da expressão 'Quando se vê' tem o efeito de ressaltar:",
    [
      "a velocidade assustadora e imperceptível com que o tempo passa, surpreendendo o ser humano distraído.",
      "a pontualidade exemplar com que os trabalhadores gaúchos encerram suas jornadas nos finais de semana.",
      "o esquecimento voluntário de estudantes que deixam de realizar as tarefas de casa propostas pelos mestres.",
      "a imutabilidade do destino que impede qualquer tipo de mudança nas relações amorosas maduras.",
      "o controle absoluto e racional que o homem moderno exerce sobre o planejamento de seus dias e anos."
    ],
    0,
    "A anáfora 'Quando se vê' marca a rapidez fugaz e vertiginosa da vida humana: os ciclos temporais (horas, semanas, anos, décadas) esvaem-se sem aviso prévio, despertando a melancolia da finitude."
  ],
  [
    "Compreensão de poesia lírica",
    "Leia a estrofe de 'Cântico Negro', de José Régio:\n\n“— Vem por aqui! — dizem-me alguns com os olhos doces,\nEstendendo-me os braços, e seguros\nDe que seria bom que eu os ouvisse...\nOlho-os nos olhos e não lhes digo nada:\nE vou calado e só, por meu caminho.\nNão sei por onde vou,\nNão sei para onde vou,\n— Sei que não vou por aí!”\n\nA recusa enfática sintetizada no verso 'Sei que não vou por aí!' expressa:",
    [
      "uma afirmação radical de autonomia existencial e rebeldia contra os caminhos padronizados pela convenção social.",
      "a desorientação espacial de um viajante perdido numa encruzilhada de estradas desertas na serra.",
      "a covardia de um combatente que foge do campo de batalha para não enfrentar os perigos da guerra.",
      "a adesão submissa aos conselhos oferecidos por familiares e amigos de boa vontade.",
      "a certeza dogmática de quem já conhece com precisão cada detalhe de seu trajeto profissional."
    ],
    0,
    "O poema é um hino à individualidade insubmissa: mesmo sem saber ao certo para onde vai, o sujeito recusa seguir as trilhas fáceis e domesticadas que a coletividade tenta lhe impor."
  ],
  [
    "Compreensão de poesia lírica",
    "Considere o poema 'Com Licença Poética', de Adélia Prado:\n\n“Quando nasci, um anjo torto\ndesses que vivem na sombra\ndisse: Vai, Carlos! ser gauche na vida.\nEu não: nasci para ser alegre.\nMulher é desdobrável. Eu sou.\nO coração de mulher é um cesto de costura\nonde tudo se acha e tudo se conserta.”\n\nAo dialogar explicitamente com o famoso poema de Drummond, Adélia Prado promove:",
    [
      "uma intertextualidade afirmativa que ressignifica o destino sombrio ('gauche') pelo viés da resiliência e do cotidiano feminino.",
      "um plágio desautorizado das estrofes modernistas com o propósito de ironizar os autores mineiros.",
      "a defesa da superioridade das tarefas domésticas de costura em relação à atividade de escrever versos.",
      "a negação da fé religiosa ao desqualificar a figura mística dos anjos celestiais na literatura.",
      "a ruptura violenta com a tradição lírica brasileira em favor de manifestos vanguardistas europeus."
    ],
    0,
    "Adélia Prado utiliza a intertextualidade com o 'Poema de Sete Faces' de Drummond para marcar sua voz própria: rejeita a fatalidade do anjo torto e ergue uma poética luminosa, feminina e ancorada na vida ordinária."
  ],
  [
    "Compreensão de poesia lírica",
    "Leia a estrofe de 'O Cão Sem Plumas', de João Cabral de Melo Neto:\n\n“Aquele rio\nera como um cão sem plumas.\nNada sabia da chuva azul,\nda fonte cor-de-rosa,\nda água no copo de água,\nda água na garrafa de água.\nAquele rio\nmal sabia da chuva.\nO rio sabia da lama\ne do homem que na lama se afoga.”\n\nA desmistificação lírica da água no poema de João Cabral constrói-se mediante:",
    [
      "a recusa do embelezamento romântico e adocicado da natureza, associando o rio Capibaribe à miséria e à lama da exploração humana.",
      "a exaltação bucólica das fontes de água cristalina encontradas nas montanhas do interior pernambucano.",
      "a condenação do uso de copos e garrafas de vidro em benefício do consumo de água diretamente nas margens fluviais.",
      "o elogio à domesticação de cães de raça utilizados para a caça de aves aquáticas nas lagoas da capital.",
      "a demonstração de que a poluição química nos rios do Nordeste é um fenômeno passageiro sem impactos sociais graves."
    ],
    0,
    "A poética substantiva e rigorosa de João Cabral despoja o rio de qualquer lirismo sentimental ('nada sabia da chuva azul') para encará-lo em sua crueza material e social: um rio de lama onde vidas humanas são tragadas pela miséria."
  ],
  [
    "Compreensão de poesia lírica",
    "Examine o poema 'Todas as Vidas', de Cora Coralina:\n\n“Vive dentro de mim\numa cabocla velha\nde mau-olhado,\nacocorada ao pé do borralho,\nolhando pra o fogo.\nVive dentro de mim\na lavadeira do Rio Vermelho.\nVive dentro de mim\na mulher do povo.\nTodas as vidas dentro de mim:\na mulher da roça,\na mulher operária,\na mulher prostituta...\nTodas as vidas mescladas na minha vida.”\n\nA polifonia de vozes reunidas no íntimo do eu lírico celebra:",
    [
      "a empatia e a solidariedade profunda da poeta com a ancestralidade e as dores de todas as mulheres marginalizadas do povo.",
      "a rejeição da identidade goiana e o anseio de pertencer às elites aristocráticas dos grandes centros urbanos.",
      "a culpa atormentada de uma mulher idosa que se arrependeu de ter trabalhado em atividades manuais e agrícolas.",
      "o isolamento individualista de uma artista que não aceita o convívio com pessoas de classes sociais subalternas.",
      "a crença em fenômenos mediúnicos de possessão corporal que assombravam as casas coloniais de pedra."
    ],
    0,
    "Cora Coralina dilata o seu próprio 'eu' lírico para abrigar a voz coletiva das mulheres anônimas e trabalhadoras da história brasileira (lavadeiras, caboclas, roceiras), tecendo uma poesia de profunda comunhão popular."
  ],
  [
    "Compreensão de poesia lírica",
    "Considere os versos de Ferreira Gullar em 'Poema Brasileiro':\n\n“No Piauí de cada 100 crianças que nascem\n78 morrem antes de completar 8 anos de idade\nNo Piauí\nde cada 100 crianças que nascem\n78 morrem antes de completar 8 anos de idade\nNo Piauí\nde cada 100 crianças que nascem\n78 morrem antes de completar 8 anos de idade\nAntes de completar 8 anos de idade\n78 morrem\nno Piauí.”\n\nO procedimento de repetir exaustivamente a mesma estatística trágica busca produzir no leitor um efeito de:",
    [
      "choque, denúncia implacável e recusa da indiferença burocrática diante do massacre da mortalidade infantil.",
      "tédio deliberado para demonstrar que os dados demográficos do Nordeste não possuem relevância sociológica.",
      "comemoração patriótica do crescimento populacional registrado nos estados menos desenvolvidos da federação.",
      "dúvida científica quanto à precisão dos levantamentos censitários efetuados pelo IBGE no início do século.",
      "humor cáustico que ridiculariza o atraso econômico das famílias de agricultores familiares piauenses."
    ],
    0,
    "A martelação repetitiva do dado estatístico cru transforma a informação fria em instrumento de contundência política e comoção moral, impedindo que a morte precoce de crianças seja tratada como mero número abstrato."
  ],
  [
    "Compreensão de poesia lírica",
    "Leia a estrofe de 'Ode ao Burguês', de Mário de Andrade:\n\n“Eu insulto o burguês! o burguês-níquel,\no burguês-burguês! a digestão bem-feita de São Paulo!\no homem-curva! o homem-nádegas!\no homem que sendo francês, brasileiro, italiano,\né sempre um cauteloso pouco-a-pouco!”\n\nA agressividade verbal e a quebra do decoro burguês na poesia modernista de 1922 cumpriam a finalidade de:",
    [
      "provocar e escandalizar o público tradicional, desafiando o conformismo hipócrita e o academicismo passadista.",
      "homenagear os grandes industriais paulistas pelo patrocínio generoso às artes plásticas de vanguarda.",
      "defender a adoção compulsória da cidadania francesa para todos os intelectuais e diplomatas da República.",
      "ensinar regras estritas de etiqueta e boas maneiras para a burguesia cafeeira nos salões aristocráticos.",
      "promover a conciliação pacífica e amigável entre os poetas do Parnasianismo e os jovens da Semana de Arte Moderna."
    ],
    0,
    "Mário de Andrade utilizou a provocação violenta e o insulto direto na Semana de 22 como tática de guerrilha estética para romper com a placidez parnasiana e atacar o moralismo acomodado da elite econômica."
  ],
  [
    "Poesia visual e concreta",
    "No célebre poema concreto 'beba coca cola', de Décio Pignatari, as palavras se desdobram nas seguintes linhas progressivas:\n\nbeba coca cola\nbabe      cola\nbeba coca\nbabe cola caco\ncaco\ncola\ncloaca\n\nA desconstrução fonética e morfológica que culmina no termo final 'cloaca' produz uma crítica:",
    [
      "ácida ao consumismo alienado e à degradação gerada pela publicidade maciça de produtos industriais.",
      "favorável ao sabor refrescante do refrigerante como símbolo do estilo de vida cosmopolita moderno.",
      "à falta de redes de esgoto encanado na cidade de Atlanta, onde se localizava a matriz da corporação.",
      "à má qualidade do vidro utilizado pelas fábricas para produzir garrafas reutilizáveis de dois litros.",
      "exclusivamente formal e desprovida de qualquer conteúdo ideológico ou questionamento político-econômico."
    ],
    0,
    "Pignatari desmonta as peças sonoras e visuais do slogan publicitário mais famoso do mundo até reduzi-lo a 'caco' (lixo) e 'cloaca' (esgoto/dejeto), construindo uma contundente crítica anticapitalista à cultura do consumo."
  ],
  [
    "Poesia visual e concreta",
    "No poema 'LIXO / LUXO', de Augusto de Campos, a palavra monumental 'LUXO' é desenhada no papel utilizando centenas de pequenas letras que formam a palavra repetida 'lixo'.\n\nA interação visual entre as duas palavras fundamenta-se:",
    [
      "no paradoxo de que a ostentação suntuosa do luxo material gera, oculta e depende da produção massiva de lixo e desperdício.",
      "no elogio entusiasmado às joalherias finas que confeccionam coroas de ouro para realezas europeias.",
      "na constatação matemática de que os termos 'lixo' e 'luxo' possuem o mesmo número de consoantes líquidas.",
      "na tentativa de ensinar caligrafia cursiva e desenho geométrico para crianças em fase de alfabetização escolar.",
      "na defesa da incineração imediata de todas as obras de arte que não geram lucro imediato aos museus."
    ],
    0,
    "A genialidade semiótica do poema concreto reside na tensão dialética: o 'LUXO' em letras garrafais só existe porque é composto fisicamente de 'lixo', expondo a face oculta e degradante da sociedade das mercadorias."
  ],
  [
    "Poesia visual e concreta",
    "Em um poema visual contemporâneo sobre a chuva, as letras da palavra 'gota' caem inclinadas e espaçadas do topo à margem inferior da página branca, acumulando-se no rodapé sob a forma de linhas contínuas e densas com a palavra 'poça'.\n\nEsse arranjo tipográfico e espacial explora:",
    [
      "a iconicidade da linguagem, onde a própria disposição gráfica das palavras mimetiza a trajetória física da precipitação e do acúmulo da água.",
      "o desperdício de espaço no papel para forçar a editora a encarecer o custo de impressão do livro de poesias.",
      "a incapacidade do poeta em rimar vocábulos da língua portuguesa de acordo com o esquema métrico de sonetos.",
      "a superioridade do desenho técnico de engenharia hidráulica sobre as metáforas literárias tradicionais.",
      "a comprovação de que as tempestades torrenciais causam alagamentos irreparáveis nas garagens de edifícios."
    ],
    0,
    "A poesia visual trabalha a iconicidade: a linguagem verbal transcende o plano sonoro e ganha valor plástico-espacial, fazendo com que as palavras simulem visualmente a queda das gotas e o empoçamento no chão."
  ],
  [
    "Poesia visual e concreta",
    "Considere o poema visual de Haroldo de Campos intitulado 'nascemorre':\n\nnasce\n  morre\n    nasce\n      morre\n        renasce\n          remorre\n            revive\n\nA estrutura visual escalonada e a prefixação com 're-' sugerem uma reflexão sobre:",
    [
      "o ciclo contínuo, biológico e inelutável de renovação e término que rege a existência universal.",
      "a falência total dos sistemas previdenciários públicos em decorrência do aumento na expectativa de vida.",
      "o terror pânico da morte que paralisa completamente a atividade criadora dos escritores de vanguarda.",
      "a necessidade de registrar nascimentos e óbitos em tabelas fiscais simplificadas da receita federal.",
      "o fim irreversível de qualquer forma de espiritualidade ou crença religiosa nas sociedades tecnológicas."
    ],
    0,
    "A repetição dos verbos fundamentais com o prefixo de reiteração ('renasce', 'remorre') dispostos em movimento contínuo espelha visualmente o dinamismo cíclico e eterno entre o nascimento e a morte."
  ],
  [
    "Poesia visual e concreta",
    "No poema 'Velocidade', de Ronaldo Azeredo, a palavra 'velocidade' é repetida em sequências nas quais as letras vão se espaçando cada vez mais, até que os caracteres se diluem e fundem-se ao branco do papel como um rastro indistinto.\n\nA técnica gráfica empregada tem o objetivo expressivo de:",
    [
      "reproduzir visualmente a aceleração e o desvanecimento do objeto em movimento em alta velocidade.",
      "denunciar o excesso de multas de trânsito aplicadas por radares eletrônicos nas rodovias estaduais.",
      "criticar os atletas velocistas que utilizam substâncias proibidas em campeonatos de atletismo.",
      "comprovar que a palavra 'velocidade' possui excesso de consoantes oclusivas e nasais difíceis de pronunciar.",
      "ironizar os motoristas lentos que trafegam na faixa da esquerda bloqueando o fluxo de veículos de carga."
    ],
    0,
    "O Concretismo integra signo e significado: ao afastar gradualmente as letras até a perda do contorno nítido, o poema faz o olho do leitor experimentar a própria sensação ótica de desfoque gerada pela velocidade extrema."
  ],
  [
    "Poesia visual e concreta",
    "Observe o poema visual a seguir, no qual as palavras 'subir' e 'descer' aparecem diagramadas em formato de degraus de uma escadaria:\n\n    subir\n   subir\n  subir\n descer\ndescer\n\nA leitura desse texto conjuga necessariamente:",
    [
      "o código verbal (significado léxico das palavras) com o código não-verbal (direção espacial dos degraus na página).",
      "a audição de melodias clássicas gravadas com o estudo da gramática histórica de dialetos medievais.",
      "o isolamento estrito das palavras em dicionários etimológicos sem considerar sua disposição na folha.",
      "a tradução literal das palavras para línguas que utilizam ideogramas como o mandarim e o japonês.",
      "a recusa do leitor em reconhecer que escadas são elementos comuns da arquitetura residencial urbana."
    ],
    0,
    "A essência do poema visual e concreto é a indissociabilidade entre verbo e espaço: a leitura exige decodificar conjuntamente a mensagem linguística e a topografia visual construída pela mancha gráfica."
  ],
  [
    "Poesia visual e concreta",
    "Em um poema-objeto do concretismo brasileiro, a palavra 'SILÊNCIO' aparece impressa em letras brancas sobre um fundo de papel inteiramente branco, de modo que suas letras só podem ser entrevistar em relevo contra a luz.\n\nEsse procedimento plástico-poético visa concretizar a ideia de que:",
    [
      "o silêncio pleno é a ausência de ruído e de marcas visíveis ostensivas, existindo como presença quase invisível.",
      "a indústria gráfica nacional cometeu um erro crasso de impressão ao esquecer de abastecer a tinta preta.",
      "os poetas contemporâneos devem parar de escrever textos para que as livrarias encerrem suas atividades.",
      "a palavra silêncio é a mais longa e difícil de ser lida por pessoas que apresentam deficiência auditiva.",
      "o papel branco reciclado é de qualidade inferior ao papel vegetal amarelado utilizado no século XIX."
    ],
    0,
    "O poema incorpora fisicamente o conceito que nomeia: ao imprimir branco sobre branco, a linguagem materializa o silêncio e o apagamento sensorial como experiência estética tangível."
  ],
  [
    "Poesia visual e concreta",
    "No poema 'Onda', de Manuel Bandeira, os versos curtos e sinuosos repetem com aliterações em /m/ e /v/:\n\n“a onda anda\naonde anda\na onda?\na onda ainda\nainda onda\nainda anda\naonde?\naonde?\na onda a onda”\n\nA repetição de fonemas semelhantes aliada ao vaivém dos versos na estrofe mimetiza:",
    [
      "o movimento contínuo e rítmico do fluxo e refluxo das águas do mar quebrando na praia.",
      "a velocidade supersônica de lanchas esportivas que disputam regatas de velocidade em lagoas.",
      "o desespero de banhistas náufragos que foram esquecidos por botes de salvamento da guarda-costeira.",
      "o ruído estridente de turbinas eólicas que geram energia a partir dos ventos costeiros na praia.",
      "a ausência total de água nos mares brasileiros durante os meses mais frios do inverno austral."
    ],
    0,
    "Bandeira antecipa o experimentalismo poético ao harmonizar sonoridade (aliterações e ecos) e cadência métrica para reproduzir sinestesicamente o embalo oscilante das ondas marítimas."
  ],
  [
    "Coesão referencial",
    "Leia o trecho de uma reportagem sobre reciclagem industrial:\n\n“A indústria automobilística anunciou investimentos maciços no reaproveitamento de alumínio. Este metal, que pode ser fundido infinitas vezes sem perder suas propriedades mecânicas, consome 95% menos energia quando reciclado do que na sua extração primária a partir da bauxita.”\n\nNo texto, a expressão 'Este metal' atua como mecanismo de coesão referencial que:",
    [
      "retoma anaforicamente o termo 'alumínio', evitando repetição vocabular e introduzindo uma caracterização física.",
      "antecipa cataforicamente a menção à rocha 'bauxita' que só aparece no final do período sintático.",
      "corrige um erro conceitual grave cometido pelos engenheiros da montadora de veículos elétricos.",
      "generaliza o conceito para abranger qualquer tipo de plástico utilizado na confecção de para-choques.",
      "opõe de forma adversativa as propriedades do ferro fundido às características do cobre laminado."
    ],
    0,
    "'Este metal' é uma anáfora associativa/hiperonímica: retoma 'alumínio' mantendo a continuidade temática do parágrafo sem repetições cansativas, enriquecendo o texto com nova informação."
  ],
  [
    "Coesão referencial",
    "Considere o seguinte período extraído de um ensaio acadêmico:\n\n“A professora entregou aos pesquisadores o relatório detalhado e solicitou que eles o examinassem com rigor.”\n\nOs pronomes destacados 'eles' e 'o' desempenham no enunciado papel coesivo ao retomarem, respectivamente:",
    [
      "“aos pesquisadores” e “o relatório detalhado”.",
      "“o relatório detalhado” e “a professora”.",
      "“aos pesquisadores” e “com rigor”.",
      "“a professora” e “aos pesquisadores”.",
      "“com rigor” e “o relatório detalhado”."
    ],
    0,
    "O pronome pessoal reto 'eles' retoma os agentes destinatários ('aos pesquisadores'), enquanto o oblíquo 'o' retoma o objeto direto paciente ('o relatório detalhado')."
  ],
  [
    "Coesão referencial",
    "Analise o uso dos pronomes demonstrativos no texto de divulgação científica:\n\n“A energia solar e a energia nuclear são fontes de baixo carbono. Esta gera resíduos radioativos que exigem armazenamento seguro por séculos; aquela depende da incidência de radiação solar ao longo do dia.”\n\nDe acordo com a norma-padrão da língua, os pronomes 'Esta' e 'aquela' referem-se, respectivamente, a:",
    [
      "energia nuclear e energia solar.",
      "energia solar e energia nuclear.",
      "baixo carbono e radiação solar.",
      "resíduos radioativos e fontes energéticas.",
      "incidência de radiação e armazenamento seguro."
    ],
    0,
    "Na coesão referencial com dois termos antecedentes, 'este/esta' retoma o elemento mais próximo ('energia nuclear'), enquanto 'aquele/aquela' retoma o elemento mais distante ('energia solar')."
  ],
  [
    "Coesão referencial",
    "Examine o parágrafo de uma crônica sobre a Amazônia:\n\n“O biólogo adentrou a densa floresta tropical, onde o dossel das árvores gigantescas bloqueia a luz solar. Naquele ecossistema exuberante, cada metro quadrado disputa espaço com cipós, orquídeas e bromélias.”\n\nA expressão 'Naquele ecossistema exuberante' desempenha a função coesiva de:",
    [
      "retomar por sinonímia contextual e hiperonímia o espaço físico da 'densa floresta tropical' citado antes.",
      "introduzir um novo ambiente geográfico completamente desconectado das matas equatoriais úmidas.",
      "antecipar a chegada de uma expedição científica enviada por universidades da Europa ocidental.",
      "apontar o desmatamento iminente das margens dos rios que abastecem as cidades da região norte.",
      "comparar as florestas brasileiras com as savanas africanas desprovidas de vegetação estratificada."
    ],
    0,
    "A expressão nominal 'Naquele ecossistema exuberante' é uma anáfora que sintetiza e amplia a referência anterior ('densa floresta tropical'), mantendo a cadeia coesiva do texto."
  ],
  [
    "Coesão referencial",
    "Leia a frase contida em uma resenha literária:\n\n“O romance retrata a saga de uma jovem cujos sonhos foram interrompidos pela guerra civil.”\n\nO pronome relativo 'cujos' estabelece no enunciado uma relação sintática e semântica de:",
    [
      "posse entre o antecedente ('uma jovem') e o substantivo consequente ('sonhos').",
      "lugar geométrico onde se desenrolaram os combates da infantaria militar.",
      "tempo cronológico exato em que o romance foi publicado pela primeira vez.",
      "modo particular como a protagonista enfrentou a miséria nos campos de refugiados.",
      "consequência fatal que provocou a morte de todos os parentes da personagem."
    ],
    0,
    "'Cujo(s)/cuja(s)' é pronome relativo que estabelece valor de posse: equivale a 'os sonhos da qual' (da jovem), concordando em gênero e número com a coisa possuída ('sonhos')."
  ],
  [
    "Coesão referencial",
    "Considere o seguinte trecho de um informe institucional:\n\n“A diretoria da empresa aprovou a compra de novos computadores. A medida visa aumentar a produtividade.”\n\nO sintagma 'A medida' atua na organização do texto como:",
    [
      "um rótulo anafórico recapitulativo, que encapsula toda a ação complexa de aprovar a compra dos equipamentos.",
      "um vocativo enfático direcionado aos funcionários do setor de tecnologia da informação.",
      "um termo que introduz uma hipótese improvável descartada pelos diretores financeiros.",
      "uma oração subordinada adjetiva que restringe o uso dos softwares nas dependências da fábrica.",
      "uma contradição semântica que desmente a declaração contida na primeira oração do parágrafo."
    ],
    0,
    "Trata-se de uma anáfora encapsuladora (ou rótulo): o substantivo abstrato 'A medida' resume e sintetiza o fato inteiro expresso na oração precedente ('aprovou a compra de novos computadores')."
  ],
  [
    "Coesão referencial",
    "Analise a distinção normativa do pronome relativo 'onde' no seguinte período:\n\n“Visitamos o laboratório de biotecnologia onde foram desenvolvidas as novas sementes resistentes à seca.”\n\nO emprego do pronome 'onde' é legítimo segundo a norma-padrão porque:",
    [
      "retoma com precisão um antecedente que designa um lugar físico e espacial concreto ('o laboratório').",
      "substitui termos temporais como 'época', 'ano' ou 'século' sem qualquer prejuízo à correção gramatical.",
      "indica a pessoa humana que realizou as pesquisas científicas no instituto agropecuário.",
      "atua como conjunção concessiva com o mesmo valor de 'embora' ou 'conquanto'.",
      "pode ser empregado indiscriminadamente para retomar sentimentos abstratos como 'tristeza' ou 'raiva'."
    ],
    0,
    "De acordo com a norma culta, o pronome relativo 'onde' só deve ser utilizado quando o seu referente for um espaço físico/lugar real delimitado ('o laboratório'). Para referências abstratas, usam-se 'em que', 'no qual' etc."
  ],
  [
    "Coesão referencial",
    "Examine a relação coesiva no parágrafo a seguir:\n\n“Só desejo uma coisa: que você conclua os estudos e construa um futuro independente.”\n\nO pronome 'uma coisa' desempenha no texto a função de:",
    [
      "catáfora, anunciando uma informação nova que só será revelada na oração subsequente.",
      "anáfora histórica, recordando um acontecimento ocorrido na infância do interlocutor.",
      "ironia que visa diminuir o valor da formação acadêmica na sociedade contemporânea.",
      "metonímia que substitui a causa pelo efeito nas relações profissionais modernas.",
      "elipse verbal que suprime a necessidade de conjugação das formas no presente do indicativo."
    ],
    0,
    "Diferente da anáfora (que retoma o já dito), a catáfora aponta para a frente: 'uma coisa' antecipa o conteúdo explicativo que é introduzido após os dois-pontos ('que você conclua os estudos...')."
  ],
  [
    "Coesão referencial",
    "Leia o trecho de uma crônica urbana:\n\n“O pedestre atravessou a faixa com pressa. O cidadão sabia que os motoristas raramente respeitavam o sinal.”\n\nA substituição de 'O pedestre' por 'O cidadão' configura um recurso de:",
    [
      "coesão lexical por sinonímia contextual, evitando repetições e atribuindo status cívico ao personagem.",
      "conflito semântico irreconciliável entre duas pessoas que disputavam a preferência na calçada.",
      "erro de concordância nominal que compromete a clareza da mensagem transmitida pelo narrador.",
      "quebra de coesão que impede o leitor de identificar quem estava caminhando pela via pública.",
      "figura de linguagem hipérbole que exagera desproporcionalmente o tamanho da travessia urbana."
    ],
    0,
    "A coesão lexical por substituição sinonímica ou contextual ('pedestre' -> 'cidadão') mantém a referência ao mesmo indivíduo, enriquecendo o perfil discursivo da personagem sem repetir a mesma palavra."
  ],
  [
    "Coesão referencial",
    "Considere o período de uma notícia sobre energia renovável:\n\n“O parque eólico gerou excedente elétrico recorde. Tal façanha só foi possível devido aos ventos fortes da estação.”\n\nA expressão 'Tal façanha' estabelece com a oração anterior uma relação coesiva de:",
    [
      "recapitulação avaliativa, qualificando o recorde de geração como um feito extraordinário e digno de nota.",
      "rejeição da notícia por considerá-la uma mentira fabricada pelos técnicos da concessionária de energia.",
      "antecipação de um desastre iminente provocado pela queda das hélices dos aerogeradores no litoral.",
      "dúvida sobre a real capacidade produtiva das turbinas instaladas ao longo do parque eólico.",
      "comparação depreciativa entre a força dos ventos nordestinos e as correntes de ar do sul do país."
    ],
    0,
    "O demonstrativo 'Tal' associado ao substantivo 'façanha' retoma a conquista anterior ('gerou excedente elétrico recorde') emitindo simultaneamente um juízo de valor positivo (uma façanha)."
  ],
  [
    "Coesão referencial",
    "Analise o trecho a seguir:\n\n“Lucas comprou um romance de ficção e uma biografia histórica. Este o fascinou pelo rigor documental; aquele, pelas profecias futuristas.”\n\nA análise correta da referência pronominal no período é:",
    [
      "“Este” refere-se à biografia histórica (mais próxima); “aquele” refere-se ao romance de ficção (mais distante).",
      "“Este” refere-se ao romance de ficção; “aquele” refere-se à biografia histórica.",
      "ambos os pronomes referem-se indistintamente a Lucas, o leitor que adquiriu os dois exemplares.",
      "“Este” refere-se ao rigor documental; “aquele” refere-se às profecias futuristas dos livros.",
      "a frase apresenta ambiguidade estrutural insolúvel que impede qualquer identificação dos termos."
    ],
    0,
    "A regra de ouro dos pronomes anafóricos correlatos: 'este' retoma o antecedente imediato ('uma biografia histórica') e 'aquele' retoma o primeiro termo citado ('um romance de ficção')."
  ],
  [
    "Coesão referencial",
    "Leia a declaração em um manifesto comunitário:\n\n“Exigimos a reforma imediata do posto de saúde e a contratação de pediatras. Sem essas medidas, a população do bairro continuará desassistida.”\n\nO sintagma 'essas medidas' contribui para a coesão do texto porque:",
    [
      "engloba e sintetiza em um único bloco as duas reivindicações formuladas na oração anterior.",
      "apresenta uma denúncia isolada sem vínculo com os pedidos de médicos e reforma física do prédio.",
      "demonstra que o posto de saúde já foi ampliado e equipado com leitos hospitalares de ponta.",
      "corrige uma falha sintática que proíbe o uso da conjunção aditiva em petições populares.",
      "atua como pronome de tratamento formal reservado a secretários municipais e governadores."
    ],
    0,
    "'Essas medidas' funciona como uma anáfora somatória/aglutinadora: reúne as duas proposições feitas anteriormente (reforma do posto e contratação de médicos) em uma só unidade de sentido."
  ],
  [
    "Humor e linguagem verbal e não-verbal",
    "Na famosa tirinha de Mafalda, a menina aponta para um globo terrestre sobre sua mesa de estudos e diz: “Olhem bem para este planeta...”. No quadrinho seguinte, ela se aproxima e sussurra: “Não parece uma casa de repouso para lunáticos?”. No último quadrinho, ela se afasta com as mãos na cabeça, angustiada.\n\nO efeito de humor crítico característico da personagem Quino decorre:",
    [
      "do contraste entre a inocência da infância e a reflexão amarga e desiludida sobre as guerras e desmandos da humanidade.",
      "do fato de a menina não ter estudado a matéria de geografia escolar para a prova trimestral.",
      "da comprovação astronômica de que o planeta Terra é habitado por seres vindos da Lua.",
      "do medo infantil da personagem de que o globo de plástico caia sobre os seus brinquedos prediletos.",
      "da zombaria maldosa contra os idosos que vivem recolhidos em instituições de longa permanência."
    ],
    0,
    "A sátira de Quino na personagem Mafalda funda-se no humor reflexivo e filosófico: a perspectiva de uma criança perspicaz que enxerga as loucuras, contradições e violências da política mundial dos adultos."
  ],
  [
    "Humor e linguagem verbal e não-verbal",
    "Na tirinha de Calvin e Haroldo, o garoto aparece correndo com um balde cheio de água e grita: “Vou jogar este balde de água fria no Haroldo para testar seus reflexos de predador felino!”. No quadrinho seguinte, Calvin arremessa a água em direção ao tigre de pelúcia deitado no chão. No quadrinho final, Calvin aparece completamente ensopado, com o balde enfiado na cabeça, enquanto o tigre pisca o olho calmamente na mesma posição.\n\nO elemento cômico da cena resulta da:",
    [
      "quebra de expectativa da narrativa visual, onde o agressor acaba sendo a própria vítima de sua armadilha de modo fantástico.",
      "comprovação científica de que tigres de pelúcia possuem agilidade superior à dos felinos das savanas africanas.",
      "irritação de Calvin com a temperatura excessivamente congelante da água armazenada no balde de metal.",
      "atitude passiva e indefesa do tigre que aceitou o banho gelado sem manifestar nenhuma reação.",
      "decisão da mãe de Calvin de repreender o filho por desperdiçar água potável durante a tarde de verão."
    ],
    0,
    "O humor visual de Bill Watterson explora a quebra de expectativa e a ambiguidade da existência de Haroldo: Calvin arma o ataque, mas no corte temporal entre os quadrinhos, ele é magicamente punido com a própria travessura."
  ],
  [
    "Humor e linguagem verbal e não-verbal",
    "Na tirinha de Armandinho, o menino conversa com seu amigo sapo na beira de um lago:\n\nArmandinho: “Meu avô disse que antigamente as pessoas usavam cartas de papel para falar com quem estava longe.”\nSapo: “E demorava semanas para a resposta chegar?”\nArmandinho: “Demorava... mas pelo menos as pessoas tinham tempo para pensar antes de dizer bobagens!”\n\nA fala final de Armandinho constrói uma reflexão crítica sobre:",
    [
      "a imediatidade impulsiva e a falta de ponderação nas interações digitais contemporâneas em comparação com a lentidão das cartas.",
      "a extinção do serviço dos Correios que impediu o envio de mensagens escritas para as famílias camponesas.",
      "a incapacidade de seu avô em aprender a manusear computadores e aparelhos de telefone celular.",
      "a superioridade moral dos animais anfíbios que conseguem se comunicar sem necessidade de linguagem verbal.",
      "o alto custo tributário dos selos postais que inviabilizava a troca de correspondências no século XX."
    ],
    0,
    "Armandinho usa a comparação temporal para ironizar o presente: a agilidade instantânea dos chats e redes sociais suprimiu o tempo de reflexão e maturidade das palavras, favorecendo a proliferação de ofensas e impulsividade."
  ],
  [
    "Humor e linguagem verbal e não-verbal",
    "Em uma tirinha de Laerte, dois homens em trajes executivos olham para o topo de um arranha-céu cinzento.\n\nExecutivo 1: “Construímos o maior monumento à eficiência humana de toda a história!”\nExecutivo 2: “Fantástico. E o que as pessoas fazem lá dentro?”\nExecutivo 1: “Trabalham doze horas por dia para pagar o aluguel do cubículo onde dormem cinco horas por noite.”\n\nA ironia expressa pelo Executivo 1 no último quadrinho revela:",
    [
      "o absurdo existencial da rotina urbana hiperprodutiva que escraviza o indivíduo em um ciclo vicioso de trabalho e subsistência.",
      "o orgulho sincero de dois empresários que garantiram conforto e luxo irrestrito a todos os seus colaboradores.",
      "a preocupação dos arquitetos em projetar apartamentos amplos e ventilados para a classe operária.",
      "o sucesso de um modelo econômico que reduziu a jornada de trabalho e priorizou o lazer das famílias.",
      "a necessidade de demolir prédios comerciais para substituí-los por estacionamentos subterrâneos."
    ],
    0,
    "A tirinha desconstrói a retórica corporativa da 'eficiência': o monumento grandioso revela-se, ao final, uma engrenagem que aliena o trabalhador, forçando-o a viver para trabalhar e trabalhar para pagar onde mal consegue descansar."
  ],
  [
    "Humor e linguagem verbal e não-verbal",
    "Na tirinha de Hagar, o Horrível, o guerreiro viking volta da batalha todo ensanguentado e diz ao amigo Eddie:\n\n“Sobrevivi a espadas, flechas, tempestades em alto-mar e veneno de serpentes!”\n\nNo quadrinho seguinte, ao abrir a porta de sua casa, sua esposa Helga o aguarda com um rolo de massa na mão e grita: “Você limpou os pés no capacho antes de pisar no meu tapete novo?!”. No quadrinho final, Hagar corre desesperado de volta para o navio de guerra.\n\nO recurso cômico explorado na narrativa apoia-se:",
    [
      "na inversão paródica entre a bravura lendária do guerreiro em batalhas e seu pavor cômico diante das broncas domésticas da esposa.",
      "no fato de Hagar não gostar de viajar de barco durante o outono no mar Báltico.",
      "na superioridade bélica do rolo de massa de madeira sobre os escudos e lanças de ferro dos guerreiros medievais.",
      "no preconceito da esposa contra os guerreiros que regressam com ferimentos de guerra para casa.",
      "na recusa do amigo Eddie em ajudar Hagar a limpar a sujeira acumulada nas botas de couro."
    ],
    0,
    "A tira joga com a inversão e o rebaixamento paródico do herói épico: o bárbaro temido em todo o continente europeu treme diante da autoridade doméstica e das tarefas prosaicas de casa."
  ],
  [
    "Humor e linguagem verbal e não-verbal",
    "Considere a tirinha em que um gato doméstico gordo e preguiçoso olha para um passarinho pousado na janela:\n\nGato: “Eu poderia saltar, desferir um bote certeiro e provar a glória dos meus ancestrais predadores felinos...”\nPassarinho: *pisca o olho*\nGato: “...mas abriram um sachê de salmão na cozinha e o sofá está tão macio que não vale a pena o esforço.”\n\nO efeito humorístico é gerado pela:",
    [
      "quebra de expectativa entre o discurso heroico da natureza selvagem e a comodidade burguesa e indolente do animal domesticado.",
      "habilidade extraordinária do passarinho em hipnotizar os gatos carnívoros por meio de piscadelas de olhos.",
      "indignação do gato com a qualidade nutricional das rações industrializadas oferecidas por seus tutores.",
      "agressividade desmedida do felino que destrói a mobília da residência para caçar animais voadores.",
      "incapacidade física dos felinos em pular distâncias superiores a meio metro no piso de cerâmica."
    ],
    0,
    "A piada apoia-se no contraste entre a retórica solene dos 'ancestrais felinos predadores' e a realidade pachorrenta do gato doméstico mimado que prefere o conforto do sachê e do sofá à caça real."
  ],
  [
    "Humor e linguagem verbal e não-verbal",
    "Na tira de Níquel Náusea, de Fernando Gonsales, uma barata conversa com outra em cima de uma mesa de cozinha:\n\nBarata 1: “A espécie humana passou séculos inventando inseticidas químicos, armadilhas elétricas e chineladas letais...”\nBarata 2: “E o que eles conseguiram com isso?”\nBarata 1: “Criaram uma geração de baratas super-resistentes que acha veneno tão refrescante quanto refrigerante de limão!”\n\nO humor da tirinha constrói-se mediante:",
    [
      "a ironia biológica baseada na seleção artificial involuntária que fortalece a praga em vez de exterminá-la.",
      "a defesa da ecologia que exige o fim imediato de qualquer método de limpeza nas residências urbanas.",
      "o medo irracional dos insetos que abandonam a cozinha sempre que as luzes são acesas pelos moradores.",
      "a celebração da superioridade tecnológica humana na eliminação permanente de todas as espécies de pragas.",
      "a constatação científica de que os inseticidas comerciais são compostos unicamente por água mineral e açúcar."
    ],
    0,
    "A tira parte de um fato biológico real (a pressão seletiva que seleciona insetos resistentes a venenos) para produzir humor através do exagero irônico das baratas comemorando o veneno como refresco."
  ],
  [
    "Humor e linguagem verbal e não-verbal",
    "Em uma tirinha sobre o mercado corporativo, um candidato participa de uma entrevista de emprego:\n\nEntrevistador: “Procuramos um profissional resiliente, dinâmico, multitarefa e apaixonado por pressão.”\nCandidato: “E qual é a faixa salarial para essas atribuições?”\nEntrevistador: “Um salário mínimo, vale-transporte com desconto e pizza na sexta-feira caso você faça hora extra gratuita!”\n\nA crítica satírica presente no diálogo ataca principalmente:",
    [
      "a desproporção abusiva entre a alta exigência de qualificação emocional e a precarização da remuneração e dos direitos trabalhistas.",
      "a recusa dos jovens recém-formados em consumir alimentos calóricos oferecidos gratuitamente nos escritórios.",
      "a preferência unânime dos candidatos a emprego por jornadas de trabalho que ultrapassam sessenta horas semanais.",
      "o excesso de benefícios financeiros concedidos pelas pequenas empresas comerciais do setor de varejo.",
      "a impossibilidade jurídica de aplicar dinâmicas de seleção psicológica em processos seletivos públicos."
    ],
    0,
    "A charge satiriza a hipocrisia do jargão motivacional corporativo ('resiliente, dinâmico, apaixonado por pressão') que serve de biombo para camuflar salários aviltantes e exploração de mão de obra."
  ],
  [
    "Humor e linguagem verbal e não-verbal",
    "Na tira de Frank e Ernest, os dois funcionários observam uma máquina recém-instalada no galpão:\n\nFrank: “A gerência disse que este computador tem inteligência artificial de última geração.”\nErnest: “É verdade... acabou de travar a tela e foi tomar café para fingir que está muito ocupado!”\n\nA personificação da máquina no diálogo produz humor ao:",
    [
      "atribuir à inteligência artificial comportamentos de procrastinação e simulação tipicamente associados aos trabalhadores humanos preguiçosos.",
      "comprovar que os computadores modernos possuem sentimentos afetivos de amizade pelos operários de fábrica.",
      "demonstrar a perfeição técnica dos processadores industriais que nunca sofrem panes no sistema operacional.",
      "elogiar a iniciativa dos administradores em substituir todos os funcionários por robôs autônomos na linha de montagem.",
      "denunciar o vício patológico em cafeína que prejudica a concentração dos técnicos em tecnologia da informação."
    ],
    0,
    "A graça da tira reside na ambiguidade da 'inteligência artificial': em vez de agir como uma máquina infalível de produtividade, o robô 'aprendeu' os vícios e artimanhas humanas para escapar do trabalho."
  ],
  [
    "Humor e linguagem verbal e não-verbal",
    "Observe a tira em que um pai lê um livro de contos de fadas para o filho dormir:\n\nPai: “...e então a princesa beijou o sapo feio e ele se transformou em um lindo príncipe encantado!”\nFilho: “Que golpe, hein papai?! Ela iludiu o pobre anfíbio para ter um marido herdeiro de terras sem pagar imposto de transmissão!”\n\nA resposta do filho quebra o efeito lírico da narrativa tradicional ao:",
    [
      "desconstruir a fantasia mágica infantil aplicando a ela uma ótica jurídica e econômica excessivamente pragmática dos adultos.",
      "comprovar que os contos de fadas medievais foram redigidos com base no código tributário nacional contemporâneo.",
      "demonstrar o medo da criança de que príncipes encantados invadam a residência da família durante a noite.",
      "criticar o pai por não ter adquirido livros ilustrados em formato tridimensional para a hora de dormir.",
      "expressar o desejo do menino de se formar em medicina veterinária para cuidar de sapos abandonados em pântanos."
    ],
    0,
    "O efeito cômico advém da incongruência do ponto de vista: a criança recusa a ingenuidade do conto de fadas e interpreta o clássico beijo na ótica fria do direito sucessório e tributário dos adultos."
  ],
  [
    "Humor e linguagem verbal e não-verbal",
    "Na tirinha de Peanuts, Linus segura seu inseparável cobertor de estimação e Snoopy tenta arrancá-lo com a boca.\n\nLinus puxa com força, cai sentado no chão, recupera o cobertor e grita: “Você nunca vai entender! Isso não é um pedaço de pano sujo, é o meu escudo contra a insegurança do universo!”.\nNo quadrinho seguinte, Snoopy senta-se pensativo em cima de sua casinha de cachorro e reflete mentalmente: “E eu achava que uma tigela de ração cheia já resolvia todos os problemas do cosmos...”.\n\nO contraste cômico entre os dois personagens estabelece-se entre:",
    [
      "a complexidade psicológica e existencial do menino humano e o pragmatismo simples e imediato do cãozinho.",
      "a agressividade feroz de cães de caça e a fragilidade física de crianças que frequentam a pré-escola.",
      "a sujeira perigosa acumulada em tecidos antigos e a necessidade de desinfecção higiênica com água sanitária.",
      "o desejo de Snoopy em se transformar em um ser humano para poder frequentar aulas de filosofia na universidade.",
      "a incapacidade dos personagens de quadrinhos em manter laços de afeto e respeito em suas rotinas diárias."
    ],
    0,
    "Schulz contrasta magistralmente a neurose existencial humana de Linus (que precisa de um 'escudo contra a insegurança do universo') com o estoicismo prático e descomplicação animal de Snoopy (resolvido por comida)."
  ],
  [
    "Humor e linguagem verbal e não-verbal",
    "Considere a tirinha em que dois náufragos estão ilhados em um rochedo minúsculo cercado de tubarões:\n\nNáufrago 1: “Estamos perdidos, sem água potável, sem comida e a maré está subindo!”\nNáufrago 2: “Olha pelo lado bom: pelo menos não precisamos mais responder àquele grupo de mensagens da família no WhatsApp!”\n\nO humor negro da cena apoia-se:",
    [
      "na valorização cômica e absurda de um pequeno alívio social frente a uma situação extrema de perigo de morte iminente.",
      "na constatação de que os aparelhos de celular mantêm sinal de internet de alta velocidade em qualquer ilha deserta.",
      "no elogio aos esportes de aventura como mergulho com tubarões em praias tropicais de difícil acesso.",
      "na raiva dos náufragos contra os biólogos marinhos que não alimentam os predadores aquáticos com ração.",
      "no desconhecimento dos marinheiros sobre técnicas elementares de navegação e sobrevivência na selva costeira."
    ],
    0,
    "O riso brota do absurdo e da inversão de prioridades: diante da tragédia iminente (fome, sede, tubarões), o náufrago comemora aliviado o fato banal de ter escapado das chatices sociais de um grupo de mensagens."
  ],
  [
    "Níveis de linguagem",
    "Leia o trecho de um laudo médico pericial:\n\n“O paciente apresenta quadro álgico agudo na região lombar decorrente de hérnia discal L4-L5, acompanhada de parestesia e hiporreflexia no membro inferior ipsilateral.”\n\nO nível de linguagem predominante no texto classifica-se como:",
    [
      "técnico-científico, caracterizado por vocabulário especializado e jargão específico da medicina clínica.",
      "coloquial, com emprego de gírias e expressões informais típicas de conversas descontraídas entre amigos.",
      "regional, marcado por traços fonéticos e expressões populares de uma localidade geográfica delimitada.",
      "literário-poético, repleto de metáforas líricas e jogos sonoros que visam emocionar o leitor esteticamente.",
      "jornalístico-sensacionalista, voltado a causar comoção pública exagerada com manchetes dramáticas."
    ],
    0,
    "O laudo utiliza terminologia técnica de alta densidade médica ('álgico', 'parestesia', 'hiporreflexia', 'ipsilateral'), típica da variedade profissional e científica."
  ],
  [
    "Variação linguística e adequação",
    "Considere a mensagem de e-mail enviada por um estudante a um professor universitário:\n\n“E aí, fessor! Beleza pura? Manda logo aí aquele slide da aula passada que eu preciso dar uma bizoiada pra prova de amanhã, valeu? Tmj!”\n\nEm relação ao contexto sociocomunicativo formal da correspondência acadêmica, observa-se que:",
    [
      "houve inadequação de registro pelo uso de linguagem coloquial, gírias e abreviações em um canal formal.",
      "o texto atende rigorosamente a todas as exigências do padrão culto exigido em mensagens acadêmicas oficiais.",
      "o estudante empregou variedade regional arcaica própria da correspondência epistolar do século XIX.",
      "o uso da expressão 'tmj' é obrigatório segundo o manual de redação da Presidência da República.",
      "a mensagem demonstra elevado domínio de termos técnicos e construções sintáticas complexas do português."
    ],
    0,
    "Embora a mensagem seja compreensível, o registro é marcadamente coloquial/informal ('fessor', 'bizoiada', 'tmj'), gerando inadequação ao contexto solene e hierárquico da comunicação professor-aluno."
  ],
  [
    "Variação linguística regional",
    "Leia a estrofe da canção 'Asa Branca', de Luiz Gonzaga e Humberto Teixeira:\n\n“Quando oiei a terra ardendo\nQual fogueira de São João\nEu perguntei a Deus do céu, ai\nPor que tamanha judiação”\n\nO emprego de formas como 'oiei' em vez de 'olhei' exemplifica um fenômeno de:",
    [
      "variação diatópica (regional) e sociocultural perfeitamente legítima e expressiva na tradição da música popular.",
      "erro de impressão gráfica que deveria ter sido corrigido pelos revisores da gravadora de discos.",
      "incapacidade definitiva dos autores de compreenderem as regras do sistema ortográfico da língua portuguesa.",
      "tentativa proposital de desvalorizar a cultura dos agricultores sertanejos do semiárido brasileiro.",
      "adoção de estrangeirismos importados do inglês que prejudicam a identidade nacional das letras de canção."
    ],
    0,
    "A variação fonética ('oiei' por 'olhei', vocalização do 'lh') reflete a riqueza dialetal do português falado no sertão nordestino, dotando a canção de autenticidade sociocultural."
  ],
  [
    "Níveis de linguagem",
    "Examine o parágrafo de abertura de uma petição jurídica:\n\n“Excelentíssimo Senhor Doutor Juiz de Direito da 2ª Vara Cível da Comarca de Porto Alegre: Vêm os autores, por intermédio de seu advogado infra-assinado, propor a presente Ação Revisional com fulcro no art. 317 do Código Civil.”\n\nO trecho caracteriza-se pelo uso de linguagem:",
    [
      "jurídica formal, pautada pela solenidade, fórmulas consagradas de tratamento e precisão terminológica legal.",
      "coloquial e descontraída, que busca aproximar o magistrado dos problemas domésticos dos litigantes.",
      "poética e alegórica, utilizando versos livres para defender os direitos subjetivos das partes envolvidas.",
      "técnica de engenharia de software, orientada para a automação de bancos de dados judiciais.",
      "panfletária e propagandística, cujo objetivo principal é convocar manifestações de rua em frente aos tribunais."
    ],
    0,
    "O texto jurídico obedece a rigorosos protocolos de registro padrão formal ('Excelentíssimo', 'infra-assinado', 'com fulcro no art.'), exigidos na redação forense."
  ],
  [
    "Variação linguística e preconceito linguístico",
    "A respeito do fenômeno da variação linguística e do preconceito linguístico no Brasil, o linguista Marcos Bagno afirma que classificar a fala de populações de baixa escolaridade como 'português errado' decorre de:",
    [
      "preconceito social e elitismo cultural que desconsidera as regras gramaticais e a coerência lógica das variedades populares.",
      "critérios puramente científicos e biológicos que comprovam a superioridade neurológica dos falantes das classes abastadas.",
      "necessidade pedagógica de impedir que os cidadãos das periferias consigam se comunicar e expressar suas vontades.",
      "leis do Código Penal que punem com reclusão o não cumprimento da colocação pronominal enclítica no dia a dia.",
      "comprovação de que a língua portuguesa falada no Brasil é uniforme e desprovida de quaisquer dialetos regionais."
    ],
    0,
    "A linguística contemporânea demonstra que o preconceito linguístico mascara um preconceito de classe: todas as variedades possuem regras internas sistemáticas e comunicam com plena eficácia."
  ],
  [
    "Níveis de linguagem",
    "Considere o seguinte aviso colado na parede de uma cozinha industrial:\n\n“Higienize as mãos com sabão bactericida antes de manipular alimentos in natura e após o descarte de resíduos orgânicos.”\n\nO texto exemplifica o padrão culto formal em função de:",
    [
      "utilizar clareza, verbos no modo imperativo com concordância correta, vocabulário objetivo e ausência de gírias.",
      "empregar rimas consoantes e versos decassílabos para entreter os cozinheiros durante o turno de trabalho.",
      "adotar termos estrangeiros em latim e grego clássico incompreensíveis para os funcionários da cozinha.",
      "apresentar ambiguidade proposital com o intuito de suscitar debates filosóficos sobre higiene pessoal.",
      "conter desvios intencionais de regência verbal para aproximar a linguagem dos trabalhadores da limpeza."
    ],
    0,
    "O texto normativo de instrução de trabalho cumpre a norma-padrão: é direto, gramaticalmente impecável ('higienize', 'in natura', 'resíduos orgânicos') e funcional para a segurança sanitária."
  ],
  [
    "Variação linguística diacrônica",
    "Em documentos históricos do século XIX, era comum a grafia 'pharmacia', 'triumpho' e a forma de tratamento 'Vossa Mercê'. Ao longo das décadas, essas formas evoluíram, respectivamente, para 'farmácia', 'triunfo' e 'você'.\n\nEssa transformação da língua ao longo das épocas e dos séculos constitui a chamada variação:",
    [
      "histórica ou diacrônica, decorrente da dinâmica viva e natural de evolução temporal do idioma.",
      "diatópica ou regional, provocada pela distância física entre cidades do litoral e do interior do país.",
      "diafásica ou de estilo, determinada pelo grau de intimidade existente entre o emissor e o receptor da fala.",
      "diastrática ou social, vinculada à renda per capita e ao nível de instrução formal de grupos econômicos.",
      "involuntária e errônea, causada pelo desleixo ortográfico dos editores de jornais da Belle Époque brasileira."
    ],
    0,
    "A variação temporal/histórica é denominada diacrônica: acompanha as mutações fonéticas, morfológicas e ortográficas da língua com o passar das gerações."
  ],
  [
    "Sintaxe do período simples",
    "Analise a oração a seguir:\n\n“O jovem arquiteto desenhou um projeto arrojado para a nova biblioteca pública.”\n\nOs termos destacados 'um projeto arrojado' e 'para a nova biblioteca pública' classificam-se sintaticamente como:",
    [
      "objeto direto e adjunto adverbial de finalidade (ou complemento com valor de destino/fim).",
      "objeto indireto e sujeito composto preposicionado da oração principal.",
      "complemento nominal e adjunto adnominal restritivo de lugar público.",
      "predicativo do sujeito e aposto enumerativo de valor circunstancial.",
      "sujeito paciente e agente da passiva analítica com preposição obrigatória."
    ],
    0,
    "Quem desenha, desenha algo (desenhou 'um projeto arrojado' = objeto direto sem preposição); 'para a nova biblioteca' expressa a finalidade/destinatário do projeto desenhado."
  ],
  [
    "Sintaxe do período simples",
    "Observe o seguinte enunciado:\n\n“A leitura de bons livros enriquece a mente dos jovens.”\n\nOs termos preposicionados 'de bons livros' e 'dos jovens' exercem, respectivamente, as funções de:",
    [
      "complemento nominal (alvo paciente da ação de ler) e adjunto adnominal (relação de posse/especificação de mente).",
      "adjunto adnominal nos dois casos, pois ambos são introduzidos pela preposição 'de'.",
      "objeto indireto nos dois casos, uma vez que complementam o sentido de verbos transitivos diretos.",
      "agente da passiva e adjunto adverbial de modo que qualifica a rapidez da leitura individual.",
      "sujeito paciente composto que pratica a ação de enriquecer o vocabulário escolar."
    ],
    0,
    "'De bons livros' completa o substantivo transitivo 'leitura' com sentido paciente (os livros são lidos = complemento nominal); 'dos jovens' especifica a posse/pertencimento da 'mente' (mente dos jovens = adjunto adnominal)."
  ],
  [
    "Sintaxe do período simples",
    "Considere a frase:\n\n“Caminharam silenciosos pelas ruas desertas da pequena cidade.”\n\nO termo 'silenciosos' desempenha a função sintática de:",
    [
      "predicativo do sujeito oculto (eles/elas), qualificando o estado do sujeito no momento da ação de caminhar.",
      "adjunto adverbial de modo, indicando a rapidez mecânica com que os transeuntes se deslocavam.",
      "objeto direto que completa o sentido do verbo intransitivo de locomoção espacial.",
      "complemento nominal preposicionado que se vincula ao substantivo abstrato 'ruas'.",
      "núcleo do sujeito paciente de uma oração estruturada na voz passiva sintética."
    ],
    0,
    "O termo 'silenciosos' é um adjetivo que concorda com o sujeito elíptico (eles/elas) e indica seu estado durante a ação do verbo intransitivo 'caminhar', configurando um predicado verbo-nominal com predicativo do sujeito."
  ],
  [
    "Sintaxe do período simples",
    "Leia a oração a seguir:\n\n“Nenhum estudante compareceu ao auditório no horário marcado.”\n\nO sujeito dessa oração é classificado como:",
    [
      "simples, tendo como núcleo o substantivo 'estudante'.",
      "indeterminado, uma vez que o pronome indefinido 'nenhum' impede saber quem foi ao local.",
      "inexistente, por se tratar de uma oração com sentido estritamente negativo e impessoal.",
      "composto, formado pela junção do pronome 'nenhum' com o substantivo 'estudante'.",
      "oculto ou desinencial, determinado apenas pela terminação verbal da terceira pessoa."
    ],
    0,
    "O sujeito é 'Nenhum estudante', que possui apenas um núcleo substantivo determinado ('estudante'). Portanto, o sujeito é simples (a presença do pronome indefinido não indetermina o sujeito na sintaxe)."
  ],
  [
    "Sintaxe do período simples",
    "Examine a seguinte manchete esportiva:\n\n“A torcida considerou o técnico um estrategista brilhante após a vitória no clássico.”\n\nO termo 'um estrategista brilhante' classifica-se sintaticamente como:",
    [
      "predicativo do objeto direto ('o técnico'), atribuindo-lhe um atributo atribuído pelo sujeito ('A torcida').",
      "adjunto adnominal do substantivo 'vitória', especificando o placar final obtido na partida.",
      "objeto indireto regido pela preposição oculta 'a' em relação ao verbo transitivo direto.",
      "aposto explicativo isolado entre vírgulas que define o nome civil do treinador de futebol.",
      "adjunto adverbial de tempo que marca o instante do apito final do árbitro do jogo."
    ],
    0,
    "O verbo 'considerar' é transitivo direto: 'o técnico' é o objeto direto, e 'um estrategista brilhante' é o atributo conferido a esse objeto pelo sujeito, atuando como predicativo do objeto."
  ],
  [
    "Sintaxe do período simples",
    "Considere a oração:\n\n“Fazia dias frios naquela região serrana.”\n\nA respeito da estrutura sintática do período, é correto afirmar que:",
    [
      "trata-se de uma oração sem sujeito, pois o verbo 'fazer' é impessoal quando indica tempo cronológico ou meteorológico decorrido.",
      "o sujeito da oração é o substantivo composto 'dias frios', com o qual o verbo deveria concordar no plural.",
      "o sujeito é indeterminado, visto que não se conhece a força da natureza que causou o resfriamento térmico.",
      "o termo 'naquela região serrana' exerce papel de objeto direto exigido pela transitividade do verbo fazer.",
      "a frase apresenta erro crasso de concordância, devendo ser corrigida obrigatoriamente para 'Faziam dias frios'."
    ],
    0,
    "O verbo 'fazer' indicando tempo decorrido ou clima é impessoal: não possui sujeito e deve permanecer na 3ª pessoa do singular. 'Dias frios' atua como objeto direto do verbo impessoal."
  ],
  [
    "Sintaxe do período simples",
    "Analise a oração:\n\n“O presidente da empresa obedeceu às diretrizes do conselho deliberativo.”\n\nO termo 'às diretrizes do conselho deliberativo' classifica-se como:",
    [
      "objeto indireto, por ser complemento preposicionado exigido pelo verbo transitivo indireto 'obedecer'.",
      "objeto direto com preposição facultativa decorrente de ênfase estilística do narrador.",
      "complemento nominal vinculado ao substantivo próprio que ocupa o núcleo do sujeito.",
      "adjunto adverbial de instrumento que descreve o meio pelo qual a reunião foi conduzida.",
      "agente da passiva que realizou a ação de aprovação das normas contábeis da corporação."
    ],
    0,
    "Na norma culta, o verbo 'obedecer' é transitivo indireto e exige a preposição 'a' (obedecer a algo/alguém). A fusão da preposição 'a' com o artigo 'as' gera a crase: 'às diretrizes...' = objeto indireto."
  ],
  [
    "Vozes verbais",
    "Considere a seguinte oração na voz ativa:\n\n“Os engenheiros da construtora inauguraram a nova ponte sobre o rio.”\n\nA transposição correta dessa oração para a voz passiva analítica resulta em:",
    [
      "“A nova ponte sobre o rio foi inaugurada pelos engenheiros da construtora.”",
      "“A nova ponte sobre o rio era inaugurada pelos engenheiros da construtora.”",
      "“Inaugurou-se a nova ponte sobre o rio pelos engenheiros da construtora.”",
      "“A nova ponte sobre o rio foram inauguradas pelos engenheiros da construtora.”",
      "“Os engenheiros da construtora foram quem a nova ponte sobre o rio inauguraram.”"
    ],
    0,
    "Voz ativa: 'inauguraram' (pretérito perfeito). Na passiva analítica, o objeto direto vira sujeito ('A nova ponte sobre o rio') e o verbo auxiliar 'ser' vai para o pretérito perfeito singular ('foi') + particípio ('inaugurada') + agente da passiva ('pelos engenheiros...')."
  ],
  [
    "Vozes verbais e partícula 'se'",
    "Examine as orações abaixo:\n\nI. “Consertam-se relógios antigos.”\nII. “Precisa-se de técnicos especializados.”\n\nA análise morfossintática da partícula 'se' nas frases I e II indica que ela atua, respectivamente, como:",
    [
      "pronome apassivador (voz passiva sintética) e índice de indeterminação do sujeito.",
      "índice de indeterminação do sujeito em ambas as frases.",
      "pronome reflexivo de reciprocidade em ambas as frases.",
      "conjunção subordinativa integrante e conjunção condicional de tempo.",
      "partícula expletiva ou de realce sem nenhuma função sintática relevante."
    ],
    0,
    "Em I, o verbo é transitivo direto: 'se' é partícula apassivadora ('relógios antigos são consertados' = sujeito paciente). Em II, o verbo é transitivo indireto com preposição ('de técnicos'): 'se' é índice de indeterminação do sujeito."
  ],
  [
    "Vozes verbais",
    "Leia a seguinte frase de um comunicado empresarial:\n\n“O projeto será avaliado pela diretoria financeira na próxima semana.”\n\nO termo preposicionado 'pela diretoria financeira' desempenha a função sintática de:",
    [
      "agente da passiva, correspondendo ao sujeito praticante da ação na voz ativa correspondente.",
      "adjunto adverbial de companhia que acompanhou os auditores fiscais no prédio.",
      "objeto indireto que complementa o sentido da locução verbal no futuro do presente.",
      "complemento nominal que se liga diretamente ao substantivo abstrato 'projeto'.",
      "predicativo do sujeito paciente estruturado sob a forma de sintagma preposicional."
    ],
    0,
    "Na voz passiva analítica ('será avaliado'), o termo introduzido pela preposição 'por' ('pela diretoria') que pratica a ação expressa pelo particípio é o agente da passiva."
  ],
  [
    "Vozes verbais e concordância na passiva",
    "De acordo com a norma-padrão da língua portuguesa, assinale a alternativa cuja concordância verbal está plenamente correta na voz passiva sintética:",
    [
      "Alugam-se salas comerciais no edifício central da avenida.",
      "Aluga-se salas comerciais no edifício central da avenida.",
      "Tratam-se de questões prioritárias para a saúde do município.",
      "Precisa-se de operários qualificados para as obras da rodovia.",
      "Confiam-se em propostas milagrosas durante as eleições locais."
    ],
    0,
    "Com verbo transitivo direto ('alugar') acompanhado do pronome apassivador 'se', o substantivo subsequente ('salas comerciais') é o sujeito paciente da oração, obrigando o verbo a concordar no plural: 'Alugam-se salas comerciais'."
  ],
  [
    "Vozes verbais reflexivas",
    "Considere a oração:\n\n“O atleta machucou-se durante a última sessão de treinos antes da competição.”\n\nNesse contexto, a voz verbal classifica-se como:",
    [
      "reflexiva, pois o sujeito ('O atleta') pratica e sofre simultaneamente a ação expressa pelo verbo.",
      "passiva analítica, pelo fato de o verbo apresentar partícula de ligação ligada por hífen.",
      "passiva sintética, na qual o atleta funciona como sujeito paciente inanimado de uma ação externa.",
      "ativa pura, na qual o pronome 'se' funciona apenas como índice de indeterminação do agente.",
      "recíproca obrigatória, que exige necessariamente a presença de dois ou mais indivíduos em cena."
    ],
    0,
    "Na voz reflexiva, a ação verbal parte do sujeito e recai sobre ele mesmo (o atleta causou o machucado a si mesmo); 'se' funciona como pronome reflexivo com função de objeto direto."
  ],
  [
    "Vozes verbais e transposição",
    "Ao transpor a oração 'A comissão examinadora havia aprovado todos os candidatos cotistas' para a voz passiva analítica, a locução verbal resultante será:",
    [
      "haviam sido aprovados.",
      "foram sendo aprovados.",
      "eram aprovados.",
      "tinham aprovado.",
      "seriam aprovados."
    ],
    0,
    "O tempo composto 'havia aprovado' (mais-que-perfeito composto) gera na passiva a locução 'haviam sido aprovados' (concordando com 'todos os candidatos cotistas')."
  ],
  [
    "Figuras de linguagem",
    "Considere o seguinte verso de Vinicius de Moraes no 'Soneto de Separação':\n\n“De repente do riso fez-se o pranto\nSilencioso e branco como a bruma...”\n\nNos versos citados, identificam-se simultaneamente duas figuras de linguagem fundamentais:",
    [
      "antítese (na oposição entre 'riso' e 'pranto') e comparação explícita ('como a bruma').",
      "pleonasmo vicioso redundante e eufemismo que suaviza a morte das personagens poéticas.",
      "hipérbole de exagero desmedido e anacoluto que rompe a estrutura sintática da frase.",
      "metonímia baseada na troca do continente pelo conteúdo e personificação da neblina fria.",
      "paradoxo inconciliável que nega a existência da dor e ironia contra os sentimentos humanos."
    ],
    0,
    "Há antítese no contraste entre ideias opostas ('riso' vs 'pranto') e comparação por símile indicada pelo conectivo 'como' ('branco como a bruma')."
  ],
  [
    "Figuras de linguagem",
    "Leia a notícia sobre a partida de futebol:\n\n“Os vinte e dois pares de chuteiras correram incansavelmente sob o gramado encharcado do estádio.”\n\nA figura de linguagem que substitui os jogadores pela expressão 'pares de chuteiras' classifica-se como:",
    [
      "metonímia, operando a substituição da parte pelo todo (o instrumento/calçado pelo atleta que o calça).",
      "metáfora pura, criando uma relação de semelhança poética imaginária entre pés e calçados esportivos.",
      "personificação, atribuindo sentimentos de cansaço a objetos inanimados de couro industrializado.",
      "eufemismo, que busca minimizar a gravidade da expulsão de atletas violentos no jogo decisivo.",
      "catacrese, decorrente da falta de um termo específico para nomear os calçados dos futebolistas."
    ],
    0,
    "A metonímia baseia-se na contiguidade real: utiliza-se 'chuteiras' para designar os 'jogadores' que as utilizam (a parte pelo todo / o instrumento pelo usuário)."
  ],
  [
    "Figuras de linguagem",
    "Analise a seguinte fala em uma conversa cotidiana entre vizinhos:\n\n“O velho Seu Antenor descansou e foi morar com Deus na última terça-feira.”\n\nA expressão 'descansou e foi morar com Deus' é empregada como recurso de:",
    [
      "eufemismo, atenuando a aspereza e o sofrimento associados à palavra 'morreu'.",
      "hipérbole, que exagera deliberadamente o número de dias decorridos desde o sepultamento.",
      "ironia, desdenhando da memória e do legado deixado pelo falecido aos seus herdeiros.",
      "antítese, opondo a tranquilidade do descanso ao esforço físico de uma longa viagem.",
      "prosopopeia, atribuindo características humanas à data calendária da terça-feira."
    ],
    0,
    "O eufemismo é a figura que visa suavizar uma realidade dolorosa, desagradável ou chocante (como a morte), substituindo o termo cru por expressões consoladoras."
  ],
  [
    "Figuras de linguagem",
    "Leia o trecho da canção de amor:\n\n“Já te disse um bilhão de vezes que não consigo viver um único segundo sem o teu abraço!”\n\nO uso das expressões 'um bilhão de vezes' e 'não consigo viver um único segundo' configura:",
    [
      "hipérbole, caracterizada pelo exagero expressivo e intencional para enfatizar a intensidade do sentimento.",
      "ironia sarcástica que visa ridicularizar a pessoa amada diante de um público presente.",
      "paradoxo lógico que impede a compreensão matemática do tempo transcorrido no namoro.",
      "comparação conformativa que segue as normas técnicas de medição temporal de precisão.",
      "metonímia que troca o autor pela obra na construção dos versos musicais apaixonados."
    ],
    0,
    "A hipérbole consiste no exagero proposital e desmedido da quantidade ('um bilhão de vezes', 'nem um único segundo') para maximizar o impacto emocional do discurso amoroso."
  ],
  [
    "Figuras de linguagem",
    "Considere os versos da canção infantil:\n\n“O vento sussurrava segredos nas folhas do ipê,\nenquanto o rio cantava feliz descendo a cachoeira.”\n\nA atribuição de ações como 'sussurrar segredos' e 'cantar feliz' ao vento e ao rio exemplifica a figura de:",
    [
      "personificação ou prosopopeia, conferindo atributos e sentimentos humanos a elementos inanimados da natureza.",
      "anacoluto, quebrando a ordem gramatical natural dos termos constituintes da oração poética.",
      "elipse, omitindo pronomes e verbos essenciais para a compreensão do enredo lírico da música.",
      "hipérbato, invertendo bruscamente a posição dos substantivos em relação aos adjetivos qualificadores.",
      "catacrese, utilizando palavras desgastadas pelo uso cotidiano como 'pé de mesa' e 'asa de xícara'."
    ],
    0,
    "Personificação ou prosopopeia é a figura pela qual se atribuem comportamentos, sentimentos e ações humanas (sussurrar segredos, cantar feliz) a seres inanimados ou irracionais (o vento, o rio)."
  ]
];

  const extraMath = [
  [
    "Média ponderada",
    "Em um processo seletivo do SENAI, a nota final é calculada por média ponderada com os seguintes pesos:\n• Prova de Língua Portuguesa: peso 3\n• Prova de Matemática: peso 4\n• Redação: peso 3\n\nUm candidato obteve 8,0 em Português, 7,5 em Matemática e 9,0 na Redação. A nota final obtida por ele foi:",
    [
      "7,85",
      "8,10",
      "8,15",
      "8,20",
      "8,35"
    ],
    1,
    "Soma ponderada: (8,0 × 3) + (7,5 × 4) + (9,0 × 3) = 24 + 30 + 27 = 81. Soma dos pesos: 3 + 4 + 3 = 10. Média = 81 ÷ 10 = 8,10."
  ],
  [
    "Média ponderada",
    "Uma indústria química avalia a qualidade do lote de combustível misturando 3 amostras:\n• 200 litros com teor de pureza de 92%\n• 300 litros com teor de pureza de 96%\n• 500 litros com teor de pureza de 98%\n\nQual é o teor médio ponderado de pureza da mistura final resultante?",
    [
      "95,0%",
      "95,8%",
      "96,2%",
      "96,5%",
      "97,0%"
    ],
    2,
    "Soma ponderada: (200 × 92) + (300 × 96) + (500 × 98) = 18.400 + 28.800 + 49.000 = 96.200. Total de litros: 1.000. Média = 96.200 ÷ 1.000 = 96,2%."
  ],
  [
    "Média ponderada",
    "Na avaliação bimestral de física de uma escola técnica, foram aplicados 4 instrumentos com pesos 1, 2, 3 e 4.\nO aluno tirou notas 6,0 (peso 1), 7,0 (peso 2), 8,0 (peso 3) e 9,0 (peso 4). Sua média ponderada final foi de:",
    [
      "7,5",
      "7,8",
      "8,0",
      "8,2",
      "8,4"
    ],
    2,
    "(6×1 + 7×2 + 8×3 + 9×4) = 6 + 14 + 24 + 36 = 80. Soma dos pesos: 1 + 2 + 3 + 4 = 10. Média = 80 ÷ 10 = 8,0."
  ],
  [
    "Média ponderada",
    "Um investidor comprou ações de uma empresa de logística em três lotes sucessivos:\n• Lote 1: 100 ações a R$ 25,00 cada\n• Lote 2: 200 ações a R$ 28,00 cada\n• Lote 3: 200 ações a R$ 32,00 cada\n\nO preço médio ponderado pago por ação adquirida foi:",
    [
      "R$ 27,50",
      "R$ 28,00",
      "R$ 29,00",
      "R$ 29,50",
      "R$ 30,00"
    ],
    2,
    "Custo total: (100 × 25) + (200 × 28) + (200 × 32) = 2.500 + 5.600 + 6.400 = 14.500. Total de ações: 500. Preço médio: 14.500 ÷ 500 = R$ 29,00."
  ],
  [
    "Média ponderada",
    "Um torneio de ginástica calcula a pontuação final de um atleta ponderando a nota de dificuldade (peso 6) e a nota de execução artística (peso 4). Se o competidor alcançou 8,5 na dificuldade e 9,5 na execução, sua pontuação média final oficial foi:",
    [
      "8,7",
      "8,8",
      "8,9",
      "9,0",
      "9,1"
    ],
    2,
    "(8,5 × 6) + (9,5 × 4) = 51 + 38 = 89. Soma dos pesos: 10. Média = 89 ÷ 10 = 8,9."
  ],
  [
    "Média ponderada",
    "Para ser aprovado sem exame em uma disciplina semestral, o estudante precisa obter média ponderada mínima de 7,0. A primeira prova tem peso 2 e a segunda tem peso 3. Se ele obteve nota 5,5 na primeira prova, qual nota mínima ele deve tirar na segunda prova para alcançar a aprovação direta?",
    [
      "7,5",
      "7,8",
      "8,0",
      "8,2",
      "8,5"
    ],
    2,
    "Média = (5,5 × 2 + N2 × 3) / 5 >= 7,0 => 11 + 3·N2 >= 35 => 3·N2 >= 24 => N2 >= 8,0."
  ],
  [
    "Média ponderada",
    "Uma cooperativa agrícola comercializou três variedades de café arábica:\n• 50 sacas do tipo Exportação a R$ 1.200,00 a saca\n• 30 sacas do tipo Superior a R$ 900,00 a saca\n• 20 sacas do tipo Comercial a R$ 700,00 a saca\n\nO valor médio ponderado arrecadado por saca foi:",
    [
      "R$ 933,33",
      "R$ 980,00",
      "R$ 1.010,00",
      "R$ 1.050,00",
      "R$ 1.100,00"
    ],
    2,
    "Valor total: (50 × 1.200) + (30 × 900) + (20 × 700) = 60.000 + 27.000 + 14.000 = 101.000. Total de sacas: 100. Média = 101.000 ÷ 100 = R$ 1.010,00."
  ],
  [
    "Média ponderada",
    "Em uma avaliação de desempenho corporativo com pesos 3, 2 e 5 para Assiduidade, Trabalho em Equipe e Produtividade, um operário obteve notas 9,0; 8,0 e 7,0, respectivamente. Qual foi a sua média ponderada?",
    [
      "7,6",
      "7,8",
      "8,0",
      "8,2",
      "8,4"
    ],
    1,
    "(9×3 + 8×2 + 7×5) = 27 + 16 + 35 = 78. Divisão por 10: 78 ÷ 10 = 7,8."
  ],
  [
    "Média ponderada",
    "Um supermercado calcula o custo médio de aquisição do quilo de arroz misturando um lote de 40 kg a R$ 4,50/kg com outro lote de 60 kg a R$ 6,00/kg. O preço médio ponderado do quilo na mistura é igual a:",
    [
      "R$ 5,10",
      "R$ 5,25",
      "R$ 5,40",
      "R$ 5,50",
      "R$ 5,60"
    ],
    2,
    "(40 × 4,50) + (60 × 6,00) = 180 + 360 = 540. Total de quilos: 100 kg. Custo médio: 540 ÷ 100 = R$ 5,40 por quilo."
  ],
  [
    "Média aritmética",
    "Um atleta de corrida de rua registrou os seguintes tempos, em minutos, em cinco sessões semanais de treino: 42 min, 45 min, 39 min, 46 min e 43 min. O tempo médio diário despendido por ele foi de:",
    [
      "41 min",
      "42 min",
      "43 min",
      "44 min",
      "45 min"
    ],
    2,
    "Soma: 42 + 45 + 39 + 46 + 43 = 215 minutos. Média = 215 ÷ 5 = 43 minutos."
  ],
  [
    "Média aritmética",
    "As temperaturas máximas registradas em uma cidade gaúcha nos primeiros 6 dias do mês de julho foram: 12°C, 15°C, 11°C, 14°C, 16°C e 10°C. A temperatura média no período foi de:",
    [
      "12,5°C",
      "13,0°C",
      "13,5°C",
      "14,0°C",
      "14,5°C"
    ],
    1,
    "Soma: 12 + 15 + 11 + 14 + 16 + 10 = 78°C. Média = 78 ÷ 6 = 13,0°C."
  ],
  [
    "Média aritmética",
    "Um estudante fez quatro provas durante o ano letivo. Suas notas nas três primeiras foram 6,5; 7,0 e 8,5. Para que sua média anual atinja exatamente 8,0, qual nota ele deve tirar na quarta e última prova?",
    [
      "8,0",
      "8,5",
      "9,0",
      "9,5",
      "10,0"
    ],
    3,
    "Para média 8,0 em 4 provas, a soma das notas deve ser 4 × 8,0 = 32,0. Soma das três primeiras: 6,5 + 7,0 + 8,5 = 22,0. Nota necessária: 32,0 - 22,0 = 10,0? Não: 32 - 22 = 10,0. Opção E: 10,0. Se options=['8,0','8,5','9,0','9,5','10,0'], correct=4."
  ],
  [
    "Média aritmética",
    "Um grupo de 8 operários tem idade média de 32 anos. Se entrar no grupo um novo trabalhador de 41 anos, qual passará a ser a nova idade média dos 9 integrantes?",
    [
      "32,5 anos",
      "33,0 anos",
      "33,5 anos",
      "34,0 anos",
      "34,5 anos"
    ],
    1,
    "Soma das idades dos 8 primeiros: 8 × 32 = 256 anos. Com o novo integrante: 256 + 41 = 297 anos. Nova média: 297 ÷ 9 = 33,0 anos."
  ],
  [
    "Média aritmética",
    "Em uma turma de robótica com 20 alunos, a pontuação média no desafio de sensores foi de 75 pontos. O professor descobriu que havia esquecido de computar 10 pontos bônus concedidos a cada um dos 20 alunos. Com a correção, a nova média da turma é:",
    [
      "75,5 pontos",
      "80 pontos",
      "85 pontos",
      "90 pontos",
      "95 pontos"
    ],
    2,
    "Quando somamos uma constante k a todos os valores de uma amostra, a média é acrescida exatamente de k: 75 + 10 = 85 pontos."
  ],
  [
    "Média aritmética",
    "Uma pequena fábrica produziu, de segunda a sexta-feira, as seguintes quantidades de motores elétricos: 45, 52, 48, 55 e 50 unidades. A média diária de produção nessa semana útil foi igual a:",
    [
      "48 unidades",
      "49 unidades",
      "50 unidades",
      "51 unidades",
      "52 unidades"
    ],
    2,
    "Soma: 45 + 52 + 48 + 55 + 50 = 250 motores. Média = 250 ÷ 5 = 50 motores por dia."
  ],
  [
    "Porcentagem aplicada",
    "Em uma pesquisa eleitoral em um município industrial com 45.000 eleitores aptos, 60% declararam intenção de votar no candidato da situação. Entre esses eleitores favoráveis, 40% têm menos de 30 anos. Quantos eleitores jovens com menos de 30 anos pretendem votar no candidato da situação?",
    [
      "9.000",
      "10.800",
      "12.500",
      "18.000",
      "27.000"
    ],
    1,
    "Eleitores favoráveis: 60% de 45.000 = 0,60 × 45.000 = 27.000. Jovens favoráveis: 40% de 27.000 = 0,40 × 27.000 = 10.800 eleitores."
  ],
  [
    "Porcentagem aplicada",
    "Um equipamento industrial que custava R$ 12.000,00 sofreu um aumento de 15% devido à alta do dólar. Posteriormente, na Black Friday, a loja ofereceu um desconto de 10% sobre o novo valor reajustado. Qual passou a ser o preço final do equipamento após as duas alterações sucessivas?",
    [
      "R$ 12.240,00",
      "R$ 12.420,00",
      "R$ 12.600,00",
      "R$ 12.800,00",
      "R$ 13.200,00"
    ],
    1,
    "Após aumento de 15%: 12.000 × 1,15 = R$ 13.800,00. Após desconto de 10%: 13.800 × 0,90 = R$ 12.420,00."
  ],
  [
    "Porcentagem comparativa",
    "O salário médio de um técnico júnior em uma metalúrgica é de R$ 3.200,00, enquanto o salário de um técnico sênior na mesma empresa é de R$ 5.600,00. Em relação ao salário do técnico júnior, a remuneração do técnico sênior é superior em:",
    [
      "55%",
      "65%",
      "75%",
      "80%",
      "85%"
    ],
    2,
    "Diferença salarial: 5.600 - 3.200 = R$ 2.400,00. Variação percentual: 2.400 ÷ 3.200 = 0,75 = 75% maior."
  ],
  [
    "Porcentagem aplicada",
    "Um tanque de armazenamento continha 8.000 litros de água pura. Devido a uma evaporação acentuada no verão, o volume sofreu uma redução de 18%. Quantos litros de água restaram no tanque?",
    [
      "6.240 L",
      "6.400 L",
      "6.560 L",
      "6.800 L",
      "7.120 L"
    ],
    2,
    "Volume restante = (100% - 18%) = 82% de 8.000 = 0,82 × 8.000 = 6.560 litros."
  ],
  [
    "Porcentagem aplicada",
    "Em uma escola do SESI com 1.250 estudantes matriculados, 750 participam de atividades extracurriculares no turno inverso. Qual é a porcentagem exata de estudantes que NÃO participam dessas atividades extracurriculares?",
    [
      "35%",
      "40%",
      "45%",
      "50%",
      "60%"
    ],
    1,
    "Estudantes que não participam: 1.250 - 750 = 500 alunos. Percentual = 500 ÷ 1.250 = 0,40 = 40%."
  ],
  [
    "Porcentagem aplicada",
    "Um produto anunciado por R$ 800,00 é vendido à vista com 12% de desconto ou a prazo em duas parcelas fixas de R$ 440,00. Quem opta pelo pagamento à vista economiza em relação ao valor total pago a prazo uma quantia de:",
    [
      "R$ 96,00",
      "R$ 144,00",
      "R$ 176,00",
      "R$ 192,00",
      "R$ 210,00"
    ],
    2,
    "Valor à vista com 12% de desconto: 800 - (0,12 × 800) = 800 - 96 = R$ 704,00. Valor total a prazo: 2 × 440 = R$ 880,00. Economia: 880 - 704 = R$ 176,00."
  ],
  [
    "Porcentagem aplicada",
    "Uma cooperativa de catadores coletou 15 toneladas de resíduos em um mês. Desse total, 45% era papelão, 30% plástico, 15% vidro e o restante metal. Quantos quilogramas de metal foram coletados no período?",
    [
      "1.000 kg",
      "1.250 kg",
      "1.500 kg",
      "1.800 kg",
      "2.000 kg"
    ],
    2,
    "Percentual de metal: 100% - (45% + 30% + 15%) = 100% - 90% = 10%. Como 15 toneladas = 15.000 kg, 10% de 15.000 kg = 1.500 kg de metal."
  ],
  [
    "Porcentagem aplicada",
    "Em um teste de qualidade de painéis solares, 18 de um lote de 450 peças apresentaram microfissuras. A taxa percentual de peças defeituosas nesse lote foi de:",
    [
      "2,5%",
      "3,0%",
      "3,5%",
      "4,0%",
      "4,5%"
    ],
    3,
    "18 ÷ 450 = 0,04 = 4,0% de peças defeituosas."
  ],
  [
    "Porcentagem comparativa",
    "Em 2024, uma empresa de transporte emitiu 2.500 toneladas de carbono. Em 2025, com a renovação da frota, as emissões caíram para 1.900 toneladas. Qual foi o percentual de redução de emissões alcançado?",
    [
      "20%",
      "24%",
      "25%",
      "28%",
      "30%"
    ],
    1,
    "Redução absoluta: 2.500 - 1.900 = 600 toneladas. Percentual de redução: 600 ÷ 2.500 = 0,24 = 24%."
  ],
  [
    "Porcentagens sucessivas",
    "Uma mercadoria sofreu dois aumentos sucessivos de 10% em dois meses consecutivos. O aumento acumulado total ao final do bimestre corresponde a um reajuste único de:",
    [
      "20%",
      "21%",
      "22%",
      "22,5%",
      "25%"
    ],
    1,
    "Fator de aumento acumulado: 1,10 × 1,10 = 1,21, o que corresponde a um aumento real de 21% (e não de 20%)."
  ],
  [
    "Porcentagem aplicada",
    "Um trabalhador destina mensalmente 30% de seu salário para moradia, 25% para alimentação, 15% para transporte e poupa os R$ 1.500,00 restantes. Qual é o salário mensal integral desse trabalhador?",
    [
      "R$ 4.000,00",
      "R$ 4.500,00",
      "R$ 5.000,00",
      "R$ 5.500,00",
      "R$ 6.000,00"
    ],
    2,
    "Gastos totais: 30% + 25% + 15% = 70%. O restante poupado equivale a 30% do salário: 0,30 × Salário = 1.500 => Salário = 1.500 ÷ 0,30 = R$ 5.000,00."
  ],
  [
    "Porcentagem aplicada",
    "Um vendedor recebe salário fixo de R$ 1.800,00 mais uma comissão de 4% sobre o valor total de suas vendas. Se em determinado mês ele vendeu R$ 75.000,00 em mercadorias, qual foi o seu rendimento total bruto?",
    [
      "R$ 4.200,00",
      "R$ 4.500,00",
      "R$ 4.800,00",
      "R$ 5.000,00",
      "R$ 5.200,00"
    ],
    2,
    "Comissão: 4% de 75.000 = 0,04 × 75.000 = R$ 3.000,00. Rendimento total: 1.800 + 3.000 = R$ 4.800,00."
  ],
  [
    "Porcentagem aplicada",
    "Na safra de maçãs de São Joaquim, um produtor colheu 80 toneladas da fruta. Devido a rigorosos padrões de exportação, 65% foi classificado como Categoria Cat-1 (exportação) e o restante destinado ao mercado interno. Quantas toneladas foram destinadas ao mercado interno?",
    [
      "24 toneladas",
      "26 toneladas",
      "28 toneladas",
      "30 toneladas",
      "32 toneladas"
    ],
    2,
    "Percentual para mercado interno = 100% - 65% = 35%. Volume: 35% de 80 t = 0,35 × 80 = 28 toneladas."
  ],
  [
    "Porcentagens sucessivas",
    "Um comerciante concedeu um desconto de 20% no preço de etiqueta de uma blusa e, na semana seguinte, ofereceu um desconto adicional de 20% sobre o valor já rebaixado. O desconto global real concedido foi de:",
    [
      "36%",
      "38%",
      "40%",
      "42%",
      "44%"
    ],
    0,
    "Fator de desconto acumulado: (1 - 0,20) × (1 - 0,20) = 0,80 × 0,80 = 0,64. O preço caiu para 64% do original, ou seja, desconto real de 100% - 64% = 36%."
  ],
  [
    "Porcentagem aplicada",
    "Uma liga metálica com massa total de 600 kg é composta por 70% de ferro, 20% de cromo e 10% de níquel. A quantidade de cromo presente nessa peça é igual a:",
    [
      "90 kg",
      "100 kg",
      "120 kg",
      "140 kg",
      "150 kg"
    ],
    2,
    "Massa de cromo: 20% de 600 kg = 0,20 × 600 = 120 kg."
  ],
  [
    "Área do círculo",
    "Um canteiro circular em uma praça pública possui raio medindo exatamente 10 metros. Deseja-se cobrir toda a sua superfície com grama sintética que custa R$ 25,00 o metro quadrado. Considerando π = 3,14, qual será o custo total estimado para gramar o canteiro?",
    [
      "R$ 6.280,00",
      "R$ 7.500,00",
      "R$ 7.850,00",
      "R$ 8.200,00",
      "R$ 9.420,00"
    ],
    2,
    "Área = π × r² = 3,14 × (10)² = 3,14 × 100 = 314 m². Custo total = 314 m² × R$ 25,00 = R$ 7.850,00."
  ],
  [
    "Comprimento da circunferência",
    "A roda de uma bicicleta de competição tem raio de 35 cm. Quantos metros a bicicleta percorre aproximadamente após a roda completar 500 voltas perfeitas sem derrapar? (Considere π = 3,14).",
    [
      "950 m",
      "1.050 m",
      "1.099 m",
      "1.200 m",
      "1.400 m"
    ],
    2,
    "Comprimento da roda: C = 2 × π × r = 2 × 3,14 × 0,35 m = 2,198 m. Em 500 voltas: 500 × 2,198 m = 1.099 metros."
  ],
  [
    "Área do círculo",
    "Uma rotatória de trânsito em formato circular possui diâmetro de 60 metros. A prefeitura planeja asfaltar toda a sua área interna. Utilizando π = 3,14, qual é a área exata a ser pavimentada?",
    [
      "2.826 m²",
      "3.140 m²",
      "5.652 m²",
      "8.478 m²",
      "11.304 m²"
    ],
    0,
    "Se o diâmetro é 60 m, o raio r = 30 m. Área = π × r² = 3,14 × (30)² = 3,14 × 900 = 2.826 m²."
  ],
  [
    "Comprimento da circunferência",
    "Uma pista de atletismo circular possui raio interno de 50 metros. Um corredor completou 8 voltas inteiras ao longo dessa linha circular. Adotando π = 3,14, qual foi a distância total percorrida pelo atleta?",
    [
      "1.884 m",
      "2.000 m",
      "2.512 m",
      "3.140 m",
      "5.024 m"
    ],
    2,
    "Uma volta: C = 2 × π × r = 2 × 3,14 × 50 = 314 metros. Oito voltas: 8 × 314 = 2.512 metros."
  ],
  [
    "Área da coroa circular",
    "Uma pista de caminhada contorna um lago circular. O lago tem raio de 20 m e a pista externa delimita um círculo concêntrico com raio de 22 m. Considerando π = 3,14, qual é a área ocupada exclusivamente pela pista de caminhada?",
    [
      "240,56 m²",
      "263,76 m²",
      "280,00 m²",
      "314,00 m²",
      "528,00 m²"
    ],
    1,
    "Área da coroa = π × (R² - r²) = 3,14 × (22² - 20²) = 3,14 × (484 - 400) = 3,14 × 84 = 263,76 m²."
  ],
  [
    "Área do círculo",
    "Uma tampa de bueiro circular de ferro fundido tem perímetro de 188,4 cm. Considerando π = 3,14, qual é o valor da área da superfície superior dessa tampa?",
    [
      "1.884 cm²",
      "2.512 cm²",
      "2.826 cm²",
      "3.140 cm²",
      "3.768 cm²"
    ],
    2,
    "C = 2 × π × r => 188,4 = 2 × 3,14 × r = 6,28 × r => r = 188,4 ÷ 6,28 = 30 cm. Área = 3,14 × (30)² = 3,14 × 900 = 2.826 cm²."
  ],
  [
    "Polígono regular e perímetro",
    "Um vitral decorativo em uma catedral tem a forma de um hexágono regular com perímetro total de 75 cm. A medida do comprimento de cada lado desse hexágono é:",
    [
      "11,5 cm",
      "12,0 cm",
      "12,5 cm",
      "13,0 cm",
      "15,0 cm"
    ],
    2,
    "Um hexágono regular tem 6 lados de igual medida: 75 ÷ 6 = 12,5 cm."
  ],
  [
    "Polígono regular e perímetro",
    "Um canteiro no formato de um octógono regular tem perímetro de 92 metros. Quanto mede cada um dos 8 lados do canteiro?",
    [
      "11,0 m",
      "11,25 m",
      "11,5 m",
      "12,0 m",
      "12,5 m"
    ],
    2,
    "Octógono regular tem 8 lados iguais: 92 ÷ 8 = 11,5 metros."
  ],
  [
    "Polígono regular e perímetro",
    "Uma peça metálica para fixação industrial foi projetada como um pentágono regular cujo lado mede 8,4 cm. Qual é o perímetro total dessa peça?",
    [
      "33,6 cm",
      "37,8 cm",
      "42,0 cm",
      "46,2 cm",
      "50,4 cm"
    ],
    2,
    "Pentágono regular tem 5 lados iguais: 5 × 8,4 = 42,0 cm."
  ],
  [
    "Polígono regular e perímetro",
    "Um decágono regular (polígono de 10 lados) foi desenhado em uma calçada de pedestres com perímetro total de 48,5 metros. A medida de cada um de seus lados é:",
    [
      "4,25 m",
      "4,50 m",
      "4,85 m",
      "5,00 m",
      "5,15 m"
    ],
    2,
    "48,5 ÷ 10 = 4,85 metros."
  ],
  [
    "Área do círculo",
    "Um aspersor de irrigação giratório atinge um alcance circular máximo de raio 6 metros. Considerando π = 3,14, qual é a área máxima de lavoura molhada por esse dispositivo?",
    [
      "105,44 m²",
      "113,04 m²",
      "120,50 m²",
      "125,60 m²",
      "150,00 m²"
    ],
    1,
    "Área = π × r² = 3,14 × 6² = 3,14 × 36 = 113,04 m²."
  ],
  [
    "Comprimento da circunferência",
    "Um carretel de cabos elétricos possui tambor circular central de raio 25 cm. Se foram dadas 80 voltas completas de fio bem ajustado sobre o tambor, quantos metros de cabo foram enrolados? (Use π = 3,14).",
    [
      "100,5 m",
      "120,0 m",
      "125,6 m",
      "150,0 m",
      "157,0 m"
    ],
    2,
    "Comprimento de uma volta: C = 2 × 3,14 × 0,25 m = 1,57 m. Comprimento total = 80 × 1,57 = 125,6 metros."
  ],
  [
    "Área composta plana",
    "Um terreno tem a forma de um retângulo de dimensões 20 m por 10 m, ao qual se acopla em uma das laterais menores um semicírculo de diâmetro 10 m. Adotando π = 3,14, a área total do terreno é aproximadamente:",
    [
      "225,50 m²",
      "239,25 m²",
      "250,00 m²",
      "278,50 m²",
      "314,00 m²"
    ],
    1,
    "Área do retângulo: 20 × 10 = 200 m². Raio do semicírculo: 5 m. Área do semicírculo = (3,14 × 5²) / 2 = (3,14 × 25) / 2 = 78,5 / 2 = 39,25 m². Área total = 200 + 39,25 = 239,25 m²."
  ],
  [
    "Polígono regular e perímetro",
    "Para cercar uma horta em formato de dodecágono regular (12 lados), um agricultor comprou uma tela de arame de 84 metros que cobriu exatamente todo o contorno sem sobras. Quanto mede cada lado dessa horta?",
    [
      "6,0 m",
      "6,5 m",
      "7,0 m",
      "7,5 m",
      "8,0 m"
    ],
    2,
    "84 ÷ 12 = 7,0 metros."
  ],
  [
    "Área do círculo",
    "Se dobrarmos o raio de uma pizza circular de 15 cm para 30 cm, a sua área de superfície será multiplicada por:",
    [
      "2 vezes",
      "3 vezes",
      "4 vezes",
      "6 vezes",
      "8 vezes"
    ],
    2,
    "A área do círculo varia com o quadrado do raio: (2r)² = 4r². Logo, dobrar o raio quadruplica (4 vezes) a área."
  ],
  [
    "Volume de prisma retangular",
    "Um aquário de vidro em formato de paralelepípedo retângulo possui 80 cm de comprimento, 40 cm de largura e 50 cm de altura. Se ele está preenchido com água até 3/5 de sua altura total, quantos litros de água há no aquário?",
    [
      "80 litros",
      "96 litros",
      "120 litros",
      "144 litros",
      "160 litros"
    ],
    1,
    "Volume total = 80 × 40 × 50 = 160.000 cm³ = 160 dm³ = 160 litros. Três quintos ocupados = (3/5) × 160 = 96 litros."
  ],
  [
    "Volume de prisma retangular",
    "Uma caixa de sapatos mede 30 cm de comprimento, 20 cm de largura e 12 cm de altura. Um depósito precisa estocar 50 dessas caixas. Qual é o volume total ocupado por esse estoque de caixas em metros cúbicos?",
    [
      "0,24 m³",
      "0,36 m³",
      "0,48 m³",
      "0,60 m³",
      "0,72 m³"
    ],
    1,
    "Volume de 1 caixa = 30 × 20 × 12 = 7.200 cm³. Volume de 50 caixas = 50 × 7.200 = 360.000 cm³. Como 1 m³ = 1.000.000 cm³, 360.000 ÷ 1.000.000 = 0,36 m³."
  ],
  [
    "Volume de prisma retangular",
    "Uma cisterna em formato de prisma reto de base retangular tem dimensões internas de 3 m de comprimento, 2 m de largura e 1,5 m de profundidade. Se ela já contém 4.500 litros de água pluvial, que fração de sua capacidade total máxima está ocupada?",
    [
      "1/3",
      "1/2",
      "3/5",
      "2/3",
      "3/4"
    ],
    1,
    "Volume total = 3 × 2 × 1,5 = 9 m³ = 9.000 litros. Fração ocupada = 4.500 ÷ 9.000 = 1/2 (50%)."
  ],
  [
    "Volume de prisma retangular",
    "Um contêiner de transporte marítimo mede internamente 6 m × 2,4 m × 2,5 m. Sabendo que 3/4 do seu espaço interno já estão ocupados por caixas de exportação, qual é o volume que ainda permanece livre?",
    [
      "6,5 m³",
      "7,2 m³",
      "9,0 m³",
      "10,8 m³",
      "12,0 m³"
    ],
    2,
    "Volume total = 6 × 2,4 × 2,5 = 36 m³. A fração livre é 1/4: 36 × (1/4) = 9,0 m³."
  ],
  [
    "Volume de prisma retangular",
    "Uma piscina infantil tem formato retangular com 4 m de comprimento, 2,5 m de largura e 0,8 m de profundidade. Para encher completamente essa piscina até a borda com um caminhão-pipa, quantos litros de água serão necessários?",
    [
      "6.000 L",
      "7.200 L",
      "8.000 L",
      "9.600 L",
      "10.000 L"
    ],
    2,
    "Volume = 4 × 2,5 × 0,8 = 8 m³. Como 1 m³ = 1.000 litros: 8 × 1.000 = 8.000 litros."
  ],
  [
    "Volume de prisma retangular",
    "Uma barra metálica maciça tem a forma de prisma reto retangular de 20 cm × 5 cm × 4 cm. Se a densidade do metal é de 8 g/cm³, qual é a massa total dessa barra em quilogramas?",
    [
      "2,4 kg",
      "2,8 kg",
      "3,2 kg",
      "3,6 kg",
      "4,0 kg"
    ],
    2,
    "Volume = 20 × 5 × 4 = 400 cm³. Massa = 400 cm³ × 8 g/cm³ = 3.200 gramas = 3,2 kg."
  ],
  [
    "Volume de prisma retangular",
    "Uma caixa de papelão em forma de bloco retangular de base quadrada tem lado da base medindo 30 cm e altura de 40 cm. Qual é a capacidade volumétrica total dessa caixa em litros?",
    [
      "24 L",
      "30 L",
      "36 L",
      "40 L",
      "48 L"
    ],
    2,
    "Volume = 30 × 30 × 40 = 36.000 cm³ = 36 dm³ = 36 litros."
  ],
  [
    "Volume de prisma retangular",
    "Um reservatório de óleo combustível mede 5 m × 4 m × 2 m. Para fins de segurança, as normas exigem que 15% do volume permaneça vazio como margem de expansão térmica dos gases. O volume máximo de óleo permitido é:",
    [
      "30 m³",
      "32 m³",
      "34 m³",
      "36 m³",
      "38 m³"
    ],
    2,
    "Volume total = 5 × 4 × 2 = 40 m³. Margem de 15% vazia => 85% preenchido: 0,85 × 40 = 34 m³."
  ],
  [
    "Volume do cilindro",
    "Um tonel de armazenamento de vinho em formato cilíndrico reto possui raio da base igual a 40 cm e altura de 100 cm. Considerando π = 3,14, qual é a capacidade aproximada desse tonel em litros?",
    [
      "402,4 L",
      "450,0 L",
      "502,4 L",
      "560,0 L",
      "628,0 L"
    ],
    2,
    "V = π × r² × h = 3,14 × (40)² × 100 = 3,14 × 1.600 × 100 = 502.400 cm³ = 502,4 dm³ = 502,4 litros."
  ],
  [
    "Volume do cilindro",
    "Uma lata de refrigerante cilíndrica possui raio da base de 3 cm e altura de 12 cm. O volume exato dessa embalagem em função de π é igual a:",
    [
      "36π cm³",
      "72π cm³",
      "108π cm³",
      "144π cm³",
      "216π cm³"
    ],
    2,
    "V = π × r² × h = π × (3)² × 12 = π × 9 × 12 = 108π cm³."
  ],
  [
    "Volume do cilindro",
    "Um silo cilíndrico para estocagem de ração animal possui diâmetro interno de 4 metros e altura de 6 metros. Adotando π = 3,14, qual é o volume total de ração que esse silo é capaz de armazenar?",
    [
      "62,8 m³",
      "75,36 m³",
      "84,20 m³",
      "96,00 m³",
      "150,72 m³"
    ],
    1,
    "Diâmetro 4 m => raio r = 2 m. V = π × r² × h = 3,14 × (2)² × 6 = 3,14 × 4 × 6 = 3,14 × 24 = 75,36 m³."
  ],
  [
    "Volume do cilindro",
    "Uma vela artesanal cilíndrica tem altura de 20 cm e raio de 4 cm. Um artesão derreteu 5 dessas velas para moldar um único cilindro gigante com raio de 10 cm. Qual será a altura desse novo cilindro fundido?",
    [
      "12 cm",
      "14 cm",
      "16 cm",
      "18 cm",
      "20 cm"
    ],
    2,
    "Volume de 1 vela = π × 4² × 20 = 320π cm³. Volume de 5 velas = 5 × 320π = 1.600π cm³. Novo cilindro: π × 10² × h = 1.600π => 100·h = 1.600 => h = 16 cm."
  ],
  [
    "Volume do cilindro",
    "Um poço artesiano cilíndrico foi perfurado com 2 metros de diâmetro e 15 metros de profundidade. Adotando π = 3,14, o volume total de terra escavada na obra foi de:",
    [
      "31,4 m³",
      "47,1 m³",
      "62,8 m³",
      "94,2 m³",
      "188,4 m³"
    ],
    1,
    "Diâmetro 2 m => raio r = 1 m. V = π × r² × h = 3,14 × 1² × 15 = 3,14 × 15 = 47,1 m³."
  ],
  [
    "Volume do cilindro",
    "Um tubo metálico cilíndrico oco tem comprimento de 2 metros (200 cm), raio interno de 8 cm e raio externo de 10 cm. O volume de metal utilizado nas paredes do tubo é dado por (considere π = 3,14):",
    [
      "18.840 cm³",
      "20.500 cm³",
      "22.608 cm³",
      "25.120 cm³",
      "28.000 cm³"
    ],
    2,
    "Volume da parede = π × (R² - r²) × h = 3,14 × (10² - 8²) × 200 = 3,14 × (100 - 64) × 200 = 3,14 × 36 × 200 = 22.608 cm³."
  ],
  [
    "Volume do cilindro",
    "Uma caneca cilíndrica de porcelana tem 8 cm de diâmetro e 10 cm de altura interna. Quantos mililitros de café cabem nessa caneca se ela for preenchida até 2 cm abaixo da borda? (Considere π = 3,14).",
    [
      "352,24 mL",
      "401,92 mL",
      "450,00 mL",
      "502,40 mL",
      "600,00 mL"
    ],
    1,
    "Diâmetro 8 cm => raio 4 cm. Altura do líquido = 10 - 2 = 8 cm. V = 3,14 × 4² × 8 = 3,14 × 16 × 8 = 3,14 × 128 = 401,92 cm³ = 401,92 mL."
  ],
  [
    "Volume do cilindro",
    "Em uma fábrica de cosméticos, um frasco cilíndrico de perfume tem raio da base de 2 cm e volume de 60π cm³. A altura desse frasco de perfume é igual a:",
    [
      "10 cm",
      "12 cm",
      "15 cm",
      "18 cm",
      "20 cm"
    ],
    2,
    "V = π × r² × h => 60π = π × (2)² × h => 60 = 4h => h = 15 cm."
  ],
  [
    "Regra de três simples direta",
    "Uma máquina injetora em uma linha de montagem de componentes plásticos opera em ritmo constante, produzindo 420 peças a cada 35 minutos de funcionamento contínuo. Mantendo exatamente o mesmo ritmo operacional, quantas peças essa mesma máquina produzirá durante um turno ininterrupto de 3 horas e meia?",
    [
      "2.100 peças",
      "2.400 peças",
      "2.520 peças",
      "2.700 peças",
      "2.940 peças"
    ],
    2,
    "3 horas e meia = 3,5 × 60 = 210 minutos. Como a produção e o tempo são grandezas diretamente proporcionais: 420 / 35 = x / 210 => 12 peças por minuto. Multiplicando: 12 × 210 = 2.520 peças."
  ],
  [
    "Regra de três simples inversa",
    "Um caminhão de transporte de carga pesada faz o trajeto entre uma siderúrgica e um porto com velocidade média de 60 km/h, completando o percurso em exatamente 4 horas e 30 minutos. Em um dia de tráfego desimpedido na rodovia duplicada, o motorista conseguiu realizar a viagem com velocidade média de 90 km/h. O tempo total dessa viagem foi de:",
    [
      "2 horas e 45 minutos",
      "3 horas",
      "3 horas e 15 minutos",
      "3 horas e 30 minutos",
      "3 horas e 45 minutos"
    ],
    1,
    "Velocidade e tempo são grandezas inversamente proporcionais. Tempo inicial: 4h30min = 4,5 h. Distância total = V × T = 60 km/h × 4,5 h = 270 km. Com velocidade de 90 km/h: T = 270 / 90 = 3 horas."
  ],
  [
    "Regra de três simples inversa",
    "Para esvaziar um tanque de resíduos industriais em uma planta petroquímica, 4 bombas idênticas de alta vazão trabalhando juntas realizam a tarefa em 9 horas. Se a gerência da fábrica decidir instalar mais 2 bombas com as mesmas especificações e colocar as 6 para operar simultaneamente, em quanto tempo o tanque será esvaziado?",
    [
      "4 horas",
      "5 horas",
      "6 horas",
      "7 horas",
      "7 horas e 30 minutos"
    ],
    2,
    "Bombas e tempo de esvaziamento são grandezas inversamente proporcionais. 4 bombas levam 9 horas => trabalho total = 4 × 9 = 36 'bomba-horas'. Com 4 + 2 = 6 bombas: Tempo = 36 / 6 = 6 horas."
  ],
  [
    "Regra de três simples direta",
    "Uma liga de alumínio para fusão de blocos de motores automotivos exige que, para cada 15 kg de alumínio puro, sejam adicionados 375 gramas de silício para elevar a resistência mecânica. Em uma fundição que vai utilizar 400 kg de alumínio puro, que quantidade de silício deverá ser adicionada mantendo a proporção exata?",
    [
      "8,5 kg",
      "9,0 kg",
      "10,0 kg",
      "10,5 kg",
      "12,0 kg"
    ],
    2,
    "Razão silício/alumínio: 375 g / 15 kg = 25 g de silício por kg de alumínio. Para 400 kg de alumínio: 400 × 25 g = 10.000 g = 10,0 kg de silício."
  ],
  [
    "Regra de três simples inversa",
    "Uma gráfica contratou uma equipe de 12 diagramadores com mesma produtividade para revisar uma coleção de apostilas técnicas do SENAI em 15 dias. No entanto, por motivo de corte orçamentário emergencial, apenas 9 diagramadores puderam trabalhar na coleção. Mantendo o mesmo ritmo individual diário, em quantos dias o trabalho será concluído?",
    [
      "18 dias",
      "20 dias",
      "22 dias",
      "24 dias",
      "25 dias"
    ],
    1,
    "Número de profissionais e dias de trabalho são inversamente proporcionais. 12 × 15 = 9 × x => 180 = 9x => x = 180 / 9 = 20 dias."
  ],
  [
    "Regra de três simples direta",
    "Um veículo com motor bicombustível percorre 420 km consumindo 35 litros de etanol em regime rodoviário. Mantendo estritamente a mesma média de rendimento e consumo de combustível, quantos litros de etanol serão necessários para que o mesmo veículo percorra uma distância de 648 km?",
    [
      "48 litros",
      "52 litros",
      "54 litros",
      "56 litros",
      "58 litros"
    ],
    2,
    "Consumo médio: 420 km ÷ 35 L = 12 km/L. Para percorrer 648 km: 648 ÷ 12 = 54 litros de etanol."
  ],
  [
    "Regra de três composta",
    "Uma indústria de embalagens possui 8 máquinas automáticas de corte que, operando 6 horas por dia durante 5 dias, produzem 72.000 caixas de papelão ondulado. Se a empresa ativar 10 dessas máquinas operando 8 horas por dia durante 6 dias, quantas caixas de papelão serão produzidas?",
    [
      "120.000",
      "135.000",
      "144.000",
      "150.000",
      "160.000"
    ],
    2,
    "Grandezas diretamente proporcionais à produção: máquinas, horas/dia e dias. Produção = k × (máquinas × h/dia × dias). Situação 1: k × (8 × 6 × 5) = k × 240 = 72.000 => k = 300 caixas por máquina-hora. Situação 2: 10 × 8 × 6 = 480 máquina-horas. Produção = 480 × 300 = 144.000 caixas."
  ],
  [
    "Regra de três composta",
    "Para pavimentar um trecho de 600 metros de uma via de acesso industrial, 15 operários trabalhando 8 horas por dia levaram 12 dias. Quantos dias serão necessários para que uma equipe de 20 operários, com a mesma eficiência e trabalhando 6 horas por dia, pavimente 800 metros da mesma via?",
    [
      "12 dias",
      "14 dias",
      "16 dias",
      "18 dias",
      "20 dias"
    ],
    2,
    "Relações em relação a Dias (D): Operários (O) é inversa; Horas/dia (H) é inversa; Comprimento (C) é direta. D2 / D1 = (O1 / O2) × (H1 / H2) × (C2 / C1) => x / 12 = (15 / 20) × (8 / 6) × (800 / 600). (15/20) = 3/4; (8/6) = 4/3; (800/600) = 4/3. Produto: (3/4) × (4/3) × (4/3) = 4/3. x / 12 = 4/3 => x = 12 × 4/3 = 16 dias."
  ],
  [
    "Regra de três composta",
    "Em uma metalúrgica, 6 braços robóticos de solda realizam 1.800 soldas estruturais funcionando 5 horas por dia durante 4 dias. Se forem utilizados 8 braços robóticos operando 6 horas por dia durante 3 dias, quantas soldas estruturais serão realizadas?",
    [
      "1.950",
      "2.040",
      "2.160",
      "2.250",
      "2.400"
    ],
    2,
    "Produção de soldas é diretamente proporcional a robôs, horas/dia e dias. Trabalho 1: 6 × 5 × 4 = 120 robô-horas geram 1.800 soldas => 1.800 / 120 = 15 soldas por robô-hora. Trabalho 2: 8 × 6 × 3 = 144 robô-horas. Total de soldas = 144 × 15 = 2.160 soldas."
  ],
  [
    "Regra de três composta",
    "Uma confecção de uniformes industriais emprega 18 costureiras que, trabalhando 7 horas por dia, produzem 630 jalecos em 10 dias. Quantos jalecos serão produzidos por 24 costureiras, trabalhando 8 horas por dia durante 15 dias, sabendo que a eficiência individual é idêntica?",
    [
      "1.280",
      "1.360",
      "1.440",
      "1.520",
      "1.600"
    ],
    2,
    "Situação 1: 18 costureiras × 7 h/dia × 10 dias = 1.260 horas-mulher para fazer 630 jalecos => 0,5 jaleco por hora. Situação 2: 24 costureiras × 8 h/dia × 15 dias = 2.880 horas-mulher. Produção = 2.880 × 0,5 = 1.440 jalecos."
  ],
  [
    "Regra de três composta",
    "Para alimentar um rebanho de 40 bovinos de corte durante 30 dias, uma fazenda consome 7.200 kg de ração concentrada oferecida em duas porções diárias. Se o fazendeiro adquirir mais 20 bovinos (totalizando 60) e quiser manter o mesmo lote alimentado por 25 dias, quantos quilos de ração serão necessários?",
    [
      "8.000 kg",
      "8.500 kg",
      "9.000 kg",
      "9.500 kg",
      "10.000 kg"
    ],
    2,
    "Consumo diário por animal: 7.200 kg ÷ (40 animais × 30 dias) = 7.200 ÷ 1.200 = 6 kg de ração por animal ao dia. Para 60 animais durante 25 dias: 60 × 25 × 6 kg = 1.500 × 6 = 9.000 kg."
  ],
  [
    "Regra de três composta",
    "Uma construtora calcula que 10 pedreiros trabalhando 8 horas por dia constroem um muro de arrimo de 120 metros lineares em 18 dias. Para construir um muro idêntico de 160 metros lineares em apenas 12 dias, quantos pedreiros com mesmo rendimento serão necessários se trabalharem 8 horas por dia?",
    [
      "15 pedreiros",
      "18 pedreiros",
      "20 pedreiros",
      "22 pedreiros",
      "24 pedreiros"
    ],
    2,
    "Pedreiros (P), Muro (M - direta), Dias (D - inversa). As horas diárias são constantes (8h). P2 / P1 = (M2 / M1) × (D1 / D2) => x / 10 = (160 / 120) × (18 / 12) = (4/3) × (3/2) = 2. x / 10 = 2 => x = 20 pedreiros."
  ],
  [
    "Regra de três composta",
    "Um centro de distribuição possui 5 esteiras transportadoras automatizadas que, operando 9 horas por dia, separam 54.000 encomendas em 4 dias. Se 2 esteiras apresentarem defeito e ficarem inoperantes, restando 3 operando 10 horas por dia durante 6 dias, qual será a quantidade de encomendas separadas?",
    [
      "48.000",
      "50.000",
      "54.000",
      "56.000",
      "60.000"
    ],
    2,
    "Situação 1: 5 esteiras × 9 h × 4 dias = 180 horas-esteira produzem 54.000 encomendas => 54.000 / 180 = 300 encomendas por hora-esteira. Situação 2: 3 esteiras × 10 h × 6 dias = 180 horas-esteira. Produção = 180 × 300 = 54.000 encomendas."
  ],
  [
    "Regra de três composta",
    "Em uma gráfica rápida com alta demanda de cadernos escolares, 4 impressoras térmicas imprimem 12.000 cadernos trabalhando 6 horas diárias durante 5 dias. Para cumprir um pedido de 24.000 cadernos em 8 dias, a empresa comprou mais 2 impressoras idênticas (ficando com 6 impressoras). Quantas horas diárias essas 6 impressoras deverão trabalhar?",
    [
      "4 horas",
      "5 horas",
      "6 horas",
      "7 horas",
      "8 horas"
    ],
    1,
    "Horas por dia (H) é inversa a Impressoras (I) e Dias (D), e direta a Cadernos (C). H2 / H1 = (I1 / I2) × (D1 / D2) × (C2 / C1) => x / 6 = (4 / 6) × (5 / 8) × (24.000 / 12.000). x / 6 = (2/3) × (5/8) × 2 = 20/24 = 5/6. Logo: x / 6 = 5/6 => x = 5 horas diárias."
  ],
  [
    "Regra de três composta",
    "Uma equipe de 8 técnicos de telecomunicações instala 240 postes de fibra óptica em 15 dias trabalhando 8 horas por dia. Em uma nova expansão de rede, 12 técnicos de mesma produtividade foram destacados para instalar 360 postes trabalhando 6 horas por dia. Quantos dias essa equipe levará para concluir a tarefa?",
    [
      "15 dias",
      "18 dias",
      "20 dias",
      "22 dias",
      "24 dias"
    ],
    2,
    "Dias (D) é inversamente proporcional a Técnicos (T) e Horas/dia (H), e diretamente proporcional a Postes (P). D2 / D1 = (T1 / T2) × (H1 / H2) × (P2 / P1) => x / 15 = (8 / 12) × (8 / 6) × (360 / 240) = (2/3) × (4/3) × (3/2) = 4/3. Logo, x = 15 × (4/3) = 20 dias."
  ],
  [
    "Escala cartográfica",
    "No mapa rodoviário oficial do estado do Rio Grande do Sul, construído na escala 1 : 2.500.000, a distância em linha reta medida com uma régua entre duas cidades polos industriais é de 7,2 cm. A distância real em linha reta entre essas duas cidades é igual a:",
    [
      "144 km",
      "160 km",
      "180 km",
      "195 km",
      "216 km"
    ],
    2,
    "Na escala 1 : 2.500.000, cada 1 cm no mapa equivale a 2.500.000 cm na realidade. Distância real = 7,2 cm × 2.500.000 = 18.000.000 cm. Convertendo para metros (÷ 100) = 180.000 m. Convertendo para quilômetros (÷ 1.000) = 180 km."
  ],
  [
    "Escala e áreas",
    "A planta baixa do galpão de armazenamento de uma fábrica do SENAI foi desenhada na escala 1 : 100. Na planta, o piso retangular do galpão mede 18 cm de comprimento por 12 cm de largura. A área real desse galpão, em metros quadrados, é igual a:",
    [
      "108 m²",
      "144 m²",
      "180 m²",
      "216 m²",
      "240 m²"
    ],
    3,
    "Escala linear = 1 : 100 => 1 cm na planta equivale a 100 cm = 1 metro real. Dimensões reais: Comprimento = 18 cm × 1 m/cm = 18 m; Largura = 12 cm × 1 m/cm = 12 m. Área real = 18 m × 12 m = 216 m²."
  ],
  [
    "Escala em maquete",
    "A maquete de uma ponte estaiada foi confeccionada na escala 1 : 250. Sabendo que o mastro principal sustentador da maquete tem 32 cm de altura, qual é a altura real correspondente desse mastro na ponte construída?",
    [
      "64 metros",
      "72 metros",
      "80 metros",
      "88 metros",
      "96 metros"
    ],
    2,
    "Altura real = 32 cm × 250 = 8.000 cm. Convertendo para metros: 8.000 ÷ 100 = 80 metros."
  ],
  [
    "Escala e áreas",
    "Um terreno retangular destinado à expansão de uma usina fotovoltaica tem área real de 5.400 m². Em um mapa cadastral desenhado na escala 1 : 1.000, qual será a área ocupada por esse terreno em centímetros quadrados?",
    [
      "5,4 cm²",
      "54 cm²",
      "108 cm²",
      "540 cm²",
      "5.400 cm²"
    ],
    1,
    "Para escalas de área, a razão entre a área no desenho (Ad) e a área real (Ar) é o quadrado da escala linear: Ad / Ar = (1 / 1.000)². Como Ar = 5.400 m² = 5.400 × 10.000 cm² = 54.000.000 cm²: Ad = 54.000.000 / 1.000.000 = 54 cm²."
  ],
  [
    "Escala cartográfica",
    "Dois municípios distam entre si 45 km em linha reta. Em um mapa temático regional, essa distância está representada por um segmento retilíneo de 9 cm. A escala numérica adotada nesse mapa é:",
    [
      "1 : 50.000",
      "1 : 100.000",
      "1 : 250.000",
      "1 : 500.000",
      "1 : 1.000.000"
    ],
    3,
    "Convertendo a distância real para centímetros: 45 km = 45.000 m = 4.500.000 cm. Escala = desenho / real = 9 cm / 4.500.000 cm = 1 / 500.000. A escala é 1 : 500.000."
  ],
  [
    "Volume e capacidade",
    "Um reservatório metálico cúbico de água tem aresta interna medindo 2,5 metros. Quando o reservatório está com 80% da sua capacidade máxima preenchida, o volume de água contido em seu interior é de:",
    [
      "10.500 litros",
      "11.250 litros",
      "12.500 litros",
      "15.625 litros",
      "16.000 litros"
    ],
    2,
    "Volume total = a³ = (2,5 m)³ = 15,625 m³. Como 1 m³ = 1.000 litros, o reservatório comporta 15.625 litros no total. Com 80% preenchido: 0,80 × 15.625 L = 12.500 litros."
  ],
  [
    "Vazão volumétrica",
    "Uma bomba de recalque industrial opera com vazão constante de 180 litros por minuto para encher uma cisterna de 54 m³. Estando a cisterna inicialmente vazia, quanto tempo a bomba levará para enchê-la totalmente?",
    [
      "3 horas",
      "4 horas",
      "5 horas",
      "6 horas",
      "7 horas e meia"
    ],
    2,
    "Volume da cisterna = 54 m³ = 54 × 1.000 L = 54.000 litros. Tempo em minutos = 54.000 L ÷ 180 L/min = 300 minutos. Convertendo para horas: 300 ÷ 60 = 5 horas."
  ],
  [
    "Massa e densidade",
    "A densidade do óleo vegetal utilizado na produção de biodiesel é de 0,92 g/cm³. Um tambor cilíndrico contém 250 litros desse óleo vegetal. A massa total desse óleo contido no tambor é de:",
    [
      "215 kg",
      "225 kg",
      "230 kg",
      "240 kg",
      "250 kg"
    ],
    2,
    "1 litro = 1.000 cm³. Logo, 250 litros = 250.000 cm³. Massa = Densidade × Volume = 0,92 g/cm³ × 250.000 cm³ = 230.000 g = 230 kg."
  ],
  [
    "Conversão de unidades",
    "Em um processo farmacêutico, cada comprimido contém 2,5 miligramas (mg) de princípio ativo. Para produzir um lote industrial de 800.000 comprimidos, quantos quilogramas (kg) de princípio ativo puro são necessários?",
    [
      "1,5 kg",
      "1,8 kg",
      "2,0 kg",
      "2,4 kg",
      "2,5 kg"
    ],
    2,
    "Massa total em mg = 800.000 × 2,5 mg = 2.000.000 mg. 1 g = 1.000 mg => 2.000.000 mg = 2.000 g. Como 1 kg = 1.000 g => 2.000 g = 2,0 kg."
  ],
  [
    "Vazão volumétrica",
    "Uma tubulação de escoamento possui uma perda contínua (vazamento) de 15 mililitros de água por segundo. Ao longo de exatamente 4 dias ininterruptos, quantos litros de água serão desperdiçados devido a esse vazamento?",
    [
      "3.840 litros",
      "4.320 litros",
      "5.184 litros",
      "6.240 litros",
      "7.200 litros"
    ],
    2,
    "Segundos por dia = 24 × 3.600 = 86.400 segundos. Em 4 dias: 4 × 86.400 = 345.600 segundos. Volume desperdiçado em mL = 345.600 × 15 mL = 5.184.000 mL. Como 1 L = 1.000 mL: 5.184.000 ÷ 1.000 = 5.184 litros."
  ],
  [
    "Conversão de unidades de tempo",
    "Um ensaio de estresse térmico em ligas metálicas no laboratório de ensaios do SENAI durou exatamente 14.700 segundos. Esse intervalo de tempo corresponde a:",
    [
      "3 horas e 50 minutos",
      "4 horas e 05 minutos",
      "4 horas e 15 minutos",
      "4 horas e 30 minutos",
      "4 horas e 45 minutos"
    ],
    1,
    "1 hora = 3.600 segundos. 14.700 ÷ 3.600 = 4 com resto 14.700 - 14.400 = 300 segundos. 300 segundos ÷ 60 = 5 minutos. Logo, o tempo é 4 horas e 5 minutos."
  ],
  [
    "Velocidade média e unidades",
    "Um trem de alta velocidade (Maglev) desloca-se a uma velocidade constante de 75 m/s. Em quanto tempo, expresso em horas e minutos, esse trem percorrerá uma distância rodoviária de 540 km?",
    [
      "1 hora e 45 minutos",
      "2 horas",
      "2 horas e 15 minutos",
      "2 horas e 30 minutos",
      "3 horas"
    ],
    1,
    "Convertendo a velocidade para km/h: 75 m/s × 3,6 = 270 km/h. Tempo necessário: T = Distância ÷ Velocidade = 540 km ÷ 270 km/h = 2 horas exatas."
  ],
  [
    "Notação científica aplicada",
    "Na nanotecnologia aplicada à indústria têxtil pelo SENAI, uma fibra de carbono possui espessura média de 0,0000075 metros. Em notação científica padrão, essa medida é corretamente expressa por:",
    [
      "7,5 × 10⁻⁵ m",
      "7,5 × 10⁻⁶ m",
      "7,5 × 10⁻⁷ m",
      "75 × 10⁻⁷ m",
      "0,75 × 10⁻⁵ m"
    ],
    1,
    "Deslocando a vírgula para a direita até obter um número entre 1 e 10: 0,0000075 -> deslocando 6 casas decimais resulta em 7,5 × 10⁻⁶ m."
  ],
  [
    "Notação científica e operações",
    "A velocidade da luz no vácuo é de aproximadamente 3,0 × 10⁸ m/s. Sabendo que a distância média entre a Terra e o Sol é de cerca de 1,5 × 10¹¹ metros, quanto tempo a luz solar leva para atingir a superfície terrestre?",
    [
      "300 segundos",
      "450 segundos",
      "500 segundos",
      "600 segundos",
      "750 segundos"
    ],
    2,
    "Tempo = Distância ÷ Velocidade = (1,5 × 10¹¹ m) ÷ (3,0 × 10⁸ m/s) = (1,5 / 3,0) × 10¹¹⁻⁸ = 0,5 × 10³ = 500 segundos (cerca de 8 minutos e 20 segundos)."
  ],
  [
    "Horas decimais e minutos",
    "Um operador de máquina CNC trabalhou 7,65 horas em um dia. O tempo trabalhado por ele, expresso em horas, minutos e segundos, é de:",
    [
      "7 horas e 39 minutos",
      "7 horas, 39 minutos e 00 segundos",
      "7 horas, 40 minutos e 15 segundos",
      "7 horas, 42 minutos e 30 segundos",
      "7 horas, 45 minutos e 12 segundos"
    ],
    1,
    "7,65 h = 7 horas inteiras + 0,65 h. Convertendo 0,65 h para minutos: 0,65 × 60 = 39 minutos exatos. Portanto, corresponde a 7 horas, 39 minutos e 00 segundos."
  ],
  [
    "Produtos notáveis",
    "Um arquiteto está projetando a expansão de uma praça quadrada de lado x metros. O novo projeto prevê acrescentar 4 metros a cada um dos lados da praça, resultando em um novo quadrado de lado (x + 4) metros. A expressão algébrica que representa o aumento na área total da praça após essa ampliação é:",
    [
      "8x + 16",
      "4x + 16",
      "8x + 8",
      "16x + 8",
      "x² + 8x"
    ],
    0,
    "Área inicial: A1 = x². Nova área: A2 = (x + 4)² = x² + 8x + 16. O aumento da área é A2 - A1 = (x² + 8x + 16) - x² = 8x + 16 metros quadrados."
  ],
  [
    "Produtos notáveis",
    "Uma chapa metálica quadrada de lado medindo L centímetros teve suas dimensões reduzidas em 5 cm em ambos os lados para se ajustar ao chassi de um gerador elétrico do SENAI. A área da nova chapa quadrada resultante é algebricamente representada por:",
    [
      "L² - 25",
      "L² - 5L + 25",
      "L² - 10L + 25",
      "L² - 10L - 25",
      "L² + 10L + 25"
    ],
    2,
    "A nova chapa tem lado (L - 5). Sua área é o quadrado da diferença de dois termos: (L - 5)² = L² - 2 × L × 5 + 5² = L² - 10L + 25."
  ],
  [
    "Diferença de dois quadrados",
    "Em uma oficina mecânica, uma placa de aço quadrada com 45 cm de lado teve um recorte quadrado central de 15 cm de lado retirado por corte a plasma para a passagem de dutos. Utilizando a fatoração pela diferença de dois quadrados (a² - b² = (a + b)(a - b)), a área remanescente de aço da chapa recortada é de:",
    [
      "1.600 cm²",
      "1.800 cm²",
      "2.000 cm²",
      "2.100 cm²",
      "2.250 cm²"
    ],
    1,
    "Área = 45² - 15² = (45 + 15)(45 - 15) = 60 × 30 = 1.800 cm²."
  ],
  [
    "Fatoração por fator comum",
    "O custo total de produção C(x), em reais, de uma estamparia é dado pelo polinômio C(x) = 18x³ + 27x² - 9x, em que x representa o lote em centenas de peças estampadas. Fatorando completamente esse polinômio colocando o máximo divisor comum dos coeficientes e termos em evidência, obtém-se:",
    [
      "9x(2x² + 3x - 1)",
      "9(2x³ + 3x² - x)",
      "3x(6x² + 9x - 3)",
      "9x²(2x + 3) - 9x",
      "18x(x² + 1,5x - 0,5)"
    ],
    0,
    "O MDC entre 18, 27 e 9 é 9. A menor potência comum de x é x¹ = x. Colocando 9x em evidência: 18x³/9x = 2x²; 27x²/9x = 3x; -9x/9x = -1. Expressão fatorada: 9x(2x² + 3x - 1)."
  ],
  [
    "Fatoração por agrupamento",
    "Ao calcular a resistência equivalente de um circuito de automação predial, um estudante do curso técnico do SENAI precisou simplificar a expressão algébrica E = ax + ay + bx + by. A forma fatorada correta e simplificada dessa expressão é:",
    [
      "(a + b)(x + y)",
      "(a - b)(x - y)",
      "(ax + by)(a + b)",
      "ab(x + y)",
      "(a + x)(b + y)"
    ],
    0,
    "Agrupando aos pares: a(x + y) + b(x + y). Colocando o termo comum (x + y) em evidência: (a + b)(x + y)."
  ],
  [
    "Simplificação de frações algébricas",
    "Em um modelo computacional de vazão hidráulica, a relação entre a pressão e a velocidade de saída de um fluido é modelada pela fração algébrica F(x) = (x² - 16) / (2x + 8), para todo x ≠ -4. A expressão simplificada equivalente é:",
    [
      "(x - 4) / 2",
      "(x + 4) / 2",
      "x - 4",
      "(x - 4) / 4",
      "x / 2 - 4"
    ],
    0,
    "Fatorando o numerador como diferença de dois quadrados: x² - 16 = (x - 4)(x + 4). Fatorando o denominador por fator comum: 2x + 8 = 2(x + 4). Simplificando o termo comum (x + 4): (x - 4)/2."
  ],
  [
    "Trinômio quadrado perfeito",
    "Para determinar a área de uma placa estrutural, um técnico deparou-se com o polinômio P(x) = 4x² + 20x + 25. Reconhecendo que esse polinômio é um trinômio quadrado perfeito, a forma fatorada que expressa o comprimento do lado da placa em função de x é:",
    [
      "(2x + 5)²",
      "(4x + 5)²",
      "(2x + 25)²",
      "(x + 10)²",
      "(2x - 5)²"
    ],
    0,
    "Raiz quadrada do primeiro termo: √(4x²) = 2x. Raiz quadrada do último termo: √25 = 5. Termo central: 2 × (2x) × 5 = 20x, o que confirma o quadrado da soma: (2x + 5)²."
  ],
  [
    "Modelagem de área com produtos notáveis",
    "Uma piscina retangular tem 10 metros de comprimento por 6 metros de largura. Ao redor de toda a piscina, será construída uma calçada de piso antiderrapante de largura constante igual a x metros. A expressão algébrica que representa a área ocupada exclusivamente pela calçada é:",
    [
      "4x² + 32x",
      "4x² + 16x",
      "2x² + 32x",
      "x² + 16x + 60",
      "4x² + 60"
    ],
    0,
    "Dimensões totais do conjunto piscina + calçada: Comprimento = 10 + 2x; Largura = 6 + 2x. Área total = (10 + 2x)(6 + 2x) = 60 + 20x + 12x + 4x² = 4x² + 32x + 60. Área da piscina = 10 × 6 = 60. Área apenas da calçada = (4x² + 32x + 60) - 60 = 4x² + 32x."
  ],
  [
    "Sistema de equações do 1º grau",
    "Um almoxarifado técnico do SENAI comprou um lote com 50 ferramentas manuais, composto exclusivamente por chaves de boca e alicates universais, totalizando um investimento de R$ 1.800,00. Sabendo que cada chave de boca custou R$ 30,00 e cada alicate custou R$ 45,00, quantas chaves de boca foram adquiridas?",
    [
      "20",
      "25",
      "30",
      "35",
      "40"
    ],
    2,
    "Sejam c o número de chaves e a o número de alicates: 1) c + a = 50 => a = 50 - c. 2) 30c + 45a = 1.800 => 30c + 45(50 - c) = 1.800 => 30c + 2.250 - 45c = 1.800 => -15c = -450 => c = 30 chaves de boca."
  ],
  [
    "Sistema de equações do 1º grau",
    "No estacionamento de uma unidade do SESI, há um total de 64 veículos estacionados, entre carros e motocicletas. O vigilante contou um total de 188 pneus em contato com o solo (sem contar estepes). Quantos carros estão no estacionamento?",
    [
      "28",
      "30",
      "32",
      "34",
      "36"
    ],
    1,
    "Sejam c o número de carros (4 rodas) e m o de motos (2 rodas): c + m = 64 => m = 64 - c. 4c + 2m = 188 => 4c + 2(64 - c) = 188 => 4c + 128 - 2c = 188 => 2c = 60 => c = 30 carros."
  ],
  [
    "Equação fracionária do 1º grau",
    "Para alugar uma van para uma visita técnica a uma siderúrgica, os estudantes de uma turma do SENAI dividiram igualmente o custo total do aluguel, que foi de R$ 1.200,00. No dia da viagem, 4 alunos faltaram e não pagaram, o que fez com que a cota individual de cada um dos alunos presentes aumentasse em R$ 10,00. Quantos alunos foram efetivamente à viagem técnica?",
    [
      "16 alunos",
      "20 alunos",
      "24 alunos",
      "25 alunos",
      "30 alunos"
    ],
    1,
    "Seja n o número inicial de alunos. Presentes: n - 4. 1200 / (n - 4) - 1200 / n = 10. Testando n = 24: 1200 / 20 = 60; 1200 / 24 = 50. Diferença = 60 - 50 = R$ 10,00! O número inicial de alunos era 24, logo o número de alunos que efetivamente foram à viagem foi 24 - 4 = 20 alunos."
  ],
  [
    "Equação do 1º grau e planos tarifários",
    "Uma empresa de logística analisa dois planos de telefonia móvel corporativa para sua frota: • Plano Alfa: assinatura fixa de R$ 40,00 mais R$ 0,25 por minuto utilizado. • Plano Beta: assinatura fixa de R$ 25,00 mais R$ 0,40 por minuto utilizado. Para qual quantidade mensal de minutos de chamadas o valor final cobrado será rigorosamente o mesmo em ambos os planos?",
    [
      "80 minutos",
      "90 minutos",
      "100 minutos",
      "110 minutos",
      "120 minutos"
    ],
    2,
    "Igualando os custos: 40 + 0,25x = 25 + 0,40x => 40 - 25 = 0,40x - 0,25x => 15 = 0,15x => x = 15 ÷ 0,15 = 100 minutos."
  ],
  [
    "Ponto de equilíbrio financeiro",
    "Uma pequena marcenaria produz mesas industriais sustentáveis. O custo fixo mensal da oficina é de R$ 4.800,00, o custo variável de materiais e mão de obra por mesa é de R$ 140,00 e cada mesa é vendida por R$ 300,00. Quantas mesas devem ser produzidas e comercializadas por mês para que a marcenaria atinja o ponto de equilíbrio (lucro igual a zero)?",
    [
      "24 mesas",
      "28 mesas",
      "30 mesas",
      "32 mesas",
      "35 mesas"
    ],
    2,
    "No ponto de equilíbrio: Receita = Custo Total. 300x = 4.800 + 140x => 160x = 4.800 => x = 4.800 ÷ 160 = 30 mesas."
  ],
  [
    "Equação do 1º grau com idades",
    "Um instrutor do SENAI tem hoje o triplo da idade de seu aluno estagiário. Daqui a 12 anos, a idade do instrutor será exatamente o dobro da idade do aluno. Qual é a idade atual do instrutor?",
    [
      "24 anos",
      "30 anos",
      "36 anos",
      "42 anos",
      "48 anos"
    ],
    2,
    "Seja x a idade atual do estagiário. O instrutor tem 3x. Daqui a 12 anos: 3x + 12 = 2(x + 12) => 3x + 12 = 2x + 24 => x = 12 anos (estagiário). Idade do instrutor = 3 × 12 = 36 anos."
  ],
  [
    "Equação do 1º grau em frações",
    "Um caminhão-tanque de abastecimento de uma fábrica gastou 2/5 de sua carga de diesel para abastecer os tratores e 1/3 do total para abastecer os geradores de emergência. Sabendo que ainda restaram 4.800 litros de diesel no tanque, qual é a capacidade total de armazenamento desse caminhão?",
    [
      "14.000 litros",
      "16.000 litros",
      "18.000 litros",
      "20.000 litros",
      "24.000 litros"
    ],
    2,
    "Fração gasta: 2/5 + 1/3 = (6 + 5) / 15 = 11/15. Fração restante: 1 - 11/15 = 4/15. Se 4/15 da capacidade C equivalem a 4.800 L: (4/15) × C = 4.800 => C = (4.800 × 15) ÷ 4 = 1.200 × 15 = 18.000 litros."
  ],
  [
    "Equação do 2º grau e geometria",
    "O pátio de manobras de uma transportadora tem formato retangular com área total de 400 m². Sabe-se que o comprimento desse pátio possui 9 metros a mais do que a sua largura. O perímetro total desse pátio de manobras é igual a:",
    [
      "72 metros",
      "78 metros",
      "82 metros",
      "86 metros",
      "90 metros"
    ],
    2,
    "Seja x a largura em metros. Comprimento = x + 9. Área: x(x + 9) = 400 => x² + 9x - 400 = 0. Discriminante: Δ = 9² - 4(1)(-400) = 81 + 1600 = 1681 = 41². x = (-9 + 41) / 2 = 32 / 2 = 16 metros (largura). Comprimento = 16 + 9 = 25 metros. Perímetro = 2 × (16 + 25) = 2 × 41 = 82 metros."
  ],
  [
    "Equação do 2º grau e física",
    "Em um experimento no laboratório de física do SESI, um projétil é lançado verticalmente para cima a partir do solo. Sua altura h, em metros, após t segundos do disparo, é descrita pela equação h(t) = -5t² + 40t. Após quanto tempo a partir do lançamento o projétil retornará ao solo?",
    [
      "4 segundos",
      "6 segundos",
      "8 segundos",
      "10 segundos",
      "12 segundos"
    ],
    2,
    "O projétil atinge o solo quando h(t) = 0: -5t² + 40t = 0 => 5t(-t + 8) = 0 => t = 0 (instante inicial) ou t = 8 segundos (retorno ao solo)."
  ],
  [
    "Análise do discriminante",
    "Para que a equação quadrática kx² - 12x + 9 = 0 (com k ≠ 0) possua uma única raiz real dupla (duas raízes reais e iguais), o valor da constante real k deve ser rigorosamente igual a:",
    [
      "2",
      "3",
      "4",
      "6",
      "9"
    ],
    2,
    "Para possuir raiz real dupla, o discriminante deve ser nulo (Δ = 0): Δ = b² - 4ac = (-12)² - 4(k)(9) = 144 - 36k = 0 => 36k = 144 => k = 144 ÷ 36 = 4."
  ],
  [
    "Relações de Girard",
    "As dimensões de uma placa metálica retangular (largura e comprimento) correspondem às duas raízes reais da equação quadrática 2x² - 26x + 80 = 0. A soma e o produto dessas duas dimensões valem, respectivamente:",
    [
      "13 e 40",
      "26 e 80",
      "13 e 80",
      "26 e 40",
      "10 e 16"
    ],
    0,
    "Dividindo a equação por 2: x² - 13x + 40 = 0. Pelas relações de Girard: Soma das raízes S = -b/a = -(-26)/2 = 13. Produto das raízes P = c/a = 80/2 = 40 (as raízes são 5 e 8)."
  ],
  [
    "Equação do 2º grau incompleta",
    "Um reservatório de água tem base quadrada. Ao aumentar em 3 metros cada lado da base, a área da base aumenta em 51 m². O lado original da base desse reservatório media:",
    [
      "6 metros",
      "7 metros",
      "8 metros",
      "9 metros",
      "10 metros"
    ],
    1,
    "Seja L o lado original. Nova área: (L + 3)² = L² + 6L + 9. Diferença de áreas: (L² + 6L + 9) - L² = 51 => 6L + 9 = 51 => 6L = 42 => L = 7 metros."
  ],
  [
    "Equação do 2º grau e números",
    "O produto de dois números inteiros positivos consecutivos é igual a 342. A soma desses dois números inteiros é igual a:",
    [
      "33",
      "35",
      "37",
      "39",
      "41"
    ],
    2,
    "Sejam n e n + 1 os números consecutivos: n(n + 1) = 342 => n² + n - 342 = 0. Δ = 1² - 4(1)(-342) = 1 + 1368 = 1369 = 37². n = (-1 + 37) / 2 = 36 / 2 = 18. Os números são 18 e 19. A soma é 18 + 19 = 37."
  ],
  [
    "Equação do 2º grau contextualizada",
    "Um artesão fabrica caixas decorativas de madeira. O custo de produção de x caixas é dado por C(x) = x² + 20x. Se o valor total disponível no caixa da oficina para essa produção foi de R$ 525,00, quantas caixas foram produzidas?",
    [
      "12 caixas",
      "15 caixas",
      "18 caixas",
      "20 caixas",
      "25 caixas"
    ],
    1,
    "x² + 20x = 525 => x² + 20x - 525 = 0. Δ = 20² - 4(1)(-525) = 400 + 2100 = 2500 = 50². x = (-20 + 50) / 2 = 30 / 2 = 15 caixas."
  ],
  [
    "Função afim e taxa de variação",
    "Uma empresa de frete calcula o preço P, em reais, para transportar uma carga a uma distância d, em quilômetros, por meio de uma função afim P(d) = ad + b. Sabe-se que um frete de 100 km custa R$ 230,00 e um frete de 250 km custa R$ 470,00. O valor fixo de saída (taxa fixa b) cobrado pela transportadora é:",
    [
      "R$ 50,00",
      "R$ 60,00",
      "R$ 70,00",
      "R$ 75,00",
      "R$ 80,00"
    ],
    2,
    "Taxa de variação: a = (470 - 230) / (250 - 100) = 240 / 150 = 1,60 R$/km. Substituindo em P(100): 230 = 1,60 × 100 + b => 230 = 160 + b => b = R$ 70,00."
  ],
  [
    "Zero da função afim",
    "O volume V de combustível, em litros, restante no tanque de um gerador a diesel após t horas de funcionamento ininterrupto é dado por V(t) = 360 - 24t. Após quantas horas de funcionamento o combustível se esgotará completamente?",
    [
      "12 horas",
      "14 horas",
      "15 horas",
      "16 horas",
      "18 horas"
    ],
    2,
    "O combustível esgota-se quando V(t) = 0: 360 - 24t = 0 => 24t = 360 => t = 360 ÷ 24 = 15 horas."
  ],
  [
    "Vértice da parábola e valor máximo",
    "Em uma indústria automotiva, o lucro diário L, em milhares de reais, obtido na fabricação de x unidades de um sensor eletrônico é expresso pela função quadrática L(x) = -2x² + 80x - 300. A quantidade diária x de sensores que maximiza o lucro da indústria é:",
    [
      "15 unidades",
      "18 unidades",
      "20 unidades",
      "25 unidades",
      "40 unidades"
    ],
    2,
    "A função possui concavidade voltada para baixo (a = -2 < 0), logo atinge o ponto máximo no vértice: Xv = -b / (2a) = -80 / (2 × (-2)) = -80 / (-4) = 20 unidades."
  ],
  [
    "Valor máximo da função quadrática",
    "No projeto de robótica do SESI, um drone decolou e descreveu uma curva parabólica dada pela função h(t) = -t² + 6t + 7, onde h representa a altura em metros e t o tempo decorrido em segundos. Qual foi a altura máxima atingida pelo drone durante esse voo?",
    [
      "14 metros",
      "15 metros",
      "16 metros",
      "17 metros",
      "18 metros"
    ],
    2,
    "Instante de altura máxima: tv = -b / (2a) = -6 / (2 × (-1)) = 3 segundos. Altura máxima: h(3) = -(3)² + 6(3) + 7 = -9 + 18 + 7 = 16 metros. (Ou Yv = -Δ / (4a) = -(36 - 4(-1)(7)) / (-4) = -(36 + 28) / (-4) = -64 / (-4) = 16 metros)."
  ],
  [
    "Interpretação gráfica de função afim",
    "Um laboratório avalia duas opções de locação de impressoras 3D industriais: • Opção 1: Custo fixo mensal de R$ 500,00 mais R$ 12,00 por hora de impressão. • Opção 2: Custo fixo mensal de R$ 200,00 mais R$ 20,00 por hora de impressão. A partir de quantas horas mensais de impressão a Opção 1 se torna financeiramente mais vantajosa que a Opção 2?",
    [
      "Acima de 35 horas",
      "Acima de 37,5 horas",
      "Acima de 40 horas",
      "Acima de 42,5 horas",
      "Acima de 45 horas"
    ],
    1,
    "Opção 1 mais vantajosa quando C1 < C2: 500 + 12h < 200 + 20h => 300 < 8h => h > 300 / 8 => h > 37,5 horas."
  ],
  [
    "Otimização de área com função quadrática",
    "Um produtor rural dispõe de 120 metros lineares de tela para cercar uma horta retangular aproveitando uma parede de alvenaria já existente como um dos lados, precisando cercar apenas os outros três lados. A área máxima possível para essa horta é:",
    [
      "1.200 m²",
      "1.500 m²",
      "1.600 m²",
      "1.800 m²",
      "2.000 m²"
    ],
    3,
    "Sejam x a largura dos dois lados perpendiculares à parede e y o comprimento paralelo à parede. Total de tela: 2x + y = 120 => y = 120 - 2x. Área: A(x) = x × y = x(120 - 2x) = -2x² + 120x. O valor de x que maximiza a área é Xv = -b / (2a) = -120 / (2 × (-2)) = 30 metros. Área máxima = A(30) = 30 × (120 - 2 × 30) = 30 × 60 = 1.800 m²."
  ],
  [
    "Concavidade e raízes de função quadrática",
    "Uma função quadrática f(x) = ax² + bx + c possui gráfico parabólico que corta o eixo das abscissas (eixo x) nos pontos (-2, 0) e (6, 0) e possui vértice voltado para cima (ponto de máximo). É correto afirmar que:",
    [
      "a > 0 e a abscissa do vértice é x = 2",
      "a < 0 e a abscissa do vértice é x = 2",
      "a < 0 e a abscissa do vértice é x = 4",
      "a > 0 e a abscissa do vértice é x = 4",
      "a < 0 e o produto das raízes é c = 12"
    ],
    1,
    "Como a parábola possui ponto de máximo, sua concavidade é voltada para baixo, logo o coeficiente principal a < 0. O eixo de simetria da parábola passa exatamente no ponto médio entre as raízes: Xv = (x1 + x2) / 2 = (-2 + 6) / 2 = 4 / 2 = 2. Portanto, a < 0 e a abscissa do vértice é x = 2."
  ],
  [
    "Domínio e aplicação de função afim",
    "A escala termométrica industrial de um forno calibrado converte a temperatura T em graus Celsius (°C) para uma escala própria S através da relação linear S = 2,5T + 40. Se o sensor do forno registrou S = 190 graus na escala própria, a temperatura correspondente em graus Celsius era de:",
    [
      "50 °C",
      "55 °C",
      "60 °C",
      "65 °C",
      "70 °C"
    ],
    2,
    "190 = 2,5T + 40 => 2,5T = 190 - 40 => 2,5T = 150 => T = 150 ÷ 2,5 = 60 °C."
  ],
  [
    "Teorema de Tales em terrenos",
    "Três terrenos industriais contíguos têm frentes voltadas para a Avenida das Indústrias e fundos para a Rua dos Metalúrgicos. As divisas laterais entre os terrenos são paralelas entre si. A frente total na Avenida das Indústrias mede 120 metros, sendo dividida em lotes de 30 m, 40 m e 50 m para os terrenos A, B e C, respectivamente. Sabendo que o fundo total voltado para a Rua dos Metalúrgicos mede 180 metros, qual é a medida do fundo correspondente ao Terreno B?",
    [
      "45 metros",
      "50 metros",
      "60 metros",
      "70 metros",
      "75 metros"
    ],
    2,
    "Pelo Teorema de Tales, a razão entre as frentes e os fundos é proporcional. A soma das frentes é 30 + 40 + 50 = 120 m. O fundo total é 180 m. A constante de proporcionalidade é 180 / 120 = 1,5. Portanto, o fundo do Terreno B mede: 40 × 1,5 = 60 metros."
  ],
  [
    "Teorema de Tales no triângulo",
    "Em uma estrutura triangular de suporte de telhado ABC, um tirante de aço DE é posicionado paralelamente à base BC, cortando o lado AB no ponto D e o lado AC no ponto E. Sabe-se que AD = 12 cm, DB = 8 cm e AE = 15 cm. A medida do segmento EC é de:",
    [
      "8 cm",
      "10 cm",
      "12 cm",
      "14 cm",
      "16 cm"
    ],
    1,
    "Como a reta DE é paralela à base BC, pelo Teorema de Tales temos: AD / DB = AE / EC => 12 / 8 = 15 / EC => 3 / 2 = 15 / EC => 3 × EC = 30 => EC = 10 cm."
  ],
  [
    "Teorema de Tales em estruturas",
    "Na fabricação de um andaime metálico pelo SENAI, duas vigas transversais paralelas r e s cortam duas hastes estruturais retilíneas m e n. Na haste m, os segmentos determinados medem 24 cm e x cm. Na haste n, os segmentos correspondentes medem 36 cm e 54 cm. O valor da medida x é igual a:",
    [
      "30 cm",
      "32 cm",
      "36 cm",
      "40 cm",
      "42 cm"
    ],
    2,
    "Pelo Teorema de Tales: 24 / x = 36 / 54. Simplificando 36 / 54 = 2 / 3. Logo, 24 / x = 2 / 3 => 2x = 72 => x = 36 cm."
  ],
  [
    "Semelhança de triângulos e sombras",
    "Em uma tarde ensolarada no pátio do SESI, um poste de iluminação vertical projeta no piso horizontal uma sombra de 9 metros de comprimento. No mesmo instante e local, uma haste de medição vertical de 2 metros de altura projeta uma sombra de 1,20 metro. A altura do poste de iluminação é de:",
    [
      "12 metros",
      "13,5 metros",
      "15 metros",
      "16,5 metros",
      "18 metros"
    ],
    2,
    "Como os raios solares são paralelos no mesmo instante, os triângulos formados pelas alturas e sombras são semelhantes: H_poste / Sombra_poste = H_haste / Sombra_haste => H / 9 = 2 / 1,20 => H / 9 = 20 / 12 = 5 / 3. H = 9 × (5 / 3) = 15 metros."
  ],
  [
    "Semelhança de triângulos e largura de rio",
    "Para determinar a largura de um canal de drenagem sem atravessá-lo, técnicos de agrimensura fincaram piquetes e demarcaram dois triângulos retângulos semelhantes na margem. A relação de semelhança entre as bases dos dois triângulos é de 3 para 5. Sabendo que o cateto correspondente à largura no menor triângulo mede 18 metros, a largura do canal correspondente no maior triângulo é de:",
    [
      "24 metros",
      "27 metros",
      "30 metros",
      "32 metros",
      "36 metros"
    ],
    2,
    "Pela razão de semelhança: 18 / L = 3 / 5 => 3L = 18 × 5 = 90 => L = 30 metros."
  ],
  [
    "Teorema de Pitágoras em rampa",
    "Uma rampa de carregamento para caminhões em uma fábrica do polo calçadista tem comprimento retilíneo inclinado de 13 metros. Se o desnível vertical vencido pela rampa é de 5 metros, qual é a extensão horizontal ocupada pela base da rampa no solo?",
    [
      "10 metros",
      "11 metros",
      "12 metros",
      "12,5 metros",
      "14 metros"
    ],
    2,
    "Aplicando o Teorema de Pitágoras no triângulo retângulo formado: Hipotenusa² = Cateto1² + Cateto2² => 13² = 5² + b² => 169 = 25 + b² => b² = 144 => b = √144 = 12 metros."
  ],
  [
    "Teorema de Pitágoras e deslocamento",
    "Um veículo autônomo (AGV) que transporta paletes no armazém logístico do SENAI parte de uma estação de carga e desloca-se 24 metros em linha reta na direção Norte, faz uma curva de 90° e percorre mais 7 metros na direção Leste. A distância em linha reta entre a estação de carga inicial e o ponto final de parada do AGV é de:",
    [
      "25 metros",
      "26 metros",
      "28 metros",
      "30 metros",
      "31 metros"
    ],
    0,
    "O trajeto forma um triângulo retângulo com catetos de 24 m e 7 m. Distância em linha reta d = √(24² + 7²) = √(576 + 49) = √625 = 25 metros."
  ],
  [
    "Relações métricas no triângulo retângulo",
    "Na fabricação de um suporte metálico em forma de triângulo retângulo, a altura relativa à hipotenusa divide a hipotenusa em dois segmentos (projeções dos catetos) que medem 9 cm e 16 cm. O comprimento dessa altura relativa é de:",
    [
      "10 cm",
      "12 cm",
      "13 cm",
      "14 cm",
      "15 cm"
    ],
    1,
    "Pela relação métrica do triângulo retângulo: h² = m × n, onde m e n são as projeções dos catetos sobre a hipotenusa. h² = 9 × 16 = 144 => h = √144 = 12 cm."
  ],
  [
    "Razões trigonométricas: seno",
    "Uma esteira transportadora de minério tem 40 metros de comprimento e opera inclinada em um ângulo de 30° em relação ao piso plano horizontal. Sabendo que sen(30°) = 0,5, cos(30°) ≈ 0,87 e tan(30°) ≈ 0,58, a altura máxima que o minério atinge na ponta superior da esteira é de:",
    [
      "15 metros",
      "20 metros",
      "23,2 metros",
      "28 metros",
      "34,8 metros"
    ],
    1,
    "No triângulo retângulo, o cateto oposto ao ângulo de 30° corresponde à altura vertical h e a esteira é a hipotenusa. sen(30°) = h / 40 => 0,5 = h / 40 => h = 40 × 0,5 = 20 metros."
  ],
  [
    "Razões trigonométricas: tangente",
    "Um topógrafo posiciona seu teodolito a 30 metros de distância da base de uma chaminé industrial vertical. Mirando o topo da chaminé, o aparelho registra um ângulo de elevação de 45°. Se a luneta do teodolito está a 1,60 metro de altura do solo e tan(45°) = 1, qual é a altura total da chaminé?",
    [
      "30 metros",
      "31,60 metros",
      "33,20 metros",
      "35 metros",
      "45 metros"
    ],
    1,
    "Cateto oposto da visada: tan(45°) = y / 30 => 1 = y / 30 => y = 30 metros. Altura total = altura calculada pela visada + altura do aparelho = 30 + 1,60 = 31,60 metros."
  ],
  [
    "Razões trigonométricas: cosseno",
    "Para realizar a manutenção de uma calha industrial a 6 metros do chão, uma escada metálica foi apoiada formando um ângulo de 60° com o solo horizontal. Sabendo que sen(60°) ≈ 0,87, cos(60°) = 0,5 e tan(60°) ≈ 1,73, a distância entre o pé da escada no chão e a parede vertical deve ser aproximadamente calculada sabendo que o comprimento da escada é L = 6 / sen(60°) ≈ 6,90 metros. A distância da base da escada até a parede (L × cos(60°)) é de cerca de:",
    [
      "2,50 metros",
      "3,00 metros",
      "3,45 metros",
      "4,00 metros",
      "5,20 metros"
    ],
    2,
    "Distância d = L × cos(60°) = 6,90 × 0,5 = 3,45 metros. (Ou pela tangente: tan(60°) = 6 / d => d = 6 / 1,73 ≈ 3,46 m)."
  ],
  [
    "Trigonometria e ângulos notáveis",
    "O cabo de aço que sustenta uma torre de transmissão de rádio está ancorado ao solo a 20 metros da base da torre, formando um ângulo de 60° com a horizontal. Considerando cos(60°) = 0,5, qual é o comprimento do cabo de aço?",
    [
      "30 metros",
      "35 metros",
      "40 metros",
      "45 metros",
      "50 metros"
    ],
    2,
    "cos(60°) = cateto adjacente / hipotenusa => 0,5 = 20 / L => L = 20 / 0,5 = 40 metros."
  ],
  [
    "Trigonometria com raiz aproximada",
    "Do alto de um farol litorâneo de 60 metros de altura sobre o nível do mar, um vigia avista uma lancha sob um ângulo de depressão de 30°. Adotando tan(30°) = √3 / 3 e considerando √3 ≈ 1,73, a distância horizontal aproximada da lancha até a base do farol é de:",
    [
      "86,5 metros",
      "100 metros",
      "103,8 metros",
      "112,4 metros",
      "120 metros"
    ],
    2,
    "Por ângulos alternos internos, o ângulo de elevação da lancha ao topo do farol é 30°. tan(30°) = altura / distância => √3 / 3 = 60 / d => d = 180 / √3 = 180√3 / 3 = 60√3. Com √3 ≈ 1,73: d = 60 × 1,73 = 103,8 metros."
  ],
  [
    "Declividade e razão trigonométrica",
    "Um projeto de cobertura metálica do SENAI especifica uma declividade (tangente do ângulo de inclinação) de 25%, ou seja, tan(θ) = 0,25. Para uma viga horizontal de vão correspondente a 12 metros, qual deve ser a elevação vertical da cumeeira?",
    [
      "2,4 metros",
      "2,8 metros",
      "3,0 metros",
      "3,2 metros",
      "3,6 metros"
    ],
    2,
    "Declividade = elevação vertical / vão horizontal => 0,25 = h / 12 => h = 12 × 0,25 = 3,0 metros."
  ],
  [
    "Probabilidade em controle de qualidade",
    "Em uma linha automatizada de produção de rolamentos de esferas, um lote com 500 peças foi submetido a rigorosa inspeção metrológica. Verificou-se que 20 rolamentos apresentaram diâmetro fora da tolerância exigida e foram descartados. Retirando-se aleatoriamente um rolamento desse lote de 500 peças, qual é a probabilidade de ele ser perfeito (conforme)?",
    [
      "92%",
      "94%",
      "95%",
      "96%",
      "98%"
    ],
    3,
    "Peças conformes = 500 - 20 = 480 rolamentos. Probabilidade = 480 / 500 = 96 / 100 = 96%."
  ],
  [
    "Probabilidade com números",
    "Em uma urna para sorteio de brindes em uma feira de inovação do SESI, foram colocadas 40 fichas idênticas numeradas de 1 a 40. Retirando-se uma única ficha ao acaso, qual é a probabilidade de o número sorteado ser um múltiplo de 6?",
    [
      "10%",
      "12,5%",
      "15%",
      "17,5%",
      "20%"
    ],
    2,
    "Múltiplos de 6 entre 1 e 40: {6, 12, 18, 24, 30, 36} -> são 6 números favoráveis. Probabilidade = 6 / 40 = 3 / 20 = 0,15 = 15%."
  ],
  [
    "Princípio fundamental da contagem",
    "O sistema de controle de acesso ao laboratório de inteligência artificial do SENAI exige que cada pesquisador cadastre uma senha de 4 dígitos formada exclusivamente pelos algarismos {1, 2, 3, 4, 5, 6, 7, 8}. Se a norma interna proíbe a repetição de qualquer algarismo na mesma senha, quantas senhas distintas podem ser criadas?",
    [
      "1.680",
      "2.016",
      "2.400",
      "4.096",
      "6.720"
    ],
    0,
    "Pelo princípio multiplicativo com 8 opções sem repetição para 4 posições: 8 × 7 × 6 × 5 = 56 × 30 = 1.680 senhas distintas."
  ],
  [
    "Probabilidade da união de eventos",
    "Uma turma de 60 estudantes do Novo Ensino Médio do SESI foi consultada sobre sua participação em oficinas técnicas: • 35 alunos cursam a oficina de Robótica; • 25 alunos cursam a oficina de Programação Web; • 10 alunos cursam ambas as oficinas simultaneamente. Selecionando-se ao acaso um aluno dessa turma, a probabilidade de ele participar de pelo menos uma dessas duas oficinas é de:",
    [
      "50%",
      "66,7%",
      "75%",
      "83,3%",
      "90%"
    ],
    3,
    "Número de alunos em pelo menos uma oficina = N(R ∪ P) = N(R) + N(P) - N(R ∩ P) = 35 + 25 - 10 = 50 alunos. Probabilidade = 50 / 60 = 5 / 6 ≈ 83,3%."
  ],
  [
    "Probabilidade complementar",
    "Dois sensores industriais de segurança A e B operam de forma independente no monitoramento da caldeira de vapor. A probabilidade de o sensor A falhar em um teste de rotina é de 4% (0,04) e a do sensor B falhar é de 5% (0,05). A probabilidade de ambos os sensores falharem simultaneamente no mesmo teste é de:",
    [
      "0,02%",
      "0,2%",
      "0,9%",
      "2,0%",
      "9,0%"
    ],
    1,
    "Como os eventos são independentes, a probabilidade de falha conjunta é o produto das probabilidades: P(A e B) = P(A) × P(B) = 0,04 × 0,05 = 0,002 = 0,2%."
  ],
  [
    "Probabilidade sem reposição",
    "Em uma gaveta da bancada de eletrônica, há 10 transistores aparentemente iguais, dos quais exatamente 3 estão queimados e 7 em perfeito estado de funcionamento. Um técnico retira sucessivamente 2 transistores ao acaso, sem reposição. A probabilidade de ambos os transistores retirados estarem em perfeito estado é de:",
    [
      "7/15",
      "49/100",
      "21/50",
      "1/3",
      "7/10"
    ],
    0,
    "Primeira retirada perfeita: 7/10. Segunda retirada perfeita (restando 6 perfeitos em 9 totais): 6/9 = 2/3. Probabilidade conjunta = (7/10) × (2/3) = 14/30 = 7/15."
  ],
  [
    "Probabilidade condicional em tabela",
    "A tabela a seguir apresenta a distribuição dos 120 concluintes dos cursos técnicos do SENAI por área e turno:\n• Eletromecânica: 40 matutino, 20 noturno (total: 60)\n• Desenvolvimento de Sistemas: 30 matutino, 30 noturno (total: 60)\nTotal geral: 70 matutino e 50 noturno.\n\nSorteando-se um estudante sabendo previamente que ele estuda no turno noturno, qual é a probabilidade de ele ser do curso de Eletromecânica?",
    [
      "20%",
      "25%",
      "33,3%",
      "40%",
      "50%"
    ],
    3,
    "O espaço amostral restrito ao turno noturno possui 50 estudantes. Dentre esses 50, exatamente 20 cursam Eletromecânica. Probabilidade condicional = 20 / 50 = 2 / 5 = 40%."
  ],
  [
    "Princípio da contagem com permutações simples",
    "Cinco protótipos de robôs desenvolvidos pelos alunos do SESI devem ser organizados em fila sobre uma bancada para a apresentação final aos jurados da feira de ciências. De quantas maneiras distintas esses 5 robôs podem ser ordenados?",
    [
      "60",
      "96",
      "120",
      "150",
      "240"
    ],
    2,
    "Trata-se de uma permutação simples de 5 elementos distintos: P5 = 5! = 5 × 4 × 3 × 2 × 1 = 120 maneiras distintas."
  ],
  [
    "Gráfico de setores e ângulo central",
    "Em um gráfico de setores (pizza) que ilustra a destinação dos resíduos sólidos de um parque industrial, a fração correspondente à 'Reciclagem e Reutilização' representa exatamente 35% do total. O ângulo central correspondente a esse setor circular mede:",
    [
      "105°",
      "116°",
      "126°",
      "135°",
      "144°"
    ],
    2,
    "A circunferência completa equivale a 360° (100%). Ângulo central = 35% de 360° = 0,35 × 360° = 126°."
  ],
  [
    "Gráfico de setores e valores absolutos",
    "Um gráfico circular de setores apresenta o orçamento anual de R$ 1.800.000,00 de uma unidade educacional do SESI. O setor destinado a 'Capacitação Docente e Tecnologias Pedagógicas' possui um ângulo central de 54°. O valor em reais destinado a essa área é igual a:",
    [
      "R$ 210.000,00",
      "R$ 240.000,00",
      "R$ 270.000,00",
      "R$ 300.000,00",
      "R$ 324.000,00"
    ],
    2,
    "Fração do círculo: 54° / 360° = 54 ÷ 18 / 360 ÷ 18 = 3 / 20 = 15%. Valor correspondente = 15% de R$ 1.800.000,00 = 0,15 × 1.800.000 = R$ 270.000,00."
  ],
  [
    "Interpretação de gráfico de barras",
    "O consumo de água industrial em uma metalúrgica foi registrado mês a mês: janeiro (800 m³), fevereiro (850 m³), março (1.000 m³) e abril (950 m³). Qual foi o aumento percentual no consumo de água verificado de janeiro para março?",
    [
      "20%",
      "25%",
      "28%",
      "30%",
      "35%"
    ],
    1,
    "Variação absoluta = 1.000 - 800 = 200 m³. Aumento percentual em relação a janeiro = 200 / 800 = 1 / 4 = 25%."
  ],
  [
    "Interpretação de gráfico de linhas",
    "O gráfico de linhas de monitoramento térmico de um forno de têmpera registrou as seguintes temperaturas de hora em hora: 10h (750 °C), 11h (820 °C), 12h (900 °C), 13h (880 °C) e 14h (850 °C). A temperatura média registrada nesse intervalo de 5 medições horárias foi igual a:",
    [
      "830 °C",
      "840 °C",
      "850 °C",
      "860 °C",
      "870 °C"
    ],
    1,
    "Soma das temperaturas: 750 + 820 + 900 + 880 + 850 = 4.200 °C. Média = 4.200 ÷ 5 = 840 °C."
  ],
  [
    "Análise de tabela estatística",
    "Uma pesquisa com 250 trabalhadores de uma indústria automotiva mapeou o meio de transporte utilizado para ir ao trabalho:\n• Ônibus fretado da empresa: 110 trabalhadores\n• Carro próprio / carona: 65 trabalhadores\n• Transporte público regular: 50 trabalhadores\n• Bicicleta ou a pé: 25 trabalhadores\n\nO percentual de trabalhadores que utilizam meios de transporte não poluentes (bicicleta ou a pé) é igual a:",
    [
      "8%",
      "10%",
      "12%",
      "15%",
      "18%"
    ],
    1,
    "Trabalhadores de bicicleta ou a pé: 25 em um total de 250. Percentual = 25 / 250 = 1 / 10 = 10%."
  ],
  [
    "Histograma e intervalos de classe",
    "A distribuição de frequências dos salários dos técnicos recém-formados pelo SENAI em uma amostra de 80 profissionais é:\n• De R$ 2.000 a R$ 3.000: 20 técnicos\n• De R$ 3.000 a R$ 4.000: 36 técnicos\n• De R$ 4.000 a R$ 5.000: 16 técnicos\n• Acima de R$ 5.000: 8 técnicos\n\nO percentual de técnicos que recebem remuneração mensal de pelo menos R$ 4.000,00 nessa amostra é de:",
    [
      "20%",
      "25%",
      "30%",
      "35%",
      "40%"
    ],
    2,
    "'Pelo menos R$ 4.000,00' inclui as duas últimas faixas salariais: 16 + 8 = 24 técnicos. Percentual = 24 / 80 = 3 / 10 = 30%."
  ],
  [
    "Infográfico e taxas de variação",
    "Um infográfico sobre sustentabilidade na indústria gaúcha destacou que, entre 2020 e 2024, a emissão de carbono de uma fábrica pioneira foi reduzida de 5.000 toneladas/ano para 3.500 toneladas/ano devido à adoção de biomassa e eficiência energética. A taxa percentual total de redução dessas emissões no período foi de:",
    [
      "25%",
      "28%",
      "30%",
      "32%",
      "35%"
    ],
    2,
    "Redução absoluta = 5.000 - 3.500 = 1.500 toneladas/ano. Taxa percentual de redução = 1.500 / 5.000 = 3 / 10 = 30%."
  ]
];

  const port = [...officialPort, ...extraPort];
  const math = [...officialMath, ...extraMath];
  const officialExam = [...officialPort, ...officialMath];

  window.AK_QUESTION_BANK = Object.freeze({ math, port, officialExam });
})();
