import React, { useState } from "react";
import { Col, Row, Card, Button } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faBalanceScale,
  faGavel,
  faFileContract,
  faBriefcase,
  faUserTie,
  faHandshake,
  faBook,
  faClock,
  faShieldAlt,
  faFolderOpen,
  faCalendarAlt,
  faDollarSign,
  faExclamationTriangle,
  faBolt,
  faCog,
  faChartBar,
  faTasks,
  faStar,
  faUsers,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { Routes } from "../routes";

// ─────────────────────────────────────────────────────
// LAW FIRM HERO WIDGET
// ─────────────────────────────────────────────────────
export const LawFirmHeroWidget = () => {
  const history = useHistory();

  return (
    <Card
      style={{
        background: "linear-gradient(135deg, #1E3A5F 0%, #2C5282 50%, #0F172A 100%)",
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
              Bothive Law Firm Management ERP
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "16px",
                lineHeight: 1.8,
                marginBottom: "16px",
              }}
            >
              A complete enterprise resource planning system for modern law firms. Built on <strong>ERPNext</strong> and <strong>Odoo</strong> suites, 
              our platform integrates case management, client billing, trust accounting, document handling, and court scheduling into one unified practice management system.
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "14px",
                lineHeight: 1.6,
                marginBottom: "24px",
                fontStyle: "italic",
              }}
            >
              From client intake to case closure, manage every matter with precision, confidentiality, and full audit traceability.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Button
                style={{
                  background: "#fff",
                  color: "#1E3A5F",
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
                icon={faBalanceScale}
                style={{ fontSize: "60px", color: "#fff", marginBottom: "16px" }}
              />
              <h5 style={{ color: "#fff", fontWeight: 700, marginBottom: "8px" }}>
                30+ Law Firms
              </h5>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px", margin: 0 }}>
                Trusted by litigation, corporate, and family law practices across Kenya
              </p>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────────────
// LAW FIRM OVERVIEW WIDGET
// ─────────────────────────────────────────────────────
export const LawFirmOverviewWidget = () => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <h5 style={{ color: "#1E3A5F", fontWeight: 700, marginBottom: "16px" }}>
          Law Firm Management ERP Overview
        </h5>
        <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.8, marginBottom: "12px" }}>
          Bothive Law Firm ERP is a complete practice management solution designed to streamline legal operations 
          from client intake to case closure. Our system integrates case, financial, and administrative workflows, 
          giving partners and associates real-time visibility and control over every matter on the books.
        </p>
        <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.8, marginBottom: "12px" }}>
          Whether managing litigation, corporate advisory, conveyancing, or family law matters, the system adapts to 
          your firm's unique workflows. With secure document storage, automated billing, trust accounting, and 
          comprehensive reporting, your team can focus on practicing law while the system handles the rest.
        </p>
        <Row className="g-3">
          <Col xs={12} sm={6} md={3}>
            <div style={{ textAlign: "center", padding: "12px", background: "#F1F5F9", borderRadius: "8px" }}>
              <h6 style={{ color: "#1E3A5F", fontWeight: 700, marginBottom: "6px" }}>18+ Modules</h6>
              <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>Comprehensive practice management</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div style={{ textAlign: "center", padding: "12px", background: "#F1F5F9", borderRadius: "8px" }}>
              <h6 style={{ color: "#1E3A5F", fontWeight: 700, marginBottom: "6px" }}>Multi-User Access</h6>
              <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>Partner, associate & paralegal roles</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div style={{ textAlign: "center", padding: "12px", background: "#F1F5F9", borderRadius: "8px" }}>
              <h6 style={{ color: "#1E3A5F", fontWeight: 700, marginBottom: "6px" }}>Cloud-Based</h6>
              <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>Secure access from anywhere, anytime</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div style={{ textAlign: "center", padding: "12px", background: "#F1F5F9", borderRadius: "8px" }}>
              <h6 style={{ color: "#1E3A5F", fontWeight: 700, marginBottom: "6px" }}>Confidentiality First</h6>
              <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>Role-based access & audit trails</p>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────────────
// LAW FIRM MODULES WIDGET
// ─────────────────────────────────────────────────────
export const LawFirmModulesWidget = () => {
  const modules = [
    { icon: faFolderOpen, label: "Client Intake & Inquiries", desc: "Manage inquiries, onboarding, and conflict checks efficiently" },
    { icon: faUsers, label: "Client & Case Profiles", desc: "Centralizes client records, matters, and case details" },
    { icon: faDollarSign, label: "Billing & Invoicing", desc: "Automates fee notes, retainers, and payment reminders" },
    { icon: faChartBar, label: "Trust & Revenue Accounting", desc: "Monitors client trust accounts and firm revenue" },
    { icon: faGavel, label: "Case & Matter Management", desc: "Tracks case progress, pleadings, and matter status" },
    { icon: faFileContract, label: "Document Management", desc: "Secure storage, drafting, and version control for legal documents" },
    { icon: faCalendarAlt, label: "Court Dates & Hearings", desc: "Manages court calendars, hearings, and filing deadlines" },
    { icon: faClock, label: "Time & Billable Hours", desc: "Automated time tracking for accurate client billing" },
    { icon: faBook, label: "Legal Library & Precedents", desc: "Centralized repository of precedents, statutes, and templates" },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Key Modules</h5>
        <small className="text-muted">18+ integrated modules for complete law firm management</small>
      </Card.Header>
      <Card.Body>
        <Row className="g-4">
          {modules.map((module, i) => (
            <Col xs={12} sm={6} md={4} key={i}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "16px",
                  background: "#F1F5F9",
                  borderRadius: "12px",
                  border: "1px solid #E2E8F0",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #1E3A5F, #2C5282)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FontAwesomeIcon
                    icon={module.icon}
                    style={{ color: "#fff", fontSize: "20px" }}
                  />
                </div>
                <div>
                  <h6 style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a2e", margin: 0, marginBottom: "4px" }}>
                    {module.label}
                  </h6>
                  <p style={{ fontSize: "12px", color: "#666", margin: 0, lineHeight: 1.4 }}>
                    {module.desc}
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
// LAW FIRM REPORTS WIDGET
// ─────────────────────────────────────────────────────
export const LawFirmReportsWidget = () => {
  const reports = [
    "Matter Status & Caseload Report",
    "Billable Hours by Fee Earner",
    "Outstanding Fee Notes & Aging Report",
    "Trust Account Reconciliation Report",
    "Revenue by Practice Area",
    "Client Retention & Referral Report",
    "Court Calendar & Filing Deadlines",
    "Staff Time Utilization Report",
    "Matter Profitability Report",
    "Conflict Check History Report",
    "Document Audit Trail Report",
    "Expense & Disbursement Report",
    "New Client Onboarding Report",
    "Partner Performance Dashboard",
    "Tax & Statutory Compliance Report",
    "Firm-Wide KPI Dashboard",
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Advanced Reporting</h5>
        <small className="text-muted">Practice-specific analytics and insights</small>
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
                  background: "#F1F5F9",
                  borderLeft: "3px solid #2C5282",
                  borderRadius: "4px",
                }}
              >
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  style={{ color: "#1E3A5F", fontSize: "16px", flexShrink: 0 }}
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
// LAW FIRM WHY CHOOSE WIDGET
// ─────────────────────────────────────────────────────
export const LawFirmWhyChooseWidget = () => {
  const reasons = [
    {
      title: "Centralized Matter Records",
      desc: "Complete case history, documents, and correspondence accessible instantly to authorized staff",
      icon: faFolderOpen,
    },
    {
      title: "Automated Billing & Trust Accounting",
      desc: "Accurate fee notes and compliant trust account management reduce billing disputes and leakage",
      icon: faDollarSign,
    },
    {
      title: "Smart Court Calendar",
      desc: "Never miss a filing deadline or hearing date with automated reminders across all matters",
      icon: faCalendarAlt,
    },
    {
      title: "Document Security & Version Control",
      desc: "Encrypted storage with full version history for pleadings, contracts, and client documents",
      icon: faShieldAlt,
    },
    {
      title: "Real-Time Practice Analytics",
      desc: "Firm-wide KPI dashboard for informed decisions on staffing, billing, and case strategy",
      icon: faChartBar,
    },
    {
      title: "Multi-Branch & Department Support",
      desc: "Manage multiple offices and practice areas from a single centralized system",
      icon: faCog,
    },
  ];

  return (
    <Card
      border="light"
      className="shadow-sm"
      style={{
        background: "linear-gradient(135deg, #F1F5F9 0%, #EFF6FF 100%)",
        border: "1px solid #E2E8F0",
      }}
    >
      <Card.Body>
        <h5 style={{ color: "#1E3A5F", fontWeight: 700, marginBottom: "24px" }}>
          Why Law Firms Choose Bothive ERP
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
                    boxShadow: "0 2px 8px rgba(30,58,95,0.15)",
                    flexShrink: 0,
                  }}
                >
                  <FontAwesomeIcon
                    icon={reason.icon}
                    style={{ color: "#1E3A5F", fontSize: "22px" }}
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
// LAW FIRM CHALLENGES WIDGET
// ─────────────────────────────────────────────────────
export const LawFirmChallengesWidget = () => {
  const challenges = [
    {
      problem: "Tracking billable hours accurately across fee earners",
      solution: "Built-in time tracking linked directly to matters, automatically feeding into client invoices",
    },
    {
      problem: "Managing trust accounts in compliance with law society rules",
      solution: "Dedicated trust accounting module with reconciliation, audit trails, and compliance reporting",
    },
    {
      problem: "Missing court filing deadlines and hearing dates",
      solution: "Centralized court calendar with automated reminders sent to responsible fee earners and clerks",
    },
    {
      problem: "Scattered client documents and case correspondence",
      solution: "Secure, searchable document management system with version control tied to each matter",
    },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Challenges We Solve</h5>
        <small className="text-muted">Law firm operational problems and our solutions</small>
      </Card.Header>
      <Card.Body>
        <Row className="g-4">
          {challenges.map((item, i) => (
            <Col xs={12} md={6} key={i}>
              <div
                style={{
                  padding: "16px",
                  background: "#F1F5F9",
                  borderRadius: "12px",
                  borderLeft: "4px solid #2C5282",
                }}
              >
                <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    style={{ color: "#2C5282", fontSize: "18px", flexShrink: 0, marginTop: "2px" }}
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
// LAW FIRM FEATURES WIDGET
// ─────────────────────────────────────────────────────
export const LawFirmFeaturesWidget = () => {
  const features = [
    {
      title: "Case & Matter Management",
      desc: "Track every case from opening to closure with full activity history",
      items: ["Matter records", "Case status tracking", "Pleadings & filings", "Activity log"],
    },
    {
      title: "Financial Management",
      desc: "Billing, trust accounting, disbursements, and firm accounts",
      items: ["Fee notes & invoicing", "Trust accounting", "Disbursement tracking", "Accounting"],
    },
    {
      title: "Human Resource",
      desc: "Staff scheduling, performance tracking, and payroll management",
      items: ["Fee earner schedules", "Attendance tracking", "Performance reviews", "Payroll"],
    },
    {
      title: "Document & Knowledge Management",
      desc: "Legal documents, templates, and precedent library",
      items: ["Document storage", "Templates & precedents", "Version control", "E-signatures"],
    },
    {
      title: "Client Portal & Communication",
      desc: "Online case updates, document sharing, and client communication",
      items: ["Client portal access", "Case status updates", "Notifications", "Client feedback"],
    },
    {
      title: "Analytics & Compliance",
      desc: "Firm KPIs, matter profitability, and regulatory compliance",
      items: ["Performance metrics", "Profitability reports", "Compliance tracking", "Audit trails"],
    },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Complete Law Firm Features</h5>
        <small className="text-muted">Built on ERPNext and Odoo enterprise suites</small>
      </Card.Header>
      <Card.Body>
        <Row className="g-4">
          {features.map((feature, i) => (
            <Col xs={12} md={6} key={i}>
              <div
                style={{
                  padding: "18px",
                  background: "#fff",
                  border: "1px solid #E2E8F0",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(30,58,95,0.1)";
                  e.currentTarget.style.borderColor = "#2C5282";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "#E2E8F0";
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: "linear-gradient(135deg, #1E3A5F, #2C5282)",
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
                  {feature.items.map((item, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: "10px",
                        background: "#F1F5F9",
                        color: "#1E3A5F",
                        padding: "4px 8px",
                        borderRadius: "6px",
                        border: "0.5px solid #E2E8F0",
                      }}
                    >
                      • {item}
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
// LAW FIRM GET STARTED WIDGET
// ─────────────────────────────────────────────────────
export const LawFirmGetStartedWidget = () => {
  const history = useHistory();

  return (
    <Card
      style={{
        background: "linear-gradient(135deg, #1E3A5F 0%, #2C5282 50%, #0F172A 100%)",
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
          Ready to Modernize Your Law Practice?
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
          Join 30+ law firms across Kenya who have streamlined case management, billing, and compliance 
          with Bothive Law Firm ERP. Built on proven ERPNext and Odoo technology.
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => history.push(Routes.POSSystemPage.path)}
            style={{
              background: "#fff",
              color: "#1E3A5F",
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
            Get Started with Law Firm ERP
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
          Enterprise-grade system • Confidential & secure • Cloud-based deployment • Dedicated support
        </p>
      </Card.Body>
    </Card>
  );
};