import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL } from '@/lib/constants';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  /** Dados estruturados (schema.org) específicos da página */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

/**
 * Updates document head with SEO meta tags per page.
 */
const SEOHead = ({ title, description, canonical, image, type = 'website', noindex = false, jsonLd }: SEOHeadProps) => {
  const { pathname } = useLocation();
  const url = canonical ?? `${SITE_URL}${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`;
  const ogImage = image ? (image.startsWith('http') ? image : `${SITE_URL}${image}`) : DEFAULT_IMAGE;
  const jsonLdString = jsonLd ? JSON.stringify(jsonLd) : '';

  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta('description', description);
    setMeta('robots', noindex ? 'noindex, follow' : 'index, follow');
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:url', url, true);
    setMeta('og:type', type, true);
    setMeta('og:image', ogImage, true);
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = url;

    // JSON-LD da página
    document.getElementById('page-jsonld')?.remove();
    if (jsonLdString) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'page-jsonld';
      script.text = jsonLdString;
      document.head.appendChild(script);
    }
  }, [title, description, url, ogImage, type, noindex, jsonLdString]);

  return null;
};

export default SEOHead;
