import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faBolt,
  faShoppingCart,
  faBoxes,
  faChartLine,
  faUsers,
  faCashRegister,
  faMobileAlt,
  faBarcode,
  faLayerGroup,
  faStore,
  faPhone,
  faArrowRight,
  faShieldAlt,
  faReceipt,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Card, Row, Col } from "@themesberg/react-bootstrap";

import supermarketImage from "../assets/img/supermarket-pos.jpg";

// ─────────────────────────────────────────────
// 1. SUPERMARKET HERO WIDGET
// ─────────────────────────────────────────────
export const SupermarketHeroWidget = () => {
  const history = useHistory();

  const badges = [
    "KRA eTIMS Ready",
    "M-Pesa Integration",
    "Barcode Scanning",
    "Real-Time Inventory",
    "Multi-Branch Support",
    "Mobile Reports App",
  ];

  return (
    <Card border="light" className="shadow-sm p-0 overflow-hidden" style={{ borderRadius: "16px" }}>
      <div
        style={{
          position: "relative",
          minHeight: "340px",
          display: "flex",
          alignItems: "center",
          backgroundImage: `url(${supermarketImage})`,
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
              Bothive POS — Supermarkets & Minimarts
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
            Complete POS System for{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#a8edea,#fed6e3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Minimarts & Supermarkets
            </span>
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
            Automate daily operations across your retail store — from checkout to inventory,
            supplier management, accounting, and business reporting. Built for Kenyan retailers.
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
// 2. SUPERMARKET OVERVIEW WIDGET
// ─────────────────────────────────────────────
export const SupermarketOverviewWidget = () => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body style={{ padding: "28px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #a8edea22, #a8edea44)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <FontAwesomeIcon icon={faStore} style={{ color: "#0f7a76", fontSize: "16px" }} />
          </div>
          <div>
            <h6 style={{ fontWeight: 700, margin: 0, fontSize: "15px" }}>
              A Digital Backbone for Modern Retail
            </h6>
            <span style={{ fontSize: "11px", color: "#888" }}>
              Supermarkets · Minimarts · Convenience Stores
            </span>
          </div>
        </div>

        <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.75, marginBottom: "14px" }}>
          Retail businesses deal with hundreds or even thousands of products every day. Managing
          sales transactions, monitoring stock levels, tracking suppliers, and handling payments
          manually can slow down operations and lead to costly mistakes.
        </p>
        <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.75, marginBottom: 0 }}>
          The Bothive POS System for Minimarts and Supermarkets combines Point of Sale, inventory
          control, supplier management, accounting tools, and business reporting into a single
          platform — helping retailers run their stores efficiently across Kenya.
        </p>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────
// 3. SUPERMARKET FEATURES WIDGET
// ─────────────────────────────────────────────
export const SupermarketFeaturesWidget = () => {
  const features = [
    {
      icon: faCashRegister,
      title: "Fast Point of Sale Transactions",
      desc: "Cashiers process purchases quickly using an intuitive POS interface, reducing waiting time and improving the customer experience.",
      color: "#a8edea",
      bg: "#a8edea22",
    },
    {
      icon: faBoxes,
      title: "Real-Time Inventory Monitoring",
      desc: "Monitor stock levels in real time, track product movement, and receive alerts when inventory reaches reorder levels.",
      color: "#fed6e3",
      bg: "#fed6e322",
    },
    {
      icon: faTruck,
      title: "Supplier & Purchase Management",
      desc: "Manage supplier records, track purchases, and monitor supplier payments all from one place.",
      color: "#d4fc79",
      bg: "#d4fc7922",
    },
    {
      icon: faUsers,
      title: "Customer & Loyalty Programs",
      desc: "Build stronger relationships with customers by offering loyalty programs and tracking purchasing patterns.",
      color: "#a8edea",
      bg: "#a8edea22",
    },
    {
      icon: faChartLine,
      title: "Integrated Accounting & Reports",
      desc: "Generate financial reports including sales summaries, expense reports, profit analysis, and inventory valuation.",
      color: "#fed6e3",
      bg: "#fed6e322",
    },
    {
      icon: faMobileAlt,
      title: "M-Pesa & Digital Payments",
      desc: "Supports M-Pesa and other digital payment methods, making transactions convenient for every customer.",
      color: "#d4fc79",
      bg: "#d4fc7922",
    },
    {
      icon: faLayerGroup,
      title: "Multi-Branch & User Access",
      desc: "Monitor operations across different locations while controlling staff access levels and permissions.",
      color: "#a8edea",
      bg: "#a8edea22",
    },
    {
      icon: faBarcode,
      title: "Barcode Scanning",
      desc: "Use existing product barcodes or easily create your own for fast, accurate product identification at checkout.",
      color: "#fed6e3",
      bg: "#fed6e322",
    },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light" style={{ padding: "16px 24px" }}>
        <h6 style={{ margin: 0, fontWeight: 700, fontSize: "14px" }}>
          Operational Capabilities
        </h6>
        <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>
          Everything your retail store needs in one system
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
                    background: f.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <FontAwesomeIcon icon={f.icon} style={{ color: f.color === "#d4fc79" ? "#4a7c00" : f.color === "#fed6e3" ? "#b0587a" : "#0f7a76", fontSize: "15px" }} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "12.5px", marginBottom: "4px", color: "#1a1a2e" }}>
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
// 4. SUPERMARKET KEY ADVANTAGES WIDGET
// ─────────────────────────────────────────────
export const SupermarketAdvantagesWidget = () => {
  const advantages = [
    "Faster checkout and improved customer service",
    "Accurate inventory tracking and stock control",
    "Better supplier and purchase management",
    "Organized financial and sales reporting",
    "Reduced manual record keeping",
    "Real-time business performance monitoring",
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body style={{ padding: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #d4fc7922, #d4fc7944)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <FontAwesomeIcon icon={faBolt} style={{ color: "#4a7c00", fontSize: "16px" }} />
          </div>
          <div>
            <h6 style={{ fontWeight: 700, margin: 0, fontSize: "14px" }}>
              Why Retailers Adopt POS & ERP Systems
            </h6>
            <span style={{ fontSize: "11px", color: "#888" }}>Key advantages for your store</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {advantages.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 14px",
                borderRadius: "8px",
                background: "#F8F9FA",
                border: "1px solid #a8edea22",
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
// 5. SUPERMARKET POS SPECS WIDGET (sidebar)
// ─────────────────────────────────────────────
export const SupermarketSpecsWidget = () => {
  const specs = [
    { label: "Point of Sale", value: "Fast Checkout" },
    { label: "Stock Management", value: "Real-Time" },
    { label: "Payment Methods", value: "M-Pesa + Card" },
    { label: "User Roles", value: "Admin / Cashier" },
    { label: "Branches", value: "Multi-Store" },
    { label: "Reports", value: "Daily / Monthly" },
    { label: "Barcodes", value: "Scan or Generate" },
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
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
                  color: "#0f7a76",
                  background: "#a8edea22",
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
// 6. SUPERMARKET STORE TYPES WIDGET
// ─────────────────────────────────────────────
export const SupermarketStoreTypesWidget = () => {
  const types = [
    {
      icon: faStore,
      label: "Small Minimart",
      desc: "Single counter, fast billing, basic stock control",
      color: "#a8edea",
    },
    {
      icon: faShoppingCart,
      label: "Medium Supermarket",
      desc: "Multi-cashier, supplier tracking, loyalty programs",
      color: "#fed6e3",
    },
    {
      icon: faLayerGroup,
      label: "Multi-Branch Retail",
      desc: "Centralised reporting across all store locations",
      color: "#d4fc79",
    },
  ];

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
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: `${t.color}22`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <FontAwesomeIcon
                  icon={t.icon}
                  style={{
                    color:
                      t.color === "#d4fc79"
                        ? "#4a7c00"
                        : t.color === "#fed6e3"
                        ? "#b0587a"
                        : "#0f7a76",
                    fontSize: "15px",
                  }}
                />
              </div>
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
// 7. SUPERMARKET QUICK CONTACT WIDGET
// ─────────────────────────────────────────────
export const SupermarketQuickContactWidget = () => {
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
        <p style={{ color: "#888", fontSize: "12px", lineHeight: 1.6, marginBottom: "4px" }}>
          Get a free demo tailored to your supermarket or minimart.
        </p>
        <p style={{ color: "#0f7a76", fontWeight: 700, fontSize: "13px", marginBottom: "16px" }}>
          +254 791 290 037
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

// ─────────────────────────────────────────────
// 8. SUPERMARKET CTA BANNER WIDGET
// ─────────────────────────────────────────────
export const SupermarketCTAWidget = () => {
  const history = useHistory();
  const rings = [120, 200, 280, 360];

  return (
    <Card
      border="light"
      className="shadow-sm overflow-hidden"
      style={{ background: "linear-gradient(135deg, #08080f, #0d1a1a)", borderRadius: "16px" }}
    >
      <Card.Body
        style={{ padding: "40px 24px", textAlign: "center", position: "relative" }}
      >
        {rings.map((size, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              borderRadius: "50%",
              border: "1px solid rgba(168,237,234,0.06)",
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
          Ready to Transform Your{" "}
          <span
            style={{
              background: "linear-gradient(90deg,#a8edea,#fed6e3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Retail Store?
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
          Contact Bothive today to learn how our POS & ERP System can help you manage sales,
          inventory, and business performance effectively.
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
              background: "linear-gradient(135deg, #a8edea, #7dd8d4)",
              color: "#08080f",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              padding: "13px 32px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(168,237,234,0.3)",
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