import { Link } from "react-router-dom";
import Seo from "../components/ui/Seo";

export default function LegalPage() {
  return (
    <>
      <Seo path="/legal" />
      <section className="page-header-glow relative pt-[calc(72px+4rem)] pb-16 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Legal Notices
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-[640px] mt-4 mx-auto">
            Last updated: February 26, 2026
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="legal-content py-8">
            <h2>Publisher</h2>
            <p>
              This website is published by Superviz.io SAS, a simplified
              joint-stock company registered in France.
            </p>
            <ul>
              <li>
                <strong>Company name:</strong> Superviz.io SAS
              </li>
              <li>
                <strong>Registered office:</strong> 42 Rue de la Bienfaisance,
                75008 Paris, France
              </li>
              <li>
                <strong>Registration:</strong> RCS Paris (registration number
                pending)
              </li>
              <li>
                <strong>VAT number:</strong> FR (pending)
              </li>
              <li>
                <strong>Publication director:</strong> CEO of Superviz.io SAS
              </li>
              <li>
                <strong>Contact:</strong> 42 Rue de la Bienfaisance, 75008
                Paris, France
              </li>
            </ul>

            <h2>Hosting</h2>
            <p>This website is hosted by:</p>
            <ul>
              <li>
                <strong>Website:</strong> GitHub Pages (GitHub, Inc., 88 Colin
                P. Kelly Jr. Street, San Francisco, CA 94107, USA)
              </li>
              <li>
                <strong>CDN &amp; DDoS Protection:</strong> Cloudflare, Inc.,
                101 Townsend Street, San Francisco, CA 94107, USA
              </li>
              <li>
                <strong>Monitoring Platform:</strong> OVHcloud, 2 Rue
                Kellermann, 59100 Roubaix, France
              </li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              The Superviz.io name, logo, and all content on this website (text,
              graphics, images, software) are the exclusive property of
              Superviz.io SAS and are protected by French and international
              intellectual property laws. Reproduction, distribution, or
              modification of any content without prior written consent is
              prohibited.
            </p>

            <h2>Trademarks</h2>
            <p>
              &ldquo;Superviz.io&rdquo; is a trademark of Superviz.io SAS. All
              other trademarks, product names, and company names mentioned on
              this website are the property of their respective owners and are
              used for identification purposes only.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              While we strive to provide accurate and up-to-date information on
              this website, we make no warranties or representations regarding
              its completeness or accuracy. Superviz.io SAS shall not be liable
              for any direct or indirect damages resulting from the use of this
              website or its content.
            </p>

            <h2>External Links</h2>
            <p>
              This website may contain links to third-party websites.
              Superviz.io SAS has no control over the content of these websites
              and assumes no responsibility for their content, privacy
              practices, or availability.
            </p>

            <h2>Cookies</h2>
            <p>
              This website uses cookies as described in our{" "}
              <Link to="/privacy">Privacy Policy</Link>. Essential cookies are
              required for the website to function. Analytics cookies are only
              placed with your consent.
            </p>

            <h2>Applicable Law</h2>
            <p>
              This website and its legal notices are governed by French law. Any
              disputes arising from the use of this website shall be subject to
              the exclusive jurisdiction of the courts of Paris, France.
            </p>

            <h2>Accessibility</h2>
            <p>
              Superviz.io is committed to making its website accessible to all
              users. If you encounter any accessibility issues, please contact
              us.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
