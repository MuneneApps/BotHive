import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faUtensils,
  faCashRegister,
  faLayerGroup,
  faChartBar,
  faUsers,
  faPhone,
  faArrowRight,
  faPrint,
  faTabletAlt,
  faClock,
  faShieldAlt,
  faBoxes,
  faFileInvoiceDollar,
  faExchangeAlt,
  faBan,
  faConciergeBell,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Card, Row, Col } from "@themesberg/react-bootstrap";

import restaurantImage from "../assets/img/restaurant-pos.jpg";

// ─────────────────────────────────────────────
// 1. RESTAURANT HERO WIDGET
// ─────────────────────────────────────────────
export const RestaurantHeroWidget = () => {
  const history = useHistory();

  const badges = [
    "Touch Screen Optimised",
    "KRA eTIMS Ready",
    "M-Pesa Integration",
    "Kitchen Order Printing",
    "Happy Hour Controls",
    "Multi-Terminal Support",
  ];

  return (
    <Card border="light" className="shadow-sm p-0 overflow-hidden" style={{ borderRadius: "16px" }}>
      <div
        style={{
          position: "relative",
          minHeight: "340px",
          display: "flex",
          alignItems: "center",
          backgroundImage: `url(${restaurantImage})`,
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
              "linear-gradient(rgba(212,252,121,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(212,252,121,0.04) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at 70% 50%,transparent 30%,black 100%)",
          }}
        />

        <div style={{ position: "relative", padding: "40px 36px", maxWidth: "600px" }}>
          {/* Tag */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#d4fc79" }} />
            <span
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#d4fc79",
              }}
            >
              Bothive POS — Restaurant, Bar & Hotel
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
            Restaurant & Bar POS{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#d4fc79,#a8edea)",
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
            A complete touch screen POS system for restaurants, bars, fast food joints, clubs,
            lounges, coffee shops, cafeterias and more. Accurate order taking, fast operations,
            and full business reporting — all in one platform.
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
                  background: "rgba(212,252,121,0.06)",
                  border: "1px solid rgba(212,252,121,0.18)",
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
                    background: "#d4fc79",
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
                background: "linear-gradient(135deg, #d4fc79, #b8e85a)",
                color: "#08080f",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                padding: "12px 24px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(212,252,121,0.3)",
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
// 2. RESTAURANT OVERVIEW WIDGET
// ─────────────────────────────────────────────
export const RestaurantOverviewWidget = () => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body style={{ padding: "28px" }}>
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
            <FontAwesomeIcon icon={faUtensils} style={{ color: "#4a7c00", fontSize: "16px" }} />
          </div>
          <div>
            <h6 style={{ fontWeight: 700, margin: 0, fontSize: "15px" }}>
              We're Not a Provider — We're a Partner
            </h6>
            <span style={{ fontSize: "11px", color: "#888" }}>
              Restaurants · Bars · Fast Food · Clubs · Cafeterias · Coffee Shops
            </span>
          </div>
        </div>

        <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.75, marginBottom: "14px" }}>
          Bothive provides a complete Restaurant and Bar POS System tailored for any type of food
          service establishment. Optimised for touch screen operation, the system enables accurate
          order taking, quick and efficient service, and comprehensive reporting across all aspects
          of your business.
        </p>
        <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.75, marginBottom: 0 }}>
          Our mission is to help you run your restaurant or bar efficiently, eliminate losses and
          theft, and grow your business — whether you operate a single terminal or a multi-branch
          setup with multiple cashiers and kitchen printers.
        </p>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────
// 3. RESTAURANT FEATURES WIDGET
// ─────────────────────────────────────────────
export const RestaurantFeaturesWidget = () => {
  const features = [
    {
      icon: faTabletAlt,
      title: "Touch Screen Billing",
      desc: "Highly visual, large-icon interface optimised for touch screens — ensuring quick and accurate order entry with minimal training.",
      color: "#d4fc79",
    },
    {
      icon: faCashRegister,
      title: "Multi-Payment Modes",
      desc: "Clear a single bill with multiple payment modes — Cash, M-Pesa, and Credit Card — all in one transaction.",
      color: "#a8edea",
    },
    {
      icon: faPrint,
      title: "Multi-Printer Kitchen Orders",
      desc: "Print orders automatically to multiple printers — kitchen, bar, and others — the moment an order is placed.",
      color: "#fed6e3",
    },
    {
      icon: faClock,
      title: "Happy Hour Controls",
      desc: "Set up Happy Hour pricing, combo meal discounts, and time-based promotional offers that activate and expire automatically.",
      color: "#d4fc79",
    },
    {
      icon: faExchangeAlt,
      title: "Split & Merge Bills",
      desc: "Easily split a bill between guests or merge separate orders into one — essential for restaurants and bars.",
      color: "#a8edea",
    },
    {
      icon: faConciergeBell,
      title: "Item Modifiers & Descriptions",
      desc: "Capture preparation instructions per item — Cold, Warm, Well Done, and any custom modifier — directly at point of order.",
      color: "#fed6e3",
    },
    {
      icon: faBoxes,
      title: "Real-Time Stock & Inventory",
      desc: "Monitor bar and kitchen stock levels in real time, with reports for both revenue points running simultaneously.",
      color: "#d4fc79",
    },
    {
      icon: faShieldAlt,
      title: "User Access Rights",
      desc: "System-controlled access rights ensure each staff member — cashier, waiter, manager — can only perform tasks assigned to their role.",
      color: "#a8edea",
    },
    {
      icon: faChartBar,
      title: "Comprehensive Reports",
      desc: "Cashier sales reports, waiter totals, periodic sales by revenue point, highest and lowest moving items, and voided entries.",
      color: "#fed6e3",
    },
    {
      icon: faLayerGroup,
      title: "Multi-Terminal Support",
      desc: "Run as many terminals as needed — all operating at the same speed and efficiency as a single-terminal setup.",
      color: "#d4fc79",
    },
    {
      icon: faBan,
      title: "Voided Entries Reporting",
      desc: "Track and review every voided transaction with full audit trails — closing a common loophole for revenue losses.",
      color: "#a8edea",
    },
    {
      icon: faFileInvoiceDollar,
      title: "KRA Fiscal Printer Integration",
      desc: "Link directly to KRA Fiscal and Thermal Printers to issue fully KRA-certified receipts for eTIMS compliance.",
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
          Complete control over every aspect of your restaurant operations
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
// 4. RESTAURANT ESTABLISHMENT TYPES WIDGET
// ─────────────────────────────────────────────
export const RestaurantTypesWidget = () => {
  const types = [
    { label: "Restaurants & Fast Food Joints", color: "#d4fc79" },
    { label: "Bars, Clubs & Lounges", color: "#a8edea" },
    { label: "Coffee Shops & Cafeterias", color: "#fed6e3" },
    { label: "Hotels with Restaurant & Bar", color: "#d4fc79" },
    { label: "Cake Shops & Bakeries", color: "#a8edea" },
    { label: "Groceries & Convenience Stores", color: "#fed6e3" },
    { label: "Butcheries with Dining", color: "#d4fc79" },
    { label: "Multi-Branch Food Chains", color: "#a8edea" },
  ];

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
// 5. RESTAURANT KEY BENEFITS WIDGET
// ─────────────────────────────────────────────
export const RestaurantBenefitsWidget = () => {
  const benefits = [
    "Easy, fast and accurate order entry on touch screen",
    "Print orders directly to kitchen and bar printers",
    "Multiple terminals running simultaneously",
    "Real-time stock management for bar and kitchen",
    "Happy Hour and combo meal discount automation",
    "Split and merge bills with ease",
    "Multi-payment — Cash, M-Pesa, and Credit Card",
    "Cashier summary and sales reports with pay mode breakdown",
    "Waiter totals and performance reports",
    "Voided entries tracking to seal revenue loopholes",
    "User access rights to control every staff role",
    "KRA eTIMS compliant fiscal printer integration",
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light" style={{ padding: "16px 24px" }}>
        <h6 style={{ margin: 0, fontWeight: 700, fontSize: "14px" }}>Key Benefits</h6>
        <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>
          Why restaurants and bars across Kenya choose Bothive
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
                border: i % 2 === 0 ? "1px solid #d4fc7922" : "1px solid transparent",
              }}
            >
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#4a7c00", fontSize: "13px", flexShrink: 0 }}
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
// 6. RESTAURANT ORDER FLOW HIGHLIGHT WIDGET
// ─────────────────────────────────────────────
export const RestaurantOrderFlowWidget = () => {
  const steps = [
    {
      step: "01",
      title: "Order Placed",
      desc: "Waiter or cashier enters order on touch screen with item modifiers",
      color: "#d4fc79",
    },
    {
      step: "02",
      title: "Kitchen Notified",
      desc: "Order prints automatically to kitchen and bar printers in real time",
      color: "#a8edea",
    },
    {
      step: "03",
      title: "Bill Generated",
      desc: "Bill is prepared with all items, discounts, and applicable Happy Hour pricing",
      color: "#fed6e3",
    },
    {
      step: "04",
      title: "Payment Cleared",
      desc: "Customer pays via Cash, M-Pesa, or Card — single or split across modes",
      color: "#d4fc79",
    },
  ];

  const dotColor = (c) =>
    c === "#d4fc79" ? "#4a7c00" : c === "#fed6e3" ? "#b0587a" : "#0f7a76";

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light" style={{ padding: "16px 24px" }}>
        <h6 style={{ margin: 0, fontWeight: 700, fontSize: "14px" }}>How an Order Flows</h6>
        <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>
          From table to payment in four seamless steps
        </p>
      </Card.Header>
      <Card.Body style={{ padding: "20px 24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {steps.map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
                padding: "14px",
                borderRadius: "10px",
                background: "#F8F9FA",
                border: `1px solid ${s.color}33`,
              }}
            >
              <div
                style={{
                  minWidth: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: `${s.color}22`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 900,
                  fontSize: "12px",
                  color: dotColor(s.color),
                  flexShrink: 0,
                }}
              >
                {s.step}
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "12.5px",
                    marginBottom: "3px",
                    color: "#1a1a2e",
                  }}
                >
                  {s.title}
                </div>
                <div style={{ fontSize: "11.5px", color: "#666", lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────
// 7. RESTAURANT SYSTEM SPECS WIDGET (sidebar)
// ─────────────────────────────────────────────
export const RestaurantSpecsWidget = () => {
  const specs = [
    { label: "Interface", value: "Touch Screen" },
    { label: "Order Printing", value: "Multi-Printer" },
    { label: "Payment", value: "Cash/M-Pesa/Card" },
    { label: "Happy Hour", value: "✓ Automated" },
    { label: "Bill Splitting", value: "✓ Supported" },
    { label: "Terminals", value: "Multi-Terminal" },
    { label: "Stock Tracking", value: "Real-Time" },
    { label: "User Roles", value: "Fully Custom" },
    { label: "eTIMS", value: "KRA Compliant" },
    { label: "Void Tracking", value: "✓ Full Audit" },
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
                  color: "#4a7c00",
                  background: "#d4fc7922",
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
// 8. RESTAURANT QUICK CONTACT WIDGET (sidebar)
// ─────────────────────────────────────────────
export const RestaurantQuickContactWidget = () => {
  const history = useHistory();

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body style={{ textAlign: "center", padding: "24px" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #d4fc79, #b8e85a)",
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
          Get a free demo tailored to your restaurant, bar, or food outlet.
        </p>
        <p style={{ color: "#4a7c00", fontWeight: 700, fontSize: "13px", marginBottom: "16px" }}>
          +254 791 290 037
        </p>

        <div className="d-flex flex-column gap-2">
          <button
            onClick={() => history.push("/contact")}
            style={{
              background: "linear-gradient(135deg, #d4fc79, #b8e85a)",
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
// 9. RESTAURANT CTA BANNER WIDGET
// ─────────────────────────────────────────────
export const RestaurantCTAWidget = () => {
  const history = useHistory();
  const rings = [120, 200, 280, 360];

  return (
    <Card
      border="light"
      className="shadow-sm overflow-hidden"
      style={{ background: "linear-gradient(135deg, #08080f, #0d1a08)", borderRadius: "16px" }}
    >
      <Card.Body style={{ padding: "40px 24px", textAlign: "center", position: "relative" }}>
        {rings.map((size, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              borderRadius: "50%",
              border: "1px solid rgba(212,252,121,0.06)",
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
          Ready to Run a{" "}
          <span
            style={{
              background: "linear-gradient(90deg,#d4fc79,#a8edea)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            More Profitable Restaurant?
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
          Contact Bothive today for a free consultation and demo. We'll set up a POS system built
          specifically for your restaurant, bar, or food service operation.
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
              background: "linear-gradient(135deg, #d4fc79, #b8e85a)",
              color: "#08080f",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              padding: "13px 32px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(212,252,121,0.3)",
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