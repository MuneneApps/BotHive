import React, { useState } from "react";
import { Col, Row, Card, Button } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faBuilding,
  faHome,
  faKey,
  faFileContract,
  faHandshake,
  faMoneyBillWave,
  faMapMarkerAlt,
  faUsers,
  faChartLine,
  faCalendarAlt,
  faClipboardList,
  faWarehouse,
  faTools,
  faFileInvoiceDollar,
  faSearchLocation,
  faExclamationTriangle,
  faBolt,
  faCog,
  faChartBar,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { Routes } from "../routes";

// ─────────────────────────────────────────────────────
// REAL ESTATE HERO WIDGET
// ─────────────────────────────────────────────────────
export const RealEstateHeroWidget = () => {
  const history = useHistory();

  return (
    <Card
      style={{
        background: "linear-gradient(135deg, #14532D 0%, #15803D 50%, #B45309 100%)",
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
              Bothive Real Estate Management ERP
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "16px",
                lineHeight: 1.8,
                marginBottom: "16px",
              }}
            >
              A complete enterprise resource planning system for property sales agencies and rental management firms. Built on <strong>ERPNext</strong> and <strong>Odoo</strong> suites, 
              our platform integrates property listings, land and apartment sales, rent collection, lease management, and landlord remittances into one unified system.
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
              From lead inquiry to lease renewal, manage your entire property portfolio with precision, transparency, and full financial control.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Button
                style={{
                  background: "#fff",
                  color: "#14532D",
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
                icon={faBuilding}
                style={{ fontSize: "60px", color: "#fff", marginBottom: "16px" }}
              />
              <h5 style={{ color: "#fff", fontWeight: 700, marginBottom: "8px" }}>
                35+ Property Firms
              </h5>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px", margin: 0 }}>
                Sales agencies and rental management companies trust Bothive across Kenya
              </p>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────────────
// REAL ESTATE OVERVIEW WIDGET
// ─────────────────────────────────────────────────────
export const RealEstateOverviewWidget = () => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <h5 style={{ color: "#14532D", fontWeight: 700, marginBottom: "16px" }}>
          Real Estate Management ERP Overview
        </h5>
        <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.8, marginBottom: "12px" }}>
          Bothive Real Estate ERP is a complete property management solution built for agencies that sell land and apartments, 
          as well as firms that manage rental properties on behalf of landlords. Our system integrates sales, leasing, financial, 
          and maintenance workflows, giving directors and property managers real-time visibility into every unit and transaction.
        </p>
        <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.8, marginBottom: "12px" }}>
          Whether managing plot sales, off-plan apartments, residential rentals, or commercial leases, the system adapts to 
          your portfolio's unique structure. With automated rent collection, landlord remittances, lease tracking, and 
          comprehensive reporting, your team can focus on growing the portfolio while the system handles operations.
        </p>
        <Row className="g-3">
          <Col xs={12} sm={6} md={3}>
            <div style={{ textAlign: "center", padding: "12px", background: "#F0FDF4", borderRadius: "8px" }}>
              <h6 style={{ color: "#14532D", fontWeight: 700, marginBottom: "6px" }}>16+ Modules</h6>
              <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>Sales, rentals & portfolio management</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div style={{ textAlign: "center", padding: "12px", background: "#F0FDF4", borderRadius: "8px" }}>
              <h6 style={{ color: "#14532D", fontWeight: 700, marginBottom: "6px" }}>Multi-User Access</h6>
              <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>Agents, managers & landlord roles</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div style={{ textAlign: "center", padding: "12px", background: "#F0FDF4", borderRadius: "8px" }}>
              <h6 style={{ color: "#14532D", fontWeight: 700, marginBottom: "6px" }}>Cloud-Based</h6>
              <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>Access your portfolio from anywhere</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div style={{ textAlign: "center", padding: "12px", background: "#F0FDF4", borderRadius: "8px" }}>
              <h6 style={{ color: "#14532D", fontWeight: 700, marginBottom: "6px" }}>Full Transparency</h6>
              <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>Landlord & investor reporting</p>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────────────
// REAL ESTATE MODULES WIDGET
// ─────────────────────────────────────────────────────
export const RealEstateModulesWidget = () => {
  const modules = [
    { icon: faSearchLocation, label: "Lead & Inquiry Management", desc: "Manages buyer and tenant inquiries from first contact" },
    { icon: faHome, label: "Property & Unit Listings", desc: "Centralizes land, apartment, and rental unit details" },
    { icon: faMoneyBillWave, label: "Rent Collection & Invoicing", desc: "Automates rent invoicing, tracking, and reminders" },
    { icon: faFileContract, label: "Lease & Sale Agreements", desc: "Manages tenancy agreements and sale contracts" },
    { icon: faUsers, label: "Tenant & Landlord Portal", desc: "Self-service access to statements, invoices, and updates" },
    { icon: faTools, label: "Maintenance Request Tracking", desc: "Logs and resolves property maintenance issues" },
    { icon: faHandshake, label: "Commission & Agent Payroll", desc: "Calculates agent commissions and payroll automatically" },
    { icon: faClipboardList, label: "Document & Title Deed Repository", desc: "Secure storage for titles, contracts, and certificates" },
    { icon: faCalendarAlt, label: "Property Inspection Scheduling", desc: "Plans and tracks routine and move-in/out inspections" },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Key Modules</h5>
        <small className="text-muted">16+ integrated modules for sales and rental management</small>
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
                  background: "#F0FDF4",
                  borderRadius: "12px",
                  border: "1px solid #DCFCE7",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #14532D, #15803D)",
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
// REAL ESTATE REPORTS WIDGET
// ─────────────────────────────────────────────────────
export const RealEstateReportsWidget = () => {
  const reports = [
    "Rent Roll & Collection Report",
    "Arrears & Outstanding Balances Report",
    "Property Occupancy Report",
    "Sales & Commission Report",
    "Lease Expiry & Renewal Report",
    "Maintenance Cost Report",
    "Agent Performance Report",
    "Landlord Remittance Report",
    "Property Valuation Report",
    "Tenant Turnover Report",
    "Listing Performance Report",
    "Expense Report by Property",
    "Revenue by Property/Portfolio",
    "Title Deed & Document Status Report",
    "Tax & eTIMS Report",
    "Portfolio KPI Dashboard",
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Advanced Reporting</h5>
        <small className="text-muted">Portfolio-specific analytics and insights</small>
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
                  background: "#F0FDF4",
                  borderLeft: "3px solid #15803D",
                  borderRadius: "4px",
                }}
              >
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  style={{ color: "#14532D", fontSize: "16px", flexShrink: 0 }}
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
// REAL ESTATE WHY CHOOSE WIDGET
// ─────────────────────────────────────────────────────
export const RealEstateWhyChooseWidget = () => {
  const reasons = [
    {
      title: "Centralized Property Portfolio",
      desc: "Every plot, apartment, and rental unit tracked in one place with full status visibility",
      icon: faWarehouse,
    },
    {
      title: "Automated Rent Collection",
      desc: "Scheduled invoicing and reminders dramatically reduce late payments and arrears",
      icon: faMoneyBillWave,
    },
    {
      title: "Lease & Sale Agreement Tracking",
      desc: "Never miss a renewal or installment deadline with automated contract monitoring",
      icon: faFileContract,
    },
    {
      title: "Tenant & Landlord Self-Service",
      desc: "Portals give tenants and landlords instant access to statements, invoices, and updates",
      icon: faKey,
    },
    {
      title: "Maintenance & Inspection Management",
      desc: "Track repair requests, contractor jobs, and routine inspections from raise to resolution",
      icon: faTools,
    },
    {
      title: "Multi-Branch & Agency Support",
      desc: "Manage multiple offices, agents, and property portfolios from a single dashboard",
      icon: faCog,
    },
  ];

  return (
    <Card
      border="light"
      className="shadow-sm"
      style={{
        background: "linear-gradient(135deg, #F0FDF4 0%, #FFFBEB 100%)",
        border: "1px solid #DCFCE7",
      }}
    >
      <Card.Body>
        <h5 style={{ color: "#14532D", fontWeight: 700, marginBottom: "24px" }}>
          Why Real Estate Firms Choose Bothive ERP
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
                    boxShadow: "0 2px 8px rgba(20,83,45,0.15)",
                    flexShrink: 0,
                  }}
                >
                  <FontAwesomeIcon
                    icon={reason.icon}
                    style={{ color: "#14532D", fontSize: "22px" }}
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
// REAL ESTATE CHALLENGES WIDGET
// ─────────────────────────────────────────────────────
export const RealEstateChallengesWidget = () => {
  const challenges = [
    {
      problem: "Tracking rent payments and arrears across many tenants",
      solution: "Automated rent invoicing, payment reminders, and real-time arrears tracking per unit and tenant",
    },
    {
      problem: "Managing multiple property listings and viewings",
      solution: "Centralized listing management with status tracking and a built-in viewing/inspection scheduler",
    },
    {
      problem: "Coordinating maintenance requests and contractor follow-up",
      solution: "Maintenance ticketing system linked to each property, with job assignment and resolution tracking",
    },
    {
      problem: "Calculating agent commissions and landlord remittances accurately",
      solution: "Automated commission and remittance calculations tied directly to each sale or rent transaction",
    },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Challenges We Solve</h5>
        <small className="text-muted">Property management problems and our solutions</small>
      </Card.Header>
      <Card.Body>
        <Row className="g-4">
          {challenges.map((item, i) => (
            <Col xs={12} md={6} key={i}>
              <div
                style={{
                  padding: "16px",
                  background: "#F0FDF4",
                  borderRadius: "12px",
                  borderLeft: "4px solid #B45309",
                }}
              >
                <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    style={{ color: "#B45309", fontSize: "18px", flexShrink: 0, marginTop: "2px" }}
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
// REAL ESTATE FEATURES WIDGET
// ─────────────────────────────────────────────────────
export const RealEstateFeaturesWidget = () => {
  const features = [
    {
      title: "Property & Listings Management",
      desc: "Land, apartments, and rental units organized by portfolio and status",
      items: ["Unit listings", "Availability status", "Pricing & plots", "Media & floor plans"],
    },
    {
      title: "Financial Management",
      desc: "Sales, rent collection, commissions, and landlord accounts",
      items: ["Rent invoicing", "Sale installments", "Commission payouts", "Accounting"],
    },
    {
      title: "Tenant & Landlord Management",
      desc: "Profiles, agreements, and communication history for every party",
      items: ["Tenant profiles", "Landlord accounts", "Agreement history", "Statements"],
    },
    {
      title: "Maintenance & Operations",
      desc: "Repair requests, contractor jobs, and inspection scheduling",
      items: ["Maintenance tickets", "Contractor tracking", "Inspections", "Move-in/out checklists"],
    },
    {
      title: "Client Portal & Communication",
      desc: "Self-service access for tenants, landlords, and buyers",
      items: ["Online statements", "Payment notifications", "Document access", "Inquiry tracking"],
    },
    {
      title: "Analytics & Compliance",
      desc: "Portfolio KPIs, occupancy trends, and regulatory compliance",
      items: ["Occupancy reports", "Revenue analytics", "Compliance tracking", "Audit trails"],
    },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Complete Real Estate Features</h5>
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
                  border: "1px solid #DCFCE7",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(20,83,45,0.1)";
                  e.currentTarget.style.borderColor = "#15803D";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "#DCFCE7";
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: "linear-gradient(135deg, #14532D, #15803D)",
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
                        background: "#F0FDF4",
                        color: "#14532D",
                        padding: "4px 8px",
                        borderRadius: "6px",
                        border: "0.5px solid #DCFCE7",
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
// REAL ESTATE GET STARTED WIDGET
// ─────────────────────────────────────────────────────
export const RealEstateGetStartedWidget = () => {
  const history = useHistory();

  return (
    <Card
      style={{
        background: "linear-gradient(135deg, #14532D 0%, #15803D 50%, #B45309 100%)",
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
          Ready to Streamline Your Property Business?
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
          Join 35+ sales agencies and rental management firms across Kenya who have automated rent collection, 
          lease tracking, and landlord remittances with Bothive Real Estate ERP. Built on proven ERPNext and Odoo technology.
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => history.push(Routes.POSSystemPage.path)}
            style={{
              background: "#fff",
              color: "#14532D",
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
            Get Started with Real Estate ERP
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
          Enterprise-grade system • Transparent landlord reporting • Cloud-based deployment • Dedicated support
        </p>
      </Card.Body>
    </Card>
  );
};