import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheckCircle,
  faUsers,
  faLightbulb,
  faHandshake,
  faChartLine,
  faMapMarkerAlt,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../components/PrimaryButton.jsx";
import TrustedBy from "../components/TrustedBy.jsx";

export default function About() {
  return (
    <section className="page about page-stack">

      {/* ── Hero ── */}
      <section className="about-hero split">
        <div className="about-hero reveal" style={{ "--delay": "0ms" }}>
          <p className="eyebrow">About Faako</p>
          <h1>Built in Ghana. Designed for how Africa actually does business.</h1>
          <p className="lead">
            Faako started from a simple frustration: why should Ghanaian businesses
            be forced to use tools built for Silicon Valley? We built an ERP that
            speaks your language, understands your market, and scales with your hustle.
          </p>
          <div className="cta-actions">
            <PrimaryButton to="/contact">Talk to Us</PrimaryButton>
            <Link className="button button-ghost" to="/case-studies">
              See Real Results
            </Link>
          </div>
        </div>
        <figure className="stats-figure about-hero-figure reveal" style={{ "--delay": "120ms" }}>
          <img
            className="about-hero-art"
            src="/assets/logos/logo-compressed.svg"
            alt="Faako Logo"
          />
        </figure>
      </section>

      {/* ── Origin Story ── */}
      <section className="section">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">Our Story</p>
          <h2>Why Faako exists in the first place.</h2>
        </div>

        <div className="split reveal" data-scroll style={{ "--delay": "100ms" }}>
          <div className="story-copy">
            <p>
              It started with a simple observation. A logistics company in Tema was
              running their entire operation on three WhatsApp groups, two Excel
              sheets, and a notebook. They weren't lazy — they were using the best
              tools available to them.
            </p>
            <p style={{ marginTop: "1rem" }}>
              The enterprise software on the market was either too expensive, too
              complex, or built for markets that look nothing like ours. No Mobile
              Money support. No understanding of how Ghanaian supply chains actually
              move. No local team to help when things got stuck.
            </p>
            <p style={{ marginTop: "1rem" }}>
              So we decided to build what should have already existed: an ERP that
              treats African businesses as first-class citizens — not an afterthought.
            </p>
          </div>
          <div className="story-numbers">
            <div className="ribbon">
              <div className="ribbon-tags">
                <span>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Ghana-based
                </span>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> Founded 2022
                </span>
                <span>
                  <FontAwesomeIcon icon={faUsers} /> 100+ clients
                </span>
                <span>
                  <FontAwesomeIcon icon={faChartLine} /> ₵45M+ processed
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="section">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">What We're Here To Do</p>
          <h2>One source of truth for every African business.</h2>
          <p className="lead">
            No more "let me check and get back to you." No more guessing where the
            money went. Just clarity — for every person on your team.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-card reveal" data-scroll>
            <div className="feature-card-icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <h3>Local-first, always</h3>
            <p className="muted">
              We design for West African realities — Mobile Money, GRA compliance,
              cedis, and the way business actually gets done here.
            </p>
          </article>
          <article className="feature-card reveal" data-scroll style={{ "--delay": "120ms" }}>
            <div className="feature-card-icon">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <h3>Built for real operators</h3>
            <p className="muted">
              From the finance lead to the guy running the warehouse — everyone gets
              a workflow that makes sense on day one, not after weeks of training.
            </p>
          </article>
          <article className="feature-card reveal" data-scroll style={{ "--delay": "240ms" }}>
            <div className="feature-card-icon">
              <FontAwesomeIcon icon={faHandshake} />
            </div>
            <h3>We don't disappear after launch</h3>
            <p className="muted">
              Most software companies vanish once you've paid. We stay. Monthly
              check-ins, ongoing training, and a team that actually picks up the phone.
            </p>
          </article>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="section">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">How We Actually Work</p>
          <h2>We don't just sell software. We fix operations.</h2>
          <p className="lead">
            Every engagement starts with us understanding YOUR business — not
            handing you a manual and hoping for the best.
          </p>
        </div>

        <div className="workflow-steps reveal" data-scroll style={{ "--delay": "80ms" }}>
          <div className="step">
            <span>01</span>
            <div>
              <h3>Listen First</h3>
              <p className="muted">
                We sit with your team — not just the boss, everyone. We learn how
                the work actually flows, where it breaks, and what's costing you
                money quietly.
              </p>
            </div>
          </div>
          <div className="step reveal" data-scroll style={{ "--delay": "140ms" }}>
            <span>02</span>
            <div>
              <h3>Build to Fit</h3>
              <p className="muted">
                We configure Faako around your existing processes — not the other
                way around. WhatsApp integrations, Mobile Money hooks, custom
                approval flows. Whatever you need.
              </p>
            </div>
          </div>
          <div className="step reveal" data-scroll style={{ "--delay": "200ms" }}>
            <span>03</span>
            <div>
              <h3>Train Together</h3>
              <p className="muted">
                Hands-on sessions at your office. We don't just show slides — we
                run through real transactions your team will do on day one.
              </p>
            </div>
          </div>
          <div className="step reveal" data-scroll style={{ "--delay": "260ms" }}>
            <span>04</span>
            <div>
              <h3>Stay Close</h3>
              <p className="muted">
                Monthly strategy calls, a WhatsApp line to our team, and quarterly
                reviews to keep things optimized as your business grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Value ── */}
      <section className="section">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">What Drives Us</p>
          <h2>The principles behind every decision we make.</h2>
        </div>

        <div className="feature-grid">
          <article className="feature-card reveal" data-scroll>
            <div className="feature-card-icon">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <h3>Accountability</h3>
            <p className="muted">
              Everyone on your team sees the same numbers, the same timelines, the
              same ownership. No more "who said what" conversations.
            </p>
          </article>
          <article className="feature-card reveal" data-scroll style={{ "--delay": "120ms" }}>
            <div className="feature-card-icon">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <h3>Resilience</h3>
            <p className="muted">
              We build systems that keep running through growth spurts, staff changes,
              and the unexpected. Because in this market, things change fast.
            </p>
          </article>
          <article className="feature-card reveal" data-scroll style={{ "--delay": "240ms" }}>
            <div className="feature-card-icon">
              <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <h3>Clarity</h3>
            <p className="muted">
              Clear workflows replace the guesswork. When everyone knows what's
              happening and why, mistakes drop and profits go up.
            </p>
          </article>
        </div>
      </section>

      {/* ── Impact Numbers ── */}
      <section className="section">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">The Impact So Far</p>
          <h2>Numbers don't lie. Neither do our clients.</h2>
        </div>

        <div className="visual-card-row reveal" data-scroll style={{ "--delay": "80ms" }}>
          <div className="visual-card card-primary">
            <span className="pill">Transactions</span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", color: "var(--accent)" }}>₵45M+</h3>
            <p className="muted">Processed through Faako every single month across all client businesses.</p>
          </div>
          <div className="visual-card card-primary">
            <span className="pill">Orders</span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", color: "var(--accent)" }}>12K+</h3>
            <p className="muted">Managed daily — from small shops in Accra to multi-location distributors.</p>
          </div>
          <div className="visual-card card-primary">
            <span className="pill">Time Saved</span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", color: "var(--accent)" }}>60%</h3>
            <p className="muted">Average reduction in hours spent on manual data entry and reconciliation.</p>
          </div>
          <div className="visual-card card-primary">
            <span className="pill">Locations</span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", color: "var(--accent)" }}>50+</h3>
            <p className="muted">Across Ghana — Accra, Kumasi, Tema, Takoradi, and growing.</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta reveal" data-scroll>
        <div className="section-bg" aria-hidden="true" />
        <div className="section-media" />
        <div className="cta-content">
          <h2>Ready to see what Faako can do for your business?</h2>
          <p className="lead">
            No pressure, no pitch deck. Just a real conversation about your
            operations and how we'd fix them.
          </p>
        </div>
        <div className="cta-actions">
          <PrimaryButton to="/contact">Book a Free Chat</PrimaryButton>
          <Link className="button button-ghost" to="/">
            Back to Home <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>

      {/* ── Trusted By ── */}
      <TrustedBy
        className="page trust-strip"
        eyebrow="Our Partners"
        title="Trusted by operators across Ghana"
        lead="From growth-stage teams to large enterprises, Faako keeps daily execution running smoothly."
        logos={[
          "Reebs",
          "Atlas Rentals",
          "Northbridge",
          "Summit Events",
          "Clearline Logistics",
          "VentureWorks",
        ]}
      />
    </section>
  );
}