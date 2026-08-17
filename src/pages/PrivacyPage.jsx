import Seo from "../components/ui/Seo";

export default function PrivacyPage() {
  return (
    <>
      <Seo path="/privacy" />
      <section className="page-header-glow relative pt-[calc(72px+4rem)] pb-16 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-[640px] mt-4 mx-auto">
            Last updated: February 26, 2026
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="legal-content py-8">
            <h2>1. Introduction</h2>
            <p>
              Superviz.io SAS (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
              &ldquo;our&rdquo;) is committed to protecting the privacy of our
              users. This Privacy Policy describes how we collect, use, store,
              and share information when you use our website (superviz.io) and
              our monitoring platform (&ldquo;Service&rdquo;).
            </p>

            <h2>2. Data Controller</h2>
            <p>
              Superviz.io SAS, registered in Paris, France, is the data
              controller for personal data processed through our Service. For
              questions about data processing, contact our Data Protection
              Officer.
            </p>

            <h2>3. Information We Collect</h2>
            <h3>3.1 Account Information</h3>
            <p>
              When you create an account, we collect your name, email address,
              company name, and billing information. If you use SSO, we receive
              identity information from your identity provider.
            </p>
            <h3>3.2 Monitoring Data</h3>
            <p>
              Our agent collects infrastructure metrics (CPU, memory, disk,
              network), application metrics, logs, and traces from your
              monitored hosts. This data is processed solely to provide the
              monitoring Service.
            </p>
            <h3>3.3 Usage Data</h3>
            <p>
              We collect information about how you interact with our website and
              platform, including pages visited, features used, and
              browser/device information. We use this data to improve the
              Service.
            </p>
            <h3>3.4 Cookies</h3>
            <p>
              We use essential cookies for authentication and session
              management. We use analytics cookies only with your consent. You
              can manage cookie preferences through your browser settings.
            </p>

            <h2>4. How We Use Your Data</h2>
            <p>We use collected information to:</p>
            <ul>
              <li>Provide, maintain, and improve the Service</li>
              <li>Process payments and manage subscriptions</li>
              <li>Send service-related notifications and alerts</li>
              <li>Provide customer support</li>
              <li>Detect and prevent fraud and abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>
              We do <strong>not</strong> sell your personal data or monitoring
              data to third parties. We do <strong>not</strong> use your data
              for advertising purposes.
            </p>

            <h2>5. Data Retention</h2>
            <p>
              Monitoring data is retained according to your subscription plan (7
              days for Free, 13 months for Pro, custom for Enterprise). Account
              information is retained for the duration of your account plus 30
              days after termination. Billing records are retained for 10 years
              as required by French tax law.
            </p>

            <h2>6. Data Storage and Security</h2>
            <p>
              All data is encrypted in transit (TLS 1.3) and at rest (AES-256).
              We store data in EU data centers by default, with US and
              Asia-Pacific options available for Enterprise customers. We
              maintain SOC 2 Type II certification and conduct regular security
              audits and penetration tests.
            </p>

            <h2>7. Data Sharing</h2>
            <p>We share data only with:</p>
            <ul>
              <li>
                <strong>Service providers:</strong> Cloud hosting (OVHcloud,
                Scaleway), payment processing (Stripe), email delivery
                (Postmark) — under strict data processing agreements
              </li>
              <li>
                <strong>Legal requirements:</strong> When required by law, court
                order, or regulatory authority
              </li>
              <li>
                <strong>Business transfers:</strong> In connection with a
                merger, acquisition, or sale of assets
              </li>
            </ul>

            <h2>8. Your Rights (GDPR)</h2>
            <p>Under the GDPR, you have the right to:</p>
            <ul>
              <li>
                <strong>Access</strong> your personal data and receive a copy
              </li>
              <li>
                <strong>Rectify</strong> inaccurate or incomplete data
              </li>
              <li>
                <strong>Erase</strong> your personal data (&ldquo;right to be
                forgotten&rdquo;)
              </li>
              <li>
                <strong>Restrict</strong> processing of your data
              </li>
              <li>
                <strong>Port</strong> your data to another service
              </li>
              <li>
                <strong>Object</strong> to processing based on legitimate
                interest
              </li>
            </ul>
            <p>
              To exercise these rights, contact our Data Protection Officer. We
              will respond within 30 days.
            </p>

            <h2>9. International Transfers</h2>
            <p>
              When data is transferred outside the EU/EEA, we ensure adequate
              protection through Standard Contractual Clauses (SCCs) approved by
              the European Commission. Enterprise customers can restrict data
              processing to EU-only infrastructure.
            </p>

            <h2>10. Children&apos;s Privacy</h2>
            <p>
              The Service is not intended for individuals under 16 years of age.
              We do not knowingly collect personal data from children.
            </p>

            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of material changes via email or through the Service at
              least 30 days before they take effect.
            </p>

            <h2>12. Contact</h2>
            <p>
              For privacy-related inquiries, write to: Superviz.io SAS, 42 Rue
              de la Bienfaisance, 75008 Paris, France.
            </p>
            <p>
              You also have the right to lodge a complaint with the French data
              protection authority (CNIL) at{" "}
              <a
                href="https://www.cnil.fr"
                className="text-text-accent no-underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                www.cnil.fr
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
