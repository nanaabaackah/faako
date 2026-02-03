// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faRocket,
  faChartLine,
  faBuilding,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../components/PrimaryButton.jsx";
import TrustedBy from "../components/TrustedBy.jsx";
import Testimonials from "../components/Testimonials.jsx";
import FaqSection from "../components/FaqSection.jsx";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState("Professional");
  const handlePlanSelect = (plan) => () => setSelectedPlan(plan);
  const handlePlanKeyDown = (plan) => (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setSelectedPlan(plan);
    }
  };

  return (
    <section className="page pricing page-stack">
      {/* 1. Hero Section */}
      <section className="pricing-hero split">
        <div className="pricing-hero reveal" style={{ "--delay": "0ms" }}>
          <p className="eyebrow">Pricing & Value</p>
          <h1>ERP built for your specific workflow.</h1>
          <p className="lead">
            Stop paying for features you don't use. Choose a foundation, then
            layer on the modules your African enterprise needs to thrive.
          </p>
        </div>
          <figure className="stats-figure pricing-hero-figure reveal" style={{ "--delay": "120ms" }}>  
            <img
              className="pricing-hero-art"
              src="/imgs/elements/11.gif"
              alt="Faako ERP dashboard preview"
            />
          </figure>
      </section>

      {/* 2. SaaS Subscription Tiers */}
      <div className="section-header reveal" style={{ "--delay": "80ms" }}>
        <p className="eyebrow">Subscription Plans</p>
        <h2>Transparent GHS pricing for local growth.</h2>
        <p className="muted plan-selection" aria-live="polite">
          Selected plan: <strong>{selectedPlan}</strong>
        </p>
      </div>

      <div className="pricing-grid">
        {/* Starter Plan */}
        <article
          className={`price-card reveal is-selectable ${
            selectedPlan === "Starter" ? "is-selected" : ""
          }`}
          style={{ "--delay": "160ms" }}
          onClick={handlePlanSelect("Starter")}
          onKeyDown={handlePlanKeyDown("Starter")}
          role="button"
          tabIndex={0}
          aria-pressed={selectedPlan === "Starter"}
        >
          <div className="card-header">
            <FontAwesomeIcon icon={faRocket} className="icon" />
            <h3>Starter</h3>
            <p className="price">GHS 450 <small>/mo</small></p>
            <p className="muted">For small teams unifying their data.</p>
          </div>
          <ul>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Core Finance & Ops</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> 5 User Seats</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Quarterly Review</li>
          </ul>
          <PrimaryButton to={`/signup?plan=starter`}>Choose Starter</PrimaryButton>
        </article>

        {/* Professional Plan (Highlighted) */}
        <article
          className={`price-card highlight reveal is-selectable ${
            selectedPlan === "Professional" ? "is-selected" : ""
          }`}
          style={{ "--delay": "240ms" }}
          onClick={handlePlanSelect("Professional")}
          onKeyDown={handlePlanKeyDown("Professional")}
          role="button"
          tabIndex={0}
          aria-pressed={selectedPlan === "Professional"}
        >
          <div className="badge">Most Popular</div>
          <div className="card-header">
            <FontAwesomeIcon icon={faChartLine} className="icon" />
            <h3>Professional</h3>
            <p className="price">GHS 1,250 <small>/mo</small></p>
            <p className="muted">Scalable ERP for growing SMEs.</p>
          </div>
          <ul>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Everything in Starter</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Advanced CRM & Payroll</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Priority Support</li>
          </ul>
          <PrimaryButton to={`/signup?plan=professional`}>Choose Professional</PrimaryButton>
        </article>

        {/* Enterprise Plan */}
        <article
          className={`price-card reveal is-selectable ${
            selectedPlan === "Enterprise" ? "is-selected" : ""
          }`}
          style={{ "--delay": "320ms" }}
          onClick={handlePlanSelect("Enterprise")}
          onKeyDown={handlePlanKeyDown("Enterprise")}
          role="button"
          tabIndex={0}
          aria-pressed={selectedPlan === "Enterprise"}
        >
          <div className="card-header">
            <FontAwesomeIcon icon={faBuilding} className="icon" />
            <h3>Enterprise</h3>
            <p className="price">Custom</p>
            <p className="muted">Dedicated infrastructure & custom builds.</p>
          </div>
          <ul>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Unlimited Modules</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> White-label Branding</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Dedicated Engineering</li>
          </ul>
          <Link className="button button-ghost" to="/contact">Talk to Sales</Link>
        </article>
      </div>
      <div className="pricing-note reveal" style={{ "--delay": "360ms" }}>
        <p>Save 15-20% with annual billing on all subscription plans.</p>
      </div>

      {/* 3. What's Included */}
      <div className="section pricing-includes">
        <div className="section-header reveal" style={{ "--delay": "0ms" }}>
          <p className="eyebrow">Included in Every Plan</p>
          <h2>Fast onboarding, consistent results.</h2>
          <p className="lead">
            Start with a clean data foundation and the training your teams need
            to use Faako with confidence.
          </p>
        </div>
        <div className="feature-grid">
          <article className="feature-card reveal" style={{ "--delay": "80ms" }}>
            <h3>Guided Data Migration</h3>
            <p className="muted">
              We clean, map, and import your core records with you.
            </p>
          </article>
          <article className="feature-card reveal" style={{ "--delay": "140ms" }}>
            <h3>Local Training</h3>
            <p className="muted">
              Role-based onboarding so every team knows their workflow.
            </p>
          </article>
          <article className="feature-card reveal" style={{ "--delay": "200ms" }}>
            <h3>Security & Backups</h3>
            <p className="muted">
              Access controls, audit logs, and daily backups included.
            </p>
          </article>
          <article className="feature-card reveal" style={{ "--delay": "260ms" }}>
            <h3>Customer Success</h3>
            <p className="muted">
              Quarterly reviews and roadmap guidance as you scale.
            </p>
          </article>
        </div>
      </div>

      {/* 4. Plan Comparison */}
      <div className="section pricing-compare">
        <div className="section-header reveal" style={{ "--delay": "0ms" }}>
          <p className="eyebrow">Compare Plans</p>
          <h2>Pick the right starting point.</h2>
        </div>
        <div className="pricing-table reveal" style={{ "--delay": "120ms" }}>
          <table>
            <thead>
              <tr>
                <th scope="col">Features</th>
                <th scope="col">Starter</th>
                <th scope="col" className="is-featured">Professional</th>
                <th scope="col">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">User seats</th>
                <td>5</td>
                <td className="is-featured">20</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <th scope="row">Core Finance & Ops</th>
                <td>Included</td>
                <td className="is-featured">Included</td>
                <td>Included</td>
              </tr>
              <tr>
                <th scope="row">CRM & Payroll</th>
                <td>Add-on</td>
                <td className="is-featured">Included</td>
                <td>Included</td>
              </tr>
              <tr>
                <th scope="row">Workflow automation</th>
                <td>Standard</td>
                <td className="is-featured">Advanced</td>
                <td>Custom</td>
              </tr>
              <tr>
                <th scope="row">Success partnership</th>
                <td>Quarterly</td>
                <td className="is-featured">Monthly</td>
                <td>Dedicated team</td>
              </tr>
              <tr>
                <th scope="row">Infrastructure</th>
                <td>Shared cloud</td>
                <td className="is-featured">Shared cloud</td>
                <td>Dedicated cloud</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. Add-on Modules */}
      <div className="modules-section">
        <div className="section-header reveal" style={{ "--delay": "0ms" }}>
          <p className="eyebrow">Add-on Modules</p>
          <h2>Expand only where you need depth.</h2>
          <p className="lead">
            Mix and match modules as your teams mature and your operations grow.
          </p>
        </div>
        <div className="module-grid">
          <article className="module-card reveal" style={{ "--delay": "80ms" }}>
            <h3>Inventory & Procurement</h3>
            <p className="muted">
              Stock visibility, vendor management, and purchasing workflows.
            </p>
          </article>
          <article className="module-card reveal" style={{ "--delay": "140ms" }}>
            <h3>Customer Relationship</h3>
            <p className="muted">
              Deal pipelines, client communications, and sales analytics.
            </p>
          </article>
          <article className="module-card reveal" style={{ "--delay": "200ms" }}>
            <h3>Payroll & HR</h3>
            <p className="muted">
              Leave tracking, payroll runs, and compliance reporting.
            </p>
          </article>
          <article className="module-card reveal" style={{ "--delay": "260ms" }}>
            <h3>Field Operations</h3>
            <p className="muted">
              Dispatch, route planning, and onsite service tracking.
            </p>
          </article>
          <article className="module-card reveal" style={{ "--delay": "320ms" }}>
            <h3>Executive Reporting</h3>
            <p className="muted">
              KPI dashboards and multi-entity reporting views.
            </p>
          </article>
          <article className="module-card reveal" style={{ "--delay": "380ms" }}>
            <h3>Compliance & Risk</h3>
            <p className="muted">
              Audit trails, approvals, and policy governance.
            </p>
          </article>
        </div>
      </div>

      {/* 6. Consulting & Advisory Section */}
      <div className="section-header reveal" style={{ "--delay": "420ms" }}>
        <p className="eyebrow">Advisory & Implementation</p>
        <h2>Need a custom build or technical lead?</h2>
      </div>

      <div className="pricing-grid">
        <article className="price-card reveal card-muted" style={{ "--delay": "500ms" }}>
          <div className="card-header">
            <FontAwesomeIcon icon={faMicrochip} className="icon" />
            <h3>Technical Consultation</h3>
            <p className="price">GHS 400 - 1,200 <small>/hr</small></p>
          </div>
          <p className="muted">
            On-demand technical leadership for system architecture and
            legacy data migration.
          </p>
        </article>

        <article className="price-card reveal card-muted" style={{ "--delay": "580ms" }}>
          <div className="card-header">
            <h3>Flat-Fee Projects</h3>
            <p className="price">From GHS 5,000</p>
          </div>
          <p className="muted">
            Fixed-scope implementations including digital transformation
            roadmaps and system audits.
          </p>
        </article>
      </div>

      {/* 7. Trust & Testimonials */}
      <TrustedBy
        className="trust-strip"
        eyebrow="Trusted Teams"
        title="Operators across Ghana scale with Faako."
        lead="From logistics to professional services, Faako keeps everyone aligned."
        logos={[
          "Reebs",
          "Atlas Rentals",
          "Northbridge",
          "Summit Events",
          "Clearline Logistics",
          "VentureWorks",
        ]}
      />

      <Testimonials
        className="section testimonials"
        eyebrow="Client Love"
        title="Teams feel the difference in weeks."
        lead="Faster decisions, fewer blind spots, and shared accountability."
        items={[
          {
            quote:
              "We finally see every order, booking, and delivery in one place. Our team stopped chasing spreadsheets overnight.",
            author: "Operations Lead, Multi-Location Rentals",
            delay: "80ms",
          },
          {
            quote:
              "The dashboards made weekly reviews simple. We know what is shipping, what is late, and where to intervene.",
            author: "COO, Logistics & Events",
            delay: "140ms",
          },
          {
            quote:
              "Setup was fast and the advisory team stayed with us. We launched in phases without disruption.",
            author: "Founder, Regional Services Group",
            delay: "200ms",
          },
        ]}
      />

      {/* 8. FAQs */}
      <FaqSection
        className="faq-section"
        eyebrow="FAQs"
        title="Answers before you commit."
        items={[
          {
            question: "Can we start small and upgrade later?",
            answer:
              "Yes. Most teams begin on Starter or Professional and expand as departments adopt Faako.",
          },
          {
            question: "How long does implementation take?",
            answer:
              "Typical rollouts run 3-8 weeks depending on data quality and the number of modules selected.",
          },
          {
            question: "Do you offer annual billing discounts?",
            answer:
              "Yes. Annual commitments receive a 15-20% discount across subscription plans.",
          },
          {
            question: "Is consulting required to use Faako?",
            answer:
              "Not required. Consulting is available if you need technical leadership, custom builds, or complex integrations.",
          },
        ]}
      />

      {/* 9. Closing Note */}
      <div className="pricing-note reveal" style={{ "--delay": "0ms" }}>
        <p>
          <strong>The Faako Promise:</strong> Every implementation includes
          guided data migration and local training to ensure your team
          actually uses the system.
        </p>
      </div>

      {/* 10. Final CTA */}
      <section className="cta cta-compact">
        <div className="section-header">
          <p className="eyebrow">Ready to Launch?</p>
          <h2>Let us map your rollout and pricing mix.</h2>
          <p className="lead">
            Talk to a Faako advisor to align modules, timelines, and budget.
          </p>
        </div>
        <div className="cta-actions">
          <PrimaryButton to="/contact">Book a Consultation</PrimaryButton>
          <Link className="button button-ghost" to="/contact">
            Request a Quote
          </Link>
        </div>
      </section>
    </section>
  );
}
