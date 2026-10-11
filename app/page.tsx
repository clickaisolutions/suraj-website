const services = [
  {
    number: "01",
    name: "SEO",
    description:
      "Build lasting visibility with smarter search strategy, technical improvements, and useful content.",
    category: "Be found",
  },
  {
    number: "02",
    name: "Social media marketing (SMM)",
    description:
      "Turn your social channels into a consistent place for community, conversation, and growth.",
    category: "Get noticed",
  },
  {
    number: "03",
    name: "Content marketing",
    description:
      "Give your audience a reason to care with clear, valuable stories made for every stage.",
    category: "Stay relevant",
  },
  {
    number: "04",
    name: "Graphic design",
    description:
      "Create a recognizable visual world across campaigns, social posts, and brand touchpoints.",
    category: "Look the part",
  },
  {
    number: "05",
    name: "Video editing",
    description:
      "Shape raw footage into polished, platform-ready video that earns attention and keeps it.",
    category: "Make it move",
  },
  {
    number: "06",
    name: "AI marketing solutions",
    description:
      "Use practical AI to uncover insights, streamline workflows, and make better marketing decisions.",
    category: "Work smarter",
  },
];

const steps = [
  {
    number: "01",
    title: "Find the signal",
    description: "We get to know your business, audience, and the opportunity ahead.",
  },
  {
    number: "02",
    title: "Make it matter",
    description: "We build a focused mix of strategy, creative, and channels around your goals.",
  },
  {
    number: "03",
    title: "Keep growing",
    description: "We learn from what works, refine the plan, and keep your momentum moving.",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a aria-label="ClickAI Solutions home" className="brand" href="#home">
          <span aria-hidden="true" className="brand-symbol">
            <span />
          </span>
          <span className="brand-wordmark">
            <span className="brand-name"><span>Click</span><span>AI</span></span>
            <span className="brand-subtitle">SOLUTIONS</span>
          </span>
        </a>

        <nav aria-label="Main navigation" className="main-nav">
          <a href="#services">Services</a>
          <a href="#approach">Our approach</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-cta" href="https://wa.me/qr/LD2H56H34KFJN1?s=p" target="_blank" rel="noopener noreferrer">
          Let&apos;s talk <span aria-hidden="true">+</span>
        </a>
      </header>

      <section aria-labelledby="hero-title" className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> DIGITAL GROWTH, MADE HUMAN</p>
          <h1 id="hero-title">Make your next move <span>your biggest one.</span></h1>
          <p className="hero-description">
            ClickAI brings strategy, creativity, and smart technology together to help your brand move forward.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://wa.me/qr/LD2H56H34KFJN1?s=p" target="_blank" rel="noopener noreferrer">
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#services">Explore our services <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-note">
            <span className="hero-note-mark" aria-hidden="true">C</span>
            <p>One connected team.<br /><strong>More room to grow.</strong></p>
          </div>
        </div>

        <div className="hero-visual" role="img" aria-label="A creative team working together on a marketing campaign">
          <div className="visual-topline"><span>IDEAS IN MOTION</span><span>01 / 06</span></div>
          <div className="visual-caption">
            <span className="caption-rule" />
            <p>Good work gets<br /><strong>people moving.</strong></p>
          </div>
          <div aria-hidden="true" className="visual-stamp"><span>THINK</span><span>CREATE</span><span>GROW</span></div>
        </div>
      </section>

      <section aria-label="Our services at a glance" className="service-ribbon">
        <p>Built for the whole picture</p>
        <div><span>Strategy</span><i aria-hidden="true" /> <span>Creative</span><i aria-hidden="true" /> <span>Performance</span><i aria-hidden="true" /> <span>AI</span></div>
      </section>

      <section aria-labelledby="services-title" className="services-section" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHAT WE DO</p>
            <h2 id="services-title">Everything working <span>as one.</span></h2>
          </div>
          <p className="section-intro">The right mix of services, shaped around where you want to go.</p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-item" key={service.number}>
              <div className="service-meta"><span>{service.number}</span><span>{service.category}</span></div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <a aria-label={`Ask us about ${service.name}`} className="service-link" href="https://wa.me/qr/LD2H56H34KFJN1?s=p" target="_blank" rel="noopener noreferrer">Talk to us <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="approach-title" className="approach-section" id="approach">
        <div className="approach-heading">
          <p className="eyebrow">A CLEAR WAY FORWARD</p>
          <h2 id="approach-title">Good growth starts<br />with <span>a good plan.</span></h2>
          <p>Less guesswork. More thoughtful work that connects with the people you want to reach.</p>
        </div>
        <div className="approach-steps">
          {steps.map((step) => (
            <article className="approach-step" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="footer-main">
          <div>
            <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
            <h2>Let&apos;s make<br /><span>something happen.</span></h2>
          </div>
          <a className="button button-light" href="https://wa.me/qr/LD2H56H34KFJN1?s=p" target="_blank" rel="noopener noreferrer">
            Talk with ClickAI <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="footer-bottom">
          <a aria-label="ClickAI Solutions home" className="brand brand-footer" href="#home">
            <span aria-hidden="true" className="brand-symbol"><span /></span>
            <span className="brand-wordmark"><span className="brand-name"><span>Click</span><span>AI</span></span><span className="brand-subtitle">SOLUTIONS</span></span>
          </a>
          <p>Thoughtful marketing for what&apos;s next.</p>
          <a href="https://wa.me/qr/LD2H56H34KFJN1?s=p" target="_blank" rel="noopener noreferrer">Get in touch</a>
        </div>
      </footer>
    </main>
  );
}
