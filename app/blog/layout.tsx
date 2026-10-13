import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

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
          <Link href="/">Home</Link>
          <Link href="/#about">About Us</Link>
          <Link href="/#services">Our Services</Link>
          <Link aria-current="page" href="/blog">
            Blog
          </Link>
        </nav>

        <Link className="header-cta" href="/#contact">
          Let&apos;s Talk <span aria-hidden="true">↗</span>
        </Link>
      </header>

      {children}

      <footer className="site-footer blog-footer">
        <div className="blog-footer-row">
          <Link aria-label="ClickAi Solutions home" className="brand" href="/">
            <Image
              alt="ClickAi Solutions"
              className="brand-logo"
              height={212}
              src="/logo-3.png"
              width={588}
            />
          </Link>
          <nav aria-label="Footer navigation" className="footer-links">
            <Link href="/#home">Home</Link>
            <Link href="/#services">Our Services</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/#contact">Contact Us</Link>
          </nav>
          <p className="blog-footer-note">
            © 2026 ClickAi Solutions. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}