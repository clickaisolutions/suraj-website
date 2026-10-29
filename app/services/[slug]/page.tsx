import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../site-chrome";
import { getService, services } from "../service-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://clickaisolutions.in";

type ServicePageProps = PageProps<"/services/[slug]">;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: `${service.name} Services`,
    description: service.description,
    alternates: {
      canonical: `${siteUrl}/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.name} Services | ClickAi Solutions`,
      description: service.description,
      type: "website",
      siteName: "ClickAi Solutions",
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((item) => item.slug !== service.slug);
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "ClickAi Solutions",
      url: siteUrl,
    },
    url: `${siteUrl}/services/${service.slug}`,
  };

  return (
    <>
      <SiteHeader activePage="service" />
      <main className="service-detail-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceStructuredData).replace(/</g, "\\u003c"),
          }}
        />
        <nav aria-label="Breadcrumb" className="blog-breadcrumbs service-breadcrumbs">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/#services">Services</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{service.name}</span>
        </nav>

        <section aria-labelledby="service-title" className="service-hero">
          <div className="service-hero-copy">
            <p className="blog-kicker">{service.category}</p>
            <h1 id="service-title">{service.headline}</h1>
            <p className="service-hero-description">{service.intro}</p>
            <div className="service-hero-actions">
              <Link className="button button-primary" href="/contact">
                Discuss your goals <span aria-hidden="true">↗</span>
              </Link>
              <Link className="service-back-link" href="/#services">
                Explore all services <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>
          <aside aria-label={`${service.name} overview`} className="service-hero-card">
            <span className="service-card-index">CLICKAI / SERVICES</span>
            <p>{service.name}</p>
            <span className="service-card-rule" />
            <span className="service-card-note">
              Thoughtful strategy. Clear direction. Work that supports your goals.
            </span>
          </aside>
        </section>

        <section aria-labelledby="service-benefits-title" className="service-benefits">
          <div className="service-section-heading">
            <p className="blog-kicker">Built around your business</p>
            <h2 id="service-benefits-title">
              A clearer way to make <span>progress.</span>
            </h2>
          </div>
          <div className="service-benefit-list">
            {service.benefits.map((benefit, index) => (
              <article className="service-benefit" key={benefit}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{benefit}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="service-deliverables-title" className="service-details">
          <div className="service-details-intro">
            <p className="blog-kicker">What we can help with</p>
            <h2 id="service-deliverables-title">
              The right pieces, <span>working together.</span>
            </h2>
            <p>
              Every engagement is shaped around your priorities. Here are some of
              the ways we can support your team.
            </p>
          </div>
          <div className="service-deliverables">
            {service.deliverables.map((deliverable) => (
              <div className="service-deliverable" key={deliverable}>
                <span aria-hidden="true">+</span>
                <p>{deliverable}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="service-process-title" className="service-process">
          <div className="service-section-heading">
            <p className="blog-kicker">A practical process</p>
            <h2 id="service-process-title">
              From first conversation <span>to ongoing improvement.</span>
            </h2>
          </div>
          <ol className="service-process-list">
            {service.process.map((step, index) => (
              <li className="service-process-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
          <p className="service-ideal-for">{service.idealFor}</p>
        </section>

        <section aria-labelledby="service-cta-title" className="service-cta">
          <div>
            <p className="blog-kicker">Ready when you are</p>
            <h2 id="service-cta-title">
              Let&apos;s talk about <span>what you want to achieve.</span>
            </h2>
            <p>
              Tell us what matters to your business and we&apos;ll help you explore
              the next steps for {service.name.toLowerCase()}.
            </p>
          </div>
          <Link className="button button-primary" href="/contact">
            Get in touch <span aria-hidden="true">↗</span>
          </Link>
        </section>

        <nav aria-label="Other services" className="service-related">
          <div className="service-section-heading">
            <p className="blog-kicker">More ways to grow</p>
            <h2>Explore our other services.</h2>
          </div>
          <div className="service-related-links">
            {relatedServices.map((relatedService) => (
              <Link
                href={`/services/${relatedService.slug}`}
                key={relatedService.slug}
              >
                {relatedService.name} <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}
