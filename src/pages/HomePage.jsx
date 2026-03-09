import { Link } from "react-router-dom";
import Seo from "../components/ui/Seo";

const heroMetrics = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "<30s", label: "Alert Latency" },
  { value: "500+", label: "Integrations" },
  { value: "10K+", label: "Servers Monitored" },
];

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

const features = [
  {
    icon: "\u26A1",
    title: "Real-Time Monitoring",
    desc: "Sub-second metric collection across servers, containers, and cloud instances. See what's happening right now, not five minutes ago.",
  },
  {
    icon: "\uD83D\uDD14",
    title: "Intelligent Alerts",
    desc: "ML-powered anomaly detection reduces alert noise by 90%. Get notified about real issues, not false positives.",
  },
  {
    icon: "\uD83D\uDCC8",
    title: "Custom Dashboards",
    desc: "Build dashboards that tell a story. Drag-and-drop widgets, real-time charts, and shareable views for every team.",
  },
  {
    icon: "\uD83D\uDD0C",
    title: "500+ Integrations",
    desc: "Connect to AWS, GCP, Azure, Kubernetes, Docker, Prometheus, and hundreds more. One agent, full visibility.",
  },
  {
    icon: "\uD83D\uDCCA",
    title: "Automated Reports",
    desc: "Weekly and monthly reports generated automatically. Uptime stats, incident summaries, capacity forecasts.",
  },
  {
    icon: "\uD83D\uDD10",
    title: "API & Extensibility",
    desc: "Full REST API for custom integrations. Webhooks, Terraform provider, and CLI tools for your pipeline.",
  },
];

const security = [
  {
    icon: "\uD83D\uDEE1\uFE0F",
    title: "SOC 2 Type II",
    desc: "Annual independent audits verify our security controls. Your data is protected by industry-leading standards.",
  },
  {
    icon: "\uD83D\uDD12",
    title: "End-to-End Encryption",
    desc: "TLS 1.3 in transit, AES-256 at rest. Zero plaintext storage of sensitive metrics.",
  },
  {
    icon: "\uD83C\uDFAF",
    title: "GDPR & HIPAA Ready",
    desc: "Data residency options in EU and US. Full GDPR compliance with DPA available.",
  },
];

const testimonials = [
  {
    quote:
      "Superviz.io cut our incident response time by 60%. The anomaly detection catches issues our old monitoring completely missed.",
    initials: "ML",
    name: "Marc Laurent",
    role: "VP Engineering, CloudScale",
  },
  {
    quote:
      "We replaced three monitoring tools with Superviz.io. One dashboard, one agent, complete visibility. The ROI was immediate.",
    initials: "SD",
    name: "Sarah Dubois",
    role: "SRE Lead, FinSecure",
  },
  {
    quote:
      "The Kubernetes monitoring alone is worth it. Auto-discovers pods, tracks resource usage, alerts on OOM kills before they cascade.",
    initials: "TN",
    name: "Thomas Nguyen",
    role: "Platform Architect, DataFlow",
  },
];

export default function HomePage() {
  return (
    <>
      <Seo path="/" />

      {/* Hero */}
      <section className="hero-glow relative pt-[calc(72px+6rem)] pb-24 text-center overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="inline-block px-3 py-1 bg-accent-subtle text-text-accent text-xs font-semibold uppercase tracking-wider rounded-full border border-border-accent-subtle">
            Now in General Availability
          </span>
          <h1 className="text-[clamp(2.5rem,6vw,3.75rem)] font-bold tracking-tight leading-[1.1] max-w-[900px] mx-auto mt-6 mb-6">
            Monitor your infrastructure.
            <br />
            <span className="text-gradient">
              Fix issues before they happen.
            </span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-[800px] mx-auto mb-10">
            Superviz.io gives your team real-time visibility into servers,
            containers, networks, and applications. Detect anomalies in seconds,
            not hours.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white text-base font-semibold rounded-2xl shadow-accent-sm hover:bg-accent-hover hover:shadow-accent-lg hover:-translate-y-px transition-all duration-200 no-underline"
            >
              Start Free Trial &rarr;
            </Link>
            <Link
              to="/features"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-text-primary text-base font-semibold rounded-2xl border border-border-default hover:border-text-accent hover:text-text-accent transition-all duration-200 no-underline"
            >
              See Features
            </Link>
          </div>
          <div className="flex justify-center gap-16 mt-16 flex-wrap">
            {heroMetrics.map((m) => (
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

      {/* Logos */}
      <section className="py-16 border-t border-b border-border-default">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-text-muted text-sm mb-8 uppercase tracking-widest font-semibold">
            Trusted by leading engineering teams
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

      {/* Features */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-accent-subtle text-text-accent text-xs font-semibold uppercase tracking-wider rounded-full border border-border-accent-subtle">
              Core Capabilities
            </span>
            <h2 className="text-4xl font-bold tracking-tight mt-4">
              Everything you need to
              <br />
              <span className="text-gradient">keep systems running</span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed max-w-[800px] mt-4 mx-auto">
              From real-time dashboards to intelligent alerting, Superviz.io
              covers your entire monitoring stack.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
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

      {/* Security */}
      <section className="py-24 bg-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-accent-subtle text-text-accent text-xs font-semibold uppercase tracking-wider rounded-full border border-border-accent-subtle">
              Enterprise Security
            </span>
            <h2 className="text-4xl font-bold tracking-tight mt-4">
              Built for teams that
              <br />
              <span className="text-gradient">take security seriously</span>
            </h2>
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

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-accent-subtle text-text-accent text-xs font-semibold uppercase tracking-wider rounded-full border border-border-accent-subtle">
              Customer Stories
            </span>
            <h2 className="text-4xl font-bold tracking-tight mt-4">
              Teams ship faster with{" "}
              <span className="text-gradient">Superviz.io</span>
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

      {/* CTA */}
      <section className="cta-glow relative text-center py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Ready to see everything
            <br />
            <span className="text-gradient">in real time?</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-[800px] mx-auto mb-8">
            Start monitoring in minutes. No credit card required. Free for up to
            5 hosts.
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
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
