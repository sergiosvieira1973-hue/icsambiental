import Layout from '@/components/Layout';
import { EMAIL, PHONE_DISPLAY } from '@/lib/constants';

const Terms = () => {
  return (
    <Layout>
      <section className="bg-background-alt border-b border-border">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Termos de Uso</h1>
          <p className="text-muted-foreground">Última atualização: Fevereiro de 2025</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto prose-custom space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Ao acessar e utilizar o site da ICS Serviços Especializados, você concorda com os termos e condições descritos abaixo. Caso não concorde com algum dos termos, recomendamos que não utilize o site.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">1. Uso do site</h2>
          <p>
            Este site tem finalidade informativa e de contato comercial. O conteúdo disponibilizado, incluindo textos, artigos e descrições de serviços, é de caráter orientativo e não substitui consultoria técnica profissional para casos específicos.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">2. Propriedade intelectual</h2>
          <p>
            Todo o conteúdo do site, textos, imagens, logotipos, layout e materiais gráficos, é de propriedade da ICS Serviços Especializados ou utilizado com autorização. É proibida a reprodução, distribuição ou modificação sem autorização prévia por escrito.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">3. Links externos</h2>
          <p>
            O site pode conter links para sites de terceiros, especialmente na seção de Notícias. A ICS Serviços Especializados não se responsabiliza pelo conteúdo, políticas de privacidade ou práticas de sites externos.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">4. Limitação de responsabilidade</h2>
          <p>
            A ICS Serviços Especializados não garante que o site estará disponível ininterruptamente ou livre de erros. Não nos responsabilizamos por danos diretos ou indiretos decorrentes do uso ou da impossibilidade de uso do site.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">5. Informações enviadas pelo usuário</h2>
          <p>
            Ao enviar informações através dos formulários do site, você declara que os dados fornecidos são verdadeiros e autoriza a ICS Serviços Especializados a utilizá-los conforme descrito na Política de Privacidade.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">6. Alterações nos termos</h2>
          <p>
            Reservamo-nos o direito de alterar estes Termos de Uso a qualquer momento. As alterações entram em vigor imediatamente após a publicação. O uso continuado do site após alterações implica aceitação dos novos termos.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">7. Legislação aplicável</h2>
          <p>
            Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será submetida ao foro da comarca do Rio de Janeiro, RJ.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">8. Contato</h2>
          <p>
            Para dúvidas sobre estes termos, entre em contato pelo e-mail {EMAIL} ou pelo telefone {PHONE_DISPLAY}.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
