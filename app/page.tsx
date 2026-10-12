import Image from "next/image";

const services = [
  {
    name: "SEO, AEO & GEO",
    description:
      "Improve visibility across search engines, answer engines, and generative AI platforms with strategic optimization and structured content.",
  },
  {
    name: "Social Media Marketing",
    description:
      "Build a consistent, engaging brand presence that connects with your audience and drives meaningful community growth.",
  },
  {
    name: "Performance Marketing",
    description:
      "Launch high-performing ad campaigns that reach the right audience, generate leads, and improve conversions.",
  },
  {
    name: "Email Marketing",
    description:
      "Nurture leads and strengthen customer relationships with personalized, strategic email campaigns and automation.",
  },
  {
    name: "Content Marketing",
    description:
      "Create expert-driven content that builds trust, answers customer questions, and supports your wider marketing goals.",
  },
  {
    name: "Graphic Design",
    description:
      "Produce professional visuals that make your brand stand out across campaigns, social media, and marketing collateral.",
  },
  {
    name: "Video Editing",
    description:
      "Transform raw footage into compelling video content tailored for social media, advertising, and brand storytelling.",
  },
  {
    name: "Website Development",
    description:
      "Build responsive, SEO-friendly websites that reflect your brand and support your business objectives effectively.",
  },
  {
    name: "WhatsApp Marketing",
    description:
      "Use direct, personalized messaging to nurture customers, promote offers, and keep your audience engaged.",
  },
];

const reasons = [
  "AI-assisted strategies built for smarter decisions",
  "Customized solutions tailored to your business goals",
  "Integrated marketing services working as one system",
  "Creativity combined with performance-focused data",
  "Audience-first marketing built around real connections",
  "Continuous optimization for better long-term growth",
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "We understand your business, target audience, competitors, and marketing objectives.",
  },
  {
    number: "02",
    title: "Strategize",
    description: "We create a customized digital marketing plan aligned to your priorities, budget, and growth opportunities.",
  },
  {
    number: "03",
    title: "Execute",
    description: "We implement the strategy across relevant channels, including search, social, paid media, and content.",
  },
  {
    number: "04",
    title: "Analyze",
    description: "We monitor campaign performance and identify what is working and where improvements are needed.",
  },
  {
    number: "05",
    title: "Optimize",
    description: "We refine efforts and uncover new opportunities to improve efficiency and results over time.",
  },
];

const industries = [
  "Technology and SaaS",
  "E-commerce and Retail",
  "Professional Services",
  "Healthcare and Wellness",
  "Hospitality and Travel",
  "Local Businesses",
  "Startups and Growing Businesses",
];

const faqs = [
  {
    question: "What services does ClickAi Solutions offer?",
    answer:
      "ClickAi Solutions offers SEO, AEO, GEO, social media marketing, performance marketing, email marketing, content marketing, graphic design, video editing, website development, and WhatsApp marketing.",
  },
  {
    question: "How can digital marketing help my business?",
    answer:
      "Digital marketing can increase visibility, attract relevant audiences, generate leads, strengthen brand awareness, and improve customer engagement. Results depend on your business, industry, competition, budget, and strategy.",
  },
  {
    question: "What are SEO, AEO, and GEO?",
    answer:
      "SEO improves visibility in traditional search results, AEO helps content perform in answer-driven platforms, and GEO improves how content and brands are discovered and referenced in generative AI search experiences.",
  },
  {
    question: "Do you provide Google Ads and Meta Ads management?",
    answer:
      "Yes. Our performance marketing services include Google Ads and Meta Ads planning, management, monitoring, and optimization based on your business objectives.",
  },
  {
    question: "Can you help improve my website's search engine rankings?",
    answer:
      "Yes. Our SEO services include keyword research, technical and on-page optimization, content optimization, local SEO, and off-page SEO. Specific rankings and timing depend on several factors and can vary.",
  },
  {
    question: "Do you provide customized marketing packages?",
    answer:
      "Yes. We can recommend a combination of services based on your goals, target audience, marketing priorities, and budget.",
  },
  {
    question: "Can you manage both marketing and creative work?",
    answer:
      "Yes. We support strategy, social media, content, design, and video work to help businesses coordinate their marketing and creative activities under one partner.",
  },
  {
    question: "How can I get started?",
    answer:
      "Contact ClickAi Solutions by phone, WhatsApp, or email. Share your business and marketing goals, and we can discuss the services that best match your needs.",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a aria-label="ClickAi Solutions home" className="brand" href="#home">
          <Image
            alt="ClickAi Solutions"
            className="brand-logo"
            height={1254}
            priority
            src="/clickai-favicon.png"
            width={1254}
          />
        </a>

        <nav aria-label="Main navigation" className="main-nav">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Our Services</a>
          <a href="#contact">Contact Us</a>
        </nav>

        <a
          className="header-cta"
          href="https://wa.me/8055035039"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get a Free Consultation <span aria-hidden="true">+</span>
        </a>
      </header>

      <section aria-labelledby="hero-title" className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" /> Your Brand, Our Digital Strategy
          </p>
          <h1 id="hero-title">
            Grow Your Business with <span>Smarter Digital Marketing</span>
          </h1>
          <p className="hero-description">
            We help businesses build a powerful online presence through AI-assisted
            marketing, creative strategies, and data-driven campaigns designed to
            connect your brand with the right audience.
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href="https://wa.me/8055035039"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get a Free Consultation <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#services">
              Explore Our Services <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="hero-trust-row" aria-label="Key marketing capabilities">
            <span>SEO</span>
            <span>AEO</span>
            <span>GEO</span>
            <span>Ads</span>
            <span>Social</span>
            <span>Website</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Digital growth strategy overview">
          <div className="visual-panel">
            <div className="panel-topline">
              <span>Growth Dashboard</span>
              <span>2026</span>
            </div>
            <div className="panel-stat stat-primary">
              <strong>+180%</strong>
              <span>Brand visibility</span>
            </div>
            <div className="panel-stats-grid">
              <div className="mini-stat">
                <span>Leads</span>
                <strong>3.2x</strong>
              </div>
              <div className="mini-stat orange">
                <span>Engagement</span>
                <strong>94%</strong>
              </div>
            </div>
            <div className="panel-bars" aria-hidden="true">
              <span style={{ height: "40%" }} />
              <span style={{ height: "60%" }} />
              <span style={{ height: "70%" }} />
              <span style={{ height: "50%" }} />
              <span style={{ height: "90%" }} />
              <span style={{ height: "100%" }} />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Introductory overview" className="service-ribbon">
        <p>Smarter strategy. Stronger visibility. Sustainable growth.</p>
        <div>
          <span>Strategy</span>
          <i aria-hidden="true" />
          <span>Creative</span>
          <i aria-hidden="true" />
          <span>Performance</span>
          <i aria-hidden="true" />
          <span>AI</span>
        </div>
      </section>

      <section aria-labelledby="about-title" className="about-section" id="about">
        <div className="about-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" /> About Us
          </p>
          <h2 id="about-title">
            Your Partner in <span>Digital Marketing Success</span>
          </h2>
          <p>
            ClickAi Solutions is a digital marketing agency focused on helping
            businesses grow through intelligent strategies, creative execution,
            and performance-driven marketing.
          </p>
          <p>
            We combine AI-assisted insights with human creativity to develop
            strategies tailored to your business goals. Our services cover search
            engine optimization, social media marketing, performance advertising,
            content creation, email marketing, and website development.
          </p>
          <p>
            We believe successful digital marketing goes beyond visibility — it is
            about reaching the right people, communicating your value, and turning
            opportunities into meaningful business outcomes.
          </p>
          <div className="about-mission">
            <div>
              <strong>Our Mission</strong>
              <p>
                To empower businesses with innovative, data-driven digital marketing
                strategies that improve visibility and support sustainable growth.
              </p>
            </div>
            <div>
              <strong>Our Vision</strong>
              <p>
                To become a trusted digital growth partner by combining technology,
                creativity, and strategic thinking.
              </p>
            </div>
          </div>
        </div>

        <div className="about-card">
          <span className="card-badge">Why businesses choose us</span>
          <ul>
            {reasons.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
          <a
            className="button button-primary"
            href="https://wa.me/8055035039"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discover Our Approach <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section aria-labelledby="services-title" className="services-section" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" /> Our Services
            </p>
            <h2 id="services-title">
              Complete Digital Marketing Solutions <span>Under One Roof</span>
            </h2>
          </div>
          <p className="section-intro">
            We offer a comprehensive range of services designed to help your business
            reach more people, build stronger customer relationships, and achieve its
            marketing objectives.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-item" key={service.name}>
              <div className="service-tag">Digital Growth</div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <a
                className="service-link"
                href="https://wa.me/8055035039"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore services <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="process-title" className="process-section" id="process">
        <div className="section-heading section-heading-single">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" /> Our Process
            </p>
            <h2 id="process-title">
              From Strategy to Execution, <span>We Help You Move Forward</span>
            </h2>
          </div>
        </div>

        <div className="process-grid">
          {processSteps.map((step) => (
            <article className="process-step" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="process-cta">
          <a
            className="button button-primary"
            href="https://wa.me/8055035039"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Your Digital Marketing Journey <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section aria-labelledby="ai-title" className="ai-section">
        <div className="ai-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" /> AI-Powered Digital Marketing
          </p>
          <h2 id="ai-title">
            Combine AI Innovation With <span>Human Creativity</span>
          </h2>
          <p>
            The digital landscape is evolving, and artificial intelligence is creating
            new opportunities for businesses to improve their marketing strategies.
          </p>
          <p>
            At ClickAi Solutions, we incorporate AI-assisted approaches where they add
            value to research, content planning, audience understanding, creative
            development, and campaign optimization.
          </p>
          <p>
            Our approach focuses on combining technology with human expertise to create
            marketing that is relevant, engaging, and aligned with your business
            objectives.
          </p>
        </div>

        <div className="ai-card">
          <div className="ai-card-line">
            <span>Smarter Insights</span>
            <strong>01</strong>
          </div>
          <div className="ai-card-line">
            <span>Creative Strategies</span>
            <strong>02</strong>
          </div>
          <div className="ai-card-line">
            <span>Meaningful Connections</span>
            <strong>03</strong>
          </div>
          <a
            className="button button-primary"
            href="https://wa.me/8055035039"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Our Solutions <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section aria-labelledby="industries-title" className="industry-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" /> Industries We Serve
            </p>
            <h2 id="industries-title">
              Digital Marketing Solutions for <span>Your Industry</span>
            </h2>
          </div>
        </div>

        <div className="industry-grid">
          {industries.map((industry) => (
            <div className="industry-item" key={industry}>
              {industry}
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="faq-title" className="faq-section">
        <div className="faq-header">
          <p className="eyebrow">
            <span className="eyebrow-dot" /> FAQ
          </p>
          <h2 id="faq-title">
            Everything You Need to Know About <span>Our Digital Marketing Services</span>
          </h2>
        </div>

        <div className="faq-list">
          {faqs.map((item) => (
            <details className="faq-item" key={item.question} open={item.question === faqs[0].question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section aria-labelledby="cta-title" className="cta-section">
        <div className="cta-content">
          <p className="eyebrow">Ready to Grow Your Brand Online?</p>
          <h2 id="cta-title">
            Let&apos;s create a digital marketing strategy that moves your business
            <span> forward.</span>
          </h2>
          <p>
            Whether you want to improve search visibility, generate leads, grow your
            social media presence, or build a professional website, we are ready to
            discuss your next steps.
          </p>
        </div>

        <div className="cta-actions">
          <a
            className="button button-primary"
            href="https://wa.me/8055035039"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get a Free Consultation <span aria-hidden="true">↗</span>
          </a>
          <a
            className="button button-secondary"
            href="https://wa.me/8055035039"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat With Us on WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="footer-main">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" /> Contact Us
            </p>
            <h2>
              Let&apos;s Talk About <span>Your Business Goals</span>
            </h2>
          </div>
          <div className="footer-cta-block">
            <a
              className="button button-light"
              href="https://wa.me/8055035039"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat With Us Now <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <span>Phone</span>
            <a href="tel:+918055035039">+91 8055035039</a>
          </div>
          <div className="contact-card">
            <span>WhatsApp</span>
            <a href="https://wa.me/8055035039" target="_blank" rel="noopener noreferrer">
              +91 8055035039
            </a>
          </div>
          <div className="contact-card">
            <span>Email</span>
            <a href="mailto:clickaisolutions@gmail.com">clickaisolutions@gmail.com</a>
          </div>
        </div>

        <div className="footer-bottom">
          <a aria-label="ClickAi Solutions home" className="brand brand-footer" href="#home">
            <Image
              alt="ClickAi Solutions"
              className="brand-logo"
              height={1254}
              src="/clickai-favicon.png"
              width={1254}
            />
          </a>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Our Services</a>
            <a href="#contact">Contact Us</a>
          </div>

          <p>© 2026 ClickAi Solutions. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
