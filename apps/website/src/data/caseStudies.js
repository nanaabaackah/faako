import {
  faBoxesStacked,
  faRoute,
  faChartLine,
  faShield,
  faUserTie,
  faCheckCircle,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

export const caseStudies = [
  {
    slug: "party-rental-erp",
    title: "Hybrid ERP Platform",
    tag: "Hybrid ERP + SaaS",
    summary:
      "A unified operating system for hybrid retail and rental businesses.",
    thumbnail: "/imgs/case-studies/erp-case.png",
    hero: {
      eyebrow: "Case Study",
      headline: "Retail and rentals finally live in one ERP.",
      lead:
        "A hybrid ERP bridges SKU-based sales and time-based rental bookings inside a single inventory core, with a shared ledger, dispatch workflows, and a path to multi-tenant SaaS.",
      primaryCta: {
        label: "Request a walkthrough",
        to: "/contact",
      },
      secondaryCta: {
        label: "See pricing",
        to: "/pricing",
      },
      image: "/imgs/case-studies/case-study-mobdesk2.png",
      imageAlt: "ERP dashboard for rentals inventory and orders",
      badges: ["Hybrid inventory", "Ledger", "Dispatch", "SaaS"],
    },
    stats: [
      { value: "2", label: "Inventory modes" },
      { value: "1", label: "Unified ledger" },
      { value: "5", label: "Core modules" },
    ],
    snapshot: {
      title: "Client Snapshot",
      lead:
        "A hybrid retail and events business rebuilding a bespoke platform into a scalable SaaS product.",
      items: [
        { label: "Industry", value: "Retail + rentals" },
        { label: "Scope", value: "ERP + SaaS foundations" },
        { label: "Infrastructure", value: "Netlify Functions + PostgreSQL" },
        { label: "Tooling", value: "Prisma, Playwright, ESLint" },
      ],
    },
    challenge: {
      title: "Two business models, one inventory truth.",
      lead:
        "Most ERPs handle retail or rentals. This platform reconciles both without breaking availability or finance reporting.",
      points: [
        {
          label: "Hybrid complexity",
          text: "SKU sales and serialized rental assets needed a shared checkout path.",
        },
        {
          label: "Availability risk",
          text: "Bookings require date-based checks before committing inventory.",
        },
        {
          label: "Financial clarity",
          text: "A single ledger had to reconcile sales, rentals, expenses, and profit.",
        },
      ],
    },
    solution: {
      title: "A unified core with purpose-built modules.",
      lead:
        "The platform now runs retail orders, rental bookings, dispatch, and finance through the same operating system.",
      points: [
        {
          label: "Unified inventory",
          text: "Retail items and rental assets flow through one checkout engine.",
        },
        {
          label: "Serverless validation",
          text: "Availability and totals are verified before writes are committed.",
        },
        {
          label: "Ledger-first finance",
          text: "Invoices, expenses, and profitability roll into a single view.",
        },
      ],
    },
    tools: {
      title: "Platform stack",
      lead: "Modern tooling tuned for speed, reliability, and scale.",
      items: ["React", "Vite", "Netlify Functions", "PostgreSQL", "Prisma"],
    },
    features: {
      title: "Core modules",
      lead: "Everything a hybrid retail and rental operator needs in one place.",
      items: [
        {
          icon: faBoxesStacked,
          title: "Commerce engine",
          text: "Unified inventory, orders, and booking availability checks.",
        },
        {
          icon: faChartLine,
          title: "Financial intelligence",
          text: "General ledger, invoicing, and expense tracking for profit clarity.",
        },
        {
          icon: faRoute,
          title: "Logistics and supply chain",
          text: "Dispatch workflows, digital waivers, and maintenance tracking.",
        },
        {
          icon: faUserTie,
          title: "Workforce management",
          text: "Role-based access, staff profiles, and timesheets for crews.",
        },
      ],
    },
    workflow: {
      title: "How the core flow works",
      lead: "Retail and rental orders follow the same validation and ledger path.",
      steps: [
        {
          step: "01",
          title: "Validate availability",
          text: "Serverless checks confirm stock, pricing, and rental dates.",
        },
        {
          step: "02",
          title: "Commit the order",
          text: "Orders write atomically to inventory and the general ledger.",
        },
        {
          step: "03",
          title: "Deliver and reconcile",
          text: "Dispatch, waivers, and maintenance keep assets accountable.",
        },
      ],
    },
    outcomes: {
      title: "Outcomes",
      lead: "A clearer system that can scale beyond one business.",
      stats: [
        { value: "Hybrid", label: "Retail + rental in one core" },
        { value: "SaaS-ready", label: "Admin console + data isolation" },
        { value: "Accurate", label: "Integer-based financials" },
      ],
    },
    quote: {
      text:
        "Retail and rentals now run through one inventory core with a single ledger.",
      name: "Operations lead",
      role: "Project summary",
    },
    faqs: [
      {
        question: "Does it handle both retail and rentals?",
        answer:
          "Yes. SKU sales and rental bookings flow through the same checkout engine.",
        open: true,
      },
      {
        question: "How is data accuracy handled for money?",
        answer:
          "All financial values are stored as integer cents to avoid floating point drift.",
      },
      {
        question: "Is this built to scale as SaaS?",
        answer:
          "Yes. The platform is being re-engineered with multi-tenant data isolation.",
      },
    ],
    trustedBy: ["Hybrid retail operators"],
  },
  {
    slug: "developer-command-center",
    title: "Developer Command Center",
    tag: "Productivity Suite",
    summary:
      "Real-time visibility into deployments, tasks, and system health in one dashboard.",
    thumbnail: "/imgs/case-studies/dashboard-case.png",
    hero: {
      eyebrow: "Case Study",
      headline: "A command center that keeps product and engineering aligned.",
      lead:
        "We brought deployments, incidents, and roadmap updates into one living dashboard - so leadership, PMs, and engineers stay in sync without chasing updates.",
      primaryCta: {
        label: "Book a strategy call",
        to: "/contact",
      },
      secondaryCta: {
        label: "Explore solutions",
        to: "/solutions",
      },
      image: "/imgs/case-studies/case-study-mobdesk.png",
      imageAlt: "Command center dashboard with live system status",
      badges: ["Deployments", "Incidents", "Roadmap", "KPIs"],
    },
    stats: [
      { value: "15 min", label: "Time to visibility" },
      { value: "55%", label: "Fewer handoffs" },
      { value: "4", label: "Teams aligned" },
    ],
    snapshot: {
      title: "Client Snapshot",
      lead:
        "A Ghanaian fintech platform scaling across multiple product squads and operations teams.",
      items: [
        { label: "Industry", value: "Fintech & SaaS" },
        { label: "Teams", value: "Engineering, Ops, Product, CX" },
        { label: "Users", value: "120+ internal stakeholders" },
        { label: "Timeline", value: "6-week launch" },
      ],
    },
    challenge: {
      title: "Too many tools, not enough clarity.",
      lead:
        "Updates lived across Jira, Slack, GitHub, and Google Sheets. Leadership never had a live view.",
      points: [
        {
          label: "Tool sprawl",
          text: "No single view of releases, incidents, and critical blockers.",
        },
        {
          label: "Slow updates",
          text: "Weekly status reports were stale the moment they were sent.",
        },
        {
          label: "Context gaps",
          text: "Ops and CX teams had no shared source for live system health.",
        },
      ],
    },
    solution: {
      title: "Live dashboards built for every role.",
      lead:
        "We created a command center that surfaces the right data for execs, PMs, and engineers - without extra manual updates.",
      points: [
        {
          label: "Unified release feed",
          text: "Deployments, tests, and rollbacks show up instantly in one timeline.",
        },
        {
          label: "Incident playbooks",
          text: "On-call checklists trigger automatically with status updates.",
        },
        {
          label: "Executive metrics",
          text: "KPI tiles pull from product analytics and ops data in real time.",
        },
      ],
    },
    tools: {
      title: "Connected sources",
      lead: "Signals from the tools teams already trust, pulled into Faako.",
      items: ["GitHub", "Jira", "Slack", "Sentry", "Google Sheets"],
    },
    features: {
      title: "Capabilities that unlocked momentum",
      lead: "Every team got a tailored view without extra reporting.",
      items: [
        {
          icon: faChartLine,
          title: "Release visibility",
          text: "Track what shipped, what's queued, and who owns the rollout.",
        },
        {
          icon: faCheckCircle,
          title: "Incident orchestration",
          text: "Auto-assign owners and keep comms in one shared place.",
        },
        {
          icon: faUserTie,
          title: "Leadership dashboards",
          text: "High-level KPIs with drill-down views for product leaders.",
        },
        {
          icon: faLightbulb,
          title: "Roadmap readiness",
          text: "Keep roadmap, sprint progress, and customer requests aligned.",
        },
      ],
    },
    workflow: {
      title: "How the command center runs",
      lead: "Everyone works off the same live pulse.",
      steps: [
        {
          step: "01",
          title: "Pull the live signal",
          text: "APIs sync deployment, incident, and roadmap data every few minutes.",
        },
        {
          step: "02",
          title: "Translate for each team",
          text: "Dashboards auto-filter by role - no manual reporting needed.",
        },
        {
          step: "03",
          title: "Close the loop",
          text: "Postmortems and KPIs update as soon as issues resolve.",
        },
      ],
    },
    outcomes: {
      title: "The command center effect",
      lead: "Faster decisions, fewer surprises, and tighter alignment.",
      stats: [
        { value: "45%", label: "Faster incident response" },
        { value: "70%", label: "Reduction in status update time" },
        { value: "3x", label: "More product alignment" },
      ],
    },
    quote: {
      text:
        "Leadership finally sees the truth without asking for a slide deck. It changed how we prioritize and ship.",
      name: "Head of product",
      role: "Fintech platform",
    },
    faqs: [
      {
        question: "Can dashboards be customized per team?",
        answer:
          "Yes. Each team gets a tailored view while the core data stays consistent.",
        open: true,
      },
      {
        question: "Does it replace Jira or GitHub?",
        answer:
          "No. Faako pulls data from those tools and turns it into a real-time command view.",
      },
      {
        question: "How long did onboarding take?",
        answer:
          "Six weeks, including integrations, live training, and dashboard iterations.",
      },
    ],
    trustedBy: ["Product leaders", "Engineering teams", "Ops teams", "CX teams"],
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    tag: "Portfolio Website",
    summary:
      "Performance-first React and Vite portfolio with case studies, blog content, and a hiring-ready story.",
    thumbnail: "/imgs/case-studies/website-case.png",
    hero: {
      eyebrow: "Case Study",
      headline: "A portfolio that reads like a product story, not a resume.",
      lead:
        "The goal was a site that feels intentional, fast, and structured around impact. The final build pairs bold storytelling with clean IA, accessible motion, and clear hiring paths.",
      primaryCta: {
        label: "Request a walkthrough",
        to: "/contact",
      },
      secondaryCta: {
        label: "See pricing",
        to: "/pricing",
      },
      image: "/imgs/case-studies/case-study-mobdesk3.png",
      imageAlt: "Portfolio website homepage",
      badges: ["React", "Vite", "Storytelling", "Accessibility"],
    },
    stats: [
      { value: "4", label: "Narrative pillars" },
      { value: "12+", label: "Project snapshots" },
      { value: "100%", label: "Custom build" },
    ],
    snapshot: {
      title: "Client Snapshot",
      lead:
        "A personal portfolio built to attract product and frontend roles, with a focus on impact, clarity, and hiring conversion.",
      items: [
        { label: "Industry", value: "Personal brand" },
        { label: "Scope", value: "Portfolio + blog + case studies" },
        { label: "Stack", value: "React, Vite, CSS" },
        { label: "Timeline", value: "Iterative launch" },
      ],
    },
    challenge: {
      title: "Turn a resume into a story people want to follow.",
      lead:
        "The old portfolio was static and hard to scan. The new site needed structure, speed, and a clearer hiring narrative.",
      points: [
        {
          label: "Signal vs noise",
          text: "Recruiters needed a quick path to core projects and impact.",
        },
        {
          label: "Performance",
          text: "Large visuals had to load fast without sacrificing style.",
        },
        {
          label: "Consistency",
          text: "The brand tone had to feel cohesive across pages and devices.",
        },
      ],
    },
    solution: {
      title: "A content system with personality and clarity.",
      lead:
        "We built a layout system that makes each section scan quickly while still feeling human.",
      points: [
        {
          label: "Structured IA",
          text: "Clear reading paths and project groupings guide hiring managers fast.",
        },
        {
          label: "Reusable patterns",
          text: "Shared components keep layouts consistent without feeling repetitive.",
        },
        {
          label: "Performance passes",
          text: "Lean bundles, optimized images, and smart animations keep it fast.",
        },
      ],
    },
    tools: {
      title: "Tools and stack",
      lead: "A modern, lightweight stack optimized for speed and iteration.",
      items: ["React", "Vite", "Netlify", "Figma", "Lighthouse checks"],
    },
    features: {
      title: "What makes it feel alive",
      lead: "A balance of bold visuals, motion, and accessibility.",
      items: [
        {
          icon: faChartLine,
          title: "Content hierarchy",
          text: "Reading paths, highlights, and CTAs guide the right next click.",
        },
        {
          icon: faCheckCircle,
          title: "Accessibility-first",
          text: "Keyboard-friendly navigation and clear contrast across sections.",
        },
        {
          icon: faUserTie,
          title: "Hiring-focused flow",
          text: "The site is structured to answer recruiter questions fast.",
        },
        {
          icon: faLightbulb,
          title: "Playful motion",
          text: "Subtle animation and layout shifts create energy without noise.",
        },
      ],
    },
    workflow: {
      title: "Build approach",
      lead: "A tight loop of narrative, design, and performance testing.",
      steps: [
        {
          step: "01",
          title: "Define the story",
          text: "Map hiring goals to sections, then lock the IA and copy flow.",
        },
        {
          step: "02",
          title: "Design the system",
          text: "Create reusable blocks for projects, highlights, and content.",
        },
        {
          step: "03",
          title: "Ship and iterate",
          text: "Launch fast, then refine visuals, motion, and performance passes.",
        },
      ],
    },
    outcomes: {
      title: "The portfolio effect",
      lead: "A sharper story and a faster path to the best work.",
      stats: [
        { value: "Live", label: "Portfolio launched publicly" },
        { value: "Fast", label: "Optimized load and motion" },
        { value: "Clear", label: "Recruiter-ready narrative" },
      ],
    },
    quote: {
      text:
        "The new portfolio feels like the product I want to ship - clear, fast, and intentional.",
      name: "Portfolio owner",
      role: "Product + Frontend developer",
    },
    faqs: [
      {
        question: "Is the portfolio open-source?",
        answer:
          "Yes. The repo is public so the build decisions are easy to review.",
        open: true,
      },
      {
        question: "Can this structure work for other creators?",
        answer:
          "Absolutely - the layout system is reusable for any project-driven portfolio.",
      },
      {
        question: "What was the biggest focus?",
        answer:
          "Clarity: making it easy for a hiring manager to find the best work fast.",
      },
    ],
    trustedBy: ["Hiring teams", "Product leaders", "Design partners", "Founders"],
  },
  {
    slug: "booking-portal",
    title: "Booking Portal + Admin Console",
    tag: "Scheduling System",
    summary:
      "Public booking page with live availability plus an admin console for settings, status, and calendar sync.",
    thumbnail: "/imgs/case-studies/booking-case.png",
    hero: {
      eyebrow: "Case Study",
      headline: "Self-serve booking on the front, full control on the back.",
      lead:
        "A two-sided scheduling experience with a public booking page, real-time availability, and a secure console for booking settings, status tracking, and calendar sync.",
      primaryCta: {
        label: "Request a walkthrough",
        to: "/contact",
      },
      secondaryCta: {
        label: "Explore solutions",
        to: "/solutions",
      },
      image: "/imgs/case-studies/case-study-mobdesk4.png",
      imageAlt: "Booking portal dashboard preview",
      badges: ["Public booking", "Availability grid", "Admin console", "Calendar sync"],
    },
    stats: [
      { value: "7 days", label: "Availability window" },
      { value: "5 slots", label: "Time options daily" },
      { value: "3 durations", label: "Session lengths" },
    ],
    snapshot: {
      title: "Client Snapshot",
      lead:
        "A service business that needed a clean booking experience and a lightweight admin console.",
      items: [
        { label: "Industry", value: "Professional services" },
        { label: "Scope", value: "Public booking + admin console" },
        { label: "Stack", value: "React, Vite, Netlify redirects" },
        { label: "Integrations", value: "Google Calendar sync" },
      ],
    },
    challenge: {
      title: "Bookings without the back-and-forth.",
      lead:
        "The team needed a self-serve booking page while keeping internal calendars in sync.",
      points: [
        {
          label: "Double-booking risk",
          text: "Public bookings and internal availability had to stay aligned.",
        },
        {
          label: "Manual coordination",
          text: "Email threads made scheduling slow and inconsistent.",
        },
        {
          label: "Calendar drift",
          text: "External calendar events needed a reliable sync path.",
        },
      ],
    },
    solution: {
      title: "A shared availability engine with admin controls.",
      lead:
        "Live availability, clear slot rules, and a console to manage booking links and sync.",
      points: [
        {
          label: "Availability matrix",
          text: "A 7-day grid shows available, booked, and blocked slots.",
        },
        {
          label: "Booking settings",
          text: "Admins can update booking links and default locations quickly.",
        },
        {
          label: "Calendar sync",
          text: "Connect, sync, or disconnect Google Calendar safely.",
        },
      ],
    },
    tools: {
      title: "Core stack",
      lead: "Lightweight frontend with a shared API backend.",
      items: ["React", "Vite", "Netlify redirects", "Google Calendar", "Token auth"],
    },
    features: {
      title: "What the system supports",
      lead: "Everything needed to run a modern booking flow.",
      items: [
        {
          icon: faChartLine,
          title: "Live availability",
          text: "Slots are marked available, booked, or blocked in real time.",
        },
        {
          icon: faCheckCircle,
          title: "Booking confirmations",
          text: "Users get confirmation messaging once a booking is saved.",
        },
        {
          icon: faUserTie,
          title: "Admin controls",
          text: "Manage booking links, locations, and status tracking in one view.",
        },
        {
          icon: faLightbulb,
          title: "Calendar sync",
          text: "Sync external events and keep availability aligned.",
        },
      ],
    },
    workflow: {
      title: "How the booking flow runs",
      lead: "Both public and internal views stay aligned through one API.",
      steps: [
        {
          step: "01",
          title: "Load settings + availability",
          text: "Public pages fetch booking settings and the live slot matrix.",
        },
        {
          step: "02",
          title: "Confirm a booking",
          text: "Users submit the form and receive a confirmation response.",
        },
        {
          step: "03",
          title: "Review and sync",
          text: "Admins monitor bookings and sync calendar updates as needed.",
        },
      ],
    },
    outcomes: {
      title: "Outcome",
      lead: "A cleaner scheduling flow with less manual follow-up.",
      stats: [
        { value: "Self-serve", label: "Public booking experience" },
        { value: "Aligned", label: "Calendar and availability sync" },
        { value: "Organized", label: "Admin booking console" },
      ],
    },
    quote: {
      text:
        "Scheduling no longer lives in spreadsheets or DMs. Everything stays in one system.",
      name: "Operations manager",
      role: "Service team",
    },
    faqs: [
      {
        question: "Can time slots and durations be changed?",
        answer:
          "Yes. Slot times and duration options are configurable in the booking flow.",
        open: true,
      },
      {
        question: "Does it block weekends and past times?",
        answer:
          "Yes. Past slots and weekends are automatically marked unavailable.",
      },
      {
        question: "Does it support calendar sync?",
        answer:
          "Yes. Google Calendar can be connected, synced, or disconnected from the console.",
      },
    ],
    trustedBy: ["Service teams", "Client ops", "Founders"],
  },
];
