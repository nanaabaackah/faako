/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faBoxArchive,
  faBoxesStacked,
  faBullhorn,
  faCalendarCheck,
  faCalendarDays,
  faCartShopping,
  faChartLine,
  faChartPie,
  faClock,
  faFileInvoiceDollar,
  faFolderOpen,
  faGear,
  faGlobe,
  faArrowRight,
  faHandshake,
  faHeadset,
  faMoneyBillWave,
  faPenToSquare,
  faPlug,
  faReceipt,
  faRoute,
  faShield,
  faTruck,
  faUserShield,
  faUserTie,
  faWrench,
  faCheck,
  faTimes,
  faCheckCircle,
  faTriangleExclamation,
  faPhone,
  faPhoneAlt,
  faMobile,
  faBolt,
  faHandPointer,
} from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../components/PrimaryButton.jsx";
import TrustedBy from "../components/TrustedBy.jsx";
import Testimonials from "../components/Testimonials.jsx";
import FaqSection from "../components/FaqSection.jsx";
import WhatsApp from "../components/WhatsApp.jsx";

export default function Home() {
  const [activeTab, setActiveTab] = useState("portals");
  const [showAllModules, setShowAllModules] = useState(false);

  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion) {
      const svgs = document.querySelectorAll(".faako-logo");
      svgs.forEach((svg) => {
        const paths = svg.querySelectorAll("path");
        paths.forEach((p, i) => {
          const originalFill = (p.getAttribute("fill") || "#0052FF").toLowerCase();
          p.style.setProperty("--path-fill", originalFill);
          p.style.setProperty("--i", String(i));
          const len = p.getTotalLength();
          p.style.setProperty("--dash", String(len));
          p.style.strokeDasharray = "var(--dash)";
          p.style.strokeDashoffset = "var(--dash)";
          p.style.fill = "transparent";
          p.style.stroke = "var(--path-fill)";
          p.classList.add("faako-loop-path");
        });
      });
    }
    return undefined;
  }, []);

  return (
    <>
      <section
        className="page hero hero-v2 hero-centered hero-parallax"
        style={{ "--hero-bg": "url('/imgs/backgrounds/9.png')" }}
      >
        <div className="hero-content" data-scroll>
          <p className="eyebrow">SaaS + Tech Consulting for Ghana</p>
          <h1>
            Smarter operations with{" "}
            <span className="text-accent">custom software</span> for your business.
          </h1>
          <p className="lead">
            We build websites, dashboards, and ERP systems that remove bottlenecks and
            boost efficiency. From discovery to launch, we work alongside your team.
          </p>
          <div className="hero-actions">
            <PrimaryButton to="/contact">Book a Consultation</PrimaryButton>
            <Link className="button button-ghost" to="/contact">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/*<TrustedBy
        className="page trust-strip"
        headerScroll
        eyebrow="Trusted By"
        title="Teams who run on Faako"
        lead="From fast-moving operators to multi-location teams, Faako keeps everyone aligned."
        logos={[
          "REEBS Party Themes",
          "Atlas Rentals",
          "Northbridge",
          "Summit Events",
          "Clearline Logistics",
          "VentureWorks",
        ]}
      /> */}

      {/* Social Proof Section */}
      <section className="page trust-indicators">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">Built for Ghanaian businesses</p>
          <h2>Clear workflows. Visible numbers. Teams aligned.</h2>
          <p className="lead">We focus on the basics that make software stick: discovery, adoption, and support.</p>
        </div>

        <div className="ribbon trust-ribbon reveal" data-scroll style={{ "--delay": "60ms" }}>
          <div className="ribbon-copy">
            <p className="pill">What you get</p>
            <strong>Local build + advisory support.</strong>
            <p className="muted">We run the project while your team keeps operating.</p>
          </div>
          <div className="ribbon-tags">
            <span>Discovery workshops</span>
            <span>System design</span>
            <span>Build + launch</span>
            <span>Training + support</span>
          </div>
        </div>
        
        <div className="trust-grid reveal" data-scroll style={{ "--delay": "100ms" }}>
          <article className="trust-card">
            <span className="trust-icon">
              <FontAwesomeIcon icon={faHandshake} />
            </span>
            <h3>Business-first discovery</h3>
            <p>We sit with your team and map the real workflow before any build starts.</p>
            <div className="trust-tags">
              <span>Onsite discovery</span>
              <span>Process mapping</span>
            </div>
          </article>
          <article className="trust-card">
            <span className="trust-icon">
              <FontAwesomeIcon icon={faShield} />
            </span>
            <h3>Clean data setup</h3>
            <p>We clean and migrate your sheets, approvals, and balances without disrupting operations.</p>
            <div className="trust-tags">
              <span>Data cleanup</span>
              <span>Go-live checklist</span>
            </div>
          </article>
          <article className="trust-card">
            <span className="trust-icon">
              <FontAwesomeIcon icon={faHeadset} />
            </span>
            <h3>Local support</h3>
            <p>Fast response on WhatsApp and onsite check-ins so your team keeps moving.</p>
            <div className="trust-tags">
              <span>Local support</span>
              <span>Training sessions</span>
            </div>
          </article>
        </div>

        <div className="trust-commitments reveal" data-scroll style={{ "--delay": "180ms" }}>
          <div className="trust-commit">
            <span className="trust-commit-label">Implementation</span>
            <strong>Blueprint → build → launch</strong>
            <p>We handle the project plan while your team keeps selling.</p>
          </div>
          <div className="trust-commit">
            <span className="trust-commit-label">Adoption</span>
            <strong>Training that sticks</strong>
            <p>Role-based guides, playbooks, and hands-on sessions.</p>
          </div>
          <div className="trust-commit">
            <span className="trust-commit-label">Continuity</span>
            <strong>Always improving</strong>
            <p>Quarterly reviews to refine workflows and reports.</p>
          </div>
        </div>
        
       {/* <div className="industry-badges reveal" data-scroll style={{ "--delay": "200ms" }}>
          <h3>Trusted Across Industries</h3>
          <div className="badge-grid">
            <span className="industry-badge">Logistics</span>
            <span className="industry-badge">Retail</span>
            <span className="industry-badge">Events</span>
            <span className="industry-badge">Manufacturing</span>
            <span className="industry-badge">Distribution</span>
          </div>
        </div>*/}
      </section>

      <section id="features" className="page features-section">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">Services</p>
          <h2>Websites, dashboards, ERP, and more - built to fit.</h2>
        </div>
        <div className="tools-tabs reveal" data-scroll>
          <div className="tools-tab-menu">
            <div className="tools-tab-buttons" role="tablist" aria-label="Service highlights">
              <button
                type="button"
                id="tools-tab-portals"
                className={`tools-tab-button ${activeTab === "portals" ? "is-active" : ""}`}
                role="tab"
                aria-selected={activeTab === "portals"}
                aria-controls="tools-panel-portals"
                tabIndex={activeTab === "portals" ? 0 : -1}
                onClick={() => setActiveTab("portals")}
              >
                <span className="tools-tab-icon" aria-hidden="true">
                  <FontAwesomeIcon icon={faGlobe} />
                </span>
                Websites
              </button>
              <button
                type="button"
                id="tools-tab-inventory"
                className={`tools-tab-button ${activeTab === "inventory" ? "is-active" : ""}`}
                role="tab"
                aria-selected={activeTab === "inventory"}
                aria-controls="tools-panel-inventory"
                tabIndex={activeTab === "inventory" ? 0 : -1}
                onClick={() => setActiveTab("inventory")}
              >
                <span className="tools-tab-icon" aria-hidden="true">
                  <FontAwesomeIcon icon={faBoxesStacked} />
                </span>
                ERP Core
              </button>
              <button
                type="button"
                id="tools-tab-dashboard"
                className={`tools-tab-button ${activeTab === "dashboard" ? "is-active" : ""}`}
                role="tab"
                aria-selected={activeTab === "dashboard"}
                aria-controls="tools-panel-dashboard"
                tabIndex={activeTab === "dashboard" ? 0 : -1}
                onClick={() => setActiveTab("dashboard")}
              >
                <span className="tools-tab-icon" aria-hidden="true">
                  <FontAwesomeIcon icon={faChartPie} />
                </span>
                Dashboards
              </button>
              <button
                type="button"
                id="tools-tab-workflow"
                className={`tools-tab-button ${activeTab === "workflow" ? "is-active" : ""}`}
                role="tab"
                aria-selected={activeTab === "workflow"}
                aria-controls="tools-panel-workflow"
                tabIndex={activeTab === "workflow" ? 0 : -1}
                onClick={() => setActiveTab("workflow")}
              >
                <span className="tools-tab-icon" aria-hidden="true">
                  <FontAwesomeIcon icon={faUserTie} />
                </span>
                CRM
              </button>
              <button
                type="button"
                id="tools-tab-accounting"
                className={`tools-tab-button ${activeTab === "accounting" ? "is-active" : ""}`}
                role="tab"
                aria-selected={activeTab === "accounting"}
                aria-controls="tools-panel-accounting"
                tabIndex={activeTab === "accounting" ? 0 : -1}
                onClick={() => setActiveTab("accounting")}
              >
                <span className="tools-tab-icon" aria-hidden="true">
                  <FontAwesomeIcon icon={faMoneyBillWave} />
                </span>
                Finance
              </button>
              <button type="button" className="tools-tab-more">
                <Link to="/case-studies">
                    See More <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </button>
            </div>

            <div className="tools-tab-panel">
              <div
                id="tools-panel-portals"
                className={`tools-tab-panel-card ${activeTab === "portals" ? "is-visible" : ""}`}
                role="tabpanel"
                aria-labelledby="tools-tab-portals"
                aria-hidden={activeTab !== "portals"}
              >
                <figure className="tools-tab-figure">
                  <img src="/imgs/demo/demo10.png" alt="Website preview" loading="lazy" decoding="async" />
                  <Link className="tools-tab-overlay" to="/contact">
                    See use case <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </figure>
              </div>

              <div
                id="tools-panel-inventory"
                className={`tools-tab-panel-card ${activeTab === "inventory" ? "is-visible" : ""}`}
                role="tabpanel"
                aria-labelledby="tools-tab-inventory"
                aria-hidden={activeTab !== "inventory"}
              >
                <figure className="tools-tab-figure">
                  <img src="/imgs/demo/demo9.png" alt="ERP preview" loading="lazy" decoding="async" />
                  <Link className="tools-tab-overlay" to="/contact">
                    See use case <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </figure>
              </div>

              <div
                id="tools-panel-dashboard"
                className={`tools-tab-panel-card ${activeTab === "dashboard" ? "is-visible" : ""}`}
                role="tabpanel"
                aria-labelledby="tools-tab-dashboard"
                aria-hidden={activeTab !== "dashboard"}
              >
                <figure className="tools-tab-figure">
                  <img src="/imgs/demo/demo8.png" alt="Dashboard preview" loading="lazy" decoding="async" />
                  <Link className="tools-tab-overlay" to="/contact">
                    See use case <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </figure>
              </div>

              <div
                id="tools-panel-workflow"
                className={`tools-tab-panel-card ${activeTab === "workflow" ? "is-visible" : ""}`}
                role="tabpanel"
                aria-labelledby="tools-tab-workflow"
                aria-hidden={activeTab !== "workflow"}
              >
                <figure className="tools-tab-figure">
                  <img src="/imgs/demo/demo7.png" alt="CRM preview" loading="lazy" decoding="async" />
                  <Link className="tools-tab-overlay" to="/contact">
                    See use case <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </figure>
              </div>

              <div
                id="tools-panel-accounting"
                className={`tools-tab-panel-card ${activeTab === "accounting" ? "is-visible" : ""}`}
                role="tabpanel"
                aria-labelledby="tools-tab-accounting"
                aria-hidden={activeTab !== "accounting"}
              >
                <figure className="tools-tab-figure">
                  <img src="/imgs/demo/demo6.png" alt="Finance overview preview" loading="lazy" decoding="async" />
                  <Link className="tools-tab-overlay" to="/contact">
                    See use case <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
        
      {/* Video Demo Section 
      <section className="page video-demo">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">See It In Action</p>
          <h2>Watch Faako Transform a Real Business in 90 Seconds</h2>
        </div>
        
        <div className="video-container reveal" data-scroll style={{ "--delay": "100ms" }}>
          <div className="video-wrapper">
            Replace with your actual video URL
            <div className="video-placeholder">
              <div className="video-play-button">
                <FontAwesomeIcon icon={faArrowRight} />
                <span>Play Demo</span>
              </div>
              <img src="/imgs/demo/video-thumbnail.png" alt="Faako demo video thumbnail" />
            </div>
            <iframe 
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Faako System Demo - See How It Works"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
              allowFullScreen
            /> 
          </div>
          <div className="video-caption">
            <h3>From Excel Chaos to Dashboard Clarity</h3>
            <p>Watch how Emmanuel from Tema Logistics went from spending 3 hours on daily reports to just 5 minutes — and never looked back.</p>
            <div className="video-stats">
              <span><FontAwesomeIcon icon={faCheckCircle} /> 4-week setup</span>
              <span><FontAwesomeIcon icon={faCheckCircle} /> Zero downtime</span>
              <span><FontAwesomeIcon icon={faCheckCircle} /> 100% team adoption</span>
            </div>
          </div>
        </div>
      </section>*/}

      <section className="page split how-it-works">
        <div className="workflow-copy reveal" data-scroll>
          <p className="eyebrow">Simple Process</p>
          <h2>We handle the build while you run the business</h2>
          <p className="lead">
            No long manuals. No IT headaches. We map your workflows, design the right
            system, and train your team while operations keep flowing.
          </p>
        </div>
        <div className="workflow-steps">
          <div className="step reveal scroll-reveal" data-scroll style={{ "--delay": "80ms" }}>
            <span>01</span>
            <div>
              <h3>Discover and audit your flow</h3>
              <p className="muted">Sit with your team and understand the real process, not just what's on paper.</p>
            </div>
          </div>
          <div className="step reveal scroll-reveal" data-scroll style={{ "--delay": "160ms" }}>
            <span>02</span>
            <div>
              <h3>Design and build your system</h3>
              <p className="muted">Build modules, connect Mobile Money, Slack, WhatsApp, and the tools you use.</p>
            </div>
          </div>
          <div className="step reveal scroll-reveal" data-scroll style={{ "--delay": "240ms" }}>
            <span>03</span>
            <div>
              <h3>Launch, train, and support</h3>
              <p className="muted">Phased rollout with training, KPI tracking, and ongoing improvements.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="consulting" className="page consulting-section">
        <div
          className="section-header reveal"
          style={{ "--delay": "0ms" }}
          data-scroll
        >
          <h2>More than software - we are your tech partners</h2>
          <p>
            Every Ghanaian business is unique. Cookie-cutter solutions do not work.
            We build with you, not just for you.
          </p>
        </div>
        <div className="consulting-body">
          <figure
            className="consulting-logo-card reveal scroll-reveal"
            style={{ "--delay": "120ms" }}
            data-scroll
          >
            <svg
              className="faako-logo consulting-logo"
              viewBox="0 0 375 374.999991"
              preserveAspectRatio="xMidYMid meet"
              role="img"
              aria-label="Faako logo blueprint"
            >
              <defs>
                <clipPath id="logo2white-clip-consulting">
                  <path
                    d="M 37.5 1.875 L 339 1.875 L 339 373.125 L 37.5 373.125 Z M 37.5 1.875"
                    clipRule="nonzero"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#logo2white-clip-consulting)">
                <path
                  fill="currentColor"
                  d="M 74.933594 144.785156 C 95.671875 144.785156 112.8125 128.15625 112.8125 107.476562 C 112.8125 86.8125 95.671875 69.71875 74.933594 69.71875 C 54.207031 69.71875 37.515625 86.8125 37.515625 107.476562 C 37.515625 128.15625 54.207031 144.785156 74.933594 144.785156 Z M 301.242188 144.785156 C 321.980469 144.785156 338.65625 128.15625 338.65625 107.476562 C 338.65625 86.8125 321.980469 69.71875 301.242188 69.71875 C 280.515625 69.71875 263.835938 86.8125 263.835938 107.476562 C 263.835938 128.15625 280.515625 144.785156 301.242188 144.785156 Z M 301.242188 126.355469 C 312.066406 126.355469 320.179688 117.824219 320.179688 107.476562 C 320.179688 97.144531 312.066406 88.597656 301.242188 88.597656 C 290.878906 88.597656 282.316406 97.144531 282.316406 107.476562 C 282.316406 117.824219 290.875 126.355469 301.242188 126.355469 Z M 188.09375 76.925781 C 209.28125 76.925781 225.957031 59.835938 225.957031 39.167969 C 225.957031 18.9375 209.28125 1.875 188.09375 1.875 C 167.351562 1.875 150.675781 18.9375 150.675781 39.167969 C 150.675781 59.832031 167.351562 76.925781 188.09375 76.925781 Z M 188.09375 58.046875 C 198.917969 58.046875 207.480469 49.949219 207.480469 39.167969 C 207.480469 28.820312 198.917969 20.292969 188.09375 20.292969 C 177.730469 20.292969 169.167969 28.824219 169.167969 39.167969 C 169.167969 49.949219 177.730469 58.046875 188.09375 58.046875 Z M 56.453125 225.226562 L 56.453125 200.066406 C 56.453125 189.734375 65.015625 181.1875 75.394531 181.1875 C 85.757812 181.1875 93.871094 189.734375 93.871094 200.066406 L 93.871094 231.523438 L 112.8125 231.523438 L 112.8125 200.066406 C 112.8125 179.386719 95.671875 162.753906 75.394531 162.753906 C 54.652344 162.757812 37.515625 179.386719 37.515625 200.066406 L 37.515625 234.21875 C 37.515625 249.957031 50.140625 262.539062 65.925781 262.539062 L 93.871094 262.539062 L 93.871094 335.785156 C 93.871094 356.019531 110.996094 373.097656 131.75 373.097656 C 152.476562 373.097656 169.167969 356.019531 169.167969 335.785156 L 169.167969 274.671875 L 150.675781 274.671875 L 150.675781 335.785156 C 150.675781 345.671875 142.113281 354.21875 131.75 354.21875 C 121.375 354.21875 112.8125 345.671875 112.8125 335.785156 L 112.8125 262.539062 L 207.035156 262.539062 L 207.035156 335.785156 C 207.035156 356.019531 224.15625 373.097656 244.898438 373.097656 C 265.175781 373.097656 282.316406 356.019531 282.316406 335.785156 L 282.316406 274.671875 L 263.375 274.671875 L 263.375 335.785156 C 263.375 345.671875 255.261719 354.21875 244.898438 354.21875 C 234.535156 354.21875 225.957031 345.671875 225.957031 335.785156 L 225.957031 262.539062 L 310.710938 262.539062 C 326.046875 262.539062 338.65625 249.957031 338.65625 234.21875 L 338.65625 200.066406 C 338.65625 179.386719 321.980469 162.753906 301.242188 162.753906 C 280.515625 162.753906 263.375 179.386719 263.375 200.066406 L 263.375 243.65625 L 169.167969 243.65625 L 169.167969 224.332031 L 169.167969 225.226562 L 169.167969 132.207031 C 169.167969 121.859375 177.730469 113.328125 188.09375 113.328125 C 198.917969 113.328125 207.035156 121.859375 207.035156 132.207031 L 207.035156 225.226562 L 207.035156 224.332031 L 207.035156 231.523438 L 225.957031 231.523438 L 225.957031 224.332031 L 225.957031 225.226562 L 225.957031 132.207031 C 225.957031 111.527344 208.835938 94.449219 188.09375 94.449219 C 167.351562 94.449219 150.675781 111.527344 150.675781 132.207031 L 150.675781 225.226562 L 150.675781 224.332031 L 150.675781 243.660156 L 65.925781 243.660156 C 60.519531 243.660156 56.453125 239.160156 56.453125 234.21875 Z M 282.316406 243.660156 L 282.316406 200.066406 C 282.316406 189.734375 290.878906 181.1875 301.242188 181.1875 C 311.617188 181.1875 320.179688 189.734375 320.179688 200.066406 L 320.179688 234.21875 C 320.179688 239.164062 315.667969 243.660156 310.710938 243.660156 Z M 74.933594 126.355469 C 85.757812 126.355469 93.871094 117.824219 93.871094 107.476562 C 93.871094 97.144531 85.757812 88.597656 74.933594 88.597656 C 64.570312 88.597656 56.007812 97.144531 56.007812 107.476562 C 56.007812 117.824219 64.570312 126.355469 74.933594 126.355469 Z M 74.933594 126.355469"
                  fillOpacity="1"
                  fillRule="evenodd"
                />
              </g>
            </svg>
            <figcaption>Blueprints drawn into execution.</figcaption>
          </figure>
          <div className="consulting-grid">
            <article
              className="consulting-card reveal scroll-reveal"
              style={{ "--delay": "200ms" }}
              data-scroll
            >
              <h3>Websites that win customers</h3>
              <p>
                Fast, mobile-first sites with clear calls to action, WhatsApp contact,
                and simple lead capture.
              </p>
            </article>
            <article
              className="consulting-card reveal scroll-reveal"
              style={{ "--delay": "260ms" }}
              data-scroll
            >
              <h3>Dashboards that drive decisions</h3>
              <p>
                Live KPIs for sales, inventory, and service delivery with automatic
                reports your team actually uses.
              </p>
            </article>
            <article
              className="consulting-card reveal scroll-reveal"
              style={{ "--delay": "320ms" }}
              data-scroll
            >
              <h3>ERP and custom systems</h3>
              <p>
                Inventory, billing, approvals, and workflows tied together in one
                system, built around how you work.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="page compliance-section">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">Secure by design</p>
          <h2>Your business data stays protected</h2>
          <p className="lead">
            Access control, audit trails, and backups are built into every project.
          </p>
        </div>
        <div className="compliance-grid">
          <div className="compliance-card">
            <h3>Access control</h3>
            <p>Control exactly which staff can view sales, expenses, or customer data.</p>
          </div>
          <div className="compliance-card">
            <h3>Audit trails</h3>
            <p>See who changed what and when, so mistakes are easier to catch.</p>
          </div>
          <div className="compliance-card">
            <h3>Reliable backups</h3>
            <p>Automatic cloud backups keep you safe even if a device fails.</p>
          </div>
          <div className="compliance-card">
            <h3>Security</h3>
            <p>
              Your data is encrypted and safe. We do not store banking or card details
              in our system.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="page pricing-preview">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">Flexible Pricing</p>
          <h2>Engagements built for small Ghanaian businesses</h2>
          <p className="lead">Choose a launch package now and add support as you grow.</p>
        </div>
        
        <div className="pricing-cards">
          <div className="pricing-card reveal" data-scroll>
            <h3>Website Launch</h3>
            <div className="price-tag">
              <span className="price">From GHS 2,500</span>
              <span className="period">project</span>
            </div>
            <ul className="pricing-features">
              <li><FontAwesomeIcon icon={faCheck} /> Up to 5 pages</li>
              <li><FontAwesomeIcon icon={faCheck} /> Mobile-first design</li>
              <li><FontAwesomeIcon icon={faCheck} /> Lead capture + WhatsApp link</li>
              <li><FontAwesomeIcon icon={faCheck} /> Basic SEO + analytics</li>
              <li><FontAwesomeIcon icon={faCheck} /> Training handover</li>
              <li><FontAwesomeIcon icon={faCheck} /> 2 weeks support</li>
            </ul>
            <p className="ideal-for">
              <strong>Perfect for:</strong> New businesses, service providers, local brands
            </p>
            <PrimaryButton to="/contact">Start a Website Project</PrimaryButton>
          </div>
          
          <div className="pricing-card featured reveal" data-scroll style={{ "--delay": "100ms" }}>
            <span className="badge">Most Popular</span>
            <h3>Dashboards + Automation</h3>
            <div className="price-tag">
              <span className="price">From GHS 6,500</span>
              <span className="period">project + support</span>
            </div>
            <ul className="pricing-features">
              <li><FontAwesomeIcon icon={faCheck} /> KPI dashboard setup</li>
              <li><FontAwesomeIcon icon={faCheck} /> Data integrations (Sheets, POS, CRM)</li>
              <li><FontAwesomeIcon icon={faCheck} /> Role-based access</li>
              <li><FontAwesomeIcon icon={faCheck} /> Automated weekly reports</li>
              <li><FontAwesomeIcon icon={faCheck} /> Team training</li>
              <li><FontAwesomeIcon icon={faCheck} /> 1 month support</li>
              <li><FontAwesomeIcon icon={faCheck} /> Custom metrics</li>
            </ul>
            <p className="ideal-for">
              <strong>Perfect for:</strong> Teams managing stock, sales, or operations
            </p>
            <PrimaryButton to="/contact">Book a Consultation</PrimaryButton>
          </div>
          
          <div className="pricing-card reveal" data-scroll style={{ "--delay": "200ms" }}>
            <h3>ERP + Custom Systems</h3>
            <div className="price-tag">
              <span className="price">Custom</span>
              <span className="period">scope-based</span>
            </div>
            <ul className="pricing-features">
              <li><FontAwesomeIcon icon={faCheck} /> ERP modules for inventory, sales, finance</li>
              <li><FontAwesomeIcon icon={faCheck} /> Workflow approvals and permissions</li>
              <li><FontAwesomeIcon icon={faCheck} /> Integrations for Mobile Money, banks, SMS</li>
              <li><FontAwesomeIcon icon={faCheck} /> Data migration and cleanup</li>
              <li><FontAwesomeIcon icon={faCheck} /> Onsite training</li>
              <li><FontAwesomeIcon icon={faCheck} /> Ongoing support options</li>
              <li><FontAwesomeIcon icon={faCheck} /> SLA guarantees</li>
            </ul>
            <p className="ideal-for">
              <strong>Perfect for:</strong> Multi-location businesses, distributors, growing operations
            </p>
            <PrimaryButton to="/contact">Let's Talk</PrimaryButton>
          </div>
        </div>
        
        <p className="pricing-note reveal" data-scroll style={{ "--delay": "300ms" }}>
          All engagements include discovery, training, and launch support.
          <Link to="/pricing" className="text-link"> See detailed pricing <FontAwesomeIcon icon={faArrowRight} /></Link>
        </p>
      </section>

      <section className="page cta reveal" data-scroll>
        <div className="cta-content">
          <h2>Ready to modernize your operations?</h2>
          <p className="lead">We will map the fastest path to a better website, dashboard, or ERP.</p>
        </div>
        <div className="cta-actions">
          <PrimaryButton to="/contact">Book a Free Consultation</PrimaryButton>
        </div>
      </section>

      <section id="solutions" className="page solutions-section">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">What we deliver</p>
          <h2>SaaS systems and consulting that improve efficiency</h2>
          <p className="lead">
            We do not just provide tools; we build systems your team can actually run.
          </p>
        </div>

        <div className="solutions-container">
          {/* Pillar 1: Operations */}
          <div className="solution-pillar reveal" data-scroll style={{ "--delay": "100ms" }}>
            <div className="pillar-head">
              <div className="pillar-icon">01</div>
              <h3>Digital presence</h3>
            </div>
            <ul className="solution-list">
              <li>
                <strong>Business websites:</strong> Fast, mobile-first sites with clear calls to action.
              </li>
              <li>
                <strong>Lead capture:</strong> Forms, WhatsApp, booking links, and CRM handoff.
              </li>
              <li>
                <strong>Online payments:</strong> Integrations for Mobile Money and card payments.
              </li>
            </ul>
          </div>

          {/* Pillar 2: Financials */}
          <div className="solution-pillar reveal" data-scroll style={{ "--delay": "200ms" }}>
            <div className="pillar-head">
              <div className="pillar-icon">02</div>
              <h3>Operations systems</h3>
            </div>
            <ul className="solution-list">
              <li>
                <strong>ERP modules:</strong> Inventory, sales, billing, and procurement in one system.
              </li>
              <li>
                <strong>Workflow approvals:</strong> Track requests, approvals, and handoffs without chaos.
              </li>
              <li>
                <strong>Multi-location support:</strong> Manage branches, warehouses, or teams in one view.
              </li>
            </ul>
          </div>

          {/* Pillar 3: Intelligence */}
          <div className="solution-pillar reveal" data-scroll style={{ "--delay": "300ms" }}>
            <div className="pillar-head">
              <div className="pillar-icon">03</div>
              <h3>Data and automation</h3>
            </div>
            <ul className="solution-list">
              <li>
                <strong>Dashboards:</strong> KPIs tailored to your specific business goals.
              </li>
              <li>
                <strong>Automation:</strong> Scheduled reports, alerts, and integrations across tools.
              </li>
              <li>
                <strong>Role-based access:</strong> Secure, granular permissions for every team.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="modules" className="page section modules-section">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">Service Menu</p>
          <h2>Build your stack, one service at a time</h2>
          <p className="lead">
            Start with a website or dashboard, then add ERP modules as your team grows.
          </p>
        </div>

        <div className={`install-module-grid ${showAllModules ? "is-expanded" : "is-collapsed"}`}>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "60ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faGlobe} /></div>
            <h3>Website</h3>
            <p>Public storefront, service pages, and lead capture.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "120ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faBoxesStacked} /></div>
            <h3>Inventory</h3>
            <p>Serialized items, warehouses, and stock movement tracking.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "180ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faHandshake} /></div>
            <h3>CRM</h3>
            <p>Leads, client timelines, and sales follow-ups.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "240ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faReceipt} /></div>
            <h3>Orders</h3>
            <p>Quotes, order status, and fulfillment progress.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "300ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faCalendarDays} /></div>
            <h3>Bookings</h3>
            <p>Reservations, event timelines, and resource holds.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "360ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faCalendarCheck} /></div>
            <h3>Scheduler</h3>
            <p>Staff calendars, shifts, and job allocations.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "420ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faChartPie} /></div>
            <h3>Accounting</h3>
            <p>General ledger, reconciliations, and closing.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "480ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faFileInvoiceDollar} /></div>
            <h3>Invoicing</h3>
            <p>Billing schedules, deposits, and payment tracking.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "540ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faAddressBook} /></div>
            <h3>Directory</h3>
            <p>Team contacts, customers, and vendor profiles.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "600ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faMoneyBillWave} /></div>
            <h3>Expenses</h3>
            <p>Operating costs, receipts, and approvals.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "660ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faUserTie} /></div>
            <h3>HR</h3>
            <p>Hiring, training, and team performance records.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "720ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faTruck} /></div>
            <h3>Vendors</h3>
            <p>Supplier catalog, contracts, and lead times.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "780ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faWrench} /></div>
            <h3>Maintenance</h3>
            <p>Asset upkeep schedules and service history.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "840ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faRoute} /></div>
            <h3>Delivery</h3>
            <p>Routes, drivers, and drop-off confirmations.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "900ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faFolderOpen} /></div>
            <h3>Documents</h3>
            <p>Contracts, files, and version control.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "960ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faUserShield} /></div>
            <h3>Users</h3>
            <p>Roles, permissions, and access control.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "1020ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faClock} /></div>
            <h3>Timesheets</h3>
            <p>Hours logged, payroll exports, and approvals.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "1080ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faBullhorn} /></div>
            <h3>Marketing</h3>
            <p>Campaign tracking and customer outreach.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "1260ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faCartShopping} /></div>
            <h3>Procurement</h3>
            <p>Purchase requests, approvals, and vendor quotes.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "1320ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faBoxArchive} /></div>
            <h3>Asset Management</h3>
            <p>Equipment lifecycle tracking and depreciation.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "1380ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faPlug} /></div>
            <h3>Integrations</h3>
            <p>Connect banking, email, SMS, and accounting tools.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "1440ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faHeadset} /></div>
            <h3>Support Desk</h3>
            <p>Tickets, SLAs, and customer service history.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "1500ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faShield} /></div>
            <h3>Compliance</h3>
            <p>Audits, safety checks, and policy attestations.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "1560ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faChartLine} /></div>
            <h3>Analytics</h3>
            <p>Advanced reporting, forecasting, and BI exports.</p>
          </article>
        </div>
        <div className="install-module-actions">
          <button
            type="button"
            className="button button-ghost install-module-more"
            onClick={() => setShowAllModules((prev) => !prev)}
            aria-expanded={showAllModules}
          >
            {showAllModules ? "Show fewer apps" : "See more apps"}
          </button>
        </div>
      </section>

      <section className="page cta reveal" data-scroll>
        <div className="cta-content">
          <h2>Ready for a tech audit?</h2>
          <p className="lead">
            We map your current stack, surface quick wins, and build a phased
            rollout plan tailored to your operations.
          </p>
        </div>
        <div className="cta-actions">
          <PrimaryButton to="/contact">Book a Consultation</PrimaryButton>
          <Link className="button button-ghost" to="/#case-studies">
            View case studies
          </Link>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="page comparison-section">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">Why Faako</p>
          <h2>Stop stitching together tools that do not talk</h2>
          <p className="lead">See how we compare to the old way of doing things</p>
        </div>
        
        <div className="comparison-table-container reveal" data-scroll style={{ "--delay": "100ms" }}>
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="feature-col">What You Need</th>
                <th className="competitor-col">DIY + spreadsheets</th>
                <th className="competitor-col">Off-the-shelf tools</th>
                <th className="highlight-col">Faako build + support</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="feature-name">Website and online presence</td>
                <td className="comparison-no">
                  <div className="comparison-cell">
                    <FontAwesomeIcon icon={faTimes} className="icon-no" />
                    <span>Basic site, no strategy</span>
                  </div>
                </td>
                <td className="comparison-warning">
                  <div className="comparison-cell">
                    <FontAwesomeIcon icon={faTriangleExclamation}/>
                    <span>Template only, limited customization</span>
                  </div>
                </td>
                <td className="comparison-yes highlight">
                  <div className="comparison-cell">
                    <FontAwesomeIcon icon={faCheck} className="icon-yes" />
                    <span>Custom site built for your customers</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="feature-name">Dashboards and reporting</td>
                <td className="comparison-no">
                  <div className="comparison-cell">
                    <FontAwesomeIcon icon={faTimes} className="icon-no" />
                    <span>Manual weekly reports</span>
                  </div>
                </td>
                <td className="comparison-no">
                  <div className="comparison-cell">
                    <FontAwesomeIcon icon={faTimes} className="icon-no" />
                    <span>Data stuck in one tool</span>
                  </div>
                </td>
                <td className="comparison-yes highlight">
                  <div className="comparison-cell">
                    <FontAwesomeIcon icon={faCheck} className="icon-yes" />
                    <span>Live dashboards across your stack</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="feature-name">Process automation</td>
                <td className="comparison-no">
                  <div className="comparison-cell">
                    <FontAwesomeIcon icon={faTimes} className="icon-no" />
                    <span>Manual follow-ups and reminders</span>
                  </div>
                </td>
                <td className="comparison-no">
                  <div className="comparison-cell">
                    <FontAwesomeIcon icon={faTimes} className="icon-no" />
                    <span>Partial automation, extra tools</span>
                  </div>
                </td>
                <td className="comparison-yes highlight">
                  <div className="comparison-cell">
                    <FontAwesomeIcon icon={faCheck} className="icon-yes" />
                    <span>Connected workflows across teams</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="feature-name">Local support</td>
                <td className="comparison-no">
                  <div className="comparison-cell">
                    <FontAwesomeIcon icon={faTimes} className="icon-no" />
                    <span>You are the support</span>
                  </div>
                </td>
                <td className="comparison-warning">
                  <div className="comparison-cell">
                    <FontAwesomeIcon icon={faTriangleExclamation}/>
                    <span>Overseas support only</span>
                  </div>
                </td>
                <td className="comparison-yes highlight">
                  <div className="comparison-cell">
                    <FontAwesomeIcon icon={faCheck} className="icon-yes" />
                    <span>Ghana-based team, same timezone</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="feature-name">Training and adoption</td>
                <td className="comparison-no">
                  <div className="comparison-cell">
                    <FontAwesomeIcon icon={faTimes} className="icon-no" />
                    <span>No training</span>
                  </div>
                </td>
                <td className="comparison-warning">
                  <div className="comparison-cell">
                    <FontAwesomeIcon icon={faTriangleExclamation}/>
                    <span>Extra cost, limited availability</span>
                  </div>
                </td>
                <td className="comparison-yes highlight">
                  <div className="comparison-cell">
                    <FontAwesomeIcon icon={faCheck} className="icon-yes" />
                    <span>Included training and handover</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="feature-name">Setup & training</td>
                <td className="comparison-no">
                  <div className="comparison-cell">
                    <FontAwesomeIcon icon={faTimes} className="icon-no" />
                    <span>Figure it out yourself</span>
                  </div>
                </td>
                <td className="comparison-warning">
                  <div className="comparison-cell">
                    <FontAwesomeIcon icon={faTriangleExclamation}/>
                    <span>Extra $$$, limited availability</span>
                  </div>
                </td>
                <td className="comparison-yes highlight">
                  <div className="comparison-cell">
                    <FontAwesomeIcon icon={faCheck} className="icon-yes" />
                    <span>Included, we visit your office</span>
                  </div>
                </td>
              </tr>
              <tr className="price-row">
                <td className="feature-name"><strong>Typical cost</strong></td>
                <td className="comparison-price">
                  <span className="price">Hidden time cost</span>
                  <small>Delays and rework</small>
                </td>
                <td className="comparison-price">
                  <span className="price">Monthly per tool</span>
                  <small>Stacks add up fast</small>
                </td>
                <td className="comparison-price highlight">
                  <span className="price">Project + support plan</span>
                  <small>Clear scope and handover</small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="comparison-cta reveal" data-scroll style={{ "--delay": "200ms" }}>
          <PrimaryButton to="/contact">See Faako in Action</PrimaryButton>
        </div>
      </section>

      {/* --- Expertise Section --- */}
      <section id="expertise" className="page expertise-section page--panel">
        <div className="expertise-content reveal" data-scroll>
          <p className="eyebrow">Why Choose Faako</p>
          <h2>We do not just sell software,<br/>we build working systems</h2>
          <p className="lead">
            Software only helps when it fits how you work. We combine consulting, build,
            and training so teams adopt fast.
          </p>

          <div className="expertise-items">
            <div className="exp-item">
              <h4>Clean up messy data</h4>
              <p>We organize old spreadsheets, invoices, and customer lists so you start with clean data.</p>
            </div>
            <div className="exp-item">
              <h4>Connect the tools you use</h4>
              <p>Mobile Money, POS, WhatsApp Business, Google Sheets - we integrate what you already rely on.</p>
            </div>
            <div className="exp-item">
              <h4>Train your team</h4>
              <p>We train your staff and stay close until the system becomes habit.</p>
            </div>
          </div>
        </div>
        <div className="expertise-visual reveal" data-scroll style={{ "--delay": "200ms" }}>
          <div className="tech-stack-card">
              {/* You can put a simplified architecture diagram or tech logos here */}
              <span className="badge">Our Process</span>
              <div className="stack-line"><span>Understand Your Flow</span></div>
              <div className="stack-line"><span>Design Your System</span></div>
              <div className="stack-line"><span>Launch & Train</span></div>
              <div className="stack-line"><span>Grow Together</span></div>
          </div>
        </div>
      </section>

      {/* Mobile Showcase Section */}
      <section className="page mobile-showcase">
        <div className="split-layout">
          <div className="mobile-copy reveal" data-scroll>
            <p className="eyebrow">Works Everywhere</p>
            <h2>Your systems run on phone, tablet, and desktop</h2>
            <p className="lead">
              Most teams work on mobile. We build every website, dashboard, and ERP module
              to work on any screen.
            </p>
            <ul className="checklist">
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                <span><strong>Approve requests from the field</strong> - no need to be at your desk</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                <span><strong>Check sales and stock</strong> - real-time visibility</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                <span><strong>Send invoices from site visits</strong> - close deals on the spot</span>
              </li>
            </ul>
            <div className="mobile-badges">
              <div className="mobile-badge">
                <span className="badge-icon"><FontAwesomeIcon icon={faMobile} /></span>
                <span>iOS & Android Apps</span>
              </div>
              <div className="mobile-badge">
                <span className="badge-icon"><FontAwesomeIcon icon={faGlobe} /></span>
                <span>Works in Any Browser</span>
              </div>
              <div className="mobile-badge">
                <span className="badge-icon"><FontAwesomeIcon icon={faBolt} /></span>
                <span>Lightning Fast</span>
              </div>
            </div>
          </div>
          <div className="mobile-preview reveal" data-scroll style={{ "--delay": "150ms" }}>
            <div className="mobile-mockup">
              <div className="mobile-mockup-scroll">
                <img src="/imgs/demo/demo4.png" alt="Faako mobile dashboard" loading="lazy" decoding="async" />
              </div>
              <div className="mobile-feature-callout">
                <span><FontAwesomeIcon icon={faHandPointer} /> Scroll to navigate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials
        className="page section testimonials"
        headerScroll
        cardScroll
        eyebrow="Real results from Ghanaian SMEs"
        title="What changes when your systems work"
        lead="No more 'let me check and get back to you.' Just clarity and speed."
        items={[
          {
            quote:
              "Our website finally brings in serious inquiries, and the dashboard shows every order in one place. We can actually plan ahead now.",
            author: "Operations lead, event rentals (Accra)",
          },
          {
            quote:
              "The dashboards are too clear. We know what is moving, what is stuck, and where to jump in. Our Monday meetings now take 20 minutes.",
            author: "COO, Logistics Company (Tema)",
            delay: "120ms",
          },
          {
            quote:
              "Setup was fast, and the team did not just hand us software and disappear. They trained everyone and we launched smoothly.",
            author: "Founder, retail chain",
            delay: "220ms",
          },
        ]}
      />

      {/* --- Case Studies Section --- */}
      <section id="case-studies" className="page case-studies">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">See It Working</p>
          <h2>Websites, dashboards, and ERP in action</h2>
        </div>

        <div className="case-grid">
          <article className="case-card reveal" data-scroll>
            <div className="case-image">
              <img src="/imgs/case-studies/erp-case.png" alt="ERP system dashboard" loading="lazy" decoding="async" />
            </div>
            <div className="case-info">
              <span className="case-tag">ERP System</span>
              <h3>From WhatsApp confusion to one ERP dashboard</h3>
              <p>How a multi-location events company stopped losing equipment and tracked every cedi.</p>
              <Link to="/contact" className="text-link">
                Read Their Story <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </article>

          <article className="case-card reveal" data-scroll style={{ "--delay": "150ms" }}>
            <div className="case-image">
              <img src="/imgs/case-studies/dashboard-case.png" alt="Developer dashboard" loading="lazy" decoding="async" />
            </div>
            <div className="case-info">
              <span className="case-tag">Operations Dashboard</span>
              <h3>Leadership finally saw the live numbers</h3>
              <p>Real-time visibility into what is shipped, what is stuck, and what needs attention.</p>
              <Link to="/contact" className="text-link">
                See How They Did It <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <FaqSection
        className="page faq-section"
        headerScroll
        eyebrow="Your Questions Answered"
        title="Let's address the big questions"
        lead="Here is the real talk on timing, cost, and what happens after launch."
        items={[
          {
            question: "How long does a project take?",
            answer:
              "Websites are usually 2-4 weeks. Dashboards take 4-6 weeks. ERP systems can take 6-10+ weeks depending on scope and data readiness.",
            open: true,
          },
          {
            question: "Can you work with our existing tools and data?",
            answer:
              "Yes. We integrate with the tools you already use and clean or migrate spreadsheets, POS exports, and customer lists.",
          },
          {
            question: "Can we start small and expand later?",
            answer:
              "Yes. Start with a website or dashboard, then add ERP modules as your team grows.",
          },
          {
            question: "What happens after launch?",
            answer:
              "We provide training, documentation, and support plans. You can retain us for ongoing improvements.",
          },
        ]}
      />

      <section className="page cta cta-compact reveal" data-scroll>
        <div className="section-bg" aria-hidden="true">
          {/* Add background SVGs here */}
        </div>
        <div className="section-media">
          {/* Add image elements here */}
        </div>
        <div className="cta-content">
          <h2>Let's map the right system for your business</h2>
          <p className="lead">
            Get a personalized walkthrough based on your industry, team structure,
            and actual pain points. No sales pitch, just real solutions.
          </p>
        </div>
        <div className="cta-actions">
          <PrimaryButton to="/contact">Book a Free Consultation</PrimaryButton>
          <Link className="button button-ghost" to="/case-studies">
            View Case Studies
          </Link>
        </div>
      </section>
      <WhatsApp />
    </>
  );
}
