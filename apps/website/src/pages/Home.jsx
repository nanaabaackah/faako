import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // eslint-disable-line no-unused-vars
import PrimaryButton from "../components/PrimaryButton.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faTruck,
  faRoute,
  faReceipt,
  faGear,
  faChartPie,
  faBullhorn,
  faCalendarDays,
  faHandshake,
  faUsers,
  faCalendarCheck,
  faUserTie,
  faFileInvoiceDollar,
  faMoneyBillWave,
  faFolderOpen,
  faClock,
  faUserAlt,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

const installableModules = [
  {
    label: "Inventory",
    desc: "Stock, serialized rentals, and valuations in one tab.",
    icon: faBoxOpen,
  },
  {
    label: "Vendors",
    desc: "Supplier portals, purchase paperwork, and approvals.",
    icon: faTruck,
  },
  {
    label: "Delivery",
    desc: "Dispatch runs, pickups, and status tracking.",
    icon: faRoute,
  },
  {
    label: "Orders",
    desc: "Unified order entry for retail + rental channels.",
    icon: faReceipt,
  },
  {
    label: "Settings",
    desc: "Admin controls for roles, localization, and branding.",
    icon: faGear,
  },
  {
    label: "Accounting",
    desc: "Ledgers, reconciliations, and financial dashboards.",
    icon: faChartPie,
  },
  {
    label: "Marketing",
    desc: "Campaigns, broadcast messaging, and updates.",
    icon: faBullhorn,
  },
  {
    label: "Bookings",
    desc: "Rental reservations and calendar conflict checks.",
    icon: faCalendarDays,
  },
  {
    label: "Customers",
    desc: "CRM profiles, loyalty, and notes.",
    icon: faHandshake,
  },
  {
    label: "Directory",
    desc: "Team contacts, user info, and access controls.",
    icon: faUsers,
  },
  {
    label: "Scheduler",
    desc: "Resource blocks, crews, and shift planning.",
    icon: faCalendarCheck,
  },
  {
    label: "HR",
    desc: "Roles, staff data, and approvals.",
    icon: faUserTie,
  },
  {
    label: "Invoicing",
    desc: "PDF-ready invoices tied to orders or bookings.",
    icon: faFileInvoiceDollar,
  },
  {
    label: "Expenses",
    desc: "Expense capture and visibility per unit.",
    icon: faMoneyBillWave,
  },
  {
    label: "Documents",
    desc: "Store files, waivers, and approvals centrally.",
    icon: faFolderOpen,
  },
  {
    label: "Timesheets",
    desc: "Track crews, hours, and billable time.",
    icon: faClock,
  },
  {
    label: "Users",
    desc: "Permissions, password resets, and roles.",
    icon: faUserAlt,
  },
  {
    label: "Maintenance",
    desc: "Asset health logs and scheduled upkeep.",
    icon: faWrench,
  },
];

const toolsTabContent = [
  {
    id: "insights",
    label: "Insights",
    title: "Ribbon dashboards that keep momentum calm",
    text:
      "Paint a real-time pulse of finance, inventory, and people so leadership never needs to search for the next report.",
    bullets: [
      "Unified dashboards refresh every minute",
      "Annotations stay visible to the whole team",
      "Shared bookmarks keep conversations grounded",
    ],
  },
  {
    id: "workflow",
    label: "Workflow",
    title: "Flow-based work orders and approvals",
    text:
      "Create intuitive workflows that pass data between modules and notify every team member with the right context.",
    bullets: [
      "Chain approvals from finance to ops",
      "Automated reminders for overdue tasks",
      "Self-service checkpoints for team leads",
    ],
  },
  {
    id: "automation",
    label: "Automation",
    title: "Automations that react to your business",
    text:
      "Use visual builders to trigger automations whenever a project hits a milestone, a closing date nears, or inventory dips.",
    bullets: [
      "Event-based automations with visual triggers",
      "Conditional rules guard your approvals",
      "Automated summaries keep stakeholders aligned",
    ],
  },
];

export default function Home() {
  const [activeToolId, setActiveToolId] = useState(toolsTabContent[0].id);
  useEffect(() => {
    if (
      typeof IntersectionObserver === "undefined" ||
      typeof window === "undefined"
    ) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.25 }
    );

    const nodes = document.querySelectorAll("[data-scroll]");
    nodes.forEach((node) => observer.observe(node));
    
    // ---- Faako SVG draw+fill loop (runs once on mount)
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion) {
      const svgs = document.querySelectorAll(".faako-logo");

      svgs.forEach((svg) => {
        const paths = svg.querySelectorAll("path");

        paths.forEach((p, i) => {
          const originalFill = (p.getAttribute("fill") || "#4a3931").toLowerCase();

          // Store original fill and index
          p.style.setProperty("--path-fill", originalFill);
          p.style.setProperty("--i", String(i));

          // Measure path length
          const len = p.getTotalLength();
          p.style.setProperty("--dash", String(len));

          // Dash setup using CSS vars (so keyframes can loop cleanly)
          p.style.strokeDasharray = "var(--dash)";
          p.style.strokeDashoffset = "var(--dash)";

          // Start outline-only
          p.style.fill = "transparent";
          p.style.stroke = "var(--path-fill)";

          p.classList.add("faako-loop-path");
        });
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="page hero">
        <div className="hero-copy reveal" style={{ "--delay": "0ms" }}>
          <p className="eyebrow">The Single Source of Truth</p>
          <h1>Your Entire Enterprise, in One Place.</h1>
          <p className="lead">
            Stop chasing data across a dozen apps. Bring your finance,
            inventory, and people into one powerful, unified workspace designed
            for the modern African enterprise.
          </p>
          <div className="hero-actions">
            <PrimaryButton to="/signup">Get Started for Free</PrimaryButton>
            <Link className="button button-ghost" to="/signup">
              Request a Demo
            </Link>
          </div>
          <div className="hero-metrics">
            <div className="metric">
              <span>One place</span>
              <p>Finance, inventory, people</p>
            </div>
            <div className="metric">
              <span>Real time</span>
              <p>Unified dashboards</p>
            </div>
            <div className="metric">
              <span>Built to scale</span>
              <p>Modular and global</p>
            </div>
          </div>
        </div>

        <div
          className="hero-visual reveal scroll-reveal"
          style={{ "--delay": "140ms" }}
          data-scroll
        >
          <figure className="hero-illustration" data-scroll>
          <svg
            id="faako-logo-light"
            className="faako-logo faako-logo--light"
            viewBox="0 0 375 374.999991"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="Faako logo"
          >
            <defs>
                <clipPath id="fc7f98da92">
                  <path
                    d="M 154 5.601562 L 245 5.601562 L 245 164 L 154 164 Z M 154 5.601562 "
                    clipRule="nonzero"
                  />
                </clipPath>
                <clipPath id="621c3da3fd">
                  <path
                    d="M 135 203 L 221 203 L 221 369.351562 L 135 369.351562 Z M 135 203 "
                    clipRule="nonzero"
                  />
                </clipPath>
                <clipPath id="6738151a5f">
                  <path
                    d="M 203 154 L 369.351562 154 L 369.351562 240 L 203 240 Z M 203 154 "
                    clipRule="nonzero"
                  />
                </clipPath>
                <clipPath id="8e2ea0f1aa">
                  <path
                    d="M 5.601562 130 L 164 130 L 164 221 L 5.601562 221 Z M 5.601562 130 "
                    clipRule="nonzero"
                  />
                </clipPath>
              </defs>

              <path
                fill="#4a3931"
                d="M 241.394531 301.429688 C 236.789062 301.429688 233.050781 297.699219 233.050781 293.089844 C 233.050781 288.484375 236.789062 284.746094 241.394531 284.746094 C 246 284.746094 249.734375 288.484375 249.734375 293.089844 C 249.734375 297.699219 246 301.429688 241.394531 301.429688 Z M 248.261719 276.597656 L 248.261719 183.722656 L 234.523438 183.722656 L 234.523438 276.601562 C 228.070312 279.292969 223.535156 285.660156 223.535156 293.089844 C 223.535156 302.953125 231.53125 310.949219 241.394531 310.949219 C 251.257812 310.949219 259.253906 302.953125 259.253906 293.089844 C 259.253906 285.660156 254.714844 279.289062 248.261719 276.597656 "
                fillOpacity="1"
                fillRule="nonzero"
              />

              <g clipPath="url(#fc7f98da92)">
                <path
                  fill="#4a3931"
                  d="M 172.535156 31.804688 C 167.929688 31.804688 164.195312 28.070312 164.195312 23.460938 C 164.195312 18.855469 167.929688 15.121094 172.535156 15.121094 C 177.144531 15.121094 180.878906 18.855469 180.878906 23.460938 C 180.878906 28.070312 177.144531 31.804688 172.535156 31.804688 Z M 226.496094 161.167969 C 226.882812 161.40625 227.253906 161.660156 227.617188 161.921875 C 229.671875 161.550781 231.773438 161.351562 233.917969 161.351562 L 244.828125 161.351562 C 242.316406 156.53125 238.503906 152.40625 233.65625 149.445312 C 224.515625 143.859375 213.363281 143.445312 203.828125 148.339844 C 198.589844 151.027344 192.460938 150.796875 187.433594 147.726562 C 182.40625 144.65625 179.40625 139.308594 179.40625 133.417969 L 179.40625 39.949219 C 185.859375 37.257812 190.394531 30.890625 190.394531 23.460938 C 190.394531 13.597656 182.398438 5.601562 172.535156 5.601562 C 162.671875 5.601562 154.675781 13.597656 154.675781 23.460938 C 154.675781 30.890625 159.214844 37.261719 165.667969 39.953125 L 165.667969 133.417969 C 165.667969 144.132812 171.128906 153.867188 180.273438 159.449219 C 189.417969 165.035156 200.570312 165.449219 210.101562 160.558594 C 215.339844 157.871094 221.46875 158.097656 226.496094 161.167969 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
              </g>

              <path
                fill="#242424"
                d="M 133.597656 73.5625 C 138.203125 73.5625 141.9375 77.296875 141.9375 81.902344 C 141.9375 86.507812 138.203125 90.242188 133.597656 90.242188 C 128.988281 90.242188 125.253906 86.507812 125.253906 81.902344 C 125.253906 77.296875 128.988281 73.5625 133.597656 73.5625 Z M 126.730469 98.390625 L 126.730469 191.265625 L 133.417969 191.265625 C 135.996094 191.265625 138.429688 190.484375 140.464844 189.082031 L 140.464844 98.386719 C 146.917969 95.695312 151.453125 89.332031 151.453125 81.902344 C 151.453125 72.039062 143.457031 64.042969 133.597656 64.042969 C 123.734375 64.042969 115.738281 72.039062 115.738281 81.902344 C 115.738281 89.332031 120.273438 95.699219 126.730469 98.390625 "
                fillOpacity="1"
                fillRule="nonzero"
              />

              <g clipPath="url(#621c3da3fd)">
                <path
                  fill="#242424"
                  d="M 202.453125 359.867188 C 197.847656 359.867188 194.113281 356.136719 194.113281 351.53125 C 194.113281 346.921875 197.847656 343.1875 202.453125 343.1875 C 207.0625 343.1875 210.796875 346.921875 210.796875 351.53125 C 210.796875 356.136719 207.0625 359.867188 202.453125 359.867188 Z M 209.324219 335.039062 L 209.324219 233.917969 C 209.324219 223.203125 203.863281 213.472656 194.71875 207.882812 C 185.574219 202.300781 174.421875 201.886719 164.890625 206.777344 C 160.988281 208.777344 156.597656 209.15625 152.535156 207.960938 C 147.601562 211.203125 141.863281 213.15625 135.777344 213.558594 C 137.433594 215.1875 139.289062 216.640625 141.332031 217.886719 C 150.476562 223.476562 161.625 223.890625 171.160156 219 C 176.402344 216.308594 182.53125 216.539062 187.554688 219.609375 C 192.582031 222.679688 195.582031 228.03125 195.582031 233.917969 L 195.582031 335.042969 C 189.128906 337.734375 184.59375 344.101562 184.59375 351.53125 C 184.59375 361.394531 192.589844 369.386719 202.453125 369.386719 C 212.316406 369.386719 220.3125 361.394531 220.3125 351.53125 C 220.3125 344.101562 215.773438 337.730469 209.324219 335.039062 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
              </g>

              <g clipPath="url(#6738151a5f)">
                <path
                  fill="#737373"
                  d="M 351.53125 180.878906 C 346.921875 180.878906 343.1875 177.144531 343.1875 172.535156 C 343.1875 167.929688 346.921875 164.191406 351.53125 164.191406 C 356.132812 164.191406 359.867188 167.929688 359.867188 172.535156 C 359.867188 177.144531 356.132812 180.878906 351.53125 180.878906 Z M 351.53125 154.679688 C 344.101562 154.679688 337.730469 159.214844 335.039062 165.667969 L 233.917969 165.667969 C 223.203125 165.667969 213.472656 171.128906 207.882812 180.273438 C 202.300781 189.417969 201.886719 200.570312 206.777344 210.101562 C 207.6875 211.875 208.25 213.75 208.496094 215.648438 C 211.816406 221.03125 213.640625 227.308594 213.640625 233.917969 L 213.640625 239.132812 C 215.234375 237.5 216.660156 235.667969 217.886719 233.65625 C 223.476562 224.515625 223.890625 213.363281 219 203.828125 C 216.308594 198.589844 216.539062 192.460938 219.605469 187.433594 C 222.679688 182.410156 228.03125 179.40625 233.917969 179.40625 L 335.042969 179.40625 C 337.734375 185.859375 344.101562 190.394531 351.53125 190.394531 C 361.394531 190.394531 369.386719 182.398438 369.386719 172.535156 C 369.386719 162.671875 361.394531 154.679688 351.53125 154.679688 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
              </g>

              <path
                fill="#737373"
                d="M 81.902344 249.734375 C 77.292969 249.734375 73.558594 246 73.558594 241.394531 C 73.558594 236.789062 77.292969 233.050781 81.902344 233.050781 C 86.507812 233.050781 90.242188 236.789062 90.242188 241.394531 C 90.242188 246 86.507812 249.734375 81.902344 249.734375 Z M 191.265625 234.523438 L 98.390625 234.523438 C 95.699219 228.070312 89.332031 223.535156 81.902344 223.535156 C 72.039062 223.535156 64.042969 231.53125 64.042969 241.394531 C 64.042969 251.257812 72.039062 259.253906 81.902344 259.253906 C 89.332031 259.253906 95.699219 254.714844 98.390625 248.261719 L 191.265625 248.261719 L 191.265625 234.523438 "
                fillOpacity="1"
                fillRule="nonzero"
              />

              <g clipPath="url(#8e2ea0f1aa)">
                <path
                  fill="#a78254"
                  d="M 23.460938 210.796875 C 18.855469 210.796875 15.121094 207.0625 15.121094 202.453125 C 15.121094 197.847656 18.855469 194.113281 23.460938 194.113281 C 28.070312 194.113281 31.804688 197.847656 31.804688 202.453125 C 31.804688 207.0625 28.070312 210.796875 23.460938 210.796875 Z M 161.167969 148.496094 C 161.839844 147.398438 162.621094 146.40625 163.488281 145.511719 C 162.089844 141.710938 161.351562 137.632812 161.351562 133.417969 L 161.351562 130.164062 C 156.53125 132.671875 152.40625 136.484375 149.445312 141.332031 C 143.859375 150.476562 143.445312 161.625 148.335938 171.160156 C 151.023438 176.402344 150.796875 182.53125 147.726562 187.554688 C 144.65625 192.582031 139.308594 195.582031 133.417969 195.582031 L 39.949219 195.582031 C 37.257812 189.128906 30.890625 184.59375 23.460938 184.59375 C 13.597656 184.59375 5.601562 192.589844 5.601562 202.453125 C 5.601562 212.316406 13.597656 220.3125 23.460938 220.3125 C 30.890625 220.3125 37.261719 215.773438 39.949219 209.324219 L 133.417969 209.324219 C 144.132812 209.324219 153.863281 203.863281 159.449219 194.71875 C 165.035156 185.574219 165.449219 174.421875 160.558594 164.890625 C 157.871094 159.648438 158.097656 153.519531 161.167969 148.496094 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
              </g>

              <path
                fill="#a78254"
                d="M 293.089844 141.9375 C 288.484375 141.9375 284.746094 138.203125 284.746094 133.597656 C 284.746094 128.988281 288.484375 125.253906 293.089844 125.253906 C 297.699219 125.253906 301.429688 128.988281 301.429688 133.597656 C 301.429688 138.203125 297.699219 141.9375 293.089844 141.9375 Z M 293.089844 115.738281 C 285.660156 115.738281 279.289062 120.277344 276.597656 126.730469 L 183.722656 126.730469 L 183.722656 133.417969 C 183.722656 135.996094 184.503906 138.429688 185.90625 140.46875 L 276.601562 140.46875 C 279.292969 146.917969 285.660156 151.453125 293.089844 151.453125 C 302.953125 151.453125 310.949219 143.460938 310.949219 133.597656 C 310.949219 123.734375 302.953125 115.738281 293.089844 115.738281 "
                fillOpacity="1"
                fillRule="nonzero"
              />
            
          </svg>
          <svg
            id="faako-logo-dark"
            className="faako-logo faako-logo--dark"
            viewBox="0 0 375 374.999991"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="Faako logo"
          >
            <defs>
                <clipPath id="fc7f98da92-dark">
                  <path
                    d="M 154 5.601562 L 245 5.601562 L 245 164 L 154 164 Z M 154 5.601562 "
                    clipRule="nonzero"
                  />
                </clipPath>
                <clipPath id="621c3da3fd-dark">
                  <path
                    d="M 135 203 L 221 203 L 221 369.351562 L 135 369.351562 Z M 135 203 "
                    clipRule="nonzero"
                  />
                </clipPath>
                <clipPath id="6738151a5f-dark">
                  <path
                    d="M 203 154 L 369.351562 154 L 369.351562 240 L 203 240 Z M 203 154 "
                    clipRule="nonzero"
                  />
                </clipPath>
                <clipPath id="8e2ea0f1aa-dark">
                  <path
                    d="M 5.601562 130 L 164 130 L 164 221 L 5.601562 221 Z M 5.601562 130 "
                    clipRule="nonzero"
                  />
                </clipPath>
              </defs>

              <path
                fill="#fff"
                d="M 241.394531 301.429688 C 236.789062 301.429688 233.050781 297.699219 233.050781 293.089844 C 233.050781 288.484375 236.789062 284.746094 241.394531 284.746094 C 246 284.746094 249.734375 288.484375 249.734375 293.089844 C 249.734375 297.699219 246 301.429688 241.394531 301.429688 Z M 248.261719 276.597656 L 248.261719 183.722656 L 234.523438 183.722656 L 234.523438 276.601562 C 228.070312 279.292969 223.535156 285.660156 223.535156 293.089844 C 223.535156 302.953125 231.53125 310.949219 241.394531 310.949219 C 251.257812 310.949219 259.253906 302.953125 259.253906 293.089844 C 259.253906 285.660156 254.714844 279.289062 248.261719 276.597656 "
                fillOpacity="1"
                fillRule="nonzero"
              />

              <g clipPath="url(#fc7f98da92-dark)">
                <path
                  fill="#fff"
                  d="M 172.535156 31.804688 C 167.929688 31.804688 164.195312 28.070312 164.195312 23.460938 C 164.195312 18.855469 167.929688 15.121094 172.535156 15.121094 C 177.144531 15.121094 180.878906 18.855469 180.878906 23.460938 C 180.878906 28.070312 177.144531 31.804688 172.535156 31.804688 Z M 226.496094 161.167969 C 226.882812 161.40625 227.253906 161.660156 227.617188 161.921875 C 229.671875 161.550781 231.773438 161.351562 233.917969 161.351562 L 244.828125 161.351562 C 242.316406 156.53125 238.503906 152.40625 233.65625 149.445312 C 224.515625 143.859375 213.363281 143.445312 203.828125 148.339844 C 198.589844 151.027344 192.460938 150.796875 187.433594 147.726562 C 182.40625 144.65625 179.40625 139.308594 179.40625 133.417969 L 179.40625 39.949219 C 185.859375 37.257812 190.394531 30.890625 190.394531 23.460938 C 190.394531 13.597656 182.398438 5.601562 172.535156 5.601562 C 162.671875 5.601562 154.675781 13.597656 154.675781 23.460938 C 154.675781 30.890625 159.214844 37.261719 165.667969 39.953125 L 165.667969 133.417969 C 165.667969 144.132812 171.128906 153.867188 180.273438 159.449219 C 189.417969 165.035156 200.570312 165.449219 210.101562 160.558594 C 215.339844 157.871094 221.46875 158.097656 226.496094 161.167969 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
              </g>

              <path
                fill="#fff"
                d="M 133.597656 73.5625 C 138.203125 73.5625 141.9375 77.296875 141.9375 81.902344 C 141.9375 86.507812 138.203125 90.242188 133.597656 90.242188 C 128.988281 90.242188 125.253906 86.507812 125.253906 81.902344 C 125.253906 77.296875 128.988281 73.5625 133.597656 73.5625 Z M 126.730469 98.390625 L 126.730469 191.265625 L 133.417969 191.265625 C 135.996094 191.265625 138.429688 190.484375 140.464844 189.082031 L 140.464844 98.386719 C 146.917969 95.695312 151.453125 89.332031 151.453125 81.902344 C 151.453125 72.039062 143.457031 64.042969 133.597656 64.042969 C 123.734375 64.042969 115.738281 72.039062 115.738281 81.902344 C 115.738281 89.332031 120.273438 95.699219 126.730469 98.390625 "
                fillOpacity="1"
                fillRule="nonzero"
              />

              <g clipPath="url(#621c3da3fd-dark)">
                <path
                  fill="#fff"
                  d="M 202.453125 359.867188 C 197.847656 359.867188 194.113281 356.136719 194.113281 351.53125 C 194.113281 346.921875 197.847656 343.1875 202.453125 343.1875 C 207.0625 343.1875 210.796875 346.921875 210.796875 351.53125 C 210.796875 356.136719 207.0625 359.867188 202.453125 359.867188 Z M 209.324219 335.039062 L 209.324219 233.917969 C 209.324219 223.203125 203.863281 213.472656 194.71875 207.882812 C 185.574219 202.300781 174.421875 201.886719 164.890625 206.777344 C 160.988281 208.777344 156.597656 209.15625 152.535156 207.960938 C 147.601562 211.203125 141.863281 213.15625 135.777344 213.558594 C 137.433594 215.1875 139.289062 216.640625 141.332031 217.886719 C 150.476562 223.476562 161.625 223.890625 171.160156 219 C 176.402344 216.308594 182.53125 216.539062 187.554688 219.609375 C 192.582031 222.679688 195.582031 228.03125 195.582031 233.917969 L 195.582031 335.042969 C 189.128906 337.734375 184.59375 344.101562 184.59375 351.53125 C 184.59375 361.394531 192.589844 369.386719 202.453125 369.386719 C 212.316406 369.386719 220.3125 361.394531 220.3125 351.53125 C 220.3125 344.101562 215.773438 337.730469 209.324219 335.039062 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
              </g>

              <g clipPath="url(#6738151a5f-dark)">
                <path
                  fill="#fff"
                  d="M 351.53125 180.878906 C 346.921875 180.878906 343.1875 177.144531 343.1875 172.535156 C 343.1875 167.929688 346.921875 164.191406 351.53125 164.191406 C 356.132812 164.191406 359.867188 167.929688 359.867188 172.535156 C 359.867188 177.144531 356.132812 180.878906 351.53125 180.878906 Z M 351.53125 154.679688 C 344.101562 154.679688 337.730469 159.214844 335.039062 165.667969 L 233.917969 165.667969 C 223.203125 165.667969 213.472656 171.128906 207.882812 180.273438 C 202.300781 189.417969 201.886719 200.570312 206.777344 210.101562 C 207.6875 211.875 208.25 213.75 208.496094 215.648438 C 211.816406 221.03125 213.640625 227.308594 213.640625 233.917969 L 213.640625 239.132812 C 215.234375 237.5 216.660156 235.667969 217.886719 233.65625 C 223.476562 224.515625 223.890625 213.363281 219 203.828125 C 216.308594 198.589844 216.539062 192.460938 219.605469 187.433594 C 222.679688 182.410156 228.03125 179.40625 233.917969 179.40625 L 335.042969 179.40625 C 337.734375 185.859375 344.101562 190.394531 351.53125 190.394531 C 361.394531 190.394531 369.386719 182.398438 369.386719 172.535156 C 369.386719 162.671875 361.394531 154.679688 351.53125 154.679688 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
              </g>

              <path
                fill="#fff"
                d="M 81.902344 249.734375 C 77.292969 249.734375 73.558594 246 73.558594 241.394531 C 73.558594 236.789062 77.292969 233.050781 81.902344 233.050781 C 86.507812 233.050781 90.242188 236.789062 90.242188 241.394531 C 90.242188 246 86.507812 249.734375 81.902344 249.734375 Z M 191.265625 234.523438 L 98.390625 234.523438 C 95.699219 228.070312 89.332031 223.535156 81.902344 223.535156 C 72.039062 223.535156 64.042969 231.53125 64.042969 241.394531 C 64.042969 251.257812 72.039062 259.253906 81.902344 259.253906 C 89.332031 259.253906 95.699219 254.714844 98.390625 248.261719 L 191.265625 248.261719 L 191.265625 234.523438 "
                fillOpacity="1"
                fillRule="nonzero"
              />

              <g clipPath="url(#8e2ea0f1aa-dark)">
                <path
                  fill="#fff"
                  d="M 23.460938 210.796875 C 18.855469 210.796875 15.121094 207.0625 15.121094 202.453125 C 15.121094 197.847656 18.855469 194.113281 23.460938 194.113281 C 28.070312 194.113281 31.804688 197.847656 31.804688 202.453125 C 31.804688 207.0625 28.070312 210.796875 23.460938 210.796875 Z M 161.167969 148.496094 C 161.839844 147.398438 162.621094 146.40625 163.488281 145.511719 C 162.089844 141.710938 161.351562 137.632812 161.351562 133.417969 L 161.351562 130.164062 C 156.53125 132.671875 152.40625 136.484375 149.445312 141.332031 C 143.859375 150.476562 143.445312 161.625 148.335938 171.160156 C 151.023438 176.402344 150.796875 182.53125 147.726562 187.554688 C 144.65625 192.582031 139.308594 195.582031 133.417969 195.582031 L 39.949219 195.582031 C 37.257812 189.128906 30.890625 184.59375 23.460938 184.59375 C 13.597656 184.59375 5.601562 192.589844 5.601562 202.453125 C 5.601562 212.316406 13.597656 220.3125 23.460938 220.3125 C 30.890625 220.3125 37.261719 215.773438 39.949219 209.324219 L 133.417969 209.324219 C 144.132812 209.324219 153.863281 203.863281 159.449219 194.71875 C 165.035156 185.574219 165.449219 174.421875 160.558594 164.890625 C 157.871094 159.648438 158.097656 153.519531 161.167969 148.496094 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
              </g>

              <path
                fill="#fff"
                d="M 293.089844 141.9375 C 288.484375 141.9375 284.746094 138.203125 284.746094 133.597656 C 284.746094 128.988281 288.484375 125.253906 293.089844 125.253906 C 297.699219 125.253906 301.429688 128.988281 301.429688 133.597656 C 301.429688 138.203125 297.699219 141.9375 293.089844 141.9375 Z M 293.089844 115.738281 C 285.660156 115.738281 279.289062 120.277344 276.597656 126.730469 L 183.722656 126.730469 L 183.722656 133.417969 C 183.722656 135.996094 184.503906 138.429688 185.90625 140.46875 L 276.601562 140.46875 C 279.292969 146.917969 285.660156 151.453125 293.089844 151.453125 C 302.953125 151.453125 310.949219 143.460938 310.949219 133.597656 C 310.949219 123.734375 302.953125 115.738281 293.089844 115.738281 "
                fillOpacity="1"
                fillRule="nonzero"
              />
            
          </svg>

          <figcaption>Everything, Together.</figcaption>
          </figure>

        </div>
      </section>

      <section
        className="page section tools-tabs reveal scroll-reveal"
        style={{ "--delay": "160ms" }}
        data-scroll
      >
        <div className="section-header">
          <p className="eyebrow">Tools</p>
          <h2>The features that keep Faako grounded.</h2>
        </div>

        <div className="tools-tab-menu">
          <div className="tools-tab-buttons">
            {toolsTabContent.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`tools-tab-button ${
                  activeToolId === tab.id ? "is-active" : ""
                }`}
                onClick={() => setActiveToolId(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="tools-tab-panel" data-scroll>
            {toolsTabContent.map((tab) => (
              <div
                key={tab.id}
                className={`tools-tab-panel-card ${
                  tab.id === activeToolId ? "is-visible" : ""
                }`}
                role="tabpanel"
                aria-hidden={tab.id !== activeToolId}
              >
                <div className="tools-tab-panel-copy">
                  <h3>{tab.title}</h3>
                  <p>{tab.text}</p>
                  <ul>
                    {tab.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>

                <figure className="tools-tab-figure">
                  <img
                    src="/assets/images/dynamic-grid.svg"
                    alt="Floating grid illustration"
                    loading="lazy"
                  />
                  <figcaption>Soft geometry mirrors the calm Faako workflow.</figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="page visual-section reveal scroll-reveal"
        style={{ "--delay": "220ms" }}
        data-scroll
      >
        <div className="visual-section-header">
          <p className="eyebrow">Visual Pulse</p>
          <h2>The modules that keep Faako unified.</h2>
          <p className="lead">
            Every face of Faako moves together—finance, operations, and people use
            one clear visual language so nothing falls out of sync.
          </p>
        </div>

        <div className="visual-card-row">
          <article className="visual-card card-primary">
            <span className="pill">Faako Finance</span>
            <h3>Automated close</h3>
            <p>Bookkeeping, compliance, and multi-currency reporting.</p>
            <div className="signal">
              <span />
              <span />
              <span />
            </div>
          </article>

          <article className="visual-card">
            <span className="pill">Faako Ops</span>
            <h3>Supply chain pulse</h3>
            <p>Real-time inventory tracking and ordering clarity.</p>
            <div className="chip-row">
              <span className="chip">Inventory</span>
              <span className="chip">Supply chain</span>
            </div>
          </article>

          <article className="visual-card card-muted">
            <span className="pill">Faako Talent</span>
            <h3>People in focus</h3>
            <p>Payroll, performance, and recruitment in one view.</p>
          </article>
        </div>
      </section>

      <section
        className="page ribbon reveal scroll-reveal"
        style={{ "--delay": "220ms" }}
        data-scroll
      >
        <p>One Place. Zero Friction.</p>
        <div className="ribbon-tags">
          <span>Finance</span>
          <span>Inventory</span>
          <span>People</span>
          <span>Customers</span>
          <span>Analytics</span>
        </div>
      </section>

      <section className="page section" id="platform">
        <div className="section-header reveal" style={{ "--delay": "0ms" }}>
          <p className="eyebrow">Why Faako?</p>
          <h2>One system. One truth.</h2>
          <p className="lead">
            Faako is the single source of truth for modern enterprises that
            want to move fast with unified data.
          </p>
        </div>

        <div className="feature-grid" data-scroll>
          <article
            className="feature-card reveal scroll-reveal"
            style={{ "--delay": "120ms" }}
          >
            <h3>One Place. Zero Friction.</h3>
            <p>
              In Fante, Faako means "One Place." We built this ERP because
              business should not be scattered. When your data lives in one
              place, your team moves at one speed: fast.
            </p>
          </article>

          <article
            className="feature-card reveal scroll-reveal"
            style={{ "--delay": "200ms" }}
          >
            <h3>Unified Intelligence</h3>
            <p>
              From the warehouse to the boardroom, Faako connects the dots.
              Real-time analytics give you a 360-degree view of your operations
              so you can make decisions based on facts, not feelings.
            </p>
          </article>

          <article
            className="feature-card reveal scroll-reveal"
            style={{ "--delay": "280ms" }}
          >
            <h3>Built for Scale</h3>
            <p>
              Whether you are a growing startup in Accra or a multinational
              corporation, Faako scales with you. Modular features allow you to
              activate exactly what you need, nothing more, nothing less.
            </p>
          </article>
        </div>
      </section>

      <section className="page section split" id="workflow">
        <div className="workflow-copy reveal" style={{ "--delay": "0ms" }}>
          <p className="eyebrow">Single Source of Truth</p>
          <h2>Everything connected. Faako.</h2>
          <p className="lead">
            When finance, inventory, and people share one data backbone, every
            decision is grounded in reality.
          </p>
          <Link className="button button-ghost" to="/signup">
            Request a Demo
          </Link>
        </div>

        <div className="workflow-steps" data-scroll>
          <div className="step reveal scroll-reveal" style={{ "--delay": "120ms" }}>
            <span>01</span>
            <div>
              <h4>Unify your data</h4>
              <p>Bring finance, inventory, and people records into one view.</p>
            </div>
          </div>

          <div className="step reveal scroll-reveal" style={{ "--delay": "200ms" }}>
            <span>02</span>
            <div>
              <h4>Align your teams</h4>
              <p>Everyone works from the same numbers and approvals.</p>
            </div>
          </div>

          <div className="step reveal scroll-reveal" style={{ "--delay": "280ms" }}>
            <span>03</span>
            <div>
              <h4>Act with confidence</h4>
              <p>Real-time dashboards show what is happening right now.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page section" id="modules">
        <div className="section-header reveal" style={{ "--delay": "0ms" }}>
          <p className="eyebrow">Modules</p>
          <h2>Product features that run the business.</h2>
          <p className="lead">Activate only what you need, when you need it.</p>
        </div>

        <div className="modules-body" data-scroll>
          <div
            className="modules-visuals reveal scroll-reveal"
            style={{ "--delay": "120ms" }}
          >
            <figure className="module-figure soft-grid" data-scroll>
              <img
                src="/assets/images/dynamic-grid.svg"
                alt="Dynamic grid inspiration"
                loading="lazy"
              />
              <figcaption>Each module plays a gentle role in the same grid.</figcaption>
            </figure>
          </div>

          <div className="module-grid" data-scroll>
            <article
              className="module-card reveal scroll-reveal"
              style={{ "--delay": "120ms" }}
            >
              <h3>Faako Finance</h3>
              <p>Automated bookkeeping, tax compliance, and multi-currency reporting.</p>
            </article>
            <article
              className="module-card reveal scroll-reveal"
              style={{ "--delay": "180ms" }}
            >
              <h3>Faako Ops</h3>
              <p>Real-time inventory tracking and supply chain management.</p>
            </article>
            <article
              className="module-card reveal scroll-reveal"
              style={{ "--delay": "240ms" }}
            >
              <h3>Faako Talent</h3>
              <p>A complete HR suite for payroll, performance, and recruitment.</p>
            </article>
            <article
              className="module-card reveal scroll-reveal"
              style={{ "--delay": "300ms" }}
            >
              <h3>Faako CRM</h3>
              <p>Manage your customer relationships and sales pipeline in one view.</p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="page section install-modules reveal scroll-reveal"
        style={{ "--delay": "0ms" }}
        id="installables"
      >
        <div className="section-header">
          <p className="eyebrow">Installable Modules</p>
          <h2>Activate exactly what your team needs.</h2>
          <p className="lead">
            Pick the Faako modules that make sense for your stack. Each plug-in installs
            instantly on the same data core, so finance, operations, and people stay harmonized.
          </p>
        </div>

        <div className="install-module-grid" data-scroll>
          {installableModules.map((module, index) => (
            <article
              key={module.label}
              className="install-module-pill reveal scroll-reveal"
              style={{ "--delay": `${80 + index * 30}ms` }}
            >
              <span className="module-pill-icon">
                <FontAwesomeIcon icon={module.icon} />
              </span>
              <div>
                <h3>{module.label}</h3>
                <p>{module.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page section story">
        <div className="section-header reveal" style={{ "--delay": "0ms" }}>
          <p className="eyebrow">Brand Story</p>
          <h2>The Power of Unity.</h2>
        </div>

        <div className="story-grid" data-scroll>
          <div className="testimonial-grid">
            <article className="testimonial-card reveal" style={{ "--delay": "140ms" }}>
              <p>
                Faako was born from a simple observation: African businesses are
                among the most resilient in the world, but they are often slowed
                down by fragmented systems. We took a word that represents
                "oneness" and built a technology that represents "efficiency."
              </p>
              <span>Ghana to Global</span>
            </article>

            <article className="testimonial-card reveal" style={{ "--delay": "220ms" }}>
              <p>
                Faako is more than an ERP; it is a commitment to bringing order to
                complexity. We are proud of our Ghanaian roots and built this to
                empower businesses everywhere to operate with world-class
                precision.
              </p>
              <span>Built for unity</span>
            </article>
          </div>
        </div>
      </section>

      <section className="page cta reveal" style={{ "--delay": "0ms" }}>
        <div>
          <h2>Ready to unite your data?</h2>
          <p className="lead">Start free or book a demo to see Faako in action.</p>
        </div>
        <div className="cta-actions">
          <PrimaryButton to="/signup">Get Started for Free</PrimaryButton>
          <Link className="button button-ghost" to="/signup">
            Request a Demo
          </Link>
        </div>
      </section>
    </>
  );
}
