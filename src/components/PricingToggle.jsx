import { useState } from "react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    monthly: "$0",
    annual: "$0",
    period: "/month",
    desc: "Perfect for side projects and small teams getting started with monitoring.",
    cta: "Get Started Free",
    ctaStyle: "secondary",
    features: [
      "Up to 5 hosts",
      "1-minute metric resolution",
      "5 custom dashboards",
      "Email alerts",
      "100 integrations",
      "7-day data retention",
      "Community support",
    ],
  },
  {
    name: "Pro",
    monthly: "$29",
    annual: "$23",
    period: "/host/month",
    desc: "For growing teams that need advanced monitoring, alerting, and longer retention.",
    cta: "Start 14-Day Free Trial",
    ctaStyle: "primary",
    popular: true,
    features: [
      "Unlimited hosts",
      "1-second metric resolution",
      "Unlimited dashboards",
      "ML-powered anomaly detection",
      "500+ integrations",
      "13-month data retention",
      "APM & distributed tracing",
      "Log management (50 GB/day)",
      "Slack, PagerDuty, Webhooks",
      "Priority email & chat support",
    ],
  },
  {
    name: "Enterprise",
    monthly: "Custom",
    annual: "Custom",
    period: "",
    desc: "For organizations that need dedicated infrastructure, compliance, and premium support.",
    cta: "Talk to Sales",
    ctaStyle: "secondary",
    ctaTo: "/contact",
    features: [
      "Everything in Pro",
      "Dedicated infrastructure",
      "SSO / SAML / OIDC",
      "Role-based access control",
      "Audit logs & compliance",
      "Custom data retention",
      "Unlimited log ingestion",
      "SLA guarantee (99.95%)",
      "HIPAA BAA available",
      "24/7 phone & dedicated CSM",
    ],
  },
];

export default function PricingToggle() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center gap-4 mb-12">
        <span
          className={`text-sm font-medium ${!isAnnual ? "text-text-primary" : "text-text-muted"}`}
        >
          Monthly
        </span>
        <div
          className={`toggle-switch ${isAnnual ? "active" : ""}`}
          onClick={() => setIsAnnual(!isAnnual)}
          role="switch"
          aria-checked={isAnnual}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsAnnual(!isAnnual);
            }
          }}
        />
        <span
          className={`text-sm font-medium ${isAnnual ? "text-text-primary" : "text-text-muted"}`}
        >
          Annual{" "}
          <span className="text-accent font-semibold text-sm">Save 20%</span>
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-bg-card border rounded-2xl p-8 relative ${
              plan.popular
                ? "border-border-accent shadow-glow"
                : "border-border-default"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 text-xs font-semibold rounded-full uppercase tracking-wider">
                Most Popular
              </div>
            )}
            <div className="text-xl font-bold mb-2">{plan.name}</div>
            <div className="text-4xl font-extrabold mb-1">
              <span>{isAnnual ? plan.annual : plan.monthly}</span>
              {plan.period && (
                <span className="text-base font-normal text-text-muted">
                  {plan.period}
                </span>
              )}
            </div>
            <p className="text-text-secondary text-sm mb-6 pb-6 border-b border-border-default">
              {plan.desc}
            </p>
            <Link
              to={plan.ctaTo || "#"}
              className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-[10px] transition-all duration-200 no-underline ${
                plan.ctaStyle === "primary"
                  ? "bg-accent text-white shadow-accent-sm hover:bg-accent-hover hover:shadow-accent-lg hover:-translate-y-px"
                  : "bg-transparent text-text-primary border border-border-default hover:border-text-accent hover:text-text-accent"
              }`}
            >
              {plan.cta}
            </Link>
            <ul className="pricing-features mt-8 space-y-0">
              {plan.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 py-2 text-sm text-text-secondary"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
