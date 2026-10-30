import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/blog/sitecore-or-umbraco-enterprise-multi-market-security-scalability",
        destination: "/blog/sitecore-vs-umbraco-enterprise-security-scalability",
        permanent: true,
      },
      {
        source: "/blog/nashik-trimbakeshwar-mahakumbh-2026-27-guide",
        destination: "/nashik-trimbakeshwar-mahakumbh-2026-27-guide",
        permanent: true,
      },
    ];
  },
  experimental: {
    agentFeedback: true,
    agentUpgrade: "security",
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
