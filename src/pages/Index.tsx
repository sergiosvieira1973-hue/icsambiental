import { Link } from 'react-router-dom';
import { ArrowRight, Shield, FileCheck, Users, BarChart3, CheckCircle, Factory, Building2, Truck, Zap, Sprout, Wrench, ChevronRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import { services } from '@/data/services';
import { partners } from '@/data/partners';
import { WHATSAPP_URL } from '@/lib/constants';
import heroBg from '@/assets/hero-bg.jpg';

const featuredServices = services.filter(s => s.featured);

const trustBullets = [
  { icon: Shield, text: 'Conformidade garantida com legislação ambiental vigente' },
  { icon: FileCheck, text: 'Documentação técnica pronta para protocolar' },
  { icon: Users, text: 'Equipe multidisciplinar com experiência de campo' },
  { icon: BarChart3, text: 'Indicadores e relatórios para tomada de decisão' },
];

const whyBullets = [
  'Experiência prática em licenciamento, resíduos e gestão de contratos',
  'Documentação organizada e pronta para auditoria',
  'Acompanhamento do processo do início ao resultado',
  'Comunicação clara, você sabe em que pé está cada demanda',
  'Foco em resolver, não em complicar',
];

const steps = [
  { n: '01', title: 'Diagnóstico', desc: 'Entendemos seu cenário, riscos e objetivos.' },
  { n: '02', title: 'Proposta técnica', desc: 'Escopo, prazo e investimento claros.' },
  { n: '03', title: 'Levantamento de dados', desc: 'Visita técnica e coleta de informações.' },
  { n: '04', title: 'Elaboração', desc: 'Documentos, estudos e planos sob medida.' },
  { n: '05', title: 'Protocolo e acompanhamento', desc: 'Protocolo no órgão e gestão de prazos.' },
  { n: '06', title: 'Entrega e suporte', desc: 'Resultado em mãos, com suporte pós-entrega.' },
];

const segments = [
  { icon: Factory, label: 'Indústria' },
  { icon: Building2, label: 'Construção e Obras' },
  { icon: Truck, label: 'Logística' },
  { icon: Zap, label: 'Energia' },
  { icon: Sprout, label: 'Agronegócio' },
  { icon: Wrench, label: 'Serviços e Operações' },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-foreground/80" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="max-w-2xl">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6">
              Consultoria ambiental que resolve, do diagnóstico à licença na sua mão.
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Licenciamento, PGRS, gestão de resíduos e compliance ambiental para empresas que precisam de resultado, não de burocracia.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  <MessageCircle size={18} />
                  Solicitar orçamento
                </Button>
              </a>
              <Link to="/servicos">
                <Button size="lg" variant="hero-outline" className="w-full sm:w-auto gap-2">
                  Ver serviços
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-background-alt border-b border-border">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBullets.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <b.icon size={20} className="text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">Serviços em destaque</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Soluções ambientais completas para manter sua empresa em conformidade.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map(service => (
            <Link
              key={service.slug}
              to={`/servicos/${service.slug}`}
              className="group border border-border rounded-lg p-6 hover:shadow-md transition-shadow bg-card"
            >
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{service.shortSummary}</p>
              <div className="space-y-1.5 mb-4">
                {['Conformidade', 'Evidências', 'Acompanhamento'].map(tag => (
                  <div key={tag} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle size={12} className="text-accent" />
                    {tag}
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                Saiba mais <ChevronRight size={14} />
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/servicos">
            <Button variant="outline" size="lg" className="gap-2">
              Ver todos os serviços <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Why ICS */}
      <section className="bg-background-alt">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Por que a ICS Serviços Especializados
            </h2>
            <div className="space-y-4">
              {whyBullets.map((text, i) => (
                <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                  <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                  <p className="text-foreground font-medium">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">Como funciona</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(step => (
            <div key={step.n} className="relative p-6">
              <span className="font-heading text-4xl font-extrabold text-primary/10">{step.n}</span>
              <h3 className="font-heading text-lg font-semibold text-foreground mt-1 mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Segments */}
      <section className="bg-background-alt">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">Segmentos atendidos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {segments.map(seg => (
              <div key={seg.label} className="flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-lg">
                <seg.icon size={32} className="text-primary" />
                <span className="text-sm font-medium text-foreground text-center">{seg.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">Parcerias</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {partners.map(p => (
            <div key={p.name} className="w-28 h-20 rounded-lg bg-card border border-border flex items-center justify-center p-3" title={p.name}>
              <img src={p.logo} alt={p.name} className="max-h-full max-w-full object-contain" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Precisa regularizar, licenciar ou organizar a gestão ambiental da sua empresa?
              </h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Fale com a ICS Serviços Especializados. Diagnóstico rápido, proposta clara e acompanhamento até o resultado.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="gap-2">
                  <MessageCircle size={18} />
                  Chamar no WhatsApp
                </Button>
              </a>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Ou envie uma mensagem</h3>
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
