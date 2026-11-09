import { AreaAtuacao, PilarClinico, Depoimento, FaqItem } from '../types';

export const DADOS_CLINICA = {
  nome: 'Dra. Lilian',
  subtitulo: 'Psicóloga Clínica',
  nomeProfissional: 'Dra. Lilian',
  tituloProfissional: 'Psicóloga Clínica (CRP 06/148920)',
  slogan: 'Onde o silêncio da sua mente encontra o calor do acolhimento.',
  headlineHero: 'Um refúgio de presença e serenidade para desacelerar o caos, curar feridas e florescer.',
  subheadlineHero: 'Psicoterapia humanizada e acolhimento integrativo com a Dra. Lilian. Um ambiente desenhado para você respirar sem julgamentos, ressignificar sua história e reencontrar sua paz interior.',
  registroProfissional: 'Dra. Lilian · CRP 06/148920 — Conselho Regional de Psicologia',
  emailContato: 'contato@dralilian.com.br',
  tempoRespostaMedio: 'Retorno acolhedor em até 2 horas úteis',
  whatsappNumero: '5511998765432',
  whatsappMensagemPadrao: 'Olá, Dra. Lilian! Gostaria de agendar um primeiro contato para conhecer o seu atendimento psicológico.',
  bioProfissional: {
    nome: 'Dra. Lilian',
    titulos: [
      'Graduada em Psicologia Clínica com mais de 12 anos de atuação contínua',
      'Especialista em Terapia Cognitivo-Comportamental e Regulação Emocional',
      'Formação em Fenomenologia Existencial e Abordagens Integrativas do Trauma',
      'Pioneira no conceito de Espaçoterapias: união de rigor científico e conforto sensorial'
    ],
    frasePessoal: 'Acredito que ninguém cura a dor ignorando sua existência. Minha missão é oferecer um solo firme e afetuoso onde você possa ser exatamente quem é, desarmar suas defesas e reconstruir seu bem-estar.',
    foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80'
  },
  modalidades: [
    {
      tipo: 'Online',
      descricao: 'Para todo o Brasil e exterior através de ambiente virtual criptografado, seguro e confortável.',
      destaque: 'Atendimento sem barreiras geográficas'
    },
    {
      tipo: 'Presencial',
      descricao: 'No consultório planejado sob arquitetura sensorial: iluminação suave, aromaterapia botânica e acústica acolhedora.',
      destaque: 'Experiência imersiva de calma'
    }
  ]
};

export const METRICAS_CLINICA = [
  {
    valor: 12,
    sufixo: '+',
    rotulo: 'Anos de Prática Clínica',
    descricao: 'Estudo contínuo, especializações e dedicação ao ser humano'
  },
  {
    valor: 3800,
    sufixo: '+',
    rotulo: 'Sessões Conduzidas',
    descricao: 'Histórias honradas com escuta atenta e sem pressa'
  },
  {
    valor: 98,
    sufixo: '%',
    rotulo: 'Evolução e Clareza',
    descricao: 'Pacientes que relatam alívio significativo do sofrimento'
  },
  {
    valor: 100,
    sufixo: '%',
    rotulo: 'Sigilo Profissional',
    descricao: 'Rigor ético absoluto sob diretrizes do Conselho Federal de Psicologia'
  }
];

export const AREAS_ATUACAO: AreaAtuacao[] = [
  {
    id: 'ansiedade',
    titulo: 'Ansiedade, Crises e Pânico',
    categoria: 'Regulação do Sistema Nervoso',
    tagline: 'Desarmar o alarme constante e devolver a serenidade ao seu peito.',
    descricao: 'A ansiedade não é um defeito de caráter, mas um sinal de que seu corpo tem estado em alerta contínuo por tempo demais. Através de técnicas cognitivas e regulação somática, desativamos o circuito do medo e restauramos a segurança interior.',
    sintomasComuns: [
      'Aperto no peito, falta de ar e taquicardia sem causa física',
      'Pensamentos catastróficos e sensação iminente de perda de controle',
      'Preocupação incessante com o futuro e ruminações exaustivas',
      'Tensão muscular crônica e insônia por mente hiperativa'
    ],
    beneficios: [
      'Mapeamento claro dos seus gatilhos emocionais',
      'Ferramentas práticas de autorregulação e respiração consciente',
      'Ressignificação de crenças que geram hipervigilância',
      'Retomada gradual da segurança em situações desafiadoras'
    ],
    tempoMedio: 'Sessões semanais de 50 minutos',
    icone: 'Activity',
    imagem: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'depressao',
    titulo: 'Depressão e Reconstrução da Vitalidade',
    categoria: 'Acolhimento da Dor & Sentido',
    tagline: 'Acolher a tristeza profunda para reencontrar o pulsar da vida.',
    descricao: 'Quando o mundo perde as cores e a energia parece esgotada, você não precisa fingir força. Oferecemos um espaço seguro para honrar seu cansaço, investigar as causas profundas do desânimo e reconectar-se, passo a passo, com a esperança.',
    sintomasComuns: [
      'Cansaço paralisante e perda do prazer nas atividades diárias',
      'Sensação de vazio existencial, culpa e autocrítica severa',
      'Isolamento social e dificuldade em iniciar tarefas simples',
      'Alterações drásticas no sono e no apetite'
    ],
    beneficios: [
      'Escuta atenta e validação das dores sem cobranças',
      'Ativação comportamental gradual e respeitosa ao seu ritmo',
      'Identificação de padrões de autodepreciação',
      'Resgate do sentimento de propósito e pertencimento'
    ],
    tempoMedio: 'Acompanhamento empático continuado',
    icone: 'HeartHandshake',
    imagem: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'casal',
    titulo: 'Terapia de Casal e Vínculos Afetivos',
    categoria: 'Relações & Comunicação Consciente',
    tagline: 'Transformar conflitos desgastantes em pontes de intimidade genuína.',
    descricao: 'Crises relacionais não significam necessariamente o fim do amor, mas sim que os velhos modos de diálogo não funcionam mais. Criamos uma mediação segura e neutra para que ambos possam falar do que dói e ser verdadeiramente escutados.',
    sintomasComuns: [
      'Discussões circulares sobre os mesmos tópicos sem resolução',
      'Distanciamento afetivo, frieza e perda da cumplicidade',
      'Rupturas de confiança e dificuldades após transições de vida',
      'Sensação de que o outro não compreende suas necessidades'
    ],
    beneficios: [
      'Comunicação não-violenta e redução das reatividades defensivas',
      'Clareza sobre os contratos invisíveis e expectativas mútuas',
      'Restauração do afeto, do toque e da vulnerabilidade segura',
      'Decisões maduras e conscientes sobre o futuro da relação'
    ],
    tempoMedio: 'Sessões de 60 a 75 minutos',
    icone: 'Users',
    imagem: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'burnout',
    titulo: 'Burnout e Sobrecarga Profissional',
    categoria: 'Saúde Mental no Trabalho',
    tagline: 'Desatar a corda da produtividade tóxica e salvar sua integridade.',
    descricao: 'Em um mundo que glorifica a exaustão, pausar é um ato de coragem e sobrevivência. Ajudamos profissionais a reconhecer os limites biológicos da mente, renegociar sua relação com o trabalho e curar o colapso do estresse crônico.',
    sintomasComuns: [
      'Esgotamento físico e emocional mesmo após dias de folga',
      'Cinismo, irritabilidade e sentimento de ineficácia profissional',
      'Dificuldade extrema de concentração e falhas frequentes de memória',
      'Insuficiência de ar ao pensar nas demandas de trabalho'
    ],
    beneficios: [
      'Estabelecimento de limites firmes e saudáveis no cotidiano',
      'Desconstrução da crença de que seu valor depende de produzir',
      'Recuperação da clareza mental e da criatividade genuína',
      'Elaboração de um plano prático de sustentabilidade profissional'
    ],
    tempoMedio: 'Intervenção com foco em regulação imediata',
    icone: 'Flame',
    imagem: 'https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'transicoes',
    titulo: 'Luto, Perdas e Transições Difíceis',
    categoria: 'Acolhimento de Mudanças',
    tagline: 'Acolher o fim de um capítulo com dignidade para abrir espaço ao novo.',
    descricao: 'Toda transição relevante — seja a perda de um ente querido, um divórcio, uma mudança de carreira ou de país — carrega um luto que precisa ser elaborado. Aqui você encontra amparo para atravessar o nevoeiro com respeito à sua dor.',
    sintomasComuns: [
      'Desorientação profunda diante de uma perda repentina ou esperada',
      'Sensação de desamparo, angústia e perda de identidade',
      'Cobrança social de "superação rápida" que gera culpa',
      'Dificuldade de vislumbrar um próximo passo com significado'
    ],
    beneficios: [
      'Elaboração gradual dos estágios do luto sem pressa artificial',
      'Espaço sagrado para honrar memórias e ressignificar laços',
      'Suporte para reconstrução da rotina e novos papéis de vida',
      'Ressurgimento de novos horizontes afetivos'
    ],
    tempoMedio: 'Espaço compassivo e individualizado',
    icone: 'Compass',
    imagem: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'autoconhecimento',
    titulo: 'Autoconhecimento e Regulação Emocional',
    categoria: 'Desenvolvimento Interior',
    tagline: 'Aprender a habitar a própria pele com compaixão e firmeza.',
    descricao: 'Para quem deseja parar de ser refém das próprias emoções e padrões autossabotadores. Um mergulho profundo nas suas narrativas internas para construir uma autoestima sólida, livre de comparações e com raízes firmes.',
    sintomasComuns: [
      'Vontade crônica de agradar aos outros em detrimento de si',
      'Dificuldade de dizer "não" e medo paralisante da rejeição',
      'Sensação persistente de inadequação ou síndrome do impostor',
      'Oscilações repentinas de humor sem entendimento da causa'
    ],
    beneficios: [
      'Identificação da sua bússola de valores fundamentais',
      'Autonomia emocional e diminuição da dependência de aprovação',
      'Comunicação de limites com calma, firmeza e elegância',
      'Relação de amizade e acolhimento com a própria história'
    ],
    tempoMedio: 'Jornada profunda de desenvolvimento',
    icone: 'Sparkles',
    imagem: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1000&q=80'
  }
];

export const PILARES_CLINICOS: PilarClinico[] = [
  {
    numero: '01',
    titulo: 'Prática Baseada em Evidências',
    subtitulo: 'A ciência como solo firme',
    descricao: 'Utilizamos protocolos validados internacionalmente pela Terapia Cognitivo-Comportamental de 3ª Onda, Terapia de Aceitação e Compromisso (ACT) e regulação neurobiológica do estresse.',
    icone: 'Brain'
  },
  {
    numero: '02',
    titulo: 'Fenomenologia do Cuidado',
    subtitulo: 'Você não é um diagnóstico',
    descricao: 'Antes de qualquer rótulo clínico, existe uma pessoa única, com sentimentos, memórias e dores singulares. O plano terapêutico se molda a você, jamais o oposto.',
    icone: 'UserCheck'
  },
  {
    numero: '03',
    titulo: 'Espaçoterapia Sensorial',
    subtitulo: 'Ambiente que cura pelos sentidos',
    descricao: 'A cura não acontece apenas nas palavras, mas no ambiente que acalma o sistema nervoso. Temperatura amena, iluminação bioclimática, som suave e plantas purificadoras criam um ninho de segurança.',
    icone: 'Sun'
  },
  {
    numero: '04',
    titulo: 'Vínculo Terapêutico Seguro',
    subtitulo: 'Um território livre de julgamento',
    descricao: 'A relação entre terapeuta e paciente é o maior preditor de sucesso clínico. Oferecemos um olhar acolhedor, onde nenhum pensamento é vergonhoso demais para ser compartilhado.',
    icone: 'ShieldCheck'
  }
];

export const PASSOS_JORNADA = [
  {
    etapa: 'Passo 01',
    titulo: 'Primeiro Contato Acolhedor',
    descricao: 'Envie uma mensagem via formulário ou WhatsApp. Em poucas horas alinhamos horários, esclarecemos dúvidas e confirmamos sua preferência (online ou presencial).'
  },
  {
    etapa: 'Passo 02',
    titulo: 'Sessão Inicial de Mapeamento',
    descricao: 'Nosso primeiro encontro é dedicado a ouvir suas urgências, compreender seu momento atual e estabelecer um vínculo de absoluta confiança e respeito.'
  },
  {
    etapa: 'Passo 03',
    titulo: 'Plano Terapêutico Sob Medida',
    descricao: 'Desenhamos juntos os objetivos do processo: seja o alívio imediato de sintomas de crise ou um trabalho profundo de ressignificação existencial.'
  },
  {
    etapa: 'Passo 04',
    titulo: 'Caminho de Florescimento Contínuo',
    descricao: 'Encontros regulares com ferramentas práticas para o seu dia a dia, celebração de cada conquista e fortalecimento da sua autonomia emocional.'
  }
];

export const DEPOIMENTOS: Depoimento[] = [
  {
    id: '1',
    autorAnonimizado: 'C. M., 34 anos',
    contexto: 'Tratamento de Ansiedade Generalizada',
    tempoTerapia: '8 meses de acompanhamento',
    destaque: 'Voltei a dormir uma noite inteira sem acordar com o coração aos pulos.',
    relato: 'Cheguei ao consultório da Dra. Lilian no ápice de crises de pânico que me impediam de dirigir. A delicadeza e a fundamentação técnica das sessões me deram chão quando eu achava que iria enlouquecer. Hoje compreendo meu corpo e retomei minha rotina com calma.'
  },
  {
    id: '2',
    autorAnonimizado: 'R. S. & F. T., casados há 11 anos',
    contexto: 'Terapia de Casal',
    tempoTerapia: '6 meses de acompanhamento',
    destaque: 'Aprendemos a conversar sem transformar qualquer discordância em guerra.',
    relato: 'Estávamos à beira do divórcio, magoados e sem paciência. O acompanhamento com a Dra. Lilian não buscou apontar culpados, mas sim nos ajudou a entender o que estava por trás das nossas defesas. Conseguimos nos reconectar com o carinho que nos uniu.'
  },
  {
    id: '3',
    autorAnonimizado: 'L. B., 42 anos',
    contexto: 'Recuperação de Burnout Executivo',
    tempoTerapia: '1 ano de acompanhamento',
    destaque: 'Percebi que descansar não é preguiça, é manutenção da vida.',
    relato: 'Eu vivia para entregar metas até meu corpo parar repentinamente. Com a Dra. Lilian encontrei um oásis de desaceleração. A abordagem acolhedora e o rigor clínico me ajudaram a repensar meus limites sem perder minha competência.'
  }
];

export const FAQS: FaqItem[] = [
  {
    categoria: 'Profissional Responsável',
    pergunta: 'As consultas são conduzidas diretamente pela Dra. Lilian?',
    resposta: 'Sim. Todo o processo terapêutico — desde a escuta inicial até o desenvolvimento do seu plano clínico — é conduzido diretamente pela Dra. Lilian (CRP 06/148920), assegurando continuidade, cuidado artesanal e máxima discrição.'
  },
  {
    categoria: 'Funcionamento Geral',
    pergunta: 'Como funciona a primeira sessão de acolhimento?',
    resposta: 'A primeira sessão com a Dra. Lilian é um momento suave para nos conhecermos. Você poderá compartilhar o que tem gerado desconforto, suas expectativas e dúvidas. Não há nenhuma obrigação de falar mais do que se sente confortável: o ritmo é sempre determinado por você.'
  },
  {
    categoria: 'Modalidades',
    pergunta: 'A terapia online tem a mesma eficácia da presencial?',
    resposta: 'Sim, amplas pesquisas científicas e a regulamentação do Conselho Federal de Psicologia (CFP) comprovam que a psicoterapia online apresenta índice de eficácia idêntico ao presencial. Você é atendido no conforto e privacidade do seu espaço pessoal através de plataforma criptografada.'
  },
  {
    categoria: 'Convênios & Reembolso',
    pergunta: 'O consultório aceita plano de saúde ou emite recibo para reembolso?',
    resposta: 'Realizamos atendimentos em modalidade particular para garantir dedicação exclusiva e sem a pressa dos planos. No entanto, fornecemos recibo detalhado com CRM/CRP para que você solicite reembolso integral ou parcial junto ao seu plano de saúde.'
  },
  {
    categoria: 'Duração e Frequência',
    pergunta: 'Qual a duração das consultas e a frequência recomendada?',
    resposta: 'As sessões individuais têm duração de 50 minutos. A terapia de casal costuma durar de 60 a 75 minutos. A frequência padrão recomendada no início do processo é semanal, garantindo a continuidade e a consolidação das transformações clínicas.'
  },
  {
    categoria: 'Ética e Sigilo',
    pergunta: 'Como é garantido o sigilo sobre tudo o que eu disser?',
    resposta: 'O sigilo profissional é um dever ético e legal inegociável, previsto no Código de Ética Profissional do Psicólogo (Art. 9º). Absolutamente tudo o que é conversado em sessão permanece estritamente confidencial.'
  },
  {
    categoria: 'Diagnóstico',
    pergunta: 'Preciso ter um diagnóstico ou encaminhamento psiquiátrico para começar?',
    resposta: 'Não. Você não precisa de um laudo, diagnóstico ou encaminhamento médico. O sofrimento emocional, o desejo de autoconhecimento ou a busca por clareza em um momento difícil já são motivos nobres e suficientes para iniciar a psicoterapia.'
  }
];
