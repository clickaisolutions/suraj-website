import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticlePage, {
  generateMetadata as generateBlogMetadata,
} from "../blog/[slug]/page";
import { blogArticles } from "../blog/blog-data";
import { SiteFooter, SiteHeader } from "../site-chrome";

type RootArticlePageProps = PageProps<"/[slug]">;

const rootPathArticles = blogArticles.filter(
  (article) => article.path === `/${article.slug}`,
);

export function generateStaticParams() {
  return rootPathArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
  searchParams,
}: RootArticlePageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!rootPathArticles.some((article) => article.slug === slug)) {
    return { title: "Article not found" };
  }

  return generateBlogMetadata({ params, searchParams });
}

export default async function RootArticlePage({
  params,
  searchParams,
}: RootArticlePageProps) {
  const { slug } = await params;

  if (!rootPathArticles.some((article) => article.slug === slug)) {
    notFound();
  }

  return (
    <>
      <SiteHeader activePage="blog" />
      <BlogArticlePage
        params={Promise.resolve({ slug })}
        searchParams={searchParams}
      />
      <SiteFooter />
    </>
  );
}