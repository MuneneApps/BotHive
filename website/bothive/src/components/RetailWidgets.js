import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faBolt,
  faStore,
  faBoxes,
  faChartLine,
  faUsers,
  faCashRegister,
  faMobileAlt,
  faBarcode,
  faLayerGroup,
  faPhone,
  faArrowRight,
  faReceipt,
  faTruck,
  faTag,
  faShieldAlt,
  faHeadset,
  faFileInvoiceDollar,
  faGlobe,
  faWarehouse,
  faUsersCog,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Card, Row, Col } from "@themesberg/react-bootstrap";

import posImage from "../assets/img/retail-pos.jpg";

// ─────────────────────────────────────────────
// 1. RETAIL HERO WIDGET
// ─────────────────────────────────────────────
export const RetailHeroWidget = () => {
  const history = useHistory();

  const badges = [
    "KRA eTIMS Ready",
    "M-Pesa Integration",
    "Multi-Branch Support",
    "Real-Time Inventory",
    "Offline & Online Mode",
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
          backgroundImage: `url(${posImage})`,
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
              Bothive POS — General Retail & Wholesale
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
            Retail & Wholesale ERP{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#a8edea,#fed6e3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Built for Kenya
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
            A complete POS and ERP platform for retail and wholesale businesses of all sizes —
            manage sales, inventory, suppliers, customers, and financials from one place. Scalable,
            reliable, and built for Kenyan businesses.
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
// 2. RETAIL OVERVIEW WIDGET
// ─────────────────────────────────────────────
export const RetailOverviewWidget = () => {
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
              Your Partner in Advanced POS & ERP Solutions
            </h6>
            <span style={{ fontSize: "11px", color: "#888" }}>
              Retail · Wholesale · Multi-Branch Businesses
            </span>
          </div>
        </div>

        <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.75, marginBottom: "14px" }}>
          With over six years of expertise in developing innovative and customised solutions for
          businesses across industries, Bothive delivers a POS system that is reliable, efficient,
          and versatile — tailored to meet the unique needs of retail and wholesale businesses in
          Kenya.
        </p>
        <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.75, marginBottom: 0 }}>
          Whether you run a small business or a large enterprise, our solution empowers you to
          manage sales, inventory, and customer relationships effortlessly — with cloud-based or
          on-premise hosting options for maximum flexibility.
        </p>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────
// 3. RETAIL CORE FEATURES WIDGET
// ─────────────────────────────────────────────
export const RetailFeaturesWidget = () => {
  const features = [
    {
      icon: faCashRegister,
      title: "Sales & Price Management",
      desc: "Track and manage pricing and sales transactions in real time with an intuitive checkout interface.",
      color: "#a8edea",
    },
    {
      icon: faBoxes,
      title: "Inventory & Stock Monitoring",
      desc: "Stay ahead with reorder level alerts, expiry date tracking, and real-time stock movement visibility.",
      color: "#fed6e3",
    },
    {
      icon: faTruck,
      title: "Suppliers, Vendors & Customers",
      desc: "Simplified management of all business relationships — communication history and transaction records in one place.",
      color: "#d4fc79",
    },
    {
      icon: faMobileAlt,
      title: "Real-Time M-Pesa Integration",
      desc: "Secure and efficient payment solutions for seamless transactions, integrated directly into checkout.",
      color: "#a8edea",
    },
    {
      icon: faUsers,
      title: "Loyalty Programs",
      desc: "Reward your customers and build strong long-term relationships through built-in loyalty tracking.",
      color: "#fed6e3",
    },
    {
      icon: faWarehouse,
      title: "Multiple Locations & Warehouses",
      desc: "Create and manage multiple storefronts or warehouse locations, each with its own stock and sales tracking.",
      color: "#d4fc79",
    },
    {
      icon: faUsersCog,
      title: "User & Role Management",
      desc: "Assign different roles and permissions to staff, ensuring secure access control across the organisation.",
      color: "#a8edea",
    },
    {
      icon: faFileInvoiceDollar,
      title: "Expenses & Financial Reports",
      desc: "Track and categorise business expenses, monitor spending patterns, and generate comprehensive financial reports.",
      color: "#fed6e3",
    },
    {
      icon: faTag,
      title: "Promotions, Discounts & Offers",
      desc: "Create and manage promotions, discount campaigns, and special offers directly from the POS.",
      color: "#d4fc79",
    },
    {
      icon: faReceipt,
      title: "Quotes & Invoices",
      desc: "Generate professional quotes and invoices for customers, with customisable layouts per location.",
      color: "#a8edea",
    },
    {
      icon: faBarcode,
      title: "Barcode Scanning",
      desc: "Use existing product barcodes or generate your own for fast, accurate product identification.",
      color: "#fed6e3",
    },
    {
      icon: faGlobe,
      title: "Multi-Currency & Tax Support",
      desc: "Supports all currencies and fully customisable tax groups — VAT, GST, and combinations — based on your country.",
      color: "#d4fc79",
    },
  ];

  const iconColor = (c) =>
    c === "#d4fc79" ? "#4a7c00" : c === "#fed6e3" ? "#b0587a" : "#0f7a76";

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light" style={{ padding: "16px 24px" }}>
        <h6 style={{ margin: 0, fontWeight: 700, fontSize: "14px" }}>Key Features</h6>
        <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>
          Everything your retail or wholesale business needs
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
// 4. RETAIL BUSINESS TYPES WIDGET
// ─────────────────────────────────────────────
export const RetailBusinessTypesWidget = () => {
  const types = [
    { label: "Supermarkets & Minimarts", color: "#a8edea" },
    { label: "Wine & Spirits Shops", color: "#fed6e3" },
    { label: "Cosmetics & Beauty Stores", color: "#d4fc79" },
    { label: "Electronics & Phone Shops", color: "#a8edea" },
    { label: "General Hardware Stores", color: "#fed6e3" },
    { label: "Agrovet Outlets", color: "#d4fc79" },
    { label: "Bookshops & Stationery", color: "#a8edea" },
    { label: "Clothing & Boutique Stores", color: "#fed6e3" },
  ];

  const dotColor = (c) =>
    c === "#d4fc79" ? "#4a7c00" : c === "#fed6e3" ? "#b0587a" : "#0f7a76";

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h6 className="mb-0" style={{ fontSize: "13px", fontWeight: 700 }}>
          Ideal For
        </h6>
      </Card.Header>
      <Card.Body style={{ padding: "16px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {types.map((t, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "9px 12px",
                borderRadius: "8px",
                background: "#F8F9FA",
                border: `1px solid ${t.color}33`,
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: t.color,
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: "12.5px", fontWeight: 600, color: "#333" }}>{t.label}</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ marginLeft: "auto", color: "#ccc", fontSize: "10px" }}
              />
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────
// 5. RETAIL KEY BENEFITS WIDGET
// ─────────────────────────────────────────────
export const RetailBenefitsWidget = () => {
  const benefits = [
    "Easy billing and fast sales processing",
    "Accurate stock management and reorder alerts",
    "Daily, weekly, and monthly profit analysis",
    "Shift sales and expense reports",
    "Customer and supplier relationship management",
    "Promotions, discounts, and loyalty programs",
    "Comprehensive user access rights control",
    "Real-time mobile reports app access",
    "Quotes and professional invoice generation",
    "100% data privacy and security guarantee",
    "Lifetime software updates at no extra cost",
    "Works both offline and online",
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light" style={{ padding: "16px 24px" }}>
        <h6 style={{ margin: 0, fontWeight: 700, fontSize: "14px" }}>Key Benefits</h6>
        <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>
          Why retailers across Kenya choose Bothive
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
                border: i % 2 === 0 ? "1px solid #a8edea22" : "1px solid transparent",
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
// 6. RETAIL FAQ WIDGET
// ─────────────────────────────────────────────
export const RetailFAQWidget = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    { q: "Are future updates free?", a: "Yes, all future LIFETIME updates are completely free." },
    { q: "Does the system work offline?", a: "Yes, the system works both offline and online, ensuring uninterrupted operations." },
    { q: "What hardware does it support?", a: "Barcode scanners, receipt/thermal printers (ESC/POS commands), and any standard computer hardware." },
    { q: "Does it support our currency?", a: "Yes, all currencies are supported. If yours isn't listed, it can be added within minutes." },
    { q: "Does it support languages other than English?", a: "Yes, the system is translation-ready and supports multiple languages." },
    { q: "Does it support GST / VAT / TIN taxes?", a: "Tax is fully customisable. You can define VAT, GST, and grouped taxes (e.g. CGST + SGST), selectable at point of purchase or sale." },
    { q: "Can I manage multiple shops or branches?", a: "Yes. You can set up multiple businesses and locations with no restrictions — each with separate inventory, accounting, and reporting." },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light" style={{ padding: "16px 24px" }}>
        <h6 style={{ margin: 0, fontWeight: 700, fontSize: "14px" }}>Frequently Asked Questions</h6>
      </Card.Header>
      <Card.Body style={{ padding: "16px 24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {faqs.map((item, i) => (
            <div
              key={i}
              style={{
                borderRadius: "10px",
                border: open === i ? "1px solid #a8edea44" : "1px solid #eee",
                overflow: "hidden",
                transition: "border 0.2s",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 16px",
                  background: open === i ? "#a8edea11" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span style={{ fontSize: "12.5px", fontWeight: 700, color: "#1a1a2e" }}>
                  {item.q}
                </span>
                <span
                  style={{
                    fontSize: "16px",
                    color: "#0f7a76",
                    fontWeight: 700,
                    flexShrink: 0,
                    marginLeft: "8px",
                    lineHeight: 1,
                  }}
                >
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div
                  style={{
                    padding: "0 16px 14px",
                    fontSize: "12px",
                    color: "#666",
                    lineHeight: 1.7,
                  }}
                >
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────
// 7. RETAIL SYSTEM SPECS WIDGET (sidebar)
// ─────────────────────────────────────────────
export const RetailSpecsWidget = () => {
  const specs = [
    { label: "Point of Sale", value: "Fast Checkout" },
    { label: "Stock Alerts", value: "Reorder Levels" },
    { label: "Payment", value: "M-Pesa + Card" },
    { label: "User Roles", value: "Fully Custom" },
    { label: "Branches", value: "Unlimited" },
    { label: "Reports", value: "Real-Time" },
    { label: "Tax Support", value: "VAT / GST" },
    { label: "eTIMS", value: "KRA Compliant" },
    { label: "Offline Mode", value: "✓ Supported" },
    { label: "Updates", value: "Free Lifetime" },
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
// 8. RETAIL QUICK CONTACT WIDGET
// ─────────────────────────────────────────────
export const RetailQuickContactWidget = () => {
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
          Get a free demo tailored to your retail or wholesale business.
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
// 9. RETAIL WHY CHOOSE US WIDGET
// ─────────────────────────────────────────────
export const RetailWhyUsWidget = () => {
  const points = [
    {
      icon: faShieldAlt,
      title: "100% Data Privacy & Security",
      desc: "Your business data is fully protected with a guaranteed security commitment.",
      color: "#a8edea",
    },
    {
      icon: faBolt,
      title: "Lifetime Free Updates",
      desc: "All future software updates and improvements are free — forever.",
      color: "#d4fc79",
    },
    {
      icon: faHeadset,
      title: "Exceptional After-Sales Support",
      desc: "Dedicated customer support, training sessions, and ongoing maintenance.",
      color: "#fed6e3",
    },
    {
      icon: faLayerGroup,
      title: "Scalable for Any Business Size",
      desc: "From a single shop to a multi-branch enterprise — the system grows with you.",
      color: "#a8edea",
    },
  ];

  const iconColor = (c) =>
    c === "#d4fc79" ? "#4a7c00" : c === "#fed6e3" ? "#b0587a" : "#0f7a76";

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light" style={{ padding: "16px 24px" }}>
        <h6 style={{ margin: 0, fontWeight: 700, fontSize: "14px" }}>Why Choose Bothive?</h6>
        <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>
          What sets us apart as your POS partner
        </p>
      </Card.Header>
      <Card.Body style={{ padding: "16px 24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {points.map((p, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
                padding: "14px",
                borderRadius: "10px",
                background: "#F8F9FA",
                border: `1px solid ${p.color}33`,
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: `${p.color}22`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <FontAwesomeIcon
                  icon={p.icon}
                  style={{ color: iconColor(p.color), fontSize: "15px" }}
                />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "12.5px", marginBottom: "3px", color: "#1a1a2e" }}>
                  {p.title}
                </div>
                <div style={{ fontSize: "11.5px", color: "#666", lineHeight: 1.6 }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────
// 10. RETAIL CTA BANNER WIDGET
// ─────────────────────────────────────────────
export const RetailCTAWidget = () => {
  const history = useHistory();
  const rings = [120, 200, 280, 360];

  return (
    <Card
      border="light"
      className="shadow-sm overflow-hidden"
      style={{ background: "linear-gradient(135deg, #08080f, #0d1a1a)", borderRadius: "16px" }}
    >
      <Card.Body style={{ padding: "40px 24px", textAlign: "center", position: "relative" }}>
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
          Simplify Your{" "}
          <span
            style={{
              background: "linear-gradient(90deg,#a8edea,#fed6e3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Business Operations
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
          Ready to transform your retail or wholesale business? Book a free consultation and we'll
          map out a POS solution built specifically for your operations.
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