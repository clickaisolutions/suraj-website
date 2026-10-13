"use client";

import { useState, type FormEvent } from "react";

type SubmissionState = {
  type: "success" | "error";
  message: string;
} | null;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionState, setSubmissionState] = useState<SubmissionState>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionState(null);

    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "We couldn’t send your message. Please try again.");
      }

      form.reset();
      setSubmissionState({
        type: "success",
        message: "Thanks for reaching out. Our team will be in touch soon.",
      });
    } catch (error) {
      setSubmissionState({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "We couldn’t send your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-heading">
        <span>Send us a message</span>
        <span className="contact-required-note">* Required</span>
      </div>

      <div aria-hidden="true" className="contact-honeypot">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input
          autoComplete="off"
          id="contact-website"
          name="website"
          tabIndex={-1}
          type="text"
        />
      </div>

      <div className="contact-field-grid">
        <div className="contact-field">
          <label htmlFor="contact-full-name">Full Name <span>*</span></label>
          <input
            autoComplete="name"
            id="contact-full-name"
            maxLength={100}
            name="fullName"
            placeholder="Your name"
            required
          />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-email">Email Address <span>*</span></label>
          <input
            autoComplete="email"
            id="contact-email"
            maxLength={254}
            name="email"
            placeholder="you@company.com"
            required
            type="email"
          />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-phone">Phone Number <span>*</span></label>
          <input
            autoComplete="tel"
            id="contact-phone"
            maxLength={24}
            name="phone"
            placeholder="+91 80550 35039"
            required
            type="tel"
          />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-company">Company Name</label>
          <input
            autoComplete="organization"
            id="contact-company"
            maxLength={160}
            name="company"
            placeholder="Your company (optional)"
          />
        </div>

        <div className="contact-field contact-field-full">
          <label htmlFor="contact-message">Message <span>*</span></label>
          <textarea
            id="contact-message"
            maxLength={5000}
            minLength={10}
            name="message"
            placeholder="Tell us a little about what you’re looking for..."
            required
            rows={5}
          />
        </div>
      </div>

      {submissionState && (
        <p
          className={`contact-form-status is-${submissionState.type}`}
          role={submissionState.type === "error" ? "alert" : "status"}
        >
          {submissionState.message}
        </p>
      )}

      <div className="contact-form-submit">
        <p>Your details are only used to respond to your enquiry.</p>
        <button className="button button-primary" disabled={isSubmitting} type="submit">
          {isSubmitting ? "Sending..." : "Send message"}
          <span aria-hidden="true">↗</span>
        </button>
      </div>
    </form>
  );
}