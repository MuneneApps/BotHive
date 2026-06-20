import React, { useState } from "react";
import { Col, Row, Card, Button } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTools,
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
  faHardHat,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { Routes } from "../routes";

// ─────────────────────────────────────────────────────
// HARDWARE HERO WIDGET
// ─────────────────────────────────────────────────────
export const HardwareHeroWidget = () => {
  const history = useHistory();

  return (
    <Card
      style={{
        background: "linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #CD853F 100%)",
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
              Bothive Hardware POS System
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "16px",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Manage thousands of SKUs, inventory across branches, customer credit accounts, and generate eTIMS-compliant receipts — all from one powerful POS system designed specifically for hardware businesses.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Button
                style={{
                  background: "#fff",
                  color: "#8B4513",
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
                icon={faHardHat}
                style={{ fontSize: "60px", color: "#fff", marginBottom: "16px" }}
              />
              <h5 style={{ color: "#fff", fontWeight: 700, marginBottom: "8px" }}>
                25+ Hardware Stores
              </h5>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px", margin: 0 }}>
                Across Kenya's 47 counties, trusting Bothive to power their operations
              </p>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────────────
// HARDWARE FEATURES WIDGET
// ─────────────────────────────────────────────────────
export const HardwareFeaturesWidget = () => {
  const features = [
    { icon: faBox, label: "Products Management", desc: "Track thousands of SKUs with variant support" },
    { icon: faShoppingCart, label: "Sales Management", desc: "Fast, reliable POS for high-volume sales" },
    { icon: faCreditCard, label: "Purchase Management", desc: "Streamline supplier ordering and tracking" },
    { icon: faUsers, label: "Supplier Management", desc: "Maintain supplier details and payment history" },
    { icon: faCog, label: "Loyalty Management", desc: "Build customer relationships with rewards" },
    { icon: faChartBar, label: "Multi-Store Management", desc: "Manage all branches from one dashboard" },
    { icon: faFileAlt, label: "Quotes & Invoices", desc: "Generate professional quotes and invoices" },
    { icon: faStar, label: "eTIMS Integration", desc: "KRA-compliant tax management & reporting" },
    { icon: faTasks, label: "Expense Management", desc: "Track and categorize all business expenses" },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Core Features</h5>
        <small className="text-muted">Everything you need to run your hardware business</small>
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
                  background: "#F5F5F5",
                  borderRadius: "12px",
                  border: "1px solid #E0E0E0",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #8B4513, #D2691E)",
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
// HARDWARE REPORTS WIDGET
// ─────────────────────────────────────────────────────
export const HardwareReportsWidget = () => {
  const reports = [
    "Periodical Sales Reports",
    "Payment Modes Report",
    "Sales by User Report",
    "Sales by Product, Category & Brand",
    "Top Selling Items Report",
    "Profit Report",
    "Inventory Report",
    "Stock Value Report",
    "Stock Adjustment & Reconciliation",
    "Expense Report",
    "Accounts Reports",
    "Banking Reports",
    "User Logs Report",
    "User Clock In/Out Report",
    "Tax & eTIMS Report",
    "Analytical Dashboard",
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Comprehensive Reporting</h5>
        <small className="text-muted">Data-driven insights for better business decisions</small>
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
                  background: "#FFF8F0",
                  borderLeft: "3px solid #D2691E",
                  borderRadius: "4px",
                }}
              >
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  style={{ color: "#8B4513", fontSize: "16px", flexShrink: 0 }}
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
// HARDWARE WHY CHOOSE WIDGET
// ─────────────────────────────────────────────────────
export const HardwareWhyChooseWidget = () => {
  const reasons = [
    {
      title: "Handle Thousands of SKUs",
      desc: "From nails and screws to power tools and building materials — manage complexity with ease",
      icon: faBox,
    },
    {
      title: "Advanced Inventory Management",
      desc: "Real-time stock tracking across branches, low-stock alerts, and automated reordering",
      icon: faChartBar,
    },
    {
      title: "Customer Credit Tracking",
      desc: "Manage contractor and wholesale accounts with credit limits, payment terms, and aging reports",
      icon: faUsers,
    },
    {
      title: "eTIMS Compliance",
      desc: "Every receipt is automatically KRA-compliant, generated in real-time with full audit trails",
      icon: faStar,
    },
    {
      title: "Barcode Scanning",
      desc: "Fast, accurate sales with barcode scanning for quick checkout and inventory updates",
      icon: faBarcode,
    },
    {
      title: "Multi-Branch Dashboard",
      desc: "Monitor all your hardware locations from a single dashboard with consolidated reports",
      icon: faCog,
    },
  ];

  return (
    <Card
      border="light"
      className="shadow-sm"
      style={{
        background: "linear-gradient(135deg, #FFF8F0 0%, #FFE8D1 100%)",
        border: "1px solid #FFE0C0",
      }}
    >
      <Card.Body>
        <h5 style={{ color: "#8B4513", fontWeight: 700, marginBottom: "24px" }}>
          Why Hardware Shops Choose Bothive POS
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
                    boxShadow: "0 2px 8px rgba(139,69,19,0.15)",
                    flexShrink: 0,
                  }}
                >
                  <FontAwesomeIcon
                    icon={reason.icon}
                    style={{ color: "#8B4513", fontSize: "22px" }}
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
// HARDWARE CHALLENGES WIDGET
// ─────────────────────────────────────────────────────
export const HardwareChallengesWidget = () => {
  const challenges = [
    {
      problem: "Tracking thousands of different products and sizes",
      solution: "Intelligent product management with variants, bulk tracking, and automated SKU generation",
    },
    {
      problem: "Managing customer credit accounts and payments",
      solution: "Built-in credit management with payment schedules, aging reports, and collection tracking",
    },
    {
      problem: "Generating eTIMS-compliant receipts for every sale",
      solution: "Automatic KRA integration — every receipt is compliant, real-time, and audit-proof",
    },
    {
      problem: "Knowing stock levels across multiple branches",
      solution: "Real-time multi-branch inventory dashboard with transfer tracking and stock reconciliation",
    },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Common Challenges We Solve</h5>
        <small className="text-muted">Problems that hardware shops face — and how Bothive fixes them</small>
      </Card.Header>
      <Card.Body>
        <Row className="g-4">
          {challenges.map((item, i) => (
            <Col xs={12} md={6} key={i}>
              <div
                style={{
                  padding: "16px",
                  background: "#F5F5F5",
                  borderRadius: "12px",
                  borderLeft: "4px solid #D2691E",
                }}
              >
                <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    style={{ color: "#D2691E", fontSize: "18px", flexShrink: 0, marginTop: "2px" }}
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
// HARDWARE KEY FEATURES WIDGET
// ─────────────────────────────────────────────────────
export const HardwareKeyFeaturesWidget = () => {
  const keyFeatures = [
    {
      title: "Sales & Point of Sale",
      desc: "Fast, reliable POS designed for high-volume hardware retail",
      features: ["Barcode scanning", "Quick checkout", "Payment methods", "Receipt printing"],
    },
    {
      title: "Inventory Management",
      desc: "Know your stock levels at all times across all branches",
      features: ["Real-time tracking", "Low-stock alerts", "Stock transfers", "Reconciliation"],
    },
    {
      title: "Customer & Supplier Management",
      desc: "Build lasting business relationships with detailed profiles",
      features: ["Credit accounts", "Payment history", "Contractor tracking", "Wholesale pricing"],
    },
    {
      title: "Reports & Analytics",
      desc: "Make data-driven business decisions with comprehensive reporting",
      features: ["Sales analysis", "Inventory insights", "Profit reports", "Customer analytics"],
    },
    {
      title: "Multi-Branch Management",
      desc: "Manage all your hardware stores from one unified dashboard",
      features: ["Centralized control", "Branch comparisons", "Consolidated reports", "Stock transfer"],
    },
    {
      title: "Integrations",
      desc: "Connect with the tools and payment methods you already use",
      features: ["M-Pesa integration", "Bank sync", "eTIMS compliance", "Custom integrations"],
    },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Key Features for Hardware Retailers</h5>
        <small className="text-muted">Powerful tools to run your business efficiently</small>
      </Card.Header>
      <Card.Body>
        <Row className="g-4">
          {keyFeatures.map((feature, i) => (
            <Col xs={12} md={6} key={i}>
              <div
                style={{
                  padding: "18px",
                  background: "#fff",
                  border: "1px solid #E0E0E0",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(139,69,19,0.1)";
                  e.currentTarget.style.borderColor = "#D2691E";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "#E0E0E0";
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: "linear-gradient(135deg, #8B4513, #D2691E)",
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
                        background: "#FFF8F0",
                        color: "#8B4513",
                        padding: "4px 8px",
                        borderRadius: "6px",
                        border: "0.5px solid #FFE0C0",
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
// HARDWARE GET STARTED WIDGET
// ─────────────────────────────────────────────────────
export const HardwareGetStartedWidget = () => {
  const history = useHistory();

  return (
    <Card
      style={{
        background: "linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #CD853F 100%)",
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
          Ready to Transform Your Hardware Business?
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
          Join 25+ hardware stores across Kenya who are running their operations on Bothive POS. 
          Get real-time inventory, eTIMS compliance, and full multi-branch control — all in one system.
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => history.push(Routes.POSSystemPage.path)}
            style={{
              background: "#fff",
              color: "#8B4513",
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
            Get Started with Hardware POS
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