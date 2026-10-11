"use client";

function Gear({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`maintenance-gear ${className}`}
      fill="currentColor"
      viewBox="0 0 32 32"
    >
      <path d="M13 1h6v4.1c1 .3 2 .7 2.9 1.2l2.9-2.9 4.2 4.2-2.9 2.9c.5.9.9 1.9 1.2 2.9H31v6h-4.1c-.3 1-.7 2-1.2 2.9l2.9 2.9-4.2 4.2-2.9-2.9c-.9.5-1.9.9-2.9 1.2V32h-6v-4.1c-1-.3-2-.7-2.9-1.2l-2.9 2.9-4.2-4.2 2.9-2.9c-.5-.9-.9-1.9-1.2-2.9H0v-6h4.1c.3-1 .7-2 1.2-2.9L2.4 7.8l4.2-4.2 2.9 2.9c.9-.5 1.9-.9 2.9-1.2V1Z" />
      <circle cx="16" cy="16" r="6.2" fill="var(--background)" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="maintenance-page">
      <section aria-labelledby="maintenance-title" className="maintenance-content">
        <div aria-hidden="true" className="maintenance-gears">
          <Gear className="maintenance-gear-large" />
          <Gear className="maintenance-gear-small" />
        </div>

        <h1 className="maintenance-title" id="maintenance-title">
          Site is under maintenance
        </h1>
        <p className="maintenance-description">
          We&apos;re working hard to improve the user experience. Stay tuned!
        </p>

        <div className="maintenance-actions">
          <a className="maintenance-button" href="mailto:clickaisolutions@gmail.com">
            Contact Us
          </a>
          <button
            className="maintenance-button maintenance-button-secondary"
            onClick={() => window.location.reload()}
            type="button"
          >
            Reload
          </button>
        </div>
      </section>
    </main>
  );
}
