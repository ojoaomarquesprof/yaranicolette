const whatsappUrl =
  "https://wa.me/5543998421200?text=Ol%C3%A1%2C%20Yara.%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20psicol%C3%B3gico%20infantil.";

const signs = [
  {
    number: "01",
    title: "Mudanças persistentes de comportamento",
    text: "Irritabilidade, agressividade, choro frequente ou reações que passaram a interferir na rotina.",
  },
  {
    number: "02",
    title: "Medos e ansiedade",
    text: "Preocupações intensas, dificuldade para se separar dos responsáveis ou insegurança que limita a criança.",
  },
  {
    number: "03",
    title: "Isolamento ou perda de interesse",
    text: "Menos vontade de brincar, conversar ou participar de atividades que antes faziam parte do dia a dia.",
  },
  {
    number: "04",
    title: "Dificuldade para lidar com emoções",
    text: "Crises intensas, frustração difícil de regular ou sentimentos que a criança ainda não consegue nomear.",
  },
  {
    number: "05",
    title: "Desafios na escola e nas relações",
    text: "Dificuldades de adaptação, convivência, aprendizagem ou mudanças percebidas por família e escola.",
  },
  {
    number: "06",
    title: "Momentos de mudança",
    text: "Separações, luto, chegada de irmãos, mudança de escola ou outras situações que exigem nova adaptação.",
  },
];

const faqs = [
  {
    question: "Quando é o momento de procurar uma psicóloga infantil?",
    answer:
      "Quando uma mudança emocional ou de comportamento persiste, se intensifica ou começa a afetar a rotina, as relações e o bem-estar da criança. Não é necessário esperar uma crise maior: uma conversa profissional pode ajudar a compreender a situação e orientar os próximos passos.",
  },
  {
    question: "Como explicar a terapia para a criança?",
    answer:
      "De forma simples e sem apresentar o atendimento como castigo. Você pode dizer que ela conhecerá uma psicóloga com quem poderá conversar, brincar e encontrar maneiras de entender melhor o que sente e o que acontece no dia a dia.",
  },
  {
    question: "Os responsáveis participam do processo?",
    answer:
      "Sim. A família oferece informações importantes sobre a rotina e acompanha orientações relacionadas às necessidades da criança. A forma e a frequência dessa participação são definidas de acordo com cada caso, preservando o espaço terapêutico infantil.",
  },
  {
    question: "Como funciona o sigilo no atendimento infantil?",
    answer:
      "O conteúdo das sessões é protegido pelo sigilo profissional. Os responsáveis recebem as orientações necessárias para o cuidado da criança, sempre com critério ético e respeito à privacidade do processo terapêutico.",
  },
  {
    question: "Onde acontecem os atendimentos?",
    answer:
      "Os atendimentos são realizados em Londrina, Paraná. As informações de endereço e disponibilidade são compartilhadas no primeiro contato pelo WhatsApp.",
  },
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yara Nicolette Dutra Pereira",
    alternateName: "Yara Nicolette",
    jobTitle: "Psicóloga Infantil",
    description:
      "Psicóloga infantil em Londrina, com atuação voltada ao desenvolvimento emocional e comportamental de crianças e participação da família.",
    telephone: "+55 43 99842-1200",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Londrina",
      addressRegion: "PR",
      addressCountry: "BR",
    },
    sameAs: ["https://www.instagram.com/psiyaranicolette/"],
  };

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#inicio" aria-label="Yara Nicolette — início">
            <img
              src="/media/yara-logo.png"
              width="960"
              height="223"
              alt="Yara Nicolette, Psicóloga, CRP 08/31151"
            />
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#quando-procurar">Quando procurar</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#sobre">Sobre Yara</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>

          <a
            className="header-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Agendar conversa <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">
              <span aria-hidden="true" /> Yara Nicolette · Psicóloga Infantil · CRP
              08/31151
            </p>
            <h1>
              Psicologia infantil para compreender o que seu filho ainda não
              consegue dizer.
            </h1>
            <p className="hero-text">
              Em Londrina, Yara acompanha crianças e suas famílias na compreensão
              de emoções, comportamentos e desafios do desenvolvimento — com
              escuta clínica, recursos lúdicos e participação ativa dos
              responsáveis.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Agendar uma conversa <span aria-hidden="true">→</span>
              </a>
              <a className="text-link" href="#quando-procurar">
                Quando procurar ajuda? <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-note">
              <p>Atendimento psicológico infantil</p>
              <p>Londrina · Paraná</p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <picture>
                <source
                  media="(max-width: 720px)"
                  srcSet="/media/yara-hero-mobile.webp"
                />
                <img
                  src="/media/yara-hero.webp"
                  width="1600"
                  height="2131"
                  alt="Yara Nicolette sentada em seu consultório"
                  fetchPriority="high"
                />
              </picture>
              <div className="portrait-caption">
                <span>Psicóloga infantil</span>
                <strong>CRP 08/31151</strong>
              </div>
            </div>
            <p className="vertical-label" aria-hidden="true">
              Emoções · comportamento · desenvolvimento
            </p>
          </div>
        </section>

        <section className="clarity-strip" aria-label="Áreas centrais do atendimento">
          <div>
            <span>01</span>
            <p>Psicologia infantil</p>
          </div>
          <div>
            <span>02</span>
            <p>Participação da família</p>
          </div>
          <div>
            <span>03</span>
            <p>Atendimento em Londrina</p>
          </div>
        </section>

        <section className="signals section" id="quando-procurar">
          <div className="section-intro">
            <p className="section-kicker">Quando procurar ajuda</p>
            <h2>O comportamento também comunica.</h2>
            <p>
              Crianças nem sempre conseguem explicar o que sentem. Mudanças na
              rotina, nas relações ou na forma de reagir podem indicar que algo
              merece ser observado com mais cuidado.
            </p>
            <p className="fine-print">
              Sinais isolados não equivalem a um diagnóstico. O contexto, a
              frequência e o impacto na vida da criança precisam ser considerados.
            </p>
          </div>

          <div className="signals-list">
            {signs.map((sign) => (
              <article className="signal-row" key={sign.number}>
                <span>{sign.number}</span>
                <div>
                  <h3>{sign.title}</h3>
                  <p>{sign.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="therapy section" id="como-funciona">
          <div className="therapy-image">
            <picture>
              <source
                media="(max-width: 720px)"
                srcSet="/media/yara-play-mobile.webp"
              />
              <img
                src="/media/yara-play.webp"
                width="1500"
                height="2247"
                loading="lazy"
                alt="Yara utilizando cartas e brinquedos como recursos no atendimento infantil"
              />
            </picture>
            <p>Recursos lúdicos com intenção clínica.</p>
          </div>

          <div className="therapy-copy">
            <p className="section-kicker">Como funciona</p>
            <h2>Na terapia, brincar é uma forma de comunicação.</h2>
            <p className="lead">
              O brinquedo não aparece como distração ou recompensa. Ele ajuda a
              criança a expressar experiências, testar possibilidades e mostrar o
              que ainda é difícil organizar em palavras.
            </p>
            <div className="therapy-points">
              <div>
                <span>01</span>
                <h3>Expressão emocional</h3>
                <p>
                  Histórias, jogos e brincadeiras dão forma a sentimentos e
                  situações vividas pela criança.
                </p>
              </div>
              <div>
                <span>02</span>
                <h3>Compreensão do comportamento</h3>
                <p>
                  A observação clínica considera o contexto, o desenvolvimento e a
                  rotina — não apenas um comportamento isolado.
                </p>
              </div>
              <div>
                <span>03</span>
                <h3>Estratégias possíveis</h3>
                <p>
                  O processo ajuda a construir maneiras mais adequadas de lidar com
                  emoções, relações e desafios cotidianos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="family-section">
          <div className="family-copy">
            <p className="section-kicker section-kicker-light">A família no processo</p>
            <h2>A criança não precisa dar conta de tudo sozinha.</h2>
            <p>
              Os responsáveis ajudam a contextualizar o que acontece fora do
              consultório e recebem orientações compatíveis com as necessidades da
              criança. Essa participação não é uma busca por culpados: é uma forma
              de ampliar a compreensão e sustentar mudanças possíveis no dia a dia.
            </p>
            <a
              className="button button-light"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Conversar com a Yara <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="family-image-wrap">
            <img
              src="/media/yara-work.webp"
              width="1200"
              height="1797"
              loading="lazy"
              alt="Yara trabalhando com materiais de apoio em seu consultório"
            />
            <p>Escuta da criança. Diálogo com a família.</p>
          </div>
        </section>

        <section className="about section" id="sobre">
          <div className="about-visual">
            <picture>
              <source
                media="(max-width: 720px)"
                srcSet="/media/yara-about-mobile.webp"
              />
              <img
                src="/media/yara-about.webp"
                width="1500"
                height="1998"
                loading="lazy"
                alt="Yara Nicolette em pé no ambiente de atendimento infantil"
              />
            </picture>
            <img
              className="about-seal"
              src="/media/yara-seal.png"
              width="520"
              height="520"
              alt=""
              aria-hidden="true"
            />
          </div>

          <div className="about-copy">
            <p className="section-kicker">Sobre Yara</p>
            <h2>Yara Nicolette Dutra Pereira</h2>
            <p className="about-role">Psicóloga Infantil · CRP 08/31151</p>
            <p className="lead">
              Yara atua com foco na compreensão do desenvolvimento emocional e
              comportamental de crianças, considerando a participação da família
              como parte importante do processo terapêutico.
            </p>
            <p>
              Em seu trabalho, cada situação é observada a partir do contexto da
              criança: o que mudou, quando acontece, como afeta a rotina e quais
              recursos podem ajudá-la a se expressar e lidar melhor com suas
              experiências.
            </p>
            <p>
              Além da atuação clínica, Yara é cofundadora e CEO da Clínica Arvorear,
              em Londrina.
            </p>
            <div className="about-links">
              <a
                href="https://www.instagram.com/psiyaranicolette/"
                target="_blank"
                rel="noreferrer"
              >
                Acompanhar no Instagram <span aria-hidden="true">↗</span>
              </a>
              <a href="#primeiro-contato">
                Como começar <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        <section className="start section" id="primeiro-contato">
          <div className="section-heading-row">
            <div>
              <p className="section-kicker">Primeiro contato</p>
              <h2>Como começar.</h2>
            </div>
            <p>
              Você não precisa chegar com todas as respostas. O primeiro contato
              serve para apresentar a demanda e entender quais são os próximos
              passos possíveis.
            </p>
          </div>

          <ol className="start-steps">
            <li>
              <span>01</span>
              <div>
                <h3>Envie uma mensagem</h3>
                <p>
                  Peça informações sobre o atendimento psicológico infantil pelo
                  WhatsApp, sem necessidade de relatar dados sensíveis da criança.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Converse sobre a demanda</h3>
                <p>
                  Yara orienta o contato inicial com os responsáveis e esclarece as
                  condições do atendimento.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Definam os próximos passos</h3>
                <p>
                  A partir das informações iniciais, a família recebe uma orientação
                  compatível com a necessidade apresentada.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section className="faq section" id="duvidas">
          <div className="faq-heading">
            <p className="section-kicker">Dúvidas frequentes</p>
            <h2>Informação ajuda a decidir com mais segurança.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final-cta">
          <div>
            <p className="section-kicker">Atendimento em Londrina</p>
            <h2>Vamos conversar sobre o que você tem observado?</h2>
          </div>
          <div className="final-cta-action">
            <p>
              Envie uma mensagem para receber informações sobre disponibilidade e
              próximos passos.
            </p>
            <a
              className="button button-primary"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Falar com a Yara no WhatsApp <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <a className="footer-brand" href="#inicio" aria-label="Voltar ao início">
            <img
              src="/media/yara-logo.png"
              width="960"
              height="223"
              alt="Yara Nicolette, Psicóloga, CRP 08/31151"
            />
          </a>
          <div className="footer-contact">
            <p>Yara Nicolette Dutra Pereira</p>
            <p>Psicóloga · CRP 08/31151</p>
            <p>Londrina · Paraná</p>
          </div>
          <div className="footer-links">
            <a
              href="https://www.instagram.com/psiyaranicolette/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp ↗
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Yara Nicolette. Conteúdo informativo.</p>
          <p>Este site não substitui avaliação psicológica individual.</p>
        </div>
      </footer>

      <a
        className="mobile-cta"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
      >
        Agendar conversa <span aria-hidden="true">↗</span>
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
