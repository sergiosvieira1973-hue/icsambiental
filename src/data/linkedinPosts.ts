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
    url: 'https://www.linkedin.com/posts/sergio-vieira-ambiental_meioambiente-sustentabilidade-ics-activity-7301756953093222400',
    label: 'Post exemplo 1',
  },
  {
    url: 'https://www.linkedin.com/posts/sergio-vieira-ambiental_gestaoambiental-licenciamento-compliance-activity-7301756953093222401',
    label: 'Post exemplo 2',
  },
];
