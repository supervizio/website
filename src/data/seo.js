const BASE_URL = "https://superviz.io";
const OG_IMAGE = `${BASE_URL}/images/og-image.png`;

const defaults = {
  ogType: "website",
  twitterCard: "summary_large_image",
  ogImage: OG_IMAGE,
};

const seo = {
  "/": {
    ...defaults,
    title: "Superviz.io — Real-Time Infrastructure Monitoring",
    description:
      "Monitor your entire infrastructure in real time. Get instant alerts, deep visibility, and actionable insights. Trusted by IT teams worldwide.",
    ogTitle: "Superviz.io — Real-Time Infrastructure Monitoring",
    ogDescription:
      "Monitor your entire infrastructure in real time. Instant alerts, deep visibility, actionable insights.",
    ogUrl: BASE_URL,
    canonical: BASE_URL,
  },
  "/features": {
    ...defaults,
    title: "Features — Superviz.io",
    description:
      "Explore Superviz.io's monitoring features: real-time metrics, intelligent alerts, custom dashboards, 500+ integrations, and more.",
    canonical: `${BASE_URL}/features`,
  },
  "/pricing": {
    ...defaults,
    title: "Pricing — Superviz.io",
    description:
      "Superviz.io pricing: Free for up to 5 hosts. Pro and Enterprise plans for teams that need advanced monitoring, SSO, and dedicated support.",
    canonical: `${BASE_URL}/pricing`,
  },
  "/enterprise": {
    ...defaults,
    title: "Enterprise — Superviz.io",
    description:
      "Superviz.io Enterprise: dedicated infrastructure, SSO, RBAC, SLA guarantees, and 24/7 support for large-scale monitoring deployments.",
    canonical: `${BASE_URL}/enterprise`,
  },
  "/customers": {
    ...defaults,
    title: "Customers — Superviz.io",
    description:
      "See how engineering teams at Airbus, Thales, OVHcloud, and more use Superviz.io to monitor infrastructure and reduce incidents.",
    canonical: `${BASE_URL}/customers`,
  },
  "/about": {
    ...defaults,
    title: "About — Superviz.io",
    description:
      "Superviz.io is on a mission to make infrastructure monitoring simple, fast, and accessible for every engineering team.",
    canonical: `${BASE_URL}/about`,
  },
  "/contact": {
    ...defaults,
    title: "Contact — Superviz.io",
    description:
      "Get in touch with the Superviz.io team. Sales inquiries, technical support, partnership requests, and general questions.",
    canonical: `${BASE_URL}/contact`,
  },
  "/legal": {
    ...defaults,
    title: "Legal Notices — Superviz.io",
    description:
      "Superviz.io legal notices: company information, hosting details, intellectual property, and regulatory disclosures.",
    canonical: `${BASE_URL}/legal`,
  },
  "/privacy": {
    ...defaults,
    title: "Privacy Policy — Superviz.io",
    description:
      "Superviz.io Privacy Policy. Learn how we collect, use, and protect your personal data and monitoring metrics.",
    canonical: `${BASE_URL}/privacy`,
  },
  "/terms": {
    ...defaults,
    title: "Terms of Service — Superviz.io",
    description:
      "Superviz.io Terms of Service. Read our terms and conditions governing the use of our monitoring platform.",
    canonical: `${BASE_URL}/terms`,
  },
  "/404": {
    ...defaults,
    title: "Page Not Found — Superviz.io",
    description:
      "The page you're looking for doesn't exist or has been moved. Return to the Superviz.io homepage.",
    canonical: BASE_URL,
  },
};

export default seo;
