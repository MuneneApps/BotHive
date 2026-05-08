import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle, faBolt, faCloud, faShieldAlt, faHeadset,
  faChartBar, faStore,
} from "@fortawesome/free-solid-svg-icons";

import heroImage from "../../assets/img/hero.png";
import { Routes } from "../../routes";

export default function POSPage() {
  const history = useHistory();
  const [activePlan, setActivePlan] = useState("Business");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goContact = () => history.push("/contact");
  const goTo = (path) => { if (path) history.push(path); else goContact(); };

 

  const differentiators = [
    { icon: faBolt, label: "Offline-First Architecture", desc: "Sales never stop — sync happens the moment connection returns." },
    { icon: faCloud, label: "Managed Cloud Infrastructure", desc: "Hosting, backups, updates — all handled by our team." },
    { icon: faShieldAlt, label: "KRA eTIMS Built-In", desc: "Fully compliant receipting out of the box. No extra setup." },
    { icon: faChartBar, label: "Real-Time Reporting", desc: "Sales, inventory, staff performance — live from any device." },
    { icon: faStore, label: "White-Label & Branded", desc: "Your name, your identity. Not ours on the screen." },
    { icon: faHeadset, label: "Dedicated Support Team", desc: "A real team behind your system, not a ticket queue." },
  ];

  
const plans = [
  {
    name: "Starter",
    period: "Small Business Setup",
    accent: "#a8edea",
    accentGlow: "rgba(168,237,234,0.15)",
    tagColor: "#0f7a76",
    tag: "Starter Package",
    features: [
      "Single Terminal Support",
      "Multi-User Access",
      "Integrated Dashboard",
      "Cash / MPESA / Card (Manual)",
      "Product Modifiers (Cold / Warm etc.)",
      "End of Day Sales Reports",
      "Stock Sales Reports",
      "Waiter / Cashier Reports",
      "Export Data (Excel / PDF)",
      "Local Backup",
      "Simple Shift / Work Period Management",
      "User Roles & Permissions",
    ],
  },
  {
    name: "Business",
    period: "Growing Businesses",
    accent: "#fed6e3",
    accentGlow: "rgba(254,214,227,0.15)",
    tagColor: "#b0587a",
    tag: "Business Package",
    features: [
      "Everything in Starter",
      "Multiple Terminal Support",
      "Web & Mobile Reporting App",
      "Advanced Integrated Dashboard",
      "MPESA Integration",
      "Detailed Product & Recipe Management",
      "Advanced Sales & Profit Reports",
      "Automatic End of Day Email Reports",
      "Analytics Engine",
      "Additional Terminals (licensed)",
      "Advanced Shift Management",
      "Granular User Permissions",
    ],
  },
  {
    name: "Enterprise",
    period: "Multi-Branch Operations",
    accent: "#d4fc79",
    accentGlow: "rgba(212,252,121,0.12)",
    tagColor: "#4a7c00",
    tag: "Enterprise Package",
    features: [
      "Multiple Terminals / Locations",
      "Web & Mobile Reporting App",
      "Advanced Integrated Dashboard",
      "MPESA Integration",
      "Card Payments Integration",
      "Profit & Loss Reporting",
      "Waiter / Cashier Reports",
      "Analytics Engine",
      "Auto Backup (Cloud / Local)",
      "Shift Management",
      "Granular Permissions",
      "Custom Integrations",
    ],
  },
];

  const posSolutions = [
  {
    title: "General Retail POS",
    image: require("../../assets/img/retail-pos.jpg"),
    desc: "Flexible POS built for retail businesses.",
    link: Routes?.POSRetail?.path,
  },
  {
    title: "Supermarket POS",
    image: require("../../assets/img/supermarket-pos.jpg"),
    desc: "Fast checkout, barcode scanning, and advanced inventory control.",
    link: Routes?.POSSupermarket?.path,
  },
  {
    title: "Wines & Spirits POS",
    image: require("../../assets/img/wines-pos.jpg"),
    desc: "Designed for liquor stores and wholesale outlets with fast billing and stock tracking.",
    link: Routes?.POSWines?.path,
  },
  {
    title: "Restaurant / Bar POS",
    image: require("../../assets/img/restaurant-pos.jpg"),
    desc: "Table management, kitchen orders, and fast-paced service operations.",
    link: Routes?.POSRestaurant?.path,
  },

  {
    title: "Pharmacy POS",
    image: require("../../assets/img/pharmacy.jpg"),
    desc: "Prescription-ready pharmacy system with stock control, expiry tracking, and fast billing.",
    link: Routes?.POSPharmacy?.path,
  },
  {
    title: "Hardware Store POS",
    image: require("../../assets/img/hardware.jpg"),
    desc: "Built for hardware and construction stores with bulk sales, supplier tracking, and inventory control.",
    link: Routes?.POSHardware?.path,
  },
  {
    title: "Electronics & Phones POS",
    image: require("../../assets/img/elecphone.jpg"),
    desc: "Manage devices, accessories, serial tracking, repairs, and electronics sales seamlessly.",
    link: Routes?.POSElectronics?.path,
  },
  {
    title: "Beauty & Cosmetics POS",
    image: require("../../assets/img/beauty.jpg"),
    desc: "Perfect for salons, spas, beauty shops, wig installers, makeup artists, and cosmetics retailers.",
    link: Routes?.POSBeauty?.path,
  },


];


const integrations = [
  {
    name: "QuickBooks",
    desc: "Accounting sync",
    icon: require("../../assets/img/quickboks.png"),
  },
  {
    name: "KRA eTIMS",
    desc: "Tax compliance",
    icon: require("../../assets/img/etims.jpg"),
  },
  {
    name: "M-Pesa",
    desc: "Mobile money payments",
    icon: require("../../assets/img/mpesa.png"),
  },
  {
    name: "Shopify",
    desc: "Online store sync",
    icon: require("../../assets/img/shopify.png"),
  },
  {
    name: "AI Insights",
    desc: "Smart analytics",
    icon: require("../../assets/img/ai.jpeg"),
  },
  {
    name: "Custom APIs",
    desc: "Any system integration",
    icon: require("../../assets/img/api.png"),
  },
];


  const C = {
    dark: "#08080f",
    dark2: "#0f1923",
    card: "#111720",
    border: "rgba(255,255,255,0.07)",
    text: "rgba(255,255,255,0.82)",
    muted: "rgba(255,255,255,0.38)",
    mint: "#a8edea",
    blush: "#fed6e3",
    lime: "#d4fc79",
  };

  const fontSyne = "'Syne', sans-serif";

  const btnPrimary = {
    display: "inline-flex", alignItems: "center", gap: "8px",
    background: "linear-gradient(135deg, #a8edea, #7dd8d4)",
    color: "#08080f", fontFamily: fontSyne, fontWeight: 700,
    fontSize: "14px", padding: isMobile ? "14px 22px" : "14px 28px",
    borderRadius: "12px", border: "none", cursor: "pointer",
    boxShadow: "0 4px 24px rgba(168,237,234,0.25)", transition: "transform 0.2s, box-shadow 0.2s",
    letterSpacing: "0.2px", textAlign: "center",
  };

  const btnGhost = {
    display: "inline-flex", alignItems: "center", gap: "8px",
    background: "rgba(255,255,255,0.04)",
    color: "rgba(255,255,255,0.8)", fontFamily: fontSyne, fontWeight: 600,
    fontSize: "14px", padding: "14px 24px",
    borderRadius: "12px", border: "1px solid rgba(255,255,255,0.14)",
    cursor: "pointer", transition: "all 0.2s", textAlign: "center",
  };

  const sectionHeader = {
    marginBottom: "40px",
    padding: isMobile ? "0 20px" : "0",   // ← section titles get a little breathing room on mobile
  };

  const sectionTag = {
    display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px",
  };

  const sectionTagLine = {
    width: "24px", height: "2px", background: C.mint, borderRadius: "2px",
  };

  const sectionTagText = {
    fontFamily: fontSyne, fontSize: "10px", fontWeight: 700,
    letterSpacing: "2.5px", textTransform: "uppercase", color: C.mint,
  };

  const sectionH2 = {
    fontFamily: fontSyne, fontWeight: 800,
    fontSize: isMobile ? "1.5rem" : "clamp(1.5rem, 3vw, 2.1rem)",
    color: "#fff", letterSpacing: "-0.5px", marginBottom: "10px", lineHeight: 1.2,
  };

  const sectionSub = {
    color: C.muted, fontSize: "0.93rem", lineHeight: 1.75, maxWidth: "500px",
  };

  return (
    <div style={{ background: C.dark, minHeight: "100vh", color: C.text }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500&display=swap');
        * { box-sizing: border-box; font-family: 'DM Sans', sans-serif; }
      `}</style>

      {/* ── OUTER WRAPPER — zero horizontal padding on mobile ── */}
      <div
  style={{
    width: "100%",
    maxWidth: isMobile ? "100%" : "1080px",
    margin: isMobile ? "0" : "0 auto",
    padding: isMobile ? "0" : "0 28px",
    overflowX: "hidden",
  }}
>

        {/* ── HERO ── */}
        <div style={{
          position: "relative", minHeight: "560px", display: "flex", alignItems: "center",
          borderRadius: isMobile ? "0" : "28px",
          overflow: "hidden", marginBottom: "80px", marginTop: isMobile ? "0" : "32px",
          backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center",
          border: isMobile ? "none" : `1px solid ${C.border}`,
        }}>
          <div style={{
            position: "absolute", inset: 0,
            background: isMobile
              ? "linear-gradient(180deg,rgba(8,8,18,0.95) 0%,rgba(8,8,18,0.9) 100%)"
              : "linear-gradient(100deg,rgba(8,8,18,0.97) 45%,rgba(8,8,18,0.5) 100%)",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(168,237,234,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(168,237,234,0.04) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at 70% 50%,transparent 30%,black 100%)",
          }} />
          <div style={{
            position: "absolute", top: "-120px", right: "-80px", width: "500px", height: "500px",
            background: "radial-gradient(circle,rgba(168,237,234,0.14) 0%,rgba(254,214,227,0.07) 40%,transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", padding: isMobile ? "44px 20px" : "64px 52px", maxWidth: "640px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: C.mint }} />
              <span style={{ fontFamily: fontSyne, fontSize: "10px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: C.mint }}>
                Bothive POS System
              </span>
            </div>

            <h1 style={{ fontFamily: fontSyne, fontWeight: 900, fontSize: isMobile ? "1.8rem" : "clamp(2rem,4vw,3rem)", lineHeight: 1.1, color: "#fff", margin: "0 0 18px", letterSpacing: "-1px" }}>
              The POS That{" "}
              <span style={{ background: "linear-gradient(90deg,#a8edea,#fed6e3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Never Stops
              </span>{" "}
              Working For You
            </h1>

            <p style={{ color: C.text, fontSize: isMobile ? "0.92rem" : "1rem", lineHeight: 1.8, margin: "0 0 28px", fontWeight: 300 }}>
              A powerful  POS system built for Kenyan businesses — with smart inventory, seamless payments, KRA eTIMS compliance, and reliable offline performance built in.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
              {[
  "QuickBooks Accounting Engine",
  "KRA eTIMS Ready",
  "M-Pesa Integrations",
  "Pesapal Card Payments",
  "Bulk SMS",
  "Email Reports",
].map((label, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "7px",
                  background: "rgba(168,237,234,0.06)", border: "1px solid rgba(168,237,234,0.18)",
                  borderRadius: "100px", padding: "6px 14px", fontSize: "12px",
                  color: "rgba(255,255,255,0.75)", fontWeight: 500,
                }}>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: C.mint, flexShrink: 0 }} />
                  {label}
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", flexDirection: isMobile ? "column" : "row" }}>
              <button style={btnPrimary} onClick={goContact}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 36px rgba(168,237,234,0.4)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 24px rgba(168,237,234,0.25)"; }}>
                Free Consultation →
              </button>
              <button style={btnGhost} onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(168,237,234,0.3)"; e.currentTarget.style.color = C.mint; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)"; e.currentTarget.style.color = "rgba(255,255,255,0.8)"; }}>
                Request Demo 
              </button>
            </div>
          </div>
        </div>

        {/* ── POS SOLUTIONS ── */}
        <div style={sectionHeader}>
          <div style={sectionTag}><div style={sectionTagLine} /><span style={sectionTagText}>Bothive POS Solutions</span></div>
          <h2 style={sectionH2}>Built For Every Business Type</h2>
          <p style={sectionSub}>From retail shops to restaurants and supermarkets — Bothive POS is tailored for how your business actually runs.</p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(240px, 1fr))",
          gap: isMobile ? "0" : "16px",
          marginBottom: "80px",
        }}>
          {posSolutions.map((item, i) => (
            <div key={i} onClick={() => goTo(item.link)}
              style={{
                background: C.card,
                borderTop: isMobile ? "none" : `1px solid ${C.border}`,
borderRight: isMobile ? "none" : `1px solid ${C.border}`,
borderLeft: isMobile ? "none" : `1px solid ${C.border}`,
borderBottom: `1px solid ${C.border}`,
                borderRadius: isMobile ? "0" : "20px",
                overflow: "hidden", cursor: "pointer",
                transition: "transform 0.25s, border-color 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={e => {
                if (!isMobile) {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = "rgba(168,237,234,0.25)";
                  e.currentTarget.style.boxShadow = "0 20px 48px rgba(0,0,0,0.4)";
                }
              }}
              onMouseLeave={e => {
                if (!isMobile) {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.boxShadow = "";
                }
              }}
            >
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img src={item.image} alt={item.title} style={{ width: "100%", height: "180px", objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60px", background: `linear-gradient(transparent, ${C.card})` }} />
              </div>
              <div style={{ padding: "20px" }}>
                <div style={{ fontFamily: fontSyne, fontWeight: 700, fontSize: "1rem", color: "#fff", marginBottom: "6px" }}>{item.title}</div>
                <div style={{ color: C.muted, fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "16px" }}>{item.desc}</div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12.5px", fontWeight: 600, color: C.mint }}>
                  View More <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── WHY BOTHIVE ── */}
        <div style={sectionHeader}>
          <div style={sectionTag}><div style={sectionTagLine} /><span style={sectionTagText}>Why Bothive</span></div>
          <h2 style={sectionH2}>Built Different.<br />Managed Different.</h2>
          <p style={sectionSub}>Most POS companies sell you software and walk away. We design, deploy, and operate your system — so it works perfectly, every day.</p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: "1px", marginBottom: "80px",
          background: C.border,
          border: isMobile ? "none" : `1px solid ${C.border}`,
          borderRadius: isMobile ? "0" : "20px",
          overflow: "hidden",
        }}>
          {differentiators.map((d, i) => (
            <div key={i}
              style={{
                background: C.card, padding: isMobile ? "24px 20px" : "28px",
                transition: "background 0.25s", position: "relative", overflow: "hidden",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#161e2a"; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.card; }}
            >
              <div style={{
                width: "44px", height: "44px", borderRadius: "12px",
                background: "rgba(168,237,234,0.08)", border: "1px solid rgba(168,237,234,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "16px", marginBottom: "14px", color: C.mint,
              }}>
                <FontAwesomeIcon icon={d.icon} />
              </div>
              <div style={{ fontFamily: fontSyne, fontWeight: 700, fontSize: "0.95rem", color: "#fff", marginBottom: "6px" }}>{d.label}</div>
              <div style={{ color: C.muted, fontSize: "0.85rem", lineHeight: 1.65 }}>{d.desc}</div>
            </div>
          ))}
        </div>

       {/* ── INTEGRATIONS ── */}
<div style={sectionHeader}>
  <div style={sectionTag}>
    <div style={sectionTagLine} />
    <span style={sectionTagText}>Integrations</span>
  </div>

  <h2 style={sectionH2}>Connects With Everything You Use</h2>

  <p style={sectionSub}>
    From accounting to mobile money — your POS plugs into the tools your business already runs on.
  </p>
</div>

<div
  style={{
    display: "grid",
    gridTemplateColumns: isMobile
      ? "repeat(2, 1fr)"
      : "repeat(auto-fill, minmax(160px, 1fr))",
    gap: isMobile ? "8px" : "14px",
    marginBottom: "80px",
  }}
>
  {integrations.map((item, i) => (
    <div
      key={i}
      style={{
        background: C.card,
        border: isMobile ? "none" : `1px solid ${C.border}`,
        borderRadius: "18px",
        padding: "26px 18px",
        textAlign: "center",
        cursor: "default",
        transition: "all 0.25s ease",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        if (!isMobile) {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.borderColor = "rgba(168,237,234,0.25)";
          e.currentTarget.style.boxShadow = "0 18px 40px rgba(0,0,0,0.35)";
        }
      }}
      onMouseLeave={(e) => {
        if (!isMobile) {
          e.currentTarget.style.transform = "";
          e.currentTarget.style.borderColor = C.border;
          e.currentTarget.style.boxShadow = "";
        }
      }}
    >
      {/* BIG LOGO */}
      <img
        src={item.icon}
        alt={item.name}
        style={{
          width: "64px",
          height: "64px",
          objectFit: "contain",
          marginBottom: "14px",
          filter: "brightness(1.05)",
        }}
      />

      {/* VERY FADED TEXT */}
      <div
        style={{
          fontFamily: fontSyne,
          fontWeight: 700,
          fontSize: "12px",
          color: "rgba(255,255,255,0.25)",
          letterSpacing: "0.5px",
        }}
      >
        {item.name}
      </div>

      {/* ALMOST INVISIBLE DESCRIPTION */}
      <div
        style={{
          fontSize: "10px",
          color: "rgba(255,255,255,0.15)",
          marginTop: "4px",
          lineHeight: 1.4,
        }}
      >
        {item.desc}
      </div>
    </div>
  ))}
</div>






       {/* ── PRICING ── */}
<div id="pricing" style={sectionHeader}>
  <div style={sectionTag}>
    <div style={sectionTagLine} />
    <span style={sectionTagText}>Pricing</span>
  </div>

  <h2 style={sectionH2}>
    Transparent Pricing.<br />No Surprises.
  </h2>

  <p style={sectionSub}>
    Every plan includes hosting, updates, and support. You grow — the system grows with you.
  </p>
</div>

<div
  style={{
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
    gap: isMobile ? "12px" : "18px",
    marginBottom: "80px",
    alignItems: "stretch",
    width: "100%",
  }}
>
  {plans.map((plan, i) => {
    const isActive = activePlan === plan.name;

    return (
      <div
        key={i}
        onClick={() => setActivePlan(plan.name)}
        style={{
          background: isActive
            ? "linear-gradient(145deg,#0e2027,#0f1923)"
            : C.card,

          borderTop: !isMobile ? `1px solid ${C.border}` : "none",
          borderRight: !isMobile ? `1px solid ${C.border}` : "none",
          borderBottom: !isMobile ? `1px solid ${C.border}` : "none",
          borderLeft:
            isMobile && isActive
              ? `3px solid ${plan.accent}`
              : !isMobile
              ? `1px solid ${C.border}`
              : "none",

          borderRadius: isMobile ? "0" : "20px",
          padding: isMobile ? "24px 20px" : "28px 24px",
          cursor: "pointer",
          transition: "all 0.25s",
          position: "relative",
          overflow: "hidden",

          // 🔥 IMPORTANT FIX
          width: "100%",
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* glow */}
        {isActive && (
          <div
            style={{
              position: "absolute",
              top: "-60px",
              right: "-60px",
              width: "200px",
              height: "200px",
              background: `radial-gradient(circle,${plan.accentGlow},transparent 70%)`,
              pointerEvents: "none",
            }}
          />
        )}

        {/* tag */}
        <div
          style={{
            display: "inline-block",
            fontSize: "10px",
            fontFamily: fontSyne,
            fontWeight: 700,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            padding: "4px 12px",
            borderRadius: "100px",
            marginBottom: "14px",
            background: `${plan.accent}22`,
            color: plan.tagColor,
          }}
        >
          {plan.tag}
        </div>

        {/* title */}
        <div
          style={{
            fontFamily: fontSyne,
            fontWeight: 800,
            fontSize: "1.1rem",
            color: "#fff",
            marginBottom: "6px",
          }}
        >
          {plan.name}
        </div>

        {/* subtitle */}
        <div
          style={{
            color: C.muted,
            fontSize: "12px",
            marginBottom: "18px",
          }}
        >
          {plan.period}
        </div>

        <div
          style={{
            height: "1px",
            background: C.border,
            marginBottom: "18px",
          }}
        />

        {/* features */}
        <div style={{ flex: 1 }}>
          {plan.features.map((f, j) => (
            <div
              key={j}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "10px",
                fontSize: "13px",
                color: isActive
                  ? C.text
                  : "rgba(255,255,255,0.5)",
              }}
            >
              <span
                style={{
                  color: plan.accent,
                  flexShrink: 0,
                }}
              >
                ✓
              </span>
              {f}
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            goContact();
          }}
          style={{
            width: "100%",
            marginTop: "18px",
            padding: "13px",
            borderRadius: "12px",
            fontFamily: fontSyne,
            fontWeight: 700,
            fontSize: "13px",
            cursor: "pointer",
            background: isActive
              ? `linear-gradient(135deg,${plan.accent},${plan.accent}99)`
              : "rgba(255,255,255,0.05)",
            border: isActive
              ? "none"
              : "1px solid rgba(255,255,255,0.1)",
            color: isActive
              ? "#08080f"
              : "rgba(255,255,255,0.7)",
          }}
        >
          {plan.name === "Enterprise"
            ? "Request Quote"
            : "Request Quote"}
        </button>
      </div>
    );
  })}
</div>
        {/* ── FINAL CTA ── */}
        <div style={{
          position: "relative",
          borderRadius: isMobile ? "0" : "28px",
          padding: isMobile ? "52px 20px" : "80px 52px",
          textAlign: "center", overflow: "hidden",
          background: "linear-gradient(135deg,#0a1628 0%,#0d1f0d 50%,#1a0a1e 100%)",
          border: isMobile ? "none" : `1px solid ${C.border}`,
          marginBottom: "48px",
        }}>
          {[600, 400, 200].map((size, i) => (
            <div key={i} style={{
              position: "absolute", borderRadius: "50%",
              border: "1px solid rgba(168,237,234,0.06)",
              width: `${size}px`, height: `${size}px`,
              top: "50%", left: "50%",
              transform: "translate(-50%,-50%)",
              pointerEvents: "none",
            }} />
          ))}

          <h2 style={{
            position: "relative", fontFamily: fontSyne, fontWeight: 900,
            fontSize: isMobile ? "1.6rem" : "clamp(1.6rem,4vw,2.5rem)",
            color: "#fff", letterSpacing: "-0.8px", margin: "0 0 14px",
          }}>
            Ready to Run a{" "}
            <span style={{ background: "linear-gradient(90deg,#a8edea,#fed6e3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Smarter Business?
            </span>
          </h2>

          <p style={{ position: "relative", color: C.muted, fontSize: "0.95rem", lineHeight: 1.75, maxWidth: "460px", margin: "0 auto 32px" }}>
            Book a free consultation and we'll map out a POS system built specifically for your operations — at no obligation.
          </p>

          <div style={{ position: "relative", display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", flexDirection: isMobile ? "column" : "row", maxWidth: isMobile ? "100%" : "none", margin: "0 auto" }}>
            <button onClick={goContact} style={{ ...btnPrimary, fontSize: "15px", padding: "15px 36px" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 36px rgba(168,237,234,0.4)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 24px rgba(168,237,234,0.25)"; }}>
              Free Consultation & Demo
            </button>
            <button onClick={() => window.open("https://wa.me/254700000000", "_blank")} style={{ ...btnGhost, fontSize: "15px", padding: "15px 32px" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(168,237,234,0.3)"; e.currentTarget.style.color = C.mint; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)"; e.currentTarget.style.color = "rgba(255,255,255,0.8)"; }}>
              WhatsApp Us →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}