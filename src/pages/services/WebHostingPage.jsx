import React, { useState } from "react";
import { Row, Col, Card } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faServer, faCloud, faShieldAlt, faBolt, faDatabase,
  faCheckCircle, faArrowRight, faStar, faSync,
  faGlobe, faTools, faHeadset, faLock, faNetworkWired
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();
  const [activePlan, setActivePlan] = useState("Business");

  const coreFeatures = [
    { icon: faBolt, color: "#a8edea", title: "High-Speed Performance", desc: "Optimized servers ensure fast loading for websites, POS systems, and applications." },
    { icon: faCloud, color: "#fed6e3", title: "Cloud Infrastructure", desc: "Reliable cloud-based hosting with automatic scaling and uptime monitoring." },
    { icon: faShieldAlt, color: "#d4fc79", title: "Security & Protection", desc: "Firewalls, SSL, and continuous monitoring keep your data secure." },
    { icon: faSync, color: "#a8edea", title: "Daily Backups", desc: "Automatic backups ensure your data is always recoverable." },
    { icon: faHeadset, color: "#fed6e3", title: "Managed Support", desc: "We handle setup, maintenance, and troubleshooting for you." },
    { icon: faTools, color: "#d4fc79", title: "Maintenance Included", desc: "Server updates, patches, and optimization handled automatically." },
  ];

  const hostingTypes = [
    {
      icon: faGlobe,
      title: "Website Hosting",
      desc: "Fast, secure hosting for business websites, landing pages, and online stores."
    },
    {
      icon: faDatabase,
      title: "POS Cloud Hosting",
      desc: "Reliable backend hosting for POS systems — real-time sync, backups, and uptime guaranteed."
    },
    {
      icon: faServer,
      title: "VPS / Dedicated Servers",
      desc: "Full control servers for developers, businesses, or custom systems requiring power and flexibility."
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "KES 2,500/mo",
      color: "#a8edea",
      tag: "Small projects",
      features: [
        "Website Hosting",
        "SSL Certificate",
        "Daily Backups",
        "Basic Support",
        "1 Website"
      ]
    },
    {
      name: "Business",
      price: "KES 6,500/mo",
      color: "#fed6e3",
      tag: "Most Popular 🔥",
      features: [
        "Website + POS Hosting",
        "High Performance Servers",
        "Priority Support",
        "Advanced Security",
        "Multiple Projects"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      color: "#d4fc79",
      tag: "Full infrastructure",
      features: [
        "VPS / Dedicated Server",
        "Custom Configuration",
        "24/7 Monitoring",
        "Full Dev Support",
        "Scalable Infrastructure"
      ]
    }
  ];

  return (
    <>
      {/* CENTERING */}
      <style>{`
        @media (min-width: 768px) {
          .content {
            margin-left: auto !important;
            margin-right: auto !important;
            padding-left: 60px !important;
            padding-right: 60px !important;
            max-width: 1200px !important;
          }
        }
      `}</style>

      {/* HERO */}
      <div style={{
        background: "linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)",
        padding: "70px 50px",
        borderRadius: "16px",
        marginBottom: "50px"
      }}>
        <div style={{ maxWidth: "700px" }}>
          <span style={{
            background: "#a8edea22",
            border: "1px solid #a8edea55",
            color: "#a8edea",
            padding: "4px 14px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: 700
          }}>
            HOSTING & INFRASTRUCTURE
          </span>

          <h1 style={{
            color: "#fff",
            fontWeight: 800,
            marginTop: "16px",
            fontSize: "2.4rem"
          }}>
            Powering Your Business <br />
            <span style={{ color: "#a8edea" }}>Behind The Scenes</span>
          </h1>

          <p style={{
            color: "rgba(255,255,255,0.7)",
            marginTop: "16px",
            lineHeight: 1.8
          }}>
            From websites to POS systems and full servers — we provide fast,
            secure, and fully managed hosting so your business runs without interruption.
          </p>

          <div className="d-flex gap-3 mt-4">
            <button
              onClick={() => history.push("/")}
              style={{
                background: "linear-gradient(90deg,#a8edea,#a8edeaaa)",
                border: "none",
                color: "#1a1a2e",
                fontWeight: 700,
                borderRadius: "10px",
                padding: "12px 28px"
              }}
            >
              Get Hosting
            </button>

            <button
              onClick={() => window.open("https://wa.me/254700000000")}
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "#fff",
                borderRadius: "10px",
                padding: "12px 28px"
              }}
            >
              Talk to Us →
            </button>
          </div>
        </div>
      </div>

      {/* HOSTING TYPES */}
      <div className="mb-5">
        <h5 style={{ fontWeight: 700 }}>Hosting Solutions For Every Need</h5>
        <Row className="g-3 mt-2">
          {hostingTypes.map((h, i) => (
            <Col md={4} key={i}>
              <Card className="shadow-sm h-100" style={{ borderRadius: "14px" }}>
                <Card.Body>
                  <FontAwesomeIcon icon={h.icon} style={{ fontSize: "20px", marginBottom: "10px", color: "#0f3460" }} />
                  <h6>{h.title}</h6>
                  <p style={{ fontSize: "13px", color: "#666" }}>{h.desc}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* FEATURES */}
      <div className="mb-5">
        <h5 style={{ fontWeight: 700 }}>Everything Managed For You</h5>
        <Row className="g-3 mt-2">
          {coreFeatures.map((f, i) => (
            <Col md={4} key={i}>
              <Card className="shadow-sm h-100" style={{ borderRadius: "14px" }}>
                <Card.Body>
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: "10px",
                    background: `${f.color}33`,
                    border: `1.5px solid ${f.color}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "12px"
                  }}>
                    <FontAwesomeIcon icon={f.icon} />
                  </div>
                  <h6>{f.title}</h6>
                  <p style={{ fontSize: "13px", color: "#666" }}>{f.desc}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* PRICING */}
      <Row className="g-4">
        {plans.map((plan, i) => (
          <Col md={4} key={i}>
            <Card
              onClick={() => setActivePlan(plan.name)}
              style={{
                cursor: "pointer",
                borderRadius: "14px",
                border: activePlan === plan.name ? `2px solid ${plan.color}` : "1px solid #eee"
              }}
            >
              <Card.Body>
                <h5>{plan.name}</h5>
                <h3>{plan.price}</h3>

                {plan.features.map((f, j) => (
                  <div key={j} className="d-flex align-items-center mb-2">
                    <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: "8px" }} />
                    {f}
                  </div>
                ))}

                <button
                  style={{
                    marginTop: "15px",
                    width: "100%",
                    borderRadius: "10px",
                    padding: "10px",
                    border: "none",
                    background: "#0f3460",
                    color: "#fff"
                  }}
                >
                  Get Started <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};