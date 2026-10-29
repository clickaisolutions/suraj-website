export type Service = {
  slug: string;
  name: string;
  category: string;
  description: string;
  headline: string;
  intro: string;
  benefits: string[];
  deliverables: string[];
  process: string[];
  idealFor: string;
};

export const services: Service[] = [
  {
    slug: "seo-aeo-geo",
    name: "SEO, AEO & GEO",
    category: "Search visibility",
    description:
      "Improve visibility across search engines, answer engines, and generative AI platforms with strategic optimization and structured content.",
    headline: "Be easier to find, understand, and choose.",
    intro:
      "Build a stronger search presence with an integrated approach to traditional SEO, answer engine optimization, and generative engine optimization. We help your business show up with useful, clear information wherever customers are looking.",
    benefits: [
      "Make important pages easier for search engines to discover and understand.",
      "Create clear answers for people researching your products and services.",
      "Strengthen your website structure, content, and local search presence.",
    ],
    deliverables: [
      "Technical and on-page SEO recommendations",
      "Keyword and search intent research",
      "Answer-focused content structure",
      "Local visibility and listing guidance",
    ],
    process: ["Audit", "Prioritize", "Optimize", "Measure"],
    idealFor:
      "Businesses that want to grow qualified organic discovery and build long-term search visibility.",
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    category: "Audience & community",
    description:
      "Build a consistent, engaging brand presence that connects with your audience and drives meaningful community growth.",
    headline: "Turn everyday scrolling into meaningful connection.",
    intro:
      "Show up consistently with a social presence that sounds like your brand and speaks to the people you want to reach. We connect planning, creative content, publishing, and learning into one practical program.",
    benefits: [
      "Build a recognizable and consistent brand voice across channels.",
      "Share useful, engaging content that gives audiences a reason to return.",
      "Use performance insights to keep improving your social presence.",
    ],
    deliverables: [
      "Channel and audience planning",
      "Monthly content calendars",
      "Post copy and creative direction",
      "Publishing and performance reviews",
    ],
    process: ["Discover", "Plan", "Create", "Refine"],
    idealFor:
      "Brands that want a more consistent social presence and stronger relationships with their audience.",
  },
  {
    slug: "performance-marketing",
    name: "Performance Marketing",
    category: "Paid growth",
    description:
      "Launch high-performing ad campaigns that reach the right audience, generate leads, and improve conversions.",
    headline: "Make every campaign work toward a clear goal.",
    intro:
      "Bring strategy, creative, targeting, and measurement together to support your business goals. We help plan and optimize paid campaigns around the audiences and actions that matter to your business.",
    benefits: [
      "Align campaign activity with clear business objectives.",
      "Reach relevant audiences across suitable advertising channels.",
      "Use ongoing measurement to guide thoughtful optimization.",
    ],
    deliverables: [
      "Campaign and audience strategy",
      "Google and Meta Ads planning",
      "Ad copy and creative recommendations",
      "Performance monitoring and reporting",
    ],
    process: ["Set goals", "Build", "Launch", "Optimize"],
    idealFor:
      "Businesses looking to support lead generation, product discovery, or sales with measurable paid campaigns.",
  },
  {
    slug: "email-marketing",
    name: "Email Marketing",
    category: "Customer relationships",
    description:
      "Nurture leads and strengthen customer relationships with personalized, strategic email campaigns and automation.",
    headline: "Build customer relationships beyond the inbox.",
    intro:
      "Keep your audience informed and engaged with thoughtful email communication. From campaign planning to useful automations, we help create messages that support the customer journey without adding noise.",
    benefits: [
      "Share timely updates and relevant offers with your subscribers.",
      "Create more consistent communication throughout the customer journey.",
      "Use campaign insights to improve future messages.",
    ],
    deliverables: [
      "Email strategy and campaign planning",
      "Newsletter and promotional copy",
      "Welcome and nurture flow recommendations",
      "Campaign performance reviews",
    ],
    process: ["Understand", "Segment", "Create", "Improve"],
    idealFor:
      "Teams that want to nurture leads, support repeat engagement, and communicate more consistently with customers.",
  },
  {
    slug: "content-marketing",
    name: "Content Marketing",
    category: "Brand storytelling",
    description:
      "Create expert-driven content that builds trust, answers customer questions, and supports your wider marketing goals.",
    headline: "Give your audience something worth coming back to.",
    intro:
      "Make your expertise useful through a focused content strategy. We help shape the topics, formats, and publishing plans that answer customer questions and support your wider marketing activity.",
    benefits: [
      "Connect content topics to real audience needs and business priorities.",
      "Build trust by communicating your expertise clearly.",
      "Create useful assets that support search, social, and sales conversations.",
    ],
    deliverables: [
      "Content strategy and topic planning",
      "Editorial calendars",
      "Website and blog copy",
      "Content repurposing recommendations",
    ],
    process: ["Research", "Plan", "Create", "Distribute"],
    idealFor:
      "Businesses with expertise to share that want a clearer, more consistent content program.",
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    category: "Visual identity",
    description:
      "Produce professional visuals that make your brand stand out across campaigns, social media, and marketing collateral.",
    headline: "Make your brand instantly more recognizable.",
    intro:
      "Create a cohesive visual experience across the places your customers meet your brand. We pair thoughtful design with practical channel requirements to make each asset feel consistent and purposeful.",
    benefits: [
      "Present a more consistent look across marketing channels.",
      "Make campaign messages clearer with considered visual design.",
      "Create adaptable assets for both digital and print use.",
    ],
    deliverables: [
      "Social media and campaign graphics",
      "Digital advertising creative",
      "Marketing collateral",
      "Visual direction and asset guidelines",
    ],
    process: ["Brief", "Explore", "Design", "Deliver"],
    idealFor:
      "Brands that need polished, consistent creative for campaigns, social channels, or business communications.",
  },
  {
    slug: "video-editing",
    name: "Video Editing",
    category: "Video & storytelling",
    description:
      "Transform raw footage into compelling video content tailored for social media, advertising, and brand storytelling.",
    headline: "Shape your footage into stories people remember.",
    intro:
      "Turn raw footage and ideas into clear, engaging video content. We shape edits around your message, audience, and platform so each video feels intentional and ready to share.",
    benefits: [
      "Communicate your message in a more engaging visual format.",
      "Adapt video content to the requirements of different platforms.",
      "Keep your brand look and storytelling consistent across edits.",
    ],
    deliverables: [
      "Short-form social video edits",
      "Promotional and brand videos",
      "Captions, titles, and simple motion elements",
      "Platform-ready exports",
    ],
    process: ["Brief", "Select", "Edit", "Finalize"],
    idealFor:
      "Businesses with footage or stories to share that want polished video for digital channels.",
  },
  {
    slug: "website-development",
    name: "Website Development",
    category: "Digital experience",
    description:
      "Build responsive, SEO-friendly websites that reflect your brand and support your business objectives effectively.",
    headline: "Give your business a website built to move forward.",
    intro:
      "Create a fast, responsive website that communicates your value and makes the next step clear. We bring design, content, usability, and search fundamentals together around your business goals.",
    benefits: [
      "Give visitors a clear and consistent experience across devices.",
      "Make your services and next steps easy to understand.",
      "Build on sound foundations for accessibility and search visibility.",
    ],
    deliverables: [
      "Website structure and page planning",
      "Responsive design and development",
      "On-page SEO foundations",
      "Launch support and quality checks",
    ],
    process: ["Discover", "Structure", "Build", "Launch"],
    idealFor:
      "Businesses creating a new website or improving an existing experience to better support customers.",
  },
  {
    slug: "whatsapp-marketing",
    name: "WhatsApp Marketing",
    category: "Direct communication",
    description:
      "Use direct, personalized messaging to nurture customers, promote offers, and keep your audience engaged.",
    headline: "Start more useful conversations with your customers.",
    intro:
      "Use WhatsApp as a considered customer communication channel. We help shape relevant messages and campaign plans that make it easier to share updates, answer questions, and keep conversations moving.",
    benefits: [
      "Keep customer communication direct and conversational.",
      "Share useful updates, reminders, and promotions with context.",
      "Plan messaging that respects audience expectations and consent.",
    ],
    deliverables: [
      "WhatsApp campaign planning",
      "Message and offer copy",
      "Audience and conversation flow recommendations",
      "Engagement review and optimization",
    ],
    process: ["Set intent", "Plan", "Connect", "Learn"],
    idealFor:
      "Businesses that want a more personal way to share timely updates and support customer conversations.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
