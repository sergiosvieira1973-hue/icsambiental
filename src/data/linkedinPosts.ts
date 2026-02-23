export interface LinkedInPost {
  /** The full URL of the LinkedIn post */
  url: string;
  /** A short label for internal reference */
  label?: string;
}

// Cole aqui os links dos seus posts do LinkedIn.
// Exemplo: { url: 'https://www.linkedin.com/posts/sergio-vieira-ambiental_meioambiente-activity-123456789', label: 'Post sobre meio ambiente' }
export const linkedinPosts: LinkedInPost[] = [
  {
    url: 'https://www.linkedin.com/posts/sergio-vieira-ambiental_esg-economiacircular-gestaoambiental-ugcPost-7431502143016202240-I-g3',
    label: 'ESG e Economia Circular',
  },
  {
    url: 'https://www.linkedin.com/posts/sergio-vieira-ambiental_sustentabilidadecorporativa-gestaoambiental-activity-7430343050322698242-Kirh',
    label: 'Sustentabilidade Corporativa',
  },
  {
    url: 'https://www.linkedin.com/posts/sergio-vieira-ambiental_esg-sustentabilidade-gestaoambiental-activity-7428191194360246272-fRC0',
    label: 'ESG e Sustentabilidade',
  },
];
