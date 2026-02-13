import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShield,
  faRoute,
  faHandshake,
  faMoneyBillWave,
  faArrowRight,
  faCheck,
  faCommentDots,
  faTable,
  faBookOpen,
  faBrain,
  faEnvelope,
  faStore,
  faTruckFast,
  faCalendarCheck,
  faIndustry,
  faHelmetSafety,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../components/PrimaryButton.jsx";
import WhatsApp from "../components/WhatsApp.jsx";
import { moduleShowcaseItems } from "../data/modules.js";

// Import the device merge effect
import { DeviceMergeLabeled } from "../components/DeviceMergeEffect.jsx";

export default function Solutions() {
  return (
    <section className="page solutions page-stack">

      {/* ========================================
          HERO SECTION - CONCISE
          ======================================== */}
      <section className="solutions-hero-v2 before-after">
        <div className="hero-content reveal">
          <p className="eyebrow">The Transformation</p>
          <h1>
            Stop juggling five systems. {' '}<br />
            <span className="text-accent">Run everything from one place.</span>
          </h1>
          <p className="lead">
          Stop losing time. Stop losing money. Stop losing your mind.
        </p>
        <div className="hero-actions">
          <PrimaryButton to="/contact">Start Your Transformation</PrimaryButton>
          <Link className="button button-ghost" to="/case-studies">
            See Case Studies
          </Link>
        </div>
      </div>

      <div className="hero-visual split-visual">
        {/* Before State */}
        <div className="before-state">
          <div className="state-label state-label--before">Before</div>
          <h3 className="state-title">Disconnected tools</h3>
          <p className="state-subtitle">
            Work is spread across chats, sheets, and memory.
          </p>
          <div className="chaos-items">
            <div className="chaos-item" style={{ '--delay': '0s' }}>
              <span>
                <FontAwesomeIcon icon={faCommentDots} />
                WhatsApp
              </span>
            </div>
            <div className="chaos-item" style={{ '--delay': '0.2s' }}>
              <span>
                <FontAwesomeIcon icon={faTable} />
                Excel
              </span>
            </div>
            <div className="chaos-item" style={{ '--delay': '0.4s' }}>
              <span>
                <FontAwesomeIcon icon={faBookOpen} />
                Notebook
              </span>
            </div>
            <div className="chaos-item" style={{ '--delay': '0.6s' }}>
              <span>
                <FontAwesomeIcon icon={faBrain} />
                Your Head
              </span>
            </div>
            <div className="chaos-item" style={{ '--delay': '0.8s' }}>
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
                Email
              </span>
            </div>
          </div>
          <div className="state-meta">
            <span>Slow updates</span>
            <span>Missing records</span>
          </div>
        </div>

        {/* Arrow */}
        <div className="transformation-arrow">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>

        {/* After State */}
        <div className="after-state">
          <div className="state-label state-label--after">After</div>
          <h3 className="state-title">One clear system</h3>
          <p className="state-subtitle">
            Every team member sees the same live information in one place.
          </p>
          <div className="unified-system">
            <div className="system-icon">
              <div className="pulse-ring"></div>
              <div className="system-core">
                <img src="/assets/logos/logo2-white.svg" alt="Faako" />
              </div>
            </div>
            <div className="system-label">One System</div>
            <div className="system-benefits">
              <span>
                <FontAwesomeIcon icon={faCheck} />
                All data
              </span>
              <span>
                <FontAwesomeIcon icon={faCheck} />
                One place
              </span>
              <span>
                <FontAwesomeIcon icon={faCheck} />
                Real-time
              </span>
            </div>
          </div>
          <div className="state-meta state-meta--after">
            <span>Live dashboard</span>
            <span>Faster decisions</span>
          </div>
        </div>
      </div>
    </section>

      {/* ========================================
          CORE SERVICES - CONCISE
          ======================================== */}
      <section className="page solutions-section" id="core-pillars">
        <div className="section-header reveal">
          <p className="eyebrow">Three Things You Need</p>
          <h2>Website. Operations. Reports.</h2>
          <p className="lead">
            When these three talk to each other, work gets easier.
          </p>
        </div>
        
        <div className="solutions-container">
          {/* Pillar 1 */}
          <article className="solution-pillar reveal" id="digital">
            <div className="pillar-head">
              <div className="pillar-icon">01</div>
              <h3>Get Found & Get Paid</h3>
            </div>
            <ul className="solution-list">
              <li>
                <strong>Business website</strong>
                Customers find you. Forms capture leads.
              </li>
              <li>
                <strong>Payment options</strong>
                Mobile Money. Bank transfers. Cash tracking.
              </li>
              <li>
                <strong>Lead capture</strong>
                Every inquiry goes to WhatsApp or your CRM.
              </li>
            </ul>
          </article>

          {/* Pillar 2 */}
          <article
            className="solution-pillar reveal"
            id="operations"
            style={{ "--delay": "120ms" }}
          >
            <div className="pillar-head">
              <div className="pillar-icon">02</div>
              <h3>Track Everything</h3>
            </div>
            <ul className="solution-list">
              <li>
                <strong>Real-time inventory</strong>
                Know what's in stock across all locations.
              </li>
              <li>
                <strong>Orders & deliveries</strong>
                Track from sale to delivery confirmation.
              </li>
              <li>
                <strong>Money flow</strong>
                Every sale, expense, payment — organized.
              </li>
            </ul>
          </article>

          {/* Pillar 3 */}
          <article
            className="solution-pillar reveal"
            id="data"
            style={{ "--delay": "240ms" }}
          >
            <div className="pillar-head">
              <div className="pillar-icon">03</div>
              <h3>See The Numbers</h3>
            </div>
            <ul className="solution-list">
              <li>
                <strong>Daily dashboards</strong>
                Sales, margins, stock — updated live.
              </li>
              <li>
                <strong>Performance tracking</strong>
                Who's performing. What's selling.
              </li>
              <li>
                <strong>Weekly reports</strong>
                Sent to WhatsApp every Monday morning.
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* ========================================
          DEVICE COMPATIBILITY - NEW SECTION
          ======================================== */}
      <section className="page device-compatibility">
        {/* DEVICE MERGE EFFECT */}
        <DeviceMergeLabeled 
          laptopSrc="/imgs/elements/dashboard-laptop.svg"
          phoneSrc="/imgs/elements/dashboard-phone.svg"
          startDistance={400}
        >
          <div className="section-header device-merge-effect__section-header">
            <p className="eyebrow">Works Everywhere</p>
            <h2>Built for desktop and mobile.</h2>
            <p className="lead">
              Your team uses phones. Your manager uses a laptop.
              Same system. Same data. Zero friction.
            </p>
          </div>
        </DeviceMergeLabeled>

        {/* Features Grid */}
        <div className="device-features reveal" style={{ "--delay": "200ms" }}>
          <article className="device-feature">
            <h4>Desktop Power</h4>
            <p>Full dashboard. All reports. Complete control.</p>
          </article>
          
          <article className="device-feature">
            <h4>Mobile Freedom</h4>
            <p>Update stock. Check orders. Approve payments. On the go.</p>
          </article>
          
          <article className="device-feature">
            <h4>Always Synced</h4>
            <p>Change on phone? Desktop updates instantly. No delays.</p>
          </article>
        </div>
      </section>

      {/* ========================================
          BUILT FOR GHANA - NEW SECTION
          ======================================== */}
      <section className="page ghana-features">
        <div className="section-header reveal">
          <p className="eyebrow">Made for Ghana</p>
          <h2>Works with how you actually operate.</h2>
        </div>

        <div className="feature-grid reveal" style={{ "--delay": "100ms" }}>
          <article className="feature-card">
            <FontAwesomeIcon icon={faMoneyBillWave} />
            <h3>Mobile Money Built In</h3>
            <p>MTN, Vodafone, AirtelTigo. Track every transaction.</p>
          </article>

          <article className="feature-card" style={{ "--delay": "120ms" }}>
            <FontAwesomeIcon icon={faHandshake} />
            <h3>WhatsApp Integration</h3>
            <p>Alerts, reports, customer inquiries — all through WhatsApp.</p>
          </article>

          <article className="feature-card" style={{ "--delay": "240ms" }}>
            <FontAwesomeIcon icon={faShield} />
            <h3>Works Offline</h3>
            <p>Internet down? Keep working. Syncs when you're back online.</p>
          </article>

          <article className="feature-card" style={{ "--delay": "360ms" }}>
            <FontAwesomeIcon icon={faRoute} />
            <h3>Multi-Location Ready</h3>
            <p>Accra, Kumasi, Takoradi — all locations in one view.</p>
          </article>
        </div>
      </section>

      {/* ========================================
          HOW IT WORKS - CONCISE
          ======================================== */}
      <section className="page process-section">
        <div className="section-header reveal">
          <p className="eyebrow">Our Process</p>
          <h2>Fast setup. Clear steps.</h2>
        </div>

        <div className="process-steps reveal" style={{ "--delay": "100ms" }}>
          <div className="process-step">
            <div className="step-number">01</div>
            <div className="step-content">
              <h4>We Visit</h4>
              <p>Watch your workflow. Take notes.</p>
            </div>
          </div>

          <div className="process-step">
            <div className="step-number">02</div>
            <div className="step-content">
              <h4>Design</h4>
              <p>Build system that fits your process.</p>
            </div>
          </div>

          <div className="process-step">
            <div className="step-number">03</div>
            <div className="step-content">
              <h4>Launch</h4>
              <p>Train team. Go live. Stay for support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          MODULE OPTIONS - VISUAL
          ======================================== */}
      <section className="page modules-showcase" id="modules">
        <div className="section-header reveal">
          <p className="eyebrow">Pick Your Modules</p>
          <h2>Start with essentials. Add more as you grow.</h2>
        </div>

        <div className="module-grid reveal" style={{ "--delay": "100ms" }}>
          {moduleShowcaseItems.map((module, index) => (
            <Link
              key={module.id}
              to={`/modules/${module.id}`}
              className={`module-card module-card--${module.id}`}
              style={{ "--delay": `${index * 80}ms` }}
              aria-label={`View ${module.title} module details`}
            >
              <div className="module-card-head">
                <span className="module-card-icon">
                  <FontAwesomeIcon icon={module.icon} />
                </span>
                <span className="module-card-kicker">{module.kicker}</span>
              </div>
              <h4>{module.title}</h4>
              <p>{module.description}</p>
              <div className="module-card-signals">
                {module.signals.map((signal) => (
                  <span key={signal}>
                    <FontAwesomeIcon icon={faCheck} />
                    {signal}
                  </span>
                ))}
              </div>
              <div className="module-card-foot">
                <span>{module.outcome}</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '2rem' }}>
          <Link to="/configure" className="button button-ghost">
            See All Modules <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>

      {/* ========================================
          INDUSTRIES - NEW SECTION
          ======================================== */}
      <section className="page industries-section" id="industries">
        <div className="section-header reveal">
          <p className="eyebrow">Who We Serve</p>
          <h2>Built for how you operate.</h2>
        </div>

        <div className="industries-grid reveal" style={{ "--delay": "100ms" }}>
          <div className="industry-card">
            <h4>
              <FontAwesomeIcon icon={faStore} /> Retail
            </h4>
            <p>Shops, boutiques, stores</p>
          </div>

          <div className="industry-card">
            <h4>
              <FontAwesomeIcon icon={faTruckFast} /> Distribution
            </h4>
            <p>Wholesalers, suppliers</p>
          </div>

          <div className="industry-card">
            <h4>
              <FontAwesomeIcon icon={faCalendarCheck} /> Events
            </h4>
            <p>Rentals, planning, venues</p>
          </div>

          <div className="industry-card">
            <h4>
              <FontAwesomeIcon icon={faIndustry} /> Manufacturing
            </h4>
            <p>Production, assembly</p>
          </div>

          <div className="industry-card">
            <h4>
              <FontAwesomeIcon icon={faHelmetSafety} /> Construction
            </h4>
            <p>Projects, materials</p>
          </div>

          <div className="industry-card">
            <h4>
              <FontAwesomeIcon icon={faUtensils} /> Food & Bev
            </h4>
            <p>Restaurants, catering</p>
          </div>
        </div>
      </section>

      {/* ========================================
          PROOF SECTION - CONCISE
          ======================================== */}
      <section className="page proof-section">
        <div className="section-header reveal">
          <p className="eyebrow">Real Results</p>
          <h2>Systems that actually work.</h2>
        </div>

        <div className="proof-stats reveal" style={{ "--delay": "100ms" }}>
          <div className="stat-card">
            <div className="stat-value">75%</div>
            <div className="stat-label">Less time on admin</div>
          </div>

          <div className="stat-card">
            <div className="stat-value">Zero</div>
            <div className="stat-label">Lost orders</div>
          </div>

          <div className="stat-card">
            <div className="stat-value">Real-time</div>
            <div className="stat-label">Inventory updates</div>
          </div>
        </div>

        <div className="text-center" style={{ marginTop: '2rem' }}>
          <Link to="/case-studies" className="button button-ghost">
            See Case Studies <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>

      {/* ========================================
          PRICING PREVIEW
          ======================================== */}
      <section className="page pricing-preview">
        <div className="section-header reveal">
          <p className="eyebrow">Pricing</p>
          <h2>Clear costs. No surprises.</h2>
        </div>

        <div className="pricing-cards reveal" style={{ "--delay": "120ms" }}>
          <div className="pricing-card">
            <h3>Website</h3>
            <div className="price-tag">
              <span className="price">GH₵ 3,500</span>
            </div>
            <ul className="pricing-features">
              <li><FontAwesomeIcon icon={faCheck} /> Mobile website</li>
              <li><FontAwesomeIcon icon={faCheck} /> Lead capture</li>
              <li><FontAwesomeIcon icon={faCheck} /> 3-month support</li>
            </ul>
            <PrimaryButton to="/contact">Get Started</PrimaryButton>
          </div>

          <div className="pricing-card featured">
            <span className="badge">Popular</span>
            <h3>Website + Dashboard</h3>
            <div className="price-tag">
              <span className="price">GH₵ 12,000</span>
            </div>
            <ul className="pricing-features">
              <li><FontAwesomeIcon icon={faCheck} /> Everything above</li>
              <li><FontAwesomeIcon icon={faCheck} /> Sales tracking</li>
              <li><FontAwesomeIcon icon={faCheck} /> Inventory</li>
              <li><FontAwesomeIcon icon={faCheck} /> Reports</li>
            </ul>
            <PrimaryButton to="/contact">Let's Talk</PrimaryButton>
          </div>

          <div className="pricing-card">
            <h3>Complete System</h3>
            <div className="price-tag">
              <span className="price">Custom</span>
            </div>
            <ul className="pricing-features">
              <li><FontAwesomeIcon icon={faCheck} /> Everything above</li>
              <li><FontAwesomeIcon icon={faCheck} /> Multi-location</li>
              <li><FontAwesomeIcon icon={faCheck} /> Custom workflows</li>
              <li><FontAwesomeIcon icon={faCheck} /> Full support</li>
            </ul>
            <PrimaryButton to="/contact">Request Quote</PrimaryButton>
          </div>
        </div>

        <p className="text-center" style={{ marginTop: '2rem', color: 'var(--muted)' }}>
          <Link to="/pricing" className="text-link">
            See detailed pricing <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </p>
      </section>

      {/* ========================================
          FINAL CTA
          ======================================== */}
      <section className="page cta reveal">
        <div className="cta-content">
          <h2>Ready to connect everything?</h2>
          <p className="lead">
            Let's talk about what you need. No pressure. Just solutions.
          </p>
        </div>
        <div className="cta-actions">
          <PrimaryButton to="/contact">Book Free Call</PrimaryButton>
          <Link className="button button-ghost" to="/case-studies">
            View Case Studies
          </Link>
        </div>
      </section>

      <WhatsApp />
    </section>
  );
}
