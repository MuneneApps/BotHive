import React, { useState } from "react";
import { Col, Row, Card, Button } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faMobileAlt,
  faBox,
  faChartBar,
  faUsers,
  faShoppingCart,
  faCog,
  faExclamationTriangle,
  faTasks,
  faBolt,
  faFileAlt,
  faBarcode,
  faCreditCard,
  faLaptop,
  faStar,
  faClock,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { Routes } from "../routes";

// ─────────────────────────────────────────────────────
// ELECTRONICS HERO WIDGET
// ─────────────────────────────────────────────────────
export const ElectronicsHeroWidget = () => {
  const history = useHistory();

  return (
    <Card
      style={{
        background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #06B6D4 100%)",
        border: "none",
        borderRadius: "16px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        overflow: "hidden",
      }}
    >
      <Card.Body className="p-5">
        <Row className="align-items-center">
          <Col xs={12} md={8}>
            <h1
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: "42px",
                marginBottom: "16px",
                lineHeight: 1.2,
              }}
            >
              Bothive Electronics POS System
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "16px",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Manage high-value electronics inventory, warranty tracking, serial numbers, and trade-in programs — all from one intelligent POS system built for modern electronics retailers.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Button
                style={{
                  background: "#fff",
                  color: "#2563EB",
                  fontWeight: 700,
                  borderRadius: "8px",
                  border: "none",
                  padding: "12px 28px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
                onClick={() => history.push(Routes.POSSystemPage.path)}
              >
                Get Started Now
              </Button>
              <Button
                style={{
                  background: "transparent",
                  color: "#fff",
                  fontWeight: 700,
                  borderRadius: "8px",
                  border: "2px solid #fff",
                  padding: "12px 28px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Request Demo
              </Button>
            </div>
          </Col>
          <Col xs={12} md={4} className="mt-4 mt-md-0">
            <div
              style={{
                background: "rgba(255,255,255,0.1)",
                borderRadius: "12px",
                padding: "24px",
                textAlign: "center",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <FontAwesomeIcon
                icon={faLaptop}
                style={{ fontSize: "60px", color: "#fff", marginBottom: "16px" }}
              />
              <h5 style={{ color: "#fff", fontWeight: 700, marginBottom: "8px" }}>
                30+ Electronics Retailers
              </h5>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px", margin: 0 }}>
                From Nairobi to Kisumu, powering Kenya's top electronics shops
              </p>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────────────
// ELECTRONICS FEATURES WIDGET
// ─────────────────────────────────────────────────────
export const ElectronicsFeaturesWidget = () => {
  const features = [
    { icon: faBox, label: "Inventory Management", desc: "Track TVs, phones, computers, fridges, and appliances" },
    { icon: faMobileAlt, label: "Serial Number Tracking", desc: "Manage IMEI, serial numbers, and model variants" },
    { icon: faClock, label: "Warranty Management", desc: "Track warranty periods and expiry dates automatically" },
    { icon: faHistory, label: "Trade-In Programs", desc: "Manage customer trade-in valuations and history" },
    { icon: faCreditCard, label: "Payment Plans", desc: "Support installment and financing options" },
    { icon: faChartBar, label: "Multi-Store Management", desc: "Manage all branches from one dashboard" },
    { icon: faFileAlt, label: "Service Tracking", desc: "Log after-sales service requests and repairs" },
    { icon: faStar, label: "eTIMS Integration", desc: "KRA-compliant receipts for high-value items" },
    { icon: faTasks, label: "Customer Management", desc: "Track purchase history and preferences" },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Core Features</h5>
        <small className="text-muted">Everything you need to run your electronics business</small>
      </Card.Header>
      <Card.Body>
        <Row className="g-4">
          {features.map((feature, i) => (
            <Col xs={12} sm={6} md={4} key={i}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "16px",
                  background: "#F0F4FF",
                  borderRadius: "12px",
                  border: "1px solid #E0E7FF",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FontAwesomeIcon
                    icon={feature.icon}
                    style={{ color: "#fff", fontSize: "20px" }}
                  />
                </div>
                <div>
                  <h6 style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a2e", margin: 0, marginBottom: "4px" }}>
                    {feature.label}
                  </h6>
                  <p style={{ fontSize: "12px", color: "#666", margin: 0, lineHeight: 1.4 }}>
                    {feature.desc}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────────────
// ELECTRONICS REPORTS WIDGET
// ─────────────────────────────────────────────────────
export const ElectronicsReportsWidget = () => {
  const reports = [
    "Daily Sales Reports by Product Category",
    "High-Value Item Inventory Report",
    "Warranty Expiry Alert Report",
    "Serial Number Tracking Report",
    "Trade-In Valuation History",
    "Payment Plan & Installment Report",
    "Stock Value Report (by Price)",
    "Service & Repair History",
    "Customer Purchase Patterns",
    "Payment Modes Report",
    "Profit Margin by Product",
    "Supplier Performance Report",
    "User Activity & Sales by Staff",
    "Bank Reconciliation Report",
    "Tax & eTIMS Report",
    "Warranty Claim Analytics",
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Comprehensive Reporting</h5>
        <small className="text-muted">Data-driven insights for electronics retail</small>
      </Card.Header>
      <Card.Body>
        <Row className="g-3">
          {reports.map((report, i) => (
            <Col xs={12} sm={6} md={4} key={i}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px",
                  background: "#EFF6FF",
                  borderLeft: "3px solid #2563EB",
                  borderRadius: "4px",
                }}
              >
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  style={{ color: "#2563EB", fontSize: "16px", flexShrink: 0 }}
                />
                <span style={{ fontSize: "13px", color: "#333" }}>{report}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────────────
// ELECTRONICS WHY CHOOSE WIDGET
// ─────────────────────────────────────────────────────
export const ElectronicsWhyChooseWidget = () => {
  const reasons = [
    {
      title: "High-Value Inventory Control",
      desc: "Manage expensive TVs, refrigerators, and computers with precision stock tracking",
      icon: faBox,
    },
    {
      title: "Serial Number Management",
      desc: "Track IMEI, model numbers, and product variants across your entire stock",
      icon: faBarcode,
    },
    {
      title: "Automatic Warranty Alerts",
      desc: "Never miss warranty expiry dates — system alerts you automatically for customer follow-ups",
      icon: faClock,
    },
    {
      title: "Trade-In Program Support",
      desc: "Manage customer trade-in valuations, compare old vs new products, and track history",
      icon: faHistory,
    },
    {
      title: "Flexible Payment Options",
      desc: "Support installment plans, financing agreements, and payment schedules seamlessly",
      icon: faCreditCard,
    },
    {
      title: "After-Sales Service Tracking",
      desc: "Log repairs, service requests, and customer issues linked to product serial numbers",
      icon: faCog,
    },
  ];

  return (
    <Card
      border="light"
      className="shadow-sm"
      style={{
        background: "linear-gradient(135deg, #EFF6FF 0%, #F3F0FF 100%)",
        border: "1px solid #DBEAFE",
      }}
    >
      <Card.Body>
        <h5 style={{ color: "#2563EB", fontWeight: 700, marginBottom: "24px" }}>
          Why Electronics Retailers Choose Bothive POS
        </h5>
        <Row className="g-4">
          {reasons.map((reason, i) => (
            <Col xs={12} md={6} key={i}>
              <div style={{ display: "flex", gap: "16px" }}>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "10px",
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(37,99,235,0.15)",
                    flexShrink: 0,
                  }}
                >
                  <FontAwesomeIcon
                    icon={reason.icon}
                    style={{ color: "#2563EB", fontSize: "22px" }}
                  />
                </div>
                <div>
                  <h6 style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a2e", marginBottom: "6px" }}>
                    {reason.title}
                  </h6>
                  <p style={{ fontSize: "13px", color: "#555", margin: 0, lineHeight: 1.5 }}>
                    {reason.desc}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────────────
// ELECTRONICS CHALLENGES WIDGET
// ─────────────────────────────────────────────────────
export const ElectronicsChallengesWidget = () => {
  const challenges = [
    {
      problem: "Managing high-value inventory with warranty tracking",
      solution: "Intelligent stock management with automatic warranty expiry alerts and service history",
    },
    {
      problem: "Tracking serial numbers and IMEI codes",
      solution: "Dedicated serial number fields linked to warranty, trade-in, and service records",
    },
    {
      problem: "Handling trade-in programs and valuations",
      solution: "Built-in trade-in module to value old items and track customer upgrade history",
    },
    {
      problem: "Managing flexible payment plans and installments",
      solution: "Support for payment schedules, financing terms, and deferred payment tracking",
    },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Common Challenges We Solve</h5>
        <small className="text-muted">Problems electronics retailers face — and how Bothive fixes them</small>
      </Card.Header>
      <Card.Body>
        <Row className="g-4">
          {challenges.map((item, i) => (
            <Col xs={12} md={6} key={i}>
              <div
                style={{
                  padding: "16px",
                  background: "#F0F4FF",
                  borderRadius: "12px",
                  borderLeft: "4px solid #7C3AED",
                }}
              >
                <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    style={{ color: "#7C3AED", fontSize: "18px", flexShrink: 0, marginTop: "2px" }}
                  />
                  <h6 style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a2e", margin: 0 }}>
                    {item.problem}
                  </h6>
                </div>
                <p style={{ fontSize: "12px", color: "#555", margin: 0, lineHeight: 1.5, marginLeft: "28px" }}>
                  ✓ {item.solution}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────────────
// ELECTRONICS KEY FEATURES WIDGET
// ─────────────────────────────────────────────────────
export const ElectronicsKeyFeaturesWidget = () => {
  const keyFeatures = [
    {
      title: "Point of Sale",
      desc: "Fast checkout system optimized for high-value transactions",
      features: ["Fast checkout", "Payment methods", "Receipt printing", "Customer data capture"],
    },
    {
      title: "Inventory & Stock Control",
      desc: "Real-time tracking of expensive items across multiple locations",
      features: ["Real-time updates", "Low-stock alerts", "Price management", "Stock transfers"],
    },
    {
      title: "Warranty & Service",
      desc: "Track warranty periods and manage after-sales service requests",
      features: ["Auto expiry alerts", "Service logging", "Repair tracking", "Customer follow-up"],
    },
    {
      title: "Trade-In Management",
      desc: "Manage trade-in valuations and customer upgrade programs",
      features: ["Trade valuation", "Purchase history", "Upgrade tracking", "Comparative analysis"],
    },
    {
      title: "Payment Plans",
      desc: "Support flexible financing and installment options",
      features: ["Payment schedules", "Financing terms", "Payment tracking", "Late payment alerts"],
    },
    {
      title: "Reports & Analytics",
      desc: "Comprehensive insights into your electronics business",
      features: ["Sales analysis", "Warranty insights", "Profitability", "Customer trends"],
    },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Key Features for Electronics Retailers</h5>
        <small className="text-muted">Powerful tools designed for electronics retail</small>
      </Card.Header>
      <Card.Body>
        <Row className="g-4">
          {keyFeatures.map((feature, i) => (
            <Col xs={12} md={6} key={i}>
              <div
                style={{
                  padding: "18px",
                  background: "#fff",
                  border: "1px solid #E0E7FF",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(37,99,235,0.1)";
                  e.currentTarget.style.borderColor = "#7C3AED";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "#E0E7FF";
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "12px",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faBolt}
                    style={{ color: "#fff", fontSize: "18px" }}
                  />
                </div>
                <h6 style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a2e", marginBottom: "6px" }}>
                  {feature.title}
                </h6>
                <p style={{ fontSize: "12px", color: "#666", marginBottom: "10px", lineHeight: 1.5 }}>
                  {feature.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {feature.features.map((f, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: "10px",
                        background: "#EFF6FF",
                        color: "#2563EB",
                        padding: "4px 8px",
                        borderRadius: "6px",
                        border: "0.5px solid #DBEAFE",
                      }}
                    >
                      • {f}
                    </span>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────────────
// ELECTRONICS GET STARTED WIDGET
// ─────────────────────────────────────────────────────
export const ElectronicsGetStartedWidget = () => {
  const history = useHistory();

  return (
    <Card
      style={{
        background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #06B6D4 100%)",
        border: "none",
        borderRadius: "16px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      }}
    >
      <Card.Body className="p-5 text-center">
        <h3
          style={{
            color: "#fff",
            fontWeight: 700,
            marginBottom: "12px",
            fontSize: "28px",
          }}
        >
          Ready to Modernize Your Electronics Shop?
        </h3>
        <p
          style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: "15px",
            marginBottom: "28px",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Join 30+ electronics retailers across Kenya who are running their operations on Bothive POS. 
          Manage warranty tracking, serial numbers, trade-in programs, and payment plans — all integrated seamlessly.
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => history.push(Routes.POSSystemPage.path)}
            style={{
              background: "#fff",
              color: "#2563EB",
              fontWeight: 700,
              borderRadius: "8px",
              border: "none",
              padding: "14px 32px",
              cursor: "pointer",
              fontSize: "14px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
          >
            Get Started with Electronics POS
          </button>
          <button
            style={{
              background: "transparent",
              color: "#fff",
              fontWeight: 700,
              borderRadius: "8px",
              border: "2px solid #fff",
              padding: "14px 32px",
              cursor: "pointer",
              fontSize: "14px",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            Schedule a Demo
          </button>
        </div>
        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "12px",
            marginTop: "20px",
            fontStyle: "italic",
          }}
        >
          Free consultation • No credit card required • Implementation support included
        </p>
      </Card.Body>
    </Card>
  );
};