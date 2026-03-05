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
    title: '2026: o ano em que a agenda ambiental entra no preço dos ativos',
    source: 'CNN Brasil',
    date: '2026-01-15',
    externalLink: 'https://www.cnnbrasil.com.br/blogs/pedro-cortes/economia/2026-o-ano-em-que-a-agenda-ambiental-entra-no-preco-dos-ativos/',
    shortSummary: 'Análise sobre como a agenda ambiental passa a impactar diretamente a precificação de ativos no mercado brasileiro em 2026.',
    category: 'ESG',
    tags: ['ESG', 'ativos', 'agenda ambiental'],
    weeklyHighlight: true,
  },
  {
    id: '2',
    title: 'Sustentabilidade entra no modo execução e redefine gestão dos negócios em 2026',
    source: 'Fecomercio/SP',
    date: '2026-01-10',
    externalLink: 'https://www.fecomercio.com.br/noticia/sustentabilidade-entra-no-modo-execucao-e-redefine-gestao-dos-negocios-em-2026',
    shortSummary: 'A sustentabilidade deixa de ser pauta estratégica e passa a integrar a execução operacional das empresas em 2026.',
    category: 'Sustentabilidade',
    tags: ['sustentabilidade', 'gestão', 'negócios'],
    weeklyHighlight: true,
  },
  {
    id: '3',
    title: 'Empresas com agenda ESG começam adaptação à nova lei de licenciamento ambiental',
    source: 'Exame',
    date: '2026-01-08',
    externalLink: 'https://exame.com/bussola/empresas-com-agenda-esg-comecam-adaptacao-a-nova-lei-de-licenciamento-ambiental/',
    shortSummary: 'Empresas com práticas ESG consolidadas iniciam adaptação à nova legislação de licenciamento ambiental no Brasil.',
    category: 'Licenciamento',
    tags: ['ESG', 'licenciamento', 'legislação'],
    weeklyHighlight: true,
  },
  {
    id: '4',
    title: 'Cinco tendências (e desafios) de sustentabilidade para 2026',
    source: 'Capital Reset',
    date: '2026-01-05',
    externalLink: 'https://capitalreset.uol.com.br/empresas/cinco-tendencias-e-desafios-de-sustentabilidade-para-2026/',
    shortSummary: 'Panorama das principais tendências e desafios que moldarão a agenda de sustentabilidade corporativa ao longo de 2026.',
    category: 'Sustentabilidade',
    tags: ['tendências', 'sustentabilidade', '2026'],
    weeklyHighlight: false,
  },
  {
    id: '5',
    title: 'Coemas define prioridades para 2026 e defende foco na implementação de novos marcos legais',
    source: 'CNI',
    date: '2026-02-12',
    externalLink: 'https://noticias.portaldaindustria.com.br/noticias/sustentabilidade/coemas-define-prioridades-para-2026-e-defende-foco-na-implementacao-de-novos-marcos-legais/',
    shortSummary: 'A Comissão de Meio Ambiente da CNI estabelece prioridades para 2026 com foco na implementação dos novos marcos legais ambientais.',
    category: 'Legislação',
    tags: ['COEMAS', 'CNI', 'marcos legais'],
    weeklyHighlight: false,
  },
  {
    id: '6',
    title: 'Gestão de resíduos sólidos urbanos em 2026: digitalização, rastreabilidade e economia circular',
    source: 'Estadão Blue Studio',
    date: '2026-02-20',
    externalLink: 'https://bluestudio.estadao.com.br/agencia-de-comunicacao/saftec-digital/gestao-de-residuos-solidos-urbanos-em-2026-digitalizacao-rastreabilidade-e-economia-circular',
    shortSummary: 'Como a digitalização e rastreabilidade estão transformando a gestão de resíduos sólidos urbanos rumo à economia circular.',
    category: 'Resíduos',
    tags: ['resíduos', 'digitalização', 'economia circular'],
    weeklyHighlight: false,
  },
  {
    id: '7',
    title: 'MMA realiza reunião sobre perspectivas climáticas para 2026 e risco de incêndios no país',
    source: 'Ministério do Meio Ambiente',
    date: '2026-02-25',
    externalLink: 'https://www.gov.br/mma/pt-br/noticias/mma-realiza-reuniao-sobre-perspectivas-climaticas-para-2026-e-risco-de-incendios-no-pais',
    shortSummary: 'O MMA discute cenários climáticos para 2026 e estratégias de prevenção de incêndios florestais no território brasileiro.',
    category: 'Clima',
    tags: ['MMA', 'clima', 'incêndios'],
    weeklyHighlight: false,
  },
  {
    id: '8',
    title: 'Sustentabilidade corporativa em 2026: materialidade, inovabilidade e resiliência estratégica',
    source: 'Fast Company Brasil',
    date: '2026-03-01',
    externalLink: 'https://fastcompanybrasil.com/impacto/sustentabilidade-corporativa-em-2026-materialidade-inovabilidade-e-resiliencia-estrategica/',
    shortSummary: 'Análise sobre os pilares de materialidade, inovação e resiliência que definem a sustentabilidade corporativa em 2026.',
    category: 'ESG',
    tags: ['sustentabilidade corporativa', 'materialidade', 'resiliência'],
    weeklyHighlight: false,
  },
  {
    id: '9',
    title: 'Tendências ESG 2026: o ano em que a sustentabilidade sai do discurso e passa a impactar custo, risco e retorno',
    source: 'Crédito de Logística Reversa',
    date: '2026-03-03',
    externalLink: 'https://www.creditodelogisticareversa.com.br/post/tendencias-esg-2026-o-ano-em-que-a-sustentabilidade-sai-do-discurso-e-passa-a-impactar-custo-risco-e-retorno',
    shortSummary: 'ESG em 2026 deixa de ser narrativa e passa a impactar diretamente custos operacionais, riscos e retorno financeiro das empresas.',
    category: 'ESG',
    tags: ['ESG', 'tendências', 'custo', 'risco'],
    weeklyHighlight: false,
  },
  {
    id: '10',
    title: 'Certificação de Empresas B fica mais rigorosa em 2026: veja o que muda',
    source: 'Exame',
    date: '2026-02-28',
    externalLink: 'https://exame.com/esg/certificacao-de-empresas-b-fica-mais-rigorosa-em-2026-veja-o-que-muda/',
    shortSummary: 'A certificação B Corp aumenta o rigor dos critérios em 2026, exigindo maior comprometimento das empresas com impacto socioambiental.',
    category: 'Certificação',
    tags: ['Empresa B', 'certificação', 'B Corp'],
    weeklyHighlight: false,
  },
];
