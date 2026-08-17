import { Link } from "react-router-dom";
import Seo from "../components/ui/Seo";

export default function AboutPage() {
  return (
    <>
      <Seo path="/about" />
      <section className="page-header-glow relative pt-[calc(72px+4rem)] pb-16 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="inline-block px-3 py-1 bg-accent-subtle text-text-accent text-xs font-semibold uppercase tracking-wider rounded-full border border-border-accent-subtle">
            About Us
          </span>
          <h1 className="text-5xl font-bold tracking-tight mt-4 mb-4">
            We believe monitoring
            <br />
            <span className="text-gradient">should be effortless</span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-[800px] mt-4 mx-auto">
            Superviz.io was founded with a simple idea: engineering teams
            deserve monitoring tools that work out of the box, not projects that
            take months to set up.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border-default rounded-2xl p-8 relative overflow-hidden feature-card-border hover:border-border-accent-medium hover:bg-bg-card-hover hover:-translate-y-0.5 hover:shadow-glow transition-all duration-200">
              <h2 className="text-xl font-bold mb-3">Our Mission</h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                We&apos;re building the monitoring platform we always wanted.
                One that installs in minutes, auto-discovers your
                infrastructure, and gives you instant visibility without a team
                of specialists to configure it.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed mt-4">
                Infrastructure monitoring has been dominated by complex,
                expensive enterprise tools or open-source projects that require
                significant operational investment. Superviz.io bridges the gap:
                enterprise-grade capabilities with startup-level simplicity.
              </p>
            </div>
            <div className="bg-bg-card border border-border-default rounded-2xl p-8 relative overflow-hidden feature-card-border hover:border-border-accent-medium hover:bg-bg-card-hover hover:-translate-y-0.5 hover:shadow-glow transition-all duration-200">
              <h2 className="text-xl font-bold mb-3">Our Story</h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                Superviz.io started in 2023 when our founders — a team of SREs
                and platform engineers — grew frustrated with the monitoring
                landscape. Every tool was either too simple for production
                workloads or too complex to deploy and maintain.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed mt-4">
                Today, Superviz.io monitors thousands of servers across dozens
                of countries, helping engineering teams detect and resolve
                incidents before they impact users.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight">
              Our <span className="text-gradient">values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "\u26A1",
                title: "Speed Matters",
                desc: "When your infrastructure is down, every second counts. We optimize for sub-second metric collection, instant alerts, and fast root-cause analysis.",
              },
              {
                icon: "\uD83D\uDCA1",
                title: "Simplicity First",
                desc: "Powerful doesn't have to mean complex. We invest heavily in UX, auto-discovery, and sensible defaults so you get value from day one.",
              },
              {
                icon: "\uD83D\uDCAA",
                title: "Reliability",
                desc: "A monitoring tool that goes down when you need it most is worse than no monitoring at all. We maintain 99.9% uptime and treat our own reliability as non-negotiable.",
              },
              {
                icon: "\uD83E\uDD1D",
                title: "Customer Obsessed",
                desc: "We build what our customers need, not what looks good on a feature comparison chart. Every feature starts with a real problem from a real team.",
              },
              {
                icon: "\uD83D\uDD12",
                title: "Security by Default",
                desc: "Your monitoring data is sensitive. End-to-end encryption, SOC 2 compliance, and strict access controls are built into our DNA, not bolted on later.",
              },
              {
                icon: "\uD83C\uDF10",
                title: "Open Ecosystem",
                desc: "No vendor lock-in. We support OpenTelemetry, Prometheus, and hundreds of integrations. Your data is always yours to export and use however you want.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-bg-card border border-border-default rounded-2xl p-8 relative overflow-hidden feature-card-border hover:border-border-accent-medium hover:bg-bg-card-hover hover:-translate-y-0.5 hover:shadow-glow transition-all duration-200"
              >
                <div className="w-12 h-12 bg-accent-subtle rounded-[10px] flex items-center justify-center text-2xl mb-5">
                  {v.icon}
                </div>
                <h2 className="text-xl font-bold mb-3">{v.title}</h2>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {v.desc}
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
              By the <span className="text-gradient">numbers</span>
            </h2>
          </div>
          <div className="flex justify-center gap-16 flex-wrap max-w-[900px] mx-auto">
            {[
              { value: "2023", label: "Founded" },
              { value: "10K+", label: "Servers Monitored" },
              { value: "500+", label: "Integrations" },
              { value: "30+", label: "Countries" },
            ].map((m) => (
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

      <section className="cta-glow relative text-center py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Want to join <span className="text-gradient">our team?</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-[800px] mx-auto mb-8">
            We&apos;re always looking for talented engineers, designers, and
            product people who care about building great developer tools.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white text-base font-semibold rounded-2xl shadow-accent-sm hover:bg-accent-hover hover:shadow-accent-lg hover:-translate-y-px transition-all duration-200 no-underline"
            >
              Get in Touch &rarr;
            </Link>
            <Link
              to="/customers"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-text-primary text-base font-semibold rounded-2xl border border-border-default hover:border-text-accent hover:text-text-accent transition-all duration-200 no-underline"
            >
              See Our Customers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
