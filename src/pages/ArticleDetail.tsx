import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { articles } from '@/data/articles';
import { WHATSAPP_URL } from '@/lib/constants';

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) return <Navigate to="/artigos" replace />;

  return (
    <Layout>
      <div className="bg-background-alt border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/artigos" className="hover:text-primary transition-colors flex items-center gap-1">
              <ArrowLeft size={14} /> Artigos
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">{article.title}</span>
          </div>
        </div>
      </div>

      <article className="container mx-auto px-4 py-10 md:py-14">
        <div className="max-w-2xl mx-auto">
          <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-secondary text-muted-foreground mb-4">
            {article.category}
          </span>
          <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <span className="flex items-center gap-1"><User size={14} /> {article.author}</span>
            <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(article.date).toLocaleDateString('pt-BR')}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {article.readingTime}</span>
          </div>

          <div className="prose-custom space-y-4">
            {article.content.map((block, i) => {
              if (block.startsWith('## ')) {
                return <h2 key={i} className="font-heading text-xl font-semibold text-foreground mt-8 mb-3">{block.replace('## ', '')}</h2>;
              }
              if (block.startsWith('**') && block.endsWith('**')) {
                return <p key={i} className="font-semibold text-foreground">{block.replace(/\*\*/g, '')}</p>;
              }
              if (block.startsWith('**')) {
                const parts = block.split('**');
                return (
                  <p key={i} className="text-muted-foreground leading-relaxed">
                    {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="text-foreground">{part}</strong> : part)}
                  </p>
                );
              }
              return <p key={i} className="text-muted-foreground leading-relaxed">{block}</p>;
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-2 mb-8">
            {article.tags.map(tag => (
              <span key={tag} className="px-2 py-1 rounded text-xs bg-secondary text-muted-foreground">{tag}</span>
            ))}
          </div>

          <div className="bg-primary rounded-lg p-6 text-center">
            <h3 className="font-heading text-lg font-bold text-primary-foreground mb-2">Precisa de ajuda com esse tema?</h3>
            <p className="text-primary-foreground/80 text-sm mb-4">Fale com a equipe da ICS Ambiental.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="gap-2">
                <MessageCircle size={16} /> WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ArticleDetail;
