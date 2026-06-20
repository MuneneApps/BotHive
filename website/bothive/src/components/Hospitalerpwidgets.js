import React, { useState } from "react";
import { Col, Row, Card, Button } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faHeartbeat,
  faStethoscope,
  faCalendarAlt,
  faChartBar,
  faUsers,
  faPills,
  faCog,
  faExclamationTriangle,
  faTasks,
  faBolt,
  faFileAlt,
  faDollarSign,
  faStar,
  faClipboard,
  faBed,
  faFlask,
  faUserMd,
  faPrescription,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { Routes } from "../routes";

// ─────────────────────────────────────────────────────
// HOSPITAL HERO WIDGET
// ─────────────────────────────────────────────────────
export const HospitalHeroWidget = () => {
  const history = useHistory();

  return (
    <Card
      style={{
        background: "linear-gradient(135deg, #0891B2 0%, #06B6D4 50%, #14B8A6 100%)",
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
              Bothive Hospital Management ERP
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "16px",
                lineHeight: 1.8,
                marginBottom: "16px",
              }}
            >
              Comprehensive enterprise resource planning system for modern hospitals. Built on <strong>ERPNext</strong> and <strong>Odoo</strong> suites, 
              our platform integrates patient management, medical records, billing, pharmacy, lab, and operations into one unified system.
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
              From patient admission to discharge, manage every aspect of hospital operations with precision, compliance, and efficiency.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Button
                style={{
                  background: "#fff",
                  color: "#0891B2",
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
                icon={faHeartbeat}
                style={{ fontSize: "60px", color: "#fff", marginBottom: "16px" }}
              />
              <h5 style={{ color: "#fff", fontWeight: 700, marginBottom: "8px" }}>
                40+ Hospitals & Clinics
              </h5>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px", margin: 0 }}>
                Trusted by leading healthcare providers across Kenya and East Africa
              </p>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────────────
// HOSPITAL OVERVIEW WIDGET
// ─────────────────────────────────────────────────────
export const HospitalOverviewWidget = () => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <h5 style={{ color: "#0891B2", fontWeight: 700, marginBottom: "16px" }}>
          Hospital Management ERP Overview
        </h5>
        <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.8, marginBottom: "12px" }}>
          Bothive Hospital Management ERP is a complete enterprise solution designed to streamline healthcare operations 
          from patient intake to discharge. Our system integrates clinical, financial, and operational workflows, providing 
          hospitals with real-time visibility and control over all critical functions.
        </p>
        <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.8, marginBottom: "12px" }}>
          Whether managing OPD (Out-Patient Department), IPD (In-Patient Department), emergency services, or specialized departments, 
          the system adapts to your hospital's unique workflows. With secure medical records, intelligent billing, and comprehensive 
          reporting, you can focus on patient care while the system handles operations.
        </p>
        <Row className="g-3">
          <Col xs={12} sm={6} md={3}>
            <div style={{ textAlign: "center", padding: "12px", background: "#F0F9FF", borderRadius: "8px" }}>
              <h6 style={{ color: "#0891B2", fontWeight: 700, marginBottom: "6px" }}>20+ Modules</h6>
              <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>Comprehensive hospital operations</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div style={{ textAlign: "center", padding: "12px", background: "#F0F9FF", borderRadius: "8px" }}>
              <h6 style={{ color: "#0891B2", fontWeight: 700, marginBottom: "6px" }}>Multi-User Access</h6>
              <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>10+ role-based dashboards</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div style={{ textAlign: "center", padding: "12px", background: "#F0F9FF", borderRadius: "8px" }}>
              <h6 style={{ color: "#0891B2", fontWeight: 700, marginBottom: "6px" }}>Cloud-Based</h6>
              <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>Access from anywhere, anytime</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div style={{ textAlign: "center", padding: "12px", background: "#F0F9FF", borderRadius: "8px" }}>
              <h6 style={{ color: "#0891B2", fontWeight: 700, marginBottom: "6px" }}>HIPAA Ready</h6>
              <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>Healthcare data security</p>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────────────
// HOSPITAL MODULES WIDGET
// ─────────────────────────────────────────────────────
export const HospitalModulesWidget = () => {
  const modules = [
    { icon: faClipboard, label: "Patient Management", desc: "Complete patient profiles and medical history" },
    { icon: faCalendarAlt, label: "Appointment Scheduling", desc: "Doctor schedules and appointment booking" },
    { icon: faBed, label: "IPD Management", desc: "In-patient ward management and bed allocation" },
    { icon: faFlask, label: "Lab Management", desc: "Test ordering, reporting, and sample tracking" },
    { icon: faPills, label: "Pharmacy Management", desc: "Medicine inventory and dispensing tracking" },
    { icon: faStethoscope, label: "OPD Management", desc: "Out-patient registration and consultation" },
    { icon: faUserMd, label: "Doctor Management", desc: "Staff scheduling and consultation tracking" },
    { icon: faDollarSign, label: "Billing & Insurance", desc: "Patient billing and insurance claim management" },
    { icon: faPrescription, label: "E-Prescription", desc: "Digital prescriptions and medication tracking" },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Key Modules</h5>
        <small className="text-muted">20+ integrated modules for complete hospital management</small>
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
                  background: "#F0F9FF",
                  borderRadius: "12px",
                  border: "1px solid #CFFAFE",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #0891B2, #06B6D4)",
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
// HOSPITAL REPORTS WIDGET
// ─────────────────────────────────────────────────────
export const HospitalReportsWidget = () => {
  const reports = [
    "Patient Census Report (OPD/IPD)",
    "Doctor Consultation Analytics",
    "Medicine Usage & Pharmacy Report",
    "Lab Test Volume & Results Report",
    "Daily Billing & Revenue Report",
    "Insurance Claim Tracking Report",
    "Staff Attendance & Schedule Report",
    "Ward Occupancy & Bed Management",
    "Patient Admission & Discharge Report",
    "Appointment No-Show Analysis",
    "Medicine Stock & Expiry Report",
    "Departmental Performance Report",
    "Patient Satisfaction Feedback",
    "Medical Equipment Maintenance Report",
    "Financial Statements (P&L)",
    "Operational KPI Dashboard",
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Advanced Reporting</h5>
        <small className="text-muted">Hospital-specific analytics and insights</small>
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
                  background: "#F0F9FF",
                  borderLeft: "3px solid #0891B2",
                  borderRadius: "4px",
                }}
              >
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  style={{ color: "#0891B2", fontSize: "16px", flexShrink: 0 }}
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
// HOSPITAL WHY CHOOSE WIDGET
// ─────────────────────────────────────────────────────
export const HospitalWhyChooseWidget = () => {
  const reasons = [
    {
      title: "Unified Patient Records",
      desc: "Complete medical history accessible to authorized staff instantly for better clinical decisions",
      icon: faClipboard,
    },
    {
      title: "Integrated Billing & Insurance",
      desc: "Automated billing with real-time insurance claim management reduces revenue leakage",
      icon: faDollarSign,
    },
    {
      title: "Smart Appointment System",
      desc: "Reduce patient wait times with intelligent scheduling across multiple departments",
      icon: faCalendarAlt,
    },
    {
      title: "Lab & Pharmacy Integration",
      desc: "Seamless test ordering, sample tracking, and medicine dispensing with automated alerts",
      icon: faFlask,
    },
    {
      title: "Real-Time Analytics",
      desc: "Hospital-wide KPI dashboard for informed decision-making and operational efficiency",
      icon: faChartBar,
    },
    {
      title: "Multi-Location Support",
      desc: "Manage multiple branches, departments, and wards from a centralized system",
      icon: faCog,
    },
  ];

  return (
    <Card
      border="light"
      className="shadow-sm"
      style={{
        background: "linear-gradient(135deg, #F0F9FF 0%, #ECFDF5 100%)",
        border: "1px solid #CFFAFE",
      }}
    >
      <Card.Body>
        <h5 style={{ color: "#0891B2", fontWeight: 700, marginBottom: "24px" }}>
          Why Hospitals Choose Bothive ERP
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
                    boxShadow: "0 2px 8px rgba(8,145,178,0.15)",
                    flexShrink: 0,
                  }}
                >
                  <FontAwesomeIcon
                    icon={reason.icon}
                    style={{ color: "#0891B2", fontSize: "22px" }}
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
// HOSPITAL CHALLENGES WIDGET
// ─────────────────────────────────────────────────────
export const HospitalChallengesWidget = () => {
  const challenges = [
    {
      problem: "Managing fragmented patient data across departments",
      solution: "Unified patient records accessible to authorized staff with complete medical history integration",
    },
    {
      problem: "Complex billing with multiple insurance companies",
      solution: "Automated billing system with real-time insurance claim tracking and payment reconciliation",
    },
    {
      problem: "Coordinating appointments across multiple doctors and departments",
      solution: "Smart scheduling system that optimizes doctor time, reduces patient wait, and prevents overbooking",
    },
    {
      problem: "Tracking lab tests and medicine inventory efficiently",
      solution: "Integrated lab management and pharmacy module with automated ordering and stock alerts",
    },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Challenges We Solve</h5>
        <small className="text-muted">Hospital operational problems and our solutions</small>
      </Card.Header>
      <Card.Body>
        <Row className="g-4">
          {challenges.map((item, i) => (
            <Col xs={12} md={6} key={i}>
              <div
                style={{
                  padding: "16px",
                  background: "#F0F9FF",
                  borderRadius: "12px",
                  borderLeft: "4px solid #06B6D4",
                }}
              >
                <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    style={{ color: "#06B6D4", fontSize: "18px", flexShrink: 0, marginTop: "2px" }}
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
// HOSPITAL FEATURES WIDGET
// ─────────────────────────────────────────────────────
export const HospitalFeaturesWidget = () => {
  const features = [
    {
      title: "Clinical Management",
      desc: "Patient records, diagnosis, treatment plans, and medical history",
      items: ["Medical records", "Diagnosis tracking", "Treatment plans", "Patient notes"],
    },
    {
      title: "Financial Management",
      desc: "Billing, insurance claims, payroll, and hospital accounts",
      items: ["Patient billing", "Insurance claims", "Payroll", "Accounting"],
    },
    {
      title: "Human Resource",
      desc: "Staff scheduling, performance tracking, and payroll management",
      items: ["Staff schedules", "Attendance tracking", "Performance reviews", "Payroll"],
    },
    {
      title: "Inventory & Supply",
      desc: "Medicine, medical supplies, and equipment tracking",
      items: ["Medicine inventory", "Medical supplies", "Equipment tracking", "Auto reordering"],
    },
    {
      title: "Patient Portal & Communication",
      desc: "Online appointment booking, medical reports, and patient communication",
      items: ["Online appointments", "Medical reports access", "Notifications", "Patient feedback"],
    },
    {
      title: "Analytics & Compliance",
      desc: "Hospital KPIs, quality metrics, and regulatory compliance",
      items: ["Performance metrics", "Quality reports", "Compliance tracking", "Audit trails"],
    },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Complete Hospital Features</h5>
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
                  border: "1px solid #CFFAFE",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(8,145,178,0.1)";
                  e.currentTarget.style.borderColor = "#06B6D4";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "#CFFAFE";
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: "linear-gradient(135deg, #0891B2, #06B6D4)",
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
                        background: "#F0F9FF",
                        color: "#0891B2",
                        padding: "4px 8px",
                        borderRadius: "6px",
                        border: "0.5px solid #CFFAFE",
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
// HOSPITAL GET STARTED WIDGET
// ─────────────────────────────────────────────────────
export const HospitalGetStartedWidget = () => {
  const history = useHistory();

  return (
    <Card
      style={{
        background: "linear-gradient(135deg, #0891B2 0%, #06B6D4 50%, #14B8A6 100%)",
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
          Ready to Transform Your Hospital Operations?
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
          Join 40+ leading hospitals across Kenya and East Africa who have improved patient care, 
          reduced operational costs, and streamlined workflows with Bothive Hospital ERP. 
          Built on proven ERPNext and Odoo technology.
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => history.push(Routes.POSSystemPage.path)}
            style={{
              background: "#fff",
              color: "#0891B2",
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
            Get Started with Hospital ERP
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
          Enterprise-grade system • HIPAA-ready security • Cloud-based deployment • Unlimited support
        </p>
      </Card.Body>
    </Card>
  );
};