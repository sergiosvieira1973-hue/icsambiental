import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Layout from '@/components/Layout';
import { services, categories } from '@/data/services';

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
      <section className="bg-background-alt border-b border-border">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Serviços</h1>
          <p className="text-muted-foreground max-w-2xl mb-8">
            Soluções completas em consultoria ambiental — do licenciamento à gestão operacional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative max-w-sm">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar serviço..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                !activeCategory ? 'bg-primary text-primary-foreground border-primary' : 'bg-card text-muted-foreground border-border hover:border-primary'
              }`}
            >
              Todos
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  activeCategory === cat ? 'bg-primary text-primary-foreground border-primary' : 'bg-card text-muted-foreground border-border hover:border-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

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
