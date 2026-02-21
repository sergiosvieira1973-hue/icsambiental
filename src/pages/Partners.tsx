import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import { partners } from '@/data/partners';

const Partners = () => {
  return (
    <Layout>
      <section className="bg-background-alt border-b border-border">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Parcerias</h1>
          <p className="text-muted-foreground max-w-2xl">Empresas e instituições que confiam no nosso trabalho.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {partners.map(p => (
            <div key={p.name} className="border border-border rounded-lg p-6 bg-card">
              <div className="w-20 h-20 rounded-lg bg-secondary flex items-center justify-center mb-4 p-2">
                <img src={p.logo} alt={p.name} className="max-h-full max-w-full object-contain" loading="lazy" />
              </div>
              <h2 className="font-heading text-base font-semibold text-foreground mb-2">{p.name}</h2>
              <p className="text-sm text-muted-foreground">{p.shortDescription}</p>
            </div>
          ))}
        </div>

        <div className="max-w-lg mx-auto bg-background-alt border border-border rounded-lg p-8">
          <h2 className="font-heading text-xl font-bold text-foreground mb-2 text-center">Quer ser parceiro?</h2>
          <p className="text-sm text-muted-foreground text-center mb-6">
            Preencha o formulário e nossa equipe entrará em contato.
          </p>
          <ContactForm compact />
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
