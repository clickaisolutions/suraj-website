"use client";

import { useState } from "react";

function MaintenanceBot({ waving }: { waving: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`maintenance-bot${waving ? " is-waving" : ""}`}
      fill="none"
      viewBox="0 0 440 370"
    >
      <ellipse cx="224" cy="331" fill="#dce3d4" rx="144" ry="20" />

      <g className="bot-orbit">
        <circle cx="94" cy="124" r="24" fill="#f4c96b" />
        <path
          d="M94 109v30m-15-15h30m-25-10 20 20m0-20-20 20"
          stroke="#fff9e9"
          strokeLinecap="round"
          strokeWidth="3"
        />
      </g>
      <g className="bot-sparkle">
        <path
          d="M355 85c2 13 7 18 20 20-13 2-18 7-20 20-2-13-7-18-20-20 13-2 18-7 20-20Z"
          fill="#ed9e79"
        />
        <path
          d="M119 72c1 7 4 10 11 11-7 1-10 4-11 11-1-7-4-10-11-11 7-1 10-4 11-11Z"
          fill="#829776"
        />
      </g>

      <path
        d="M99 274h265a14 14 0 0 1 14 14v10H85v-10a14 14 0 0 1 14-14Z"
        fill="#849577"
      />
      <path d="M112 298h13v28h-13zm224 0h13v28h-13z" fill="#61715a" />
      <path d="M85 286h293" stroke="#6e805f" strokeWidth="3" />
      <path d="M127 259h71v15h-71z" fill="#edc776" />
      <path d="M131 254h63v6h-63z" fill="#f5d894" />

      <g className="bot-arm">
        <path
          d="m276 220 47-39 22 19-46 44"
          fill="#9aaf88"
          stroke="#52624d"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <circle cx="332" cy="190" r="12" fill="#f4c96b" stroke="#52624d" strokeWidth="4" />
        <path
          d="m342 185 32-36m-9-9 17 15m-31 39 17 15"
          stroke="#52624d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="7"
        />
        <path
          d="m370 139 12-11 16 15-11 12"
          fill="#ed9e79"
          stroke="#52624d"
          strokeLinejoin="round"
          strokeWidth="4"
        />
      </g>

      <path
        d="M188 266v-16c0-8 6-14 14-14h35c8 0 14 6 14 14v16"
        stroke="#52624d"
        strokeLinecap="round"
        strokeWidth="9"
      />
      <path d="M204 242v-16h31v16" fill="#ed9e79" stroke="#52624d" strokeWidth="4" />
      <rect
        x="158"
        y="126"
        width="128"
        height="119"
        rx="36"
        fill="#fffdf7"
        stroke="#52624d"
        strokeWidth="4"
      />
      <path
        d="M207 126v-14a15 15 0 0 1 30 0v14"
        stroke="#52624d"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <circle cx="222" cy="102" r="6" fill="#ed9e79" />
      <rect
        x="174"
        y="147"
        width="96"
        height="64"
        rx="22"
        fill="#eaf0e4"
        stroke="#52624d"
        strokeWidth="3"
      />
      <g className="bot-face">
        <circle cx="201" cy="178" r="5" fill="#52624d" />
        <circle cx="243" cy="178" r="5" fill="#52624d" />
        <path
          d="M207 191c4 5 9 7 15 7s11-2 15-7"
          stroke="#52624d"
          strokeLinecap="round"
          strokeWidth="3"
        />
      </g>
      <circle cx="163" cy="177" r="7" fill="#ed9e79" />
      <circle cx="281" cy="177" r="7" fill="#ed9e79" />
      <path
        d="m177 226-22 14m112-14 22 14"
        stroke="#52624d"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <circle cx="215" cy="229" r="3" fill="#829776" />
      <circle cx="229" cy="229" r="3" fill="#829776" />
      <circle cx="243" cy="229" r="3" fill="#829776" />
    </svg>
  );
}

export default function MaintenanceExperience() {
  const [waving, setWaving] = useState(false);
  const [checking, setChecking] = useState(false);

  function checkAgain() {
    setChecking(true);
    window.location.reload();
  }

  return (
    <main className="maintenance-page">
      <div aria-hidden="true" className="maintenance-glow maintenance-glow-one" />
      <div aria-hidden="true" className="maintenance-glow maintenance-glow-two" />

      <div className="maintenance-shell">
        <header className="maintenance-header">
          <div aria-hidden="true" className="maintenance-mark">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
              <path
                d="M12 2.8c1.6 5.2 3.1 6.7 8.3 8.3-5.2 1.6-6.7 3.1-8.3 8.3-1.6-5.2-3.1-6.7-8.3-8.3 5.2-1.6 6.7-3.1 8.3-8.3Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="maintenance-header-label">A little site tune-up</span>
          <span className="maintenance-badge">
            <span aria-hidden="true" className="maintenance-badge-dot" />
            Maintenance mode
          </span>
        </header>

        <section aria-labelledby="maintenance-title" className="maintenance-content">
          <div className="maintenance-copy">
            <p className="maintenance-eyebrow">
              <span aria-hidden="true">✳</span> Good things are in progress
            </p>
            <h1 id="maintenance-title">
              We’re making
              <br />
              things <span>awesome.</span>
            </h1>
            <p className="maintenance-description">
              Our website is taking a little break while we polish things up
              behind the scenes. Thanks for your patience — we can’t wait to
              show you what’s next.
            </p>

            <div aria-label="Maintenance work in progress" className="maintenance-status">
              <span aria-hidden="true" className="maintenance-status-icon">
                <svg fill="none" viewBox="0 0 20 20">
                  <path
                    d="M10 3.2v3m0 7.6v3m6.8-6.8h-3m-7.6 0h-3m11.6-4.8-2.1 2.1m-5.4 5.4-2.1 2.1m9.6 0-2.1-2.1m-5.4-5.4L6.2 5.2"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.7"
                  />
                  <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.7" />
                </svg>
              </span>
              <span className="maintenance-status-copy">
                <strong>Applying a little digital magic</strong>
                <span>Our tiny robot is on the job</span>
              </span>
              <span aria-hidden="true" className="maintenance-status-dots">
                <i />
                <i />
                <i />
              </span>
            </div>

            <div className="maintenance-actions">
              <button
                className="maintenance-button"
                disabled={checking}
                onClick={checkAgain}
                type="button"
              >
                {checking ? "Checking…" : "Check again"}
                <svg
                  aria-hidden="true"
                  className={checking ? "is-spinning" : ""}
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M16.6 8a6.8 6.8 0 0 0-12.2-2L3 7.5m0 0V4m0 3.5h3.5m-3.1 4.5a6.8 6.8 0 0 0 12.2 2l1.4-1.5m0 0V16m0-3.5h-3.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                  />
                </svg>
              </button>
              <span className="maintenance-no-countdown">
                No countdown, just the finishing touches.
              </span>
            </div>
          </div>

          <div className="maintenance-scene">
            <div aria-hidden="true" className="scene-label">
              <span className="scene-label-star">✳</span>
              WORKSHOP
              <span className="scene-label-line" />
              <span>HAPPILY BUSY</span>
            </div>
            <button
              aria-label={
                waving
                  ? "The maintenance bot is waving. Give it another high five."
                  : "Give the maintenance bot a high five"
              }
              aria-pressed={waving}
              className="bot-interaction"
              onClick={() => setWaving((current) => !current)}
              type="button"
            >
              <MaintenanceBot waving={waving} />
              <span className="bot-prompt">
                {waving ? "High five received!" : "Psst… give the bot a high five"}
              </span>
            </button>
            <div aria-hidden="true" className="scene-sticker">
              <span>✦</span>
              <span>good vibes</span>
            </div>
            <div aria-hidden="true" className="scene-caption">
              <span className="scene-caption-dot" />
              <span>BIG IMPROVEMENTS, TINY TOOLS</span>
              <span className="scene-caption-dot" />
            </div>
          </div>
        </section>

        <footer className="maintenance-footer">
          <span>Thanks for hanging in there.</span>
          <span className="footer-sparkle" aria-hidden="true">✳</span>
          <span>We appreciate your patience.</span>
        </footer>
      </div>
    </main>
  );
}
