export interface NewsItem {
  id: string;
  title: string;
  source: string;
  date: string;
  externalLink: string;
  shortSummary: string;
  category: string;
  tags: string[];
  weeklyHighlight: boolean;
}

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'CONAMA publica nova resolução sobre padrões de qualidade do ar',
    source: 'Diário Oficial da União',
    date: '2025-02-17',
    externalLink: '#',
    shortSummary: 'Nova resolução atualiza os padrões nacionais de qualidade do ar, com impacto direto em processos de licenciamento de fontes fixas de emissão.',
    category: 'Legislação',
    tags: ['CONAMA', 'qualidade do ar', 'legislação'],
    weeklyHighlight: true,
  },
  {
    id: '2',
    title: 'IBAMA intensifica fiscalização sobre destinação de resíduos industriais',
    source: 'Agência Brasil',
    date: '2025-02-15',
    externalLink: '#',
    shortSummary: 'Operação nacional visa verificar a conformidade na destinação de resíduos industriais, com foco em geradores de grande porte.',
    category: 'Fiscalização',
    tags: ['IBAMA', 'resíduos industriais', 'fiscalização'],
    weeklyHighlight: true,
  },
  {
    id: '3',
    title: 'Novo sistema nacional de rastreabilidade de resíduos entra em fase de testes',
    source: 'MMA',
    date: '2025-02-12',
    externalLink: '#',
    shortSummary: 'O Ministério do Meio Ambiente inicia testes do sistema integrado de rastreabilidade de resíduos sólidos, previsto na PNRS.',
    category: 'Tecnologia',
    tags: ['rastreabilidade', 'SINIR', 'PNRS'],
    weeklyHighlight: false,
  },
  {
    id: '4',
    title: 'Estados avançam na regulamentação do licenciamento ambiental por adesão e compromisso',
    source: 'Portal Ambiental',
    date: '2025-02-10',
    externalLink: '#',
    shortSummary: 'Modalidade simplificada de licenciamento ganha adesão em mais estados, com potencial de agilizar a regularização de atividades de baixo impacto.',
    category: 'Licenciamento',
    tags: ['licenciamento', 'LAC', 'simplificação'],
    weeklyHighlight: false,
  },
  {
    id: '5',
    title: 'Mercado de créditos de carbono no Brasil ganha novo marco regulatório',
    source: 'Valor Econômico',
    date: '2025-02-08',
    externalLink: '#',
    shortSummary: 'Projeto de lei aprovado estabelece as bases do mercado regulado de carbono no Brasil, com impactos em diversos setores produtivos.',
    category: 'Legislação',
    tags: ['carbono', 'ESG', 'legislação'],
    weeklyHighlight: true,
  },
  {
    id: '6',
    title: 'Prazo para adequação ao PGRS é prorrogado em municípios de médio porte',
    source: 'Confederação Nacional de Municípios',
    date: '2025-02-05',
    externalLink: '#',
    shortSummary: 'Municípios com população entre 50 e 100 mil habitantes ganham prazo adicional para implantação do Plano Municipal de Gestão Integrada de Resíduos.',
    category: 'Resíduos',
    tags: ['PGRS', 'municípios', 'prazo'],
    weeklyHighlight: false,
  },
];
