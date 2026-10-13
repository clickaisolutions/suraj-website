import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import type { Metadata } from "next";
import { blogArticles } from "../blog-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://clickaisolutions.in";

type BlogArticlePageProps = PageProps<"/blog/[slug]">;

export function generateStaticParams() {
  return blogArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((item) => item.slug === slug);

  if (!article) {
    return { title: "Article not found" };
  }

  return {
    title: article.metaTitle ?? article.title,
    description: article.metaDescription ?? article.excerpt,
    keywords: article.keywords,
    alternates: {
      canonical: `${siteUrl}/blog/${article.slug}`,
    },
    openGraph: {
      title: article.metaTitle ?? article.title,
      description: article.metaDescription ?? article.excerpt,
      type: "article",
      publishedTime: article.dateValue,
      images: [{ url: article.image, alt: article.imageAlt }],
      siteName: "ClickAI Solutions",
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle ?? article.title,
      description: article.metaDescription ?? article.excerpt,
      images: [{ url: article.image, alt: article.imageAlt }],
    },
  };
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  return (
    <Suspense
      fallback={
        <main className="blog-page">
          <div aria-live="polite" className="blog-article-loading">
            Loading article...
          </div>
        </main>
      }
    >
      <BlogArticleContent params={params} />
    </Suspense>
  );
}

async function BlogArticleContent({
  params,
}: {
  params: BlogArticlePageProps["params"];
}) {
  const { slug } = await params;
  const article = blogArticles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = blogArticles.filter((item) => item.slug !== article.slug);
  const articleUrl = `${siteUrl}/blog/${article.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: article.title,
        description: article.metaDescription ?? article.excerpt,
        image: [`${siteUrl}${article.image}`],
        datePublished: article.dateValue,
        dateModified: article.dateValue,
        articleBody: [
          article.quickAnswer,
          article.intro,
          ...article.sections.flatMap((section) => [
            section.heading,
            ...section.paragraphs,
            ...(section.bullets ?? []),
            ...(section.comparison?.rows.map((row) => row.join(": ")) ?? []),
            ...(section.faqs?.flatMap(({ question, answer }) => [question, answer]) ?? []),
          ]),
        ]
          .filter(Boolean)
          .join("\n\n"),
        author: {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
        },
        publisher: {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
        },
        mainEntityOfPage: articleUrl,
        articleSection: article.category,
        keywords: article.keywords?.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
          { "@type": "ListItem", position: 3, name: article.title, item: articleUrl },
        ],
      },
      ...(article.sections.some((section) => /^\d\./.test(section.heading))
        ? [
            {
              "@type": "HowTo",
              name: article.title,
              description: article.quickAnswer ?? article.excerpt,
              step: article.sections
                .filter((section) => /^\d\./.test(section.heading))
                .map((section, index) => ({
                  "@type": "HowToStep",
                  position: index + 1,
                  name: section.heading,
                  text: section.paragraphs.join(" "),
                })),
            },
          ]
        : []),
      ...(article.sections.some((section) => section.faqs?.length)
        ? [
            {
              "@type": "FAQPage",
              mainEntity: article.sections.flatMap((section) =>
                (section.faqs ?? []).map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              ),
            },
          ]
        : []),
    ],
  };

  return (
    <main className="blog-page">
      <article className="blog-article">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <nav aria-label="Breadcrumb" className="blog-breadcrumbs">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/blog">Blog</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{article.category}</span>
        </nav>

        <header className="blog-article-header">
          <div className="blog-meta">
            <span className="blog-meta-category">{article.category}</span>
            <span aria-hidden="true" className="blog-meta-dot" />
            <time dateTime={article.dateValue}>{article.date}</time>
            <span aria-hidden="true" className="blog-meta-dot" />
            <span>{article.readTime}</span>
          </div>
          <h1>{article.title}</h1>
          <p>{article.excerpt}</p>
        </header>

        <div className="blog-article-cover">
          <Image
            alt={article.imageAlt}
            fill
            priority
            sizes="(max-width: 760px) 100vw, 1060px"
            src={article.image}
          />
        </div>

        <div className="blog-article-layout">
          <aside aria-label="Article overview" className="blog-article-aside">
            <div>
              <h2>In this article</h2>
              <ol>
                {article.sections.map((section, index) => (
                  <li key={section.heading}>
                    <a href={`#section-${index + 1}`}>{section.heading}</a>
                  </li>
                ))}
              </ol>
            </div>
            <div className="blog-takeaways">
              <h2>Key takeaways</h2>
              <ul>
                {article.takeaways.map((takeaway) => (
                  <li key={takeaway}>{takeaway}</li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="blog-article-body">
            {article.quickAnswer && (
              <aside className="blog-quick-answer" aria-label="Quick answer">
                <h2>Quick Answer</h2>
                <p>{article.quickAnswer}</p>
              </aside>
            )}
            <p>{article.intro}</p>
            {article.sections.map((section, index) => (
              <section id={`section-${index + 1}`} key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {section.comparison && (
                  <div className="blog-comparison-wrap">
                    <table className="blog-comparison">
                      <thead>
                        <tr>
                          {section.comparison.headers.map((header) => (
                            <th key={header} scope="col">{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.comparison.rows.map((row) => (
                          <tr key={row[0]}>
                            {row.map((cell, cellIndex) => (
                              cellIndex === 0 ? <th key={cell} scope="row">{cell}</th> : <td key={cell}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {section.faqs?.map((faq) => (
                  <div className="blog-faq" key={faq.question}>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </section>
            ))}

            <div className="blog-article-cta">
              <p>Want to put these ideas to work for your business?</p>
              <Link className="button button-primary" href="/contact">
                Talk with our team <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <section aria-labelledby="related-articles-title" className="blog-related">
        <h2 id="related-articles-title">Keep exploring</h2>
        <div className="blog-grid">
          {relatedArticles.slice(0, 2).map((relatedArticle) => (
            <article className="blog-card" key={relatedArticle.slug}>
              <Link
                aria-label={`Read ${relatedArticle.title}`}
                className="blog-card-image"
                href={`/blog/${relatedArticle.slug}`}
              >
                <Image
                  alt={relatedArticle.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  src={relatedArticle.image}
                />
              </Link>
              <div className="blog-meta">
                <span className="blog-meta-category">{relatedArticle.category}</span>
                <span aria-hidden="true" className="blog-meta-dot" />
                <span>{relatedArticle.readTime}</span>
              </div>
              <h3>
                <Link className="blog-title-link" href={`/blog/${relatedArticle.slug}`}>
                  {relatedArticle.title}
                </Link>
              </h3>
              <p>{relatedArticle.excerpt}</p>
              <Link className="blog-read-link" href={`/blog/${relatedArticle.slug}`}>
                Read the article <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}