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
  faArrowRight,
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

  const handleAddOnKeyDown = (id) => (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleAddOn(id);
    }
  };

  const selectedAddOnNames = useMemo(
    () =>
      addOnModules
        .filter((item) => selectedAddOns.includes(item.id))
        .map((item) => item.name),
    [selectedAddOns]
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
    <section className="page module-config">
      <div className="pricing-hero reveal" style={{ "--delay": "0ms" }}>
        <p className="eyebrow">Project Blueprint</p>
        <h1>Design your system blueprint before we build it.</h1>
        <p className="lead">
          Select the building blocks your business needs today. We will use this
          blueprint to shape your project scope and rollout.
        </p>
        <div className="ribbon">
          <div>
            <p className="eyebrow">Setup Flow</p>
            <h3>
              Discovery <FontAwesomeIcon icon={faArrowRight} /> Configure{" "}
              <FontAwesomeIcon icon={faArrowRight} /> Launch
            </h3>
          </div>
          <div className="ribbon-tags">
            <span>Requirements</span>
            <span>Module Map</span>
            <span>Deployment Plan</span>
          </div>
        </div>
      </div>

      <div className="module-config-body">
        <div className="module-config-main">
          <div className="section-header reveal" style={{ "--delay": "80ms" }}>
            <p className="eyebrow">Core Building Blocks</p>
            <h2>Every project starts with the essentials.</h2>
            <p className="lead">
              These modules power finance, inventory, and people operations
              across your organization.
            </p>
          </div>
          <div className="module-grid">
            {coreModules.map((module, index) => (
              <article
                key={module.id}
                className="module-card reveal is-selected"
                style={{ "--delay": `${120 + index * 60}ms` }}
              >
                <div className="module-card-header">
                  <FontAwesomeIcon icon={module.icon} />
                  <span className="module-pill-tag">{module.tag}</span>
                </div>
                <h3>{module.name}</h3>
                <p className="muted">{module.description}</p>
              </article>
            ))}
          </div>

          <div className="section-header reveal" style={{ "--delay": "0ms" }}>
            <p className="eyebrow">Add-on Modules</p>
            <h2>Pick the building blocks that match your growth.</h2>
            <p className="lead">
              Toggle optional modules and we will tailor your rollout roadmap.
            </p>
          </div>
          <div className="module-grid">
            {addOnModules.map((module, index) => {
              const isSelected = selectedAddOns.includes(module.id);
              return (
                <article
                  key={module.id}
                  className={`module-card reveal is-selectable ${
                    isSelected ? "is-selected" : ""
                  }`}
                  style={{ "--delay": `${80 + index * 60}ms` }}
                  onClick={() => toggleAddOn(module.id)}
                  onKeyDown={handleAddOnKeyDown(module.id)}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                >
                  <div className="module-card-header">
                    <FontAwesomeIcon icon={module.icon} />
                    <span className="module-pill-tag">{module.tag}</span>
                  </div>
                  <h3>{module.name}</h3>
                  <p className="muted">{module.description}</p>
                  <div className="module-card-footer">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    {isSelected ? "Selected" : "Click to add"}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <form className="form card config-card">
          <div className="config-header">
            <p className="eyebrow">Blueprint Summary</p>
            <h3>Your current configuration</h3>
            <p className="muted">
              We will review this with you before starting the build.
            </p>
          </div>

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

          <label className="config-checkbox">
            <input
              type="checkbox"
              checked={needsConsulting}
              onChange={(event) => setNeedsConsulting(event.target.checked)}
            />
            Add advisory & implementation support
          </label>

          <div className="config-summary">
            <div>
              <h4>Included modules</h4>
              <ul className="config-list">
                {coreModules.map((module) => (
                  <li key={module.id}>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    {module.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Selected add-ons</h4>
              {selectedAddOnNames.length ? (
                <ul className="config-list">
                  {selectedAddOnNames.map((name) => (
                    <li key={name}>
                      <FontAwesomeIcon icon={faCheckCircle} />
                      {name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="muted">No add-ons selected yet.</p>
              )}
            </div>
          <div className="config-meta">
            <span>Plan: {plan}</span>
            <span>Team: {teamSize}</span>
            <span>Support: {billingCycle}</span>
            <span>Currency: {currency}</span>
            <span>Timeline: {implementation}</span>
            <span>Advisory: {needsConsulting ? "Included" : "Not included"}</span>
          </div>
        </div>

        <PrimaryButton to="/dashboard">Request scope review</PrimaryButton>
        <Link className="button button-ghost" to="/signup">
          Back to intake
        </Link>
      </form>
    </div>
  </section>
  );
}
