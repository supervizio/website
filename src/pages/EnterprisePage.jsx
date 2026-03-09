import { Link } from "react-router-dom";
import Seo from "../components/ui/Seo";

const security = [
  {
    icon: "\uD83D\uDEE1\uFE0F",
    title: "SOC 2 Type II",
    desc: "Annual independent audits verify our security controls. Full report available under NDA for enterprise customers.",
  },
  {
    icon: "\uD83D\uDD12",
    title: "End-to-End Encryption",
    desc: "TLS 1.3 in transit, AES-256 at rest. Customer-managed encryption keys (CMEK) available for sensitive workloads.",
  },
  {
    icon: "\uD83C\uDFAF",
    title: "GDPR & HIPAA",
    desc: "Data residency in EU and US. Full GDPR compliance with DPA. HIPAA BAA available for healthcare customers.",
  },
];

const teamFeatures = [
  {
    icon: "\uD83D\uDC65",
    title: "SSO & SAML",
    desc: "Single sign-on with Okta, Azure AD, Google Workspace, and any SAML 2.0 or OIDC provider. Enforce MFA across your organization.",
  },
  {
    icon: "\uD83D\uDD12",
    title: "Role-Based Access",
    desc: "Granular RBAC with custom roles. Control who can view dashboards, edit alerts, manage integrations, or access billing.",
  },
  {
    icon: "\uD83D\uDCD1",
    title: "Audit Logs",
    desc: "Complete audit trail of every action. Who changed what, when, and why. Export to your SIEM for centralized compliance.",
  },
  {
    icon: "\uD83C\uDF0E",
    title: "Multi-Region",
    desc: "Deploy across multiple regions for data sovereignty. Choose where your metrics are stored: EU, US, or Asia-Pacific.",
  },
  {
    icon: "\uD83D\uDCC8",
    title: "Unlimited Dashboards",
    desc: "No limits on dashboards, alerts, or team members. Create department-specific views with fine-grained sharing controls.",
  },
  {
    icon: "\u2699\uFE0F",
    title: "Dedicated Support",
    desc: "Named account manager, 24/7 priority support with a 15-minute response SLA, and quarterly business reviews.",
  },
];

const deployments = [
  {
    icon: "\u2601\uFE0F",
    title: "Superviz.io Cloud",
    desc: "Fully managed SaaS. We handle infrastructure, updates, and scaling. The fastest way to get started with zero operational overhead.",
    items: [
      "Automatic updates and patches",
      "99.9% uptime SLA",
      "Managed backups and disaster recovery",
    ],
  },
  {
    icon: "\uD83D\uDCBB",
    title: "Dedicated Cloud",
    desc: "Single-tenant infrastructure in your preferred cloud region. Isolated compute and storage with full network controls.",
    items: [
      "Isolated single-tenant environment",
      "Custom network policies and VPC peering",
      "Dedicated encryption keys (CMEK)",
    ],
  },
  {
    icon: "\uD83C\uDFE2",
    title: "On-Premise",
    desc: "Run Superviz.io inside your own data center. Full control over data and network. Air-gapped deployments supported.",
    items: [
      "Complete data sovereignty",
      "Air-gapped deployment option",
      "Kubernetes or bare-metal installation",
    ],
  },
];

export default function EnterprisePage() {
  return (
    <>
      <Seo path="/enterprise" />
      <section className="page-header-glow relative pt-[calc(72px+4rem)] pb-16 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="inline-block px-3 py-1 bg-accent-subtle text-text-accent text-xs font-semibold uppercase tracking-wider rounded-full border border-border-accent-subtle">
            Enterprise
          </span>
          <h1 className="text-5xl font-bold tracking-tight mt-4 mb-4">
            Monitoring built for
            <br />
            <span className="text-gradient">scale and compliance</span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-[800px] mt-4 mx-auto">
            Dedicated infrastructure, advanced security, and 24/7 support.
            Superviz.io Enterprise is trusted by Fortune 500 companies and
            fast-growing startups alike.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white text-base font-semibold rounded-2xl shadow-accent-sm hover:bg-accent-hover hover:shadow-accent-lg hover:-translate-y-px transition-all duration-200 no-underline"
            >
              Talk to Sales &rarr;
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-text-primary text-base font-semibold rounded-2xl border border-border-default hover:border-text-accent hover:text-text-accent transition-all duration-200 no-underline"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight">
              Enterprise-grade <span className="text-gradient">security</span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed max-w-[800px] mt-4 mx-auto">
              Your data stays protected with industry-leading security controls
              and compliance certifications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {security.map((s) => (
              <div
                key={s.title}
                className="text-center p-8 border border-border-default rounded-2xl bg-bg-card"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-text-secondary text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight">
              Built for <span className="text-gradient">large teams</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamFeatures.map((f) => (
              <div
                key={f.title}
                className="bg-bg-card border border-border-default rounded-2xl p-8 relative overflow-hidden feature-card-border hover:border-border-accent-medium hover:bg-bg-card-hover hover:-translate-y-0.5 hover:shadow-glow transition-all duration-200"
              >
                <div className="w-12 h-12 bg-accent-subtle rounded-[10px] flex items-center justify-center text-2xl mb-5">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight">
              Deployment <span className="text-gradient">options</span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed max-w-[800px] mt-4 mx-auto">
              Choose the deployment model that fits your security and compliance
              requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deployments.map((d) => (
              <div
                key={d.title}
                className="bg-bg-card border border-border-default rounded-2xl p-8 relative overflow-hidden feature-card-border hover:border-border-accent-medium hover:bg-bg-card-hover hover:-translate-y-0.5 hover:shadow-glow transition-all duration-200"
              >
                <div className="w-12 h-12 bg-accent-subtle rounded-[10px] flex items-center justify-center text-2xl mb-5">
                  {d.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{d.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {d.desc}
                </p>
                <ul className="mt-4 text-text-secondary leading-loose">
                  {d.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-glow relative text-center py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Ready to scale your{" "}
            <span className="text-gradient">monitoring?</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-[800px] mx-auto mb-8">
            Talk to our sales team about Enterprise pricing, deployment options,
            and a custom proof-of-concept.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white text-base font-semibold rounded-2xl shadow-accent-sm hover:bg-accent-hover hover:shadow-accent-lg hover:-translate-y-px transition-all duration-200 no-underline"
            >
              Request a Demo &rarr;
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-text-primary text-base font-semibold rounded-2xl border border-border-default hover:border-text-accent hover:text-text-accent transition-all duration-200 no-underline"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
