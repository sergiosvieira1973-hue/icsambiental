import licenciamentoImg from '@/assets/articles/licenciamento.jpg';
import pgrsImg from '@/assets/articles/pgrs.jpg';
import condicionantesImg from '@/assets/articles/condicionantes.jpg';

export interface Article {
  title: string;
  slug: string;
  coverImage?: string;
  excerpt: string;
  content: string[];
  category: string;
  tags: string[];
  date: string;
  readingTime: string;
  author: string;
  seoTitle: string;
  seoDescription: string;
}

export const articles: Article[] = [
  {
    title: 'Licenciamento ambiental: o que costuma travar processos e como evitar retrabalho',
    slug: 'licenciamento-ambiental-como-evitar-retrabalho',
    coverImage: licenciamentoImg,
    excerpt: 'Entenda os motivos mais comuns de atrasos no licenciamento ambiental e como preparar um processo mais assertivo desde o início.',
    content: [
      '## Por que processos de licenciamento atrasam?',
      'O licenciamento ambiental é uma das etapas mais críticas para qualquer empreendimento que dependa de autorização ambiental para operar. No entanto, é também uma das que mais sofrem com atrasos — muitas vezes evitáveis.',
      'Os motivos mais recorrentes para travamentos incluem: documentação incompleta no protocolo inicial, estudos ambientais que não atendem ao Termo de Referência do órgão, falta de articulação entre os consultores e o empreendedor, e desconhecimento dos prazos e fluxos internos do órgão ambiental.',
      '## Documentação incompleta: o erro mais comum',
      'Protocolar um pedido de licença sem a documentação completa é a principal causa de atrasos. O órgão ambiental emite uma exigência de complementação, o empreendedor leva semanas para reunir os documentos, e o processo volta para o fim da fila de análise.',
      'A solução é simples na teoria, mas exige disciplina: antes de protocolar, faça um checklist rigoroso baseado no Termo de Referência e nos precedentes do órgão para atividades semelhantes.',
      '## Estudos ambientais fora do escopo',
      'Outro problema frequente é a elaboração de estudos que não atendem ao que o órgão solicitou. Cada Termo de Referência tem especificidades que precisam ser atendidas pontualmente. Estudos genéricos ou copiados de outros processos costumam gerar pedidos de complementação.',
      '## A importância do acompanhamento ativo',
      'Protocolar e esperar não é estratégia. É fundamental acompanhar ativamente o andamento do processo, responder rapidamente a qualquer solicitação e manter canal aberto com a equipe técnica do órgão.',
      '## Como a ICS Serviços Especializados trabalha',
      'Na ICS, cada processo de licenciamento começa com uma análise detalhada do cenário regulatório aplicável, levantamento prévio de toda a documentação necessária e elaboração de estudos sob medida para o Termo de Referência. Acompanhamos cada etapa até a emissão da licença — e além dela, na gestão de condicionantes.',
      'Se sua empresa precisa licenciar uma atividade e quer evitar surpresas no caminho, entre em contato conosco para uma avaliação inicial sem compromisso.',
    ],
    category: 'Licenciamento',
    tags: ['licenciamento ambiental', 'compliance', 'gestão ambiental'],
    date: '2025-01-15',
    readingTime: '6 min',
    author: 'Equipe ICS Serviços Especializados',
    seoTitle: 'Licenciamento ambiental: como evitar retrabalho | ICS Serviços Especializados',
    seoDescription: 'Motivos comuns de atraso no licenciamento ambiental e como preparar um processo assertivo.',
  },
  {
    title: 'PGRS na prática: evidências que ajudam em auditoria e fiscalização',
    slug: 'pgrs-evidencias-auditoria-fiscalizacao',
    coverImage: pgrsImg,
    excerpt: 'Saiba quais registros e controles manter para comprovar a conformidade do seu PGRS em auditorias internas e fiscalizações ambientais.',
    content: [
      '## O PGRS como ferramenta de gestão, não apenas documento',
      'O Plano de Gerenciamento de Resíduos Sólidos (PGRS) é frequentemente tratado como um documento burocrático — elaborado para atender a uma exigência legal e arquivado até a próxima renovação. Na prática, essa abordagem é um risco.',
      'Um PGRS eficaz funciona como ferramenta de gestão: orienta a operação, serve de referência para treinamentos e fornece a base documental para auditorias e fiscalizações.',
      '## Quais evidências manter atualizadas',
      'Em uma auditoria ou fiscalização, os principais documentos que comprovam a conformidade incluem:',
      '**Manifestos de Transporte de Resíduos (MTR):** comprova que cada carga de resíduo foi transportada e destinada por empresas licenciadas. Mantenha os MTR organizados por período e tipo de resíduo.',
      '**Certificados de Destinação Final (CDF):** emitidos pelo destinador, comprovam que o resíduo chegou ao destino e foi tratado/disposto adequadamente.',
      '**Licenças dos transportadores e destinadores:** cópias atualizadas das licenças ambientais de todas as empresas da cadeia de destinação.',
      '**Registros de treinamento:** atas, listas de presença e fotos que comprovem a capacitação da equipe.',
      '**Planilhas de controle de geração:** registros periódicos (mensais, no mínimo) de volumes gerados por tipo de resíduo.',
      '## Organização é a chave',
      'O volume de documentos pode ser grande, especialmente em operações com muitos tipos de resíduos. A organização em pastas físicas e/ou digitais por período e por tipo de resíduo é essencial.',
      'Planilhas simples de controle, alimentadas mensalmente, já fazem uma diferença enorme na hora de uma fiscalização — demonstram que a empresa tem gestão ativa, não apenas um plano no papel.',
      '## Indicadores que demonstram evolução',
      'Além de manter a documentação em dia, calcule indicadores que demonstrem evolução: taxa de reciclagem, custo por tonelada destinada, redução na geração. Esses números contam uma história de melhoria contínua e impressionam positivamente auditores.',
      'A ICS Serviços Especializados ajuda seus clientes a implantar rotinas de controle simples e eficazes, com indicadores sob medida. Fale conosco.',
    ],
    category: 'Resíduos',
    tags: ['PGRS', 'resíduos sólidos', 'auditoria', 'compliance'],
    date: '2025-02-01',
    readingTime: '7 min',
    author: 'Equipe ICS Serviços Especializados',
    seoTitle: 'PGRS na prática: evidências para auditoria | ICS Serviços Especializados',
    seoDescription: 'Registros e controles essenciais para comprovar conformidade do PGRS em auditorias e fiscalizações.',
  },
  {
    title: 'Como organizar condicionantes e prazos sem perder controle operacional',
    slug: 'organizar-condicionantes-prazos',
    excerpt: 'Um método prático para não deixar condicionantes de licença ambiental virarem passivos por falta de acompanhamento.',
    content: [
      '## O desafio das condicionantes',
      'Toda licença ambiental vem acompanhada de condicionantes — obrigações que o empreendedor precisa cumprir dentro de prazos específicos. Podem ser relatórios periódicos, implantação de programas ambientais, análises laboratoriais, entre outras.',
      'O problema é que muitas empresas recebem a licença, comemoram, e deixam as condicionantes para depois. Quando se dão conta, os prazos estão vencidos e a empresa está em situação irregular.',
      '## Por que isso acontece',
      'As condicionantes costumam ser numerosas e com prazos variados. Sem um sistema de acompanhamento, é comum perder o controle. Além disso, a responsabilidade pelo cumprimento nem sempre está claramente atribuída — cada condicionante pode envolver áreas diferentes da empresa.',
      '## Um método simples que funciona',
      'O método que recomendamos aos nossos clientes é direto:',
      '**1. Planilha-mestra de condicionantes:** liste todas as condicionantes com prazo, responsável, status e evidência de cumprimento. Pode ser uma planilha ou sistema — o importante é ser acessível e atualizado.',
      '**2. Alertas antecipados:** configure lembretes para 30, 15 e 7 dias antes do vencimento de cada condicionante. Isso dá tempo para providenciar o que for necessário.',
      '**3. Responsável designado:** cada condicionante deve ter um "dono" — a pessoa que será cobrada pelo cumprimento, mesmo que precise de apoio de outras áreas.',
      '**4. Pasta de evidências:** para cada condicionante cumprida, arquive a evidência (relatório, análise, foto, protocolo) de forma organizada. Na renovação da licença ou em uma fiscalização, ter tudo organizado economiza tempo e evita estresse.',
      '## O papel da consultoria',
      'Uma consultoria ambiental experiente agrega valor nesse processo ao manter a visão do todo — ela conhece os padrões de fiscalização, sabe quais condicionantes são mais críticas e pode alertar para riscos que a equipe interna não percebe.',
      'A ICS Serviços Especializados oferece o serviço de gestão de condicionantes como parte do acompanhamento pós-licença. Se você tem condicionantes pendentes ou quer evitar que elas virem um passivo, entre em contato.',
    ],
    category: 'Gestão',
    tags: ['condicionantes', 'licença ambiental', 'gestão operacional'],
    date: '2025-02-10',
    readingTime: '5 min',
    author: 'Equipe ICS Serviços Especializados',
    seoTitle: 'Como organizar condicionantes de licença ambiental | ICS Serviços Especializados',
    seoDescription: 'Método prático para acompanhar condicionantes e prazos de licenças ambientais sem perder controle.',
  },
];
