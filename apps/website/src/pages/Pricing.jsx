import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faX,
  faStore,
  faTruckFast,
  faGlassCheers,
  faCalendar,
  faLightbulb,
  faShieldHalved,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../components/PrimaryButton.jsx";
import WhatsApp from "../components/WhatsApp.jsx";

// Pricing tiers
const pricingTiers = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Get online with the essentials",
    price: "2,500",
    priceNote: "one-time",
    timeline: "2-3 weeks",
    bestFor: "New businesses getting started online",
    includes: [
      "Business website (5 pages)",
      "Mobile-responsive design",
      "Contact forms & WhatsApp integration",
      "Basic SEO setup",
      "SSL certificate & hosting (1 year)",
      "Mobile Money payment page",
    ],
    notIncluded: [
      "Dashboard or reporting",
      "Inventory management",
      "Order tracking",
      "Staff management",
    ],
    cta: "Get Started",
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "Website + live business dashboard",
    price: "8,500",
    priceNote: "one-time",
    timeline: "4-6 weeks",
    bestFor: "Growing businesses that need real-time insights",
    includes: [
      "Everything in Starter",
      "Sales dashboard with live metrics",
      "Inventory tracking (up to 500 items)",
      "Order management",
      "Weekly reports to WhatsApp/email",
      "Payment tracking (Mobile Money + cash)",
      "3 months premium support",
    ],
    notIncluded: [
      "Multi-location support",
      "Advanced reporting",
      "HR/payroll features",
      "Custom workflows",
    ],
    cta: "Most Popular",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Complete business management system",
    price: "Custom",
    priceNote: "starts at GH₵ 18,000",
    timeline: "6-10 weeks",
    bestFor: "Established businesses with complex needs",
    includes: [
      "Everything in Professional",
      "Unlimited inventory items",
      "Multi-location management",
      "CRM with sales pipeline",
      "HR & payroll module",
      "Delivery/route tracking",
      "Custom reports & analytics",
      "WhatsApp Business API integration",
      "6 months premium support",
      "Staff training included",
    ],
    notIncluded: [],
    cta: "Request Quote",
  },
];

// Sample pricing scenarios with detailed scope estimates
const pricingScenarios = [
  {
    id: "retail-boutique",
    industry: "Retail",
    icon: faStore,
    iconColor: "#FF6B35",
    businessName: "Retail Growth Scenario",
    location: "Illustrative scope",
    challenge: "Tracking inventory across 2 locations with manual counts",
    solution: "Professional package + Delivery module",
    modules: ["Website", "Dashboard", "Inventory", "Orders", "Delivery"],
    breakdown: [
      { item: "Website (5 pages)", price: 2500 },
      { item: "Dashboard + Inventory", price: 3500 },
      { item: "Order management", price: 1800 },
      { item: "Delivery tracking", price: 1800 },
    ],
    totalPrice: 9600,
    timeline: "4-5 weeks",
    results: [
      "Reduce avoidable stockouts",
      "Speed up order processing",
      "Improve daily stock visibility",
    ],
  },
  {
    id: "distribution",
    industry: "Distribution",
    icon: faTruckFast,
    iconColor: "#F7931E",
    businessName: "Distribution Expansion Scenario",
    location: "Illustrative scope",
    challenge: "Managing 5 warehouses, deliveries, and payment follow-ups",
    solution: "Enterprise package",
    modules: ["Website", "Dashboard", "Inventory", "CRM", "Orders", "Delivery", "Payments"],
    breakdown: [
      { item: "Website + Dashboard", price: 8500 },
      { item: "Multi-location inventory", price: 3500 },
      { item: "CRM with sales pipeline", price: 1800 },
      { item: "Delivery route tracking", price: 1800 },
      { item: "Payment integration", price: 1800 },
      { item: "Staff training", price: 1200 },
    ],
    totalPrice: 18600,
    timeline: "7-9 weeks",
    results: [
      "Lower delivery error rates",
      "Make payment follow-up easier",
      "Track all locations in one view",
    ],
  },
  {
    id: "events",
    industry: "Events & Rentals",
    icon: faGlassCheers,
    iconColor: "#9B59B6",
    businessName: "Events Scheduling Scenario",
    location: "Illustrative scope",
    challenge: "Double-booked equipment and manual calendar tracking",
    solution: "Professional + Bookings + Scheduler",
    modules: ["Website", "Dashboard", "Inventory", "Bookings", "Scheduler", "Payments"],
    breakdown: [
      { item: "Professional package", price: 8500 },
      { item: "Booking system", price: 1800 },
      { item: "Staff scheduler", price: 1800 },
    ],
    totalPrice: 12100,
    timeline: "5-6 weeks",
    results: [
      "Prevent booking conflicts",
      "Keep equipment availability visible",
      "Standardize staff scheduling",
    ],
  },
];

export default function Pricing() {
  const [selectedCase, setSelectedCase] = useState(null);
  const toggleCase = (caseId) => {
    setSelectedCase((currentCaseId) =>
      currentCaseId === caseId ? null : caseId
    );
  };

  return (
    <section className="page pricing page-stack">

      {/* ========================================
          HERO SECTION
          ======================================== */}
      <section className="pricing-hero-v2">
        <div className="pricing-hero-content reveal" data-scroll>
          <p className="eyebrow">Pricing</p>
          <h1>
            Clear pricing.<br/>{" "}
            <span className="text-accent">No surprises.</span>
          </h1>
          <p className="lead">
            Launch pricing for early-stage teams (through June 30, 2026). One-time payment, then optional support.
          </p>
          <p className="muted">
            Benchmarked against current Ghana web and custom-build ranges, then reduced for startup-stage portfolio growth.
          </p>
        </div>

        {/* Pricing Philosophy */}
        <div
          className="pricing-philosophy reveal"
          data-scroll
          style={{ "--delay": "100ms" }}
        >
          <div className="philosophy-card reveal" data-scroll style={{ "--delay": "140ms" }}>
            <FontAwesomeIcon icon={faLightbulb} />
            <h4>Pay once, own forever</h4>
            <p>No recurring subscriptions. Your system, your business.</p>
          </div>

          <div className="philosophy-card reveal" data-scroll style={{ "--delay": "200ms" }}>
            <FontAwesomeIcon icon={faShieldHalved} />
            <h4>Transparent breakdown</h4>
            <p>See exactly what you're paying for. No hidden costs.</p>
          </div>

          <div className="philosophy-card reveal" data-scroll style={{ "--delay": "260ms" }}>
            <FontAwesomeIcon icon={faHeadset} />
            <h4>Support included</h4>
            <p>3-6 months of updates and fixes. Then optional support.</p>
          </div>
        </div>
      </section>

      {/* ========================================
          PRICING TIERS COMPARISON
          ======================================== */}
      <section className="page pricing-tiers-section">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">Three Packages</p>
          <h2>Choose what fits your business stage.</h2>
          <p className="lead">
            Start small. Upgrade anytime. We build to grow with you.
          </p>
        </div>

        <div className="pricing-tiers-grid">
          {pricingTiers.map((tier, index) => (
            <article
              key={tier.id}
              className={`pricing-tier-card reveal ${tier.popular ? "is-popular" : ""}`}
              data-scroll
              style={{ "--delay": `${120 + index * 70}ms` }}
            >
              {tier.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="tier-header">
                <h3>{tier.name}</h3>
                <p className="tier-tagline">{tier.tagline}</p>
              </div>

              <div className="tier-pricing">
                <div className="price-display">
                  <span className="currency">GH₵</span>
                  <span className="price">{tier.price}</span>
                </div>
                <p className="price-note">{tier.priceNote}</p>
                <p className="timeline">
                  <FontAwesomeIcon icon={faCalendar} /> {tier.timeline}
                </p>
              </div>

              <div className="tier-best-for">
                <strong>Best for:</strong> {tier.bestFor}
              </div>

              <div className="tier-features">
                <h4>What's included:</h4>
                <ul className="included-list">
                  {tier.includes.map((item, i) => (
                    <li key={i}>
                      <FontAwesomeIcon icon={faCheck} />
                      {item}
                    </li>
                  ))}
                </ul>

                {tier.notIncluded.length > 0 && (
                  <>
                    <h4 className="not-included-title">Not included:</h4>
                    <ul className="not-included-list">
                      {tier.notIncluded.map((item, i) => (
                        <li key={i}>
                          <FontAwesomeIcon icon={faX} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <div className="tier-cta">
                <PrimaryButton to="/contact">{tier.cta}</PrimaryButton>
              </div>
            </article>
          ))}
        </div>

        <p className="pricing-note">
          All prices are one-time payments. Hosting, domain, and maintenance are separate (see below).
        </p>
      </section>

      {/* ========================================
          SAMPLE SCENARIOS
          ======================================== */}
      <section className="page case-pricing-section">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">Sample Scenarios</p>
          <h2>See example scopes and price ranges.</h2>
          <p className="lead">
            These are illustrative builds to help you budget before discovery.
          </p>
        </div>

        <div className="case-pricing-grid">
          {pricingScenarios.map((study, index) => (
            <article
              key={study.id}
              className="case-pricing-card reveal"
              data-scroll
              style={{ "--delay": `${120 + index * 80}ms` }}
            >
              <div className="case-header">
                <div className="case-icon" style={{ color: study.iconColor }}>
                  <FontAwesomeIcon icon={study.icon} />
                </div>
                <div className="case-info">
                  <h3>{study.businessName}</h3>
                  <p className="case-meta">
                    {study.industry} • {study.location}
                  </p>
                </div>
              </div>

              <div className="case-summary">
                <div className="case-row">
                  <strong>Typical challenge:</strong>
                  <p>{study.challenge}</p>
                </div>
                <div className="case-row">
                  <strong>Suggested setup:</strong>
                  <p>{study.solution}</p>
                </div>
              </div>

              <div className="case-modules">
                {study.modules.map((module, i) => (
                  <span key={i} className="module-badge">{module}</span>
                ))}
              </div>

              <div className="case-price-summary">
                <div className="total-price">
                  <span>Estimated investment:</span>
                  <span className="price">GH₵ {study.totalPrice.toLocaleString()}</span>
                </div>
                <div className="timeline-info">
                  <FontAwesomeIcon icon={faCalendar} />
                  {study.timeline}
                </div>
              </div>

              {/* Expandable breakdown */}
              {selectedCase === study.id && (
                <div className="case-breakdown" id={`case-breakdown-${study.id}`}>
                  <h4>Sample price breakdown:</h4>
                  <ul className="breakdown-list">
                    {study.breakdown.map((item, i) => (
                      <li key={i}>
                        <span>{item.item}</span>
                        <span>GH₵ {item.price.toLocaleString()}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="breakdown-total">
                    <span>Total</span>
                    <span>GH₵ {study.totalPrice.toLocaleString()}</span>
                  </div>

                  <div className="case-results">
                    <h4>Potential outcomes:</h4>
                    <ul>
                      {study.results.map((result, i) => (
                        <li key={i}>
                          <FontAwesomeIcon icon={faCheck} />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <button
                className="expand-button"
                type="button"
                onClick={() => toggleCase(study.id)}
                aria-expanded={selectedCase === study.id}
                aria-controls={`case-breakdown-${study.id}`}
              >
                {selectedCase === study.id ? "Hide details" : "View full breakdown"}
              </button>
            </article>
          ))}
        </div>
        <p className="pricing-note">
          Final pricing and delivery timelines are confirmed after discovery and workflow review.
        </p>
      </section>

      {/* ========================================
          MODULE PRICING BREAKDOWN
          ======================================== */}
      <section className="page module-pricing-section">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">Add-On Modules</p>
          <h2>Build your custom system.</h2>
          <p className="lead">
            Start with a package, add modules as you need them.
          </p>
        </div>

        <div className="module-pricing-table reveal" data-scroll style={{ "--delay": "100ms" }}>
          <table>
            <thead>
              <tr>
                <th>Module</th>
                <th>What it does</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Inventory</strong></td>
                <td>Track stock across locations with serial numbers</td>
                <td>GH₵ 1,800</td>
              </tr>
              <tr>
                <td><strong>CRM</strong></td>
                <td>Manage leads, customers, and sales pipeline</td>
                <td>GH₵ 1,800</td>
              </tr>
              <tr>
                <td><strong>Orders</strong></td>
                <td>From quote to delivery confirmation</td>
                <td>GH₵ 1,800</td>
              </tr>
              <tr>
                <td><strong>Bookings</strong></td>
                <td>Reservations, event planning, resource scheduling</td>
                <td>GH₵ 1,800</td>
              </tr>
              <tr>
                <td><strong>Scheduler</strong></td>
                <td>Staff shifts, job assignments, availability</td>
                <td>GH₵ 1,800</td>
              </tr>
              <tr>
                <td><strong>Delivery</strong></td>
                <td>Routes, driver tracking, delivery confirmation</td>
                <td>GH₵ 1,800</td>
              </tr>
              <tr>
                <td><strong>Payments</strong></td>
                <td>Mobile Money, invoicing, payment tracking</td>
                <td>GH₵ 1,800</td>
              </tr>
              <tr>
                <td><strong>HR & Payroll</strong></td>
                <td>Employee records, payroll, attendance</td>
                <td>GH₵ 2,500</td>
              </tr>
              <tr>
                <td><strong>Integrations</strong></td>
                <td>Connect QuickBooks, Xero, WhatsApp Business API</td>
                <td>GH₵ 2,200</td>
              </tr>
              <tr>
                <td><strong>Analytics</strong></td>
                <td>Advanced reporting, forecasting, BI exports</td>
                <td>GH₵ 2,200</td>
              </tr>
              <tr className="custom-row">
                <td><strong>Custom Module</strong></td>
                <td>Built specifically for your unique workflow</td>
                <td>GH₵ 2,500 - 5,500</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="pricing-note">
          <strong>Volume discount:</strong> Add 3+ modules and save 8%. Add 5+ and save 12%.
        </p>
      </section>

      {/* ========================================
          ONGOING COSTS
          ======================================== */}
      <section className="page ongoing-costs-section">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">What Comes After</p>
          <h2>Ongoing costs explained.</h2>
          <p className="lead">
            No surprises. Here's what you'll pay annually.
          </p>
        </div>

        <div className="ongoing-costs-grid">
          <div className="cost-card reveal" data-scroll style={{ "--delay": "120ms" }}>
            <h4>Hosting & Domain</h4>
            <div className="cost-price">GH₵ 600 - 1,200/year</div>
            <p>Keeps your system online. Includes SSL certificate and daily backups.</p>
            <ul>
              <li>Small business: GH₵ 600/year</li>
              <li>Growing business: GH₵ 900/year</li>
              <li>High traffic: GH₵ 1,200/year</li>
            </ul>
          </div>

          <div className="cost-card reveal" data-scroll style={{ "--delay": "180ms" }}>
            <h4>Maintenance & Updates</h4>
            <div className="cost-price">GH₵ 1,500 - 3,000/year</div>
            <p>Optional support plan for bug fixes, security updates, and minor changes.</p>
            <ul>
              <li>Basic plan: GH₵ 1,500/year</li>
              <li>Premium plan: GH₵ 3,000/year</li>
              <li>Includes: Updates, backups, support</li>
            </ul>
          </div>

          <div className="cost-card reveal" data-scroll style={{ "--delay": "240ms" }}>
            <h4>Mobile Money Fees</h4>
            <div className="cost-price">2.5% per transaction</div>
            <p>Only if you accept online payments. Standard industry rate.</p>
            <ul>
              <li>MTN Mobile Money: 2.5%</li>
              <li>Vodafone Cash: 2.5%</li>
              <li>AirtelTigo Money: 2.5%</li>
            </ul>
          </div>
        </div>

        <div className="total-cost-example reveal" data-scroll style={{ "--delay": "280ms" }}>
          <h4>Total annual cost example:</h4>
          <div className="example-breakdown">
            <div className="example-row">
              <span>Hosting & Domain</span>
              <span>GH₵ 900</span>
            </div>
            <div className="example-row">
              <span>Maintenance (optional)</span>
              <span>GH₵ 1,500</span>
            </div>
            <div className="example-divider"></div>
            <div className="example-row total">
              <span>Total per year</span>
              <span>GH₵ 2,400</span>
            </div>
          </div>
          <p className="example-note">
            That's <strong>GH₵ 200/month</strong> — less than a staff member's lunch allowance.
          </p>
        </div>
      </section>

      {/* ========================================
          PAYMENT OPTIONS
          ======================================== */}
      <section className="page payment-options-section">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">Payment Plans</p>
          <h2>Pay in stages or all at once.</h2>
        </div>

        <div className="payment-grid">
          <div className="payment-card reveal" data-scroll style={{ "--delay": "120ms" }}>
            <h4>Pay in Full</h4>
            <p className="payment-discount">Save 5%</p>
            <p>Pay 100% upfront and get 5% discount on total project cost.</p>
            <div className="payment-example">
              <strong>Example:</strong><br />
              GH₵ 8,500 project → Pay GH₵ 8,075
            </div>
          </div>

          <div className="payment-card recommended reveal" data-scroll style={{ "--delay": "180ms" }}>
            <div className="recommended-badge">Recommended</div>
            <h4>Pay in Stages</h4>
            <p className="payment-discount">Most common</p>
            <p>Split payment into 3 installments tied to milestones.</p>
            <div className="payment-stages">
              <div className="stage">
                <span className="stage-percent">40%</span>
                <span className="stage-label">Start (deposit)</span>
              </div>
              <div className="stage">
                <span className="stage-percent">30%</span>
                <span className="stage-label">Demo review</span>
              </div>
              <div className="stage">
                <span className="stage-percent">30%</span>
                <span className="stage-label">Launch day</span>
              </div>
            </div>
          </div>

          <div className="payment-card reveal" data-scroll style={{ "--delay": "240ms" }}>
            <h4>Monthly Plan</h4>
            <p className="payment-discount">Coming soon</p>
            <p>Spread cost over 12 months. Available for projects above GH₵ 12,000.</p>
            <div className="payment-example">
              <strong>Example:</strong><br />
              GH₵ 18,000 project → GH₵ 1,500/month for 12 months
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          COMPARISON: DIY vs FAAKO
          ======================================== */}
      <section className="page comparison-section">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">Illustrative Comparison</p>
          <h2>DIY tools vs a structured system.</h2>
        </div>

        <div className="comparison-table-wrapper reveal" data-scroll style={{ "--delay": "120ms" }}>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Option</th>
                <th>Excel + WhatsApp</th>
                <th>Faako System</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Setup cost</strong></td>
                <td>Free (your time)</td>
                <td>GH₵ 2,500 - 18,000</td>
              </tr>
              <tr>
                <td><strong>Time to set up</strong></td>
                <td>Ongoing (never done)</td>
                <td>2-12 weeks (then done)</td>
              </tr>
              <tr>
                <td><strong>Data accuracy</strong></td>
                <td>Manual entry errors</td>
                <td>Automated, validated</td>
              </tr>
              <tr>
                <td><strong>Real-time updates</strong></td>
                <td><FontAwesomeIcon icon={faX} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
              </tr>
              <tr>
                <td><strong>Multi-location</strong></td>
                <td><FontAwesomeIcon icon={faX} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
              </tr>
              <tr>
                <td><strong>Mobile access</strong></td>
                <td>Limited</td>
                <td>Full (app-like)</td>
              </tr>
              <tr>
                <td><strong>Reports</strong></td>
                <td>Manual creation</td>
                <td>Auto-generated</td>
              </tr>
              <tr>
                <td><strong>Support</strong></td>
                <td>YouTube tutorials</td>
                <td>Dedicated support team</td>
              </tr>
              <tr>
                <td><strong>Scalability</strong></td>
                <td>Breaks at 50+ items</td>
                <td>Scales to thousands</td>
              </tr>
              <tr className="total-row">
                <td><strong>Illustrative 3-year spend</strong></td>
                <td>
                  <div className="cost-breakdown-cell">
                    <span>~GH₵ 15,000</span>
                    <small>(assumption: team time + avoidable errors)</small>
                  </div>
                </td>
                <td>
                  <div className="cost-breakdown-cell">
                    <span>~GH₵ 15,700</span>
                    <small>(assumption: build + hosting for 3 years)</small>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="comparison-note reveal" data-scroll style={{ "--delay": "170ms" }}>
          <strong>Planning takeaway:</strong> A structured system may cost more upfront but can reduce manual work and error risk over time.
        </p>
      </section>

      {/* ========================================
          FAQ SECTION
          ======================================== */}
      <section className="page pricing-faq-section">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">Questions</p>
          <h2>Pricing questions answered.</h2>
        </div>

        <div className="faq-grid-two-col">
          <div className="faq-card reveal" data-scroll style={{ "--delay": "120ms" }}>
            <h4>Why one-time payment instead of monthly?</h4>
            <p>You own the system. No monthly fees eating into profits. Pay once, use forever. We make money on support, not rent.</p>
          </div>

          <div className="faq-card reveal" data-scroll style={{ "--delay": "170ms" }}>
            <h4>Can I start with Starter and upgrade later?</h4>
            <p>Yes! Pay the difference between packages. We design everything to grow with you.</p>
          </div>

          <div className="faq-card reveal" data-scroll style={{ "--delay": "220ms" }}>
            <h4>What if I only need one specific module?</h4>
            <p>You still need the core (Website + Dashboard) first. Then add any module for GH₵ 1,800 each.</p>
          </div>

          <div className="faq-card reveal" data-scroll style={{ "--delay": "270ms" }}>
            <h4>Do you offer refunds?</h4>
            <p>40% deposit is non-refundable once work starts. Remaining 60% is refundable before launch if you're not satisfied.</p>
          </div>

          <div className="faq-card reveal" data-scroll style={{ "--delay": "320ms" }}>
            <h4>What's included in "support"?</h4>
            <p>Bug fixes, security updates, minor tweaks. Major new features or redesigns are billed separately.</p>
          </div>

          <div className="faq-card reveal" data-scroll style={{ "--delay": "370ms" }}>
            <h4>Can I host it myself?</h4>
            <p>Yes, if you have technical expertise. We provide the code and setup instructions. Saves hosting costs but you handle updates.</p>
          </div>

          <div className="faq-card reveal" data-scroll style={{ "--delay": "420ms" }}>
            <h4>Why is Enterprise pricing "custom"?</h4>
            <p>Every enterprise has unique needs. We assess your requirements, data migration, integrations, and provide exact quote.</p>
          </div>

          <div className="faq-card reveal" data-scroll style={{ "--delay": "470ms" }}>
            <h4>Do you offer discounts for NGOs or schools?</h4>
            <p>Yes, 15% discount for registered non-profits and educational institutions. Contact us for details.</p>
          </div>
        </div>
      </section>

      {/* ========================================
          FINAL CTA
          ======================================== */}
      <section className="page cta reveal" data-scroll>
        <div className="cta-content">
          <h2>Ready to invest in your business?</h2>
          <p className="lead">
            Book a free consultation. We'll show you exactly what you need and what it costs.
          </p>
        </div>
        <div className="cta-actions">
          <PrimaryButton to="/contact">Get Your Custom Quote</PrimaryButton>
          <Link className="button button-ghost" to="/configure">
            Build Your System
          </Link>
        </div>
      </section>

      <WhatsApp />
    </section>
  );
}
