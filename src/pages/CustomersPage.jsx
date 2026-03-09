import { Link } from "react-router-dom";
import Seo from "../components/ui/Seo";

const logos = [
  "Airbus",
  "Thales",
  "OVHcloud",
  "Scaleway",
  "BlaBlaCar",
  "Doctolib",
  "Datadog",
  "Qonto",
];

const testimonials = [
  {
    quote:
      "Superviz.io cut our incident response time by 60%. The anomaly detection catches issues our old monitoring completely missed. We've gone from 45-minute MTTR to under 15 minutes.",
    initials: "ML",
    name: "Marc Laurent",
    role: "VP Engineering, CloudScale",
  },
  {
    quote:
      "We replaced three monitoring tools with Superviz.io. One dashboard, one agent, complete visibility. The ROI was immediate — we saved over \u20AC40K per year on licensing alone.",
    initials: "SD",
    name: "Sarah Dubois",
    role: "SRE Lead, FinSecure",
  },
  {
    quote:
      "The Kubernetes monitoring alone is worth it. Auto-discovers pods, tracks resource usage, alerts on OOM kills before they cascade. Our platform team finally sleeps at night.",
    initials: "TN",
    name: "Thomas Nguyen",
    role: "Platform Architect, DataFlow",
  },
];

const metrics = [
  { value: "60%", label: "Faster MTTR" },
  { value: "90%", label: "Less Alert Noise" },
  { value: "3x", label: "Faster Root Cause" },
  { value: "99.9%", label: "Platform Uptime" },
];

const caseStudies = [
  {
    badge: "SaaS",
    title: "CloudScale reduced MTTR by 60%",
    desc: "CloudScale manages 2,000+ servers across three continents. After switching to Superviz.io, their mean time to resolution dropped from 45 minutes to under 15 minutes thanks to ML-powered anomaly detection and automated root-cause analysis.",
    result: "60% reduction in MTTR, 40% fewer pages to on-call engineers.",
  },
  {
    badge: "FinTech",
    title: "FinSecure consolidated 3 tools into 1",
    desc: "FinSecure was paying for separate infrastructure monitoring, APM, and log management tools. Superviz.io replaced all three with a single platform, cutting costs by \u20AC40K/year while improving visibility across their microservices architecture.",
    result: "\u20AC40K annual savings, single-pane-of-glass visibility.",
  },
  {
    badge: "Platform",
    title: "DataFlow tamed Kubernetes chaos",
    desc: "DataFlow runs 500+ pods across 12 namespaces. Superviz.io's auto-discovery and resource tracking eliminated blind spots, catching OOM kills and resource contention before they caused cascading failures.",
    result: "Zero cascading failures in 6 months, 30% resource optimization.",
  },
  {
    badge: "Enterprise",
    title: "Airbus standardized global monitoring",
    desc: "Airbus deployed Superviz.io across 50+ sites to create a unified monitoring standard. The SSO integration, RBAC controls, and audit logging met their stringent compliance requirements while giving teams real-time visibility.",
    result: "Unified monitoring across 50 sites, full compliance audit trail.",
  },
];

export default function CustomersPage() {
  return (
    <>
      <Seo path="/customers" />
      <section className="page-header-glow relative pt-[calc(72px+4rem)] pb-16 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="inline-block px-3 py-1 bg-accent-subtle text-text-accent text-xs font-semibold uppercase tracking-wider rounded-full border border-border-accent-subtle">
            Customer Stories
          </span>
          <h1 className="text-5xl font-bold tracking-tight mt-4 mb-4">
            Trusted by teams that
            <br />
            <span className="text-gradient">can&apos;t afford downtime</span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-[800px] mt-4 mx-auto">
            From startups to Fortune 500, engineering teams choose Superviz.io
            for real-time visibility and faster incident response.
          </p>
        </div>
      </section>

      <section className="py-12 border-t border-b border-border-default">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-text-muted text-sm mb-8 uppercase tracking-widest font-semibold">
            Companies monitoring with Superviz.io
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-50">
            {logos.map((l) => (
              <span
                key={l}
                className="text-lg font-semibold text-text-muted tracking-wider"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight">
              What our customers <span className="text-gradient">say</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-bg-card border border-border-default rounded-2xl p-8"
              >
                <div className="testimonial-quote text-base text-text-secondary leading-relaxed italic mb-6">
                  {t.quote}
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-accent to-accent-gradient-end flex items-center justify-center font-bold text-sm text-white shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-text-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight">
              Customer <span className="text-gradient">results</span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed max-w-[800px] mt-4 mx-auto">
              Real numbers from real teams using Superviz.io in production.
            </p>
          </div>
          <div className="flex justify-center gap-16 flex-wrap max-w-[900px] mx-auto">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-4xl font-extrabold text-gradient">
                  {m.value}
                </div>
                <div className="text-sm text-text-muted mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight">
              Case <span className="text-gradient">studies</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs) => (
              <div
                key={cs.title}
                className="bg-bg-card border border-border-default rounded-2xl p-8 relative overflow-hidden feature-card-border hover:border-border-accent-medium hover:bg-bg-card-hover hover:-translate-y-0.5 hover:shadow-glow transition-all duration-200"
              >
                <span className="inline-block px-3 py-1 bg-accent-subtle text-text-accent text-xs font-semibold uppercase tracking-wider rounded-full border border-border-accent-subtle mb-4">
                  {cs.badge}
                </span>
                <h3 className="text-xl font-bold mb-3">{cs.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {cs.desc}
                </p>
                <p className="mt-4">
                  <strong className="text-text-primary">Key result:</strong>{" "}
                  <span className="text-text-secondary">{cs.result}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-glow relative text-center py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Join thousands of teams using{" "}
            <span className="text-gradient">Superviz.io</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-[800px] mx-auto mb-8">
            Start monitoring for free. See results in minutes.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white text-base font-semibold rounded-2xl shadow-accent-sm hover:bg-accent-hover hover:shadow-accent-lg hover:-translate-y-px transition-all duration-200 no-underline"
            >
              Start Free Trial &rarr;
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-text-primary text-base font-semibold rounded-2xl border border-border-default hover:border-text-accent hover:text-text-accent transition-all duration-200 no-underline"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
