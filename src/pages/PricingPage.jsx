import { Link } from "react-router-dom";
import Seo from "../components/ui/Seo";
import PricingToggle from "../components/PricingToggle";
import FaqAccordion from "../components/FaqAccordion";

export default function PricingPage() {
  return (
    <>
      <Seo path="/pricing" />
      <section className="page-header-glow relative pt-[calc(72px+4rem)] pb-16 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="inline-block px-3 py-1 bg-accent-subtle text-text-accent text-xs font-semibold uppercase tracking-wider rounded-full border border-border-accent-subtle">
            Pricing
          </span>
          <h1 className="text-5xl font-bold tracking-tight mt-4 mb-4">
            Simple, transparent
            <br />
            <span className="text-gradient">pricing</span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-[800px] mt-4 mx-auto">
            Start free. Scale as you grow. No hidden fees, no surprise charges.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-[1200px] mx-auto px-6">
          <PricingToggle />
        </div>
      </section>

      <section className="py-24 bg-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight">
              Frequently asked <span className="text-gradient">questions</span>
            </h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      <section className="cta-glow relative text-center py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Start monitoring <span className="text-gradient">for free</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-[800px] mx-auto mb-8">
            No credit card required. Free for up to 5 hosts, forever.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <Link
              to="#"
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
