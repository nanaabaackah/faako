/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animate, createTimeline, stagger } from "animejs";
import {
  faGlobe,
  faArrowRight,
  faHandshake,
  faHeadset,
  faShield,
  faCheck,
  faBoxesStacked,
  faChartLine,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../components/PrimaryButton.jsx";
import Testimonials from "../components/Testimonials.jsx";
import FaqSection from "../components/FaqSection.jsx";
import WhatsApp from "../components/WhatsApp.jsx";

const processSteps = [
  {
    id: "01",
    title: "Free Call",
    description: "Talk about your headaches. No sales pitch.",
  },
  {
    id: "02",
    title: "We Visit",
    description: "Watch how work happens. Take notes.",
  },
  {
    id: "03",
    title: "Blueprint",
    description: "Show what we'll build and what it costs.",
  },
  {
    id: "04",
    title: "Build",
    description: "Create and test. You see demos.",
  },
  {
    id: "05",
    title: "Train",
    description: "Hands-on until everyone's comfortable.",
  },
  {
    id: "06",
    title: "Launch",
    description: "Go live. We stay for support.",
  },
];

const toolsTabContent = [
  {
    id: "portals",
    tabLabel: "Get Found & Get Paid",
    stepId: "01",
    title: "Get Found & Get Paid",
    bullets: [
      "Website that brings customers",
      "Mobile Money + bank transfers",
      "Contact forms \u2192 WhatsApp",
    ],
    image: "/imgs/case-studies/booking-case.png",
    alt: "Business website and booking flow",
  },
  {
    id: "systems",
    tabLabel: "Track Everything",
    stepId: "02",
    title: "Track Everything",
    bullets: [
      "Real-time stock levels",
      "Money in and out",
      "Orders start to finish",
    ],
    image: "/imgs/case-studies/dashboard-case.png",
    alt: "Inventory tracking dashboard",
  },
  {
    id: "data",
    tabLabel: "See The Numbers",
    stepId: "03",
    title: "See The Numbers",
    bullets: [
      "Daily, weekly, monthly totals",
      "Who's performing, what's selling",
      "Reports to your phone",
    ],
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
  const [activeTab, setActiveTab] = useState("portals");
  const [activeProcessIndex, setActiveProcessIndex] = useState(0);
  const heroContentRef = useRef(null);
  const processVisualRef = useRef(null);
  const processIntroTimelineRef = useRef(null);
  const processLoopTimelineRef = useRef(null);
  const processInViewRef = useRef(false);
  const processIntroCompleteRef = useRef(false);
  const processHoveringRef = useRef(false);

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

  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const processRoot = processVisualRef.current;

    if (!processRoot) {
      return undefined;
    }

    const line = processRoot.querySelector(".process-line-fill");
    const dots = Array.from(processRoot.querySelectorAll(".process-dot"));
    const labels = Array.from(processRoot.querySelectorAll(".process-label"));
    const stepCount = Math.min(processSteps.length, dots.length, labels.length);

    if (!line || !stepCount) {
      return undefined;
    }

    setActiveProcessIndex(0);

    if (prefersReducedMotion) {
      return undefined;
    }

    processRoot.classList.add("is-animating");

    let isMounted = true;
    processInViewRef.current = false;
    processIntroCompleteRef.current = false;
    processHoveringRef.current = false;

    const setStep = (index, force = false) => {
      if (isMounted && (force || !processHoveringRef.current)) {
        setActiveProcessIndex(index);
      }
    };

    const introTimeline = createTimeline({ autoplay: false });
    const loopTimeline = createTimeline({ autoplay: false, loop: true });
    processIntroTimelineRef.current = introTimeline;
    processLoopTimelineRef.current = loopTimeline;

    introTimeline
      .add(line, {
        scaleX: [0, 1],
        duration: 900,
        ease: "inOutQuart",
      })
      .add(
        dots,
        {
          scale: [0.6, 1],
          opacity: [0.4, 0.8],
          duration: 360,
          delay: stagger(80),
          ease: "outBack(1.3)",
        },
        "<<+=120",
      )
      .add(
        labels,
        {
          translateY: [8, 0],
          opacity: [0.45, 0.75],
          duration: 300,
          delay: stagger(80),
          ease: "outQuad",
        },
        "<<",
      )
      .call(() => {
        processIntroCompleteRef.current = true;
        setStep(0, true);
        if (!processHoveringRef.current && processInViewRef.current) {
          loopTimeline.play();
        }
      });

    for (let index = 0; index < stepCount; index += 1) {
      loopTimeline
        .call(() => {
          setStep(index);
        })
        .add(
          dots[index],
          {
            scale: [1, 1.18, 1],
            duration: 620,
            ease: "outBack(1.5)",
          },
          "<",
        )
        .add(
          labels[index],
          {
            translateY: [0, -3, 0],
            opacity: [0.8, 1, 0.8],
            duration: 620,
            ease: "outQuad",
          },
          "<<",
        )
        .add({ duration: 1200 });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries.some((entry) => entry.isIntersecting);
        processInViewRef.current = isVisible;

        if (processHoveringRef.current) {
          return;
        }

        if (isVisible) {
          if (!processIntroCompleteRef.current) {
            if (introTimeline.began) {
              introTimeline.resume();
            } else {
              introTimeline.play();
            }
          } else {
            loopTimeline.resume();
          }
        } else {
          introTimeline.pause();
          loopTimeline.pause();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(processRoot);

    return () => {
      isMounted = false;
      observer.disconnect();
      introTimeline.revert();
      loopTimeline.revert();
      processIntroTimelineRef.current = null;
      processLoopTimelineRef.current = null;
      processInViewRef.current = false;
      processIntroCompleteRef.current = false;
      processHoveringRef.current = false;
      processRoot.classList.remove("is-animating");
    };
  }, []);

  const handleProcessStepHover = (index) => {
    processHoveringRef.current = true;
    setActiveProcessIndex(index);
    processIntroTimelineRef.current?.pause();
    processLoopTimelineRef.current?.pause();
  };

  const handleProcessStepsMouseLeave = () => {
    processHoveringRef.current = false;

    if (!processInViewRef.current) {
      return;
    }

    if (!processIntroCompleteRef.current) {
      if (processIntroTimelineRef.current?.began) {
        processIntroTimelineRef.current.resume();
      } else {
        processIntroTimelineRef.current?.play();
      }
      return;
    }

    processLoopTimelineRef.current?.resume();
  };

  const activeProcessStep = processSteps[activeProcessIndex] || processSteps[0];
  const activeToolTab =
    toolsTabContent.find((tab) => tab.id === activeTab) || toolsTabContent[0];

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
            <span className="hero-heading-segment">
              {renderHeroChars("From chaos to clarity.")}
              <br />
            </span>{" "}
            <span className="text-accent hero-heading-segment hero-heading-accent">
              {renderHeroChars("One system changes everything.", "hero-char-accent")}
            </span>
          </h1>
          <p className="lead hero-animate">
            Websites and business systems that connect your sales, inventory, money, and customers.
          </p>
          <div className="hero-actions">
            <PrimaryButton to="/contact">See How It Works</PrimaryButton>
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
            <p>Organize your Excel files. Launch with zero downtime.</p>
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
          HOW IT WORKS - MINIMAL STEPS
          ======================================== */}
      <section className="page how-it-works">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">Our Process</p>
          <h2>Simple. Clear. No surprises.</h2>
        </div>

        {/* TIMELINE: Animated process overview */}
        <div
          className="process-visual reveal"
          data-scroll
          style={{ "--delay": "60ms" }}
          ref={processVisualRef}
          aria-label="Our 6-step process"
        >
          <div className="process-timeline-track" aria-hidden="true">
            <div className="process-line-fill" />
          </div>

          <ol className="process-points" onMouseLeave={handleProcessStepsMouseLeave}>
            {processSteps.map((step, index) => (
              <li
                key={step.id}
                className={`process-point ${index === activeProcessIndex ? "is-active" : ""}`}
              >
                <span
                  className="process-dot"
                  onMouseEnter={() => handleProcessStepHover(index)}
                >
                  {step.id}
                </span>
                <span className="process-label">{step.title}</span>
              </li>
            ))}
          </ol>
          <div className="process-step-loop">
            <p className="process-step-meta">
              Step {activeProcessIndex + 1} of {processSteps.length}
            </p>
            <div key={activeProcessStep.id} className="process-step-loop-content">
              <h3>
                {activeProcessStep.title}
              </h3>
              <p>{activeProcessStep.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          WHAT WE BUILD - VISUAL TABS
          ======================================== */}
      <section id="features" className="page features-section">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">What We Build</p>
          <h2>Three things every business needs.</h2>
        </div>
        
        <div className="tools-tabs reveal" data-scroll>
          <div className="tools-tab-panels">
            <div className="tools-tab-panel-card tools-tab-panel-card--stacked is-visible">
              <div className="tools-tab-menu">
                <div className="tools-tab-buttons" role="tablist" aria-label="Tools tabs">
                  {toolsTabContent.map((tab) => (
                    <button
                      key={tab.id}
                      id={`tools-tab-${tab.id}`}
                      type="button"
                      role="tab"
                      aria-selected={activeTab === tab.id}
                      aria-controls="tools-tab-panel"
                      className={`tools-tab-button ${activeTab === tab.id ? "is-active" : ""}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.tabLabel}
                    </button>
                  ))}
                </div>
              </div>

              <div
                className="tab-content-split"
                role="tabpanel"
                id="tools-tab-panel"
                aria-labelledby={`tools-tab-${activeToolTab.id}`}
              >
                <div className="tab-text">
                  <h3>{activeToolTab.title}</h3>
                  <ul className="solution-list">
                    {activeToolTab.bullets.map((bullet) => (
                      <li key={bullet}>
                        <strong>{bullet}</strong>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tab-image">
                  <img
                    src={activeToolTab.image}
                    alt={activeToolTab.alt}
                    style={{
                      width: "100%",
                      borderRadius: "var(--radius)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
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
              <span className="price">GH₵ 3,500</span>
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
              <span className="price">GH₵ 12,000</span>
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
              <span className="period">GH₵ 25k+</span>
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
          <p className="eyebrow">See It Working</p>
          <h2>Real systems. Real results.</h2>
        </div>

        <div className="case-grid reveal" data-scroll>
          <article className="case-card">
            <div className="case-image">
              <img 
                src="/imgs/case-studies/erp-case.png" 
                alt="ERP dashboard" 
                loading="lazy"
              />
            </div>
            <div className="case-info">
              <span className="case-tag">ERP System</span>
              <h3>From WhatsApp chaos to one dashboard</h3>
              <p>Multi-location events company. Everything tracked.</p>
            </div>
          </article>

          <article className="case-card" style={{ "--delay": "120ms" }}>
            <div className="case-image">
              <img 
                src="/imgs/case-studies/dashboard-case.png" 
                alt="Operations dashboard" 
                loading="lazy"
              />
            </div>
            <div className="case-info">
              <span className="case-tag">Dashboard</span>
              <h3>Leadership sees live numbers</h3>
              <p>Real-time visibility. No more guessing.</p>
            </div>
          </article>
        </div>
      </section>

      {/* ========================================
          TESTIMONIALS - KEEP SHORT
          ======================================== */}
      <Testimonials
        className="page testimonials"
        headerScroll
        eyebrow="What Clients Say"
        title="Built for teams who need it to just work"
        items={[
          {
            quote:
              "Before Faako, everything was WhatsApp groups and spreadsheets. Now everyone sees the same numbers.",
            name: "Kwame A.",
            company: "Distribution, Accra",
          },
          {
            quote:
              "They came onsite, watched how we work, built exactly what we needed. No generic template.",
            name: "Ama D.",
            company: "Retail Chain",
          },
        ]}
      />

      {/* ========================================
          FAQ - MINIMAL
          ======================================== */}
      <FaqSection
        className="page faq-section"
        headerScroll
        eyebrow="Questions"
        title="What people ask"
        items={[
          {
            question: "How long does it take?",
            answer:
              "Websites: 2-4 weeks. Dashboards: 4-6 weeks. Full systems: 6-10 weeks.",
            open: true,
          },
          {
            question: "Can we start small?",
            answer:
              "Yes. Start with website, add dashboard later.",
          },
          {
            question: "What about our Excel files?",
            answer:
              "We clean and migrate everything. No data lost.",
          },
        ]}
      />

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
