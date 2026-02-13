import {
  faGlobe,
  faBoxesStacked,
  faHandshake,
  faChartLine,
  faRoute,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

export const moduleShowcaseItems = [
  {
    id: "website",
    icon: faGlobe,
    kicker: "Growth",
    title: "Website",
    description: "Get found online and turn visitors into qualified leads.",
    signals: ["SEO ready", "Lead capture"],
    outcome: "Conversion-ready",
    detailSummary:
      "Launch a business website that brings in real leads, captures inquiries, and routes every contact straight into your workflow.",
    problem:
      "Leads come through random channels and get lost before your team follows up.",
    value:
      "Every visitor gets a clear path to contact, book, or request a quote. Nothing falls through.",
    capabilities: [
      {
        title: "Lead-first page structure",
        text: "Service pages, landing sections, and calls-to-action are designed to convert visitors into enquiries.",
      },
      {
        title: "Built-in enquiry flows",
        text: "Contact forms and booking actions push submissions directly to your team via dashboard and WhatsApp.",
      },
      {
        title: "Performance-ready setup",
        text: "Fast page load, technical SEO basics, and analytics tagging are set up from day one.",
      },
    ],
    workflows: [
      "Visitor lands on service page and submits an enquiry",
      "Lead is captured and assigned to the right team member",
      "Follow-up status appears in CRM and reports automatically",
    ],
    includes: [
      "Mobile-responsive layout",
      "Service and product pages",
      "Lead forms and CTA routing",
      "Analytics and conversion tracking",
    ],
    integrations: ["CRM", "Reports", "WhatsApp alerts"],
    metrics: [
      { value: "< 2s", label: "Typical mobile load target" },
      { value: "100%", label: "Lead capture visibility" },
      { value: "24/7", label: "Always-on lead intake" },
    ],
  },
  {
    id: "inventory",
    icon: faBoxesStacked,
    kicker: "Operations",
    title: "Inventory",
    description: "Track stock levels in real time across all your locations.",
    signals: ["Live stock", "Multi-branch"],
    outcome: "Live visibility",
    detailSummary:
      "Get real-time inventory visibility across branches, warehouses, and sales channels so your team always knows what is in stock.",
    problem:
      "Stock updates are delayed or inconsistent, causing overselling and missed sales.",
    value:
      "One trusted inventory view keeps purchasing, sales, and dispatch aligned.",
    capabilities: [
      {
        title: "Real-time stock movement",
        text: "Every sale, transfer, and adjustment updates item balances immediately in the system.",
      },
      {
        title: "Multi-location control",
        text: "Track stock per branch, warehouse, or shelf with clear transfer history between locations.",
      },
      {
        title: "Reorder support",
        text: "Low-stock signals help your team reorder before critical items run out.",
      },
    ],
    workflows: [
      "Sales order deducts stock instantly at selected location",
      "Low stock threshold triggers purchase planning",
      "Inbound restock updates on-hand levels and reports",
    ],
    includes: [
      "Stock item catalog",
      "Location-based quantities",
      "Transfer and adjustment logs",
      "Low-stock alerts",
    ],
    integrations: ["Orders", "Delivery", "Reports"],
    metrics: [
      { value: "Live", label: "Stock updates" },
      { value: "Multi-site", label: "Location support" },
      { value: "Lower", label: "Stockout risk" },
    ],
  },
  {
    id: "crm",
    icon: faHandshake,
    kicker: "Customers",
    title: "CRM",
    description: "Track every client interaction, follow-up, and sales stage.",
    signals: ["Follow-ups", "Pipeline flow"],
    outcome: "Relationship flow",
    detailSummary:
      "Keep every customer conversation, opportunity, and follow-up in one pipeline so your team closes more deals consistently.",
    problem:
      "Customer history is spread across chats and personal notes, so follow-ups are missed.",
    value:
      "A shared pipeline gives your team context, accountability, and faster response time.",
    capabilities: [
      {
        title: "Unified customer timeline",
        text: "Calls, messages, quote requests, and updates are stored in one place per customer record.",
      },
      {
        title: "Sales stage tracking",
        text: "Move opportunities through clear stages with ownership and next-step reminders.",
      },
      {
        title: "Follow-up automation",
        text: "Set reminders and activity tasks so leads are never left unattended.",
      },
    ],
    workflows: [
      "New enquiry becomes a lead in pipeline",
      "Lead is assigned and moved through sales stages",
      "Closed outcomes feed into reporting and forecasting",
    ],
    includes: [
      "Lead and client records",
      "Pipeline and stage board",
      "Task and follow-up reminders",
      "Activity history log",
    ],
    integrations: ["Website", "Reports", "Invoicing"],
    metrics: [
      { value: "Faster", label: "Lead response" },
      { value: "Clear", label: "Pipeline ownership" },
      { value: "Higher", label: "Follow-up consistency" },
    ],
  },
  {
    id: "reports",
    icon: faChartLine,
    kicker: "Analytics",
    title: "Reports",
    description: "See profit, sales, and trend insights without manual sheets.",
    signals: ["Auto dashboards", "Weekly insights"],
    outcome: "Decision support",
    detailSummary:
      "Turn operational data into live dashboards and practical weekly reports so leaders can make decisions quickly.",
    problem:
      "Important numbers are delayed because reports are built manually in spreadsheets.",
    value:
      "You get trusted numbers in minutes, not days, with snapshots for every team.",
    capabilities: [
      {
        title: "Live performance dashboards",
        text: "Track sales, margin, inventory movement, and team activity from one reporting view.",
      },
      {
        title: "Scheduled report drops",
        text: "Deliver summary reports weekly to leadership through email or WhatsApp-ready exports.",
      },
      {
        title: "Trend visibility",
        text: "Compare current vs prior periods to catch growth opportunities and risk areas early.",
      },
    ],
    workflows: [
      "Data syncs from core modules into reporting layer",
      "Dashboards refresh automatically throughout the day",
      "Weekly summary is distributed to decision makers",
    ],
    includes: [
      "KPI dashboards",
      "Branch and team comparisons",
      "Weekly and monthly summaries",
      "Exportable report views",
    ],
    integrations: ["Inventory", "CRM", "Finance modules"],
    metrics: [
      { value: "1 view", label: "Business snapshot" },
      { value: "Daily", label: "Auto refresh cycle" },
      { value: "Actionable", label: "Decision insights" },
    ],
  },
  {
    id: "delivery",
    icon: faRoute,
    kicker: "Logistics",
    title: "Delivery",
    description: "Monitor routes, delivery status, and dispatch performance.",
    signals: ["Live routes", "Status updates"],
    outcome: "Route tracking",
    detailSummary:
      "Coordinate dispatch, routes, and proof-of-delivery in one timeline so customers and teams stay informed.",
    problem:
      "Delivery updates are unclear, and dispatch teams spend time chasing status manually.",
    value:
      "Route status, handoff confirmations, and delivery timelines become visible end-to-end.",
    capabilities: [
      {
        title: "Dispatch queue",
        text: "Organize pending deliveries by location, priority, and assigned rider or driver.",
      },
      {
        title: "Status visibility",
        text: "Track each order through dispatched, in-transit, and delivered states.",
      },
      {
        title: "Proof and exceptions",
        text: "Capture delivery proof notes and exception reasons for complete service records.",
      },
    ],
    workflows: [
      "Confirmed order enters dispatch queue",
      "Driver assignment and route status update in real time",
      "Completed delivery updates customer and internal records",
    ],
    includes: [
      "Dispatch board",
      "Driver and route assignment",
      "Delivery status timeline",
      "Proof-of-delivery notes",
    ],
    integrations: ["Orders", "Inventory", "CRM"],
    metrics: [
      { value: "Lower", label: "Failed deliveries" },
      { value: "Faster", label: "Dispatch turnaround" },
      { value: "Clear", label: "Delivery accountability" },
    ],
  },
  {
    id: "hr",
    icon: faUserTie,
    kicker: "Team",
    title: "HR",
    description: "Manage roles, attendance, and staff accountability at scale.",
    signals: ["Attendance", "Role controls"],
    outcome: "People operations",
    detailSummary:
      "Manage people operations with clear role ownership, attendance tracking, and operational accountability.",
    problem:
      "Team responsibilities and attendance records are inconsistent across branches.",
    value:
      "Managers see who is scheduled, active, and responsible for each workflow.",
    capabilities: [
      {
        title: "Role and access structure",
        text: "Define role responsibilities and tie system permissions to real team functions.",
      },
      {
        title: "Attendance visibility",
        text: "Track attendance trends and missing shifts with branch-level transparency.",
      },
      {
        title: "Operational accountability",
        text: "Assign owners to tasks and workflow checkpoints so nothing is ownerless.",
      },
    ],
    workflows: [
      "Manager assigns role and branch responsibility",
      "Daily attendance and team activity are logged",
      "Performance and gaps are reviewed from a single dashboard",
    ],
    includes: [
      "Role and permission matrix",
      "Attendance records",
      "Team assignment logs",
      "Accountability snapshots",
    ],
    integrations: ["Scheduler", "Reports", "Operations modules"],
    metrics: [
      { value: "Clear", label: "Role ownership" },
      { value: "Consistent", label: "Attendance tracking" },
      { value: "Fewer", label: "Operational handoff gaps" },
    ],
  },
];

export const moduleById = Object.fromEntries(
  moduleShowcaseItems.map((item) => [item.id, item]),
);

export const getModuleById = (moduleId) => moduleById[moduleId];

