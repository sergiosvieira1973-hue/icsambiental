import { useState, useMemo } from 'react';
import { ExternalLink, Calendar, AlertTriangle, Star } from 'lucide-react';
import Layout from '@/components/Layout';
import { newsItems } from '@/data/news';

const allCategories = Array.from(new Set(newsItems.map(n => n.category)));
const highlights = newsItems.filter(n => n.weeklyHighlight);

const News = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return newsItems.filter(n => !activeCategory || n.category === activeCategory);
  }, [activeCategory]);

  return (
    <Layout>
      <section className="bg-background-alt border-b border-border">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Notícias</h1>
          <p className="text-muted-foreground max-w-2xl">
            Resumo de notícias ambientais relevantes para empresas.
          </p>
          <div className="flex items-start gap-2 mt-4 bg-secondary border border-border rounded-lg p-3">
            <AlertTriangle size={16} className="text-muted-foreground shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground">
              Links externos. A ICS Ambiental apenas organiza e resume as notícias publicadas por fontes terceiras.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        {/* Weekly highlights */}
        {highlights.length > 0 && (
          <div className="mb-10">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Star size={20} className="text-primary" /> Resumo da semana
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {highlights.map(n => (
                <a
                  key={n.id}
                  href={n.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-primary/20 rounded-lg p-5 hover:border-primary/40 transition-colors bg-card"
                >
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-2">
                    {n.category}
                  </span>
                  <h3 className="font-heading text-sm font-semibold text-foreground mb-2">{n.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{n.shortSummary}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar size={10} /> {new Date(n.date).toLocaleDateString('pt-BR')}</span>
                    <span className="text-primary flex items-center gap-1">Fonte <ExternalLink size={10} /></span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${!activeCategory ? 'bg-primary text-primary-foreground border-primary' : 'bg-card text-muted-foreground border-border hover:border-primary'}`}
          >
            Todas
          </button>
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${activeCategory === cat ? 'bg-primary text-primary-foreground border-primary' : 'bg-card text-muted-foreground border-border hover:border-primary'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* All news */}
        <div className="space-y-4">
          {filtered.map(n => (
            <a
              key={n.id}
              href={n.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col sm:flex-row sm:items-start gap-4 border border-border rounded-lg p-5 hover:shadow-sm transition-shadow bg-card"
            >
              <div className="flex-1">
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-secondary text-muted-foreground mb-2">
                  {n.category}
                </span>
                <h3 className="font-heading text-base font-semibold text-foreground mb-1">{n.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{n.shortSummary}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{n.source}</span>
                  <span className="flex items-center gap-1"><Calendar size={10} /> {new Date(n.date).toLocaleDateString('pt-BR')}</span>
                </div>
              </div>
              <ExternalLink size={16} className="text-primary shrink-0 mt-1" />
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default News;
