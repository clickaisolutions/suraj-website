import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClickAi Solutions | AI-Powered Digital Marketing",
  description:
    "Grow your business with ClickAi Solutions. Get expert SEO, AEO, GEO, social media marketing, paid ads, content marketing, and website development services.",
  openGraph: {
    title: "ClickAi Solutions | AI-Powered Digital Marketing",
    description:
      "Grow your business with ClickAi Solutions. Get expert SEO, AEO, GEO, social media marketing, paid ads, content marketing, and website development services.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ClickAi Solutions | AI-Powered Digital Marketing",
    description:
      "Grow your business with ClickAi Solutions. Get expert SEO, AEO, GEO, social media marketing, paid ads, content marketing, and website development services.",
  },
  icons: {
    icon: "/clickai-favicon.png",
    shortcut: "/clickai-favicon.png",
    apple: "/clickai-favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NDT4RRCCM3"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NDT4RRCCM3');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
