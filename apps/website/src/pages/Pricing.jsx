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
  const [selectedPlan, setSelectedPlan] = useState("Dashboards + Automation");
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
          <h1>Project pricing for websites, dashboards, and ERP systems.</h1>
          <p className="lead">
            Choose a package, then tailor scope based on your workflow, data,
            and team size.
          </p>
        </div>
          <figure className="stats-figure pricing-hero-figure reveal" style={{ "--delay": "120ms" }}>  
            <img
              className="pricing-hero-art"
              src="/imgs/elements/11.gif"
              alt="Faako system preview"
            />
          </figure>
      </section>

      {/* 2. SaaS Subscription Tiers */}
      <div className="section-header reveal" style={{ "--delay": "80ms" }}>
        <p className="eyebrow">Project Packages</p>
        <h2>Transparent GHS pricing for local growth.</h2>
        <p className="muted plan-selection" aria-live="polite">
          Selected plan: <strong>{selectedPlan}</strong>
        </p>
      </div>

      <div className="pricing-grid">
        {/* Website Launch */}
        <article
          className={`price-card reveal is-selectable ${
            selectedPlan === "Website Launch" ? "is-selected" : ""
          }`}
          style={{ "--delay": "160ms" }}
          onClick={handlePlanSelect("Website Launch")}
          onKeyDown={handlePlanKeyDown("Website Launch")}
          role="button"
          tabIndex={0}
          aria-pressed={selectedPlan === "Website Launch"}
        >
          <div className="card-header">
            <FontAwesomeIcon icon={faRocket} className="icon" />
            <h3>Website Launch</h3>
            <p className="price">From GHS 2,500</p>
            <p className="muted">For small teams that need a strong online presence.</p>
          </div>
          <ul>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Up to 5 pages</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Lead capture + WhatsApp</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Basic SEO + analytics</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> 2 weeks support</li>
          </ul>
          <PrimaryButton to="/contact">Request a quote</PrimaryButton>
        </article>

        {/* Dashboards + Automation (Highlighted) */}
        <article
          className={`price-card highlight reveal is-selectable ${
            selectedPlan === "Dashboards + Automation" ? "is-selected" : ""
          }`}
          style={{ "--delay": "240ms" }}
          onClick={handlePlanSelect("Dashboards + Automation")}
          onKeyDown={handlePlanKeyDown("Dashboards + Automation")}
          role="button"
          tabIndex={0}
          aria-pressed={selectedPlan === "Dashboards + Automation"}
        >
          <div className="badge">Most Popular</div>
          <div className="card-header">
            <FontAwesomeIcon icon={faChartLine} className="icon" />
            <h3>Dashboards + Automation</h3>
            <p className="price">From GHS 6,500</p>
            <p className="muted">For teams that need live reporting and automation.</p>
          </div>
          <ul>
            <li><FontAwesomeIcon icon={faCheckCircle} /> KPI dashboard setup</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Data integrations</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Automated reports</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Training + handover</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> 1 month support</li>
          </ul>
          <PrimaryButton to="/contact">Book a consultation</PrimaryButton>
        </article>

        {/* ERP + Custom Systems */}
        <article
          className={`price-card reveal is-selectable ${
            selectedPlan === "ERP + Custom Systems" ? "is-selected" : ""
          }`}
          style={{ "--delay": "320ms" }}
          onClick={handlePlanSelect("ERP + Custom Systems")}
          onKeyDown={handlePlanKeyDown("ERP + Custom Systems")}
          role="button"
          tabIndex={0}
          aria-pressed={selectedPlan === "ERP + Custom Systems"}
        >
          <div className="card-header">
            <FontAwesomeIcon icon={faBuilding} className="icon" />
            <h3>ERP + Custom Systems</h3>
            <p className="price">Custom</p>
            <p className="muted">Inventory, billing, approvals, and integrations.</p>
          </div>
          <ul>
            <li><FontAwesomeIcon icon={faCheckCircle} /> ERP modules tailored to your flow</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Data migration + cleanup</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Integrations for payments and tools</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Onsite training</li>
          </ul>
          <Link className="button button-ghost" to="/contact">Request a scope</Link>
        </article>
      </div>
      <div className="pricing-note reveal" style={{ "--delay": "360ms" }}>
        <p>Ask about ongoing support retainers after launch.</p>
      </div>

      {/* 3. What's Included */}
      <div className="section pricing-includes">
        <div className="section-header reveal" style={{ "--delay": "0ms" }}>
          <p className="eyebrow">Included in Every Project</p>
          <h2>Clear discovery, smooth launch.</h2>
          <p className="lead">
            Start with discovery, clean data, and training so your team can use
            the system with confidence.
          </p>
        </div>
        <div className="feature-grid">
          <article className="feature-card reveal" style={{ "--delay": "80ms" }}>
            <h3>Discovery Workshop</h3>
            <p className="muted">We map your workflow, pain points, and priorities.</p>
          </article>
          <article className="feature-card reveal" style={{ "--delay": "140ms" }}>
            <h3>Data Cleanup</h3>
            <p className="muted">We clean, map, and import your core records with you.</p>
          </article>
          <article className="feature-card reveal" style={{ "--delay": "200ms" }}>
            <h3>Team Training</h3>
            <p className="muted">Role-based onboarding so every team knows their workflow.</p>
          </article>
          <article className="feature-card reveal" style={{ "--delay": "260ms" }}>
            <h3>Launch Support</h3>
            <p className="muted">We stay close after go-live to stabilize and improve.</p>
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
                <th scope="col">Website Launch</th>
                <th scope="col" className="is-featured">Dashboards + Automation</th>
                <th scope="col">ERP + Custom Systems</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Typical timeline</th>
                <td>2-4 weeks</td>
                <td className="is-featured">4-6 weeks</td>
                <td>6-10+ weeks</td>
              </tr>
              <tr>
                <th scope="row">Dashboards</th>
                <td>Basic</td>
                <td className="is-featured">Advanced</td>
                <td>Full suite</td>
              </tr>
              <tr>
                <th scope="row">Data integrations</th>
                <td>Basic</td>
                <td className="is-featured">Standard</td>
                <td>Custom</td>
              </tr>
              <tr>
                <th scope="row">Training & handover</th>
                <td>Included</td>
                <td className="is-featured">Included</td>
                <td>Onsite + ongoing</td>
              </tr>
              <tr>
                <th scope="row">Support window</th>
                <td>2 weeks</td>
                <td className="is-featured">1 month</td>
                <td>Retainer options</td>
              </tr>
              <tr>
                <th scope="row">Custom modules</th>
                <td>Limited</td>
                <td className="is-featured">Some</td>
                <td>Unlimited</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. Add-on Modules */}
      <div className="modules-section">
        <div className="section-header reveal" style={{ "--delay": "0ms" }}>
          <p className="eyebrow">Add-on Services</p>
          <h2>Expand only where you need depth.</h2>
          <p className="lead">
            Mix and match add-ons as your team grows and your operations mature.
          </p>
        </div>
        <div className="module-grid">
          <article className="module-card reveal" style={{ "--delay": "80ms" }}>
            <h3>Extra pages + landing pages</h3>
            <p className="muted">Campaign pages, product pages, and new service sections.</p>
          </article>
          <article className="module-card reveal" style={{ "--delay": "140ms" }}>
            <h3>Advanced integrations</h3>
            <p className="muted">POS, bank feeds, accounting tools, and custom APIs.</p>
          </article>
          <article className="module-card reveal" style={{ "--delay": "200ms" }}>
            <h3>Automation + alerts</h3>
            <p className="muted">Scheduled reports, approval alerts, and KPI notifications.</p>
          </article>
          <article className="module-card reveal" style={{ "--delay": "260ms" }}>
            <h3>Field operations</h3>
            <p className="muted">Dispatch, route planning, and onsite service tracking.</p>
          </article>
          <article className="module-card reveal" style={{ "--delay": "320ms" }}>
            <h3>Executive reporting</h3>
            <p className="muted">KPI dashboards and multi-entity reporting views.</p>
          </article>
          <article className="module-card reveal" style={{ "--delay": "380ms" }}>
            <h3>Support retainers</h3>
            <p className="muted">Ongoing maintenance, upgrades, and priority support.</p>
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
            On-demand technical leadership for system architecture, integrations,
            and data migration.
          </p>
        </article>

        <article className="price-card reveal card-muted" style={{ "--delay": "580ms" }}>
          <div className="card-header">
            <h3>Flat-Fee Projects</h3>
            <p className="price">From GHS 5,000</p>
          </div>
          <p className="muted">
            Fixed-scope builds including websites, dashboards, and system audits.
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
          { name: "Reebs", src: "/imgs/company-logos/reebs_logo.svg" },
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
              "Yes. Start with a website or dashboard and add ERP modules as your team grows.",
          },
          {
            question: "How long does implementation take?",
            answer:
              "Websites are usually 2-4 weeks. Dashboards take 4-6 weeks. ERP systems can take 6-10+ weeks depending on scope.",
          },
          {
            question: "Do you offer support retainers?",
            answer:
              "Yes. We can stay on monthly or quarterly retainers for improvements and support.",
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
          <strong>The Faako Promise:</strong> Every project includes discovery,
          data cleanup, and training so your team actually uses the system.
        </p>
      </div>

      {/* 10. Final CTA */}
      <section className="cta cta-compact">
        <div className="section-header">
          <p className="eyebrow">Ready to Launch?</p>
          <h2>Let us map your scope and budget.</h2>
          <p className="lead">
            Talk to a Faako advisor to align scope, timelines, and budget.
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
