import { useState } from "react";

const faqs = [
  {
    q: "What counts as a host?",
    a: "A host is any server, virtual machine, container host, or cloud instance running the Superviz.io agent. Individual containers and pods are not counted as separate hosts — only the underlying machine or VM.",
  },
  {
    q: "Can I try Pro features for free?",
    a: "Yes. The 14-day free trial includes all Pro features with no credit card required. At the end of the trial, you can choose to upgrade or continue with the Free plan.",
  },
  {
    q: "How does annual billing work?",
    a: "Annual billing is charged once per year and saves you 20% compared to monthly billing. You can switch from monthly to annual at any time, and the remaining monthly balance will be prorated.",
  },
  {
    q: "What happens if I exceed my log quota?",
    a: "On the Pro plan, additional log ingestion is billed at $0.10 per GB beyond the 50 GB/day included. We'll notify you before any overage charges apply. Enterprise plans include unlimited ingestion.",
  },
  {
    q: "Do you offer discounts for startups or nonprofits?",
    a: "Yes. We offer 50% off Pro plans for qualified startups (under $5M in funding) and registered nonprofits. Contact our sales team to apply.",
  },
  {
    q: "Can I change plans at any time?",
    a: "Absolutely. You can upgrade, downgrade, or cancel at any time. Upgrades take effect immediately; downgrades apply at the end of your current billing cycle. No lock-in contracts.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-3xl mx-auto" role="list">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        const answerId = `faq-answer-${i}`;
        return (
          <div
            key={i}
            className="border-b border-border-default"
            role="listitem"
          >
            <button
              className="w-full flex justify-between items-center py-5 bg-transparent border-none text-text-primary text-base font-semibold font-[inherit] cursor-pointer text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={answerId}
            >
              {faq.q}
              <span
                className="text-xl text-text-muted shrink-0 ml-4"
                aria-hidden="true"
              >
                {isOpen ? "\u2212" : "+"}
              </span>
            </button>
            <div
              id={answerId}
              className={`faq-answer ${isOpen ? "open" : ""}`}
              role="region"
              aria-labelledby={`faq-question-${i}`}
            >
              <p className="pb-5 text-text-secondary text-sm leading-relaxed">
                {faq.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
