import { Link } from "react-router-dom";

const productLinks = [
  { to: "/features", label: "Features" },
  { to: "/enterprise", label: "Enterprise" },
  { to: "/pricing", label: "Pricing" },
  { to: "/customers", label: "Customers" },
];

const companyLinks = [
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const legalLinks = [
  { to: "/terms", label: "Terms of Service" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/legal", label: "Legal Notices" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-default pt-16 pb-8 bg-bg-secondary">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
          <div>
            <Link
              to="/"
              className="flex items-center gap-3 text-xl font-extrabold text-text-primary tracking-[-0.03em] no-underline"
            >
              <img
                src="/images/logo.svg"
                alt=""
                width="28"
                height="37"
                className="w-7 h-auto shrink-0"
              />
              <span>
                Superviz
                <span className="text-accent-logo ml-[-0.04em]">.io</span>
              </span>
            </Link>
            <p className="text-text-secondary text-sm mt-4 max-w-[280px] leading-relaxed">
              Real-time infrastructure monitoring for modern engineering teams.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://github.com/supervizio"
                aria-label="GitHub"
                className="w-9 h-9 rounded-md border border-border-default flex items-center justify-center text-text-muted text-sm hover:border-text-accent hover:text-text-accent transition-all duration-200"
              >
                GH
              </a>
            </div>
          </div>

          <FooterCol title="Product" links={productLinks} />
          <FooterCol title="Company" links={companyLinks} />
          <FooterCol title="Legal" links={legalLinks} />
        </div>

        <div className="pt-8 border-t border-border-default flex flex-col md:flex-row justify-between items-center flex-wrap gap-4">
          <p className="text-xs text-text-muted">
            &copy; 2026 Superviz.io. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/terms"
              className="text-xs text-text-muted hover:text-text-primary transition-colors duration-200"
            >
              Terms
            </Link>
            <Link
              to="/privacy"
              className="text-xs text-text-muted hover:text-text-primary transition-colors duration-200"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">
        {title}
      </p>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="block text-text-secondary text-sm py-1 hover:text-text-primary transition-colors duration-200"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
