import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import { services } from '@/data/services';
import { WHATSAPP_URL } from '@/lib/constants';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!service) return <Navigate to="/servicos" replace />;

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-background-alt border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/servicos" className="hover:text-primary transition-colors flex items-center gap-1">
              <ArrowLeft size={14} />
              Serviços
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">{service.title}</span>
          </div>
        </div>
      </div>

      <article className="container mx-auto px-4 py-10 md:py-14">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-secondary text-muted-foreground mb-4">
            {service.category}
          </span>
          <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {service.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{service.shortSummary}</p>

          {/* Problem */}
          <section className="mb-10">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">O problema que resolvemos</h2>
            {service.problemSolved.map((p, i) => (
              <p key={i} className="text-muted-foreground mb-3 leading-relaxed">{p}</p>
            ))}
          </section>

          {/* Description */}
          <section className="mb-10">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">O que fazemos</h2>
            {service.description.map((p, i) => (
              <p key={i} className="text-muted-foreground mb-3 leading-relaxed">{p}</p>
            ))}
            {service.targetAudience && (
              <div className="bg-secondary rounded-lg p-4 mt-4">
                <p className="text-sm font-medium text-foreground">Para quem é:</p>
                <p className="text-sm text-muted-foreground mt-1">{service.targetAudience}</p>
              </div>
            )}
          </section>

          {/* Deliverables */}
          <section className="mb-10">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">O que entregamos</h2>
            <ul className="space-y-2">
              {service.deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">{d}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Steps */}
          <section className="mb-10">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Etapas do processo</h2>
            <ol className="space-y-3">
              {service.steps.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground pt-0.5">{s}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Required Documents */}
          <section className="mb-10">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Documentos necessários</h2>
            <ul className="space-y-2">
              {service.requiredDocuments.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary">•</span>
                  {d}
                </li>
              ))}
            </ul>
          </section>

          {/* Timeline */}
          <section className="mb-10 bg-secondary rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <Clock size={18} className="text-primary" />
              <h2 className="font-heading text-lg font-semibold text-foreground">Prazo estimado</h2>
            </div>
            <p className="text-muted-foreground">{service.typicalTimeline}</p>
            <p className="text-xs text-muted-foreground mt-2 italic">
              * Prazos podem variar conforme órgão ambiental, complexidade do empreendimento e demanda do órgão.
            </p>
          </section>

          {/* FAQ */}
          {service.faq.length > 0 && (
            <section className="mb-10">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Perguntas frequentes</h2>
              <div className="space-y-2">
                {service.faq.map((f, i) => (
                  <div key={i} className="border border-border rounded-lg">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-4 text-left"
                    >
                      <span className="font-medium text-foreground text-sm">{f.q}</span>
                      {openFaq === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-4">
                        <p className="text-sm text-muted-foreground">{f.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="bg-primary rounded-lg p-6 md:p-8">
            <h2 className="font-heading text-xl font-bold text-primary-foreground mb-3">
              Precisa desse serviço?
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Fale conosco para um diagnóstico rápido e uma proposta sob medida.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto">
                  <MessageCircle size={18} />
                  WhatsApp
                </Button>
              </a>
            </div>
            <div className="bg-card rounded-lg p-5">
              <h3 className="font-heading text-base font-semibold text-foreground mb-3">Ou envie uma mensagem</h3>
              <ContactForm compact />
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
};

export default ServiceDetail;
