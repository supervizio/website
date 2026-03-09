import { Link } from "react-router-dom";
import Seo from "../components/ui/Seo";

export default function ContactPage() {
  return (
    <>
      <Seo path="/contact" />
      <section className="page-header-glow relative pt-[calc(72px+4rem)] pb-16 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="inline-block px-3 py-1 bg-accent-subtle text-text-accent text-xs font-semibold uppercase tracking-wider rounded-full border border-border-accent-subtle">
            Contact
          </span>
          <h1 className="text-5xl font-bold tracking-tight mt-4 mb-4">
            Let&apos;s <span className="text-gradient">talk</span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-[800px] mt-4 mx-auto">
            Whether you have questions about our platform, need a demo, or want
            to discuss enterprise deployment — we&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "\uD83D\uDCAC",
                title: "Sales",
                desc: "Interested in Superviz.io for your team? Let's discuss your monitoring needs, deployment options, and pricing.",
                extra: "Coming soon",
              },
              {
                icon: "\uD83D\uDEE0\uFE0F",
                title: "Technical Support",
                desc: "Already a customer? Our support team is ready to help with technical issues, configuration, and best practices.",
                extra: "Coming soon",
              },
              {
                icon: "\uD83E\uDD1D",
                title: "Partnerships",
                desc: "Interested in integrating with Superviz.io or becoming a reseller partner? Let's explore how we can work together.",
                extra: "Coming soon",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="bg-bg-card border border-border-default rounded-2xl p-8 relative overflow-hidden feature-card-border hover:border-border-accent-medium hover:bg-bg-card-hover hover:-translate-y-0.5 hover:shadow-glow transition-all duration-200"
              >
                <div className="w-12 h-12 bg-accent-subtle rounded-[10px] flex items-center justify-center text-2xl mb-5">
                  {c.icon}
                </div>
                <h2 className="text-xl font-bold mb-3">{c.title}</h2>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {c.desc}
                </p>
                <p className="text-text-muted mt-4">{c.extra}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border-default rounded-2xl p-8 relative overflow-hidden feature-card-border hover:border-border-accent-medium hover:bg-bg-card-hover hover:-translate-y-0.5 hover:shadow-glow transition-all duration-200">
              <h2 className="text-xl font-bold mb-3">Response Times</h2>
              <ul className="text-text-secondary leading-[2.2] list-none p-0">
                <li>
                  <strong className="text-text-primary">Enterprise:</strong>{" "}
                  15-minute SLA, 24/7
                </li>
                <li>
                  <strong className="text-text-primary">Pro:</strong> 4-hour
                  SLA, business hours
                </li>
                <li>
                  <strong className="text-text-primary">Free:</strong> Community
                  forum, best effort
                </li>
                <li>
                  <strong className="text-text-primary">Sales:</strong> Within 1
                  business day
                </li>
              </ul>
            </div>
            <div className="bg-bg-card border border-border-default rounded-2xl p-8 relative overflow-hidden feature-card-border hover:border-border-accent-medium hover:bg-bg-card-hover hover:-translate-y-0.5 hover:shadow-glow transition-all duration-200">
              <h2 className="text-xl font-bold mb-3">Office</h2>
              <p className="text-text-primary font-semibold">Superviz.io SAS</p>
              <p className="text-text-secondary mt-2">
                42 Rue de la Bienfaisance
                <br />
                75008 Paris, France
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-glow relative text-center py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Ready to get <span className="text-gradient">started?</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-[800px] mx-auto mb-8">
            Start monitoring for free, or request a personalized demo from our
            team.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white text-base font-semibold rounded-2xl shadow-accent-sm hover:bg-accent-hover hover:shadow-accent-lg hover:-translate-y-px transition-all duration-200 no-underline"
            >
              Start Free Trial &rarr;
            </Link>
            <Link
              to="/enterprise"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-text-primary text-base font-semibold rounded-2xl border border-border-default hover:border-text-accent hover:text-text-accent transition-all duration-200 no-underline"
            >
              Enterprise Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
