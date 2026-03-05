export interface Service {
  title: string;
  slug: string;
  category: string;
  shortSummary: string;
  icon: string;
  problemSolved: string[];
  description: string[];
  targetAudience?: string;
  deliverables: string[];
  steps: string[];
  requiredDocuments: string[];
  typicalTimeline: string;
  faq: { q: string; a: string }[];
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
}

export const categories = [
  'Licenciamento Ambiental',
  'Estudos e Relatórios Ambientais',
  'Resíduos Sólidos e Saúde',
  'Gestão Operacional e Contratos',
  'Treinamentos e Educação',
];

export const services: Service[] = [
  {
    title: 'PGRS, Plano de Gerenciamento de Resíduos Sólidos',
    slug: 'pgrs',
    category: 'Resíduos Sólidos e Saúde',
    shortSummary: 'Diagnóstico, classificação e plano operacional para o gerenciamento correto dos resíduos sólidos da sua empresa, em conformidade com a PNRS.',
    icon: 'Trash2',
    problemSolved: [
      'Empresas que geram resíduos sólidos precisam comprovar que fazem a destinação ambientalmente adequada. A ausência de um PGRS pode resultar em multas, embargo da operação e responsabilização civil e criminal.',
      'Muitos empreendimentos mantêm contratos de coleta sem saber se a destinação está de acordo com a legislação, expondo-se a passivos ambientais.',
    ],
    description: [
      'O PGRS é o documento que descreve as ações relativas ao manejo dos resíduos sólidos, contemplando os aspectos referentes à geração, segregação, acondicionamento, coleta, armazenamento, transporte, tratamento e disposição final ambientalmente adequada.',
      'A ICS Serviços Especializados elabora o plano completo — do diagnóstico de campo à entrega do documento final pronto para protocolar no órgão ambiental competente.',
    ],
    targetAudience: 'Indústrias, construtoras, comércios de grande porte, terminais logísticos, condomínios empresariais e qualquer empreendimento gerador de resíduos sólidos.',
    deliverables: [
      'Diagnóstico quali-quantitativo dos resíduos gerados',
      'Classificação conforme ABNT NBR 10.004',
      'Plano operacional de segregação, acondicionamento e armazenamento',
      'Programa de minimização e metas de redução',
      'Plano de contingência para situações emergenciais',
      'Documento final formatado para protocolo no órgão competente',
    ],
    steps: [
      'Visita técnica e diagnóstico in loco',
      'Levantamento e classificação dos resíduos',
      'Elaboração do plano operacional e metas',
      'Revisão interna e validação técnica',
      'Entrega do documento final',
      'Acompanhamento do protocolo junto ao órgão ambiental',
    ],
    requiredDocuments: [
      'CNPJ e contrato social atualizado',
      'Licença ambiental vigente (se houver)',
      'Contratos com transportadores e destinadores de resíduos',
      'Plantas de layout da área de armazenamento',
    ],
    typicalTimeline: '15 a 30 dias úteis',
    faq: [
      { q: 'Toda empresa precisa de PGRS?', a: 'A obrigatoriedade varia conforme legislação estadual/municipal e porte do empreendimento. Consulte-nos para verificar a aplicabilidade ao seu caso.' },
      { q: 'O PGRS tem validade?', a: 'Sim. Em geral, precisa ser revisado anualmente ou sempre que houver alteração significativa no processo produtivo.' },
      { q: 'A ICS Serviços Especializados acompanha a aprovação?', a: 'Sim. Acompanhamos todo o processo de protocolo e eventuais complementações solicitadas pelo órgão.' },
    ],
    featured: true,
    seoTitle: 'PGRS, Plano de Gerenciamento de Resíduos Sólidos | ICS Serviços Especializados',
    seoDescription: 'Elaboração completa de PGRS conforme a PNRS. Diagnóstico, classificação de resíduos e plano operacional. Solicite orçamento.',
  },
  {
    title: 'PGRSS, Plano de Gerenciamento de Resíduos de Serviços de Saúde',
    slug: 'pgrss',
    category: 'Resíduos Sólidos e Saúde',
    shortSummary: 'Plano especializado para estabelecimentos de saúde, garantindo conformidade com as normas da ANVISA e CONAMA.',
    icon: 'HeartPulse',
    problemSolved: [
      'Estabelecimentos de saúde geram resíduos com risco biológico, químico e perfurocortante que exigem manejo diferenciado. A falta de um PGRSS pode levar ao fechamento do estabelecimento.',
      'A fiscalização sanitária e ambiental é rigorosa e a documentação precisa estar sempre atualizada e acessível.',
    ],
    description: [
      'O PGRSS contempla todas as etapas do manejo dos resíduos de serviços de saúde, desde a geração até a disposição final, conforme as resoluções da ANVISA e do CONAMA.',
      'A ICS Serviços Especializados possui experiência com hospitais, clínicas, laboratórios e demais estabelecimentos geradores de RSS.',
    ],
    deliverables: [
      'Classificação dos resíduos conforme grupos (A, B, C, D, E)',
      'Procedimentos de segregação e acondicionamento por grupo',
      'Plano de capacitação para equipe do estabelecimento',
      'Programa de saúde e segurança ocupacional relacionado',
      'Documento final conforme exigências da vigilância sanitária',
    ],
    steps: [
      'Visita técnica e levantamento dos setores geradores',
      'Classificação e quantificação dos RSS',
      'Elaboração do plano de manejo por grupo',
      'Treinamento da equipe interna',
      'Entrega e acompanhamento junto aos órgãos fiscalizadores',
    ],
    requiredDocuments: [
      'Alvará sanitário e licença de funcionamento',
      'Contratos de coleta e tratamento de RSS',
      'Registro de vacinação da equipe de manejo',
    ],
    typicalTimeline: '15 a 25 dias úteis',
    faq: [
      { q: 'Clínicas pequenas precisam de PGRSS?', a: 'Sim. Todo estabelecimento gerador de RSS precisa do PGRSS, independente do porte.' },
      { q: 'O plano substitui o alvará sanitário?', a: 'Não. O PGRSS é complementar ao alvará e costuma ser requisito para sua renovação.' },
    ],
    featured: true,
    seoTitle: 'PGRSS, Resíduos de Serviços de Saúde | ICS Serviços Especializados',
    seoDescription: 'Elaboração de PGRSS conforme ANVISA e CONAMA para clínicas, hospitais e laboratórios. Solicite orçamento.',
  },
  {
    title: 'LP, Licença Prévia',
    slug: 'licenca-previa',
    category: 'Licenciamento Ambiental',
    shortSummary: 'Primeira etapa do licenciamento ambiental, com avaliação de viabilidade e localização do empreendimento.',
    icon: 'FileSearch',
    problemSolved: [
      'Iniciar obras ou atividades sem a Licença Prévia pode resultar em embargo, multas pesadas e responsabilização criminal dos sócios.',
      'A LP garante que o empreendimento é viável do ponto de vista ambiental antes de investimentos significativos.',
    ],
    description: [
      'A Licença Prévia (LP) é concedida na fase preliminar do planejamento do empreendimento, atestando a viabilidade ambiental e estabelecendo condicionantes que deverão ser atendidas nas fases seguintes.',
      'A ICS Serviços Especializados conduz todo o processo, da caracterização do empreendimento à obtenção da licença junto ao órgão competente.',
    ],
    deliverables: [
      'Estudo de viabilidade ambiental da localização',
      'Caracterização do empreendimento e das atividades',
      'Preenchimento e protocolo dos formulários exigidos',
      'Elaboração de estudos complementares quando necessário',
      'Acompanhamento até a emissão da LP',
    ],
    steps: [
      'Consulta prévia ao órgão ambiental',
      'Caracterização do empreendimento e da área',
      'Elaboração da documentação técnica',
      'Protocolo e acompanhamento do processo',
    ],
    requiredDocuments: [
      'Projeto básico do empreendimento',
      'Documentos de propriedade ou posse da área',
      'Certidão de uso e ocupação do solo (prefeitura)',
    ],
    typicalTimeline: '30 a 90 dias úteis',
    faq: [
      { q: 'A LP autoriza o início das obras?', a: 'Não. A LP atesta a viabilidade ambiental. Para iniciar obras, é necessário obter a Licença de Instalação (LI).' },
    ],
    featured: false,
    seoTitle: 'Licença Prévia (LP) — Licenciamento Ambiental | ICS Serviços Especializados',
    seoDescription: 'Assessoria completa para obtenção de Licença Prévia. Viabilidade ambiental do seu empreendimento.',
  },
  {
    title: 'LS — Licença Simplificada',
    slug: 'licenca-simplificada',
    category: 'Licenciamento Ambiental',
    shortSummary: 'Licenciamento ambiental em procedimento único para atividades de menor impacto, agilizando a regularização.',
    icon: 'FileCheck2',
    problemSolved: [
      'Empreendimentos de menor potencial poluidor precisam se regularizar, mas o processo trifásico pode ser desproporcional ao impacto da atividade.',
      'A Licença Simplificada permite a regularização em etapa única, reduzindo prazo e custo.',
    ],
    description: [
      'A LS é aplicável a atividades de baixo potencial poluidor ou degradador, conforme critérios do órgão ambiental. Reúne as fases de LP, LI e LO em um único procedimento.',
      'A ICS Serviços Especializados verifica a elegibilidade do empreendimento e conduz todo o processo de obtenção.',
    ],
    deliverables: [
      'Verificação de enquadramento na modalidade simplificada',
      'Elaboração da documentação técnica simplificada',
      'Protocolo e acompanhamento do processo',
    ],
    steps: [
      'Verificação do enquadramento',
      'Levantamento documental e técnico',
      'Protocolo e acompanhamento',
      'Entrega da licença',
    ],
    requiredDocuments: [
      'CNPJ e documentação do empreendimento',
      'Descrição resumida da atividade',
      'Certidão de uso do solo',
    ],
    typicalTimeline: '15 a 45 dias úteis',
    faq: [
      { q: 'Como saber se minha atividade se enquadra na LS?', a: 'O enquadramento depende do órgão ambiental e do tipo/porte da atividade. Fazemos essa análise preliminar gratuitamente.' },
    ],
    featured: false,
    seoTitle: 'Licença Simplificada (LS) | ICS Serviços Especializados',
    seoDescription: 'Licenciamento ambiental simplificado para atividades de menor impacto. Processo ágil e completo.',
  },
  {
    title: 'LO — Licença de Operação',
    slug: 'licenca-operacao',
    category: 'Licenciamento Ambiental',
    shortSummary: 'Licença que autoriza a operação efetiva do empreendimento após verificação do cumprimento das condicionantes ambientais.',
    icon: 'CheckCircle',
    problemSolved: [
      'Operar sem LO configura infração ambiental grave, sujeita a multa, embargo e responsabilização dos gestores.',
      'Muitas empresas perdem prazos de renovação ou não acompanham condicionantes, gerando passivos.',
    ],
    description: [
      'A Licença de Operação (LO) é a etapa final do licenciamento trifásico, autorizando a operação do empreendimento após comprovação de que todas as condicionantes da LP e LI foram cumpridas.',
      'A ICS Serviços Especializados cuida desde a organização das evidências de cumprimento até o acompanhamento pós-emissão.',
    ],
    deliverables: [
      'Organização e compilação das evidências de cumprimento das condicionantes',
      'Relatório técnico de conformidade',
      'Preenchimento e protocolo dos formulários',
      'Acompanhamento de vistorias do órgão ambiental',
      'Gestão de prazos e renovações',
    ],
    steps: [
      'Auditoria interna de cumprimento das condicionantes',
      'Organização do dossiê de evidências',
      'Protocolo do pedido de LO',
      'Acompanhamento da análise e vistoria',
      'Gestão da renovação periódica',
    ],
    requiredDocuments: [
      'LP e LI vigentes',
      'Relatórios de cumprimento das condicionantes',
      'Outorga de uso de recursos hídricos (se aplicável)',
      'Certificado do Corpo de Bombeiros',
    ],
    typicalTimeline: '30 a 60 dias úteis',
    faq: [
      { q: 'A LO tem prazo de validade?', a: 'Sim. A validade varia conforme o órgão e a atividade, geralmente de 4 a 10 anos, sendo necessária a renovação antes do vencimento.' },
      { q: 'O que acontece se a LO vencer?', a: 'A operação sem licença válida é infração ambiental. É essencial iniciar o processo de renovação com antecedência.' },
    ],
    featured: true,
    seoTitle: 'Licença de Operação (LO) — Licenciamento Ambiental | ICS Serviços Especializados',
    seoDescription: 'Obtenção e renovação de Licença de Operação. Conformidade ambiental garantida para sua empresa.',
  },
  {
    title: 'RCA — Relatório de Controle Ambiental',
    slug: 'rca',
    category: 'Estudos e Relatórios Ambientais',
    shortSummary: 'Estudo técnico exigido no licenciamento para empreendimentos de médio impacto, com diagnóstico e medidas mitigadoras.',
    icon: 'FileText',
    problemSolved: [
      'Órgãos ambientais frequentemente exigem o RCA como condição para prosseguir com o licenciamento, e documentos incompletos ou mal elaborados geram indeferimentos e atrasos.',
    ],
    description: [
      'O Relatório de Controle Ambiental (RCA) apresenta o diagnóstico ambiental da área de influência do empreendimento e propõe medidas de controle, mitigação e monitoramento dos impactos identificados.',
      'A ICS Serviços Especializados elabora o RCA com rigor técnico, reduzindo o risco de complementações e agilizando a análise pelo órgão ambiental.',
    ],
    deliverables: [
      'Diagnóstico ambiental dos meios físico, biótico e socioeconômico',
      'Identificação e avaliação dos impactos ambientais',
      'Proposição de medidas mitigadoras e compensatórias',
      'Programas de monitoramento ambiental',
      'Documento final formatado conforme Termo de Referência do órgão',
    ],
    steps: [
      'Análise do Termo de Referência emitido pelo órgão',
      'Levantamento de dados primários e secundários',
      'Elaboração do diagnóstico e avaliação de impactos',
      'Redação e revisão técnica do RCA',
      'Protocolo e acompanhamento',
    ],
    requiredDocuments: [
      'Termo de Referência do órgão ambiental',
      'Projeto do empreendimento',
      'ART do responsável técnico',
    ],
    typicalTimeline: '30 a 60 dias úteis',
    faq: [
      { q: 'Qual a diferença entre RCA e EIA/RIMA?', a: 'O RCA é exigido para empreendimentos de médio impacto, enquanto o EIA/RIMA se aplica a empreendimentos de alto impacto. O escopo do RCA é mais simplificado.' },
    ],
    featured: true,
    seoTitle: 'RCA — Relatório de Controle Ambiental | ICS Serviços Especializados',
    seoDescription: 'Elaboração de RCA para licenciamento ambiental. Diagnóstico e medidas mitigadoras com rigor técnico.',
  },
  {
    title: 'RAS — Relatório Ambiental Simplificado',
    slug: 'ras',
    category: 'Estudos e Relatórios Ambientais',
    shortSummary: 'Estudo ambiental simplificado para empreendimentos de pequeno impacto, exigido em processos de licenciamento simplificado.',
    icon: 'FileCheck',
    problemSolved: [
      'Empreendimentos de menor porte também precisam de estudos ambientais, mas o escopo pode ser simplificado quando o órgão assim determina.',
    ],
    description: [
      'O RAS é um estudo ambiental de menor complexidade, aplicável a empreendimentos com impacto ambiental reduzido. Apresenta diagnóstico resumido e medidas de controle proporcionais ao porte da atividade.',
    ],
    deliverables: [
      'Diagnóstico ambiental simplificado',
      'Identificação dos principais impactos',
      'Medidas de controle e mitigação',
      'Documento formatado conforme exigências do órgão',
    ],
    steps: [
      'Análise de enquadramento e Termo de Referência',
      'Levantamento de dados e visita técnica',
      'Elaboração do RAS',
      'Protocolo e acompanhamento',
    ],
    requiredDocuments: [
      'Termo de Referência (quando emitido)',
      'Projeto simplificado do empreendimento',
      'Documentação do terreno',
    ],
    typicalTimeline: '15 a 30 dias úteis',
    faq: [
      { q: 'Quando o RAS é aceito no lugar do RCA?', a: 'O órgão ambiental define qual estudo é necessário com base no tipo, porte e localização do empreendimento.' },
    ],
    featured: false,
    seoTitle: 'RAS — Relatório Ambiental Simplificado | ICS Serviços Especializados',
    seoDescription: 'RAS para licenciamento simplificado. Estudo ambiental ágil e conforme para empreendimentos de menor impacto.',
  },
  {
    title: 'PCA — Plano de Controle Ambiental',
    slug: 'pca',
    category: 'Estudos e Relatórios Ambientais',
    shortSummary: 'Plano que detalha as medidas de controle ambiental a serem implementadas durante a instalação e operação do empreendimento.',
    icon: 'ClipboardCheck',
    problemSolved: [
      'O PCA transforma as medidas mitigadoras propostas nos estudos ambientais em ações concretas, com cronograma e responsáveis definidos. Sem ele, as condicionantes ficam apenas no papel.',
    ],
    description: [
      'O PCA é o documento executivo que detalha como as medidas de controle ambiental serão implementadas. Ele é frequentemente exigido como condicionante da LP ou LI e precisa demonstrar viabilidade técnica e operacional.',
    ],
    deliverables: [
      'Detalhamento das medidas de controle por impacto',
      'Cronograma de implementação',
      'Definição de responsáveis e recursos',
      'Indicadores de acompanhamento',
      'Plano de monitoramento vinculado',
    ],
    steps: [
      'Revisão das condicionantes e estudos anteriores',
      'Detalhamento técnico de cada medida',
      'Definição de cronograma e indicadores',
      'Revisão e entrega',
    ],
    requiredDocuments: [
      'Estudos ambientais anteriores (RCA, EIA)',
      'Condicionantes da LP ou LI',
      'Projeto executivo do empreendimento',
    ],
    typicalTimeline: '20 a 40 dias úteis',
    faq: [
      { q: 'O PCA é o mesmo que o PRAD?', a: 'Não. O PCA trata de medidas de controle durante a operação. O PRAD (Plano de Recuperação de Área Degradada) é específico para recuperação de áreas já impactadas.' },
    ],
    featured: false,
    seoTitle: 'PCA — Plano de Controle Ambiental | ICS Serviços Especializados',
    seoDescription: 'Elaboração de PCA com medidas concretas de controle ambiental, cronograma e indicadores de acompanhamento.',
  },
  {
    title: 'Gestão de Resíduos',
    slug: 'gestao-residuos',
    category: 'Gestão Operacional e Contratos',
    shortSummary: 'Gestão operacional completa dos resíduos: da segregação na fonte à rastreabilidade da destinação final, com indicadores e relatórios.',
    icon: 'Recycle',
    problemSolved: [
      'Empresas com múltiplas unidades ou alto volume de resíduos precisam de gestão sistemática para manter compliance, reduzir custos e comprovar destinação adequada.',
      'Sem gestão integrada, há risco de não conformidade em auditorias e fiscalizações.',
    ],
    description: [
      'A ICS Serviços Especializados implanta e opera sistemas de gestão de resíduos sob medida para cada cliente. O serviço vai além da elaboração do PGRS — inclui a operação cotidiana, a rastreabilidade da destinação e a geração de indicadores de desempenho.',
    ],
    targetAudience: 'Indústrias, construtoras, hospitais, condomínios empresariais e operações com múltiplas unidades geradoras.',
    deliverables: [
      'Implantação de sistema de segregação e acondicionamento',
      'Gestão de contratos com transportadores e destinadores',
      'Rastreabilidade documental (MTR, CDF, certificados)',
      'Relatórios periódicos com indicadores de desempenho',
      'Treinamento contínuo de equipes operacionais',
    ],
    steps: [
      'Diagnóstico da situação atual',
      'Projeto do sistema de gestão',
      'Implantação e treinamento',
      'Operação e monitoramento contínuo',
      'Relatórios e ajustes periódicos',
    ],
    requiredDocuments: [
      'PGRS vigente',
      'Contratos de destinação existentes',
      'Licenças ambientais',
    ],
    typicalTimeline: 'Implantação em 30 a 60 dias; operação contínua',
    faq: [
      { q: 'A ICS assume a responsabilidade sobre os resíduos?', a: 'A responsabilidade legal é compartilhada entre gerador, transportador e destinador, conforme a PNRS. A ICS garante a gestão documental e operacional para minimizar riscos.' },
    ],
    featured: true,
    seoTitle: 'Gestão de Resíduos — Operação e Rastreabilidade | ICS Serviços Especializados',
    seoDescription: 'Gestão operacional de resíduos com rastreabilidade, indicadores e compliance. Serviço contínuo para sua empresa.',
  },
  {
    title: 'Educação Ambiental — Treinamentos',
    slug: 'educacao-ambiental',
    category: 'Treinamentos e Educação',
    shortSummary: 'Capacitações e treinamentos em gestão ambiental, resíduos, compliance e boas práticas para equipes operacionais e gestores.',
    icon: 'GraduationCap',
    problemSolved: [
      'Equipes sem capacitação adequada comprometem a eficácia dos programas ambientais e aumentam o risco de não conformidades.',
      'Muitas condicionantes de licença exigem comprovação de treinamentos periódicos.',
    ],
    description: [
      'A ICS Serviços Especializados oferece treinamentos sob medida, presenciais ou remotos, para equipes operacionais, técnicas e de gestão. Os conteúdos são adaptados ao setor e às necessidades específicas de cada cliente.',
    ],
    deliverables: [
      'Programa de treinamento personalizado',
      'Material didático e apostilas',
      'Certificados de participação',
      'Avaliação de aprendizado',
      'Relatório para comprovação junto a órgãos fiscalizadores',
    ],
    steps: [
      'Levantamento de necessidades de treinamento',
      'Desenvolvimento do conteúdo programático',
      'Realização dos treinamentos',
      'Avaliação e emissão de certificados',
      'Relatório de execução',
    ],
    requiredDocuments: [
      'Lista de participantes',
      'Condicionantes de licença que exijam treinamentos',
    ],
    typicalTimeline: '7 a 15 dias úteis para planejamento; execução conforme agenda',
    faq: [
      { q: 'Os treinamentos podem ser online?', a: 'Sim. Oferecemos formatos presencial, remoto e híbrido, conforme a necessidade do cliente.' },
      { q: 'Vocês emitem certificado?', a: 'Sim. Todos os participantes recebem certificado com carga horária e conteúdo programático.' },
    ],
    featured: false,
    seoTitle: 'Treinamentos e Educação Ambiental | ICS Serviços Especializados',
    seoDescription: 'Capacitações em gestão ambiental, resíduos e compliance para equipes. Certificados e relatórios inclusos.',
  },
  {
    title: 'Gestão de Contratos de Coleta de Resíduos Urbanos',
    slug: 'gestao-contratos-coleta',
    category: 'Gestão Operacional e Contratos',
    shortSummary: 'Supervisão técnica e operacional de contratos de coleta de resíduos urbanos para municípios e concessionárias.',
    icon: 'Truck',
    problemSolved: [
      'Contratos de coleta de resíduos urbanos envolvem grandes volumes financeiros e exigem fiscalização técnica rigorosa para garantir a qualidade do serviço e o cumprimento das cláusulas contratuais.',
      'Municípios frequentemente carecem de equipe técnica própria para esse acompanhamento.',
    ],
    description: [
      'A ICS Serviços Especializados atua na supervisão técnica de contratos de coleta, transporte e destinação de resíduos urbanos, verificando indicadores de desempenho, conformidade operacional e cumprimento de cláusulas contratuais.',
      'O serviço inclui relatórios periódicos, auditorias de campo e suporte técnico para decisões contratuais.',
    ],
    targetAudience: 'Prefeituras, autarquias de limpeza urbana e concessionárias de serviços públicos.',
    deliverables: [
      'Plano de fiscalização e indicadores de desempenho',
      'Auditorias de campo periódicas',
      'Relatórios técnicos de acompanhamento',
      'Pareceres para decisões contratuais',
      'Suporte em processos de renovação ou licitação',
    ],
    steps: [
      'Análise do contrato e definição de indicadores',
      'Implantação do plano de fiscalização',
      'Auditorias e acompanhamento de campo',
      'Relatórios periódicos e pareceres',
      'Suporte técnico contínuo',
    ],
    requiredDocuments: [
      'Contrato vigente com anexos',
      'Termos de Referência da licitação',
      'Relatórios anteriores de fiscalização (se houver)',
    ],
    typicalTimeline: 'Implantação em 15 a 30 dias; acompanhamento contínuo',
    faq: [
      { q: 'Vocês atuam em todo o Brasil?', a: 'Sim. Temos experiência com contratos em diferentes estados e municípios. Consulte-nos sobre disponibilidade para sua região.' },
    ],
    featured: true,
    seoTitle: 'Gestão de Contratos de Coleta de Resíduos Urbanos | ICS Serviços Especializados',
    seoDescription: 'Supervisão técnica de contratos de coleta de resíduos urbanos. Indicadores, auditorias e relatórios.',
  },
];
