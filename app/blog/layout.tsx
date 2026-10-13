import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: {
    default: "Digital Marketing Insights | ClickAi Solutions",
    template: "%s | ClickAi Solutions",
  },
  description:
    "Practical insights on SEO, social media, and content strategy from ClickAi Solutions.",
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader activePage="blog" />
      {children}
      <SiteFooter />
    </>
  );
}