import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faChartArea, faChartBar, faChartLine, faFlagUsa, faFolderOpen, faGlobeEurope, faPaperclip, faUserPlus, faCashRegister, faStar, faStarHalfAlt, faRobot, faHeadset, faTimes, faUndo, faPaperPlane, faBolt, faComments, faExternalLinkAlt, faServer, faShieldAlt, faLock } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faBootstrap, faReact, faVuejs, faGoogle, faFacebook, faInstagram, faTiktok, faTwitter, faTelegram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

import { Col, Row, Card, Image, Button, ListGroup, ProgressBar } from '@themesberg/react-bootstrap';

import { CircleChart, BarChart, SalesValueChart, SalesValueChartphone } from "./Charts";

import Profile1 from "../assets/img/team/profile-picture-1.jpg";
import ProfileCover from "../assets/img/profile-cover.jpg";
import EtimsLogo from "../assets/img/etims.jpg";
import MaintenanceImg from "../assets/img/maintainance.png";

import teamMembers from "../data/teamMembers";
import { useHistory } from "react-router-dom";
import { Routes } from "../routes";

import posImage from "../assets/img/hero.png";
import webImage from "../assets/img/Bothiveweb.png";
import hostingImage from "../assets/img/Bothivehosting.png";

import QuickBooksImg from "../assets/img/quickboks.png";
import MCPImg from "../assets/img/mcp.png";




// Desktop version
export const SalesValueWidget = () => {
  const history = useHistory();

  const services = [
    {
      id: 1,
      icon: faCashRegister,
      title: "ERP & POS",
      description: (
        <>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "#a8edea", display: "block", marginBottom: "3px" }}>
              Enterprise Suite
            </span>
            <span style={{ fontSize: "0.82rem", lineHeight: 1.5 }}>
              Complete ERP for multi-branch businesses with finance, HR, inventory, CRM, production, and eTIMS compliance. Gain real-time visibility and control across every department.
            </span>
            <div style={{ marginTop: "7px", display: "flex", flexWrap: "wrap", gap: "4px" }}>
              {["Manufacturing", "Hospital ERP", "Hotel group", "Restaurant chain", "Logistics"].map(e => (
                <span key={e} style={{ fontSize: "10px", background: "rgba(168,237,234,0.12)", border: "1px solid rgba(168,237,234,0.25)", borderRadius: "10px", padding: "2px 7px", color: "#a8edea" }}>{e}</span>
              ))}
            </div>
          </div>
          <div>
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "#a8edea", display: "block", marginBottom: "3px" }}>
              Business Starter
            </span>
            <span style={{ fontSize: "0.82rem", lineHeight: 1.5 }}>
              Smart POS and inventory management for growing retail businesses. Track sales, control stock, manage staff access, and stay eTIMS compliant.
            </span>
            <div style={{ marginTop: "7px", display: "flex", flexWrap: "wrap", gap: "4px" }}>
              {["Minimart", "Pharmacy", "Phone shop", "Wines & spirits", "Hardware store"].map(e => (
                <span key={e} style={{ fontSize: "10px", background: "rgba(168,237,234,0.12)", border: "1px solid rgba(168,237,234,0.25)", borderRadius: "10px", padding: "2px 7px", color: "#a8edea" }}>{e}</span>
              ))}
            </div>
          </div>
        </>
      ),
      imagePath: posImage,
      color: "#a8edea",
      path: Routes.POSSystemPage.path,
    },
    {
      id: 2,
      icon: faChartArea,
      title: "Websites & Hosting",
      description: (
        <>
          <div style={{ marginBottom: "11px", paddingBottom: "11px", borderBottom: "1px solid rgba(254,214,227,0.15)" }}>
            <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#fed6e3", display: "block", marginBottom: "4px" }}>
              Web Design
            </span>
            <span style={{ fontSize: "0.8rem", lineHeight: 1.55, color: "rgba(255,255,255,0.65)" }}>
              Your website is your best salesperson — it never sleeps. We build marketing sites, booking platforms, and full ecommerce stores with M-Pesa, Stripe, and AI baked in.
            </span>
            <div style={{ marginTop: "6px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "4px" }}>
              {["Marketing site", "Bookings", "Ecommerce", "M-Pesa", "Stripe", "AI-powered"].map((e) => (
                <span key={e} style={{ fontSize: "9px", background: "rgba(254,214,227,0.1)", border: "1px solid rgba(254,214,227,0.2)", borderRadius: "10px", padding: "2px 7px", color: "#fed6e3" }}>{e}</span>
              ))}
            </div>
          </div>
          <div>
            <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#fed6e3", display: "block", marginBottom: "4px" }}>
              Hosting
            </span>
            <span style={{ fontSize: "0.8rem", lineHeight: 1.55, color: "rgba(255,255,255,0.65)" }}>
              Fast, secure, always on. Your own cPanel, Git version control, and a 99% uptime SLA — on shared or VPS infrastructure that scales without drama.
            </span>
            <div style={{ marginTop: "6px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "4px" }}>
              {["cPanel", "Git control", "99% uptime", "VPS", "Shared hosting", "SSL included"].map((e) => (
                <span key={e} style={{ fontSize: "9px", background: "rgba(254,214,227,0.1)", border: "1px solid rgba(254,214,227,0.2)", borderRadius: "10px", padding: "2px 7px", color: "#fed6e3" }}>{e}</span>
              ))}
            </div>
          </div>
        </>
      ),
      imagePath: webImage,
      color: "#fed6e3",
      path: Routes.WebDesignPage.path,
    },
    {
      id: 3,
      icon: faChartBar,
      title: "AI & Web3",
      description: (
        <>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#d4fc79", display: "block", marginBottom: "4px" }}>
              AI Integration
            </span>
            <span style={{ fontSize: "0.8rem", lineHeight: 1.55, color: "rgba(255,255,255,0.65)" }}>
              Bring AI into your website, ERP, and POS to automate workflows, enhance customer support, and eliminate repetitive tasks across your business.
            </span>
            <div style={{ marginTop: "6px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "4px" }}>
              {["AI Chatbots", "Customer Support", "ERP AI", "POS AI", "Workflow Automation", "Lead Capture"].map((e) => (
                <span key={e} style={{ fontSize: "9px", background: "rgba(212,252,121,0.1)", border: "1px solid rgba(212,252,121,0.2)", borderRadius: "10px", padding: "2px 7px", color: "#d4fc79" }}>{e}</span>
              ))}
            </div>
          </div>
          <div>
            <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#d4fc79", display: "block", marginBottom: "4px" }}>
              Web3 Solutions
            </span>
            <span style={{ fontSize: "0.8rem", lineHeight: 1.55, color: "rgba(255,255,255,0.65)" }}>
              Accept crypto payments online and in-store while securing critical business records with blockchain-powered verification and audit trails.
            </span>
            <div style={{ marginTop: "6px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "4px" }}>
              {["Crypto Payments", "POS Integration", "Blockchain Security", "Data Verification", "Audit Trails", "Smart Contracts"].map((e) => (
                <span key={e} style={{ fontSize: "9px", background: "rgba(212,252,121,0.1)", border: "1px solid rgba(212,252,121,0.2)", borderRadius: "10px", padding: "2px 7px", color: "#d4fc79" }}>{e}</span>
              ))}
            </div>
          </div>
        </>
      ),
      imagePath: hostingImage,
      color: "#d4fc79",
      path: Routes.WebHostingPage.path,
    },
  ];

  return (
    <Card
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        border: "none",
        borderRadius: "16px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      }}
    >
      <Card.Body className="p-4">
        <Row className="g-4">
          {services.map((service, index) => (
            <Col
              key={service.id}
              xs={12}
              md={4}
              style={{ borderRight: index < 2 ? "1px solid rgba(255,255,255,0.1)" : "none" }}
            >
              <div className="d-flex flex-column align-items-center text-center h-100 px-3">
                <div
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: "50%",
                    backgroundImage: `url(${service.imagePath})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    border: `2px solid ${service.color}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  <FontAwesomeIcon
                    icon={service.icon}
                    style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1rem", opacity: 0 }}
                  />
                </div>
                <h5
                  style={{
                    color: "#ffffff",
                    fontWeight: 700,
                    marginBottom: "10px",
                    fontFamily: "'Segoe UI', system-ui, sans-serif",
                  }}
                >
                  {service.title}
                </h5>
                <div
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "0.85rem",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                    flexGrow: 1,
                    width: "100%",
                  }}
                >
                  {service.description}
                </div>
                <button
                  onClick={() => history.push(service.path)}
                  style={{
                    background: `linear-gradient(90deg, ${service.color}, ${service.color}aa)`,
                    border: "none",
                    color: "#1a1a2e",
                    fontWeight: 700,
                    borderRadius: "20px",
                    padding: "6px 20px",
                    cursor: "pointer",
                    fontSize: "13px",
                  }}
                >
                  Get Started
                </button>
              </div>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

// Mobile version
export const SalesValueWidgetPhone = () => {
  const history = useHistory();

  const services = [
    {
      id: 1,
      icon: faCashRegister,
      title: "ERP & POS",
      subtitle: "Enterprise Suite · Business Starter",
      description: "Full ERP for multi-branch operations or a lean POS for single-location retail — both eTIMS compliant, both built to scale.",
      pills: ["Manufacturing", "Pharmacy", "Minimart", "Hotel", "Logistics"],
      color: "#a8edea",
      imagePath: posImage,
      path: Routes.POSSystemPage.path,
    },
    {
      id: 2,
      icon: faChartArea,
      title: "Websites & Hosting",
      subtitle: "Web Design · Hosting",
      description: "Conversion-focused websites with M-Pesa, Stripe & AI built in — backed by 99% uptime hosting, cPanel, and Git version control.",
      pills: ["Ecommerce", "Bookings", "M-Pesa", "VPS", "SSL included"],
      color: "#fed6e3",
      imagePath: webImage,
      path: Routes.WebDesignPage.path,
    },
    {
      id: 3,
      icon: faChartBar,
      title: "AI & Web3",
      subtitle: "AI Automation · Blockchain",
      description: "Automate workflows with AI and lock down your data with blockchain — smarter operations, tamper-proof records, crypto payments ready.",
      pills: ["AI Chatbots", "Workflow Bots", "Crypto Payments", "Audit Trails"],
      color: "#d4fc79",
      imagePath: hostingImage,
      path: Routes.WebHostingPage.path,
    },
  ];

  return (
    <div className="d-flex flex-column gap-3">
      {services.map((service) => (
        <Card
          key={service.id}
          style={{
            background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
            border: "none",
            borderRadius: "16px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          }}
        >
          <Card.Body className="p-4">
            <div className="d-flex flex-column align-items-center text-center">
              <div
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  backgroundImage: `url(${service.imagePath})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  border: `2px solid ${service.color}`,
                  marginBottom: "14px",
                }}
              />
              <h5
                style={{
                  color: "#ffffff",
                  fontWeight: 700,
                  marginBottom: "3px",
                  fontFamily: "'Segoe UI', system-ui, sans-serif",
                }}
              >
                {service.title}
              </h5>
              <span
                style={{
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: service.color,
                  display: "block",
                  marginBottom: "8px",
                  opacity: 0.85,
                }}
              >
                {service.subtitle}
              </span>
              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "0.82rem",
                  lineHeight: 1.6,
                  marginBottom: "12px",
                }}
              >
                {service.description}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "4px",
                  marginBottom: "16px",
                }}
              >
                {service.pills.map((pill) => (
                  <span
                    key={pill}
                    style={{
                      fontSize: "9px",
                      background: `${service.color}18`,
                      border: `1px solid ${service.color}33`,
                      borderRadius: "10px",
                      padding: "2px 8px",
                      color: service.color,
                    }}
                  >
                    {pill}
                  </span>
                ))}
              </div>
              <button
                onClick={() => history.push(service.path)}
                style={{
                  background: `linear-gradient(90deg, ${service.color}, ${service.color}aa)`,
                  border: "none",
                  color: "#1a1a2e",
                  fontWeight: 700,
                  borderRadius: "20px",
                  padding: "6px 20px",
                  cursor: "pointer",
                  fontSize: "13px",
                }}
              >
                Get Started
              </button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};





export const EtimsAdWidget = ({ onLearnMore }) => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center">
          <Col xl={5} className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0">
            <img src={EtimsLogo} alt="KRA eTIMS" style={{ width: "100%", maxWidth: "120px", height: "auto", objectFit: "contain" }} />
          </Col>
          <Col xs={12} xl={7} className="px-xl-0">
            <small className="text-muted d-block">Tax Compliance</small>
            <h3 className="mb-1" style={{ color: "#C8102E" }}>eTIMS</h3>
            <small className="text-dark fw-bold d-block">Our systems are built eTIMS-ready</small>
            <small className="text-muted d-block mt-1">
  Already using a POS? We'll integrate eTIMS into your existing system — KRA-compliant invoicing, automated & real-time.
</small>
            <div className="mt-2">
              <Button variant="outline-danger" size="sm" onClick={onLearnMore}>Learn more</Button>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const MaintenanceAdWidget = ({ onContact }) => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center">
          <Col xl={5} className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0">
            <div className="d-flex flex-column align-items-center gap-2">
              <img
                src={require("../assets/img/erpnext.png")}
                alt="ERP Platform"
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
              <img
                src={require("../assets/img/odoo.png")}
                alt="ERP Platform"
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </div>
          </Col>
          <Col xs={12} xl={7} className="px-xl-0">
            <small className="text-muted d-block">ERP Implementation</small>
            <h3 className="mb-1" style={{ color: "#2CA01C" }}>Run Your Business Smarter</h3>
            <small className="d-block" style={{ color: "#444" }}>
              <span style={{ color: "#2CA01C", fontWeight: 500 }}>Inventory, finance, HR & sales</span> — all in one system
            </small>
            <small className="d-block" style={{ color: "#444" }}>
              We handle the full implementation, from setup to go-live.
            </small>
            <small className="text-muted d-block mt-1">
              Training, data migration & ongoing support included.
            </small>
            <div className="mt-2">
              <Button variant="success" size="sm" onClick={onContact}>
                Get a Free Consultation
              </Button>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const GoogleReviewWidget = ({ onViewMore }) => {
  const features = [
    { icon: faBolt, label: "AI agents that automate sales, support & workflows — 24/7, no extra staff" },
    { icon: faChartLine, label: "Real-time insights & predictions plugged into your existing systems" },
    { icon: faShieldAlt, label: "Blockchain auditing — every transaction tamper-proof & fully traceable" },
    { icon: faLock, label: "Web3 security layers that make your data breach-resistant by design" },
  ];

  return (
    <Card border="light" className="shadow-sm" style={{ borderRadius: "16px", overflow: "hidden" }}>
      <div style={{ background: "linear-gradient(135deg, #0f3460 0%, #1a1a2e 100%)", padding: "12px 16px 8px" }}>
        <div className="d-flex align-items-center gap-2">
          <img
            src={MCPImg}
            alt="AI & Web3"
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              objectFit: "cover",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          />
          <div>
            <small style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.7rem" }}>Bothive Intelligence</small>
            <h6 className="mb-0" style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.95rem" }}>
              AI Agents & Web3
            </h6>
          </div>
          <span
            className="ms-auto"
            style={{
              background: "linear-gradient(90deg, #a8edea, #1D9E75)",
              color: "#0f3460",
              fontSize: "0.65rem",
              fontWeight: 700,
              borderRadius: "20px",
              padding: "2px 10px",
            }}
          >
            LIVE
          </span>
        </div>
      </div>

      <Card.Body className="pt-3 pb-3">
        <div className="d-flex flex-column gap-2 mb-3">
          {features.map((f, i) => (
            <div key={i} className="d-flex align-items-start gap-2">
              <div
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #0f3460, #1D9E75)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <FontAwesomeIcon icon={f.icon} style={{ color: "#a8edea", fontSize: "0.65rem" }} />
              </div>
              <small style={{ color: "#444", lineHeight: 1.4, fontSize: "0.78rem" }}>{f.label}</small>
            </div>
          ))}
        </div>

        <Button
          size="sm"
          onClick={onViewMore}
          style={{
            background: "linear-gradient(90deg, #0f3460, #1D9E75)",
            border: "none",
            borderRadius: "20px",
            fontWeight: 600,
            fontSize: "0.78rem",
            padding: "5px 18px",
            color: "#fff",
          }}
        >
          <FontAwesomeIcon icon={faRobot} className="me-1" /> Explore AI & Web3
        </Button>
      </Card.Body>
    </Card>
  );
};




export const SocialMediaWidget = () => {
  const platforms = [
  {
    name: "Facebook",
    icon: faFacebook,
    color: "#1877F2",
    bg: "#E8F0FE",
    handle: "@bothive",
    url: "https://www.facebook.com/profile.php?id=61579377060731"
  },
  {
    name: "Instagram",
    icon: faInstagram,
    color: "#E1306C",
    bg: "#FCE4EC",
    handle: "@_bothive",
    url: "https://www.instagram.com/_bothive/"
  },
  {
    name: "TikTok",
    icon: faTiktok,
    color: "#010101",
    bg: "#F3F3F3",
    handle: "@_bothive",
    url: "https://www.tiktok.com/@_bothive"
  },
  {
    name: "Telegram",
    icon: faTelegram,
    color: "#0088CC",
    bg: "#E3F2FD",
    handle: "@BothiveSupport",
    url: "https://t.me/BothiveSupport"
  },
  {
    name: "WhatsApp",
    icon: faWhatsapp,
    color: "#25D366",
    bg: "#E8F5E9",
    handle: "+254 713 077 490",
    url: "https://wa.me/254713077490"
  },
];
  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Find Us Online</h5>
        <small className="text-muted">Follow & connect with us</small>
      </Card.Header>
      <Card.Body>
        <Row className="g-3">
          {platforms.map((p, i) => (
            <Col xs={6} md={4} key={i}>
              <a href={p.url} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px 12px",
                    borderRadius: "10px",
                    background: p.bg,
                    cursor: "pointer",
                    transition: "opacity 0.2s",
                  }}
                  onMouseOver={e => e.currentTarget.style.opacity = 0.8}
                  onMouseOut={e => e.currentTarget.style.opacity = 1}
                >
                  <FontAwesomeIcon icon={p.icon} style={{ fontSize: "20px", color: p.color, flexShrink: 0 }} />
                  <div style={{ overflow: "hidden" }}>
                    <p style={{ margin: 0, fontSize: "13px", fontWeight: 500, color: p.color }}>{p.name}</p>
                    <p style={{ margin: 0, fontSize: "11px", color: "#888", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.handle}</p>
                  </div>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};



export const ProfileCardWidget = () => {
  return (
    <Card border="light" className="text-center p-0 mb-4">
      <div style={{ backgroundImage: `url(${ProfileCover})` }} className="profile-cover rounded-top" />
      <Card.Body className="pb-5">
        <Card.Img src={Profile1} alt="Neil Portrait" className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4" />
        <Card.Title>Neil Sims</Card.Title>
        <Card.Subtitle className="fw-normal">Senior Software Engineer</Card.Subtitle>
        <Card.Text className="text-gray mb-4">New York, USA</Card.Text>
        <Button variant="primary" size="sm" className="me-2">
          <FontAwesomeIcon icon={faUserPlus} className="me-1" /> Connect
        </Button>
        <Button variant="secondary" size="sm">Send Message</Button>
      </Card.Body>
    </Card>
  );
};

export const ChoosePhotoWidget = (props) => {
  const { title, photo } = props;
  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">{title}</h5>
        <div className="d-xl-flex align-items-center">
          <div className="user-avatar xl-avatar">
            <Image fluid rounded src={photo} />
          </div>
          <div className="file-field">
            <div className="d-flex justify-content-xl-center ms-xl-3">
              <div className="d-flex">
                <span className="icon icon-md">
                  <FontAwesomeIcon icon={faPaperclip} className="me-3" />
                </span>
                <input type="file" />
                <div className="d-md-block text-start">
                  <div className="fw-normal text-dark mb-1">Choose Image</div>
                  <div className="text-gray small">JPG, GIF or PNG. Max size of 800K</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export const CounterWidget = (props) => {
  const { icon, iconColor, category, title, period, percentage } = props;
  const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center">
          <Col xl={5} className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0">
            <div className={`icon icon-shape icon-md icon-${iconColor} rounded me-4 me-sm-0`}>
              <FontAwesomeIcon icon={icon} />
            </div>
            <div className="d-sm-none">
              <h5>{category}</h5>
              <h3 className="mb-1">{title}</h3>
            </div>
          </Col>
          <Col xs={12} xl={7} className="px-xl-0">
            <div className="d-none d-sm-block">
              <h5>{category}</h5>
              <h3 className="mb-1">{title}</h3>
            </div>
            <small>{period}, <FontAwesomeIcon icon={faGlobeEurope} size="xs" /> WorldWide</small>
            <div className="small mt-2">
              <FontAwesomeIcon icon={percentageIcon} className={`${percentageColor} me-1`} />
              <span className={`${percentageColor} fw-bold`}>{percentage}%</span> Since last month
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};



export const CircleChartWidget = (props) => {
  const { title, data = [] } = props;
  const series = data.map(d => d.value);
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center">
          <Col xs={12} xl={5} className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0">
            <CircleChart series={series} />
          </Col>
          <Col xs={12} xl={7} className="px-xl-0">
            <h5 className="mb-3">{title}</h5>
            {data.map(d => (
              <h6 key={`circle-element-${d.id}`} className="fw-normal text-gray">
                <FontAwesomeIcon icon={d.icon} className={`icon icon-xs text-${d.color} w-20 me-1`} />
                {` ${d.label} `}{`${d.value}%`}
              </h6>
            ))}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const BarChartWidget = (props) => {
  const { title, value, percentage, data = [] } = props;
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const series = data.map(d => d.value);
  const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="d-flex flex-row align-items-center flex-0 border-bottom">
        <div className="d-block">
          <h6 className="fw-normal text-gray mb-2">{title}</h6>
          <h3>{value}</h3>
          <small className="mt-2">
            <FontAwesomeIcon icon={percentageIcon} className={`${percentageColor} me-1`} />
            <span className={`${percentageColor} fw-bold`}>{percentage}%</span>
          </small>
        </div>
        <div className="d-block ms-auto">
          {data.map(d => (
            <div key={`bar-element-${d.id}`} className="d-flex align-items-center text-end mb-2">
              <span className={`shape-xs rounded-circle bg-${d.color} me-2`} />
              <small className="fw-normal">{d.label}</small>
            </div>
          ))}
        </div>
      </Card.Body>
      <Card.Body className="p-2">
        <BarChart labels={labels} series={series} />
      </Card.Body>
    </Card>
  );
};



export const ProjectsWidget = () => {
  const industries = [
    { icon: "ti-building-store", label: "Supermarket retail",     color: "#185FA5" },
    { icon: "ti-cpu",            label: "Hardware & electronics",  color: "#185FA5" },
    { icon: "ti-book",           label: "Bookshop & stationery",   color: "#185FA5" },
    { icon: "ti-apple",          label: "Groceries & fruits shop", color: "#0F6E56" },
    { icon: "ti-car",            label: "Auto-spare shops",        color: "#185FA5" },
    { icon: "ti-beer",           label: "Liquor / wines & spirits",color: "#BA7517" },
    { icon: "ti-meat",           label: "Butchery business",       color: "#993C1D" },
    { icon: "ti-home",           label: "Household shop",          color: "#0F6E56" },
    { icon: "ti-shirt",          label: "Clothes shop / shoes",    color: "#993556" },
    { icon: "ti-pill",           label: "Pharmacy / chemist",      color: "#185FA5" },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light d-flex justify-content-between">
        <h5 className="mb-0">Industries we serve</h5>
        <Button variant="secondary" size="sm">View more</Button>
      </Card.Header>
      <Card.Body>
        <div className="row g-2">
          {industries.map((item, index) => (
            <div className="col-6 col-md-4" key={index}>
              <div
                className="d-flex align-items-center gap-2 p-2 rounded"
                style={{ background: "#F8F9FA" }}
              >
                <i
                  className={`ti ${item.icon}`}
                  style={{ fontSize: "20px", color: item.color }}
                />
                <span style={{ fontSize: "13px", color: "#444" }}>
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};


export const TeamMembersWidget = () => {
  const TeamMember = (props) => {
    const { name, statusKey, image, icon, btnText } = props;
    const status = {
      online: { color: "success", label: "Online" },
      inMeeting: { color: "warning", label: "In a meeting" },
      offline: { color: "danger", label: "Offline" }
    };
    const statusColor = status[statusKey] ? status[statusKey].color : 'danger';
    const statusLabel = status[statusKey] ? status[statusKey].label : 'Offline';
    return (
      <ListGroup.Item className="px-0">
        <Row className="align-items-center">
          <Col className="col-auto">
            <a href="#top" className="user-avatar">
              <Image src={image} className="rounded-circle" />
            </a>
          </Col>
          <Col className="ms--2">
            <h4 className="h6 mb-0"><a href="#!">{name}</a></h4>
            <span className={`text-${statusColor}`}>● </span>
            <small>{statusLabel}</small>
          </Col>
          <Col className="col-auto">
            <Button variant="tertiary" size="sm">
              <FontAwesomeIcon icon={icon} className="me-1" /> {btnText}
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  };
  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light d-flex justify-content-between">
        <h5 className="mb-0">Team members</h5>
        <Button variant="secondary" size="sm">See all</Button>
      </Card.Header>
      <Card.Body>
        <ListGroup className="list-group-flush list my--3">
          {teamMembers.map(tm => <TeamMember key={`team-member-${tm.id}`} {...tm} />)}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export const ProgressTrackWidget = () => {
  const Progress = (props) => {
    const { title, percentage, icon, color, last = false } = props;
    const extraClassName = last ? "" : "mb-2";
    return (
      <Row className={`align-items-center ${extraClassName}`}>
        <Col xs="auto">
          <span className={`icon icon-md text-${color}`}>
            <FontAwesomeIcon icon={icon} className="me-1" />
          </span>
        </Col>
        <Col>
          <div className="progress-wrapper">
            <div className="progress-info">
              <h6 className="mb-0">{title}</h6>
              <small className="fw-bold text-dark"><span>{percentage} %</span></small>
            </div>
            <ProgressBar variant={color} now={percentage} min={0} max={100} />
          </div>
        </Col>
      </Row>
    );
  };
  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Progress track</h5>
      </Card.Header>
      <Card.Body>
        <Progress title="Rocket - SaaS Template" color="purple" icon={faBootstrap} percentage={34} />
        <Progress title="Pixel - Design System" color="danger" icon={faAngular} percentage={60} />
        <Progress title="Spaces - Listings Template" color="tertiary" icon={faVuejs} percentage={45} />
        <Progress title="Stellar - Dashboard" color="info" icon={faReact} percentage={35} />
        <Progress last title="Volt - Dashboard" color="purple" icon={faBootstrap} percentage={34} />
      </Card.Body>
    </Card>
  );
};

export const ConsultationWidget = () => {
  const [formData, setFormData] = React.useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = React.useState(false);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };
  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Schedule a Free Consultation</h5>
        <small className="text-muted">We'll get back to you within 24 hours</small>
      </Card.Header>
      <Card.Body>
        {submitted ? (
          <div className="text-center py-4">
            <span style={{ fontSize: "40px", color: "#1D9E75" }}>✓</span>
            <h5 className="mt-2" style={{ color: "#1D9E75" }}>Thank you!</h5>
            <small className="text-muted">We've received your request and will be in touch shortly.</small>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <Row className="mb-2">
              <Col xs={12} sm={6} className="mb-2">
                <label style={{ fontSize: "12px", color: "#888", marginBottom: "4px", display: "block" }}>Full Name</label>
                <input type="text" name="name" required placeholder="John Doe" value={formData.name} onChange={handleChange} style={{ width: "100%", padding: "7px 10px", fontSize: "13px", border: "0.5px solid #ccc", borderRadius: "6px", outline: "none" }} />
              </Col>
              <Col xs={12} sm={6} className="mb-2">
                <label style={{ fontSize: "12px", color: "#888", marginBottom: "4px", display: "block" }}>Phone Number</label>
                <input type="tel" name="phone" required placeholder="+254 700 000000" value={formData.phone} onChange={handleChange} style={{ width: "100%", padding: "7px 10px", fontSize: "13px", border: "0.5px solid #ccc", borderRadius: "6px", outline: "none" }} />
              </Col>
            </Row>
            <div className="mb-2">
              <label style={{ fontSize: "12px", color: "#888", marginBottom: "4px", display: "block" }}>Email Address</label>
              <input type="email" name="email" required placeholder="john@example.com" value={formData.email} onChange={handleChange} style={{ width: "100%", padding: "7px 10px", fontSize: "13px", border: "0.5px solid #ccc", borderRadius: "6px", outline: "none" }} />
            </div>
            <div className="mb-2">
              <label style={{ fontSize: "12px", color: "#888", marginBottom: "4px", display: "block" }}>Service Interested In</label>
              <select name="service" required value={formData.service} onChange={handleChange} style={{ width: "100%", padding: "7px 10px", fontSize: "13px", border: "0.5px solid #ccc", borderRadius: "6px", outline: "none", background: "#fff" }}>
                <option value="">Select a service...</option>
                <option value="pos">POS System Setup</option>
                <option value="webdesign">Web Design</option>
                <option value="webhosting">Web Hosting</option>
                <option value="maintenance">Remote / Onsite Maintenance</option>
                <option value="etims">eTIMS Integration</option>
              </select>
            </div>
            <div className="mb-3">
              <label style={{ fontSize: "12px", color: "#888", marginBottom: "4px", display: "block" }}>Message <span style={{ color: "#bbb" }}>(optional)</span></label>
              <textarea name="message" rows={3} placeholder="Tell us a bit about your needs..." value={formData.message} onChange={handleChange} style={{ width: "100%", padding: "7px 10px", fontSize: "13px", border: "0.5px solid #ccc", borderRadius: "6px", outline: "none", resize: "none" }} />
            </div>
            <Button type="submit" variant="primary" className="w-100">Book Free Consultation</Button>
          </form>
        )}
      </Card.Body>
    </Card>
  );
};

export const RankingWidget = () => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between border-bottom border-light pb-3">
          <div>
            <h6><FontAwesomeIcon icon={faGlobeEurope} className="icon icon-xs me-3" /> Global Rank</h6>
          </div>
          <div>
            <Card.Link href="#" className="text-primary fw-bold">
              #755 <FontAwesomeIcon icon={faChartLine} className="ms-2" />
            </Card.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between border-bottom border-light py-3">
          <div>
            <h6 className="mb-0"><FontAwesomeIcon icon={faFlagUsa} className="icon icon-xs me-3" />Country Rank</h6>
            <div className="small card-stats">United States <FontAwesomeIcon icon={faAngleUp} className="icon icon-xs text-success ms-2" /></div>
          </div>
          <div>
            <Card.Link href="#top" className="text-primary fw-bold">
              #32 <FontAwesomeIcon icon={faChartLine} className="ms-2" />
            </Card.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between pt-3">
          <div>
            <h6 className="mb-0"><FontAwesomeIcon icon={faFolderOpen} className="icon icon-xs me-3" />Category Rank</h6>
            <Card.Link href="#top" className="small card-stats">Travel &gt; Accomodation</Card.Link>
          </div>
          <div>
            <Card.Link href="#top" className="text-primary fw-bold">
              #16 <FontAwesomeIcon icon={faChartLine} className="ms-2" />
            </Card.Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};



export const DoneProjectsWidget = () => {
  const rating = 4.8;
  const totalReviews = 24;
  const stars = Math.round(rating);

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>

        {/* Google Branding */}
        <div className="d-flex align-items-center gap-2 border-bottom border-light pb-3 mb-3">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="Google"
            style={{ height: "22px", objectFit: "contain" }}
          />
          <span style={{ fontSize: "13px", color: "#888" }}>Reviews</span>
        </div>

        {/* Rating Score */}
        <div className="d-flex align-items-center gap-3 mb-3">
          <span style={{ fontSize: "48px", fontWeight: 700, lineHeight: 1, color: "#202124" }}>
            {rating}
          </span>
          <div>
            <div style={{ display: "flex", gap: "3px", marginBottom: "4px" }}>
              {[1, 2, 3, 4, 5].map((s) => (
                <FontAwesomeIcon
                  key={s}
                  icon={faStar}
                  style={{
                    fontSize: "18px",
                    color: s <= stars ? "#FBBC04" : "#E0E0E0",
                  }}
                />
              ))}
            </div>
            <div style={{ fontSize: "13px", color: "#888" }}>
              Based on {totalReviews} reviews
            </div>
          </div>
        </div>

        {/* Star Breakdown */}
        {[
          { stars: 5, count: 20 },
          { stars: 4, count: 3 },
          { stars: 3, count: 1 },
          { stars: 2, count: 0 },
          { stars: 1, count: 0 },
        ].map((row) => (
          <div key={row.stars} className="d-flex align-items-center gap-2 mb-1" style={{ fontSize: "12px" }}>
            <span style={{ width: "10px", color: "#555", textAlign: "right" }}>{row.stars}</span>
            <FontAwesomeIcon icon={faStar} style={{ fontSize: "11px", color: "#FBBC04" }} />
            <div style={{
              flex: 1,
              height: "8px",
              borderRadius: "4px",
              background: "#E0E0E0",
              overflow: "hidden",
            }}>
              <div style={{
                width: `${(row.count / totalReviews) * 100}%`,
                height: "100%",
                background: "#FBBC04",
                borderRadius: "4px",
              }} />
            </div>
            <span style={{ width: "16px", color: "#888" }}>{row.count}</span>
          </div>
        ))}

        {/* CTA */}
        <a
          href="https://g.page/r/bothive/review"
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm btn-outline-primary w-100 mt-3"
          style={{ fontSize: "13px" }}
        >
          <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" />
          Leave us a review
        </a>

      </Card.Body>
    </Card>
  );
};



export const LocationWidget = () => {
  return (
    <Card border="light" className="shadow-sm h-100">
      <Card.Header className="border-bottom border-light d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Find Us</h5>
        <small className="text-muted">Our location</small>
      </Card.Header>
      <Card.Body className="p-0" style={{ minHeight: "280px" }}>
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853743783!2d36.68258474628809!3d-1.3028617900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1690000000000"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "0 0 8px 8px", display: "block", minHeight: "280px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Card.Body>
    </Card>
  );
};

export const AcquisitionWidget = () => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <h5>Acquisition</h5>
        <p>Tells you where your visitors originated from, such as search engines, social networks or website referrals.</p>
        <div className="d-block">
          <div className="d-flex align-items-center pt-3 me-5">
            <div className="icon icon-shape icon-sm icon-shape-danger rounded me-3">
              <FontAwesomeIcon icon={faChartBar} />
            </div>
            <div className="d-block">
              <label className="mb-0">Bounce Rate</label>
              <h4 className="mb-0">33.50%</h4>
            </div>
          </div>
          <div className="d-flex align-items-center pt-3">
            <div className="icon icon-shape icon-sm icon-shape-quaternary rounded me-3">
              <FontAwesomeIcon icon={faChartArea} />
            </div>
            <div className="d-block">
              <label className="mb-0">Sessions</label>
              <h4 className="mb-0">9,567</h4>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};






export const AboutBothiveWidget = () => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <span style={{
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#185FA5",
        }}>
          Who We Are
        </span>
        <h5 className="mt-1 mb-2">Technology that drives real business growth</h5>
        <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.7, margin: 0 }}>
          At <strong>Bothive</strong>, we don't just build software — we build competitive advantages.
          From powerful POS systems to high-converting websites and rock-solid hosting,
          every solution we deliver is engineered to help your business perform, scale, and win.
        </p>
      </Card.Body>
    </Card>
  );
};


export const BothiveAIWidget = () => {
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState(null);
  const [messages, setMessages] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [typing, setTyping] = React.useState(false);

  const messagesEndRef = React.useRef(null);

  React.useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [messages, typing]);

  const handleIceBreaker = (selected) => {
    setMode(selected);

    if (selected === "agent") {
      setMessages([
        {
          role: "assistant",
          text:
            "👋 Welcome to Bothive Live Support. An agent will respond shortly. Please describe what you need help with.",
        },
      ]);
    } else {
      setMessages([
        {
          role: "assistant",
          text:
            "🚀 Hi! I'm Bothive AI. I can help you with POS systems, websites, hosting, payment integrations and business automation.",
        },
      ]);
    }
  };

  const fakeTyping = async () => {
    setTyping(true);

    return new Promise((resolve) => {
      setTimeout(() => {
        setTyping(false);
        resolve();
      }, 1200);
    });
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();

    setInput("");

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    // ─────────────────────────────
    // LIVE AGENT MODE
    // ─────────────────────────────
    if (mode === "agent") {
      await fakeTyping();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            "✅ Message received. A Bothive support agent will reply in real-time shortly.",
        },
      ]);

      return;
    }

    // ─────────────────────────────
    // AI MODE
    // ─────────────────────────────
    setLoading(true);

    try {
      await fakeTyping();

      let reply =
        "Thank you for contacting Bothive 🚀";

      const lower = userMessage.toLowerCase();

      if (
        lower.includes("pos") ||
        lower.includes("shop") ||
        lower.includes("inventory")
      ) {
        reply =
          "✅ Bothive POS helps manage sales, stock, receipts, M-Pesa payments, users, reports and multiple branches in real time.";
      }

      else if (
        lower.includes("website") ||
        lower.includes("web")
      ) {
        reply =
          "🌐 We build modern websites integrated with payments, POS systems, live chat, SEO and hosting.";
      }

      else if (
        lower.includes("hosting") ||
        lower.includes("domain")
      ) {
        reply =
          "☁️ Bothive offers secure hosting, domains, SSL certificates, backups and business emails.";
      }

      else if (
        lower.includes("payment") ||
        lower.includes("mpesa")
      ) {
        reply =
          "💳 We integrate M-Pesa, card payments, bank transfers and international payment gateways into websites and POS systems.";
      }

      else if (
        lower.includes("price") ||
        lower.includes("cost")
      ) {
        reply =
          "💰 Pricing depends on your business requirements. Tell us what you need and we'll prepare a custom quotation.";
      }

      else {
        reply =
          "🤝 Thanks for your message. A Bothive specialist can assist you further with the best solution for your business.";
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: reply,
        },
      ]);

    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            "⚠️ Something went wrong. Please try again.",
        },
      ]);
    }

    setLoading(false);
  };

  const handleReset = () => {
    setMode(null);
    setMessages([]);
    setInput("");
    setTyping(false);
  };

  return (
    <>
      {/* FLOATING BUTTON */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          width: "62px",
          height: "62px",
          borderRadius: "50%",
          background:
            "linear-gradient(135deg,#0f172a 0%,#0f3460 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 9999,
          boxShadow:
            "0 10px 35px rgba(15,52,96,.35)",
        }}
      >
        <FontAwesomeIcon
          icon={faRobot}
          style={{
            color: "#fff",
            fontSize: "1.4rem",
          }}
        />
      </div>

      {/* CHAT WINDOW */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "96px",
            right: "24px",
            width: "360px",
            height: "560px",
            background: "#fff",
            borderRadius: "22px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            zIndex: 9998,
            boxShadow:
              "0 20px 50px rgba(0,0,0,.18)",
          }}
        >
          {/* HEADER */}
          <div
            style={{
              background:
                "linear-gradient(135deg,#0f172a 0%,#0f3460 100%)",
              padding: "16px",
              color: "#fff",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "15px",
                  }}
                >
                  Bothive Assistant
                </div>

                <div
                  style={{
                    fontSize: "11px",
                    color: "#cbd5e1",
                    marginTop: "2px",
                  }}
                >
                  AI + Live Support
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                }}
              >
                {mode && (
                  <FontAwesomeIcon
                    icon={faUndo}
                    onClick={handleReset}
                    style={{
                      cursor: "pointer",
                      fontSize: "13px",
                      color: "#fff",
                    }}
                  />
                )}

                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={() => setOpen(false)}
                  style={{
                    cursor: "pointer",
                    fontSize: "14px",
                    color: "#fff",
                  }}
                />
              </div>
            </div>
          </div>

          {/* BODY */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px",
              background: "#f8fafc",
            }}
          >
            {!mode && (
              <>
                <div
                  style={{
                    textAlign: "center",
                    marginBottom: "18px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#111827",
                    }}
                  >
                    👋 Welcome to Bothive
                  </div>

                  <div
                    style={{
                      fontSize: "12px",
                      color: "#6b7280",
                      marginTop: "4px",
                    }}
                  >
                    Choose how you'd like to continue
                  </div>
                </div>

                {/* LIVE AGENT */}
                <div
                  onClick={() =>
                    handleIceBreaker("agent")
                  }
                  style={{
                    background: "#fff",
                    border: "1px solid #dbeafe",
                    borderRadius: "14px",
                    padding: "14px",
                    marginBottom: "12px",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 600,
                      color: "#0f3460",
                      marginBottom: "4px",
                    }}
                  >
                    💬 Live Agent
                  </div>

                  <div
                    style={{
                      fontSize: "12px",
                      color: "#6b7280",
                    }}
                  >
                    Talk to our support team in real time
                  </div>
                </div>

                {/* AI OPTION */}
                <div
                  onClick={() =>
                    handleIceBreaker("ai")
                  }
                  style={{
                    background: "#fff",
                    border: "1px solid #bbf7d0",
                    borderRadius: "14px",
                    padding: "14px",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 600,
                      color: "#15803d",
                      marginBottom: "4px",
                    }}
                  >
                    🤖 Ask Bothive AI
                  </div>

                  <div
                    style={{
                      fontSize: "12px",
                      color: "#6b7280",
                    }}
                  >
                    Instant answers anytime
                  </div>
                </div>
              </>
            )}

            {/* MESSAGES */}
            {mode &&
              messages.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent:
                      msg.role === "user"
                        ? "flex-end"
                        : "flex-start",
                    marginBottom: "12px",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "82%",
                      padding: "10px 14px",
                      borderRadius: "16px",
                      background:
                        msg.role === "user"
                          ? "#0f3460"
                          : "#fff",
                      color:
                        msg.role === "user"
                          ? "#fff"
                          : "#111827",
                      fontSize: "13px",
                      lineHeight: 1.5,
                      boxShadow:
                        msg.role === "assistant"
                          ? "0 2px 10px rgba(0,0,0,.05)"
                          : "none",
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

            {(loading || typing) && (
              <div
                style={{
                  fontSize: "12px",
                  color: "#6b7280",
                  marginTop: "8px",
                }}
              >
                Bothive is typing...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* INPUT */}
          {mode && (
            <div
              style={{
                borderTop: "1px solid #e5e7eb",
                padding: "12px",
                background: "#fff",
                display: "flex",
                gap: "10px",
              }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) =>
                  setInput(e.target.value)
                }
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  handleSend()
                }
                placeholder={
                  mode === "agent"
                    ? "Send a message..."
                    : "Ask Bothive AI..."
                }
                style={{
                  flex: 1,
                  border: "1px solid #d1d5db",
                  borderRadius: "12px",
                  padding: "10px 14px",
                  outline: "none",
                  fontSize: "13px",
                }}
              />

              <button
                onClick={handleSend}
                disabled={loading}
                style={{
                  border: "none",
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg,#0f172a 0%,#0f3460 100%)",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                <FontAwesomeIcon
                  icon={faPaperPlane}
                />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};


export const BlogWidget = () => {
  const history = useHistory();

  const posts = [
    {
      id: 1,
      category: "POS Systems",
      categoryColor: "#185FA5",
      categoryBg: "#E8F0FE",
      title: "Why every Kenyan retailer needs a modern POS system in 2025",
      excerpt: "Manual sales tracking is costing your business money. Here's how a smart POS system transforms operations, reduces shrinkage, and grows your bottom line.",
      date: "May 12, 2025",
      readTime: "4 min read",
      image: posImage,
      slug: "modern-pos-kenya-2025",
    },
    {
      id: 2,
      category: "eTIMS",
      categoryColor: "#C8102E",
      categoryBg: "#FDECEA",
      title: "KRA eTIMS compliance: what business owners need to know",
      excerpt: "The Kenya Revenue Authority's eTIMS rollout affects every business. We break down what it means, your deadlines, and how Bothive makes compliance seamless.",
      date: "May 5, 2025",
      readTime: "5 min read",
      image: EtimsLogo,
      slug: "etims-compliance-guide",
    },
    {
      id: 3,
      category: "Web Design",
      categoryColor: "#0F6E56",
      categoryBg: "#E1F5EE",
      title: "5 signs your business website is losing you customers",
      excerpt: "A slow, outdated, or hard-to-navigate website silently drives customers away. Learn the warning signs and what a high-converting site should look like.",
      date: "Apr 28, 2025",
      readTime: "3 min read",
      image: webImage,
      slug: "website-losing-customers",
    },
    {
      id: 4,
      category: "Web Hosting",
      categoryColor: "#BA7517",
      categoryBg: "#FAEEDA",
      title: "Shared vs dedicated hosting: which is right for your business?",
      excerpt: "Choosing the wrong hosting plan can tank your website's speed and reliability. We compare your options so you can make the right call from day one.",
      date: "Apr 20, 2025",
      readTime: "4 min read",
      image: hostingImage,
      slug: "shared-vs-dedicated-hosting",
    },
    {
      id: 5,
      category: "AI & Tech",
      categoryColor: "#533AB7",
      categoryBg: "#EEEDFE",
      title: "How AI agents are transforming point-of-sale for small businesses",
      excerpt: "From smart upselling to predictive restocking, AI is no longer just for enterprise. Discover how Bothive's AI agents give small businesses a big edge.",
      date: "Apr 14, 2025",
      readTime: "6 min read",
      image: MCPImg,
      slug: "ai-agents-pos-small-business",
    },
    {
      id: 6,
      category: "Business Tips",
      categoryColor: "#5F5E5A",
      categoryBg: "#F1EFE8",
      title: "How to choose the right tech partner for your growing business",
      excerpt: "Not all software vendors are built the same. Here are the questions you should ask — and the red flags to watch for — before signing any contract.",
      date: "Apr 7, 2025",
      readTime: "5 min read",
      image: Profile1,
      slug: "choose-right-tech-partner",
    },
  ];

  const handlePostClick = (post) => {
    history.push(`/blog/${post.slug}`);
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Latest Insights</h5>
        <Button variant="secondary" size="sm">View all</Button>
      </Card.Header>

      {/* Scrollable list — shows 5, rest on scroll */}
      <div style={{ maxHeight: "480px", overflowY: "auto" }}>
        {posts.map((post, index) => (
          <div
            key={post.id}
            onClick={() => handlePostClick(post)}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              padding: "14px 16px",
              borderBottom: index < posts.length - 1 ? "0.5px solid #f0f0f0" : "none",
              cursor: "pointer",
              transition: "background 0.15s",
            }}
            onMouseOver={e => e.currentTarget.style.background = "#fafafa"}
            onMouseOut={e => e.currentTarget.style.background = "transparent"}
          >
            {/* Thumbnail */}
            <img
              src={post.image}
              alt={post.title}
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "8px",
                objectFit: "cover",
                flexShrink: 0,
                border: "0.5px solid #eee",
              }}
            />

            {/* Content */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {/* Category badge */}
              <span style={{
                fontSize: "10px",
                fontWeight: 600,
                padding: "2px 8px",
                borderRadius: "20px",
                background: post.categoryBg,
                color: post.categoryColor,
                display: "inline-block",
                marginBottom: "5px",
                letterSpacing: "0.03em",
              }}>
                {post.category}
              </span>

              {/* Title */}
              <p style={{
                margin: 0,
                fontSize: "13px",
                fontWeight: 500,
                color: "#1a1a2e",
                lineHeight: 1.4,
                marginBottom: "5px",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}>
                {post.title}
              </p>

              {/* Meta */}
              <div style={{ display: "flex", gap: "10px" }}>
                <span style={{ fontSize: "11px", color: "#aaa" }}>{post.date}</span>
                <span style={{ fontSize: "11px", color: "#aaa" }}>·</span>
                <span style={{ fontSize: "11px", color: "#aaa" }}>{post.readTime}</span>
              </div>
            </div>

            {/* Arrow */}
            <FontAwesomeIcon
              icon={faAngleDown}
              style={{
                fontSize: "12px",
                color: "#ccc",
                flexShrink: 0,
                transform: "rotate(-90deg)",
                marginTop: "4px",
              }}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

export const FAQWidget = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      q: "Does it integrate with eTIMS?",
      a: "Yes, absolutely. Our POS system comes with full KRA eTIMS integration out of the box — every receipt is automatically compliant, real-time, and audit-ready. No manual submissions, no penalties.",
      tag: "Compliance",
      tagColor: "#C8102E",
      tagBg: "#FDECEA",
    },
    {
      q: "Are future updates free?",
      a: "Yes. We provide free updates for all critical infrastructure — including security patches, compliance updates, and essential tech upgrades. Custom feature enhancements are installed on request, keeping your system modern, secure, and ahead of the competition.",
      tag: "Updates",
      tagColor: "#0F6E56",
      tagBg: "#E1F5EE",
    },
    {
      q: "Will it work offline?",
      a: "Yes. Bothive POS is built for the real world — it works fully offline and syncs automatically the moment your connection is restored. Your business never stops, regardless of internet stability.",
      tag: "Connectivity",
      tagColor: "#185FA5",
      tagBg: "#E8F0FE",
    },
    {
      q: "Will it work online?",
      a: "Yes. When connected, you get real-time cloud sync, live multi-branch dashboards, remote reporting, and instant data backup — giving you full visibility of your business from anywhere.",
      tag: "Connectivity",
      tagColor: "#185FA5",
      tagBg: "#E8F0FE",
    },
    {
      q: "What hardware does it support?",
      a: "Bothive POS supports a wide range of professional retail hardware:",
      tag: "Hardware",
      tagColor: "#BA7517",
      tagBg: "#FAEEDA",
      hardware: [
        "Barcode Scanner (Handheld, Omnidirectional, 2D/QR, RFID)",
        "Thermal Receipt & Label Printers (ESC/POS)",
        "Impact / Matrix Kitchen Printer",
        "Kitchen Display System (KDS) Screen",
        "Customer Pole Display (VFD)",
        "Secondary Customer-Facing Monitor",
        "Electronic Cash Drawer & Smart Cash Till",
        "Android POS Terminal",
        "Card Payment Devices (NFC, PIN Pad, MSR)",
        "Contactless NFC & Biometric Fingerprint Scanner",
        "Electronic Signature Pad",
        "Digital Weight Scale",
        "CCTV Integration",
        "Programmable POS Keyboard",
      ],
    },
    {
      q: "Does it support our currency?",
      a: "Yes — we support all currencies worldwide. If your local currency isn't already configured, we add it within minutes. No delays, no extra charges.",
      tag: "Localization",
      tagColor: "#533AB7",
      tagBg: "#EEEDFE",
    },
    {
      q: "Does it support GST / VAT / TIN taxes?",
      a: "Yes. Tax configuration is fully customizable. You can define GST, VAT, TIN, and group taxes such as CGST + SGST combinations. Taxes can be applied per product or transaction, and you can generate detailed input/output tax reports for any period — automatically adjusted for your country's requirements.",
      tag: "Tax",
      tagColor: "#5F5E5A",
      tagBg: "#F1EFE8",
    },
  ];

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light d-flex justify-content-between align-items-center">
        <div>
          <span style={{
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#185FA5",
          }}>
            Got Questions?
          </span>
          <h5 className="mb-0 mt-1">Frequently Asked Questions</h5>
        </div>
        <small className="text-muted d-none d-md-block">Tap any question to expand</small>
      </Card.Header>

      {/* Scrollable — 5 rows visible, rest on scroll */}
      <div style={{ maxHeight: "370px", overflowY: "auto" }}>
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} style={{ borderBottom: "0.5px solid #f0f0f0" }}>
              <div
                onClick={() => toggle(i)}
                style={{
                  padding: "13px 18px",
                  cursor: "pointer",
                  background: isOpen ? "#F8FBFF" : "transparent",
                  transition: "background 0.15s",
                }}
                onMouseOver={e => { if (!isOpen) e.currentTarget.style.background = "#fafafa"; }}
                onMouseOut={e => { if (!isOpen) e.currentTarget.style.background = "transparent"; }}
              >
                {/* Question row */}
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1, minWidth: 0 }}>
                    <span style={{
                      fontSize: "10px",
                      fontWeight: 600,
                      padding: "2px 8px",
                      borderRadius: "20px",
                      background: faq.tagBg,
                      color: faq.tagColor,
                      flexShrink: 0,
                      whiteSpace: "nowrap",
                    }}>
                      {faq.tag}
                    </span>
                    <p style={{
                      margin: 0,
                      fontSize: "13px",
                      fontWeight: 500,
                      color: isOpen ? "#185FA5" : "#1a1a2e",
                      lineHeight: 1.5,
                    }}>
                      {faq.q}
                    </p>
                  </div>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    style={{
                      fontSize: "12px",
                      color: isOpen ? "#185FA5" : "#ccc",
                      flexShrink: 0,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  />
                </div>

                {/* Answer */}
                {isOpen && (
                  <div style={{
                    marginTop: "12px",
                    paddingTop: "12px",
                    borderTop: "0.5px solid #e8f0fe",
                  }}>
                    <p style={{ margin: 0, fontSize: "13px", color: "#555", lineHeight: 1.7 }}>
                      {faq.a}
                    </p>
                    {faq.hardware && (
                      <div style={{
                        marginTop: "10px",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "6px",
                      }}>
                        {faq.hardware.map((item, hi) => (
                          <div key={hi} style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "6px",
                            fontSize: "12px",
                            color: "#555",
                          }}>
                            <span style={{
                              width: "16px",
                              height: "16px",
                              borderRadius: "4px",
                              background: "#FAEEDA",
                              color: "#BA7517",
                              fontSize: "9px",
                              fontWeight: 700,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                              marginTop: "1px",
                            }}>✓</span>
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div style={{
        padding: "13px 18px",
        borderTop: "0.5px solid #f0f0f0",
        background: "#fafafa",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "10px",
      }}>
        <p style={{ margin: 0, fontSize: "13px", color: "#888" }}>
          Still have questions? We're happy to help.
        </p>
        <a
          href="https://wa.me/254713077490"
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm btn-outline-success"
          style={{ fontSize: "13px" }}
        >
          <FontAwesomeIcon icon={faWhatsapp} className="me-2" />
          Chat with us
        </a>
      </div>
    </Card>
  );
};



export const PaymentIntegrationWidget = () => {
  return (
    <Card border="light" className="shadow-sm h-100">
      <Card.Body>
        <span
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#16c79a",
          }}
        >
          Smart Payment Integration
        </span>

        <h5 className="mt-2 mb-3">
          Accept payments anywhere, anytime
        </h5>

        <p
          style={{
            color: "#555",
            fontSize: "0.88rem",
            lineHeight: 1.7,
            marginBottom: "20px",
          }}
        >
          Bothive delivers powerful payment integration solutions that connect
          your POS systems and websites into one seamless ecosystem.
          Accept M-Pesa, Visa, Mastercard, local bank transfers, and
          international payments with secure, fast, and reliable processing
          built for modern businesses.
        </p>

        <div className="d-flex flex-wrap gap-2 mb-3">
          <span className="badge bg-light text-dark border">M-Pesa</span>
          <span className="badge bg-light text-dark border">Card Payments</span>
          <span className="badge bg-light text-dark border">Online Payments</span>
          <span className="badge bg-light text-dark border">POS Integration</span>
        </div>

        <button
          style={{
            background: "linear-gradient(90deg, #16c79a, #12b886)",
            border: "none",
            color: "#fff",
            fontWeight: 600,
            borderRadius: "30px",
            padding: "8px 22px",
            cursor: "pointer",
            fontSize: "13px",
            boxShadow: "0 4px 12px rgba(22,199,154,0.25)",
          }}
        >
          Start Integration
        </button>
      </Card.Body>
    </Card>
  );
};

export const BothivePOSWebsitePackageWidget = () => {
  return (
    <Card border="light" className="shadow-sm h-100">
      <Card.Body>
        <span
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#185FA5",
          }}
        >
          Bothive Business Package
        </span>

        <h5 className="mt-2 mb-3">
          Your website and POS working together
        </h5>

        <p
          style={{
            color: "#555",
            fontSize: "0.88rem",
            lineHeight: 1.7,
            marginBottom: "20px",
          }}
        >
          We integrate your POS system directly with your website to simplify
          stock management, automate order processing, synchronize products,
          and improve customer experience across online and physical stores.
          Our exclusive Bothive Package combines a professional website,
          hosting, and smart POS system into one complete business solution.
        </p>

        <div className="d-flex flex-wrap gap-2 mb-3">
          <span className="badge bg-light text-dark border">POS System</span>
          <span className="badge bg-light text-dark border">Business Website</span>
          <span className="badge bg-light text-dark border">Hosting</span>
          <span className="badge bg-light text-dark border">Stock Sync</span>
        </div>

        <button
          style={{
            background: "linear-gradient(90deg, #185FA5, #2574c7)",
            border: "none",
            color: "#fff",
            fontWeight: 600,
            borderRadius: "30px",
            padding: "8px 22px",
            cursor: "pointer",
            fontSize: "13px",
            boxShadow: "0 4px 12px rgba(24,95,165,0.25)",
          }}
        >
          Explore Package
        </button>
      </Card.Body>
    </Card>
  );
};


export const POSFeaturesWidget = () => {
  const features = [
    "Sales & Billing",
    "Inventory",
    "M-Pesa",
    "Reports",
    "Multi Shop",
    "Offline Mode",
    "Customers",
    "Suppliers",
    "Expenses",
    "Barcode",
    "Printers",
    "User Roles",
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header
        className="border-bottom border-light py-2 px-3"
      >
        <h6 className="mb-0">POS Features</h6>
      </Card.Header>

      <Card.Body className="p-2">
        <Row className="g-2">
          {features.map((feature, i) => (
            <Col xs={6} key={i}>
              <div
                style={{
                  padding: "6px 8px",
                  borderRadius: "8px",
                  background: "#F8F9FA",
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#333",
                  textAlign: "center",
                }}
              >
                {feature}
              </div>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export const WebsiteFeaturesWidget = () => {
  const features = [
    "Responsive",
    "E-Commerce",
    "SEO",
    "Hosting",
    "POS Sync",
    "Payments",
    "Dashboard",
    "Bookings",
    "Live Chat",
    "SSL",
    "Analytics",
    "Custom Dev",
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header
        className="border-bottom border-light py-2 px-3"
      >
        <h6 className="mb-0">Website Features</h6>
      </Card.Header>

      <Card.Body className="p-2">
        <Row className="g-2">
          {features.map((feature, i) => (
            <Col xs={6} key={i}>
              <div
                style={{
                  padding: "6px 8px",
                  borderRadius: "8px",
                  background: "#F8F9FA",
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#333",
                  textAlign: "center",
                }}
              >
                {feature}
              </div>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};