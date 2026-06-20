import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faBolt,
  faShieldAlt,
  faChartBar,
  faBarcode,
  faLayerGroup,
  faPhone,
  faArrowRight,
  faTag,
  faBoxes,
  faCashRegister,
  faUsersCog,
  faChartLine,
  faFileInvoiceDollar,
  faExclamationTriangle,
  faCalendarAlt,
  faMobileAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Card, Row, Col } from "@themesberg/react-bootstrap";

import winesImage from "../assets/img/wines-pos.jpg";

// ─────────────────────────────────────────────
// 1. WINES HERO WIDGET
// ─────────────────────────────────────────────
export const WinesHeroWidget = () => {
  const history = useHistory();

  const badges = [
    "Happy Hour Pricing",
    "Anti-Theft Controls",
    "Batch & Expiry Tracking",
    "M-Pesa Integration",
    "Mobile Reports App",
    "KRA eTIMS Ready",
  ];

  return (
    <Card border="light" className="shadow-sm p-0 overflow-hidden" style={{ borderRadius: "16px" }}>
      <div
        style={{
          position: "relative",
          minHeight: "340px",
          display: "flex",
          alignItems: "center",
          backgroundImage: `url(${winesImage})`,
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
              Bothive POS — Wines & Spirits
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
            POS Built for{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#a8edea,#fed6e3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Wines & Spirits
            </span>{" "}
            Shops in Kenya
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
            Streamline your sales, stock management, and profit analysis for your wines and spirits
            outlet. Built for both small and large liquor stores across Kenya — with powerful
            theft prevention and smart pricing controls built in.
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
              onClick={() => window.open("https://wa.me/254713077490", "_blank")}
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
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

// ─────────────────────────────────────────────
// 2. WINES OVERVIEW WIDGET
// ─────────────────────────────────────────────
export const WinesOverviewWidget = () => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body style={{ padding: "28px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #fed6e322, #fed6e344)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <FontAwesomeIcon icon={faStar} style={{ color: "#b0587a", fontSize: "16px" }} />
          </div>
          <div>
            <h6 style={{ fontWeight: 700, margin: 0, fontSize: "15px" }}>
              Wines & Spirits POS Software in Kenya
            </h6>
            <span style={{ fontSize: "11px", color: "#888" }}>
              Small Outlets · Large Liquor Stores · Wholesale Wine Shops
            </span>
          </div>
        </div>

        <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.75, marginBottom: "14px" }}>
          Running a wines and spirits shop can be challenging but also very rewarding. The Bothive
          Wines & Spirits POS System is designed to streamline your sales, stock management, and
          profit and loss analysis — helping you grow your business with confidence.
        </p>
        <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.75, marginBottom: 0 }}>
          Whether you operate a small neighbourhood outlet or a large liquor store, our system
          gives you full visibility over your stock, sales, pricing, and staff activity — all from
          one easy-to-use platform.
        </p>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────
// 3. WINES CORE FEATURES WIDGET
// ─────────────────────────────────────────────
export const WinesFeaturesWidget = () => {
  const features = [
    {
      icon: faShieldAlt,
      title: "Theft Prevention & Staff Controls",
      desc: "Prevent staff from selling without receipts, applying wrong prices, or issuing incorrect change. Every transaction is tracked and logged.",
      color: "#fed6e3",
    },
    {
      icon: faBoxes,
      title: "Advanced Stock Management",
      desc: "Know exactly what you have in stock at any moment. Separate store stock from display stock, identify fast-moving items, and view stock value in real time.",
      color: "#a8edea",
    },
    {
      icon: faTag,
      title: "Variable & Promotional Pricing",
      desc: "Run time-based promos, Happy Hour pricing, bundle discounts on 2, 3, or 4+ products, and any custom promotion — all set in advance by the owner.",
      color: "#d4fc79",
    },
    {
      icon: faChartBar,
      title: "Advanced Reporting",
      desc: "End-of-day profit and loss statements, real-time analytics, inventory reports, and sales trends to keep your outlet consistently profitable.",
      color: "#fed6e3",
    },
    {
      icon: faCashRegister,
      title: "Smart Billing",
      desc: "Quick checkout with barcode scanning, smart name search, item search codes, and auto-offer notifications at the billing screen.",
      color: "#a8edea",
    },
    {
      icon: faCalendarAlt,
      title: "Batch & Expiry Date Tracking",
      desc: "Manage your items by batch and expiry dates to ensure compliance and reduce wastage across your liquor inventory.",
      color: "#d4fc79",
    },
    {
      icon: faLayerGroup,
      title: "Multiple Price Lists",
      desc: "Create multiple price lists, auto-price by customer group or business location, and accept payments across different payment modes.",
      color: "#fed6e3",
    },
    {
      icon: faUsersCog,
      title: "User Access Rights",
      desc: "Control exactly what each staff member can access or modify in the system, reducing errors and preventing unauthorised activity.",
      color: "#a8edea",
    },
    {
      icon: faMobileAlt,
      title: "Mobile Reports App",
      desc: "Monitor your wines and spirits business in real time from your smartphone — sales, stock, and profit reports at your fingertips.",
      color: "#d4fc79",
    },
    {
      icon: faFileInvoiceDollar,
      title: "Sales & Inventory Tracking",
      desc: "Track every sale and stock movement efficiently, with comprehensive records for auditing and business decision-making.",
      color: "#fed6e3",
    },
  ];

  const iconColor = (c) =>
    c === "#d4fc79" ? "#4a7c00" : c === "#fed6e3" ? "#b0587a" : "#0f7a76";

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light" style={{ padding: "16px 24px" }}>
        <h6 style={{ margin: 0, fontWeight: 700, fontSize: "14px" }}>System Features</h6>
        <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>
          Everything your wines & spirits store needs
        </p>
      </Card.Header>
      <Card.Body style={{ padding: "20px 24px" }}>
        <Row className="g-3">
          {features.map((f, i) => (
            <Col xs={12} sm={6} key={i}>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                  padding: "14px",
                  borderRadius: "10px",
                  background: "#F8F9FA",
                  border: `1px solid ${f.color}33`,
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: `${f.color}22`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <FontAwesomeIcon
                    icon={f.icon}
                    style={{ color: iconColor(f.color), fontSize: "15px" }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "12.5px",
                      marginBottom: "4px",
                      color: "#1a1a2e",
                    }}
                  >
                    {f.title}
                  </div>
                  <div style={{ fontSize: "11.5px", color: "#666", lineHeight: 1.6 }}>
                    {f.desc}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────
// 4. WINES THEFT PREVENTION HIGHLIGHT WIDGET
// ─────────────────────────────────────────────
export const WinesTheftWidget = () => {
  const risks = [
    "Selling to customers without issuing a receipt",
    "Charging the wrong price and pocketing the difference",
    "Issuing incorrect change to customers",
    "Outright theft of stock from the store",
  ];

  const solutions = [
    "Every sale is logged and tied to a receipt",
    "Prices are system-controlled — staff cannot override without authorisation",
    "Change amounts are calculated and displayed automatically",
    "Real-time stock monitoring flags any unexplained variances",
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light" style={{ padding: "16px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            style={{ color: "#b0587a", fontSize: "14px" }}
          />
          <h6 style={{ margin: 0, fontWeight: 700, fontSize: "14px" }}>
            The #1 Problem: Staff Theft
          </h6>
        </div>
        <p style={{ margin: "4px 0 0", fontSize: "12px", color: "#888" }}>
          The biggest cause of losses in wines & spirits outlets — and how we solve it
        </p>
      </Card.Header>
      <Card.Body style={{ padding: "20px 24px" }}>
        <Row className="g-3">
          <Col xs={12} md={6}>
            <div
              style={{
                padding: "16px",
                borderRadius: "10px",
                background: "#fff5f7",
                border: "1px solid #fed6e344",
                height: "100%",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  color: "#b0587a",
                  marginBottom: "12px",
                }}
              >
                Common Theft Methods
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {risks.map((r, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}
                  >
                    <FontAwesomeIcon
                      icon={faExclamationTriangle}
                      style={{
                        color: "#b0587a",
                        fontSize: "11px",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <span style={{ fontSize: "12px", color: "#555", lineHeight: 1.6 }}>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div
              style={{
                padding: "16px",
                borderRadius: "10px",
                background: "#f0fdf9",
                border: "1px solid #a8edea44",
                height: "100%",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  color: "#0f7a76",
                  marginBottom: "12px",
                }}
              >
                How Bothive Stops It
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {solutions.map((s, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}
                  >
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{
                        color: "#0f7a76",
                        fontSize: "11px",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <span style={{ fontSize: "12px", color: "#555", lineHeight: 1.6 }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────
// 5. WINES KEY BENEFITS WIDGET
// ─────────────────────────────────────────────
export const WinesBenefitsWidget = () => {
  const benefits = [
    "Fast and accurate billing with barcode scanning",
    "Full stock visibility — store stock vs display stock",
    "Reorder alerts to keep shelves always stocked",
    "Happy Hour and time-based promotional pricing",
    "Bundle discounts on multi-bottle purchases",
    "End-of-day profit and loss statements",
    "Real-time sales and inventory analytics",
    "Staff access rights to prevent unauthorised changes",
    "Batch and expiry date management",
    "Multiple price lists per location or customer group",
    "M-Pesa and digital payment integration",
    "Mobile reports app for on-the-go monitoring",
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light" style={{ padding: "16px 24px" }}>
        <h6 style={{ margin: 0, fontWeight: 700, fontSize: "14px" }}>Key Benefits</h6>
        <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>
          Why wines & spirits outlets choose Bothive
        </p>
      </Card.Header>
      <Card.Body style={{ padding: "20px 24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {benefits.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 14px",
                borderRadius: "8px",
                background: i % 2 === 0 ? "#F8F9FA" : "transparent",
                border: i % 2 === 0 ? "1px solid #fed6e322" : "1px solid transparent",
              }}
            >
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#0f7a76", fontSize: "13px", flexShrink: 0 }}
              />
              <span style={{ fontSize: "12.5px", color: "#444", fontWeight: 500 }}>{item}</span>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────
// 6. WINES SYSTEM SPECS WIDGET (sidebar)
// ─────────────────────────────────────────────
export const WinesSpecsWidget = () => {
  const specs = [
    { label: "Billing", value: "Barcode + Search" },
    { label: "Pricing", value: "Multi-Level" },
    { label: "Happy Hour", value: "✓ Supported" },
    { label: "Stock Tracking", value: "Real-Time" },
    { label: "Expiry Dates", value: "✓ Tracked" },
    { label: "Payment", value: "M-Pesa + Card" },
    { label: "User Roles", value: "Fully Custom" },
    { label: "Reports", value: "Daily / Live" },
    { label: "Mobile App", value: "✓ Included" },
    { label: "eTIMS", value: "KRA Compliant" },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h6 className="mb-0" style={{ fontSize: "13px", fontWeight: 700 }}>
          System Capabilities
        </h6>
      </Card.Header>
      <Card.Body style={{ padding: "16px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
          {specs.map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 10px",
                borderRadius: "8px",
                background: i % 2 === 0 ? "#F8F9FA" : "transparent",
              }}
            >
              <span style={{ fontSize: "12px", color: "#666" }}>{s.label}</span>
              <span
                style={{
                  fontSize: "11.5px",
                  fontWeight: 700,
                  color: "#b0587a",
                  background: "#fed6e322",
                  padding: "2px 8px",
                  borderRadius: "100px",
                }}
              >
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────
// 7. WINES STORE TYPES WIDGET (sidebar)
// ─────────────────────────────────────────────
export const WinesStoreTypesWidget = () => {
  const types = [
    {
      label: "Small Neighbourhood Outlet",
      desc: "Fast billing, stock alerts, basic staff controls",
      color: "#a8edea",
    },
    {
      label: "Medium Liquor Store",
      desc: "Multi-cashier, promos, loyalty, advanced reports",
      color: "#fed6e3",
    },
    {
      label: "Large or Wholesale Wine Shop",
      desc: "Multi-location, bulk pricing, full ERP controls",
      color: "#d4fc79",
    },
  ];

  const dotColor = (c) =>
    c === "#d4fc79" ? "#4a7c00" : c === "#fed6e3" ? "#b0587a" : "#0f7a76";

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h6 className="mb-0" style={{ fontSize: "13px", fontWeight: 700 }}>
          Built For Every Store Size
        </h6>
      </Card.Header>
      <Card.Body style={{ padding: "16px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {types.map((t, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 14px",
                borderRadius: "10px",
                background: "#F8F9FA",
                border: `1px solid ${t.color}44`,
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: t.color,
                  flexShrink: 0,
                }}
              />
              <div>
                <div style={{ fontWeight: 700, fontSize: "12.5px", color: "#1a1a2e" }}>
                  {t.label}
                </div>
                <div style={{ fontSize: "11px", color: "#888" }}>{t.desc}</div>
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
// 8. WINES QUICK CONTACT WIDGET (sidebar)
// ─────────────────────────────────────────────
export const WinesQuickContactWidget = () => {
  const history = useHistory();

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body style={{ textAlign: "center", padding: "24px" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #fed6e3, #f9a8c9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 14px",
          }}
        >
          <FontAwesomeIcon icon={faPhone} style={{ color: "#08080f", fontSize: "18px" }} />
        </div>

        <h6 style={{ fontWeight: 700, marginBottom: "6px" }}>Talk To Our Team</h6>
        <p style={{ color: "#888", fontSize: "12px", lineHeight: 1.6, marginBottom: "4px" }}>
          Get a free demo tailored to your wines & spirits outlet.
        </p>
        <p style={{ color: "#b0587a", fontWeight: 700, fontSize: "13px", marginBottom: "16px" }}>
          +254 791 290 037
        </p>

        <div className="d-flex flex-column gap-2">
          <button
            onClick={() => history.push("/contact")}
            style={{
              background: "linear-gradient(135deg, #fed6e3, #f9a8c9)",
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

// ─────────────────────────────────────────────
// 9. WINES CTA BANNER WIDGET
// ─────────────────────────────────────────────
export const WinesCTAWidget = () => {
  const history = useHistory();
  const rings = [120, 200, 280, 360];

  return (
    <Card
      border="light"
      className="shadow-sm overflow-hidden"
      style={{ background: "linear-gradient(135deg, #08080f, #1a0d12)", borderRadius: "16px" }}
    >
      <Card.Body style={{ padding: "40px 24px", textAlign: "center", position: "relative" }}>
        {rings.map((size, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              borderRadius: "50%",
              border: "1px solid rgba(253,214,227,0.06)",
              width: `${size}px`,
              height: `${size}px`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              pointerEvents: "none",
            }}
          />
        ))}

        <h3
          style={{
            position: "relative",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            color: "#fff",
            letterSpacing: "-0.5px",
            margin: "0 0 12px",
          }}
        >
          Ready to Grow Your{" "}
          <span
            style={{
              background: "linear-gradient(90deg,#fed6e3,#a8edea)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Wines & Spirits Business?
          </span>
        </h3>

        <p
          style={{
            position: "relative",
            color: "rgba(255,255,255,0.45)",
            fontSize: "0.88rem",
            lineHeight: 1.75,
            maxWidth: "420px",
            margin: "0 auto 28px",
          }}
        >
          Contact Bothive today for a free consultation and demo. We'll set up a POS system
          built specifically for your wines and spirits outlet.
        </p>

        <div
          style={{
            position: "relative",
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => history.push("/contact")}
            style={{
              background: "linear-gradient(135deg, #fed6e3, #f9a8c9)",
              color: "#08080f",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              padding: "13px 32px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(253,214,227,0.25)",
            }}
          >
            Free Consultation & Demo
          </button>
          <button
            onClick={() => window.open("https://wa.me/254713077490", "_blank")}
            style={{
              background: "rgba(255,255,255,0.04)",
              color: "rgba(255,255,255,0.8)",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              padding: "13px 28px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.14)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
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