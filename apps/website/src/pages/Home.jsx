/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faBoxArchive,
  faBoxesStacked,
  faBullhorn,
  faCalendarCheck,
  faCalendarDays,
  faCartShopping,
  faChartLine,
  faChartPie,
  faClock,
  faFileInvoiceDollar,
  faFolderOpen,
  faGear,
  faGlobe,
  faArrowRight,
  faHandshake,
  faHeadset,
  faMoneyBillWave,
  faPenToSquare,
  faPlug,
  faReceipt,
  faRoute,
  faShield,
  faTruck,
  faUserShield,
  faUserTie,
  faWrench,
  faCheck,
  faTimes,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../components/PrimaryButton.jsx";
import TrustedBy from "../components/TrustedBy.jsx";
import Testimonials from "../components/Testimonials.jsx";
import FaqSection from "../components/FaqSection.jsx";
import WhatsApp from "../components/WhatsApp.jsx";

export default function Home() {
  const trustApiBase = (import.meta.env.VITE_KPI_BASE_URL || "").replace(/\/$/, "");
  const [activeTab, setActiveTab] = useState("insights");
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [ordersPerDay, setOrdersPerDay] = useState(50);
  const [errorCost, setErrorCost] = useState(500);
  const [trustStats, setTrustStats] = useState({
    monthlyTransactions: null,
    inventoryItems: null,
    locations: null,
  });

  // Calculate ROI
  const timeSavings = hoursPerWeek * 52 * 50; // ₵50/hour value
  const errorSavings = ordersPerDay * 365 * 0.02 * errorCost; // 2% error rate
  const totalSavings = timeSavings + errorSavings;

  useEffect(() => {
    if (!trustApiBase) return;
    const controller = new AbortController();

    const loadTrustStats = async () => {
      try {
        const response = await fetch(`${trustApiBase}/api/public/trust-stats`, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error("Unable to load trust stats");
        }
        const payload = await response.json();
        const monthlyTransactions = Number(payload?.monthlyTransactions?.amount);
        const inventoryItems = Number(payload?.inventoryItems);
        const locations = Number(payload?.locations);

        setTrustStats({
          monthlyTransactions: Number.isFinite(monthlyTransactions) ? monthlyTransactions : null,
          inventoryItems: Number.isFinite(inventoryItems) ? inventoryItems : null,
          locations: Number.isFinite(locations) ? locations : null,
        });
      } catch (error) {
        if (error.name !== "AbortError") {
          console.warn("Trust stats fetch failed", error);
        }
      }
    };

    loadTrustStats();
    return () => controller.abort();
  }, [trustApiBase]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const nodes = document.querySelectorAll("[data-scroll]");
    nodes.forEach((node) => observer.observe(node));

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
    return () => observer.disconnect();
  }, []);

  const formatCount = (value) => {
    if (!Number.isFinite(value)) return "--";
    return `${Math.round(value).toLocaleString("en-US")}+`;
  };

  const formatCurrencyGhs = (value) => {
    if (!Number.isFinite(value)) return "—";
    const formatted = new Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(value);
    return `₵${formatted}+`;
  };

  return (
    <>
      <section className="page hero">
        <div className="hero-copy reveal" style={{ "--delay": "0ms" }}>
          <p className="eyebrow">Designed for Modern Teams</p>
          <h1>One System. Zero Guesswork.</h1>
        </div>

        <div className="hero-lead reveal" style={{ "--delay": "80ms" }}>
          <p className="lead">
            Stop juggling disconnected apps and constant technical headaches. 
            Faako provides the unified data backbone Ghanaian enterprises need to compete and grow on a world-class level.
          </p>
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
          </figure>

        </div>

        <div className="hero-actions">
          <PrimaryButton to="/contact">Book a Consultation</PrimaryButton>
          <Link className="button button-ghost" to="/contact">
            View ERP Features
          </Link>
        </div>

        <div className="hero-metrics">
          <div className="metric">
            <span>Audit</span>
            <p>Workflows mapped</p>
          </div>
          <div className="metric">
            <span>Deploy</span>
            <p>Custom ERP setup</p>
          </div>
          <div className="metric" data-scroll>
            <span>Sustain</span>
            <p>24/7 Tech Advisory</p>
          </div>
        </div>
      </section>

      {/*<TrustedBy
        className="page trust-strip"
        headerScroll
        eyebrow="Trusted By"
        title="Teams who run on Faako"
        lead="From fast-moving operators to multi-location teams, Faako keeps everyone aligned."
        logos={[
          "REEBS Party Themes",
          "Atlas Rentals",
          "Northbridge",
          "Summit Events",
          "Clearline Logistics",
          "VentureWorks",
        ]}
      /> */}

      {/* Social Proof Section */}
      <section className="page trust-indicators">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">Growing Strong in Ghana</p>
          <h2>Join 100+ Businesses Already Running on Faako</h2>
          <p className="lead">Real companies, real growth, real results across Greater Accra and beyond.</p>
        </div>
        
        <div className="trust-stats reveal" data-scroll style={{ "--delay": "100ms" }}>
          <div className="trust-stat">
            <strong className="stat-value">
              {formatCurrencyGhs(trustStats.monthlyTransactions)}
            </strong>
            <p className="stat-label">In transactions processed monthly</p>
            <small>And growing every single day</small>
          </div>
          <div className="trust-stat">
            <strong className="stat-value">{formatCount(trustStats.inventoryItems)}</strong>
            <p className="stat-label">Inventory items managed</p>
            <small>Tracked across warehouses and storefronts</small>
          </div>
          <div className="trust-stat">
            <strong className="stat-value">{formatCount(trustStats.locations)}</strong>
            <p className="stat-label">Locations across Ghana</p>
            <small>Accra, Kumasi, Tema, Takoradi & more</small>
          </div>
        </div>
        
        <div className="industry-badges reveal" data-scroll style={{ "--delay": "200ms" }}>
          <h3>Trusted Across Industries</h3>
          <div className="badge-grid">
            <span className="industry-badge">🚚 Logistics</span>
            <span className="industry-badge">🏪 Retail</span>
            <span className="industry-badge">🎉 Events</span>
            <span className="industry-badge">🏭 Manufacturing</span>
            <span className="industry-badge">📦 Distribution</span>
            <span className="industry-badge">🏗️ Construction</span>
          </div>
        </div>
      </section>

      <section id="features" className="page features-section">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">Tools</p>
          <h2>The features that keep Faako grounded.</h2>
        </div>
        <div className="tools-tabs reveal" data-scroll>
          <div className="tools-tab-menu">
            <div className="tools-tab-buttons" role="tablist" aria-label="Module highlights">
              <button
                type="button"
                id="tools-tab-insights"
                data-icon="I"
                className={`tools-tab-button ${activeTab === "insights" ? "is-active" : ""}`}
                role="tab"
                aria-selected={activeTab === "insights"}
                aria-controls="tools-panel-insights"
                tabIndex={activeTab === "insights" ? 0 : -1}
                onClick={() => setActiveTab("insights")}
              >
                Insights
              </button>
              <button
                type="button"
                id="tools-tab-workflow"
                data-icon="W"
                className={`tools-tab-button ${activeTab === "workflow" ? "is-active" : ""}`}
                role="tab"
                aria-selected={activeTab === "workflow"}
                aria-controls="tools-panel-workflow"
                tabIndex={activeTab === "workflow" ? 0 : -1}
                onClick={() => setActiveTab("workflow")}
              >
                Workflow
              </button>
              <button
                type="button"
                id="tools-tab-automations"
                data-icon="A"
                className={`tools-tab-button ${activeTab === "automations" ? "is-active" : ""}`}
                role="tab"
                aria-selected={activeTab === "automations"}
                aria-controls="tools-panel-automations"
                tabIndex={activeTab === "automations" ? 0 : -1}
                onClick={() => setActiveTab("automations")}
              >
                Automations
              </button>
            </div>

            <div className="tools-tab-panel">
              <div
                id="tools-panel-insights"
                className={`tools-tab-panel-card ${activeTab === "insights" ? "is-visible" : ""}`}
                role="tabpanel"
                aria-labelledby="tools-tab-insights"
                aria-hidden={activeTab !== "insights"}
              >
                <figure className="tools-tab-figure">
                  <img src="/imgs/demo/faako-erp-dashboard.png" alt="Insights dashboard preview" />
                </figure>
              </div>

              <div
                id="tools-panel-workflow"
                className={`tools-tab-panel-card ${activeTab === "workflow" ? "is-visible" : ""}`}
                role="tabpanel"
                aria-labelledby="tools-tab-workflow"
                aria-hidden={activeTab !== "workflow"}
              >
                <figure className="tools-tab-figure">
                  <img src="/imgs/demo/faako-erp-orders.png" alt="Workflow management preview" />
                </figure>
              </div>

              <div
                id="tools-panel-automations"
                className={`tools-tab-panel-card ${activeTab === "automations" ? "is-visible" : ""}`}
                role="tabpanel"
                aria-labelledby="tools-tab-automations"
                aria-hidden={activeTab !== "automations"}
              >
                <figure className="tools-tab-figure">
                  <img src="/imgs/demo/faako-erp-reports.png" alt="Automation overview preview" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="page video-demo">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">See It In Action</p>
          <h2>Watch Faako Transform a Real Business in 90 Seconds</h2>
        </div>
        
        <div className="video-container reveal" data-scroll style={{ "--delay": "100ms" }}>
          <div className="video-wrapper">
            {/* Replace with your actual video URL */}
            <div className="video-placeholder">
              <div className="video-play-button">
                <FontAwesomeIcon icon={faArrowRight} />
                <span>Play Demo</span>
              </div>
              <img src="/imgs/demo/video-thumbnail.png" alt="Faako demo video thumbnail" />
            </div>
            {/* When you have the video, replace above with: */}
            {/* <iframe 
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Faako ERP Demo - See How It Works"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
              allowFullScreen
            /> */}
          </div>
          <div className="video-caption">
            <h3>From Excel Chaos to Dashboard Clarity</h3>
            <p>Watch how Emmanuel from Tema Logistics went from spending 3 hours on daily reports to just 5 minutes — and never looked back.</p>
            <div className="video-stats">
              <span><FontAwesomeIcon icon={faCheckCircle} /> 4-week setup</span>
              <span><FontAwesomeIcon icon={faCheckCircle} /> Zero downtime</span>
              <span><FontAwesomeIcon icon={faCheckCircle} /> 100% team adoption</span>
            </div>
          </div>
        </div>
      </section>

      <section className="page split how-it-works">
        <div className="workflow-copy reveal" data-scroll>
          <p className="eyebrow">No Stress Process</p>
          <h2>We Handle Everything While You Run Your Business</h2>
          <p className="lead">
            No long manuals. No IT headaches. We map your current hustle, build the system, 
            and train your team — all while your operations keep flowing.
          </p>
        </div>
        <div className="workflow-steps">
          <div className="step reveal scroll-reveal" data-scroll style={{ "--delay": "80ms" }}>
            <span>01</span>
            <div>
              <h3>We Visit & Learn Your Flow</h3>
              <p className="muted">Sit with your team, understand the real processes — not just what's on paper.</p>
            </div>
          </div>
          <div className="step reveal scroll-reveal" data-scroll style={{ "--delay": "160ms" }}>
            <span>02</span>
            <div>
              <h3>Build Your Custom System</h3>
              <p className="muted">Configure modules, connect Mobile Money, Slack, WhatsApp — whatever you use.</p>
            </div>
          </div>
          <div className="step reveal scroll-reveal" data-scroll style={{ "--delay": "240ms" }}>
            <span>03</span>
            <div>
              <h3>Train & Launch Together</h3>
              <p className="muted">Phased rollout with training, KPI tracking, and optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="page roi-calculator">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">Calculate Your Savings</p>
          <h2>How Much Is Chaos Actually Costing You?</h2>
          <p className="lead">Move the sliders to see your potential annual savings with Faako</p>
        </div>
        
        <div className="calculator-container">
          <div className="calculator-inputs reveal" data-scroll>
            <div className="calc-input-group">
              <label>
                <span className="label-text">Hours per week on manual data entry & reconciliation</span>
                <input 
                  type="range" 
                  min="1" 
                  max="40" 
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="calc-slider"
                />
                <span className="value-display">{hoursPerWeek} hours/week</span>
              </label>
            </div>
            
            <div className="calc-input-group">
              <label>
                <span className="label-text">Orders or transactions you process daily</span>
                <input 
                  type="range" 
                  min="10" 
                  max="500"
                  step="10"
                  value={ordersPerDay}
                  onChange={(e) => setOrdersPerDay(Number(e.target.value))}
                  className="calc-slider"
                />
                <span className="value-display">{ordersPerDay} orders/day</span>
              </label>
            </div>
            
            <div className="calc-input-group">
              <label>
                <span className="label-text">Average cost when mistakes happen (wrong orders, inventory errors)</span>
                <input 
                  type="range" 
                  min="50" 
                  max="5000" 
                  step="50"
                  value={errorCost}
                  onChange={(e) => setErrorCost(Number(e.target.value))}
                  className="calc-slider"
                />
                <span className="value-display">₵{errorCost.toLocaleString()} per error</span>
              </label>
            </div>
          </div>
          
          <div className="calculator-results reveal" data-scroll style={{ "--delay": "150ms" }}>
            <h3>Your Potential Annual Savings</h3>
            <div className="savings-breakdown">
              <div className="savings-item">
                <div className="savings-amount">₵{timeSavings.toLocaleString()}</div>
                <p className="savings-label">Time saved annually</p>
                <small>(valued at ₵50/hour)</small>
              </div>
              <div className="savings-divider">+</div>
              <div className="savings-item">
                <div className="savings-amount">₵{errorSavings.toLocaleString()}</div>
                <p className="savings-label">Fewer costly errors</p>
                <small>(assuming 2% error rate reduced by 80%)</small>
              </div>
              <div className="savings-divider">=</div>
              <div className="savings-item total-savings">
                <div className="savings-amount highlight">₵{totalSavings.toLocaleString()}</div>
                <p className="savings-label">Total annual savings</p>
              </div>
            </div>
            <div className="calculator-cta">
              <p className="roi-multiplier">
                That's <strong>{Math.round(totalSavings / 6500)}x</strong> your Faako Growth plan subscription cost!
              </p>
              <p className="roi-note">
                Plus the time you'll save to actually grow your business instead of fighting with spreadsheets.
              </p>
              <PrimaryButton to="/contact">Show Me How to Get There</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      <section id="consulting" className="page consulting-section">
        <div className="section-bg" aria-hidden="true">
          {/* Add background SVGs here */}
        </div>
        <div className="section-media">
          {/* Add image elements here */}
        </div>
        <div
          className="section-header reveal"
          style={{ "--delay": "0ms" }}
          data-scroll
        >
          <h2>More Than Software — We're Your Tech Partners</h2>
          <p>
            Every Ghanaian business is unique. Cookie-cutter solutions don't work. 
            That's why we build WITH you, not just FOR you.
          </p>
        </div>
        <div className="consulting-body">
          <figure
            className="consulting-logo-card reveal scroll-reveal"
            style={{ "--delay": "120ms" }}
            data-scroll
          >
            <svg
              className="faako-logo consulting-logo"
              viewBox="0 0 375 374.999991"
              preserveAspectRatio="xMidYMid meet"
              role="img"
              aria-label="Faako logo blueprint"
            >
              <defs>
                <clipPath id="logo2white-clip-consulting">
                  <path
                    d="M 37.5 1.875 L 339 1.875 L 339 373.125 L 37.5 373.125 Z M 37.5 1.875"
                    clipRule="nonzero"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#logo2white-clip-consulting)">
                <path
                  fill="currentColor"
                  d="M 74.933594 144.785156 C 95.671875 144.785156 112.8125 128.15625 112.8125 107.476562 C 112.8125 86.8125 95.671875 69.71875 74.933594 69.71875 C 54.207031 69.71875 37.515625 86.8125 37.515625 107.476562 C 37.515625 128.15625 54.207031 144.785156 74.933594 144.785156 Z M 301.242188 144.785156 C 321.980469 144.785156 338.65625 128.15625 338.65625 107.476562 C 338.65625 86.8125 321.980469 69.71875 301.242188 69.71875 C 280.515625 69.71875 263.835938 86.8125 263.835938 107.476562 C 263.835938 128.15625 280.515625 144.785156 301.242188 144.785156 Z M 301.242188 126.355469 C 312.066406 126.355469 320.179688 117.824219 320.179688 107.476562 C 320.179688 97.144531 312.066406 88.597656 301.242188 88.597656 C 290.878906 88.597656 282.316406 97.144531 282.316406 107.476562 C 282.316406 117.824219 290.875 126.355469 301.242188 126.355469 Z M 188.09375 76.925781 C 209.28125 76.925781 225.957031 59.835938 225.957031 39.167969 C 225.957031 18.9375 209.28125 1.875 188.09375 1.875 C 167.351562 1.875 150.675781 18.9375 150.675781 39.167969 C 150.675781 59.832031 167.351562 76.925781 188.09375 76.925781 Z M 188.09375 58.046875 C 198.917969 58.046875 207.480469 49.949219 207.480469 39.167969 C 207.480469 28.820312 198.917969 20.292969 188.09375 20.292969 C 177.730469 20.292969 169.167969 28.824219 169.167969 39.167969 C 169.167969 49.949219 177.730469 58.046875 188.09375 58.046875 Z M 56.453125 225.226562 L 56.453125 200.066406 C 56.453125 189.734375 65.015625 181.1875 75.394531 181.1875 C 85.757812 181.1875 93.871094 189.734375 93.871094 200.066406 L 93.871094 231.523438 L 112.8125 231.523438 L 112.8125 200.066406 C 112.8125 179.386719 95.671875 162.753906 75.394531 162.753906 C 54.652344 162.757812 37.515625 179.386719 37.515625 200.066406 L 37.515625 234.21875 C 37.515625 249.957031 50.140625 262.539062 65.925781 262.539062 L 93.871094 262.539062 L 93.871094 335.785156 C 93.871094 356.019531 110.996094 373.097656 131.75 373.097656 C 152.476562 373.097656 169.167969 356.019531 169.167969 335.785156 L 169.167969 274.671875 L 150.675781 274.671875 L 150.675781 335.785156 C 150.675781 345.671875 142.113281 354.21875 131.75 354.21875 C 121.375 354.21875 112.8125 345.671875 112.8125 335.785156 L 112.8125 262.539062 L 207.035156 262.539062 L 207.035156 335.785156 C 207.035156 356.019531 224.15625 373.097656 244.898438 373.097656 C 265.175781 373.097656 282.316406 356.019531 282.316406 335.785156 L 282.316406 274.671875 L 263.375 274.671875 L 263.375 335.785156 C 263.375 345.671875 255.261719 354.21875 244.898438 354.21875 C 234.535156 354.21875 225.957031 345.671875 225.957031 335.785156 L 225.957031 262.539062 L 310.710938 262.539062 C 326.046875 262.539062 338.65625 249.957031 338.65625 234.21875 L 338.65625 200.066406 C 338.65625 179.386719 321.980469 162.753906 301.242188 162.753906 C 280.515625 162.753906 263.375 179.386719 263.375 200.066406 L 263.375 243.65625 L 169.167969 243.65625 L 169.167969 224.332031 L 169.167969 225.226562 L 169.167969 132.207031 C 169.167969 121.859375 177.730469 113.328125 188.09375 113.328125 C 198.917969 113.328125 207.035156 121.859375 207.035156 132.207031 L 207.035156 225.226562 L 207.035156 224.332031 L 207.035156 231.523438 L 225.957031 231.523438 L 225.957031 224.332031 L 225.957031 225.226562 L 225.957031 132.207031 C 225.957031 111.527344 208.835938 94.449219 188.09375 94.449219 C 167.351562 94.449219 150.675781 111.527344 150.675781 132.207031 L 150.675781 225.226562 L 150.675781 224.332031 L 150.675781 243.660156 L 65.925781 243.660156 C 60.519531 243.660156 56.453125 239.160156 56.453125 234.21875 Z M 282.316406 243.660156 L 282.316406 200.066406 C 282.316406 189.734375 290.878906 181.1875 301.242188 181.1875 C 311.617188 181.1875 320.179688 189.734375 320.179688 200.066406 L 320.179688 234.21875 C 320.179688 239.164062 315.667969 243.660156 310.710938 243.660156 Z M 74.933594 126.355469 C 85.757812 126.355469 93.871094 117.824219 93.871094 107.476562 C 93.871094 97.144531 85.757812 88.597656 74.933594 88.597656 C 64.570312 88.597656 56.007812 97.144531 56.007812 107.476562 C 56.007812 117.824219 64.570312 126.355469 74.933594 126.355469 Z M 74.933594 126.355469"
                  fillOpacity="1"
                  fillRule="evenodd"
                />
              </g>
            </svg>
            <figcaption>Blueprints drawn into execution.</figcaption>
          </figure>
          <div className="consulting-grid">
            <article
              className="consulting-card reveal scroll-reveal"
              style={{ "--delay": "200ms" }}
              data-scroll
            >
              <h3>Stock & Supply Chain</h3>
              <p>
                Stop losing money to phantom inventory and "it finish" surprises. 
                Track every item from warehouse to delivery.
              </p>
            </article>
            <article
              className="consulting-card reveal scroll-reveal"
              style={{ "--delay": "260ms" }}
              data-scroll
            >
              <h3>Real Money Dashboards</h3>
              <p>
                See your actual profits, not Excel guesswork. Know exactly where 
                every cedi is going — no more "e dey somewhere."
              </p>
            </article>
            <article
              className="consulting-card reveal scroll-reveal"
              style={{ "--delay": "320ms" }}
              data-scroll
            >
              <h3>Built for How YOU Work</h3>
              <p>
                Your delivery guy uses WhatsApp? Your accountant loves Excel? 
                We connect everything to work YOUR way.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="page compliance-section">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">Bank-Level Protection</p>
          <h2>Your Business Data is Sacred</h2>
          <p className="lead">
            We protect your numbers like they're our own. Military-grade security 
            that even the big international banks use.
          </p>
        </div>
        <div className="compliance-grid">
          <div className="compliance-card">
            <h3>Who Sees What</h3>
            <p>Control exactly which staff can view sales, expenses, or customer data.</p>
          </div>
          <div className="compliance-card">
            <h3>Paper Trail Everything</h3>
            <p>See who changed what, when — perfect for catching mistakes early.</p>
          </div>
          <div className="compliance-card">
            <h3>Never Lose Data</h3>
            <p>Automatic cloud backups mean your business survives even if your laptop doesn't.</p>
          </div>
          <div className="compliance-card">
            <h3>Fort Knox Security</h3>
            <p>Your data is encrypted like credit card info — hackers see only gibberish.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="page pricing-preview">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">Transparent Pricing</p>
          <h2>Plans That Scale With Your Hustle</h2>
          <p className="lead">No hidden fees. No surprises. No wahala. Cancel anytime.</p>
        </div>
        
        <div className="pricing-cards">
          <div className="pricing-card reveal" data-scroll>
            <h3>Starter</h3>
            <div className="price-tag">
              <span className="price">₵2,500</span>
              <span className="period">/month</span>
            </div>
            <ul className="pricing-features">
              <li><FontAwesomeIcon icon={faCheck} /> Up to 10 users</li>
              <li><FontAwesomeIcon icon={faCheck} /> Core modules (Inventory, Sales, Finance)</li>
              <li><FontAwesomeIcon icon={faCheck} /> WhatsApp integration</li>
              <li><FontAwesomeIcon icon={faCheck} /> Mobile Money support</li>
              <li><FontAwesomeIcon icon={faCheck} /> Monthly data backups</li>
              <li><FontAwesomeIcon icon={faCheck} /> Email support</li>
            </ul>
            <p className="ideal-for">
              <strong>Perfect for:</strong> Small retailers, service businesses, single-location operations
            </p>
            <PrimaryButton to="/contact">Start Your Trial</PrimaryButton>
          </div>
          
          <div className="pricing-card featured reveal" data-scroll style={{ "--delay": "100ms" }}>
            <span className="badge">Most Popular</span>
            <h3>Growth</h3>
            <div className="price-tag">
              <span className="price">₵6,500</span>
              <span className="period">/month</span>
            </div>
            <ul className="pricing-features">
              <li><FontAwesomeIcon icon={faCheck} /> Up to 50 users</li>
              <li><FontAwesomeIcon icon={faCheck} /> All modules + custom workflows</li>
              <li><FontAwesomeIcon icon={faCheck} /> API integrations (Mobile Money, Banks, Slack)</li>
              <li><FontAwesomeIcon icon={faCheck} /> Multi-location support</li>
              <li><FontAwesomeIcon icon={faCheck} /> Dedicated account manager</li>
              <li><FontAwesomeIcon icon={faCheck} /> Daily backups + priority support</li>
              <li><FontAwesomeIcon icon={faCheck} /> Custom reports</li>
            </ul>
            <p className="ideal-for">
              <strong>Perfect for:</strong> Multi-location businesses, logistics companies, growing distributors
            </p>
            <PrimaryButton to="/contact">Book a Demo</PrimaryButton>
          </div>
          
          <div className="pricing-card reveal" data-scroll style={{ "--delay": "200ms" }}>
            <h3>Enterprise</h3>
            <div className="price-tag">
              <span className="price">Custom</span>
              <span className="period">Let's talk</span>
            </div>
            <ul className="pricing-features">
              <li><FontAwesomeIcon icon={faCheck} /> Unlimited users</li>
              <li><FontAwesomeIcon icon={faCheck} /> White-label options</li>
              <li><FontAwesomeIcon icon={faCheck} /> Custom module development</li>
              <li><FontAwesomeIcon icon={faCheck} /> On-premise deployment available</li>
              <li><FontAwesomeIcon icon={faCheck} /> Advanced security features</li>
              <li><FontAwesomeIcon icon={faCheck} /> 24/7 dedicated support team</li>
              <li><FontAwesomeIcon icon={faCheck} /> SLA guarantees</li>
            </ul>
            <p className="ideal-for">
              <strong>Perfect for:</strong> Large distributors, manufacturers, enterprise organizations
            </p>
            <PrimaryButton to="/contact">Let's Talk</PrimaryButton>
          </div>
        </div>
        
        <p className="pricing-note reveal" data-scroll style={{ "--delay": "300ms" }}>
          ✨ All plans include setup assistance, team training, and data migration. 
          <Link to="/pricing" className="text-link"> See detailed comparison <FontAwesomeIcon icon={faArrowRight} /></Link>
        </p>
      </section>

      <section className="page cta reveal" data-scroll>
        <div className="section-bg" aria-hidden="true">
          {/* Add background SVGs here */}
        </div>
        <div className="section-media">
          {/* Add image elements here */}
        </div>
        <div className="cta-content">
          <h2>Ready to Stop the Spreadsheet Madness?</h2>
          <p className="lead">Let's show you what running a modern African business actually looks like.</p>
        </div>
        <div className="cta-actions">
          <PrimaryButton to="/contact">See Faako in Action (Free Demo)</PrimaryButton>
        </div>
      </section>

      <section id="solutions" className="page solutions-section">
        <div className="section-bg" aria-hidden="true">
          {/* Add background SVGs here */}
        </div>
        <div className="section-media">
          {/* Add image elements here */}
        </div>
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">The Platform</p>
          <h2>Comprehensive ERP Solutions</h2>
          <p className="lead">
            We don't just provide tools; we re-engineer your workflows for
            maximum efficiency.
          </p>
        </div>

        <div className="solutions-container">
          {/* Pillar 1: Operations */}
          <div className="solution-pillar reveal" data-scroll style={{ "--delay": "100ms" }}>
            <div className="pillar-head">
              <div className="pillar-icon">01</div>
              <h3>Operational Excellence</h3>
            </div>
            <ul className="solution-list">
              <li>
                <strong>Unified Inventory:</strong> Real-time tracking of stock levels across multiple warehouses with serialized asset management.
              </li>
              <li>
                <strong>Supply Chain Sync:</strong> Automated vendor procurement and purchase order approvals to prevent stockouts.
              </li>
              <li>
                <strong>Logistics & Dispatch:</strong> Integrated route optimization and delivery tracking for field operations.
              </li>
            </ul>
          </div>

          {/* Pillar 2: Financials */}
          <div className="solution-pillar reveal" data-scroll style={{ "--delay": "200ms" }}>
            <div className="pillar-head">
              <div className="pillar-icon">02</div>
              <h3>Financial Integrity</h3>
            </div>
            <ul className="solution-list">
              <li>
                <strong>Automated Accounting:</strong> Seamless flow from sales orders to ledger entries without manual data entry.
              </li>
              <li>
                <strong>Revenue Tracking:</strong> Real-time visibility into cash flow, receivables, and payables.
              </li>
              <li>
                <strong>Multi-Currency Support:</strong> Handle global transactions with automatic exchange rate updates.
              </li>
            </ul>
          </div>

          {/* Pillar 3: Intelligence */}
          <div className="solution-pillar reveal" data-scroll style={{ "--delay": "300ms" }}>
            <div className="pillar-head">
              <div className="pillar-icon">03</div>
              <h3>Strategic Intelligence</h3>
            </div>
            <ul className="solution-list">
              <li>
                <strong>Custom Dashboards:</strong> KPIs tailored to your specific business goals—from conversion rates to asset ROI.
              </li>
              <li>
                <strong>Predictive Analytics:</strong> Use historical data to forecast demand and optimize labor costs.
              </li>
              <li>
                <strong>Role-Based Access:</strong> Secure, granular permissions ensure the right people see the right data.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="modules" className="page section modules-section">
        <div className="section-bg" aria-hidden="true">
          {/* Add background SVGs here */}
        </div>
        <div className="section-media">
          {/* Add image elements here */}
        </div>
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">Installable Apps</p>
          <h2>Build your stack, one module at a time</h2>
          <p className="lead">
            Turn on only what you need. Add apps as your team grows, plus recommended add-ons for scale.
          </p>
        </div>

        <div className="install-module-grid">
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "60ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faGlobe} /></div>
            <h3>Website</h3>
            <p>Public storefront, service pages, and lead capture.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "120ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faBoxesStacked} /></div>
            <h3>Inventory</h3>
            <p>Serialized items, warehouses, and stock movement tracking.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "180ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faHandshake} /></div>
            <h3>CRM</h3>
            <p>Leads, client timelines, and sales follow-ups.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "240ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faReceipt} /></div>
            <h3>Orders</h3>
            <p>Quotes, order status, and fulfillment progress.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "300ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faCalendarDays} /></div>
            <h3>Bookings</h3>
            <p>Reservations, event timelines, and resource holds.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "360ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faCalendarCheck} /></div>
            <h3>Scheduler</h3>
            <p>Staff calendars, shifts, and job allocations.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "420ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faChartPie} /></div>
            <h3>Accounting</h3>
            <p>General ledger, reconciliations, and closing.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "480ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faFileInvoiceDollar} /></div>
            <h3>Invoicing</h3>
            <p>Billing schedules, deposits, and payment tracking.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "540ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faAddressBook} /></div>
            <h3>Directory</h3>
            <p>Team contacts, customers, and vendor profiles.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "600ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faMoneyBillWave} /></div>
            <h3>Expenses</h3>
            <p>Operating costs, receipts, and approvals.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "660ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faUserTie} /></div>
            <h3>HR</h3>
            <p>Hiring, training, and team performance records.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "720ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faTruck} /></div>
            <h3>Vendors</h3>
            <p>Supplier catalog, contracts, and lead times.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "780ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faWrench} /></div>
            <h3>Maintenance</h3>
            <p>Asset upkeep schedules and service history.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "840ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faRoute} /></div>
            <h3>Delivery</h3>
            <p>Routes, drivers, and drop-off confirmations.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "900ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faFolderOpen} /></div>
            <h3>Documents</h3>
            <p>Contracts, files, and version control.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "960ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faUserShield} /></div>
            <h3>Users</h3>
            <p>Roles, permissions, and access control.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "1020ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faClock} /></div>
            <h3>Timesheets</h3>
            <p>Hours logged, payroll exports, and approvals.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "1080ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faBullhorn} /></div>
            <h3>Marketing</h3>
            <p>Campaign tracking and customer outreach.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "1140ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faGear} /></div>
            <h3>Settings</h3>
            <p>System preferences, tax rules, and templates.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "1200ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faPenToSquare} /></div>
            <h3>Template Mode</h3>
            <p>Website layouts and content edits without code.</p>
          </article>

          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "1260ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faCartShopping} /></div>
            <h3>Procurement</h3>
            <p>Purchase requests, approvals, and vendor quotes.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "1320ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faBoxArchive} /></div>
            <h3>Asset Management</h3>
            <p>Equipment lifecycle tracking and depreciation.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "1380ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faPlug} /></div>
            <h3>Integrations</h3>
            <p>Connect banking, email, SMS, and accounting tools.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "1440ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faHeadset} /></div>
            <h3>Support Desk</h3>
            <p>Tickets, SLAs, and customer service history.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "1500ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faShield} /></div>
            <h3>Compliance</h3>
            <p>Audits, safety checks, and policy attestations.</p>
          </article>
          <article className="install-module-pill reveal scroll-reveal" data-scroll style={{ "--delay": "1560ms" }}>
            <div className="module-pill-icon"><FontAwesomeIcon icon={faChartLine} /></div>
            <h3>Analytics</h3>
            <p>Advanced reporting, forecasting, and BI exports.</p>
          </article>
        </div>
      </section>

      <section className="page cta reveal" data-scroll>
        <div className="section-bg" aria-hidden="true">
          {/* Add background SVGs here */}
        </div>
        <div className="section-media">
          {/* Add image elements here */}
        </div>
        <div className="cta-content">
          <h2>Ready for an ERP audit?</h2>
          <p className="lead">
            We map your current stack, surface quick wins, and build a phased
            rollout plan tailored to your operations.
          </p>
        </div>
        <div className="cta-actions">
          <PrimaryButton to="/contact">Book a Consultation</PrimaryButton>
          <Link className="button button-ghost" to="/#case-studies">
            View case studies
          </Link>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="page comparison-section">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">Why Faako Wins</p>
          <h2>Stop Cobbling Together 5 Different Tools</h2>
          <p className="lead">See how we compare to the old way of doing things</p>
        </div>
        
        <div className="comparison-table-container reveal" data-scroll style={{ "--delay": "100ms" }}>
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="feature-col">What You Need</th>
                <th className="competitor-col">Excel + WhatsApp</th>
                <th className="competitor-col">QuickBooks + Others</th>
                <th className="highlight-col">Faako ERP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="feature-name">Real-time inventory tracking</td>
                <td className="comparison-no">
                  <FontAwesomeIcon icon={faTimes} className="icon-no" />
                  <span>Manual updates, always outdated</span>
                </td>
                <td className="comparison-warning">
                  <span className="icon-warning">⚠️</span>
                  <span>Separate system, extra cost</span>
                </td>
                <td className="comparison-yes highlight">
                  <FontAwesomeIcon icon={faCheck} className="icon-yes" />
                  <span>Live tracking, all locations</span>
                </td>
              </tr>
              <tr>
                <td className="feature-name">Team collaboration</td>
                <td className="comparison-no">
                  <FontAwesomeIcon icon={faTimes} className="icon-no" />
                  <span>Lost in WhatsApp chaos</span>
                </td>
                <td className="comparison-no">
                  <FontAwesomeIcon icon={faTimes} className="icon-no" />
                  <span>Email back and forth</span>
                </td>
                <td className="comparison-yes highlight">
                  <FontAwesomeIcon icon={faCheck} className="icon-yes" />
                  <span>Built-in workflows & approvals</span>
                </td>
              </tr>
              <tr>
                <td className="feature-name">Mobile Money integration</td>
                <td className="comparison-no">
                  <FontAwesomeIcon icon={faTimes} className="icon-no" />
                  <span>Manual entry, errors everywhere</span>
                </td>
                <td className="comparison-no">
                  <FontAwesomeIcon icon={faTimes} className="icon-no" />
                  <span>Not available in Ghana</span>
                </td>
                <td className="comparison-yes highlight">
                  <FontAwesomeIcon icon={faCheck} className="icon-yes" />
                  <span>Direct MTN, Vodafone, AirtelTigo</span>
                </td>
              </tr>
              <tr>
                <td className="feature-name">Multi-location support</td>
                <td className="comparison-no">
                  <FontAwesomeIcon icon={faTimes} className="icon-no" />
                  <span>Impossible to manage</span>
                </td>
                <td className="comparison-warning">
                  <span className="icon-warning">⚠️</span>
                  <span>Complex, expensive setup</span>
                </td>
                <td className="comparison-yes highlight">
                  <FontAwesomeIcon icon={faCheck} className="icon-yes" />
                  <span>Built-in, unlimited locations</span>
                </td>
              </tr>
              <tr>
                <td className="feature-name">Local support team</td>
                <td className="comparison-no">
                  <FontAwesomeIcon icon={faTimes} className="icon-no" />
                  <span>DIY, Google is your friend</span>
                </td>
                <td className="comparison-warning">
                  <span className="icon-warning">⚠️</span>
                  <span>Overseas support only</span>
                </td>
                <td className="comparison-yes highlight">
                  <FontAwesomeIcon icon={faCheck} className="icon-yes" />
                  <span>Ghana-based team, same timezone</span>
                </td>
              </tr>
              <tr>
                <td className="feature-name">Setup & training</td>
                <td className="comparison-no">
                  <FontAwesomeIcon icon={faTimes} className="icon-no" />
                  <span>Figure it out yourself</span>
                </td>
                <td className="comparison-warning">
                  <span className="icon-warning">⚠️</span>
                  <span>Extra $$$, limited availability</span>
                </td>
                <td className="comparison-yes highlight">
                  <FontAwesomeIcon icon={faCheck} className="icon-yes" />
                  <span>Included, we visit your office</span>
                </td>
              </tr>
              <tr className="price-row">
                <td className="feature-name"><strong>Monthly cost</strong></td>
                <td className="comparison-price">
                  <span className="price">Free</span>
                  <small>But costly mistakes daily</small>
                </td>
                <td className="comparison-price">
                  <span className="price">₵3,000+</span>
                  <small>Per tool, adds up fast</small>
                </td>
                <td className="comparison-price highlight">
                  <span className="price">From ₵2,500</span>
                  <small>Everything included</small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="comparison-cta reveal" data-scroll style={{ "--delay": "200ms" }}>
          <PrimaryButton to="/contact">See Faako in Action</PrimaryButton>
        </div>
      </section>

      {/* --- Expertise Section --- */}
      <section id="expertise" className="page expertise-section">
        <div className="section-bg" aria-hidden="true">
          {/* Add background SVGs here */}
        </div>
        <div className="section-media">
          {/* Add image elements here */}
        </div>
        <div className="expertise-content reveal" data-scroll>
          <p className="eyebrow">Why Choose Faako</p>
          <h2>We Don't Just Sell Software,<br/>We Transform Your Operations</h2>
          <p className="lead">
            Installing an ERP isn't like downloading an app. It's rewiring how your entire 
            business runs. Good thing we've done this many times before.
          </p>

          <div className="expertise-items">
            <div className="exp-item">
              <h4>Rescue Your Old Data</h4>
              <p>Those 5 years of Excel sheets? WhatsApp receipts? Old POS records? We clean it up and move everything into one place.</p>
            </div>
            <div className="exp-item">
              <h4>Connect Your Actual Tools</h4>
              <p>Mobile Money, Slack, WhatsApp Business, Stripe, your bank — whatever you actually use, we hook it up.</p>
            </div>
            <div className="exp-item">
              <h4>Train Your Team (For Real)</h4>
              <p>We come to your office, sit with your people, and make sure everyone actually uses the system — not just the IT guy.</p>
            </div>
          </div>
        </div>
        <div className="expertise-visual reveal" data-scroll style={{ "--delay": "200ms" }}>
          <div className="tech-stack-card">
              {/* You can put a simplified architecture diagram or tech logos here */}
              <span className="badge">Our Process</span>
              <div className="stack-line"><span>Understand Your Flow</span></div>
              <div className="stack-line"><span>Design Your System</span></div>
              <div className="stack-line"><span>Launch & Train</span></div>
              <div className="stack-line"><span>Grow Together</span></div>
          </div>
        </div>
      </section>

      {/* Mobile Showcase Section */}
      <section className="page mobile-showcase">
        <div className="split-layout">
          <div className="mobile-copy reveal" data-scroll>
            <p className="eyebrow">Works Everywhere You Do</p>
            <h2>Your Team Runs Faako From Their Phones</h2>
            <p className="lead">
              Because let's be real — most of your team is on mobile. We built Faako to work perfectly 
              on phones, tablets, and laptops.
            </p>
            <ul className="checklist">
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                <span><strong>Approve orders from the car</strong> — No need to be at your desk</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                <span><strong>Check inventory from the warehouse</strong> — Real-time stock levels</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                <span><strong>Send invoices from site visits</strong> — Close deals on the spot</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                <span><strong>Works on 3G</strong> — Yes, really. Optimized for Ghana's network</span>
              </li>
            </ul>
            <div className="mobile-badges">
              <div className="mobile-badge">
                <span className="badge-icon">📱</span>
                <span>iOS & Android Apps</span>
              </div>
              <div className="mobile-badge">
                <span className="badge-icon">🌐</span>
                <span>Works in Any Browser</span>
              </div>
              <div className="mobile-badge">
                <span className="badge-icon">⚡</span>
                <span>Lightning Fast</span>
              </div>
            </div>
          </div>
          <div className="mobile-preview reveal" data-scroll style={{ "--delay": "150ms" }}>
            <div className="mobile-mockup">
              <img src="/imgs/demo/mobile-dashboard.png" alt="Faako mobile dashboard" />
              <div className="mobile-feature-callout">
                <span>👆 Tap anywhere to navigate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline Section */}
      <section className="page timeline-section">
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">The Journey</p>
          <h2>Your First 60 Days With Faako</h2>
          <p className="lead">From first call to full operation — here's exactly what happens</p>
        </div>
        
        <div className="timeline">
          <div className="timeline-item reveal" data-scroll style={{ "--delay": "80ms" }}>
            <div className="timeline-marker">
              <span className="timeline-week">Week 1</span>
              <div className="timeline-dot"></div>
            </div>
            <div className="timeline-content">
              <h3>Discovery & Setup</h3>
              <ul className="timeline-checklist">
                <li>☑️ We visit your office (or you visit ours!)</li>
                <li>☑️ Map your current workflows — how things actually work</li>
                <li>☑️ Set up your Faako account with your branding</li>
                <li>☑️ Start importing your existing data</li>
              </ul>
              <p className="timeline-outcome">
                <strong>Outcome:</strong> You have a working Faako instance with your data
              </p>
            </div>
          </div>
          
          <div className="timeline-item reveal" data-scroll style={{ "--delay": "160ms" }}>
            <div className="timeline-marker">
              <span className="timeline-week">Week 2-3</span>
              <div className="timeline-dot"></div>
            </div>
            <div className="timeline-content">
              <h3>Configuration & Training</h3>
              <ul className="timeline-checklist">
                <li>☑️ Customize modules to match YOUR business flow</li>
                <li>☑️ Connect Mobile Money, WhatsApp, bank feeds</li>
                <li>☑️ Train your core team (2-3 hands-on sessions)</li>
                <li>☑️ Test with real transactions in a safe environment</li>
              </ul>
              <p className="timeline-outcome">
                <strong>Outcome:</strong> Your team knows how to use Faako confidently
              </p>
            </div>
          </div>
          
          <div className="timeline-item reveal" data-scroll style={{ "--delay": "240ms" }}>
            <div className="timeline-marker">
              <span className="timeline-week">Week 4</span>
              <div className="timeline-dot"></div>
            </div>
            <div className="timeline-content">
              <h3>Soft Launch (Pilot)</h3>
              <ul className="timeline-checklist">
                <li>☑️ Go live with one location or department first</li>
                <li>☑️ Daily check-ins with our team</li>
                <li>☑️ Fix any hiccups immediately (they're normal!)</li>
                <li>☑️ Gather feedback from your team</li>
              </ul>
              <p className="timeline-outcome">
                <strong>Outcome:</strong> One part of your business running smoothly on Faako
              </p>
            </div>
          </div>
          
          <div className="timeline-item highlight reveal" data-scroll style={{ "--delay": "320ms" }}>
            <div className="timeline-marker">
              <span className="timeline-week">Week 5-8</span>
              <div className="timeline-dot success"></div>
            </div>
            <div className="timeline-content">
              <h3>Full Rollout & Optimization</h3>
              <ul className="timeline-checklist">
                <li>☑️ Expand to all locations and departments</li>
                <li>☑️ Train remaining staff members</li>
                <li>☑️ Add advanced features based on feedback</li>
                <li>☑️ Set up monthly strategy calls</li>
              </ul>
              <p className="timeline-outcome">
                <strong>🎉 Outcome:</strong> Your entire business running on Faako!
              </p>
            </div>
          </div>
        </div>
        
        <div className="timeline-footer reveal" data-scroll style={{ "--delay": "400ms" }}>
          <div className="timeline-note">
            <h4>What Happens After?</h4>
            <p>
              We don't disappear! Monthly check-ins, ongoing optimization, and we're always 
              a WhatsApp message away when you need us.
            </p>
          </div>
        </div>
      </section>

      <Testimonials
        className="page section testimonials"
        headerScroll
        cardScroll
        eyebrow="Real Talk from Real Businesses"
        title="Here's What Happens When You Stop the Chaos"
        lead="No more 'let me check and get back to you.' No more guessing. Just clarity."
        items={[
          {
            quote:
              "Ah! We finally see everything — every order, every booking, every delivery. The team stopped that Excel back-and-forth overnight. Now we can actually plan ahead.",
            author: "Operations Manager, Event Rentals (Accra)",
          },
          {
            quote:
              "The dashboards are too clear. We know what's moving, what's stuck, where to jump in. Our Monday meetings now take 15 minutes instead of 2 hours.",
            author: "COO, Logistics Company (Tema)",
            delay: "120ms",
          },
          {
            quote:
              "Setup was fast oh! And the team didn't just hand us software and disappear. They stayed with us, trained everyone. We launched smoothly — no drama.",
            author: "Founder, Multi-Location Retail Chain",
            delay: "220ms",
          },
        ]}
      />

      {/* --- Case Studies Section --- */}
      <section id="case-studies" className="page case-studies">
        <div className="section-bg" aria-hidden="true">
          {/* Add background SVGs here */}
        </div>
        <div className="section-media">
          {/* Add image elements here */}
        </div>
        <div className="section-header reveal" data-scroll>
          <p className="eyebrow">See It Working</p>
          <h2>Real Businesses, Real Results</h2>
        </div>

        <div className="case-grid">
          <article className="case-card reveal" data-scroll>
            <div className="case-image">
              <img src="/imgs/case-studies/erp-case.png" alt="Reebs ERP system" />
            </div>
            <div className="case-info">
              <span className="case-tag">Party Rentals</span>
              <h3>From WhatsApp Confusion to One Dashboard</h3>
              <p>How a multi-location events company stopped losing equipment and started tracking every cedi.</p>
              <Link to="/contact" className="text-link">
                Read Their Story <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </article>

          <article className="case-card reveal" data-scroll style={{ "--delay": "150ms" }}>
            <div className="case-image">
              <img src="/imgs/case-studies/dashboard-case.png" alt="Developer dashboard" />
            </div>
            <div className="case-info">
              <span className="case-tag">Tech Startup</span>
              <h3>Developer Team Stopped Playing Email Tennis</h3>
              <p>Real-time visibility into who's working on what, what's deployed, and what needs attention.</p>
              <Link to="/contact" className="text-link">
                See How They Did It <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <FaqSection
        className="page faq-section"
        headerScroll
        eyebrow="Your Questions Answered"
        title="Let's Address the Elephant in the Room"
        lead="We know what you're thinking. Here's the real talk on timing, cost, and what happens after."
        items={[
          {
            question: "How long before we're actually using this thing?",
            answer:
              "Most teams are live in 4-8 weeks. We start with your most urgent pain points (usually inventory or billing), get those running, then add the rest as you're ready. No need to flip everything overnight.",
            open: true,
          },
          {
            question: "What about our old Excel sheets and WhatsApp messages?",
            answer:
              "We don't throw away your history. We extract, clean up, and import everything worth keeping — invoices, customer records, inventory logs, all of it. Your data comes with you.",
          },
          {
            question: "Can this work with how WE actually do things?",
            answer:
              "100%. We're not handing you some rigid template. We configure approvals, permissions, and workflows around how YOUR team actually operates. If your dispatch runs on WhatsApp, we connect WhatsApp.",
          },
          {
            question: "What happens after launch? Do you just disappear?",
            answer:
              "Never. We do monthly check-ins to review what's working, optimize slow spots, and add features as you grow. Think of us as your tech partner, not just a vendor.",
          },
        ]}
      />

      <section className="page cta cta-compact reveal" data-scroll>
        <div className="section-bg" aria-hidden="true">
          {/* Add background SVGs here */}
        </div>
        <div className="section-media">
          {/* Add image elements here */}
        </div>
        <div className="cta-content">
          <h2>Let's Stop Talking and Show You</h2>
          <p className="lead">
            Get a personalized demo using YOUR industry, YOUR team structure, 
            and YOUR actual pain points. No sales pitch — just real solutions.
          </p>
        </div>
        <div className="cta-actions">
          <PrimaryButton to="/contact">Book Your Free Demo</PrimaryButton>
          <Link className="button button-ghost" to="/signup">
            Or Start Your Trial
          </Link>
        </div>
      </section>
      <WhatsApp />
    </>
  );
}
