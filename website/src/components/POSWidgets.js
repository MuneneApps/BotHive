import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle, faBolt, faCloud, faShieldAlt, faHeadset,
  faChartBar, faStore, faArrowRight, faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Card, Row, Col, Button } from "@themesberg/react-bootstrap";
import { Routes } from "../routes";

import heroImage from "../assets/img/hero.png";
import posImage from "../assets/img/retail-pos.jpg";
import supermarketImage from "../assets/img/supermarket-pos.jpg";
import winesImage from "../assets/img/wines-pos.jpg";
import restaurantImage from "../assets/img/restaurant-pos.jpg";
import pharmacyImage from "../assets/img/pharmacy.jpg";
import hardwareImage from "../assets/img/hardware.jpg";
import electronicsImage from "../assets/img/elecphone.jpg";
import beautyImage from "../assets/img/beauty.jpg";

import QuickBooksImg from "../assets/img/quickboks.png";
import EtimsImg from "../assets/img/etims.jpg";
import MpesaImg from "../assets/img/mpesa.png";
import ShopifyImg from "../assets/img/shopify.png";
import AiImg from "../assets/img/ai.jpeg";
import ApiImg from "../assets/img/api.png";

// ─────────────────────────────────────────────
// 1. HERO WIDGET
// ─────────────────────────────────────────────
export const POSHeroWidget = () => {
  const history = useHistory();

  const badges = [
    "QuickBooks Accounting Engine",
    "KRA eTIMS Ready",
    "M-Pesa Integrations",
    "Pesapal Card Payments",
    "Bulk SMS",
    "Email Reports",
    "Full ERP Suite",
    "Inventory & Stock Control",
  ];

  return (
    <Card border="light" className="shadow-sm p-0 overflow-hidden" style={{ borderRadius: "16px" }}>
      <div
        style={{
          position: "relative",
          minHeight: "340px",
          display: "flex",
          alignItems: "center",
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(100deg, rgba(8,8,18,0.97) 45%, rgba(8,8,18,0.5) 100%)",
          }}
        />
        {/* Grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(168,237,234,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(168,237,234,0.04) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at 70% 50%,transparent 30%,black 100%)",
          }}
        />

        <div style={{ position: "relative", padding: "40px 36px", maxWidth: "600px" }}>
          {/* Tag */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#a8edea" }} />
            <span
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#a8edea",
              }}
            >
              Bothive ERP & POS Systems
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              lineHeight: 1.1,
              color: "#fff",
              margin: "0 0 14px",
              letterSpacing: "-1px",
            }}
          >
            From the Counter to the{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#a8edea,#fed6e3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Entire Business
            </span>{" "}
            — We've Got You Covered
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "0.9rem",
              lineHeight: 1.75,
              margin: "0 0 20px",
              fontWeight: 300,
            }}
          >
            Whether you need a lean POS for your shop or a full ERP to run your entire operation —
            Bothive delivers business systems built for Kenyan businesses. KRA eTIMS ready, seamless
            payments, smart inventory, and rock-solid offline performance.
          </p>

          {/* Badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
            {badges.map((label, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(168,237,234,0.06)",
                  border: "1px solid rgba(168,237,234,0.18)",
                  borderRadius: "100px",
                  padding: "5px 12px",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.75)",
                  fontWeight: 500,
                }}
              >
                <div
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "#a8edea",
                    flexShrink: 0,
                  }}
                />
                {label}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button
              onClick={() => history.push("/contact")}
              style={{
                background: "linear-gradient(135deg, #a8edea, #7dd8d4)",
                color: "#08080f",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                padding: "12px 24px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(168,237,234,0.3)",
              }}
            >
              Free Consultation →
            </button>
            <button
              onClick={() => document.getElementById("pos-pricing")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                background: "rgba(255,255,255,0.04)",
                color: "rgba(255,255,255,0.8)",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 600,
                fontSize: "13px",
                padding: "12px 20px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.14)",
                cursor: "pointer",
              }}
            >
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};




// ─────────────────────────────────────────────
// 2. POS SOLUTIONS WIDGET
// ─────────────────────────────────────────────
export const POSSolutionsWidget = () => {
  const history = useHistory();

  const solutions = [
    { title: "General Retail POS", image: posImage, desc: "Flexible POS built for retail businesses.", link: Routes?.POSRetail?.path },
    { title: "Supermarket POS", image: supermarketImage, desc: "Fast checkout, barcode scanning, and advanced inventory control.", link: Routes?.POSSupermarket?.path },
    { title: "Wines & Spirits POS", image: winesImage, desc: "Designed for liquor stores and wholesale outlets with fast billing and stock tracking.", link: Routes?.POSWines?.path },
    { title: "Restaurant / Bar POS", image: restaurantImage, desc: "Table management, kitchen orders, and fast-paced service operations.", link: Routes?.POSRestaurant?.path },
    { title: "Pharmacy POS", image: pharmacyImage, desc: "Prescription-ready pharmacy system with stock control, expiry tracking, and fast billing.", link: Routes?.POSPharmacy?.path },
    { title: "Hardware Store POS", image: hardwareImage, desc: "Built for hardware and construction stores with bulk sales, supplier tracking, and inventory.", link: Routes?.POSHardware?.path },
    { title: "Electronics & Phones POS", image: electronicsImage, desc: "Manage devices, accessories, serial tracking, repairs, and electronics sales seamlessly.", link: Routes?.POSElectronics?.path },
    { title: "Beauty & Cosmetics POS", image: beautyImage, desc: "Perfect for salons, spas, beauty shops, wig installers, makeup artists, and cosmetics retailers.", link: Routes?.POSBeauty?.path },
  ];

  const erpSolutions = [
    { title: "Law Firm ERP", image: posImage, desc: "Case management, billing, client records, and document control built for legal practices.", link: Routes?.ERPLawFirm?.path },
    { title: "Hospital ERP", image: supermarketImage, desc: "Patient records, pharmacy, billing, appointments, and ward management in one system.", link: Routes?.ERPHospital?.path },
    { title: "Property & Rental Management ERP", image: restaurantImage, desc: "Manage units, tenants, leases, rent collection, and maintenance requests effortlessly.", link: Routes?.ERPProperty?.path },
    { title: "School Management ERP", image: hardwareImage, desc: "Admissions, fees, timetables, grades, and staff management for schools of all sizes.", link: Routes?.ERPSchool?.path },
  ];

  const SolutionCard = ({ item }) => (
    <div
      onClick={() => item.link && history.push(item.link)}
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid rgba(0,0,0,0.08)",
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s",
        background: "#fff",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={item.image}
          alt={item.title}
          style={{ width: "100%", height: "130px", objectFit: "cover", display: "block" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: "40px",
            background: "linear-gradient(transparent, #fff)",
          }}
        />
      </div>
      <div style={{ padding: "12px 14px" }}>
        <div style={{ fontWeight: 700, fontSize: "13px", color: "#111", marginBottom: "4px" }}>
          {item.title}
        </div>
        <div style={{ color: "#888", fontSize: "11.5px", lineHeight: 1.5, marginBottom: "10px" }}>
          {item.desc}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", fontWeight: 600, color: "#0f7a76" }}>
          View More <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "10px" }} />
        </div>
      </div>
    </div>
  );

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light d-flex justify-content-between align-items-center">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
            <div style={{ width: "20px", height: "2px", background: "#a8edea", borderRadius: "2px" }} />
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#a8edea" }}>
              Bothive ERP & POS Solutions
            </span>
          </div>
          <h5 className="mb-0">Built For Every Business Type</h5>
        </div>
        <small className="text-muted">12 industry verticals</small>
      </Card.Header>

      <Card.Body>
        {/* ── POS Section ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <div style={{ width: "3px", height: "18px", background: "#a8edea", borderRadius: "2px" }} />
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#555" }}>
            POS Systems
          </span>
          <div style={{ flex: 1, height: "1px", background: "rgba(0,0,0,0.06)" }} />
        </div>
        <Row className="g-3 mb-4">
          {solutions.map((item, i) => (
            <Col xs={12} sm={6} xl={3} key={i}>
              <SolutionCard item={item} />
            </Col>
          ))}
        </Row>

        {/* ── ERP Section ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <div style={{ width: "3px", height: "18px", background: "#fed6e3", borderRadius: "2px" }} />
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#555" }}>
            ERP Suite
          </span>
          <div style={{ flex: 1, height: "1px", background: "rgba(0,0,0,0.06)" }} />
        </div>
        <Row className="g-3">
          {erpSolutions.map((item, i) => (
            <Col xs={12} sm={6} xl={3} key={i}>
              <SolutionCard item={item} />
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────
// 3. WHY BOTHIVE WIDGET
// ─────────────────────────────────────────────
export const WhyBothiveWidget = () => {
  const differentiators = [
    { icon: faBolt, label: "Offline-First Architecture", desc: "Sales never stop — sync happens the moment connection returns." },
    { icon: faCloud, label: "Managed Cloud Infrastructure", desc: "Hosting, backups, updates — all handled by our team." },
    { icon: faShieldAlt, label: "KRA eTIMS Built-In", desc: "Fully compliant receipting out of the box. No extra setup." },
    { icon: faChartBar, label: "Real-Time Reporting", desc: "Sales, inventory, staff performance — live from any device." },
    { icon: faStore, label: "White-Label & Branded", desc: "Your name, your identity. Not ours on the screen." },
    { icon: faHeadset, label: "Dedicated Support Team", desc: "A real team behind your system, not a ticket queue." },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
          <div style={{ width: "20px", height: "2px", background: "#a8edea", borderRadius: "2px" }} />
          <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#a8edea" }}>
            Why Bothive
          </span>
        </div>
        <h5 className="mb-0">Built Different. Managed Different.</h5>
        <small className="text-muted">
          Most POS companies sell you software and walk away. We design, deploy, and operate your system.
        </small>
      </Card.Header>
      <Card.Body className="p-0">
        <Row className="g-0">
          {differentiators.map((d, i) => (
            <Col xs={12} sm={6} xl={4} key={i}>
              <div
                style={{
                  padding: "20px",
                  borderBottom: i < 3 || (i >= 3 && i < 6) ? "1px solid rgba(0,0,0,0.06)" : "none",
                  borderRight: (i % 2 === 0) ? "1px solid rgba(0,0,0,0.06)" : "none",
                  height: "100%",
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "#f8fffe"}
                onMouseLeave={e => e.currentTarget.style.background = ""}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "10px",
                    background: "rgba(168,237,234,0.12)",
                    border: "1px solid rgba(168,237,234,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0f7a76",
                    fontSize: "15px",
                    marginBottom: "10px",
                  }}
                >
                  <FontAwesomeIcon icon={d.icon} />
                </div>
                <div style={{ fontWeight: 700, fontSize: "13px", color: "#111", marginBottom: "4px" }}>
                  {d.label}
                </div>
                <div style={{ color: "#888", fontSize: "12px", lineHeight: 1.6 }}>{d.desc}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────
// 4. INTEGRATIONS WIDGET
// ─────────────────────────────────────────────
export const POSIntegrationsWidget = () => {
  const integrations = [
    { name: "QuickBooks", desc: "Accounting sync", icon: QuickBooksImg },
    { name: "KRA eTIMS", desc: "Tax compliance", icon: EtimsImg },
    { name: "M-Pesa", desc: "Mobile money payments", icon: MpesaImg },
    { name: "Shopify", desc: "Online store sync", icon: ShopifyImg },
    { name: "AI Insights", desc: "Smart analytics", icon: AiImg },
    { name: "Custom APIs", desc: "Any system integration", icon: ApiImg },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light d-flex justify-content-between align-items-center">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
            <div style={{ width: "20px", height: "2px", background: "#a8edea", borderRadius: "2px" }} />
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#a8edea" }}>
              Integrations
            </span>
          </div>
          <h5 className="mb-0">Connects With Everything You Use</h5>
        </div>
        <small className="text-muted">6 integrations</small>
      </Card.Header>
      <Card.Body>
        <Row className="g-3">
          {integrations.map((item, i) => (
            <Col xs={6} sm={4} md={2} key={i}>
              <div
                style={{
                  borderRadius: "12px",
                  border: "1px solid rgba(0,0,0,0.08)",
                  padding: "16px 12px",
                  textAlign: "center",
                  transition: "all 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
                  e.currentTarget.style.borderColor = "rgba(168,237,234,0.4)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow = "";
                  e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                }}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  style={{
                    width: "48px",
                    height: "48px",
                    objectFit: "contain",
                    marginBottom: "8px",
                    display: "block",
                    margin: "0 auto 8px",
                  }}
                />
                <div style={{ fontWeight: 700, fontSize: "11px", color: "#333" }}>{item.name}</div>
                <div style={{ fontSize: "10px", color: "#aaa", marginTop: "2px" }}>{item.desc}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────
// 5. PRICING WIDGET
// ─────────────────────────────────────────────
export const POSPricingWidget = () => {
  const [activePlan, setActivePlan] = useState("Business");
  const history = useHistory();

  const plans = [
    {
      name: "Starter",
      period: "Small Business Setup",
      accent: "#a8edea",
      tagColor: "#0f7a76",
      tag: "Starter Package",
      features: [
        "Single Terminal Support", "Multi-User Access", "Integrated Dashboard",
        "Cash / MPESA / Card (Manual)", "Product Modifiers (Cold / Warm etc.)",
        "End of Day Sales Reports", "Stock Sales Reports", "Waiter / Cashier Reports",
        "Export Data (Excel / PDF)", "Local Backup", "Simple Shift Management", "User Roles & Permissions",
      ],
    },
    {
      name: "Business",
      period: "Growing Businesses",
      accent: "#fed6e3",
      tagColor: "#b0587a",
      tag: "Business Package",
      features: [
        "Everything in Starter", "Multiple Terminal Support", "Web & Mobile Reporting App",
        "Advanced Integrated Dashboard", "MPESA Integration", "Detailed Product & Recipe Management",
        "Advanced Sales & Profit Reports", "Automatic End of Day Email Reports",
        "Analytics Engine", "Additional Terminals (licensed)", "Advanced Shift Management", "Granular User Permissions",
      ],
    },
    {
      name: "Enterprise",
      period: "Multi-Branch Operations",
      accent: "#d4fc79",
      tagColor: "#4a7c00",
      tag: "Enterprise Package",
      features: [
        "Multiple Terminals / Locations", "Web & Mobile Reporting App",
        "Advanced Integrated Dashboard", "MPESA Integration", "Card Payments Integration",
        "Profit & Loss Reporting", "Waiter / Cashier Reports", "Analytics Engine",
        "Auto Backup (Cloud / Local)", "Shift Management", "Granular Permissions", "Custom Integrations",
      ],
    },
  ];

  return (
    <Card border="light" className="shadow-sm" id="pos-pricing">
      <Card.Header className="border-bottom border-light">
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
          <div style={{ width: "20px", height: "2px", background: "#a8edea", borderRadius: "2px" }} />
          <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#a8edea" }}>
            Pricing
          </span>
        </div>
        <h5 className="mb-0">Transparent Pricing. No Surprises.</h5>
        <small className="text-muted">
          Every plan includes hosting, updates, and support. You grow — the system grows with you.
        </small>
      </Card.Header>
      <Card.Body>
        <Row className="g-3 align-items-stretch">
          {plans.map((plan, i) => {
            const isActive = activePlan === plan.name;
            return (
              <Col xs={12} md={4} key={i}>
                <div
                  onClick={() => setActivePlan(plan.name)}
                  style={{
                    borderRadius: "14px",
                    border: isActive ? `2px solid ${plan.accent}` : "1px solid rgba(0,0,0,0.09)",
                    padding: "20px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    background: isActive
                      ? "linear-gradient(145deg, #0e2027, #0f1923)"
                      : "#fff",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* glow */}
                  {isActive && (
                    <div
                      style={{
                        position: "absolute",
                        top: "-40px",
                        right: "-40px",
                        width: "140px",
                        height: "140px",
                        background: `radial-gradient(circle, ${plan.accent}22, transparent 70%)`,
                        pointerEvents: "none",
                      }}
                    />
                  )}

                  {/* tag */}
                  <div
                    style={{
                      display: "inline-block",
                      fontSize: "9px",
                      fontWeight: 700,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      padding: "3px 10px",
                      borderRadius: "100px",
                      marginBottom: "10px",
                      background: `${plan.accent}22`,
                      color: isActive ? plan.accent : plan.tagColor,
                      width: "fit-content",
                    }}
                  >
                    {plan.tag}
                  </div>

                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 800,
                      fontSize: "1rem",
                      color: isActive ? "#fff" : "#111",
                      marginBottom: "4px",
                    }}
                  >
                    {plan.name}
                  </div>
                  <div style={{ color: isActive ? "rgba(255,255,255,0.45)" : "#aaa", fontSize: "11px", marginBottom: "14px" }}>
                    {plan.period}
                  </div>

                  <div style={{ height: "1px", background: isActive ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)", marginBottom: "14px" }} />

                  <div style={{ flex: 1 }}>
                    {plan.features.map((f, j) => (
                      <div
                        key={j}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          marginBottom: "8px",
                          fontSize: "12px",
                          color: isActive ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.55)",
                        }}
                      >
                        <span style={{ color: plan.accent, flexShrink: 0 }}>✓</span>
                        {f}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={(e) => { e.stopPropagation(); history.push("/contact"); }}
                    style={{
                      width: "100%",
                      marginTop: "14px",
                      padding: "11px",
                      borderRadius: "10px",
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: "12px",
                      cursor: "pointer",
                      background: isActive
                        ? `linear-gradient(135deg, ${plan.accent}, ${plan.accent}99)`
                        : "rgba(0,0,0,0.04)",
                      border: isActive ? "none" : "1px solid rgba(0,0,0,0.1)",
                      color: isActive ? "#08080f" : "rgba(0,0,0,0.6)",
                    }}
                  >
                    Request Quote
                  </button>
                </div>
              </Col>
            );
          })}
        </Row>
      </Card.Body>
    </Card>
  );
};


// ─────────────────────────────────────────────
// 7. POS PLANS SUMMARY WIDGET (compact sidebar)
// ─────────────────────────────────────────────
export const POSPlansSummaryWidget = () => {
  const plans = ["Starter", "Business", "Enterprise"];
  const colors = ["#a8edea", "#fed6e3", "#d4fc79"];
  const tagColors = ["#0f7a76", "#b0587a", "#4a7c00"];
  const descriptions = ["Small Business", "Growing Businesses", "Multi-Branch"];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h6 className="mb-0">Available Plans</h6>
      </Card.Header>
      <Card.Body className="p-2">
        <div className="d-flex flex-column gap-2">
          {plans.map((plan, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "10px 12px",
                borderRadius: "10px",
                background: "#F8F9FA",
                border: `1px solid ${colors[i]}44`,
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: colors[i],
                  flexShrink: 0,
                }}
              />
              <div>
                <div style={{ fontWeight: 700, fontSize: "13px", color: tagColors[i] }}>{plan}</div>
                <div style={{ fontSize: "11px", color: "#888" }}>{descriptions[i]}</div>
              </div>
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ marginLeft: "auto", color: "#ccc", fontSize: "11px" }}
              />
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────
// 8. POS QUICK CONTACT WIDGET
// ─────────────────────────────────────────────
export const POSQuickContactWidget = () => {
  const history = useHistory();

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body style={{ textAlign: "center", padding: "24px" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #a8edea, #7dd8d4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 14px",
          }}
        >
          <FontAwesomeIcon icon={faPhone} style={{ color: "#08080f", fontSize: "18px" }} />
        </div>

        <h6 style={{ fontWeight: 700, marginBottom: "6px" }}>Talk To Our Team</h6>
        <p style={{ color: "#888", fontSize: "12px", lineHeight: 1.6, marginBottom: "16px" }}>
          Get a free demo and consultation tailored to your specific business type and needs.
        </p>

        <div className="d-flex flex-column gap-2">
          <button
            onClick={() => history.push("/contact")}
            style={{
              background: "linear-gradient(135deg, #a8edea, #7dd8d4)",
              color: "#08080f",
              fontWeight: 700,
              fontSize: "12px",
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Book Free Consultation
          </button>
          <button
            onClick={() => window.open("https://wa.me/254713077490", "_blank")}
            style={{
              background: "#E8F5E9",
              color: "#25D366",
              fontWeight: 700,
              fontSize: "12px",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #25D36622",
              cursor: "pointer",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            WhatsApp Us
          </button>
        </div>
      </Card.Body>
    </Card>
  );
};
