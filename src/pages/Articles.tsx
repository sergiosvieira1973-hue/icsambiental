import { Link } from 'react-router-dom';
import { Calendar, Clock, Linkedin } from 'lucide-react';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';
import LinkedInEmbed from '@/components/LinkedInEmbed';
import { articles } from '@/data/articles';
import { linkedinPosts } from '@/data/linkedinPosts';
import heroArticles from '@/assets/hero-articles.jpg';

const Articles = () => {
  return (
    <Layout>
      <PageHero
        title="Artigos"
        description="Conteúdo técnico e prático sobre gestão ambiental, licenciamento e compliance."
        image={heroArticles}
      />

      {/* LinkedIn Posts Section */}
      {linkedinPosts.length > 0 && (
        <section className="container mx-auto px-4 py-10 border-b border-border">
          <div className="flex items-center gap-3 mb-6">
            <Linkedin size={24} className="text-[#0A66C2]" />
            <h2 className="font-heading text-xl font-bold text-foreground">Posts do LinkedIn</h2>
            <a
              href="https://www.linkedin.com/in/sergio-vieira-ambiental"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-sm text-primary hover:underline"
            >
              Ver perfil completo →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {linkedinPosts.map((post, index) => (
              <LinkedInEmbed key={index} postUrl={post.url} />
            ))}
          </div>
        </section>
      )}

      {/* Artigos escritos */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="font-heading text-xl font-bold text-foreground mb-6">Artigos</h2>
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
                <h3 className="font-heading text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
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
