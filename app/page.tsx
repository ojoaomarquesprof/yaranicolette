import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { Services, MobileNav, Gallery } from "./site-interactions";

const whatsappUrl = "https://wa.me/5543998421200?text=" + encodeURIComponent("Olá, Yara. Gostaria de agendar uma conversa e saber mais sobre os atendimentos.");
const instagramUrl = "https://www.instagram.com/psiyaranicolette/";
const lattesUrl = "http://lattes.cnpq.br/3922679082811206";
const mapUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Clínica Arvorear Londrina Paraná");
const signs = [
  ["Eu não sei mais como lidar com as reações dele.", "Quando as emoções ficam intensas, as frustrações são difíceis de manejar e os conflitos começam a fazer parte da rotina."],
  ["A escola está percebendo dificuldades que eu não sei como ajudar.", "Quando surgem desafios de aprendizagem, interação, adaptação ou comportamento em diferentes ambientes."],
  ["Será que isso faz parte do desenvolvimento ou precisamos investigar?", "Quando existem dúvidas sobre atenção, linguagem, habilidades cognitivas, desenvolvimento ou funcionamento emocional."],
  ["Quero ajudar meu filho, mas também preciso de orientação.", "Quando os responsáveis precisam compreender melhor as necessidades da criança e encontrar estratégias possíveis para o dia a dia."],
];
const steps = [
  ["Primeiro, precisamos nos conhecer", "Uma conversa inicial com os responsáveis para compreender a história da criança, suas necessidades, potencialidades e os desafios que motivaram a busca pelo atendimento."],
  ["Um olhar individualizado", "A partir das informações iniciais, construímos um plano terapêutico alinhado às necessidades da criança, com objetivos definidos e estratégias adequadas ao seu desenvolvimento."],
  ["Aprender e desenvolver", "Nos atendimentos, utilizo brincadeiras, atividades e estratégias terapêuticas planejadas para favorecer habilidades, ampliar possibilidades e trabalhar os desafios identificados."],
  ["Família e evolução lado a lado", "Acompanho os avanços, compartilho orientações com os responsáveis e ajusto as estratégias sempre que necessário, para favorecer a continuidade do desenvolvimento também fora da clínica."],
];
const faqs = [
  ["Quando é o momento de procurar uma psicóloga infantil?", "Quando emoções, comportamentos ou dificuldades nas relações começam a gerar preocupação ou impactar a rotina da criança, buscar orientação pode ajudar. Não é necessário esperar que as dificuldades se intensifiquem para procurar ajuda."],
  ["Como funciona o sigilo no atendimento infantil?", "O sigilo é fundamental para construir uma relação de confiança. Os responsáveis recebem orientações e informações relevantes para o acompanhamento, respeitando os limites éticos da profissão e a privacidade da criança."],
  ["Qual é a diferença entre psicoterapia e avaliação neuropsicológica?", "A psicoterapia acompanha questões emocionais e comportamentais ao longo do tempo. Já a avaliação neuropsicológica investiga habilidades cognitivas e aspectos do comportamento, contribuindo para esclarecer dúvidas e orientar recomendações."],
  ["Como saber qual atendimento meu filho precisa?", "Você não precisa chegar com essa resposta pronta. No primeiro contato, podemos compreender suas dúvidas e conversar sobre qual serviço pode ser mais adequado às necessidades da criança."],
  ["Qual é a idade atendida na avaliação neuropsicológica?", "A avaliação neuropsicológica é destinada a crianças e adolescentes de 6 a 16 anos."],
  ["Onde acontecem os atendimentos?", "Os atendimentos presenciais são realizados em Londrina, Paraná. Entre em contato pelo WhatsApp para verificar os horários disponíveis."],
];
function ContactButton({ children = "Agendar uma conversa" }: { children?: React.ReactNode }) {
  return <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">{children}<FaWhatsapp aria-hidden="true" /></a>;
}
export default function Home() {
  const structuredData = {
    "@context": "https://schema.org", "@type": "Person", name: "Yara Nicolette Dutra Pereira", alternateName: "Yara Nicolette", jobTitle: "Neuropsicóloga Infantil", telephone: "+55 43 99842-1200",
    description: "Psicoterapia infantojuvenil, avaliação neuropsicológica e psicoeducação parental em Londrina.",
    address: { "@type": "PostalAddress", addressLocality: "Londrina", addressRegion: "PR", addressCountry: "BR" }, sameAs: [instagramUrl, lattesUrl],
  };
  return <>
    <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
    <header className="site-header"><div className="header-inner">
      <a className="brand" href="#inicio" aria-label="Yara Nicolette — início"><img src="/media/yara-logo.png" width="960" height="223" alt="Yara Nicolette, Psicóloga, CRP 08/31151" /></a>
      <nav className="desktop-nav" aria-label="Navegação principal"><a href="#atendimentos">Atendimentos</a><a href="#sobre">Sobre Yara</a><a href="#como-funciona">O processo</a><a href="#espaco">O espaço</a></nav>
      <a className="header-cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Agendar uma conversa <FaWhatsapp aria-hidden="true" /></a><MobileNav />
    </div></header>
    <main id="conteudo">
      <section className="hero" id="inicio"><div className="hero-copy">
        <p className="eyebrow">Yara Nicolette Dutra Pereira<br /><span>Neuropsicóloga Infantil · CRP 08/31151</span></p>
        <h1>Por trás de cada comportamento, existe uma criança que precisa ser <em>compreendida.</em></h1>
        <p className="hero-text">Acompanho crianças, adolescentes e suas famílias na compreensão das emoções, dos comportamentos e do desenvolvimento, unindo conhecimento científico, escuta sensível e cuidado individualizado.</p>
        <div className="hero-actions"><ContactButton /><a className="button button-outline" href="#como-funciona">Como funciona o processo <ArrowDown aria-hidden="true" /></a></div>
        <p className="hero-note"><MapPin aria-hidden="true" /> Londrina · Paraná</p>
      </div><div className="hero-visual"><picture><source media="(max-width: 700px)" srcSet="/media/yara-01-mobile.webp" /><img src="/media/yara-01.webp" width="1200" height="1598" alt="Yara Nicolette, neuropsicóloga infantil, em seu consultório" fetchPriority="high" /></picture><p className="vertical-label">Emoções · comportamento · desenvolvimento</p></div></section>

      <section className="signals section" id="quando-procurar"><div className="section-intro"><p className="section-kicker">Um olhar para o que você percebe</p><h2>Talvez você esteja percebendo <em>algo diferente.</em></h2><p>Você não precisa ter todas as respostas para buscar ajuda. O primeiro passo pode ser justamente compreender melhor o que está acontecendo.</p><a className="text-link" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Quero entender melhor o que está acontecendo <ArrowUpRight aria-hidden="true" /></a></div><div className="signals-list">{signs.map(([title, text], i) => <article className="signal-row" key={title}><span className="row-number">0{i + 1}</span><div><h3>“{title}”</h3><p>{text}</p></div></article>)}</div></section>

      <section className="services section" id="atendimentos"><div className="services-photo"><img src="/media/yara-02.webp" width="1400" height="933" loading="lazy" alt="Yara Nicolette trabalhando em seu consultório" /><p>Ciência, escuta e cuidado em cada encontro.</p></div><div className="services-copy"><p className="section-kicker">Caminhos de cuidado</p><h2>Como posso ajudar <em>sua família.</em></h2><Services whatsappUrl={whatsappUrl} /></div></section>

      <section className="about section" id="sobre"><div className="about-visual"><img src="/media/yara-03.webp" width="1200" height="1598" loading="lazy" alt="Yara Nicolette no espaço de atendimento da Clínica Arvorear" /><p>Um cuidado que começa pela compreensão.</p></div><div className="about-copy"><p className="section-kicker">Sobre mim</p><h2>Prazer, <em>Yara Nicolette.</em></h2>
        <p>Sou psicóloga infantil, neuropsicóloga e especialista em Análise do Comportamento Aplicada (ABA). Minha atuação é para a compreensão do desenvolvimento infantojuvenil, integrando avaliação, intervenção clínica e orientação familiar.</p>
        <p>Acredito que compreender uma criança exige olhar para além de seus comportamentos: é preciso reconhecer suas potencialidades, identificar suas necessidades e considerar os contextos em que ela cresce, aprende e se relaciona. Por isso, trabalho em parceria com as famílias, construindo caminhos de cuidado alinhados às particularidades de cada criança.</p>
        <p>Realizo avaliações neuropsicológicas de crianças e adolescentes e atuo na supervisão clínica de outros profissionais, contribuindo para o aprimoramento da prática profissional e para a qualidade das intervenções.</p>
        <p>Sou também sócia fundadora e diretora clínica da Clínica Arvorear, em Londrina-PR, onde participo da gestão e da coordenação de uma equipe multiprofissional dedicada ao desenvolvimento infantil. Acredito na integração entre diferentes áreas do conhecimento e na construção de um cuidado que considere a criança em sua totalidade.</p>
        <p>Meu propósito é transformar conhecimento científico em possibilidades concretas de desenvolvimento, oferecendo às crianças oportunidades para ampliar seu potencial e às famílias mais clareza, segurança e parceria ao longo dessa jornada.</p>
        <div className="about-links"><a href={instagramUrl} target="_blank" rel="noopener noreferrer"><FaInstagram aria-hidden="true" /> Instagram <ArrowUpRight aria-hidden="true" /></a><a href={lattesUrl} target="_blank" rel="noopener noreferrer">Currículo Lattes <ArrowUpRight aria-hidden="true" /></a></div>
      </div></section>

      <section className="process-band" id="como-funciona"><div className="section process"><p className="section-kicker">Passo a passo</p><h2>Como funciona <em>o acompanhamento.</em></h2><ol className="process-steps">{steps.map(([title, text], i) => <li key={title}><span className="step-number">0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div></section>
      <section className="space section" id="espaco"><div className="section-heading-row"><div><p className="section-kicker">O espaço</p><h2>Um ambiente pensado para <em>acolher e desenvolver.</em></h2></div><div><p>Cada detalhe do consultório é pensado para oferecer acolhimento, segurança e conforto às crianças, aos adolescentes e às suas famílias.</p><p>Conheça o espaço onde a escuta, a ciência e o cuidado se encontram para construir novas possibilidades de desenvolvimento.</p></div></div><Gallery /></section>
      <section className="faq section" id="duvidas"><div className="faq-heading"><p className="section-kicker">Dúvidas frequentes</p><h2>A informação ajuda a decidir com <em>mais segurança.</em></h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
      <section className="contact section" id="contato"><div className="contact-copy"><p className="section-kicker">Vamos conversar?</p><h2>Você não precisa entender tudo agora. Podemos começar por <em>uma conversa.</em></h2><p>Se algo no desenvolvimento, nas emoções ou no comportamento do seu filho tem despertado dúvidas, estou à disposição para conversar sobre o que você tem observado e orientar os próximos passos.</p><ContactButton>Entre em contato</ContactButton><div className="contact-details"><a href={instagramUrl} target="_blank" rel="noopener noreferrer"><FaInstagram aria-hidden="true" /> @psiyaranicolette</a><p><MapPin aria-hidden="true" /> Clínica Arvorear · Londrina, Paraná</p></div></div><a className="contact-map" href={mapUrl} target="_blank" rel="noopener noreferrer" aria-label="Abrir a localização da Clínica Arvorear no Google Maps"><img src="/media/yara-10.webp" width="1448" height="1086" loading="lazy" alt="Mapa da localização da Clínica Arvorear, em Londrina" /><span>Ver localização no mapa <ArrowUpRight aria-hidden="true" /></span></a></section>
    </main>
    <footer className="site-footer"><div className="footer-inner"><a className="footer-brand" href="#inicio"><img src="/media/yara-logo.png" width="960" height="223" alt="Yara Nicolette" /></a><div className="footer-info"><strong>Yara Nicolette Dutra Pereira</strong><p>Psicóloga · CRP 08/31151</p><p>Psicoterapia infantojuvenil · Avaliação neuropsicológica · Psicoeducação parental</p><p>Londrina · Paraná</p></div><a className="back-top" href="#inicio">Voltar ao início ↑</a></div></footer>
    <a className="mobile-cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Agendar uma conversa <FaWhatsapp aria-hidden="true" /></a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
  </>;
}
