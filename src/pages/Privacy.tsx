import Layout from '@/components/Layout';

const Privacy = () => {
  return (
    <Layout>
      <section className="bg-background-alt border-b border-border">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Política de Privacidade</h1>
          <p className="text-muted-foreground">Última atualização: Fevereiro de 2025</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto prose-custom space-y-6 text-muted-foreground leading-relaxed">
          <p>
            A ICS Serviços Especializados ("nós", "nosso") valoriza a privacidade dos visitantes e clientes que utilizam este site. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">1. Dados que coletamos</h2>
          <p>Podemos coletar os seguintes dados pessoais quando você preenche formulários no site:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nome completo</li>
            <li>Nome da empresa</li>
            <li>Endereço de e-mail</li>
            <li>Telefone / WhatsApp</li>
            <li>Cidade e UF</li>
            <li>Informações sobre o serviço desejado</li>
            <li>Conteúdo da mensagem enviada</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">2. Finalidade do tratamento</h2>
          <p>Os dados coletados são utilizados exclusivamente para:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Responder solicitações de orçamento e dúvidas técnicas</li>
            <li>Enviar propostas comerciais</li>
            <li>Manter contato relacionado aos serviços contratados</li>
            <li>Melhorar nossos serviços e a experiência do site</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">3. Compartilhamento de dados</h2>
          <p>
            Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing. Podemos compartilhar dados com parceiros operacionais estritamente necessários para a prestação dos serviços contratados, sempre mediante acordo de confidencialidade.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">4. Armazenamento e segurança</h2>
          <p>
            Os dados são armazenados em servidores seguros com acesso restrito. Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda ou destruição.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">5. Seus direitos</h2>
          <p>Conforme a LGPD, você tem direito a:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Acessar seus dados pessoais em nosso poder</li>
            <li>Solicitar a correção de dados incompletos ou incorretos</li>
            <li>Solicitar a exclusão de seus dados</li>
            <li>Revogar o consentimento para tratamento de dados</li>
            <li>Solicitar a portabilidade dos dados</li>
          </ul>
          <p>
            Para exercer qualquer desses direitos, entre em contato pelo e-mail Icsempreendimentos2023@gmail.com.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">6. Cookies</h2>
          <p>
            Este site pode utilizar cookies para melhorar a experiência de navegação. Cookies são pequenos arquivos armazenados no seu navegador que nos ajudam a entender como você usa o site.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">7. Alterações nesta política</h2>
          <p>
            Reservamo-nos o direito de atualizar esta Política de Privacidade a qualquer momento. As alterações entram em vigor imediatamente após a publicação no site.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">8. Contato</h2>
          <p>
            Para dúvidas sobre esta política ou sobre o tratamento de seus dados, entre em contato: Icsempreendimentos2023@gmail.com | (21) 99362-7669.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
