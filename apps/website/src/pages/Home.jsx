/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animate, createTimeline, stagger } from "animejs";
import {
  faGlobe,
  faArrowRight,
  faHandshake,
  faHeadset,
  faPhone,
  faShield,
  faCheck,
  faBoxesStacked,
  faChartLine,
  faReceipt,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../components/PrimaryButton.jsx";
import WhatsApp from "../components/WhatsApp.jsx";

const processSteps = [
  {
    id: "01",
    title: "Free Call",
    description: "Tell us your goals and bottlenecks. No pressure.",
  },
  {
    id: "02",
    title: "We Visit",
    description: "We visit your business and map your daily workflow.",
  },
  {
    id: "03",
    title: "Blueprint",
    description: "You get a practical plan with clear scope and pricing.",
  },
  {
    id: "04",
    title: "Build",
    description: "We build, test, and share demos before launch.",
  },
  {
    id: "05",
    title: "Train",
    description: "Your team gets hands-on training until confident.",
  },
  {
    id: "06",
    title: "Launch",
    description: "Go live with local support from our Ghana team.",
  },
];

const toolsTabContent = [
  {
    id: "portals",
    tabLabel: "Get Found & Get Paid",
    stepId: "01",
    icon: faGlobe,   // already imported — represents online presence / discoverability
    title: "Get Found & Get Paid",
    paragraph:
      "Launch a clean website that brings in leads, takes payments, and sends enquiries straight to WhatsApp.",
    image: "/imgs/elements/woman_smiling.png",
    alt: "Business website and booking flow",
  },
  {
    id: "systems",
    tabLabel: "Track Everything",
    stepId: "02",
    icon: faBoxesStacked,  // already imported — represents stock, inventory, operational items
    title: "Track Everything",
    paragraph:
      "See stock, cashflow, and order status in real time without juggling spreadsheets.",
    image: "/imgs/case-studies/dashboard-case.png",
    alt: "Inventory tracking dashboard",
  },
  {
    id: "data",
    tabLabel: "See The Numbers",
    stepId: "03",
    icon: faChartLine,  // already imported — represents analytics, reports, performance
    title: "See The Numbers",
    paragraph:
      "Get simple daily, weekly, and monthly reports so you can act faster with confidence.",
    image: "/imgs/case-studies/erp-case.png",
    alt: "Business reports dashboard",
  },
];

const renderHeroChars = (text, extraClass = "") =>
  Array.from(text).map((char, index) => (
    <span
      key={`${extraClass || "hero-char"}-${index}`}
      className={`hero-char${extraClass ? ` ${extraClass}` : ""}`}
      aria-hidden="true"
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

export default function Home() {
  const heroContentRef = useRef(null);

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

  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const trustCards = Array.from(document.querySelectorAll(".trust-card"));
    const pricingRows = Array.from(document.querySelectorAll(".pricing-features li"));
    const trustIcons = trustCards
      .map((card) => card.querySelector(".trust-icon svg"))
      .filter(Boolean);
    const pricingIcons = pricingRows
      .map((row) => row.querySelector("svg"))
      .filter(Boolean);
    const allIcons = [...trustIcons, ...pricingIcons];

    if (!allIcons.length) {
      return undefined;
    }

    allIcons.forEach((icon) => {
      icon.style.transformOrigin = "50% 50%";
      icon.style.willChange = "transform, opacity";
    });

    const introTimeline = createTimeline({ autoplay: false });
    const loopTimeline = createTimeline({ autoplay: false, loop: true });

    introTimeline.add(allIcons, {
      opacity: [0.2, 1],
      scale: [0.82, 1],
      translateY: [8, 0],
      duration: 460,
      delay: stagger(35),
      ease: "outCubic",
      composition: "replace",
    });

    loopTimeline
      .add(trustIcons, {
        translateY: [0, -2, 0],
        rotate: [0, -3, 0],
        duration: 2200,
        delay: stagger(140),
        ease: "inOutSine",
        composition: "replace",
      })
      .add(
        pricingIcons,
        {
          scale: [1, 1.06, 1],
          duration: 1800,
          delay: stagger(90),
          ease: "inOutSine",
          composition: "replace",
        },
        "<",
      );

    const cleanupHandlers = [];

    trustCards.forEach((card) => {
      const icon = card.querySelector(".trust-icon svg");
      if (!icon) return;

      const onEnter = () => {
        animate(icon, {
          scale: 1.14,
          rotate: -6,
          duration: 260,
          ease: "outCubic",
          composition: "replace",
        });
      };

      const onLeave = () => {
        animate(icon, {
          scale: 1,
          rotate: 0,
          duration: 280,
          ease: "outQuad",
          composition: "replace",
        });
      };

      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);
      cleanupHandlers.push(() => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mouseleave", onLeave);
      });
    });

    pricingRows.forEach((row) => {
      const icon = row.querySelector("svg");
      if (!icon) return;

      const onEnter = () => {
        animate(icon, {
          scale: 1.14,
          translateX: 2,
          duration: 220,
          ease: "outCubic",
          composition: "replace",
        });
      };

      const onLeave = () => {
        animate(icon, {
          scale: 1,
          translateX: 0,
          duration: 240,
          ease: "outQuad",
          composition: "replace",
        });
      };

      row.addEventListener("mouseenter", onEnter);
      row.addEventListener("mouseleave", onLeave);
      cleanupHandlers.push(() => {
        row.removeEventListener("mouseenter", onEnter);
        row.removeEventListener("mouseleave", onLeave);
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries.some((entry) => entry.isIntersecting);
        if (inView) {
          if (introTimeline.began) {
            introTimeline.resume();
          } else {
            introTimeline.play();
          }
          loopTimeline.resume();
        } else {
          introTimeline.pause();
          loopTimeline.pause();
        }
      },
      { threshold: 0.2 },
    );

    const sections = [
      document.querySelector(".trust-indicators"),
      document.querySelector(".pricing-preview"),
    ].filter(Boolean);

    if (!sections.length) {
      introTimeline.play();
      loopTimeline.play();
    } else {
      sections.forEach((section) => observer.observe(section));
    }

    return () => {
      observer.disconnect();
      cleanupHandlers.forEach((handler) => handler());
      introTimeline.revert();
      loopTimeline.revert();
      allIcons.forEach((icon) => {
        icon.style.willChange = "auto";
      });
    };
  }, []);

  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const heroRoot = heroContentRef.current;

    if (!heroRoot) {
      return undefined;
    }

    const textNodes = Array.from(heroRoot.querySelectorAll(".hero-animate"));
    const headingChars = Array.from(heroRoot.querySelectorAll(".hero-char"));

    if (!textNodes.length && !headingChars.length) {
      return undefined;
    }

    if (prefersReducedMotion) {
      return undefined;
    }

    headingChars.forEach((char) => {
      char.style.opacity = "0";
      char.style.transform = "translateY(22px)";
      char.style.willChange = "transform, opacity";
    });

    const heroTimeline = createTimeline({ autoplay: false });
    const cleanupHandlers = [];

    if (textNodes.length) {
      heroTimeline.add(textNodes, {
        opacity: [0, 1],
        translateY: [18, 0],
        filter: ["blur(8px)", "blur(0px)"],
        duration: 680,
        delay: stagger(120),
        ease: "outCubic",
        composition: "replace",
      });
    }

    if (headingChars.length) {
      heroTimeline.add(
        headingChars,
        {
          opacity: [0, 1],
          translateY: [22, 0],
          rotate: [-8, 0],
          duration: 760,
          delay: stagger(18),
          ease: "outBack(1.1)",
          composition: "replace",
        },
        textNodes.length ? "<<+=120" : 0,
      );

      headingChars.forEach((char, index) => {
        const lift = char.classList.contains("hero-char-accent") ? -10 : -7;
        const tilt = index % 2 === 0 ? -6 : 6;

        const onEnter = () => {
          animate(char, {
            translateY: lift,
            rotate: tilt,
            duration: 220,
            ease: "outQuad",
            composition: "replace",
          });
        };

        const onLeave = () => {
          animate(char, {
            translateY: 0,
            rotate: 0,
            duration: 260,
            ease: "outCubic",
            composition: "replace",
          });
        };

        char.addEventListener("mouseenter", onEnter);
        char.addEventListener("mouseleave", onLeave);
        cleanupHandlers.push(() => {
          char.removeEventListener("mouseenter", onEnter);
          char.removeEventListener("mouseleave", onLeave);
        });
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries.some((entry) => entry.isIntersecting);
        if (isVisible) {
          heroTimeline.play();
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(heroRoot);

    return () => {
      observer.disconnect();
      cleanupHandlers.forEach((handler) => handler());
      heroTimeline.revert();
      headingChars.forEach((char) => {
        char.style.willChange = "auto";
        char.style.opacity = "";
        char.style.transform = "";
      });
    };
  }, []);

  const featurePreview = toolsTabContent[0];

  return (
    <>
      {/* ========================================
          HERO SECTION - MINIMAL
          ======================================== */}
      <section
        className="page hero hero-v2 hero-centered hero-parallax"
        style={{ "--hero-bg": "url('/imgs/backgrounds/9.png')" }}
      >
        <div className="hero-content" data-scroll ref={heroContentRef}>
          <p className="eyebrow hero-animate">For Ghanaian Small Businesses</p>
          <h1 aria-label="From chaos to clarity. One system changes everything.">
            <span className="hero-heading-segment title">
              {renderHeroChars("From chaos to clarity.")}
              <br />
            </span>{" "}
            <span className="text-accent hero-heading-segment hero-heading-accent">
              {renderHeroChars("One system changes everything.", "hero-char-accent")}
            </span>
          </h1>
          <div className="hero-actions">
            <PrimaryButton to="/contact">See How It Works <FontAwesomeIcon icon={faArrowRight} /></PrimaryButton>
            <Link className="button button-ghost" to="/contact">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          WHY US - VISUAL + MINIMAL TEXT
          ======================================== */}
      <section className="page trust-indicators">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">Built for Ghana</p>
          <h2>We know how business runs here.</h2>
        </div>

        {/* IMAGE: Screenshot of dashboard showing Mobile Money, WhatsApp integration */}
        <div className="feature-visual reveal" data-scroll style={{ "--delay": "60ms" }}>
          <img 
            src="/imgs/case-studies/case-study-mobdesk2.png" 
            alt="Business dashboard with local integrations"
            style={{ 
              width: '100%', 
              maxWidth: '900px', 
              margin: '0 auto'
            }}
          />
        </div>
        
        <div className="trust-grid reveal" data-scroll style={{ "--delay": "100ms" }}>
          <article className="trust-card">
            <span className="trust-icon">
              <FontAwesomeIcon icon={faHandshake} />
            </span>
            <h3>We visit first</h3>
            <p>Watch how work flows, then design the system.</p>
          </article>
          
          <article className="trust-card">
            <span className="trust-icon">
              <FontAwesomeIcon icon={faShield} />
            </span>
            <h3>Clean setup</h3>
            <p>Organize your Excel files. Launch with a staged handover plan.</p>
          </article>
          
          <article className="trust-card">
            <span className="trust-icon">
              <FontAwesomeIcon icon={faHeadset} />
            </span>
            <h3>Local support</h3>
            <p>WhatsApp support. Onsite visits. Right here in Ghana.</p>
          </article>
        </div>
      </section>
      
      {/* ========================================
          WHAT WE BUILD - VISUAL TABS
          ======================================== */}
      <section id="features" className="page features-section">
        <div className="tools-tabs reveal" data-scroll>
          <div className="tools-tab-panels">
            <div className="tools-tab-panel-card tools-tab-panel-card--stacked is-visible">
              <div className="tab-content-split">
                <div className="tab-image">
                  <img
                    src={featurePreview.image}
                    alt={featurePreview.alt}
                    style={{
                      width: "100%",
                      borderRadius: "var(--radius)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    }}
                  />
                </div>
                <div className="tab-text">
                  <div className="section-header">
                    <p className="eyebrow">What We Build</p>
                    <h2>Three things every business needs.</h2>
                  </div>
                  <p className="muted tab-lead">
                    Built to help you sell better, stay organized, and make smarter decisions.
                  </p>
                  <div className="tab-content-cards">
                    {toolsTabContent.map((tab) => (
                      <article key={`${tab.id}-detail`} className="tab-content-details">
                        <div className="tab-content-title">
                          <span className="tab-content-icon" aria-hidden="true">
                            <FontAwesomeIcon icon={tab.icon} />
                          </span>
                          <h3>{tab.title}</h3>
                        </div>
                        <p className="muted">{tab.paragraph}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ========================================
          HOW IT WORKS - MINIMAL STEPS
          ======================================== */}
      <section className="page how-it-works">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">Our Process</p>
          <h2>Simple. Clear. No surprises.</h2>
          <p className="muted">From first call to launch, every step is planned and practical.</p>
        </div>

        <div className="process-grid reveal" data-scroll style={{ "--delay": "60ms" }}>
          {processSteps.slice(0, 4).map((step, index) => (
            <article key={step.id} className={`process-card process-card--${index + 1}`}>
              {index === 0 ? (
                <div className="process-card-banner" aria-hidden="true">
                  
                  <span className="process-card-banner-icon ">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <div className="process-card-banner-copy">
                    <strong>{step.title} Request</strong>
                    <span>Quick response from our Ghana team</span>
                  </div>
                </div>
              ) : null}
              {index === 1 ? (
                <div className="process-card-insights">
                  <h3>Real-Time Insights</h3>
                  <p>Track sales, stock levels, and cashflow in one live dashboard.</p>
                  <div className="process-card-insights-visual" aria-hidden="true">
                    <div className="process-insight-chip">
                      <span className="process-insight-chip-dot process-icon-flash">
                        <FontAwesomeIcon icon={faChartLine} />
                      </span>
                      <div className="process-insight-chip-copy">
                        <strong>MoMo Payment Received</strong>
                        <span>Customer payment posted</span>
                      </div>
                      <span className="process-insight-chip-amount">+GH₵ 420</span>
                    </div>
                    <div className="process-insight-phone">
                      <div className="process-insight-phone-top">
                        <span>Insights</span>
                        <span>Today</span>
                      </div>
                      <div className="process-insight-phone-chart">
                        <div className="process-insight-phone-amount">GH₵ 32,706</div>
                        <div className="process-insight-bars">
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>
                    <div className="process-insight-stack">
                      <div className="process-insight-card process-insight-card--a">
                        <span className="process-insight-card-label">
                          <FontAwesomeIcon icon={faReceipt} />
                          <span>Cash at Hand</span>
                        </span>
                        <strong>GH₵ 18.4k</strong>
                      </div>
                      <div className="process-insight-card process-insight-card--b">
                        <span className="process-insight-card-label">
                          <FontAwesomeIcon icon={faChartLine} />
                          <span>Sales Today</span>
                        </span>
                        <strong>GH₵ 13.1k</strong>
                      </div>
                    </div>
                  </div>
                </div>
              ) : index === 2 ? (
                <div className="process-card-rewards">
                  <div className="process-rewards-strip" aria-hidden="true">
                    <div className="process-rewards-metric">
                      <span className="process-rewards-icon process-rewards-icon--dark process-icon-bounce">
                        <FontAwesomeIcon icon={faChartLine} />
                      </span>
                      <div className="process-rewards-copy">
                        <span>Sales this month</span>
                        <strong>GH₵ 52,250</strong>
                      </div>
                    </div>
                    <div className="process-rewards-metric">
                      <span className="process-rewards-icon process-rewards-icon--light process-icon-bounce process-icon-bounce--delay">
                        <FontAwesomeIcon icon={faReceipt} />
                      </span>
                      <div className="process-rewards-copy">
                        <span>Pending invoices</span>
                        <strong>GH₵ 5,040</strong>
                      </div>
                    </div>
                  </div>
                  <div className="process-rewards-pill" aria-hidden="true">
                    <span className="process-rewards-pill-dot process-icon-flash" />
                    <span>Collected today: GH₵ 1,154</span>
                  </div>
                  <h3>Cashflow Snapshot</h3>
                  <p>See money in, money owed, and available cash before you decide.</p>
                </div>
              ) : index === 3 ? (
                <div className="process-card-bills">
                  <div className="process-bills-copy">
                    <span className="process-bills-logo process-icon-bounce process-icon-bounce--delay" aria-hidden="true">
                      <FontAwesomeIcon icon={faReceipt} />
                    </span>
                    <h3>Bill Reminders</h3>
                    <p>Never miss supplier or utility payments with timely alerts.</p>
                  </div>
                  <div className="process-bills-invoice" aria-hidden="true">
                    <span className="process-bills-status">Upcoming bill</span>
                    <div className="process-bills-company">
                      <span>Electricity Company of Ghana</span>
                      <span className="process-bills-company-dot process-icon-flash">
                        <FontAwesomeIcon icon={faBolt} />
                      </span>
                    </div>
                    <p className="process-bills-subtext">Monthly electricity service</p>
                    <div className="process-bills-amount">GH₵ 84.50</div>
                    <div className="process-bills-meta">
                      <span className="process-bills-button">View Details</span>
                      <span>Due in 3 days</span>
                    </div>
                  </div>
                </div>
              ) : (
                <p>{step.description}</p>
              )}
              {index === 0 ? (
                <Link className="process-card-action" to="/contact">
                  Get in Touch
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </section>


      {/* ========================================
          PRICING - CLEAN & SIMPLE
          ======================================== */}
      <section className="page pricing-preview">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">Pricing</p>
          <h2>Three packages. Clear costs.</h2>
        </div>

        <div className="pricing-cards reveal" data-scroll style={{ "--delay": "120ms" }}>
          <div className="pricing-card reveal" data-scroll>
            <h3>Website + Leads</h3>
            <div className="price-tag">
              <span className="price">GH₵ 2,500</span>
              <span className="period">starting</span>
            </div>
            <ul className="pricing-features">
              <li><FontAwesomeIcon icon={faCheck} /> Mobile website</li>
              <li><FontAwesomeIcon icon={faCheck} /> Contact forms</li>
              <li><FontAwesomeIcon icon={faCheck} /> WhatsApp integration</li>
              <li><FontAwesomeIcon icon={faCheck} /> 3-month support</li>
            </ul>
            <p className="ideal-for"><strong>For:</strong> New businesses</p>
            <PrimaryButton to="/contact">Get Started</PrimaryButton>
          </div>

          <div className="pricing-card featured reveal" data-scroll style={{ "--delay": "180ms" }}>
            <span className="badge">Most Popular</span>
            <h3>Website + Dashboard</h3>
            <div className="price-tag">
              <span className="price">GH₵ 8,500</span>
              <span className="period">starting</span>
            </div>
            <ul className="pricing-features">
              <li><FontAwesomeIcon icon={faCheck} /> Everything above</li>
              <li><FontAwesomeIcon icon={faCheck} /> Sales tracking</li>
              <li><FontAwesomeIcon icon={faCheck} /> Inventory management</li>
              <li><FontAwesomeIcon icon={faCheck} /> Reports</li>
              <li><FontAwesomeIcon icon={faCheck} /> 6-month support</li>
            </ul>
            <p className="ideal-for"><strong>For:</strong> Retail & distributors</p>
            <PrimaryButton to="/contact">Let's Talk</PrimaryButton>
          </div>

          <div className="pricing-card reveal" data-scroll style={{ "--delay": "240ms" }}>
            <h3>Complete System</h3>
            <div className="price-tag">
              <span className="price">Custom</span>
              <span className="period">GH₵ 18k+</span>
            </div>
            <ul className="pricing-features">
              <li><FontAwesomeIcon icon={faCheck} /> Everything above</li>
              <li><FontAwesomeIcon icon={faCheck} /> Multi-location</li>
              <li><FontAwesomeIcon icon={faCheck} /> Custom workflows</li>
              <li><FontAwesomeIcon icon={faCheck} /> Mobile Money</li>
              <li><FontAwesomeIcon icon={faCheck} /> 12-month support</li>
            </ul>
            <p className="ideal-for"><strong>For:</strong> Growing teams</p>
            <PrimaryButton to="/contact">Request Quote</PrimaryButton>
          </div>
        </div>
      </section>

      {/* ========================================
          PROOF - VISUAL EXAMPLES
          ======================================== */}
      <section className="page case-studies">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">Sample Scenarios</p>
          <h2>Preview how your setup could look.</h2>
          <p className="muted">Two practical views of how teams can plan work and monitor activity in real time.</p>
        </div>

        <div className="scenario-grid reveal" data-scroll>
          <article className="scenario-card scenario-card--schedule">
            <div className="scenario-visual">
              <div className="scenario-mock scenario-mock--schedule" aria-hidden="true">
                <div className="scenario-schedule-board">
                  <h4>My schedule</h4>
                  <div className="scenario-schedule-grid">
                    <span className="scenario-bar scenario-bar--purple scenario-bar--sm" />
                    <span className="scenario-bar scenario-bar--green scenario-bar--md" />
                    <span className="scenario-bar scenario-bar--purple scenario-bar--xs" />
                    <span className="scenario-bar scenario-bar--green scenario-bar--sm" />
                    <span className="scenario-bar scenario-bar--green scenario-bar--xs" />
                    <span className="scenario-bar scenario-bar--purple scenario-bar--xxs" />
                    <span className="scenario-bar scenario-bar--orange scenario-bar--lg" />
                    <span className="scenario-bar scenario-bar--purple scenario-bar--xs" />
                    <span className="scenario-bar scenario-bar--green scenario-bar--md" />
                  </div>
                </div>
              </div>
              <div className="scenario-hover-overlay" aria-hidden="true">
                <span>See use case</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className="scenario-copy">
              <span className="scenario-tag">Feature for</span>
              <h3>Project Schedule Overview</h3>
              <p>Plan projects by day, assign work clearly, and keep teams aligned.</p>
            </div>
          </article>

          <article className="scenario-card scenario-card--activity" style={{ "--delay": "120ms" }}>
            <div className="scenario-visual">
              <div className="scenario-mock scenario-mock--activity" aria-hidden="true">
                <div className="scenario-activity-card">
                  <div className="scenario-activity-head">
                    <h4>Activity</h4>
                    <span className="scenario-activity-pill">Week</span>
                  </div>
                  <div className="scenario-activity-bars">
                    <span className="scenario-activity-bar scenario-activity-bar--a" />
                    <span className="scenario-activity-bar scenario-activity-bar--b" />
                    <span className="scenario-activity-bar scenario-activity-bar--c" />
                    <span className="scenario-activity-bar scenario-activity-bar--d" />
                    <span className="scenario-activity-bar scenario-activity-bar--e" />
                  </div>
                  <div className="scenario-activity-labels">
                    <span>Day 1</span>
                    <span>Day 11</span>
                  </div>
                </div>
              </div>
              <div className="scenario-hover-overlay" aria-hidden="true">
                <span>See use case</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className="scenario-copy">
              <span className="scenario-tag">Feature for</span>
              <h3>Activity Overview in the Project Management System</h3>
              <p>Monitor progress, compare activity by period, and spot trends instantly.</p>
            </div>
          </article>
        </div>
      </section>

      {/* ========================================
          DISCOVERY SIGNALS
          ======================================== */}
      <section className="page home-discovery">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">Discovery Signals</p>
          <h2>Patterns we keep seeing in growing Ghanaian teams.</h2>
          <p className="muted">No testimonials yet. These are the recurring requests we hear on calls.</p>
        </div>

        <div className="home-discovery-layout reveal" data-scroll style={{ "--delay": "80ms" }}>
          <article className="home-discovery-card home-discovery-card--feature">
            <span className="home-discovery-pill">Most Frequent Signal</span>
            <h3>Teams want one place to track sales, stock, and payments.</h3>
            <p>
              Discovery calls usually start with scattered WhatsApp updates, spreadsheets, and paper records.
            </p>
            <div className="home-discovery-metrics">
              <span><strong>Top request</strong> Daily reporting by close of business</span>
              <span><strong>Top blocker</strong> Manual reconciliation and follow-ups</span>
            </div>
          </article>

          <div className="home-discovery-side">
            <article className="home-discovery-card home-discovery-card--compact">
              <p className="home-discovery-quote">
                Need: clearer handover so staff can follow one process without constant owner escalation.
              </p>
              <div className="home-discovery-meta">
                <strong>Common in retail and distribution</strong>
                <span>Operations signal</span>
              </div>
            </article>

            <article className="home-discovery-card home-discovery-card--compact">
              <p className="home-discovery-quote">
                Need: reliable cashflow visibility before making stock, payroll, and supplier decisions.
              </p>
              <div className="home-discovery-meta">
                <strong>Common in service businesses</strong>
                <span>Finance signal</span>
              </div>
            </article>
          </div>

          <article className="home-discovery-card home-discovery-card--proof">
            <p className="home-discovery-proof-title">Most requested priorities before build starts</p>
            <div className="home-discovery-tags" aria-label="Common discovery priorities">
              <span>Clean dashboard visibility</span>
              <span>Simpler day-end workflow</span>
              <span>Less manual reconciliation</span>
              <span>Local support after launch</span>
            </div>
          </article>
        </div>
      </section>

      {/* ========================================
          FAQ
          ======================================== */}
      <section className="page home-faq">
        <div className="home-faq-shell reveal" data-scroll>
          <div className="home-faq-intro">
            <p className="eyebrow">FAQ</p>
            <h2>Questions people ask before we start.</h2>
            <p className="muted">Clear answers on timing, scope, migration, and support.</p>
            <div className="home-faq-highlights" aria-label="What to expect">
              <span>
                <FontAwesomeIcon icon={faCheck} />
                Onsite discovery in Ghana
              </span>
              <span>
                <FontAwesomeIcon icon={faCheck} />
                Phased rollout you can grow into
              </span>
              <span>
                <FontAwesomeIcon icon={faCheck} />
                Local post-launch support
              </span>
            </div>
            <Link className="button button-ghost home-faq-cta" to="/contact">
              Talk to our team <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          <div className="home-faq-list">
            <details className="home-faq-item" open>
              <summary>How long does a typical project take?</summary>
              <p>Websites are usually 2-4 weeks. Dashboards are 4-6 weeks. Full systems can run 6-10 weeks.</p>
            </details>

            <details className="home-faq-item">
              <summary>Can we start with one part and expand later?</summary>
              <p>Yes. Most teams start with website and lead flow, then add operations and reporting modules.</p>
            </details>

            <details className="home-faq-item">
              <summary>Do you work with our current Excel and records?</summary>
              <p>Yes. We clean, map, and migrate your existing data so your team keeps history and context.</p>
            </details>

            <details className="home-faq-item">
              <summary>What support do we get after launch?</summary>
              <p>You get local support for fixes, staff guidance, and ongoing improvements based on real usage.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ========================================
          FINAL CTA - SHORT & DIRECT
          ======================================== */}
      <section className="page cta cta-compact reveal" data-scroll>
        <div className="cta-content">
          <h2>Stop running in pieces.</h2>
          <p className="lead">One system. Everything connected.</p>
        </div>
        <div className="cta-actions">
          <PrimaryButton to="/contact">Start Free Conversation</PrimaryButton>
        </div>
      </section>
      
      <WhatsApp />
    </>
  );
}
