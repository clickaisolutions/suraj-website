import Link from "next/link";
import type { Metadata } from "next";
import { blogArticles } from "./blog-data";
import { BlogImage } from "./blog-image";

export const metadata: Metadata = {
  title: "Digital Marketing Insights",
  description:
    "Ideas and practical guidance on SEO, social media, and content strategy for growing businesses.",
};

export default function BlogIndexPage() {
  const sortedArticles = [...blogArticles].sort((a, b) =>
    b.dateValue.localeCompare(a.dateValue),
  );
  const [featuredArticle, ...latestArticles] = sortedArticles;

  return (
    <main className="blog-page">
      <section aria-labelledby="blog-title" className="blog-intro">
        <p className="blog-kicker">The ClickAi journal</p>
        <div className="blog-intro-row">
          <h1 id="blog-title">
            Make your next move <span>more informed.</span>
          </h1>
          <p className="blog-intro-copy">
            Clear thinking for a changing digital world. Explore practical ideas
            to help your business build visibility, earn trust, and grow.
          </p>
        </div>
      </section>

      <section aria-labelledby="featured-article-title" className="blog-featured">
        <Link
          aria-label={`Read ${featuredArticle.title}`}
          className="blog-featured-image"
          href={`/blog/${featuredArticle.slug}`}
        >
          <BlogImage
            alt={featuredArticle.imageAlt}
            mobileSrc={featuredArticle.mobileImage}
            priority
            sizes="(max-width: 760px) 100vw, 56vw"
            src={featuredArticle.image}
          />
        </Link>
        <div className="blog-featured-copy">
          <div className="blog-meta">
            <span className="blog-meta-category">{featuredArticle.category}</span>
            <span aria-hidden="true" className="blog-meta-dot" />
            <time dateTime={featuredArticle.dateValue}>{featuredArticle.date}</time>
            <span aria-hidden="true" className="blog-meta-dot" />
            <span>{featuredArticle.readTime}</span>
          </div>
          <h2 id="featured-article-title">{featuredArticle.title}</h2>
          <p>{featuredArticle.excerpt}</p>
          <Link className="blog-read-link" href={`/blog/${featuredArticle.slug}`}>
            Read the article <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section aria-labelledby="latest-articles-title" className="blog-library">
        <div className="blog-library-heading">
          <h2 id="latest-articles-title">More ideas for your next move</h2>
          <p>Useful perspectives for the decisions that move your business forward.</p>
        </div>

        <div className="blog-grid">
          {latestArticles.map((article) => (
            <article className="blog-card" key={article.slug}>
              <Link
                aria-label={`Read ${article.title}`}
                className="blog-card-image"
                href={`/blog/${article.slug}`}
              >
                <BlogImage
                  alt={article.imageAlt}
                  mobileSrc={article.mobileImage}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  src={article.image}
                />
              </Link>
              <div className="blog-meta">
                <span className="blog-meta-category">{article.category}</span>
                <span aria-hidden="true" className="blog-meta-dot" />
                <time dateTime={article.dateValue}>{article.date}</time>
                <span aria-hidden="true" className="blog-meta-dot" />
                <span>{article.readTime}</span>
              </div>
              <h3>
                <Link className="blog-title-link" href={`/blog/${article.slug}`}>
                  {article.title}
                </Link>
              </h3>
              <p>{article.excerpt}</p>
              <Link className="blog-read-link" href={`/blog/${article.slug}`}>
                Read the article <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}