import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faChartLine,
  faGlobe,
  faHandshake,
  faBoxesStacked,
  faReceipt,
  faCalendarDays,
  faCalendarCheck,
  faChartPie,
  faFileInvoiceDollar,
  faAddressBook,
  faMoneyBillWave,
  faUserTie,
  faTruck,
  faWrench,
  faRoute,
  faFolderOpen,
  faUserShield,
  faClock,
  faBullhorn,
  faGear,
  faPenToSquare,
  faCartShopping,
  faBoxArchive,
  faShield,
  faPlug,
  faHeadset,
  faLanguage,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../components/PrimaryButton.jsx";

const coreModules = [
  {
    id: "inventory",
    name: "Inventory",
    description: "Serialized items, warehouses, and stock movement tracking.",
    icon: faBoxesStacked,
    tag: "Core",
  },
  {
    id: "accounting",
    name: "Accounting",
    description: "General ledger, reconciliations, and closing.",
    icon: faChartPie,
    tag: "Core",
  },
  {
    id: "invoicing",
    name: "Invoicing",
    description: "Billing schedules, deposits, and payment tracking.",
    icon: faFileInvoiceDollar,
    tag: "Core",
  },
  {
    id: "hr",
    name: "HR",
    description: "Hiring, training, and team performance records.",
    icon: faUserTie,
    tag: "Core",
  },
  {
    id: "users",
    name: "Users",
    description: "Roles, permissions, and access control.",
    icon: faUserShield,
    tag: "Core",
  },
];

const addOnModules = [
  {
    id: "website",
    name: "Website",
    description: "Public storefront, service pages, and lead capture.",
    icon: faGlobe,
    tag: "Growth",
  },
  {
    id: "crm",
    name: "CRM",
    description: "Leads, client timelines, and sales follow-ups.",
    icon: faHandshake,
    tag: "Sales",
  },
  {
    id: "orders",
    name: "Orders",
    description: "Quotes, order status, and fulfillment progress.",
    icon: faReceipt,
    tag: "Ops",
  },
  {
    id: "bookings",
    name: "Bookings",
    description: "Reservations, event timelines, and resource holds.",
    icon: faCalendarDays,
    tag: "Ops",
  },
  {
    id: "scheduler",
    name: "Scheduler",
    description: "Staff calendars, shifts, and job allocations.",
    icon: faCalendarCheck,
    tag: "People",
  },
  {
    id: "directory",
    name: "Directory",
    description: "Team contacts, customers, and vendor profiles.",
    icon: faAddressBook,
    tag: "People",
  },
  {
    id: "expenses",
    name: "Expenses",
    description: "Operating costs, receipts, and approvals.",
    icon: faMoneyBillWave,
    tag: "Finance",
  },
  {
    id: "vendors",
    name: "Vendors",
    description: "Supplier catalog, contracts, and lead times.",
    icon: faTruck,
    tag: "Supply",
  },
  {
    id: "maintenance",
    name: "Maintenance",
    description: "Asset upkeep schedules and service history.",
    icon: faWrench,
    tag: "Ops",
  },
  {
    id: "delivery",
    name: "Delivery",
    description: "Routes, drivers, and drop-off confirmations.",
    icon: faRoute,
    tag: "Logistics",
  },
  {
    id: "documents",
    name: "Documents",
    description: "Contracts, files, and version control.",
    icon: faFolderOpen,
    tag: "Records",
  },
  {
    id: "timesheets",
    name: "Timesheets",
    description: "Hours logged, payroll exports, and approvals.",
    icon: faClock,
    tag: "People",
  },
  {
    id: "marketing",
    name: "Marketing",
    description: "Campaign tracking and customer outreach.",
    icon: faBullhorn,
    tag: "Growth",
  },
  {
    id: "settings",
    name: "Settings",
    description: "System preferences, tax rules, and templates.",
    icon: faGear,
    tag: "Admin",
  },
  {
    id: "template-mode",
    name: "Template Mode",
    description: "Website layouts and content edits without code.",
    icon: faPenToSquare,
    tag: "Web",
  },
  {
    id: "procurement",
    name: "Procurement",
    description: "Purchase requests, approvals, and vendor quotes.",
    icon: faCartShopping,
    tag: "Supply",
  },
  {
    id: "asset-management",
    name: "Asset Management",
    description: "Equipment lifecycle tracking and depreciation.",
    icon: faBoxArchive,
    tag: "Assets",
  },
  {
    id: "integrations",
    name: "Integrations",
    description: "Connect banking, email, SMS, and accounting tools.",
    icon: faPlug,
    tag: "System",
  },
  {
    id: "support-desk",
    name: "Support Desk",
    description: "Tickets, SLAs, and customer service history.",
    icon: faHeadset,
    tag: "Support",
  },
  {
    id: "compliance",
    name: "Compliance",
    description: "Audits, safety checks, and policy attestations.",
    icon: faShield,
    tag: "Governance",
  },
  {
    id: "analytics",
    name: "Analytics",
    description: "Advanced reporting, forecasting, and BI exports.",
    icon: faChartLine,
    tag: "Insights",
  },
];

export default function ModuleConfig() {
  const [selectedAddOns, setSelectedAddOns] = useState([
    "crm",
    "analytics",
    "integrations",
  ]);
  const [plan, setPlan] = useState("Professional");
  const [teamSize, setTeamSize] = useState("11-50");
  const [currency, setCurrency] = useState("GHS");
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [implementation, setImplementation] = useState("4-8 weeks");
  const [needsConsulting, setNeedsConsulting] = useState(true);
  const configStorageKey = "faako-config";

  const toggleAddOn = (id) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedAddOnNames = useMemo(
    () =>
      addOnModules
        .filter((item) => selectedAddOns.includes(item.id))
        .map((item) => item.name),
    [selectedAddOns]
  );
  const totalConfiguredModules = coreModules.length + selectedAddOns.length;
  const setupSteps = useMemo(
    () => [
      {
        id: 1,
        title: "Choose package",
        detail: `${plan} plan for ${teamSize} team`,
        status: "complete",
      },
      {
        id: 2,
        title: "Set billing profile",
        detail: `${currency} · ${billingCycle === "monthly" ? "Monthly support" : "Annual planning"}`,
        status: "complete",
      },
      {
        id: 3,
        title: "Confirm core modules",
        detail: `${coreModules.length} foundational modules included`,
        status: "complete",
      },
      {
        id: 4,
        title: "Select add-on modules",
        detail: selectedAddOns.length
          ? `${selectedAddOns.length} optional modules selected`
          : "Choose the modules needed for launch",
        status: "current",
      },
      {
        id: 5,
        title: "Submit for scope review",
        detail: "Faako team reviews and confirms rollout",
        status: "upcoming",
      },
    ],
    [billingCycle, currency, plan, selectedAddOns.length, teamSize]
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const payload = {
      modules: [...coreModules.map((module) => module.id), ...selectedAddOns],
      plan,
      teamSize,
      currency,
      billingCycle,
      implementation,
      needsConsulting,
    };

    window.localStorage.setItem(configStorageKey, JSON.stringify(payload));
  }, [
    selectedAddOns,
    plan,
    teamSize,
    currency,
    billingCycle,
    implementation,
    needsConsulting,
  ]);

  return (
    <section className="page module-config module-config-wizard">
      <div className="module-config-shell reveal" style={{ "--delay": "0ms" }}>

        <div className="module-config-layout">
          <div className="module-config-main">
            <section className="module-config-intro reveal" style={{ "--delay": "60ms" }}>
              <p className="eyebrow">Step 4 of 5</p>
              <h1>Connect your business modules</h1>
              <p className="lead">
                Choose the modules your team needs now. This blueprint guides
                implementation, timeline, and rollout milestones.
              </p>
            </section>

            <section className="module-config-panel reveal" style={{ "--delay": "120ms" }}>
              <div className="module-config-panel-head">
                <div>
                  <h2>Core foundation</h2>
                  <p>These modules are included in every implementation plan.</p>
                </div>
                <span className="module-config-status-pill is-complete">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  Included
                </span>
              </div>
              <div className="module-config-core-grid">
                {coreModules.map((module) => (
                  <article key={module.id} className="module-config-core-item">
                    <div className="module-config-core-header">
                      <FontAwesomeIcon icon={module.icon} />
                      <span className="module-pill-tag">{module.tag}</span>
                    </div>
                    <h3>{module.name}</h3>
                    <p>{module.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="module-config-panel reveal" style={{ "--delay": "180ms" }}>
              <div className="module-config-panel-head">
                <div>
                  <h2>Optional modules</h2>
                  <p>
                    Activate only what you need for launch. You can add more
                    modules later.
                  </p>
                </div>
                <span className="module-config-status-pill">
                  {selectedAddOns.length} selected
                </span>
              </div>
              <div className="module-config-addon-list">
                {addOnModules.map((module) => {
                  const isSelected = selectedAddOns.includes(module.id);
                  return (
                    <article
                      key={module.id}
                      className={`module-config-addon-row ${
                        isSelected ? "is-selected" : ""
                      }`}
                    >
                      <div className="module-config-addon-copy">
                        <div className="module-config-addon-title">
                          <span className="module-config-addon-icon">
                            <FontAwesomeIcon icon={module.icon} />
                          </span>
                          <h3>{module.name}</h3>
                          <span className="module-config-addon-tag">{module.tag}</span>
                        </div>
                        <p>{module.description}</p>
                      </div>
                      <button
                        type="button"
                        className={`module-config-addon-action ${
                          isSelected ? "is-selected" : ""
                        }`}
                        onClick={() => toggleAddOn(module.id)}
                        aria-pressed={isSelected}
                      >
                        {isSelected ? "Selected" : "Add module"}
                      </button>
                    </article>
                  );
                })}
              </div>
              <div className="module-config-addon-meta">
                <p className="muted">
                  Need a custom workflow module? We can scope and attach it to
                  this plan before launch.
                </p>
                <Link className="button button-ghost" to="/contact">
                  Request custom module
                </Link>
              </div>
            </section>

            <section className="module-config-panel reveal" style={{ "--delay": "240ms" }}>
              <div className="module-config-panel-head">
                <div>
                  <h2>Project preferences</h2>
                  <p>Set delivery details so we can estimate your rollout.</p>
                </div>
              </div>
              <div className="module-config-form">
                <label>
                  Package
                  <select value={plan} onChange={(event) => setPlan(event.target.value)}>
                    <option value="Starter">Starter</option>
                    <option value="Professional">Professional</option>
                    <option value="Enterprise">Enterprise</option>
                  </select>
                </label>
                <label>
                  Team size
                  <select
                    value={teamSize}
                    onChange={(event) => setTeamSize(event.target.value)}
                  >
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201+">201+</option>
                  </select>
                </label>
                <label>
                  Primary currency
                  <select
                    value={currency}
                    onChange={(event) => setCurrency(event.target.value)}
                  >
                    <option value="GHS">GHS</option>
                    <option value="USD">USD</option>
                    <option value="NGN">NGN</option>
                  </select>
                </label>
                <label>
                  Support cadence
                  <select
                    value={billingCycle}
                    onChange={(event) => setBillingCycle(event.target.value)}
                  >
                    <option value="monthly">Monthly</option>
                    <option value="annual">Annual planning</option>
                  </select>
                </label>
                <label>
                  Implementation window
                  <select
                    value={implementation}
                    onChange={(event) => setImplementation(event.target.value)}
                  >
                    <option value="2-4 weeks">2-4 weeks</option>
                    <option value="4-8 weeks">4-8 weeks</option>
                    <option value="8-12 weeks">8-12 weeks</option>
                  </select>
                </label>
                <label className="module-config-checkbox">
                  <input
                    type="checkbox"
                    checked={needsConsulting}
                    onChange={(event) => setNeedsConsulting(event.target.checked)}
                  />
                  Add advisory and implementation support
                </label>
              </div>
            </section>
          </div>

          <aside className="module-config-rail">
            <section className="module-config-rail-card module-config-progress reveal" style={{ "--delay": "120ms" }}>
              <h3>Setup progress</h3>
              <ol className="module-config-step-list">
                {setupSteps.map((step) => (
                  <li
                    key={step.id}
                    className={`module-config-step is-${step.status}`}
                  >
                    <span className="module-config-step-marker">
                      {step.status === "complete" ? (
                        <FontAwesomeIcon icon={faCheckCircle} />
                      ) : (
                        step.id
                      )}
                    </span>
                    <div className="module-config-step-copy">
                      <h4>{step.title}</h4>
                      <p>{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="module-config-rail-card module-config-review reveal" style={{ "--delay": "180ms" }}>
              <h3>Blueprint snapshot</h3>
              <p className="module-config-summary-count">
                {totalConfiguredModules} modules configured
              </p>
              <div className="module-config-meta-grid">
                <span>{plan}</span>
                <span>{teamSize} team</span>
                <span>{currency}</span>
                <span>{implementation}</span>
                <span>{billingCycle === "monthly" ? "Monthly support" : "Annual planning"}</span>
                <span>{needsConsulting ? "Advisory on" : "Self-managed"}</span>
              </div>
              <div>
                <h4>Selected add-ons</h4>
                {selectedAddOnNames.length ? (
                  <ul className="module-config-summary-list">
                    {selectedAddOnNames.map((name) => (
                      <li key={name}>
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <span>{name}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="muted">No add-ons selected yet.</p>
                )}
              </div>
              <div className="module-config-rail-actions">
                <PrimaryButton to="/dashboard">Request scope review</PrimaryButton>
                <Link className="button button-ghost" to="/signup">
                  Back to intake
                </Link>
              </div>
            </section>

            <section className="module-config-rail-card module-config-help reveal" style={{ "--delay": "240ms" }}>
              <h4>
                <FontAwesomeIcon icon={faCircleQuestion} />
                Need help choosing?
              </h4>
              <p>
                Our solutions team can map your workflows and recommend the
                right launch stack.
              </p>
              <Link className="button button-ghost" to="/contact">
                Contact us
              </Link>
            </section>
          </aside>
        </div>
      </div>
    </section>
  );
}
