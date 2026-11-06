import type { Metadata } from "next";
import BlogArticlePage, {
  generateMetadata as generateBlogMetadata,
} from "../blog/[slug]/page";
import { SiteFooter, SiteHeader } from "../site-chrome";

const articleSlug = "local-seo-growth-plan-small-businesses-new-york";

export async function generateMetadata(): Promise<Metadata> {
  return generateBlogMetadata({
    params: Promise.resolve({ slug: articleSlug }),
    searchParams: Promise.resolve({}),
  });
}

export default function LocalSeoGrowthPlanPage() {
  return (
    <>
      <SiteHeader activePage="blog" />
      <BlogArticlePage
        params={Promise.resolve({ slug: articleSlug })}
        searchParams={Promise.resolve({})}
      />
      <SiteFooter />
    </>
  );
}
