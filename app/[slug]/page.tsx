import type { Metadata } from "next";
import BlogArticlePage, {
  generateMetadata as generateBlogMetadata,
} from "../blog/[slug]/page";
import { citySeoBlogArticles } from "../blog/blog-data";
import { SiteFooter, SiteHeader } from "../site-chrome";

type CityArticlePageProps = PageProps<"/[slug]">;

export function generateStaticParams() {
  return citySeoBlogArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
  searchParams,
}: CityArticlePageProps): Promise<Metadata> {
  return generateBlogMetadata({ params, searchParams });
}

export default async function CityArticlePage({
  params,
  searchParams,
}: CityArticlePageProps) {
  return (
    <>
      <SiteHeader activePage="blog" />
      <BlogArticlePage params={params} searchParams={searchParams} />
      <SiteFooter />
    </>
  );
}
