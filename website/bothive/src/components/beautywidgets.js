import React, { useState } from "react";
import { Col, Row, Card, Button } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faSpa,
  faCalendarAlt,
  faChartBar,
  faUsers,
  faShoppingCart,
  faCog,
  faExclamationTriangle,
  faTasks,
  faBolt,
  faFileAlt,
  faDollarSign,
  faStar,
  faCut,
  faTimesCircle,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { Routes } from "../routes";

// ─────────────────────────────────────────────────────
// BEAUTY HERO WIDGET
// ─────────────────────────────────────────────────────
export const BeautyHeroWidget = () => {
  const history = useHistory();

  return (
    <Card
      style={{
        background: "linear-gradient(135deg, #EC4899 0%, #D946EF 50%, #A855F7 100%)",
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
              Bothive Beauty Salon POS System
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "16px",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Manage appointments, staff schedules, service packages, and client loyalty — all from one intelligent POS system built for spas, salons, and barbershops.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Button
                style={{
                  background: "#fff",
                  color: "#EC4899",
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
                icon={faSpa}
                style={{ fontSize: "60px", color: "#fff", marginBottom: "16px" }}
              />
              <h5 style={{ color: "#fff", fontWeight: 700, marginBottom: "8px" }}>
                50+ Beauty Businesses
              </h5>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px", margin: 0 }}>
                Salons, spas, and barbershops across Kenya trust Bothive
              </p>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────────────
// BEAUTY FEATURES WIDGET
// ─────────────────────────────────────────────────────
export const BeautyFeaturesWidget = () => {
  const features = [
    { icon: faCalendarAlt, label: "Appointment Scheduling", desc: "Smart calendar with walk-in and booking support" },
    { icon: faUserTie, label: "Staff Management", desc: "Track staff schedules, skills, and availability" },
    { icon: faDollarSign, label: "Commission Tracking", desc: "Automatic commission calculation per staff member" },
    { icon: faCut, label: "Service Packages", desc: "Create packages and bundled services easily" },
    { icon: faUsers, label: "Client Management", desc: "Build customer profiles and loyalty programs" },
    { icon: faChartBar, label: "Multi-Staff Dashboard", desc: "Monitor all staff performance in real-time" },
    { icon: faShoppingCart, label: "Product Inventory", desc: "Track beauty products and supplies" },
    { icon: faStar, label: "eTIMS Integration", desc: "KRA-compliant receipts for service payments" },
    { icon: faTasks, label: "Client History", desc: "Track service history and preferences per client" },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Core Features</h5>
        <small className="text-muted">Everything you need to run your salon or spa</small>
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
                  background: "#FDF2F8",
                  borderRadius: "12px",
                  border: "1px solid #F3E8FF",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #EC4899, #D946EF)",
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
// BEAUTY REPORTS WIDGET
// ─────────────────────────────────────────────────────
export const BeautyReportsWidget = () => {
  const reports = [
    "Daily Appointment Schedule Report",
    "Staff Performance & Commission Report",
    "Client Visit Frequency Report",
    "Service Popularity Report",
    "Product Inventory & Stock Report",
    "Revenue by Service Type",
    "Staff Utilization Report",
    "Client Loyalty Program Report",
    "Appointment No-Show Report",
    "Peak Hours Analytics",
    "Revenue by Staff Member",
    "Payment Methods Report",
    "Monthly Revenue Forecast",
    "Client Retention Rate",
    "Tax & eTIMS Report",
    "Service Rating & Feedback",
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Comprehensive Reporting</h5>
        <small className="text-muted">Data-driven insights for beauty business growth</small>
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
                  background: "#FDF2F8",
                  borderLeft: "3px solid #EC4899",
                  borderRadius: "4px",
                }}
              >
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  style={{ color: "#EC4899", fontSize: "16px", flexShrink: 0 }}
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
// BEAUTY WHY CHOOSE WIDGET
// ─────────────────────────────────────────────────────
export const BeautyWhyChooseWidget = () => {
  const reasons = [
    {
      title: "Smart Appointment Management",
      desc: "Never double-book again — manage walk-ins, bookings, and staff schedules seamlessly",
      icon: faCalendarAlt,
    },
    {
      title: "Staff Commission Tracking",
      desc: "Automatically calculate commissions based on services provided and revenue generated",
      icon: faDollarSign,
    },
    {
      title: "Client Loyalty Programs",
      desc: "Build loyalty with punch cards, discounts, and personalized follow-ups",
      icon: faUsers,
    },
    {
      title: "Service Package Builder",
      desc: "Create bundles, combo deals, and seasonal packages to boost average transaction value",
      icon: faCut,
    },
    {
      title: "Staff Performance Analytics",
      desc: "Track which therapists/stylists generate the most revenue and client satisfaction",
      icon: faChartBar,
    },
    {
      title: "Multi-Location Visibility",
      desc: "Manage multiple salons or branches with consolidated reporting and staff scheduling",
      icon: faCog,
    },
  ];

  return (
    <Card
      border="light"
      className="shadow-sm"
      style={{
        background: "linear-gradient(135deg, #FDF2F8 0%, #FAF5FF 100%)",
        border: "1px solid #F3E8FF",
      }}
    >
      <Card.Body>
        <h5 style={{ color: "#EC4899", fontWeight: 700, marginBottom: "24px" }}>
          Why Beauty Businesses Choose Bothive POS
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
                    boxShadow: "0 2px 8px rgba(236,72,153,0.15)",
                    flexShrink: 0,
                  }}
                >
                  <FontAwesomeIcon
                    icon={reason.icon}
                    style={{ color: "#EC4899", fontSize: "22px" }}
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
// BEAUTY CHALLENGES WIDGET
// ─────────────────────────────────────────────────────
export const BeautyChallengesWidget = () => {
  const challenges = [
    {
      problem: "Managing appointments and preventing double-bookings",
      solution: "Real-time booking calendar with staff availability, walk-in slots, and automatic confirmations",
    },
    {
      problem: "Tracking staff commissions and performance fairly",
      solution: "Automatic commission calculation per service, detailed staff performance analytics and payroll tracking",
    },
    {
      problem: "Building client loyalty and repeat visits",
      solution: "Integrated loyalty programs, service history tracking, and personalized client communication tools",
    },
    {
      problem: "Managing multiple therapists and schedules",
      solution: "Unified dashboard showing all staff, their schedules, client preferences, and performance metrics",
    },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Common Challenges We Solve</h5>
        <small className="text-muted">Problems beauty businesses face — and how Bothive fixes them</small>
      </Card.Header>
      <Card.Body>
        <Row className="g-4">
          {challenges.map((item, i) => (
            <Col xs={12} md={6} key={i}>
              <div
                style={{
                  padding: "16px",
                  background: "#FDF2F8",
                  borderRadius: "12px",
                  borderLeft: "4px solid #D946EF",
                }}
              >
                <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    style={{ color: "#D946EF", fontSize: "18px", flexShrink: 0, marginTop: "2px" }}
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
// BEAUTY KEY FEATURES WIDGET
// ─────────────────────────────────────────────────────
export const BeautyKeyFeaturesWidget = () => {
  const keyFeatures = [
    {
      title: "Appointment Booking System",
      desc: "Smart calendar for bookings, walk-ins, and staff scheduling",
      features: ["Real-time availability", "Client reminders", "Walk-in slots", "No-show tracking"],
    },
    {
      title: "Staff Management",
      desc: "Manage therapists, stylists, and schedules efficiently",
      features: ["Schedule management", "Commission tracking", "Performance metrics", "Leave management"],
    },
    {
      title: "Service & Pricing",
      desc: "Create packages and manage service pricing with ease",
      features: ["Service packages", "Bundle deals", "Seasonal pricing", "Add-on services"],
    },
    {
      title: "Client Management",
      desc: "Build lasting relationships with loyalty programs",
      features: ["Loyalty rewards", "Purchase history", "Preferences tracking", "Birthday alerts"],
    },
    {
      title: "Product Inventory",
      desc: "Manage beauty products and supplies efficiently",
      features: ["Stock tracking", "Low-stock alerts", "Supplier management", "Product bundling"],
    },
    {
      title: "Reports & Analytics",
      desc: "Data-driven insights into your business growth",
      features: ["Revenue analysis", "Staff performance", "Client retention", "Peak hour analysis"],
    },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Key Features for Beauty Businesses</h5>
        <small className="text-muted">Powerful tools to grow your salon or spa</small>
      </Card.Header>
      <Card.Body>
        <Row className="g-4">
          {keyFeatures.map((feature, i) => (
            <Col xs={12} md={6} key={i}>
              <div
                style={{
                  padding: "18px",
                  background: "#fff",
                  border: "1px solid #F3E8FF",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(236,72,153,0.1)";
                  e.currentTarget.style.borderColor = "#D946EF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "#F3E8FF";
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: "linear-gradient(135deg, #EC4899, #D946EF)",
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
                        background: "#FDF2F8",
                        color: "#EC4899",
                        padding: "4px 8px",
                        borderRadius: "6px",
                        border: "0.5px solid #F3E8FF",
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
// BEAUTY GET STARTED WIDGET
// ─────────────────────────────────────────────────────
export const BeautyGetStartedWidget = () => {
  const history = useHistory();

  return (
    <Card
      style={{
        background: "linear-gradient(135deg, #EC4899 0%, #D946EF 50%, #A855F7 100%)",
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
          Ready to Transform Your Salon or Spa?
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
          Join 50+ salons, spas, and barbershops across Kenya who are managing appointments, 
          staff, and client loyalty with Bothive POS. Streamline your operations and grow your business.
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => history.push(Routes.POSSystemPage.path)}
            style={{
              background: "#fff",
              color: "#EC4899",
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
            Get Started with Beauty POS
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