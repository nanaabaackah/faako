/* eslint-disable no-unused-vars */
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
import React from "react";
import WhatsApp from "../components/WhatsApp.jsx";
import AnimatedLogoSVG from "../components/AnimatedLogoSVG.jsx";

export default function About() {
  return (
    <section className="page about page-stack">

      {/* ── Hero ── */}
      <section className="about-hero split">
        <div className="about-hero-copy reveal" style={{ "--delay": "0ms" }}>
          <p className="eyebrow">About Faako</p>
          <h1>Ghanaian business deserves better. So we built it.</h1>
          <p className="lead">
            Built by people who know the market and
            exactly what it takes to scale a business with the right systems.
          </p>
          <div className="cta-actions">
            <PrimaryButton to="/contact">Let's Talk</PrimaryButton>
            <Link className="button button-ghost" to="/case-studies">
              See the Proof
            </Link>
          </div>
        </div>
        <figure className="about-hero-figure reveal" style={{ "--delay": "120ms" }}>
          <AnimatedLogoSVG className="about-hero-art" />
        </figure>
      </section>

      {/* ── Origin Story ── */}
      <section className="section origin-story section-seam-top section-surface-brown section-seam-bottom">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">How It All Started</p>
          <h2>Born out of frustration. Fuelled by ambition.</h2>
        </div>

        <div className="split reveal" data-scroll style={{ "--delay": "100ms" }}>
          <div className="story-copy">
            <p className="story-lead">
              Faako started inside a kids party rental business in Ghana. The
              pain was simple: stock never matched, and the tools made it worse.
            </p>
            <div className="story-grid">
              <article className="story-card">
                <h3>Manual stock counts</h3>
                <p>
                  Items were tracked by hand and counted every month (sometimes
                  once a year), so the numbers were always behind reality.
                </p>
              </article>
              <article className="story-card">
                <h3>Spreadsheet bottleneck</h3>
                <p>
                  Inventory lived in a clunky Excel sheet that was hard for team
                  members with little to no computer literacy.
                </p>
              </article>
              <article className="story-card">
                <h3>No-fit enterprise tools</h3>
                <p>
                  The big platforms were too expensive, too complex, and built
                  for elsewhere — not for how Ghanaian businesses actually run.
                </p>
              </article>
            </div>
          </div>
          <div className="story-numbers">
            <div className="ribbon">
              <div className="ribbon-tags">
                <span>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Born in Ghana
                </span>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> Since 2026
                </span>
                <span>
                  <FontAwesomeIcon icon={faUsers} /> Serving local businesses
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="section mission">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">What We're Really Here For</p>
          <h2>One dashboard. One truth. Zero confusion.</h2>
          <p className="lead">
            When your whole team sees the same numbers at the same time — no more
            "let me check and get back to you," no more guessing where the cedis
            went. That's the power move.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-card reveal" data-scroll>
            <div className="feature-card-icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <h3>Ghana first. Always.</h3>
            <p className="muted">
              Mobile Money? Built in. WhatsApp? Connected. Local compliance?
              Handled. We design for how business actually runs here — not some
              textbook version of it.
            </p>
          </article>
          <article className="feature-card reveal" data-scroll style={{ "--delay": "120ms" }}>
            <div className="feature-card-icon">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <h3>Made for the whole team</h3>
            <p className="muted">
              The finance person, the warehouse guy, the driver checking stock on
              the road — everyone gets something that just works. No PhD required.
              No two-week onboarding. Day one, they're in.
            </p>
          </article>
          <article className="feature-card reveal" data-scroll style={{ "--delay": "240ms" }}>
            <div className="feature-card-icon">
              <FontAwesomeIcon icon={faHandshake} />
            </div>
            <h3>We stick around. For real.</h3>
            <p className="muted">
              Most tech companies? Gone the minute you sign. Not us. We're the ones
              picking up the WhatsApp message at 7am when something needs sorting.
              Monthly check-ins, real training, real support.
            </p>
          </article>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="section how-we-work section-seam-top section-surface-brown section-seam-bottom">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">How We Roll</p>
          <h2>Not just software. We fix the whole operation.</h2>
          <p className="lead">
            We don't hand you a manual and wish you luck. We get into the trenches
            with you — learn YOUR flow, break down what's not working, and build
            the fix together.
          </p>
        </div>

        <div className="workflow-steps reveal" data-scroll style={{ "--delay": "80ms" }}>
          <div className="step">
            <span>01</span>
            <div>
              <h3>We Come to You</h3>
              <p className="muted">
                Not a Zoom call. We show up at your office, sit with your team —
                the boss, the accountant, the driver, everyone. We learn how the
                work actually flows before we touch a single line of code.
              </p>
            </div>
          </div>
          <div className="step reveal" data-scroll style={{ "--delay": "140ms" }}>
            <span>02</span>
            <div>
              <h3>Build Around YOU</h3>
              <p className="muted">
                Your dispatch runs on WhatsApp? Cool, we connect WhatsApp. Your
                accountant lives in Excel? We pull that data in. Mobile Money
                payments coming in all day? Hooked up and tracked. We bend the
                system to fit you — not the other way around.
              </p>
            </div>
          </div>
          <div className="step reveal" data-scroll style={{ "--delay": "200ms" }}>
            <span>03</span>
            <div>
              <h3>Train Together, Live</h3>
              <p className="muted">
                No boring PowerPoints. We run real transactions — the actual stuff
                your team does every day — right there in the room. By the time we
                leave, everyone's comfortable. Too clear.
              </p>
            </div>
          </div>
          <div className="step reveal" data-scroll style={{ "--delay": "260ms" }}>
            <span>04</span>
            <div>
              <h3>Stay in Your Corner</h3>
              <p className="muted">
                Monthly calls to keep things sharp. A direct WhatsApp line to our
                team. Quarterly reviews to make sure you're getting the most out of
                every feature as your business grows. We're not going anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Value ── */}
      <section className="section values">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">What Drives Us</p>
          <h2>The stuff that keeps us up at night — in a good way.</h2>
        </div>

        <div className="feature-grid">
          <article className="feature-card reveal" data-scroll>
            <div className="feature-card-icon">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <h3>No More Guessing Games</h3>
            <p className="muted">
              Same numbers. Same timelines. Same clarity — for everyone on the team.
              No more "who said what?" No more chasing receipts. Just clean,
              honest data everyone can trust.
            </p>
          </article>
          <article className="feature-card reveal" data-scroll style={{ "--delay": "120ms" }}>
            <div className="feature-card-icon">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <h3>Built to Survive the Chaos</h3>
            <p className="muted">
              Staff change on Monday. New supplier on Tuesday. Peak season hits
              Wednesday. Business moves fast — and Faako moves with it.
              We build systems that don't break when things get hectic.
            </p>
          </article>
          <article className="feature-card reveal" data-scroll style={{ "--delay": "240ms" }}>
            <div className="feature-card-icon">
              <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <h3>Clarity Is Everything</h3>
            <p className="muted">
              When everyone knows what's happening — and why — mistakes drop,
              profits climb, and your Monday morning meeting actually finishes in
              15 minutes. That's the dream. We make it real.
            </p>
          </article>
        </div>
      </section>

      {/* ── Impact Numbers ── 
      <section className="section">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">The Numbers Don't Lie</p>
          <h2>Look what's happening on the ground.</h2>
        </div>

        <div className="visual-card-row reveal" data-scroll style={{ "--delay": "80ms" }}>
          <div className="visual-card card-primary">
            <span className="pill">Transactions</span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", color: "var(--accent)" }}>₵45M+</h3>
            <p className="muted">Every single month. Real money, moving through real businesses, tracked end to end.</p>
          </div>
          <div className="visual-card card-primary">
            <span className="pill">Orders</span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", color: "var(--accent)" }}>12K+</h3>
            <p className="muted">Per day. From the small shop in Makola to the big distributor running five locations.</p>
          </div>
          <div className="visual-card card-primary">
            <span className="pill">Time Saved</span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", color: "var(--accent)" }}>60%</h3>
            <p className="muted">Less time on spreadsheets. More time actually running the business. That's the shift.</p>
          </div>
          <div className="visual-card card-primary">
            <span className="pill">Across Ghana</span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", color: "var(--accent)" }}>50+</h3>
            <p className="muted">Locations. Accra, Kumasi, Tema, Takoradi — and we're still spreading.</p>
          </div>
        </div>
      </section>*/}

      {/* ── CTA ── */}
      <section className="cta reveal" data-scroll>
        <div className="section-bg" aria-hidden="true" />
        <div className="section-media" />
        <div className="cta-content">
          <h2>Your business is too good for spreadsheet madness.</h2>
          <p className="lead">
            Let's have a real conversation. No pitch, no pressure — just us showing
            you exactly what Faako would look like running YOUR operations. Book 20
            minutes. That's all it takes.
          </p>
        </div>
        <div className="cta-actions">
          <PrimaryButton to="/contact">Book a Free Consultation</PrimaryButton>
          <Link className="button button-ghost" to="/">
            Back to Home <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>
      
      <WhatsApp />

      {/* ── Trusted By ── 
      <TrustedBy
        className="page trust-strip"
        eyebrow="The Family"
        title="These businesses already made the switch."
        lead="From small teams in Accra to enterprise operations in Kumasi — Faako powers their daily work."
        logos={[
          { name: "Reebs", src: "/imgs/company-logos/reebs_logo.svg" },
        ]}
      />*/}
    </section>
  );
}
