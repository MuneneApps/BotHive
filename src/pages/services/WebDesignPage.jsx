import React, { useState } from "react";
import { Row, Col, Card } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe, faBolt, faCloud, faShieldAlt, faHeadset,
  faMobileAlt, faUsers, faCheckCircle, faArrowRight,
  faStar, faSync, faRobot, faServer, faTools,
  faSearch, faShoppingCart, faChartLine, faPalette
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();
  const [activePlan, setActivePlan] = useState("Business");

  const coreFeatures = [
    { icon: faPalette, color: "#a8edea", title: "Custom UI/UX Design", desc: "Designed to attract, impress, and convert your visitors into paying clients." },
    { icon: faMobileAlt, color: "#fed6e3", title: "Mobile Optimized", desc: "Perfect experience across phones, tablets, and desktops." },
    { icon: faBolt, color: "#d4fc79", title: "Blazing Fast", desc: "Optimized for speed — no slow loading pages." },
    { icon: faSearch, color: "#a8edea", title: "SEO Ready", desc: "Structured to rank on Google and bring organic traffic." },
    { icon: faShoppingCart, color: "#fed6e3", title: "E-Commerce Ready", desc: "Sell products or services with secure checkout." },
    { icon: faRobot, color: "#d4fc79", title: "Automation Ready", desc: "Integrate AI, chatbots, and smart workflows." },
  ];

  const plans = [
    {
      name: "Starter",
      price: "KES 12,000",
      period: "+ KES 2,500/mo",
      color: "#a8edea",
      tag: "Small businesses",
      features: ["5 Pages", "Mobile Responsive", "Basic SEO", "Hosting Included"]
    },
    {
      name: "Business",
      price: "KES 30,000",
      period: "+ KES 5,500/mo",
      color: "#fed6e3",
      tag: "Most Popular 🔥",
      features: ["15 Pages", "Custom Design", "SEO + Analytics", "Maintenance Included"]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Tailored",
      color: "#d4fc79",
      tag: "Advanced systems",
      features: ["Unlimited Pages", "Web Apps", "Integrations", "Dedicated Support"]
    }
  ];

  return (
    <>
      {/* ✅ CENTERING FIX (same as your POS page) */}
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
            WEBSITE DESIGN
          </span>

          <h1 style={{
            color: "#fff",
            fontWeight: 800,
            marginTop: "16px",
            fontSize: "2.4rem"
          }}>
            Your Website Is Your <br />
            <span style={{ color: "#a8edea" }}>24/7 Sales Machine</span>
          </h1>

          <p style={{
            color: "rgba(255,255,255,0.7)",
            marginTop: "16px",
            lineHeight: 1.8
          }}>
            We design high-converting websites that attract attention,
            build trust, and turn visitors into customers — while we
            handle hosting and maintenance in the background.
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
              Get a Website
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
              Request Demo →
            </button>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="mb-5">
        <h5 style={{ fontWeight: 700 }}>Everything You Need Built In</h5>
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

      {/* HOSTING (SUBTLE, NOT MAIN SELL) */}
      <div className="mb-5">
        <div style={{
          background: "#f8f9fa",
          borderRadius: "14px",
          padding: "30px",
          border: "1px solid #eee"
        }}>
          <h5 style={{ fontWeight: 700 }}>Hosting? Already Handled.</h5>
          <p style={{ color: "#666" }}>
            Your website runs on fast, secure hosting managed by us —
            including backups, updates, and uptime monitoring.
            You don’t deal with tech. We do.
          </p>
        </div>
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
                <p>{plan.period}</p>

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