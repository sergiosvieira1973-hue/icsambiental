import endomaqLogo from '@/assets/partners/endomaq.png';
import beloneLogo from '@/assets/partners/belone.jpg';
import ibemfLogo from '@/assets/partners/ibemf.jpg';
import greenSinergyLogo from '@/assets/partners/green-sinergy.png';
import belfordRoxoLogo from '@/assets/partners/belford-roxo.png';
import vitalLogo from '@/assets/partners/vital.jpg';
import servioesteLogo from '@/assets/partners/servioeste.png';

export interface Partner {
  name: string;
  shortDescription: string;
  link: string;
  logo: string;
  initials: string;
}

export const partners: Partner[] = [
  {
    name: 'ENDOMAQ – Serviços e Empreendimentos Ltda',
    shortDescription: 'Empresa parceira na prestação de serviços especializados.',
    link: '#',
    logo: endomaqLogo,
    initials: 'EN',
  },
  {
    name: 'BELONE Ambiental',
    shortDescription: 'Parceira em soluções e serviços ambientais.',
    link: '#',
    logo: beloneLogo,
    initials: 'BA',
  },
  {
    name: 'IBEMF – Instituto Brasileiro de Estudos para o Mercado Financeiro',
    shortDescription: 'Parceiro institucional em estudos e capacitações.',
    link: '#',
    logo: ibemfLogo,
    initials: 'IB',
  },
  {
    name: 'Green Sinergy',
    shortDescription: 'Parceira em soluções sustentáveis e inovação ambiental.',
    link: '#',
    logo: greenSinergyLogo,
    initials: 'GS',
  },
  {
    name: 'Prefeitura de Belford Roxo',
    shortDescription: 'Parceria institucional em gestão de resíduos urbanos.',
    link: '#',
    logo: belfordRoxoLogo,
    initials: 'BR',
  },
  {
    name: 'Vital Engenharia Ambiental',
    shortDescription: 'Parceira em engenharia e projetos ambientais.',
    link: '#',
    logo: vitalLogo,
    initials: 'VE',
  },
  {
    name: 'Servioeste',
    shortDescription: 'Parceira em serviços de coleta e destinação de resíduos.',
    link: '#',
    logo: servioesteLogo,
    initials: 'SO',
  },
];
