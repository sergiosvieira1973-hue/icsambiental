import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';
import { services, categories } from '@/data/services';
import heroServices from '@/assets/hero-services.jpg';

const Services = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return services.filter(s => {
      const matchesSearch = !search || s.title.toLowerCase().includes(search.toLowerCase()) || s.shortSummary.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !activeCategory || s.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <Layout>
      <PageHero
        title="Serviços"
        description="Soluções completas em consultoria ambiental, do licenciamento à gestão operacional."
        image={heroServices}
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-6">
          <div className="relative max-w-sm">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-foreground/50" />
            <Input
              placeholder="Buscar serviço..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9 bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
              !activeCategory ? 'bg-primary-foreground text-foreground border-primary-foreground' : 'bg-white/10 text-primary-foreground border-white/20 hover:border-white/40'
            }`}
          >
            Todos
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                activeCategory === cat ? 'bg-primary-foreground text-foreground border-primary-foreground' : 'bg-white/10 text-primary-foreground border-white/20 hover:border-white/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </PageHero>

      <section className="container mx-auto px-4 py-10">
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">Nenhum serviço encontrado.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(service => (
              <Link
                key={service.slug}
                to={`/servicos/${service.slug}`}
                className="group border border-border rounded-lg p-6 hover:shadow-md transition-shadow bg-card"
              >
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-secondary text-muted-foreground mb-3">
                  {service.category}
                </span>
                <h2 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{service.shortSummary}</p>
                <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                  Saiba mais <ChevronRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Services;
