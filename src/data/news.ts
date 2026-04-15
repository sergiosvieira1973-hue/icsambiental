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
    title: 'Novo Plano Estadual de Resíduos Sólidos será lançado em 2026',
    source: 'InvestSP',
    date: '2026-04-01',
    externalLink: 'https://investsp.org.br/novo-plano-estadual-de-residuos-solidos-sera-lancado-em-2026/',
    shortSummary: 'O plano orienta políticas estaduais de gestão de resíduos, com consulta pública prevista para o 1º semestre.',
    category: 'Legislação',
    tags: ['resíduos', 'plano estadual', 'legislação'],
    weeklyHighlight: true,
  },
  {
    id: '2',
    title: 'Logística Reversa em 2026: O que Esperar do Futuro da Sustentabilidade no Brasil',
    source: 'IBER Brasil',
    date: '2026-04-02',
    externalLink: 'https://iberbrasil.org.br/blog/2026/01/05/logistica-reversa-em-2026-o-que-esperar-do-futuro-da-sustentabilidade-no-brasil/',
    shortSummary: 'Tecnologia, rastreamento e ESG impulsionam eficiência na gestão de resíduos perigosos como baterias.',
    category: 'Logística Reversa',
    tags: ['logística reversa', 'ESG', 'sustentabilidade'],
    weeklyHighlight: true,
  },
  {
    id: '3',
    title: 'Brasil adota padrões ESG IFRS S1 e S2 a partir de 2026',
    source: 'Contábeis.com.br',
    date: '2026-04-03',
    externalLink: 'https://www.contabeis.com.br/noticias/74422/brasil-adota-padroes-esg-ifrs-s1-e-s2-a-partir-de-2026/',
    shortSummary: 'Empresas de capital aberto integram ESG às demonstrações financeiras obrigatoriamente.',
    category: 'ESG',
    tags: ['IFRS', 'ESG', 'relatório financeiro'],
    weeklyHighlight: true,
  },
  {
    id: '4',
    title: 'Grupo de discussão de resíduos sólidos organiza 1ª reunião de 2026 com foco na inovação',
    source: 'Governo do Paraná',
    date: '2026-04-04',
    externalLink: 'https://www.parana.pr.gov.br/aen/Noticia/Grupo-de-discussao-de-residuos-solidos-organiza-1a-reuniao-de-2026-com-foco-na-inovacao',
    shortSummary: 'Encontro em Curitiba prioriza inovação para reduzir lixões e volume em aterros.',
    category: 'Resíduos',
    tags: ['resíduos sólidos', 'inovação', 'lixões'],
    weeklyHighlight: true,
  },
  {
    id: '5',
    title: 'Transporte e ESG: A Logística Reversa de Ativos em 2026',
    source: 'Ecobraz Informa',
    date: '2026-04-05',
    externalLink: 'https://ecobrazinforma.org/noticia/862/transporte-e-esg-a-logistica-reversa-de-ativos-em-2026',
    shortSummary: 'Setor de logística gerencia passivos de telemetria e baterias para compliance Escopo 3.',
    category: 'Logística Reversa',
    tags: ['logística reversa', 'ESG', 'transporte'],
    weeklyHighlight: false,
  },
  {
    id: '6',
    title: 'Legislação brasileira reforça a agenda empresarial de ESG em 2026',
    source: 'Diário Indústria e Comércio',
    date: '2026-04-06',
    externalLink: 'https://www.diarioinduscom.com.br/Noticias/879847/legislacao_brasileira_reforca_a_agenda_empresarial_de_esg_em_2026',
    shortSummary: 'Resolução CVM 193 exige relatórios de sustentabilidade a partir de 2027 (exercício 2026).',
    category: 'Legislação',
    tags: ['CVM', 'ESG', 'relatório sustentabilidade'],
    weeklyHighlight: false,
  },
  {
    id: '7',
    title: 'Tendências ESG 2026: O ano em que a sustentabilidade sai do discurso',
    source: 'Crédito de Logística Reversa',
    date: '2026-04-07',
    externalLink: 'https://www.creditodelogisticareversa.com.br/post/tendencias-esg-2026-o-ano-em-que-a-sustentabilidade-sai-do-discurso-e-passa-a-impactar-custo-risco-e-retorno',
    shortSummary: 'Logística reversa e rastreabilidade impactam custo, risco e retorno financeiro.',
    category: 'ESG',
    tags: ['ESG', 'tendências', 'logística reversa'],
    weeklyHighlight: false,
  },
  {
    id: '8',
    title: 'Empresas brasileiras enfrentam novo desafio: relatório de sustentabilidade obrigatório',
    source: 'PwC Brasil',
    date: '2026-04-08',
    externalLink: 'https://www.pwc.com.br/pt/sala-de-imprensa/release/empresas-brasileiras-enfrentam-novo-desafio-relatorio-de-sustentabilidade-obrigatorio-2026',
    shortSummary: 'Empresas listadas na B3 adotam normas internacionais CBPS a partir de janeiro 2026.',
    category: 'ESG',
    tags: ['B3', 'CBPS', 'relatório sustentabilidade'],
    weeklyHighlight: false,
  },
  {
    id: '9',
    title: 'Gestão de resíduos pode levar municípios a reduzir emissão de gases',
    source: 'Agência Brasil',
    date: '2026-04-09',
    externalLink: 'https://agenciabrasil.ebc.com.br/meio-ambiente/noticia/2026-01/gestao-de-residuos-pode-levar-municipios-reduzir-emissao-de-gases',
    shortSummary: 'Sistemas avançados podem cortar emissões em até 61,7%.',
    category: 'Resíduos',
    tags: ['resíduos', 'emissões', 'clima'],
    weeklyHighlight: false,
  },
  {
    id: '10',
    title: 'Resíduos sólidos no Brasil: Legislações, desafios e perspectivas',
    source: 'UFFS Periódicos',
    date: '2026-04-10',
    externalLink: 'https://periodicos.uffs.edu.br/index.php/RGES/article/download/15427/10125/67938',
    shortSummary: 'Análise acadêmica sobre o panorama de legislações, desafios e perspectivas dos resíduos sólidos no Brasil.',
    category: 'Resíduos',
    tags: ['resíduos sólidos', 'legislação', 'pesquisa'],
    weeklyHighlight: false,
  },
];
