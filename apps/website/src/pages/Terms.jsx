import { Link } from "react-router-dom";

const termsSections = [
  {
    id: "terms-acceptance",
    title: "1. Acceptance of terms",
    body: "By accessing or using Faako services, you agree to these Terms of Service and any related policies referenced on this website.",
    items: [
      "If you use services on behalf of an organization, you confirm you are authorized to bind that organization.",
      "If you disagree with these terms, you should discontinue use of the platform.",
    ],
  },
  {
    id: "terms-services",
    title: "2. Services and scope",
    body: "Faako provides websites, dashboards, ERP modules, integrations, and support services based on agreed proposals and onboarding documents.",
    items: [
      "Delivery scope, milestones, and timelines are defined in each engagement.",
      "Changes outside approved scope may require revised pricing and schedules.",
    ],
  },
  {
    id: "terms-accounts",
    title: "3. Accounts and access",
    body: "You are responsible for safeguarding credentials, keeping account details accurate, and ensuring authorized use only.",
    items: [
      "Notify us promptly if you suspect unauthorized account access.",
      "We may suspend access temporarily to protect systems and data security.",
    ],
  },
  {
    id: "terms-billing",
    title: "4. Billing and payments",
    body: "Fees, billing cycles, and payment terms follow your accepted proposal or subscription plan.",
    items: [
      "Invoices are payable according to the due date stated on the invoice.",
      "Late or missed payments may pause delivery, support, or platform access.",
    ],
  },
  {
    id: "terms-use",
    title: "5. Acceptable use",
    body: "You agree not to misuse services, attempt unauthorized access, or interfere with system reliability and performance.",
    items: [
      "No reverse engineering, scraping, or abuse of platform resources.",
      "No unlawful, deceptive, harmful, or infringing content submission.",
    ],
  },
  {
    id: "terms-ip",
    title: "6. Intellectual property",
    body: "Unless otherwise agreed in writing, Faako retains rights to proprietary frameworks, tools, and platform components used to deliver services.",
    items: [
      "You retain ownership of your submitted business content and data.",
      "Deliverables may include licensed third-party components with separate terms.",
    ],
  },
  {
    id: "terms-liability",
    title: "7. Warranties and liability",
    body: "Services are provided on an as-is and as-available basis with continuous improvement and reasonable operational care.",
    items: [
      "Faako is not liable for indirect, incidental, or consequential damages.",
      "Liability limits apply to the maximum extent permitted by applicable law.",
    ],
  },
  {
    id: "terms-termination",
    title: "8. Suspension and termination",
    body: "Either party may terminate services according to contract terms, including termination for material breach or prolonged non-payment.",
    items: [
      "Upon termination, access may be removed after a defined transition period.",
      "Outstanding fees and compliance obligations remain enforceable.",
    ],
  },
  {
    id: "terms-updates",
    title: "9. Changes to these terms",
    body: "We may update these terms to reflect legal, operational, or product changes. Updated versions are posted on this page with a revised date.",
  },
];

export default function Terms() {
  return (
    <section className="page terms-page">
      <div className="terms-shell reveal" style={{ "--delay": "0ms" }}>
        <header className="terms-hero">
          <div className="terms-hero-copy">
            <p className="eyebrow">Terms of Service</p>
            <h1>Clear standards for using Faako products and services.</h1>
            <p className="lead">
              These terms define service boundaries, account responsibilities,
              delivery expectations, and legal safeguards for both parties.
            </p>
            <div className="terms-meta">
              <span>Effective date: February 11, 2026</span>
              <span>Last updated: February 11, 2026</span>
              <span>Applies to: Web, ERP, advisory, and support services</span>
            </div>
          </div>

          <aside className="terms-hero-panel">
            <h2>At a glance</h2>
            <ul className="terms-glance-list">
              <li>
                <strong>Scope-driven delivery</strong>
                <span>Timelines and milestones follow your approved proposal.</span>
              </li>
              <li>
                <strong>Secure account use</strong>
                <span>You are responsible for credential safety and access control.</span>
              </li>
              <li>
                <strong>Fair service protection</strong>
                <span>Abuse prevention and legal compliance rules apply to all users.</span>
              </li>
            </ul>
          </aside>
        </header>

        <div className="terms-layout">
          <aside className="terms-nav card">
            <h3>Sections</h3>
            {termsSections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.title}
              </a>
            ))}
            <a href="#terms-contact">10. Contact</a>
          </aside>

          <article className="terms-content">
            {termsSections.map((section) => (
              <section key={section.id} id={section.id} className="terms-section card">
                <h2>{section.title}</h2>
                <p>{section.body}</p>
                {section.items ? (
                  <ul className="terms-list">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section id="terms-contact" className="terms-section card">
              <h2>10. Contact</h2>
              <p>
                Questions about these terms can be sent to{" "}
                <a href="mailto:legal@faako.nanaabaackah.com">
                  legal@faako.nanaabaackah.com
                </a>
                .
              </p>
              <p>
                For data handling details, read our{" "}
                <Link to="/privacy" className="text-link">
                  Privacy Policy
                </Link>
                .
              </p>
            </section>
          </article>
        </div>

        <footer className="terms-footer-note card">
          <span>
            These terms are designed to be clear and practical for real project
            delivery.
          </span>
          <Link to="/contact" className="button button-ghost">
            Contact support
          </Link>
        </footer>
      </div>
    </section>
  );
}
