import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle, faBolt, faCloud, faShieldAlt, faHeadset,
  faChartBar, faStore, faSync, faServer, faPlug, faReceipt
} from "@fortawesome/free-solid-svg-icons";
import heroImage from "../../assets/img/hero.png";

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

  const integrations = [
    { name: "QuickBooks", desc: "Accounting sync", icon: "◈" },
    { name: "KRA eTIMS", desc: "Tax compliance", icon: "⬡" },
    { name: "M-Pesa", desc: "Mobile payments", icon: "◉" },
    { name: "Shopify", desc: "Online store sync", icon: "◈" },
    { name: "AI Insights", desc: "Smart analytics", icon: "⬡" },
    { name: "Custom APIs", desc: "Any integration", icon: "◉" },
  ];

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
      price: "KES 15,000",
      period: "setup + KES 3,500 /mo",
      accent: "#a8edea",
      tag: "Small businesses",
      features: [
        "1–2 terminals",
        "Offline + online mode",
        "Basic sales reports",
        "M-Pesa support",
        "KRA eTIMS receipts",
        "Cloud backup",
      ],
    },
    {
      name: "Business",
      price: "KES 35,000",
      period: "setup + KES 7,500 /mo",
      accent: "#fed6e3",
      tag: "Most Popular",
      features: [
        "Up to 5 terminals",
        "Advanced reporting suite",
        "QuickBooks integration",
        "Full inventory management",
        "Multi-payment methods",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Fully tailored",
      accent: "#d4fc79",
      tag: "Large operations",
      features: [
        "Unlimited terminals",
        "Multi-branch system",
        "Custom development",
        "Full API access",
        "Dedicated account manager",
      ],
    },
  ];

  const S = {
    page: {
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      color: "#0f1923",
      maxWidth: isMobile ? "100%" : "1200px",
      margin: isMobile ? "0" : "0 auto",
      padding: isMobile ? "0" : "0 24px",
      width: "100%",
      boxSizing: "border-box",
    },

    // HERO
    heroWrap: {
      position: "relative",
      backgroundImage: `url(${heroImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: isMobile ? "0px" : "20px",
      overflow: "hidden",
      marginBottom: isMobile ? "36px" : "56px",
      minHeight: isMobile ? "auto" : "520px",
      display: "flex",
      alignItems: "center",
    },
    heroOverlay: {
      position: "absolute",
      inset: 0,
      background: isMobile
        ? "linear-gradient(180deg, rgba(8,8,18,0.92) 0%, rgba(8,8,18,0.88) 100%)"
        : "linear-gradient(100deg, rgba(8,8,18,0.95) 45%, rgba(8,8,18,0.35) 100%)",
    },
    heroContent: {
      position: "relative",
      padding: isMobile ? "36px 20px" : "64px 52px",
      maxWidth: isMobile ? "100%" : "660px",
      width: "100%",
    },
    heroEyebrowRow: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "16px",
    },
    heroEyebrowLine: {
      width: "22px",
      height: "2px",
      background: "#a8edea",
      borderRadius: "2px",
      flexShrink: 0,
    },
    heroEyebrow: {
      color: "#a8edea",
      fontSize: "10px",
      fontWeight: 700,
      letterSpacing: "2.5px",
      textTransform: "uppercase",
    },
    heroH1: {
      color: "#fff",
      fontWeight: 900,
      fontSize: isMobile ? "1.65rem" : "clamp(1.9rem, 3.5vw, 2.7rem)",
      lineHeight: 1.2,
      letterSpacing: "-0.5px",
      margin: "0 0 16px 0",
    },
    heroAccent: {
      background: "linear-gradient(90deg, #a8edea, #fed6e3)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    heroBody: {
      color: "rgba(255,255,255,0.8)",
      fontSize: isMobile ? "0.92rem" : "1.02rem",
      lineHeight: 1.8,
      margin: "0 0 10px 0",
    },
    heroSub: {
      color: "rgba(255,255,255,0.48)",
      fontSize: "0.84rem",
      lineHeight: 1.7,
      margin: "0 0 24px 0",
    },
    heroDiff: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr",
      gap: isMobile ? "6px" : "8px",
      marginBottom: "28px",
    },
    heroDiffItem: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      background: "rgba(168,237,234,0.05)",
      border: "1px solid rgba(168,237,234,0.13)",
      borderRadius: "8px",
      padding: isMobile ? "8px 10px" : "9px 13px",
    },
    heroDiffIcon: {
      color: "#a8edea",
      fontSize: "12px",
      flexShrink: 0,
    },
    heroDiffLabel: {
      color: "rgba(255,255,255,0.78)",
      fontSize: isMobile ? "10.5px" : "12px",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    heroCtaRow: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: "10px",
      flexWrap: "wrap",
      alignItems: isMobile ? "stretch" : "center",
    },
    btnPrimary: {
      background: "linear-gradient(135deg, #a8edea 0%, #7dd8d4 100%)",
      border: "none",
      color: "#0f1923",
      fontWeight: 800,
      borderRadius: "10px",
      padding: isMobile ? "14px 20px" : "13px 30px",
      fontSize: "14px",
      cursor: "pointer",
      letterSpacing: "0.2px",
      boxShadow: "0 4px 24px rgba(168,237,234,0.28)",
      transition: "transform 0.15s, box-shadow 0.15s",
      textAlign: "center",
    },
    btnGhost: {
      background: "transparent",
      border: "1px solid rgba(255,255,255,0.22)",
      color: "rgba(255,255,255,0.85)",
      fontWeight: 600,
      borderRadius: "10px",
      padding: isMobile ? "14px 20px" : "13px 28px",
      fontSize: "14px",
      cursor: "pointer",
      transition: "border-color 0.15s, color 0.15s",
      textAlign: "center",
    },
    heroTrust: {
      color: "rgba(255,255,255,0.28)",
      fontSize: "10.5px",
      marginTop: "16px",
      letterSpacing: "0.2px",
      textAlign: isMobile ? "center" : "left",
    },

    // SECTION HEADERS
    sectionLabel: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "8px",
    },
    sectionLabelLine: {
      width: "22px",
      height: "2px",
      background: "#a8edea",
      borderRadius: "2px",
    },
    sectionLabelText: {
      color: "#a8edea",
      fontSize: "10.5px",
      fontWeight: 700,
      letterSpacing: "2px",
      textTransform: "uppercase",
    },
    sectionTitle: {
      fontWeight: 800,
      fontSize: isMobile ? "1.4rem" : "1.75rem",
      letterSpacing: "-0.3px",
      color: "#0f1923",
      margin: "0 0 8px 0",
    },
    sectionSub: {
      color: "#6b7280",
      fontSize: "0.92rem",
      lineHeight: 1.7,
      margin: "0 0 32px 0",
      maxWidth: "520px",
    },

    // WHY BOTHIVE CARDS
    diffGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(280px, 1fr))",
      gap: "12px",
      marginBottom: isMobile ? "44px" : "64px",
    },
    diffCard: {
      background: "#fff",
      border: "1px solid #f0f0f0",
      borderRadius: "14px",
      padding: isMobile ? "18px" : "24px",
      transition: "transform 0.2s, box-shadow 0.2s",
      cursor: "default",
    },
    diffIcon: {
      width: "40px",
      height: "40px",
      borderRadius: "10px",
      background: "rgba(168,237,234,0.15)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "12px",
      color: "#0f7a76",
      fontSize: "16px",
    },
    diffLabel: {
      fontWeight: 700,
      fontSize: "0.94rem",
      color: "#0f1923",
      marginBottom: "5px",
    },
    diffDesc: {
      color: "#6b7280",
      fontSize: "0.85rem",
      lineHeight: 1.65,
    },

    // INTEGRATIONS
    intGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(auto-fill, minmax(150px, 1fr))",
      gap: "10px",
      marginBottom: isMobile ? "44px" : "64px",
    },
    intCard: {
      background: "#f9fafb",
      border: "1px solid #eeeeee",
      borderRadius: "12px",
      padding: "16px 12px",
      textAlign: "center",
    },
    intIcon: {
      color: "#a8edea",
      fontSize: "20px",
      marginBottom: "8px",
      display: "block",
    },
    intName: {
      fontWeight: 700,
      fontSize: "13px",
      color: "#0f1923",
      marginBottom: "3px",
    },
    intDesc: {
      color: "#9ca3af",
      fontSize: "11.5px",
    },

    // PRICING
    pricingGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(270px, 1fr))",
      gap: "14px",
      marginBottom: isMobile ? "44px" : "64px",
    },
    planCard: (accent, active) => ({
      background: active ? "#0f1923" : "#fff",
      border: active ? `2px solid ${accent}` : "1px solid #eeeeee",
      borderRadius: "16px",
      padding: isMobile ? "22px 18px" : "28px 24px",
      cursor: "pointer",
      transition: "transform 0.2s, box-shadow 0.2s",
      boxShadow: active ? `0 8px 32px rgba(0,0,0,0.18)` : "none",
      position: "relative",
      overflow: "hidden",
    }),
    planTag: (accent) => ({
      display: "inline-block",
      background: accent + "22",
      color: accent === "#fed6e3" ? "#b0587a" : accent === "#d4fc79" ? "#4a7c00" : "#0f7a76",
      fontSize: "10.5px",
      fontWeight: 700,
      letterSpacing: "1.5px",
      textTransform: "uppercase",
      padding: "4px 10px",
      borderRadius: "20px",
      marginBottom: "12px",
    }),
    planName: (active) => ({
      fontWeight: 800,
      fontSize: "1.05rem",
      color: active ? "#fff" : "#0f1923",
      marginBottom: "6px",
    }),
    planPrice: (accent, active) => ({
      fontWeight: 900,
      fontSize: isMobile ? "1.6rem" : "1.8rem",
      color: active ? accent : "#0f1923",
      letterSpacing: "-0.5px",
      lineHeight: 1.1,
    }),
    planPeriod: (active) => ({
      color: active ? "rgba(255,255,255,0.45)" : "#9ca3af",
      fontSize: "12px",
      marginBottom: "18px",
      marginTop: "4px",
    }),
    planDivider: (active) => ({
      height: "1px",
      background: active ? "rgba(255,255,255,0.1)" : "#f0f0f0",
      marginBottom: "16px",
    }),
    planFeature: (active) => ({
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "10px",
      color: active ? "rgba(255,255,255,0.8)" : "#4b5563",
      fontSize: "13.5px",
    }),
    planCheckIcon: (accent) => ({
      color: accent,
      fontSize: "13px",
      flexShrink: 0,
    }),
    planBtn: (accent, active) => ({
      width: "100%",
      marginTop: "20px",
      background: active ? `linear-gradient(135deg, ${accent}, ${accent}99)` : "transparent",
      border: active ? "none" : "1px solid #e5e7eb",
      color: active ? "#0f1923" : "#374151",
      fontWeight: 700,
      borderRadius: "9px",
      padding: "12px",
      fontSize: "13.5px",
      cursor: "pointer",
    }),

    // FINAL CTA
    ctaBanner: {
      background: "linear-gradient(135deg, #0f1923 0%, #1a2a3a 100%)",
      borderRadius: isMobile ? "0px" : "20px",
      padding: isMobile ? "40px 20px" : "64px 52px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
      marginBottom: "40px",
    },
    ctaGlow: {
      position: "absolute",
      top: "-80px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "400px",
      height: "400px",
      background: "radial-gradient(circle, rgba(168,237,234,0.12) 0%, transparent 70%)",
      pointerEvents: "none",
    },
    ctaH2: {
      color: "#fff",
      fontWeight: 900,
      fontSize: isMobile ? "1.4rem" : "clamp(1.5rem, 3vw, 2.2rem)",
      letterSpacing: "-0.4px",
      margin: "0 0 12px 0",
    },
    ctaSub: {
      color: "rgba(255,255,255,0.55)",
      fontSize: "0.93rem",
      lineHeight: 1.7,
      margin: "0 auto 28px auto",
      maxWidth: "480px",
    },
    ctaButtonRow: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: "12px",
      justifyContent: "center",
      alignItems: "stretch",
      maxWidth: isMobile ? "320px" : "none",
      margin: "0 auto",
    },
  };

  return (
    <div style={S.page}>

      {/* ── HERO ── */}
      <div style={S.heroWrap}>
        <div style={S.heroOverlay} />
        <div style={S.heroContent}>

          <div style={S.heroEyebrowRow}>
            <span style={S.heroEyebrowLine} />
            <span style={S.heroEyebrow}>BOTHIVE POS</span>
          </div>

          <h1 style={S.heroH1}>
            The Last POS System<br />
            <span style={S.heroAccent}>Your Business Will Ever Need.</span>
          </h1>

          <p style={S.heroBody}>
            Bothive delivers a fully branded, enterprise-grade POS system — designed around
            your exact business, deployed by our team, and managed for the long term.
            No generic software. No rigid subscriptions. Full ownership, full control.
          </p>

          <p style={S.heroSub}>
            Infrastructure, updates, compliance, and support — handled end-to-end by us,
            so you can focus entirely on running your business.
          </p>

          <div style={S.heroDiff}>
            {[
              { icon: "◈", label: "White-Label & Fully Branded" },
              { icon: "⬡", label: "Offline-First Architecture" },
              { icon: "◉", label: "KRA eTIMS Compliant" },
              { icon: "◈", label: "QuickBooks & Shopify Ready" },
              { icon: "⬡", label: "Managed Hosting & Support" },
              { icon: "◉", label: "Custom Business Workflows" },
            ].map((d, i) => (
              <div key={i} style={S.heroDiffItem}>
                <span style={S.heroDiffIcon}>{d.icon}</span>
                <span style={S.heroDiffLabel}>{d.label}</span>
              </div>
            ))}
          </div>

          <div style={S.heroCtaRow}>
            <button
              onClick={goContact}
              style={S.btnPrimary}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(168,237,234,0.38)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 24px rgba(168,237,234,0.28)";
              }}
            >
              Free Consultation & Demo
            </button>

            <button
              onClick={() => window.open("https://wa.me/254700000000", "_blank")}
              style={S.btnGhost}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(168,237,234,0.5)";
                e.currentTarget.style.color = "#a8edea";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
                e.currentTarget.style.color = "rgba(255,255,255,0.85)";
              }}
            >
              Talk to Our Team →
            </button>
          </div>

          <p style={S.heroTrust}>
            No lock-in contracts · Built & managed in Kenya · Serving retail & hospitality
          </p>
        </div>
      </div>

      {/* ── MIDDLE SECTIONS (padded on mobile) ── */}
      <div style={{ padding: isMobile ? "0 16px" : "0" }}>

      {/* ── WHY BOTHIVE POS ── */}
      <div style={S.sectionLabel}>
        <span style={S.sectionLabelLine} />
        <span style={S.sectionLabelText}>Why Bothive</span>
      </div>
      <h2 style={S.sectionTitle}>Built Different. Managed Different.</h2>
      <p style={S.sectionSub}>
        Most POS companies sell you software and walk away. We design, deploy, and
        operate your system — so it works perfectly, every day.
      </p>

      <div style={S.diffGrid}>
        {differentiators.map((d, i) => (
          <div
            key={i}
            style={S.diffCard}
            onMouseEnter={e => {
              if (!isMobile) {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.08)";
              }
            }}
            onMouseLeave={e => {
              if (!isMobile) {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }
            }}
          >
            <div style={S.diffIcon}>
              <FontAwesomeIcon icon={d.icon} />
            </div>
            <div style={S.diffLabel}>{d.label}</div>
            <div style={S.diffDesc}>{d.desc}</div>
          </div>
        ))}
      </div>

      {/* ── INTEGRATIONS ── */}
      <div style={S.sectionLabel}>
        <span style={S.sectionLabelLine} />
        <span style={S.sectionLabelText}>Integrations</span>
      </div>
      <h2 style={S.sectionTitle}>Connects With Everything You Use</h2>
      <p style={S.sectionSub}>
        From accounting to mobile money — your POS plugs into the tools your
        business already runs on.
      </p>

      <div style={S.intGrid}>
        {integrations.map((item, i) => (
          <div key={i} style={S.intCard}>
            <span style={S.intIcon}>{item.icon}</span>
            <div style={S.intName}>{item.name}</div>
            <div style={S.intDesc}>{item.desc}</div>
          </div>
        ))}
      </div>

      {/* ── PRICING ── */}
      <div style={S.sectionLabel}>
        <span style={S.sectionLabelLine} />
        <span style={S.sectionLabelText}>Pricing</span>
      </div>
      <h2 style={S.sectionTitle}>Transparent Pricing. No Surprises.</h2>
      <p style={S.sectionSub}>
        Every plan includes hosting, updates, and support. You grow — the system grows with you.
      </p>

      <div style={S.pricingGrid}>
        {plans.map((plan, i) => {
          const active = activePlan === plan.name;
          return (
            <div
              key={i}
              style={S.planCard(plan.accent, active)}
              onClick={() => setActivePlan(plan.name)}
              onMouseEnter={e => {
                if (!active && !isMobile) {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.08)";
                }
              }}
              onMouseLeave={e => {
                if (!active && !isMobile) {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }
              }}
            >
              <div style={S.planTag(plan.accent)}>{plan.tag}</div>
              <div style={S.planName(active)}>{plan.name}</div>
              <div style={S.planPrice(plan.accent, active)}>{plan.price}</div>
              <div style={S.planPeriod(active)}>{plan.period}</div>
              <div style={S.planDivider(active)} />
              {plan.features.map((f, j) => (
                <div key={j} style={S.planFeature(active)}>
                  <FontAwesomeIcon icon={faCheckCircle} style={S.planCheckIcon(plan.accent)} />
                  {f}
                </div>
              ))}
              <button
                onClick={(e) => { e.stopPropagation(); goContact(); }}
                style={S.planBtn(plan.accent, active)}
              >
                {plan.name === "Enterprise" ? "Request a Quote" : "Get Started"}
              </button>
            </div>
          );
        })}
      </div>

      </div>{/* end middle sections wrapper */}

      {/* ── FINAL CTA ── */}
      <div style={S.ctaBanner}>
        <div style={S.ctaGlow} />
        <h2 style={S.ctaH2}>
          Ready to Run a Smarter Business?
        </h2>
        <p style={S.ctaSub}>
          Book a free consultation and we'll map out a POS system built specifically
          for your operations — at no obligation.
        </p>
        <div style={S.ctaButtonRow}>
          <button
            onClick={goContact}
            style={{ ...S.btnPrimary, fontSize: "15px", padding: "14px 36px" }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(168,237,234,0.38)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(168,237,234,0.28)";
            }}
          >
            Free Consultation & Demo
          </button>
          <button
            onClick={() => window.open("https://wa.me/254700000000", "_blank")}
            style={{ ...S.btnGhost, fontSize: "15px", padding: "14px 32px" }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "rgba(168,237,234,0.5)";
              e.currentTarget.style.color = "#a8edea";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
              e.currentTarget.style.color = "rgba(255,255,255,0.85)";
            }}
          >
            WhatsApp Us →
          </button>
        </div>
      </div>

    </div>
  );
}
