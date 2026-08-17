import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/features", label: "Features" },
  { to: "/enterprise", label: "Enterprise" },
  { to: "/customers", label: "Customers" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
      isActive
        ? "text-text-primary bg-white/5"
        : "text-text-secondary hover:text-text-primary hover:bg-white/5"
    }`;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-[72px] bg-[rgba(10,10,15,0.85)] backdrop-blur-[16px] border-b border-border-default z-100">
        <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
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
              Superviz<span className="text-accent-logo ml-[-0.04em]">.io</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-semibold rounded-[10px] shadow-accent-sm hover:bg-accent-hover hover:shadow-accent-lg hover:-translate-y-px transition-all duration-200 no-underline"
            >
              Start Free Trial
            </Link>
          </div>

          <button
            className="md:hidden bg-transparent border-none text-text-primary text-xl cursor-pointer p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? "\u2715" : "\u2630"}
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="fixed top-[72px] left-0 right-0 bottom-0 bg-bg-primary z-99 p-6 flex flex-col gap-2 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="block p-4 text-text-primary text-lg font-medium rounded-[10px] hover:bg-bg-card no-underline"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block p-4 text-text-primary text-lg font-medium rounded-[10px] hover:bg-bg-card no-underline"
          >
            Contact
          </Link>
          <Link
            to="/pricing"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white text-base font-semibold rounded-2xl shadow-accent-sm hover:bg-accent-hover transition-all duration-200 no-underline"
          >
            Start Free Trial
          </Link>
        </nav>
      )}
    </>
  );
}
