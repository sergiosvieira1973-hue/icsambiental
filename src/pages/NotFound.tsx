import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const NotFound = () => (
  <Layout>
    <SEOHead
      title="Página não encontrada | ICS Serviços Especializados"
      description="A página que você procurou não existe ou mudou de endereço."
      noindex
    />
    <section className="container mx-auto px-4 py-24 text-center">
      <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Página não encontrada</h1>
      <p className="text-muted-foreground mb-8">O endereço pode ter mudado ou não existe mais.</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link to="/"><Button size="lg">Voltar ao início</Button></Link>
        <Link to="/servicos"><Button size="lg" variant="outline">Ver serviços</Button></Link>
      </div>
    </section>
  </Layout>
);

export default NotFound;
