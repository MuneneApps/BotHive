import React, { useState } from "react";
import { Col, Row, Card, Button } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faGraduationCap,
  faUserGraduate,
  faMoneyBillWave,
  faClipboardCheck,
  faCalendarCheck,
  faLaptop,
  faBook,
  faBus,
  faBed,
  faChalkboardTeacher,
  faUsers,
  faBell,
  faExclamationTriangle,
  faBolt,
  faCog,
  faChartBar,
  faStar,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { Routes } from "../routes";

// ─────────────────────────────────────────────────────
// SCHOOL HERO WIDGET
// ─────────────────────────────────────────────────────
export const SchoolHeroWidget = () => {
  const history = useHistory();

  return (
    <Card
      style={{
        background: "linear-gradient(135deg, #4338CA 0%, #6366F1 50%, #F59E0B 100%)",
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
              Bothive School Management ERP
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "16px",
                lineHeight: 1.8,
                marginBottom: "16px",
              }}
            >
              A complete enterprise resource planning system for schools, built on <strong>ERPNext</strong> and <strong>Odoo</strong> suites. 
              Manage everything from student admission to graduation — fees collection, examinations, attendance, transport, and hostel life — in one unified platform.
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
              30+ modules with 8 role-based user panels, designed to bring every department of your institution onto one centralized system.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Button
                style={{
                  background: "#fff",
                  color: "#4338CA",
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
                icon={faGraduationCap}
                style={{ fontSize: "60px", color: "#fff", marginBottom: "16px" }}
              />
              <h5 style={{ color: "#fff", fontWeight: 700, marginBottom: "8px" }}>
                45+ Schools & Colleges
              </h5>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px", margin: 0 }}>
                Primary, secondary, and tertiary institutions trust Bothive across Kenya
              </p>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────────────
// SCHOOL OVERVIEW WIDGET
// ─────────────────────────────────────────────────────
export const SchoolOverviewWidget = () => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <h5 style={{ color: "#4338CA", fontWeight: 700, marginBottom: "16px" }}>
          School Management ERP Overview
        </h5>
        <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.8, marginBottom: "12px" }}>
          Bothive School ERP is designed to help institutions manage everything from student admission to graduation, 
          and from fees collection to exam results — all in one centralized system. It includes 30+ modules with 8 
          inbuilt user panels: Super Admin, Admin, Accountant, Teacher, Receptionist, Librarian, Parent, and Student.
        </p>
        <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.8, marginBottom: "12px" }}>
          Whether running a single campus or multiple branches, the system adapts to your institution's structure. 
          With automated fee reminders, real-time attendance tracking, online classes, and AI-driven analytics, school 
          administrators can make informed decisions while teachers and parents stay connected through dedicated portals.
        </p>
        <Row className="g-3">
          <Col xs={12} sm={6} md={3}>
            <div style={{ textAlign: "center", padding: "12px", background: "#EEF2FF", borderRadius: "8px" }}>
              <h6 style={{ color: "#4338CA", fontWeight: 700, marginBottom: "6px" }}>30+ Modules</h6>
              <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>End-to-end school management</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div style={{ textAlign: "center", padding: "12px", background: "#EEF2FF", borderRadius: "8px" }}>
              <h6 style={{ color: "#4338CA", fontWeight: 700, marginBottom: "6px" }}>8 User Panels</h6>
              <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>Role-based dashboards for every user</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div style={{ textAlign: "center", padding: "12px", background: "#EEF2FF", borderRadius: "8px" }}>
              <h6 style={{ color: "#4338CA", fontWeight: 700, marginBottom: "6px" }}>Cloud-Based</h6>
              <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>Access from anywhere, anytime</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div style={{ textAlign: "center", padding: "12px", background: "#EEF2FF", borderRadius: "8px" }}>
              <h6 style={{ color: "#4338CA", fontWeight: 700, marginBottom: "6px" }}>Multi-Branch Ready</h6>
              <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>Manage several campuses centrally</p>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

// ─────────────────────────────────────────────────────
// SCHOOL MODULES WIDGET
// ─────────────────────────────────────────────────────
export const SchoolModulesWidget = () => {
  const modules = [
    { icon: faDoorOpen, label: "Front Office", desc: "Manages inquiries, admissions, and visitor interactions" },
    { icon: faUserGraduate, label: "Student Information", desc: "Centralizes student records, profiles, and academics" },
    { icon: faMoneyBillWave, label: "Fees Management", desc: "Automates fee collection, tracking, and reminders" },
    { icon: faClipboardCheck, label: "Examinations", desc: "Manages exam scheduling, conduct, and result processing" },
    { icon: faCalendarCheck, label: "Attendance", desc: "Automates attendance tracking for students and staff" },
    { icon: faLaptop, label: "Online Courses & Live Classes", desc: "Facilitates virtual learning and real-time sessions" },
    { icon: faBook, label: "Library Management", desc: "Oversees book lending, returns, and inventory" },
    { icon: faBus, label: "Transport Management", desc: "Manages school transportation schedules and logistics" },
    { icon: faBed, label: "Hostel Management", desc: "Oversees hostel accommodations and activities" },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Key Modules</h5>
        <small className="text-muted">30+ integrated modules covering every department</small>
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
                  background: "#EEF2FF",
                  borderRadius: "12px",
                  border: "1px solid #E0E7FF",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #4338CA, #6366F1)",
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
// SCHOOL REPORTS WIDGET
// ─────────────────────────────────────────────────────
export const SchoolReportsWidget = () => {
  const reports = [
    "Student Admission & Enrollment Report",
    "Fee Collection & Outstanding Balances Report",
    "Exam Results & Performance Report",
    "Attendance Report (Student & Staff)",
    "Class-wise Academic Progress Report",
    "Library Circulation Report",
    "Transport Route & Usage Report",
    "Hostel Occupancy Report",
    "Staff Payroll & HR Report",
    "Income & Expense Report",
    "Behaviour & Discipline Report",
    "Parent Engagement Report",
    "Multi-Branch Comparative Report",
    "Alumni Network Report",
    "Tax & Statutory Compliance Report",
    "School-Wide KPI Dashboard",
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Advanced Reporting</h5>
        <small className="text-muted">AI-driven analytics for better decision-making</small>
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
                  background: "#EEF2FF",
                  borderLeft: "3px solid #6366F1",
                  borderRadius: "4px",
                }}
              >
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  style={{ color: "#4338CA", fontSize: "16px", flexShrink: 0 }}
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
// SCHOOL WHY CHOOSE WIDGET
// ─────────────────────────────────────────────────────
export const SchoolWhyChooseWidget = () => {
  const reasons = [
    {
      title: "Centralized Student Records",
      desc: "Complete academic history, behaviour records, and profiles accessible to authorized staff instantly",
      icon: faUserGraduate,
    },
    {
      title: "Automated Fee Management",
      desc: "Fee collection, tracking, and reminders run automatically, reducing arrears and admin workload",
      icon: faMoneyBillWave,
    },
    {
      title: "Examination & Results Processing",
      desc: "From scheduling to grading, the entire exam cycle — including online exams — is fully managed",
      icon: faClipboardCheck,
    },
    {
      title: "Parent & Student Portal",
      desc: "Real-time access to grades, attendance, homework, and announcements builds stronger engagement",
      icon: faUsers,
    },
    {
      title: "Multi-Branch Management",
      desc: "Run multiple campuses from one dashboard with consolidated and branch-level reporting",
      icon: faCog,
    },
    {
      title: "AI-Driven Analytics",
      desc: "Data-driven insights help administrators make better decisions on academics and operations",
      icon: faChartBar,
    },
  ];

  return (
    <Card
      border="light"
      className="shadow-sm"
      style={{
        background: "linear-gradient(135deg, #EEF2FF 0%, #FFFBEB 100%)",
        border: "1px solid #E0E7FF",
      }}
    >
      <Card.Body>
        <h5 style={{ color: "#4338CA", fontWeight: 700, marginBottom: "24px" }}>
          Why Schools Choose Bothive ERP
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
                    boxShadow: "0 2px 8px rgba(67,56,202,0.15)",
                    flexShrink: 0,
                  }}
                >
                  <FontAwesomeIcon
                    icon={reason.icon}
                    style={{ color: "#4338CA", fontSize: "22px" }}
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
// SCHOOL CHALLENGES WIDGET
// ─────────────────────────────────────────────────────
export const SchoolChallengesWidget = () => {
  const challenges = [
    {
      problem: "Managing admissions, fees, and records across disconnected systems",
      solution: "A unified front office and student information module brings every record into one centralized place",
    },
    {
      problem: "Tracking attendance for hundreds or thousands of students and staff manually",
      solution: "Automated attendance tracking eliminates manual registers and gives real-time visibility",
    },
    {
      problem: "Coordinating exam scheduling, grading, and report card generation",
      solution: "Integrated examination module handles scheduling, conduct, online exams, and automated result processing",
    },
    {
      problem: "Keeping parents informed and engaged in real time",
      solution: "Automated notifications and a dedicated parent/student portal keep families connected to school updates",
    },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Challenges We Solve</h5>
        <small className="text-muted">School administration problems and our solutions</small>
      </Card.Header>
      <Card.Body>
        <Row className="g-4">
          {challenges.map((item, i) => (
            <Col xs={12} md={6} key={i}>
              <div
                style={{
                  padding: "16px",
                  background: "#EEF2FF",
                  borderRadius: "12px",
                  borderLeft: "4px solid #F59E0B",
                }}
              >
                <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    style={{ color: "#F59E0B", fontSize: "18px", flexShrink: 0, marginTop: "2px" }}
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
// SCHOOL FEATURES WIDGET
// ─────────────────────────────────────────────────────
export const SchoolFeaturesWidget = () => {
  const features = [
    {
      title: "Academic Management",
      desc: "Curriculum, timetables, lesson plans, and online classes",
      items: ["Academics & timetables", "Lesson planning", "Live classes", "Online courses"],
    },
    {
      title: "Financial Management",
      desc: "Fees, income, expenses, and school accounts",
      items: ["Fees management", "Income & revenue", "Expense tracking", "Accounting"],
    },
    {
      title: "Human Resource",
      desc: "Staff recruitment, payroll, and performance management",
      items: ["Staff recruitment", "Payroll processing", "Performance reviews", "Attendance"],
    },
    {
      title: "Student Life & Welfare",
      desc: "Hostel, transport, library, and behaviour tracking",
      items: ["Hostel management", "Transport logistics", "Library system", "Behaviour records"],
    },
    {
      title: "Parent & Student Portal",
      desc: "Communication, homework, and grade access for families",
      items: ["Grade access", "Homework tracking", "Notifications", "Direct communication"],
    },
    {
      title: "Analytics & Compliance",
      desc: "AI-driven insights, multi-branch reporting, and compliance",
      items: ["AI-driven analytics", "Multi-branch reports", "Compliance tracking", "Alumni network"],
    },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Complete School Features</h5>
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
                  border: "1px solid #E0E7FF",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(67,56,202,0.1)";
                  e.currentTarget.style.borderColor = "#6366F1";
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
                    background: "linear-gradient(135deg, #4338CA, #6366F1)",
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
                        background: "#EEF2FF",
                        color: "#4338CA",
                        padding: "4px 8px",
                        borderRadius: "6px",
                        border: "0.5px solid #E0E7FF",
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
// SCHOOL GET STARTED WIDGET
// ─────────────────────────────────────────────────────
export const SchoolGetStartedWidget = () => {
  const history = useHistory();

  return (
    <Card
      style={{
        background: "linear-gradient(135deg, #4338CA 0%, #6366F1 50%, #F59E0B 100%)",
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
          Ready to Modernize Your School?
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
          Join 45+ schools and colleges across Kenya who have automated admissions, fees, exams, and parent 
          communication with Bothive School ERP. Built on proven ERPNext and Odoo technology.
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => history.push(Routes.POSSystemPage.path)}
            style={{
              background: "#fff",
              color: "#4338CA",
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
            Get Started with School ERP
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
          Enterprise-grade system • 8 role-based user panels • Cloud-based deployment • Dedicated support
        </p>
      </Card.Body>
    </Card>
  );
};