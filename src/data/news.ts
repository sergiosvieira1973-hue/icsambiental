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
    title: 'Brasil regulamenta mercado de créditos de carbono com nova lei',
    source: 'Agência Brasil',
    date: '2025-12-23',
    externalLink: 'https://agenciabrasil.ebc.com.br/geral/noticia/2024-12/brasil-regulamenta-mercado-de-creditos-de-carbono',
    shortSummary: 'Nova legislação estabelece o Sistema Brasileiro de Comércio de Emissões (SBCE), regulamentando o mercado de carbono no país.',
    category: 'Legislação',
    tags: ['carbono', 'SBCE', 'legislação'],
    weeklyHighlight: true,
  },
  {
    id: '2',
    title: 'IBAMA atualiza sistema de licenciamento ambiental digital',
    source: 'Gov.br - IBAMA',
    date: '2025-02-10',
    externalLink: 'https://www.gov.br/ibama/pt-br/assuntos/laf/licenciamento-ambiental',
    shortSummary: 'O IBAMA moderniza o processo de licenciamento ambiental federal com plataforma digital integrada para agilizar análises.',
    category: 'Licenciamento',
    tags: ['IBAMA', 'licenciamento', 'digital'],
    weeklyHighlight: true,
  },
  {
    id: '3',
    title: 'CONAMA aprova novas diretrizes para gestão de resíduos sólidos',
    source: 'MMA - Ministério do Meio Ambiente',
    date: '2025-01-20',
    externalLink: 'https://www.gov.br/mma/pt-br',
    shortSummary: 'Resolução do CONAMA atualiza critérios para elaboração de planos de gerenciamento de resíduos sólidos em empreendimentos industriais.',
    category: 'Resíduos',
    tags: ['CONAMA', 'resíduos sólidos', 'PGRS'],
    weeklyHighlight: true,
  },
  {
    id: '4',
    title: 'Política Nacional de Pagamento por Serviços Ambientais avança na regulamentação',
    source: 'Câmara dos Deputados',
    date: '2025-01-15',
    externalLink: 'https://www.camara.leg.br/noticias/temas/meio-ambiente',
    shortSummary: 'Regulamentação da Lei nº 14.119/2021 define critérios para programas de pagamento por serviços ambientais no Brasil.',
    category: 'Legislação',
    tags: ['PSA', 'serviços ambientais', 'legislação'],
    weeklyHighlight: false,
  },
  {
    id: '5',
    title: 'SINIR avança na integração nacional de dados sobre resíduos',
    source: 'Gov.br - MMA',
    date: '2025-01-08',
    externalLink: 'https://sinir.gov.br/',
    shortSummary: 'O Sistema Nacional de Informações sobre a Gestão dos Resíduos Sólidos amplia a integração com estados e municípios para rastreabilidade.',
    category: 'Tecnologia',
    tags: ['SINIR', 'rastreabilidade', 'resíduos'],
    weeklyHighlight: false,
  },
];
