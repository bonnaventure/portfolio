/* ============================================================================
 * CONTENT COLLECTION — case-studies
 * ----------------------------------------------------------------------------
 * The equivalent of an Astro Content Collection (`defineCollection`).
 *
 * TO ADD A NEW CASE STUDY:
 *   1. Copy any entry below into a new object in `caseStudies`.
 *   2. Fill in the fields (schema enforced by TypeScript, like Zod frontmatter).
 *   3. Done — it appears in the index grid, the home page, prev/next nav,
 *      and gets its own detail route at #/case-studies/<slug>. No code changes.
 * ==========================================================================*/

export type CaseCategory = "Digital Transformation" | "E-Commerce Growth";

export interface CaseMetric {
  value: string;
  label: string;
  note?: string;
}

export interface CaseBlock {
  lede: string;
  body: string[];
  bullets: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  category: CaseCategory;
  tags: string[];
  /** ISO date — equivalent of Astro frontmatter `published` */
  published: string;
  client: string;
  sector: string;
  role: string;
  timeline: string;
  stack: string[];
  metrics: CaseMetric[];
  summary: string;
  challenge: CaseBlock;
  transformation: CaseBlock;
  impact: CaseBlock;
  quote: { text: string; attribution: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "mini-mall-storage",
    title: "Unified E-Commerce & Facility Management Ecosystem",
    subtitle:
      "A real-time API bridge between the customer storefront and back-end operations for a multi-location self-storage operator.",
    category: "Digital Transformation",
    tags: ["API Integration", "WordPress", "Storagely", "Yardi", "E-Commerce"],
    published: "2024-09-12",
    client: "Mini Mall Storage",
    sector: "Self-Storage / Real Estate",
    role: "Digital Transformation Lead",
    timeline: "6 months · discovery → launch",
    stack: ["WordPress", "Storagely API", "Yardi", "REST / Webhooks", "Stripe", "GA4"],
    metrics: [
      { value: "100%", label: "real-time availability sync", note: "every unit, every location" },
      { value: "3.2×", label: "online booking growth", note: "within two quarters of launch" },
      { value: "−38%", label: "manual touches per reservation", note: "ops hours returned to growth work" },
    ],
    summary:
      "Disjointed booking experiences and siloed back-end operations were costing reservations and trust. We shipped a new e-commerce front end and engineered the real-time API layer that made the website and the facility management system tell the same truth.",
    challenge: {
      lede: "Two systems, two stories — and the customer caught in the middle.",
      body: [
        "Customers could browse units online but couldn't trust what they saw. Availability on the marketing site drifted from the facility management system, reservations were phoned in or walked in, and every booking required a human to reconcile what the website promised with what operations actually knew.",
        "Behind the counter the problem compounded. Storagely ran rentals and gate access while Yardi carried the accounting ledger — two sources of truth stitched together with spreadsheets and end-of-day exports. Data silos meant double-bookings, stale rates, and no single view of the customer.",
      ],
      bullets: [
        "Web availability lagged the PMS by hours, eroding booking confidence",
        "Reservations logged manually across phone, email, and walk-in channels",
        "Rates and promotions required dual entry — slow, error-prone, un-auditable",
        "No unified customer record for service or remarketing follow-up",
      ],
    },
    transformation: {
      lede: "Rebuild the storefront as a product; engineer the connective tissue.",
      body: [
        "We rebuilt the front end as a true e-commerce product on WordPress — unit search, live availability, transparent pricing, and self-serve reservations with instant confirmation. Every page now sells what operations can actually deliver.",
        "Then we engineered the connective tissue: a real-time, bidirectional API layer between the storefront, Storagely, and Yardi. Unit status, rates, and reservations now flow automatically in both directions — webhooks replaced exports, and a single customer record replaced the spreadsheet.",
      ],
      bullets: [
        "Real-time availability and rate sync via Storagely REST APIs",
        "Automated reservation lifecycle: hold → lease → gate access, no re-keying",
        "Webhook-driven inventory updates replacing nightly batch exports",
        "Unified customer profiles feeding service and remarketing workflows",
      ],
    },
    impact: {
      lede: "The silos weren't managed — they were deleted.",
      body: [
        "With one source of truth, the website became trustworthy, the front desk got its hours back, and the business finally saw the same numbers everywhere. The ecosystem now compounds: every improvement to the data model makes both the customer journey and the operations dashboard better at once.",
      ],
      bullets: [
        "Eliminated data silos between web, facility management, and accounting",
        "Automated inventory syncing end-to-end — zero dual entry",
        "A frictionless customer journey from search to signed lease",
        "Foundation laid for dynamic pricing and portfolio-wide analytics",
      ],
    },
    quote: {
      text: "For the first time, what the website says and what the gate opens are the same thing.",
      attribution: "Director of Operations, Mini Mall Storage",
    },
  },
  {
    slug: "ufa-sap-migration",
    title: "Enterprise MarTech Modernization (Legacy to SAP)",
    subtitle:
      "From manual batch email to CRM-powered lifecycle marketing on SAP Marketing Cloud.",
    category: "Digital Transformation",
    tags: ["SAP Marketing Cloud", "Salesforce", "CRM", "Lifecycle Marketing", "Data Segmentation"],
    published: "2023-11-02",
    client: "United Farmers of Alberta (UFA)",
    sector: "Retail & Energy Co-operative",
    role: "MarTech Migration Lead",
    timeline: "9 months · roadmap → enablement",
    stack: ["SAP Marketing Cloud", "Salesforce", "SAP Commerce", "SQL", "GA4"],
    metrics: [
      { value: "+90%", label: "e-commerce transactions from email", note: "year over year, post-migration" },
      { value: "14", label: "lifecycle journeys in production", note: "welcome through win-back" },
      { value: "99.1%", label: "inbox placement rate", note: "up from a legacy-blast baseline" },
    ],
    summary:
      "A legacy email tool with no CRM or e-commerce data integration kept the program guessing. I led the migration to CRM-powered SAP Marketing Cloud and built hyper-segmentation on e-commerce match-lists — turning broadcasts into a lifecycle system that drove a 90% lift in e-commerce transactions from email.",
    challenge: {
      lede: "A broadcast tool in a personalization economy.",
      body: [
        "The program ran on a legacy email tool built for batches, not behavior. Campaigns were assembled by hand from static lists with no live view into CRM or e-commerce data — so every send was a guess about who was actually ready to buy.",
        "Without deep integration, segmentation meant broad demographics instead of purchase intent. There was no lifecycle architecture, no suppressed audiences, no shared customer record — and no way to prove what email actually contributed to revenue.",
      ],
      bullets: [
        "Manual list builds with no CRM or e-commerce data integration",
        "One-size sends instead of intent-based segmentation",
        "No lifecycle framework — welcome, replenishment, and win-back were absent",
        "Attribution was anecdotal; deliverability suffered under legacy infrastructure",
      ],
    },
    transformation: {
      lede: "Make the customer record the engine, not an attachment.",
      body: [
        "I led the migration to SAP Marketing Cloud, wired directly to Salesforce and the e-commerce platform. The customer record — purchases, service interactions, co-op membership — became the engine every campaign ran on.",
        "On that foundation we built hyper-segmentation using e-commerce match-lists: recency, category affinity, and lifetime value cut into audiences precise enough to feel personal. Then we shipped the lifecycle framework — welcome, replenishment, cross-sell, and win-back journeys triggered by behavior, not calendars.",
      ],
      bullets: [
        "CRM-powered segmentation on live Salesforce and order data",
        "Hyper-segmented audiences built from e-commerce match-lists",
        "14 automated lifecycle journeys across the full customer arc",
        "Governance, naming standards, and team enablement on the new platform",
      ],
    },
    impact: {
      lede: "A program that compounds instead of restarting every quarter.",
      body: [
        "Email stopped being a broadcast channel and became a revenue engine with a provable line to the P&L. The team now designs for lifecycle stages instead of campaign calendars, and every journey added makes the ones before it smarter.",
      ],
      bullets: [
        "Drove a 90% increase in e-commerce transactions from email",
        "Transitioned the team from batch blasts to dynamic lifecycle marketing",
        "Deliverability and engagement recovered as relevance went up",
        "A scalable MarTech foundation the co-operative can extend for years",
      ],
    },
    quote: {
      text: "We went from sending campaigns to running a system.",
      attribution: "VP, Digital & CRM",
    },
  },
  {
    slug: "shaw-headless-cms",
    title: "Headless CMS Architecture Migration",
    subtitle:
      "Decoupling content from presentation to unlock omnichannel publishing at enterprise scale.",
    category: "Digital Transformation",
    tags: ["Contentful", "Headless CMS", "Omnichannel", "Product-Led Growth", "Drupal"],
    published: "2022-06-21",
    client: "Shaw Communications",
    sector: "Telecommunications",
    role: "Headless CMS Program Director",
    timeline: "12 months · audit → incremental cutover",
    stack: ["Contentful", "Drupal", "Ektron", "REST / GraphQL", "Edge Caching", "Snowflake"],
    metrics: [
      { value: "−44%", label: "median LCP on migrated templates", note: "field-verified via RUM" },
      { value: "12×", label: "faster content publish cycles", note: "days of coordination → hours" },
      { value: "7", label: "channels served from one content model", note: "web, app, IVR, retail…" },
    ],
    summary:
      "A monolithic Ektron/Drupal estate had made content a deployment dependency. I directed the migration to a headless architecture on Contentful — decoupling content from the presentation layer to enable true omnichannel publishing, faster pages, and agile workflows built for Product-Led Growth.",
    challenge: {
      lede: "Content held hostage by the presentation layer.",
      body: [
        "Two monolithic CMS estates — Ektron and Drupal — locked content inside templating code. Every copy change rode a release train, every new channel required a rebuild, and pages shipped carrying more legacy framework than customer value.",
        "The coupling created bottlenecks everywhere: marketing waited on engineering just to publish, performance sagged under heavyweight page assembly, and omnichannel delivery remained a slideware promise rather than an architecture.",
      ],
      bullets: [
        "Content trapped inside monolithic Ektron/Drupal templates",
        "Copy and campaign changes required full deployment cycles",
        "Heavy server-rendered pages dragging down Core Web Vitals",
        "No viable path to serve apps, kiosks, or IVR from one source",
      ],
    },
    transformation: {
      lede: "Content as structured data, delivered by API, rendered anywhere.",
      body: [
        "I directed the migration to a headless architecture on Contentful — content modeled as structured, channel-agnostic entries, delivered by API, rendered wherever the customer actually is. The presentation layer became a consumer of content, not its container.",
        "We cut over incrementally, template by template, so the business never stopped shipping. Editorial workflows were redesigned around structured content with preview, scheduling, and role-based governance — giving product teams the velocity Product-Led Growth demands.",
      ],
      bullets: [
        "Channel-agnostic content model in Contentful with strict schema governance",
        "Incremental migration with zero publishing downtime",
        "API-first delivery with REST/GraphQL and edge caching ahead of renderers",
        "Editorial workflows rebuilt for preview, scheduling, and self-serve publishing",
      ],
    },
    impact: {
      lede: "Publishing became a marketing decision, not an engineering ticket.",
      body: [
        "Decoupling changed the economics of content. Pages got fast because they got light, every new channel became a consumer of the same trusted model, and product teams could finally experiment at the speed PLG requires.",
      ],
      bullets: [
        "Enabled true omnichannel publishing from a single source of truth",
        "Significant load-time improvements across migrated experiences",
        "Agile, self-serve workflows that unlocked Product-Led Growth experiments",
        "Legacy estates retired on schedule, cutting licensing and maintenance spend",
      ],
    },
    quote: {
      text: "Marketing finally moves at the speed of the product roadmap.",
      attribution: "Director, Digital Experience",
    },
  },
];

/* ---------- helpers (equivalent of Astro's `getCollection` / `getEntry`) ---------- */

export const getCaseStudies = (): CaseStudy[] =>
  [...caseStudies].sort((a, b) => +new Date(b.published) - +new Date(a.published));

export const getCaseStudy = (slug: string): CaseStudy | undefined =>
  caseStudies.find((c) => c.slug === slug);

export const getAdjacentCaseStudies = (slug: string): { prev?: CaseStudy; next?: CaseStudy } => {
  const all = getCaseStudies();
  const i = all.findIndex((c) => c.slug === slug);
  if (i === -1) return {};
  return { prev: all[i - 1], next: all[i + 1] };
};

export const allTags = (): string[] =>
  Array.from(new Set(caseStudies.flatMap((c) => c.tags))).sort();
