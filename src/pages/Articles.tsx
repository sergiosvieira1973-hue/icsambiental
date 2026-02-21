import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, Clock } from 'lucide-react';
import Layout from '@/components/Layout';
import { articles } from '@/data/articles';

const Articles = () => {
  return (
    <Layout>
      <section className="bg-background-alt border-b border-border">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Artigos</h1>
          <p className="text-muted-foreground max-w-2xl">
            Conteúdo técnico e prático sobre gestão ambiental, licenciamento e compliance.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map(article => (
            <Link
              key={article.slug}
              to={`/artigos/${article.slug}`}
              className="group border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-card"
            >
              <div className="bg-primary/5 h-40 flex items-center justify-center">
                <span className="font-heading text-5xl font-bold text-primary/20">{article.category.charAt(0)}</span>
              </div>
              <div className="p-5">
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-secondary text-muted-foreground mb-3">
                  {article.category}
                </span>
                <h2 className="font-heading text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {new Date(article.date).toLocaleDateString('pt-BR')}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {article.readingTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Articles;
