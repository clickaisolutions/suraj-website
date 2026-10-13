import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import type { Metadata } from "next";
import { blogArticles } from "../blog-data";

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
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.dateValue,
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

  return (
    <main className="blog-page">
      <article className="blog-article">
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
            <p>{article.intro}</p>
            {article.sections.map((section, index) => (
              <section id={`section-${index + 1}`} key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <div className="blog-article-cta">
              <p>Want to put these ideas to work for your business?</p>
              <Link className="button button-primary" href="/#contact">
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