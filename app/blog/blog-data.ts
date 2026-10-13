export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogArticle = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  intro: string;
  date: string;
  dateValue: string;
  readTime: string;
  image: string;
  imageAlt: string;
  takeaways: string[];
  sections: BlogSection[];
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "seo-roadmap-for-growing-businesses",
    category: "SEO & Growth",
    title: "A practical SEO roadmap for growing businesses",
    excerpt:
      "Build search visibility with a focused foundation, useful content, and steady improvements instead of chasing every new tactic.",
    intro:
      "Search growth is rarely the result of one clever trick. It comes from making your site easier to understand, publishing genuinely useful answers, and improving the experience for the people you want to reach.",
    date: "October 8, 2026",
    dateValue: "2026-10-08",
    readTime: "6 min read",
    image: "/blog-seo.jpg",
    imageAlt: "Analytics dashboard open on a laptop",
    takeaways: [
      "Start with technical and local search basics.",
      "Prioritize topics that match real customer questions.",
      "Review outcomes monthly and adjust with evidence.",
    ],
    sections: [
      {
        heading: "Start with a clear baseline",
        paragraphs: [
          "Before changing pages, understand how your site currently performs. Check whether important pages are indexed, whether mobile pages load comfortably, and which searches already bring qualified visitors.",
          "A short technical review can reveal issues that quietly limit every other effort, such as broken pages, unclear navigation, duplicate titles, or important content that search engines cannot easily reach.",
        ],
      },
      {
        heading: "Choose topics around customer intent",
        paragraphs: [
          "Keyword research is most useful when it starts with the decisions customers are trying to make. Map the questions they ask while comparing options, learning about a service, and deciding who to contact.",
          "Create a small set of strong pages that answer those questions clearly. A helpful service page, a useful comparison, and a thorough guide are often more valuable than a large volume of overlapping posts.",
        ],
      },
      {
        heading: "Make every page easy to act on",
        paragraphs: [
          "Relevant visitors need a clear next step. Make service details specific, explain what makes your approach different, and place a simple contact option where it naturally follows the information.",
          "For businesses serving a particular area, keep contact details consistent and make local service information easy to verify. Trust and usability support search performance as well as conversion.",
        ],
      },
      {
        heading: "Measure progress and keep refining",
        paragraphs: [
          "Track a few meaningful signals: visibility for priority topics, organic visits to key pages, qualified enquiries, and the actions people take after arriving. Rankings alone do not tell the whole story.",
          "Review results regularly, improve pages that are close to performing well, and revisit assumptions as your services and customer needs change. Consistency gives you a clearer picture than constant strategy resets.",
        ],
      },
    ],
  },
  {
    slug: "turn-social-media-into-qualified-leads",
    category: "Social Media",
    title: "Turn social media into a source of qualified leads",
    excerpt:
      "A practical approach to choosing the right channels, creating useful posts, and connecting social attention to business outcomes.",
    intro:
      "A busy social feed is not the same as a strong growth channel. The best social strategy gives the right people a reason to pay attention, a reason to trust you, and a natural path to take the next step.",
    date: "September 24, 2026",
    dateValue: "2026-09-24",
    readTime: "5 min read",
    image: "/blog-social.jpg",
    imageAlt: "Colleagues collaborating at a laptop",
    takeaways: [
      "Choose platforms based on audience and business goals.",
      "Balance helpful expertise with clear offers.",
      "Measure conversations and leads, not just reactions.",
    ],
    sections: [
      {
        heading: "Choose the channels you can serve well",
        paragraphs: [
          "Start with where your customers already spend time and what they expect to find there. A local service provider may benefit from community-focused content, while a business selling to other companies may prioritize professional networks.",
          "A focused presence on one or two suitable channels is easier to sustain than publishing everywhere without a clear purpose. Build a repeatable schedule that fits your team and your audience.",
        ],
      },
      {
        heading: "Make your content useful before it is promotional",
        paragraphs: [
          "Share practical advice, explain how your process works, answer frequent questions, and show the people behind the business. Useful content gives potential customers a way to evaluate your expertise before they enquire.",
          "Promotional posts still have a place. Make the offer specific, explain who it helps, and pair it with one clear action rather than several competing calls to action.",
        ],
      },
      {
        heading: "Create a simple path from interest to enquiry",
        paragraphs: [
          "Keep your profile information current and make it obvious what you do, who you help, and how to reach you. Link to a relevant service page or contact method instead of sending every visitor to a generic destination.",
          "Respond to messages promptly and use a consistent process to understand what a potential customer needs. Thoughtful follow-up turns a social interaction into a useful business conversation.",
        ],
      },
      {
        heading: "Learn from the signals that matter",
        paragraphs: [
          "Reach and engagement help you understand whether content is being seen and resonating. Also track profile visits, link clicks, direct enquiries, and how many conversations become qualified opportunities.",
          "Use those signals to refine your topics and formats. The aim is not to chase every trend; it is to learn what helps your audience make progress and what helps your business grow.",
        ],
      },
    ],
  },
  {
    slug: "content-that-earns-trust-and-visibility",
    category: "Content Strategy",
    title: "Create content that earns trust and visibility",
    excerpt:
      "Turn your expertise into clear, credible content that helps people make decisions and gives your brand a stronger search presence.",
    intro:
      "The strongest content does two jobs at once: it helps a real person solve a real problem, and it makes your expertise easier to discover. That starts with clarity about who you are writing for and what they need to know.",
    date: "September 10, 2026",
    dateValue: "2026-09-10",
    readTime: "5 min read",
    image: "/blog-content.jpg",
    imageAlt: "A fountain pen writing notes on paper",
    takeaways: [
      "Build content around specific audience needs.",
      "Use concrete experience and plain language.",
      "Refresh useful pages as your expertise evolves.",
    ],
    sections: [
      {
        heading: "Begin with a question worth answering",
        paragraphs: [
          "Talk with customers and review the questions your team answers every week. Those conversations are a reliable source of content ideas because they reflect the choices people are already trying to make.",
          "Select a focused question for each page or article. A clear purpose keeps the writing useful and makes it easier for readers to understand why the content matters to them.",
        ],
      },
      {
        heading: "Make your expertise visible",
        paragraphs: [
          "Explain how you reached a recommendation, what trade-offs to consider, and where your experience comes from. Specific examples help readers understand the advice and judge whether it fits their situation.",
          "Avoid claims that sound impressive but do not help someone decide. Be transparent about limitations, timelines, and the information a customer should gather before taking action.",
        ],
      },
      {
        heading: "Write for people first",
        paragraphs: [
          "Use descriptive headings, short paragraphs, and familiar language. Put the most useful information where readers can find it, then add detail for people who want to explore further.",
          "Search optimization should support that experience. Use the language your audience uses, organize related topics thoughtfully, and make sure each page has a clear title and purpose.",
        ],
      },
      {
        heading: "Keep valuable content current",
        paragraphs: [
          "Publishing is only one part of content work. Review your most useful pages to confirm that examples, services, links, and recommendations still reflect what your business can deliver.",
          "A steady review cycle helps you improve content that already attracts attention and keeps your advice aligned with changing customer expectations.",
        ],
      },
    ],
  },
];