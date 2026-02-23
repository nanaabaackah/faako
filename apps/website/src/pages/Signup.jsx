import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faCircleCheck,
  faBuilding,
  faUsers,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/pages/Auth.css";

const PACKAGE_OPTIONS = [
  {
    id: "starter",
    name: "Starter",
    summary: "Best for simple launch needs.",
    moduleLimit: 4
  },
  {
    id: "professional",
    name: "Professional",
    summary: "Most popular for growing teams.",
    moduleLimit: 8
  },
  {
    id: "enterprise",
    name: "Enterprise",
    summary: "Full custom scope and roll-out support.",
    moduleLimit: null
  }
];

const TIER_RANK = {
  starter: 1,
  professional: 2,
  enterprise: 3
};

const MODULE_OPTIONS = [
  {
    id: "website",
    name: "Website",
    description: "Marketing website with lead capture",
    minPackage: "starter"
  },
  {
    id: "payments",
    name: "Payments",
    description: "Mobile Money and payment tracking",
    minPackage: "starter"
  },
  {
    id: "bookings",
    name: "Bookings",
    description: "Appointments and reservations",
    minPackage: "starter"
  },
  {
    id: "inventory",
    name: "Inventory",
    description: "Live stock visibility",
    minPackage: "professional"
  },
  {
    id: "orders",
    name: "Orders",
    description: "Quote-to-order process",
    minPackage: "professional"
  },
  {
    id: "crm",
    name: "CRM",
    description: "Leads and customer management",
    minPackage: "professional"
  },
  {
    id: "dashboard",
    name: "Dashboard",
    description: "Real-time operational overview",
    minPackage: "professional"
  },
  {
    id: "reports",
    name: "Reports",
    description: "Weekly and monthly business reporting",
    minPackage: "professional"
  },
  {
    id: "delivery",
    name: "Delivery",
    description: "Dispatch and route status",
    minPackage: "professional"
  },
  {
    id: "scheduler",
    name: "Scheduler",
    description: "Staff shifts and availability",
    minPackage: "professional"
  },
  {
    id: "hr",
    name: "HR & Payroll",
    description: "People operations and payroll",
    minPackage: "enterprise"
  },
  {
    id: "integrations",
    name: "Integrations",
    description: "External systems and APIs",
    minPackage: "enterprise"
  },
  {
    id: "analytics",
    name: "Advanced Analytics",
    description: "Forecasting and deeper insight tools",
    minPackage: "enterprise"
  },
  {
    id: "support",
    name: "Support Desk",
    description: "Customer issue and SLA tracking",
    minPackage: "enterprise"
  }
];

const COMMUNICATION_OPTIONS = [
  { id: "whatsapp", label: "WhatsApp" },
  { id: "phone-calls", label: "Phone Calls" },
  { id: "email", label: "Email" },
  { id: "instagram", label: "Instagram" },
  { id: "facebook", label: "Facebook" },
  { id: "walk-in", label: "In Person" },
  { id: "website-chat", label: "Website Chat" },
  { id: "sms", label: "SMS" },
  { id: "other", label: "Other" }
];

const DEFAULT_PACKAGE = "professional";
const DEFAULT_PRIMARY_COLOR = "#2f855a";
const DEFAULT_SECONDARY_COLOR = "#f59e0b";
const HEX_COLOR_PATTERN = /^#(?:[0-9a-fA-F]{3}){1,2}$/;

const normalizeHexColorValue = (value) => {
  const raw = String(value || "").trim();
  if (!raw) {
    return null;
  }

  const withHash = raw.startsWith("#") ? raw : `#${raw}`;
  return HEX_COLOR_PATTERN.test(withHash) ? withHash.toLowerCase() : null;
};

const PACKAGE_LABEL_BY_ID = Object.fromEntries(
  PACKAGE_OPTIONS.map((pkg) => [pkg.id, pkg.name])
);

const packageIncludesModule = (packageId, moduleMinPackage) =>
  (TIER_RANK[packageId] || 0) >= (TIER_RANK[moduleMinPackage] || 0);

const getDefaultModules = (packageId) => {
  const defaultsByPackage = {
    starter: ["website", "payments", "bookings"],
    professional: ["website", "inventory", "orders", "crm"],
    enterprise: ["website", "inventory", "orders", "crm", "dashboard", "reports"]
  };

  return defaultsByPackage[packageId] || defaultsByPackage.professional;
};

export default function Signup() {
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [selectedPackage, setSelectedPackage] = useState(DEFAULT_PACKAGE);
  const [selectedModules, setSelectedModules] = useState(
    getDefaultModules(DEFAULT_PACKAGE)
  );
  const [communicationChannels, setCommunicationChannels] = useState([
    "whatsapp",
    "phone-calls"
  ]);
  const [brandPrimaryColor, setBrandPrimaryColor] = useState(DEFAULT_PRIMARY_COLOR);
  const [brandSecondaryColor, setBrandSecondaryColor] = useState(DEFAULT_SECONDARY_COLOR);
  const [brandPrimaryColorInput, setBrandPrimaryColorInput] = useState(DEFAULT_PRIMARY_COLOR);
  const [brandSecondaryColorInput, setBrandSecondaryColorInput] = useState(DEFAULT_SECONDARY_COLOR);

  const apiBase = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");
  // Separate endpoint specifically for the signup form — points to Formspree.
  // This keeps VITE_API_BASE_URL free for all other backend API calls.
  const formspreeUrl = "https://formspree.io/f/xojnpypr";
  
  const activePackage = useMemo(
    () =>
      PACKAGE_OPTIONS.find((pkg) => pkg.id === selectedPackage) ||
      PACKAGE_OPTIONS[0],
    [selectedPackage]
  );

  const moduleLimit = activePackage.moduleLimit;

  useEffect(() => {
    const allowedModuleIds = MODULE_OPTIONS
      .filter((module) => packageIncludesModule(selectedPackage, module.minPackage))
      .map((module) => module.id);

    setSelectedModules((current) => {
      const filtered = current.filter((moduleId) =>
        allowedModuleIds.includes(moduleId)
      );

      if (filtered.length > 0) {
        if (moduleLimit !== null && filtered.length > moduleLimit) {
          return filtered.slice(0, moduleLimit);
        }
        return filtered;
      }

      const defaults = getDefaultModules(selectedPackage).filter((moduleId) =>
        allowedModuleIds.includes(moduleId)
      );

      if (moduleLimit !== null) {
        return defaults.slice(0, moduleLimit);
      }

      return defaults;
    });
  }, [selectedPackage, moduleLimit]);

  const handlePackageChange = (event) => {
    setSelectedPackage(event.target.value);
  };

  const toggleModule = (moduleId) => {
    setStatus((current) =>
      current.state === "error" ? { state: "idle", message: "" } : current
    );

    setSelectedModules((current) => {
      if (current.includes(moduleId)) {
        return current.filter((item) => item !== moduleId);
      }

      if (moduleLimit !== null && current.length >= moduleLimit) {
        setStatus({
          state: "error",
          message: `${activePackage.name} allows up to ${moduleLimit} modules.`
        });
        return current;
      }

      return [...current, moduleId];
    });
  };

  const toggleCommunicationChannel = (channelId) => {
    setCommunicationChannels((current) => {
      if (current.includes(channelId)) {
        return current.filter((item) => item !== channelId);
      }
      return [...current, channelId];
    });
  };

  const handlePrimaryColorPickerChange = (event) => {
    const value = event.target.value.toLowerCase();
    setBrandPrimaryColor(value);
    setBrandPrimaryColorInput(value);
  };

  const handlePrimaryColorInputChange = (event) => {
    const value = event.target.value;
    setBrandPrimaryColorInput(value);

    const normalized = normalizeHexColorValue(value);
    if (normalized) {
      setBrandPrimaryColor(normalized);
    }
  };

  const handlePrimaryColorInputBlur = () => {
    const normalized =
      normalizeHexColorValue(brandPrimaryColorInput) || brandPrimaryColor;
    setBrandPrimaryColor(normalized);
    setBrandPrimaryColorInput(normalized);
  };

  const handleSecondaryColorPickerChange = (event) => {
    const value = event.target.value.toLowerCase();
    setBrandSecondaryColor(value);
    setBrandSecondaryColorInput(value);
  };

  const handleSecondaryColorInputChange = (event) => {
    const value = event.target.value;
    setBrandSecondaryColorInput(value);

    const normalized = normalizeHexColorValue(value);
    if (normalized) {
      setBrandSecondaryColor(normalized);
    }
  };

  const handleSecondaryColorInputBlur = () => {
    const normalized =
      normalizeHexColorValue(brandSecondaryColorInput) || brandSecondaryColor;
    setBrandSecondaryColor(normalized);
    setBrandSecondaryColorInput(normalized);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (selectedModules.length === 0) {
      setStatus({
        state: "error",
        message: "Select at least one module before submitting."
      });
      return;
    }

    if (communicationChannels.length === 0) {
      setStatus({
        state: "error",
        message: "Select at least one communication channel."
      });
      return;
    }

    // Dev fallback: if no Formspree URL is set, log payload to console instead of crashing
    if (!formspreeUrl) {
      const formData = new FormData(event.currentTarget);
      const payload = Object.fromEntries(formData.entries());
      payload.packageTier = selectedPackage;
      payload.requestedModules = selectedModules.join(", ");
      payload.communicationChannels = communicationChannels.join(", ");
      payload.brandPrimaryColor = brandPrimaryColor;
      payload.brandSecondaryColor = brandSecondaryColor;
      console.info("[Faako Dev] VITE_FORMSPREE_URL not set. Payload:", payload);
      setStatus({
        state: "success",
        message: "[Dev] Payload logged to console. Set VITE_FORMSPREE_URL in .env.local to activate Formspree."
      });
      return;
    }

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    payload.packageTier = selectedPackage;
    // Arrays are joined to strings so Formspree displays them readably in email
    payload.requestedModules = selectedModules.join(", ");
    payload.communicationChannels = communicationChannels.join(", ");
    payload.brandPrimaryColor = brandPrimaryColor;
    payload.brandSecondaryColor = brandSecondaryColor;

    setStatus({ state: "loading", message: "Sending request..." });

    try {
      // Post directly to the Formspree endpoint — no /signup suffix needed
      // "accept: application/json" tells Formspree to return JSON instead of redirecting
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      // Formspree returns { ok: true } on success, { errors: [...] } on failure
      const result = await response.json();

      if (!response.ok || result?.errors) {
        const message =
          result?.errors?.[0]?.message ||
          "Something went wrong. Please try again.";
        throw new Error(message);
      }

      event.currentTarget.reset();
      setSelectedPackage(DEFAULT_PACKAGE);
      setSelectedModules(getDefaultModules(DEFAULT_PACKAGE));
      setCommunicationChannels(["whatsapp", "phone-calls"]);
      setBrandPrimaryColor(DEFAULT_PRIMARY_COLOR);
      setBrandSecondaryColor(DEFAULT_SECONDARY_COLOR);
      setBrandPrimaryColorInput(DEFAULT_PRIMARY_COLOR);
      setBrandSecondaryColorInput(DEFAULT_SECONDARY_COLOR);
      setStatus({
        state: "success",
        message: "Thanks. Your discovery form has been received."
      });
    } catch (error) {
      setStatus({
        state: "error",
        message: error.message || "Something went wrong. Please try again."
      });
    }
  };

  return (
    <section className="page signup signup-page auth-suite auth-suite--signup">
      <div className="auth-suite-shell">
        <section className="auth-suite-panel">
          <span className="auth-suite-kicker">
            <FontAwesomeIcon icon={faRocket} />
            Client Discovery
          </span>
          <h1>Share your business requirements.</h1>
          <p className="lead">
            Complete this intake once and Faako will prepare your proposal,
            rollout plan, and implementation timeline.
          </p>
          <ul className="auth-suite-points">
            <li>
              <FontAwesomeIcon icon={faCircleCheck} />
              Capture your current workflow and communication channels
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} />
              Select package and module priorities
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} />
              Include logo and brand colors for setup readiness
            </li>
          </ul>
          <div className="auth-suite-tags">
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              Business profile
            </span>
            <span>
              <FontAwesomeIcon icon={faUsers} />
              Workflow discovery
            </span>
            <span>
              <FontAwesomeIcon icon={faBolt} />
              Module planning
            </span>
          </div>
        </section>

        <section className="signup-shell auth-suite-form">
          <div className="signup-form-side">
            <div className="signup-icon-badge">
              <img
                className="signup-icon-logo"
                src="/assets/logos/logo-white.png"
                alt="Faako logo"
                loading="lazy"
              />
            </div>
            <h2>Client Intake Form</h2>
            <p className="muted">
              Tell us how your business currently runs and what you want to
              launch with Faako.
            </p>

            <form
              className="form signup-form"
              style={{ "--delay": "140ms" }}
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xojnpypr"
              method="POST"
            >
              <section className="signup-section">
                <h3>Company details</h3>

                <div className="signup-grid signup-grid--two">
                  <label>
                    Business name
                    <input name="companyName" placeholder="My Business Ltd" required />
                  </label>

                  <label>
                    Contact name
                    <input name="contactName" placeholder="Jane Doe" required />
                  </label>
                </div>

                <div className="signup-grid signup-grid--two">
                  <label>
                    Work email
                    <input
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      autoComplete="email"
                      required
                    />
                  </label>

                  <label>
                    Phone number
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+233 20 000 0000"
                      autoComplete="tel"
                    />
                  </label>
                </div>

                <div className="signup-grid signup-grid--two">
                  <label>
                    Business type
                    <select name="businessType" defaultValue="both">
                      <option value="sell">Sales</option>
                      <option value="rent">Rentals</option>
                      <option value="both">Both</option>
                    </select>
                  </label>

                  <label>
                    Team size
                    <select name="teamSize" defaultValue="1-10">
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201+">201+</option>
                    </select>
                  </label>
                </div>
              </section>

              <section className="signup-section">
                <h3>Branding and setup</h3>

                <div className="signup-grid signup-grid--two">
                  <label>
                    Website URL
                    <input
                      name="websiteUrl"
                      type="url"
                      placeholder="https://yourcompany.com"
                    />
                  </label>

                  <label>
                    Logo URL
                    <input
                      name="logoUrl"
                      type="url"
                      placeholder="https://drive.google.com/..."
                    />
                  </label>
                </div>

                <div className="signup-grid signup-grid--two signup-grid--color">
                  <label>
                    Primary brand color
                    <div className="signup-color-control">
                      <input
                        className="signup-color-swatch"
                        type="color"
                        value={brandPrimaryColor}
                        onChange={handlePrimaryColorPickerChange}
                        aria-label="Pick primary brand color"
                      />
                      <input
                        className="signup-color-hex"
                        type="text"
                        value={brandPrimaryColorInput}
                        onChange={handlePrimaryColorInputChange}
                        onBlur={handlePrimaryColorInputBlur}
                        placeholder="#2f855a"
                      />
                    </div>
                  </label>

                  <label>
                    Secondary brand color
                    <div className="signup-color-control">
                      <input
                        className="signup-color-swatch"
                        type="color"
                        value={brandSecondaryColor}
                        onChange={handleSecondaryColorPickerChange}
                        aria-label="Pick secondary brand color"
                      />
                      <input
                        className="signup-color-hex"
                        type="text"
                        value={brandSecondaryColorInput}
                        onChange={handleSecondaryColorInputChange}
                        onBlur={handleSecondaryColorInputBlur}
                        placeholder="#f59e0b"
                      />
                    </div>
                  </label>
                </div>

                <div className="signup-grid signup-grid--two">
                  <label>
                    Preferred currency
                    <select name="currency" defaultValue="GHS">
                      <option value="GHS">GHS</option>
                      <option value="USD">USD</option>
                      <option value="NGN">NGN</option>
                    </select>
                  </label>

                  <label>
                    Timeline to start
                    <select name="timelinePreference" defaultValue="soon">
                      <option value="immediately">Immediately</option>
                      <option value="soon">Soon (within 30 days)</option>
                      <option value="exploring">Exploring options</option>
                    </select>
                  </label>
                </div>
              </section>

              <section className="signup-section">
                <h3>Current operations</h3>

                <label>
                  Describe your current workflow
                  <textarea
                    name="currentWorkflow"
                    rows={4}
                    placeholder="How do you currently track sales, inventory, orders, and team tasks?"
                    required
                  />
                </label>

                <fieldset className="signup-choice-group">
                  <legend>Current communication channels</legend>
                  <p className="signup-help-text">
                    Select all channels you currently use with customers.
                  </p>

                  <div className="signup-chip-grid">
                    {COMMUNICATION_OPTIONS.map((channel) => {
                      const selected = communicationChannels.includes(channel.id);

                      return (
                        <label
                          key={channel.id}
                          className={`signup-chip ${selected ? "is-selected" : ""}`}
                        >
                          <input
                            type="checkbox"
                            checked={selected}
                            onChange={() => toggleCommunicationChannel(channel.id)}
                          />
                          <span>{channel.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                <label>
                  Biggest pain points
                  <textarea
                    name="painPoints"
                    rows={3}
                    placeholder="What is currently slowing your team down the most?"
                  />
                </label>
              </section>

              <section className="signup-section">
                <h3>Package and modules</h3>

                <fieldset className="signup-choice-group">
                  <legend>Preferred package</legend>
                  <div className="signup-package-grid">
                    {PACKAGE_OPTIONS.map((pkg) => {
                      const checked = selectedPackage === pkg.id;
                      const limitText =
                        pkg.moduleLimit === null
                          ? "Unlimited modules"
                          : `Up to ${pkg.moduleLimit} modules`;

                      return (
                        <label
                          key={pkg.id}
                          className={`signup-package-option ${checked ? "is-selected" : ""}`}
                        >
                          <input
                            type="radio"
                            name="packageTier"
                            value={pkg.id}
                            checked={checked}
                            onChange={handlePackageChange}
                          />
                          <span className="signup-package-name">{pkg.name}</span>
                          <span className="signup-package-summary">{pkg.summary}</span>
                          <span className="signup-package-limit">{limitText}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                <fieldset className="signup-choice-group">
                  <legend>Modules you want</legend>
                  <p className="signup-help-text">
                    {moduleLimit === null
                      ? `Select the modules you want for ${activePackage.name}.`
                      : `Select up to ${moduleLimit} modules for ${activePackage.name}.`}
                  </p>

                  <div className="signup-module-grid">
                    {MODULE_OPTIONS.map((module) => {
                      const selected = selectedModules.includes(module.id);
                      const unavailable = !packageIncludesModule(
                        selectedPackage,
                        module.minPackage
                      );
                      const limitReached =
                        moduleLimit !== null && selectedModules.length >= moduleLimit;
                      const disabledForLimit = !selected && !unavailable && limitReached;
                      const disabled = unavailable || disabledForLimit;
                      const requiredPackageLabel = PACKAGE_LABEL_BY_ID[module.minPackage];

                      return (
                        <label
                          key={module.id}
                          className={`signup-module-option ${selected ? "is-selected" : ""} ${
                            unavailable ? "is-unavailable" : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={selected}
                            onChange={() => toggleModule(module.id)}
                            disabled={disabled}
                          />
                          <span className="signup-module-name">{module.name}</span>
                          <span className="signup-module-description">
                            {module.description}
                          </span>
                          {unavailable ? (
                            <span className="signup-module-requirement">
                              Requires {requiredPackageLabel}
                            </span>
                          ) : null}
                        </label>
                      );
                    })}
                  </div>

                  <p className="signup-help-text signup-help-text--strong">
                    {selectedModules.length} module
                    {selectedModules.length === 1 ? "" : "s"} selected
                  </p>
                </fieldset>
              </section>

              <section className="signup-section">
                <h3>Project goals</h3>

                <label>
                  What should Faako help you achieve in the next 6-12 months?
                  <textarea
                    name="projectDetails"
                    rows={3}
                    placeholder="Share your top outcomes, constraints, or must-have features."
                  />
                </label>

                <label>
                  Additional notes
                  <textarea
                    name="additionalNotes"
                    rows={3}
                    placeholder="Anything else we should know before proposal and onboarding?"
                  />
                </label>
              </section>

              <button
                className="button button-primary signup-submit"
                type="submit"
                disabled={status.state === "loading"}
              >
                {status.state === "loading"
                  ? "Submitting..."
                  : "Submit discovery form"}
              </button>

              {status.message ? (
                <p className={`form-note ${status.state}`} role="status">
                  {status.message}
                </p>
              ) : (
                <p className="form-note">
                  We review every request and reply with next steps within one
                  business day.
                </p>
              )}
            </form>
          </div>
        </section>
      </div>
    </section>
  );
}