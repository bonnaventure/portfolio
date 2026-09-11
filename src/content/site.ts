/* Site-wide content — edit here, never in components. */

export const profile = {
  name: "Jaron Whittingham",
  role: "Senior E-Commerce, MarTech & Digital Transformation Leader",
  email: "hello@jaronwhittingham.com",
  location: "North America · Remote-friendly",
  availability: "Open to senior leadership roles",
  resumeHref: "Jaron_Whittingham_Resume.txt",
};

export interface NavLink {
  label: string;
  href: string;
  index: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", index: "01" },
  { label: "Case Studies", href: "/case-studies", index: "02" },
  { label: "Tech Stack", href: "/stack", index: "03" },
  { label: "About", href: "/about", index: "04" },
];

/* ---------- Tech Stack Matrix ---------- */

export type StackGroupId = "transformation" | "commerce" | "data" | "ops";

export interface StackItem {
  name: string;
  note: string;
}

export interface StackGroup {
  id: StackGroupId;
  index: string;
  title: string;
  tagline: string;
  items: StackItem[];
}

export const stackGroups: StackGroup[] = [
  {
    id: "transformation",
    index: "Q1",
    title: "Transformation & CMS",
    tagline: "Platforms that decouple, connect, and scale.",
    items: [
      { name: "Contentful", note: "headless / API-first CMS" },
      { name: "SAP Marketing Cloud", note: "enterprise lifecycle engine" },
      { name: "Salesforce", note: "CRM core & customer record" },
      { name: "WordPress", note: "commerce-ready front ends" },
      { name: "Storagely", note: "self storage ecomm front-end" },
    ],
  },
  {
    id: "commerce",
    index: "Q2",
    title: "E-Commerce & Growth",
    tagline: "Revenue systems from storefront to retention.",
    items: [
      { name: "Customer Experience", note: "Seamless shopping experience" },
      { name: "Platform Management", note: "Uptime, optimization, and efficiency" },
      { name: "Marketing & Content", note: "Awareness, acquisition & retention" },
      { name: "Automation", note: "Segmentation, targeting & personalization" },
    ],
  },
  {
    id: "data",
    index: "Q3",
    title: "Data & Analytics",
    tagline: "The measurement layer under every decision.",
    items: [
      { name: "GA4", note: "product & web analytics" },
      { name: "BigQuery", note: "warehouse-scale analysis" },
      { name: "AI", note: "insights & automation" },
      { name: "Looker Studio", note: "dashboards & visualization" },
    ],
  },
  {
    id: "ops",
    index: "Q4",
    title: "Ops & Leadership",
    tagline: "How teams ship without burning out.",
    items: [
      { name: "Agile / Scrum · PSM I", note: "certified facilitation" },
      { name: "Jira", note: "delivery & roadmap ops" },
      { name: "Asana", note: "cross-functional coordination" },
    ],
  },
];

export const marqueeItems = [
  "Contentful",
  "SAP Marketing Cloud",
  "Klaviyo",
  "GA4",
  "BigQuery",
  "WordPress",
  "Yardi",
  "Storagely",
];

/* ---------- Proficiency bars (Stack page) ---------- */

export const proficiencies: { name: string; group: string; level: number }[] = [
  { name: "Contentful / Headless CMS", group: "Transformation", level: 95 },
  { name: "GA4 & Measurement Design", group: "Data", level: 92 },
  { name: "CRO & Experimentation", group: "Growth", level: 90 },
  { name: "SAP Marketing Cloud", group: "Transformation", level: 90 },
  { name: "Shopify / Plus Commerce", group: "Growth", level: 88 },
  { name: "Salesforce CRM", group: "Transformation", level: 86 },
  { name: "SQL / BigQuery / Snowflake", group: "Data", level: 84 },
  { name: "Python & AI Workflows", group: "Data", level: 76 },
];

/* ---------- About page ---------- */

export const bio = [
  "With over 15 years of experience spanning from hands-on Webmaster duties to E-Commerce and MarTech Leadership, I operate at the intersection of creativity, technology, and data. My career is defined by digital transformation — not as a buzzword, but as the disciplined work of turning disconnected systems into unified engines for growth.",
];

export interface Competency {
  code: string;
  name: string;
  description: string;
}

export const competencies: Competency[] = [
  {
    code: "CRO",
    name: "Conversion Rate Optimization",
    description:
      "Systematic experimentation across the funnel — hypotheses, instrumentation, and iteration cycles that turn traffic into compounding revenue instead of one-off wins.",
  },
  {
    code: "AEO/GEO",
    name: "Answer & Generative Engine Optimization",
    description:
      "Engineering brand presence for the AI-answer era: structured content, entity authority, and citation strategy so the brand is the answer machines give.",
  },
  {
    code: "AI-WF",
    name: "AI Workflows",
    description:
      "Embedding LLM-assisted pipelines into marketing ops — from content production and segmentation to QA — with governance that keeps output trustworthy.",
  },
  {
    code: "PLG",
    name: "Product-Led Growth",
    description:
      "Designing the product experience as the acquisition loop: onboarding, activation metrics, and content infrastructure fast enough for weekly experimentation.",
  },
  {
    code: "CAT-H",
    name: "Catalog Hygiene",
    description:
      "Treating product data as infrastructure — clean, structured, channel-ready catalogs that make search, merchandising, and feeds perform at every touchpoint.",
  },
];

export interface TimelineEntry {
  years: string;
  title: string;
  org: string;
  description: string;
}

export const timeline: TimelineEntry[] = [
  {
    years: "2009 — 2013",
    title: "Webmaster & Digital Operations",
    org: "Hands-on foundations",
    description:
      "Owned the whole stack of a working website: CMS administration, HTML/CSS builds, hosting, analytics, and the 2 a.m. incident calls. Learned how the web actually breaks.",
  },
  {
    years: "2013 — 2017",
    title: "E-Commerce & CRM Manager",
    org: "DTC operations & lifecycle",
    description:
      "Ran DTC commerce operations end-to-end — storefront, email lifecycle, merchandising, and the first real MarTech stack. Revenue became a design constraint, not a report.",
  },
  {
    years: "2017 — 2021",
    title: "MarTech & Digital Platform Lead",
    org: "Enterprise migrations",
    description:
      "Led platform-scale programs: CRM integrations, marketing automation migrations, and the headless CMS initiative at a national telecom. Architecture became the job.",
  },
  {
    years: "2021 — Present",
    title: "Senior Leader, E-Commerce & Digital Transformation",
    org: "Portfolio-level transformation",
    description:
      "Directing transformation across e-commerce, MarTech, and data — PLG operating models, AI-augmented workflows, and teams that ship systems instead of projects.",
  },
];

/* ---------- Home page: operating principles ---------- */

export const principles = [
  {
    index: "01",
    title: "Systems over heroics",
    body: "A transformation succeeds when it runs without you in the room. I build architectures, governance, and teams that keep compounding after launch day.",
  },
  {
    index: "02",
    title: "Data is the product",
    body: "Clean, connected data is the real deliverable of every migration. Dashboards are downstream of decisions; decisions are downstream of data you trust.",
  },
  {
    index: "03",
    title: "Ship incrementally, prove continuously",
    body: "Big-bang re-platforms die in committee. I sequence value into increments the business can feel each quarter — momentum is a feature.",
  },
  {
    index: "04",
    title: "Automate the repeatable",
    body: "Every hour a human spends re-keying data is an hour stolen from judgment. Sync, webhooks, and lifecycle triggers first — then invest the difference.",
  },
];

export const heroStats = [
  { value: "15+", label: "years in digital" },
  { value: "+90%", label: "email → e-com lift" },
  { value: "7", label: "channels, one model" },
  { value: "3", label: "enterprise migrations" },
];
