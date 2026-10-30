import type { Metadata } from "next";
import BlogArticlePage, {
  generateMetadata as generateBlogMetadata,
} from "../blog/[slug]/page";
import { SiteFooter, SiteHeader } from "../site-chrome";

const articleSlug = "nashik-trimbakeshwar-mahakumbh-2026-27-guide";

export async function generateMetadata(): Promise<Metadata> {
  return generateBlogMetadata({
    params: Promise.resolve({ slug: articleSlug }),
    searchParams: Promise.resolve({}),
  });
}

export default function NashikMahakumbhGuidePage() {
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
