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
  externalLink?: string;
}

export const articles: Article[] = [
  {
    title: 'Como organizar condicionantes e prazos sem perder controle operacional',
    slug: 'organizar-condicionantes-prazos',
    coverImage: condicionantesImg,
    excerpt: 'Um método prático para não deixar condicionantes de licença ambiental virarem passivos por falta de acompanhamento.',
    content: [],
    category: 'Gestão',
    tags: ['condicionantes', 'licença ambiental', 'gestão operacional'],
    date: '2025-02-10',
    readingTime: '5 min',
    author: 'Equipe ICS Serviços Especializados',
    seoTitle: 'Como organizar condicionantes de licença ambiental | ICS Serviços Especializados',
    seoDescription: 'Método prático para acompanhar condicionantes e prazos de licenças ambientais sem perder controle.',
    externalLink: 'https://www.gov.br/ibama/pt-br',
  },
];
