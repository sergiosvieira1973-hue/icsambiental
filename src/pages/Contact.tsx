import { MessageCircle, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import SEOHead from '@/components/SEOHead';
import { WHATSAPP_URL, WHATSAPP_MESSAGE, EMAIL, PHONE_DISPLAY } from '@/lib/constants';
import { toast } from '@/hooks/use-toast';
import heroContact from '@/assets/hero-contact.jpg';

const Contact = () => {
  const copyMessage = () => {
    navigator.clipboard.writeText(WHATSAPP_MESSAGE);
    toast({ title: 'Copiado!', description: 'Mensagem copiada para a área de transferência.' });
  };

  return (
    <Layout>
      <SEOHead
        title="Contato | ICS Serviços Especializados"
        description="Entre em contato com a ICS Serviços Especializados para orçamentos de consultoria ambiental, licenciamento, PGRS e gestão de resíduos."
      />
      <PageHero
        title="Contato"
        description="Quer um orçamento ou tirar uma dúvida técnica? Chama a gente."
        image={heroContact}
      />

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-6">Envie uma mensagem</h2>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4">WhatsApp</h2>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  <MessageCircle size={18} />
                  {PHONE_DISPLAY}
                </Button>
              </a>
              <div className="mt-4 bg-secondary border border-border rounded-lg p-4">
                <p className="text-xs text-muted-foreground mb-2">Mensagem sugerida</p>
                <p className="text-sm text-foreground italic mb-3">"{WHATSAPP_MESSAGE}"</p>
                <Button variant="outline" size="sm" onClick={copyMessage} className="gap-2">
                  <Copy size={14} /> Copiar mensagem
                </Button>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4">E-mail</h2>
              <a href={`mailto:${EMAIL}`} className="text-primary hover:underline font-medium">
                {EMAIL}
              </a>
            </div>

            <div className="bg-secondary border border-border rounded-lg p-5">
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">Horário de atendimento</h3>
              <p className="text-sm text-muted-foreground">
                Segunda a sexta, das 8h às 18h.<br />
                Mensagens fora do horário serão respondidas no próximo dia útil.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
