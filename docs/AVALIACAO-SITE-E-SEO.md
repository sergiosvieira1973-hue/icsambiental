# Avaliação do site icsambiental.com.br e estratégia de presença no Google

Avaliação feita em 08/10/2026 a partir do código deste repositório e de testes no site publicado.

## 1. Resumo da situação

O site tem boa base visual e um conteúdo de serviços bem acima da média do setor. As páginas de serviço trazem problema resolvido, entregáveis, etapas, documentos necessários, prazo e perguntas frequentes, que é exatamente o tipo de conteúdo que o Google valoriza.

O problema é que quase nada disso chega ao Google hoje. No teste do site publicado, todas as páginas internas (por exemplo `/servicos/pgrs`, `/contato`, `/sitemap.xml`) devolvem **erro 404 da hospedagem** quando acessadas diretamente. Elas só funcionam quando o visitante entra pela página inicial e navega clicando. O robô do Google acessa cada endereço diretamente, recebe o erro e descarta a página. Por isso a busca `site:icsambiental.com.br` mostra apenas a página inicial, e a empresa não aparece nas buscas por "consultoria ambiental Rio de Janeiro" ou "PGRS RJ", que hoje ficam com concorrentes como Métrica Ambiental, Primal Ambiental e Sagri Ambiental.

O segundo problema grave é o formulário de contato. Ele exibia "Mensagem enviada!", mas apenas simulava o envio. Toda mensagem preenchida ali foi perdida.

## 2. Diagnóstico detalhado

### Problemas críticos (corrigidos neste branch)

| Problema | Impacto | Situação |
|---|---|---|
| Páginas internas retornam 404 no acesso direto | Google indexa só a página inicial; links compartilhados no WhatsApp e LinkedIn quebram | Corrigido com `public/.htaccess` |
| Formulário de contato não enviava nada | Perda de clientes que preferem formulário | Agora monta a mensagem e abre o WhatsApp da ICS |
| Sem `sitemap.xml` | Google não descobre as 11 páginas de serviço | Criado e referenciado no `robots.txt` |
| Páginas de serviço sem título e descrição próprios | Todas competiam com o mesmo título genérico | Cada serviço usa agora o `seoTitle` e `seoDescription` já cadastrados |
| Logo com 1,3 MB (1920 x 1920 px) exibida com 64 px de altura | Carregamento lento no celular, pior nota no Core Web Vitals | Reduzida para 72 KB sem perda visível |

### Problemas importantes (corrigidos neste branch)

* Faltavam dados estruturados (schema.org). Foram incluídos `ProfessionalService` com telefone, e-mail, horário, área de atuação e perfis sociais; `Service`, `BreadcrumbList` e `FAQPage` em cada serviço; `Article` nos artigos. As perguntas frequentes podem aparecer expandidas no resultado do Google.
* Faltava imagem de compartilhamento. Links enviados no WhatsApp e LinkedIn apareciam sem imagem. Criado `og-image.jpg` (1200 x 630 px) com a logo.
* Sem URL canônica por página, o que pode gerar conteúdo duplicado entre versões com e sem `www` ou com barra final. O `.htaccess` agora força uma única versão (`https://icsambiental.com.br`, sem barra final) e cada página declara sua canônica.
* Página de erro em inglês ("Oops! Page not found") e sem o menu do site. Agora está em português, com menu, botões de retorno e marcação `noindex`.
* O link "Notícias" não aparecia no rodapé.

### Pontos que dependem de você (não alterados)

1. **Artigo único e vazio.** O artigo "Como organizar condicionantes e prazos" não tem texto e o card leva para a página inicial do IBAMA. Para o Google, a seção Artigos praticamente não existe. Este é o maior espaço de crescimento do site (ver seção 4).
2. **Notícias apontam só para sites externos.** Ajudam o visitante, mas não geram posicionamento, porque o conteúdo é de terceiros. Vale acrescentar dois ou três parágrafos de comentário da ICS em cada notícia relevante.
3. **Dados de confiança ausentes.** O rodapé não mostra CNPJ, endereço comercial nem o responsável técnico com registro profissional (CREA ou conselho equivalente). Esses dados pesam na avaliação de confiabilidade do Google para serviços técnicos e regulatórios. Não incluí nada porque não tenho essas informações confirmadas.
4. **Página "Quem somos" sem pessoas.** Não há nome, formação nem experiência da equipe. O Sergio já publica no LinkedIn e no Instagram; trazer a biografia e a foto para o site reforça autoridade.
5. **Sem prova social.** Não há depoimentos, casos atendidos nem número de licenças ou planos aprovados. Se existirem dados reais, eles convertem visitantes em clientes.
6. **Sem medição.** Não há Google Analytics, Search Console nem pixel de conversão. Hoje não é possível saber quantas pessoas visitam o site ou clicam no WhatsApp.

## 3. Opções de mudança e atualização

### Opção A, manter a estrutura atual com os ajustes deste branch (recomendada agora)

Custo praticamente zero e resolve os bloqueios principais. A limitação é que o site continua sendo montado pelo navegador (aplicação React). O Google consegue ler esse tipo de site, mas processa mais devagar, e redes como WhatsApp e LinkedIn leem apenas o título e a imagem gerais do `index.html`, não os de cada serviço.

### Opção B, pré-renderização das páginas (próximo passo sugerido)

Gera, no momento do build, um HTML pronto para cada rota (home, 11 serviços, artigos). Mantém o código e o visual atuais. Pode ser feito com um plugin de pré-renderização no Vite ou migrando o projeto para `vite-react-ssg`. Ganho direto em velocidade de indexação e em prévias corretas de cada serviço no WhatsApp. Esforço estimado de um a dois dias de desenvolvimento.

### Opção C, migrar para um framework com geração estática (Astro ou Next.js)

Melhor resultado técnico de SEO e desempenho, e facilita publicar artigos em arquivos Markdown. Exige reescrever a estrutura das páginas e sair do fluxo do Lovable. Faz sentido se o plano for publicar artigos com frequência e escalar o conteúdo.

### Melhorias de conteúdo e conversão, válidas em qualquer opção

* Trocar os três selos genéricos dos cards de serviço ("Conformidade", "Evidências", "Acompanhamento") por benefícios específicos de cada serviço.
* Criar uma página de serviço para cada órgão ou rito mais buscado no estado, como licenciamento no INEA e licenciamento municipal, sempre com conteúdo próprio e útil, nunca páginas copiadas trocando só o nome da cidade.
* Integrar o formulário a um serviço de envio de e-mail (Formspree, Web3Forms ou o banco de dados do Lovable) para ter registro dos contatos além do WhatsApp.
* Instalar Google Analytics 4 e registrar como conversão o clique no botão do WhatsApp.

## 4. Como ganhar destaque no Google

A busca por consultoria ambiental é local e de alta intenção. Quem procura "PGRS Rio de Janeiro" ou "licença de operação INEA" quer contratar. As ações abaixo estão em ordem de retorno esperado.

### 4.1 Google Search Console (fazer logo após publicar)

1. Acessar search.google.com/search-console e cadastrar o domínio `icsambiental.com.br` (verificação por registro DNS na hospedagem).
2. Enviar o sitemap `https://icsambiental.com.br/sitemap.xml`.
3. Usar "Inspeção de URL" em `/servicos` e em cada serviço principal e clicar em "Solicitar indexação".
4. Repetir o cadastro no Bing Webmaster Tools, que importa os dados do Search Console em poucos cliques.

### 4.2 Perfil da Empresa no Google (maior alavanca para busca local)

É o cartão que aparece no mapa e no topo das buscas locais. Para uma consultoria regional ele costuma trazer mais contatos do que o próprio site.

* Criar ou reivindicar o perfil em business.google.com com a categoria principal "Consultor ambiental" e secundárias ligadas a resíduos e licenciamento.
* Se não houver endereço aberto ao público, configurar como empresa de área de atendimento, listando os municípios atendidos.
* Cadastrar cada serviço com descrição curta e link para a página correspondente do site.
* Publicar fotos reais de visitas técnicas, equipe e treinamentos.
* Pedir avaliação a cada cliente atendido, com link direto, e responder todas.
* Fazer uma publicação por semana no perfil reaproveitando o que já vai para o LinkedIn.

### 4.3 Conteúdo que responde às dúvidas dos clientes

Cada artigo bem feito é uma porta de entrada no Google. Sugestão de pauta com base nos serviços já oferecidos:

1. Quem precisa de PGRS no Rio de Janeiro e o que diz a legislação
2. Diferença entre LP, LI, LO e licença simplificada no INEA
3. Como funciona o PGRSS para clínicas, consultórios e laboratórios
4. Quanto tempo leva uma licença de operação e o que atrasa o processo
5. Classificação de resíduos pela ABNT NBR 10.004 explicada para gestores
6. Como acompanhar condicionantes de licença sem perder prazo (completar o artigo existente)
7. MTR, manifesto de transporte de resíduos, passo a passo
8. RCA, RAS e PCA, quando cada estudo é exigido

Recomendações de formato para esses textos. Entre 1.000 e 1.800 palavras, citação da norma ou lei com link para a fonte oficial, uma seção de perguntas frequentes, autor identificado com registro profissional e chamada para o serviço relacionado no final. Antes de publicar, conferir prazos e exigências diretamente no site do INEA e na legislação vigente, porque esses dados mudam.

Frequência realista, dois artigos por mês. O LinkedIn e o Instagram devem passar a apontar para o artigo completo no site, e não o contrário.

### 4.4 Links de outros sites (autoridade)

* Pedir aos parceiros já listados (Vital, IBEMF, Servioeste, Belone, Endomaq, Green Sinergy) um link para o site da ICS na página de parceiros deles.
* Cadastrar a empresa em diretórios do setor, como oHub e associações de meio ambiente e de engenharia do estado.
* Publicar artigos como convidado em portais do setor ambiental.
* Manter nome, telefone e site escritos sempre da mesma forma em todos os cadastros.

### 4.5 Anúncios no Google (resultado imediato, opcional)

Enquanto o posicionamento orgânico cresce, uma campanha de Google Ads restrita ao estado do Rio, com palavras de alta intenção como "elaboração de PGRS" e "consultoria licenciamento ambiental", gera contatos desde a primeira semana. Comece com orçamento pequeno e meça os cliques no WhatsApp.

## 5. Plano de ação sugerido

| Prazo | Ação | Indicador |
|---|---|---|
| Semana 1 | Publicar este branch e conferir que `/servicos/pgrs` abre direto | Página abre sem erro 404 |
| Semana 1 | Search Console, envio do sitemap e pedido de indexação | Páginas indexadas no relatório |
| Semana 2 | Perfil da Empresa no Google completo | Perfil verificado |
| Semana 2 | Incluir CNPJ, responsável técnico e biografia da equipe | Dados no rodapé e em Quem somos |
| Mês 1 | Completar o artigo de condicionantes e publicar mais um | Dois artigos no ar |
| Mês 2 | Pré-renderização (Opção B) e Google Analytics | Prévia correta de cada serviço no WhatsApp |
| Meses 2 e 3 | Dois artigos por mês, pedidos de avaliação e links de parceiros | Impressões e cliques no Search Console |

Os resultados orgânicos costumam aparecer entre dois e seis meses após a indexação, conforme a concorrência de cada termo. O Perfil da Empresa e os anúncios respondem mais rápido.

## 6. Como publicar as correções

Depois de unir este branch ao principal, gere a versão de produção (`npm run build`) e envie **todo** o conteúdo da pasta `dist` para a pasta pública da hospedagem, incluindo o arquivo oculto `.htaccess`. Alguns gerenciadores de arquivos escondem arquivos que começam com ponto; ative a opção "mostrar arquivos ocultos" antes de enviar.

A página de erro do site publicado indica uma hospedagem com servidor Apache ou LiteSpeed (padrão de Hostinger e similares), que lê o `.htaccess`. Se a publicação for feita pelo próprio Lovable ou por Netlify ou Vercel, o redirecionamento já é tratado pela plataforma e o `.htaccess` é simplesmente ignorado.

Teste rápido depois de publicar. Abrir em aba anônima `https://icsambiental.com.br/servicos/pgrs` e `https://icsambiental.com.br/sitemap.xml`. As duas devem abrir normalmente.
