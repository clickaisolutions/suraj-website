import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./contact-form";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Tell ClickAi Solutions about your business goals. Contact our team about SEO, social media, content, and digital marketing services.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader activePage="contact" />
      <main className="contact-page">
        <section aria-labelledby="contact-title" className="contact-intro">
          <p className="blog-kicker">Let&apos;s work together</p>
          <div className="contact-layout">
            <div className="contact-copy">
              <h1 id="contact-title">
                Tell us what <span>you want to grow.</span>
              </h1>
              <p>
                Share a little about your goals and we&apos;ll get back to you with
                thoughtful next steps for your business.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <span>Email</span>
                  <a href="mailto:clickaisolutions@gmail.com">
                    clickaisolutions@gmail.com
                  </a>
                </div>
                <div className="contact-method">
                  <span>Call us</span>
                  <a href="tel:+918055035039">+91 8055035039</a>
                </div>
                <div className="contact-method">
                  <span>Prefer WhatsApp?</span>
                  <Link
                    href="https://wa.me/918055035039?text=Hi%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services."
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Chat with our team <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}