import Image from "next/image";
import Link from "next/link";
import { services } from "./services/service-data";

type SiteHeaderProps = {
  activePage?: "home" | "blog" | "contact" | "service";
};

export function SiteHeader({ activePage }: SiteHeaderProps) {
  return (
    <header className="site-header blog-header">
      <Link aria-label="ClickAi Solutions home" className="brand" href="/">
        <Image
          alt="ClickAi Solutions"
          className="brand-logo"
          height={212}
          priority
          src="/logo-3.png"
          width={588}
        />
      </Link>

      <nav aria-label="Main navigation" className="main-nav">
        <Link aria-current={activePage === "home" ? "page" : undefined} href="/">
          Home
        </Link>
        <Link href="/#about">About Us</Link>
        <Link
          aria-current={activePage === "service" ? "page" : undefined}
          href="/#services"
        >
          Our Services
        </Link>
        <Link aria-current={activePage === "blog" ? "page" : undefined} href="/blog">
          Blog
        </Link>
        <Link
          aria-current={activePage === "contact" ? "page" : undefined}
          href="/contact"
        >
          Contact Us
        </Link>
      </nav>

      <Link className="header-cta" href="/contact">
        Let&apos;s Talk <span aria-hidden="true">↗</span>
      </Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link aria-label="ClickAi Solutions home" className="brand" href="/">
            <Image
              alt="ClickAi Solutions"
              className="brand-logo"
              height={212}
              src="/logo-3.png"
              width={588}
            />
          </Link>
          <p>
            Thoughtful digital marketing to help your business get found, build
            trust, and grow.
          </p>
        </div>
        <Link className="button button-primary footer-cta" href="/contact">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </Link>
      </div>

      <div className="footer-columns">
        <nav aria-label="Explore" className="footer-column">
          <h2>Explore</h2>
          <Link href="/">Home</Link>
          <Link href="/#about">About Us</Link>
          <Link href="/#services">Our Services</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>

        <nav aria-label="Service pages" className="footer-column footer-service-column">
          <h2>Services</h2>
          <div className="footer-service-links">
            {services.map((service) => (
              <Link href={`/services/${service.slug}`} key={service.slug}>
                {service.name}
              </Link>
            ))}
          </div>
        </nav>

        <div className="footer-column footer-contact-column">
          <h2>Get in touch</h2>
          <a href="tel:+918055035039">+91 8055035039</a>
          <a href="mailto:clickaisolutions@gmail.com">
            clickaisolutions@gmail.com
          </a>
          <a
            href="https://wa.me/918055035039"
            rel="noopener noreferrer"
            target="_blank"
          >
            Chat on WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 ClickAi Solutions. All rights reserved.</p>
        <nav aria-label="Social media" className="footer-social-links">
          <a
            aria-label="Instagram"
            href="https://www.instagram.com/clickaisolutions/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
              <rect
                height="18"
                rx="5"
                stroke="currentColor"
                strokeWidth="2"
                width="18"
                x="3"
                y="3"
              />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
            </svg>
          </a>
          <a
            aria-label="Facebook"
            href="https://www.facebook.com/clickaisolutions"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path
                d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.1H7v3.2h2.8V21h3.7Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/company/clickai-solutions/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path
                d="M5.2 7.4a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2ZM3.4 9h3.6v12H3.4V9Zm5.8 0h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5V21h-3.6v-6c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V21H9.2V9Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
}