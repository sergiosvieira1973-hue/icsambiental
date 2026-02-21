import { Shield, Target, MapPin, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { WHATSAPP_URL } from '@/lib/constants';
import { MessageCircle } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <section className="bg-background-alt border-b border-border">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Quem somos</h1>
          <p className="text-muted-foreground max-w-2xl">Consultoria ambiental com foco em resultado para empresas.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A ICS Serviços Especializados é uma empresa de consultoria ambiental especializada em atender outras empresas que precisam licenciar atividades, elaborar estudos e planos ambientais, gerenciar resíduos e manter a conformidade com a legislação ambiental brasileira.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nosso trabalho começa pela compreensão real do cenário de cada cliente. Não oferecemos soluções genéricas — cada projeto é tratado com análise técnica aprofundada, documentação organizada e acompanhamento ativo junto aos órgãos ambientais.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Acreditamos que consultoria ambiental de qualidade se mede pelo resultado: licença emitida, plano aprovado, operação regularizada. É isso que entregamos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Target size={24} className="text-primary" />
                <h2 className="font-heading text-lg font-semibold text-foreground">Missão</h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Oferecer consultoria ambiental técnica e acessível, traduzindo exigências regulatórias em soluções práticas para empresas de todos os portes.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Eye size={24} className="text-primary" />
                <h2 className="font-heading text-lg font-semibold text-foreground">Visão</h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ser referência em consultoria ambiental empresarial no Brasil, reconhecida pela clareza, eficiência e pelo comprometimento com o resultado.
              </p>
            </div>
          </div>

          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <Shield size={24} className="text-primary" />
              <h2 className="font-heading text-lg font-semibold text-foreground">Valores</h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
              {[
                'Rigor técnico em tudo que produzimos',
                'Transparência na comunicação',
                'Compromisso com prazos e resultados',
                'Ética e responsabilidade profissional',
                'Parceria genuína com o cliente',
                'Melhoria contínua dos processos',
              ].map((v, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary">•</span> {v}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <MapPin size={24} className="text-primary" />
              <h2 className="font-heading text-lg font-semibold text-foreground">Área de atuação</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              [ESTADOS/CIDADES ATENDIDOS — editar conforme abrangência real da empresa]
            </p>
          </div>

          <div className="text-center pt-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2">
                <MessageCircle size={18} />
                Falar com a ICS Serviços Especializados
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
