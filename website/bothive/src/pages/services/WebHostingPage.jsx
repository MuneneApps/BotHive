import React, { useState } from "react";
import { Row, Col, Card } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot, faComments, faHeadset, faCogs, faBullseye,
  faCoins, faLink, faShieldAlt, faFileContract, faCheckDouble,
  faCheckCircle, faArrowRight, faBrain, faSearch, faRocket,
  faSync, faPlus, faMinus, faChartLine, faNetworkWired,
  faCubes, faLock, faBolt
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();
  const [activePlan, setActivePlan] = useState("Business");
  const [openFaq, setOpenFaq] = useState(0);

  // ── STATS ────────────────────────────────────────────
  const stats = [
    { value: "40+", label: "AI Integrations Built" },
    { value: "24/7", label: "Automated Support" },
    { value: "100%", label: "Audit Trail Coverage" },
    { value: "0", label: "Manual Repetitive Tasks" },
  ];

  // ── CORE FEATURES ────────────────────────────────────
  const coreFeatures = [
    { icon: faComments, color: "#a8edea", title: "AI Chatbots", desc: "24/7 customer support and lead engagement that never sleeps." },
    { icon: faCogs, color: "#fed6e3", title: "ERP & POS AI", desc: "Embed AI directly into your ERP and POS to automate decisions and reporting." },
    { icon: faBullseye, color: "#d4fc79", title: "Lead Capture Automation", desc: "Qualify and route leads automatically, no manual follow-up needed." },
    { icon: faCoins, color: "#a8edea", title: "Crypto Payments", desc: "Accept crypto online and in-store alongside your existing payment methods." },
    { icon: faLink, color: "#fed6e3", title: "Blockchain Security", desc: "Tamper-proof verification for critical business records and transactions." },
    { icon: faFileContract, color: "#d4fc79", title: "Smart Contracts", desc: "Automate agreements and payments with self-executing contract logic." },
    { icon: faCheckDouble, color: "#7dd3fc", title: "Data Verification", desc: "Cryptographically verify records to eliminate disputes and fraud." },
    { icon: faChartLine, color: "#7dd3fc", title: "Predictive Analytics", desc: "AI-driven insights that flag trends before they become problems." },
    { icon: faShieldAlt, color: "#7dd3fc", title: "Audit Trails", desc: "Immutable logs of every transaction and change, always available." },
  ];

  // ── PROCESS ──────────────────────────────────────────
  const process = [
    { icon: faSearch, title: "Discovery", desc: "We map your workflows to find where AI and Web3 create the most impact." },
    { icon: faBrain, title: "Integration Design", desc: "We design the AI logic or blockchain layer to fit your existing systems." },
    { icon: faRocket, title: "Build & Deploy", desc: "We implement and connect it directly into your website, ERP, or POS." },
    { icon: faSync, title: "Monitor & Optimize", desc: "We track performance and continuously refine the automation over time." },
  ];

  // ── PRICING ──────────────────────────────────────────
  const plans = [
    {
      name: "AI Starter",
      price: "KES 15,000",
      period: "+ KES 3,500/mo",
      color: "#a8edea",
      tag: "Get started with AI",
      features: ["1 AI Chatbot", "Website Integration", "Basic Lead Capture", "Monthly Optimization"]
    },
    {
      name: "Business",
      price: "KES 40,000",
      period: "+ KES 8,000/mo",
      color: "#fed6e3",
      tag: "Most Popular 🔥",
      features: ["AI Chatbot + ERP/POS AI", "Workflow Automation", "Crypto Payment Setup", "Priority Support"]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Tailored solution",
      color: "#d4fc79",
      tag: "Full AI + Web3 stack",
      features: ["Custom AI Models", "Blockchain Audit System", "Smart Contracts", "Dedicated Engineering"]
    }
  ];

  // ── FAQ ───────────────────────────────────────────────
  const faqs = [
    { q: "Will AI replace my staff?", a: "No — AI handles repetitive tasks like answering common questions and capturing leads, freeing your team to focus on higher-value work." },
    { q: "Do customers need a crypto wallet to pay me?", a: "Customers need a wallet to pay in crypto, but you can still accept regular M-Pesa, card, and cash payments side by side — crypto is an additional option, not a replacement." },
    { q: "Can AI work with my existing ERP or POS?", a: "Yes. We integrate directly into your current ERP or POS system rather than replacing it, so your workflows stay familiar." },
    { q: "What exactly is an audit trail and why does it matter?", a: "It's an immutable, blockchain-backed record of every transaction or change made in your system — useful for compliance, dispute resolution, and trust with partners." },
  ];

  return (
    <>
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
        .service-panel:hover {
          transform: translateY(-4px);
          transition: transform 0.25s ease;
        }
      `}</style>

      {/* HERO */}
      <div style={{
        background: "linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)",
        padding: "70px 50px",
        borderRadius: "16px",
        marginBottom: "50px"
      }}>
        <div style={{ maxWidth: "720px" }}>
          <span style={{
            background: "#a8edea22",
            border: "1px solid #a8edea55",
            color: "#a8edea",
            padding: "4px 14px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: 700
          }}>
            AI & WEB3
          </span>

          <h1 style={{
            color: "#fff",
            fontWeight: 800,
            marginTop: "16px",
            fontSize: "2.4rem"
          }}>
            The Future Runs On <br />
            <span style={{ color: "#a8edea" }}>AI & Web3</span>
          </h1>

          <p style={{
            color: "rgba(255,255,255,0.7)",
            marginTop: "16px",
            lineHeight: 1.8
          }}>
            Bring AI into your website, ERP, and POS to automate workflows, enhance customer support, 
            and eliminate repetitive tasks. Accept crypto payments and secure your critical records 
            with blockchain-powered verification — all in one integrated layer.
          </p>

          <div className="d-flex gap-3 mt-4 flex-wrap">
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
              Get Started
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

      {/* STATS BAR */}
      <Row className="g-3 mb-5">
        {stats.map((s, i) => (
          <Col xs={6} md={3} key={i}>
            <div style={{
              background: "#fff",
              border: "1px solid #eee",
              borderRadius: "14px",
              padding: "20px",
              textAlign: "center"
            }}>
              <h3 style={{ fontWeight: 800, color: "#0f3460", marginBottom: "4px" }}>{s.value}</h3>
              <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>{s.label}</p>
            </div>
          </Col>
        ))}
      </Row>

      {/* TWO MAIN SERVICE PANELS */}
      <Row className="g-4 mb-5">
        {/* AI INTEGRATION PANEL */}
        <Col md={6}>
          <Card className="service-panel shadow-sm h-100" style={{ borderRadius: "16px", border: "1px solid #eee" }}>
            <Card.Body className="p-4">
              <div style={{
                width: 52,
                height: 52,
                borderRadius: "12px",
                background: "#a8edea33",
                border: "1.5px solid #a8edea",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px"
              }}>
                <FontAwesomeIcon icon={faRobot} style={{ fontSize: "22px", color: "#0f3460" }} />
              </div>
              <h4 style={{ fontWeight: 700, marginBottom: "10px" }}>AI Integration</h4>
              <p style={{ color: "#666", lineHeight: 1.8, fontSize: "14px", marginBottom: "16px" }}>
                Bring AI into your website, ERP, and POS to automate workflows, enhance customer 
                support, and eliminate repetitive tasks across your business.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["AI Chatbots", "Customer Support", "ERP AI", "POS AI", "Workflow Automation", "Lead Capture"].map((tag, i) => (
                  <span key={i} style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    background: "#F0FDFB",
                    color: "#0f3460",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    border: "1px solid #a8edea"
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* WEB3 PANEL */}
        <Col md={6}>
          <Card className="service-panel shadow-sm h-100" style={{ borderRadius: "16px", border: "1px solid #eee" }}>
            <Card.Body className="p-4">
              <div style={{
                width: 52,
                height: 52,
                borderRadius: "12px",
                background: "#d4fc7933",
                border: "1.5px solid #d4fc79",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px"
              }}>
                <FontAwesomeIcon icon={faCubes} style={{ fontSize: "22px", color: "#0f3460" }} />
              </div>
              <h4 style={{ fontWeight: 700, marginBottom: "10px" }}>Web3 Solutions</h4>
              <p style={{ color: "#666", lineHeight: 1.8, fontSize: "14px", marginBottom: "16px" }}>
                Accept crypto payments online and in-store while securing critical business records 
                with blockchain-powered verification and audit trails.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["Crypto Payments", "POS Integration", "Blockchain Security", "Data Verification", "Audit Trails", "Smart Contracts"].map((tag, i) => (
                  <span key={i} style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    background: "#FAFFF0",
                    color: "#0f3460",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    border: "1px solid #d4fc79"
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* FEATURES */}
      <div className="mb-5">
        <h5 style={{ fontWeight: 700 }}>Everything Automated & Secured</h5>
        <p style={{ color: "#666", fontSize: "13px", marginBottom: "8px" }}>
          AI to remove repetitive work, Web3 to make every record verifiable.
        </p>
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

      {/* PROCESS */}
      <div className="mb-5">
        <h5 style={{ fontWeight: 700, marginBottom: "20px" }}>How It Works</h5>
        <Row className="g-3">
          {process.map((step, i) => (
            <Col md={3} sm={6} key={i}>
              <div style={{
                background: "#fff",
                border: "1px solid #eee",
                borderRadius: "14px",
                padding: "20px",
                height: "100%",
                position: "relative"
              }}>
                <span style={{
                  position: "absolute",
                  top: "12px",
                  right: "16px",
                  fontSize: "28px",
                  fontWeight: 800,
                  color: "#f0f0f0"
                }}>
                  {i + 1}
                </span>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: "10px",
                  background: "#0f346011",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "12px"
                }}>
                  <FontAwesomeIcon icon={step.icon} style={{ color: "#0f3460" }} />
                </div>
                <h6 style={{ fontWeight: 700, marginBottom: "6px" }}>{step.title}</h6>
                <p style={{ fontSize: "12px", color: "#666", margin: 0, lineHeight: 1.5 }}>{step.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* PRICING */}
      <div className="mb-5">
        <h5 style={{ fontWeight: 700, marginBottom: "20px" }}>AI & Web3 Plans</h5>
        <Row className="g-4">
          {plans.map((plan, i) => (
            <Col md={4} key={i}>
              <Card
                onClick={() => setActivePlan(plan.name)}
                style={{
                  cursor: "pointer",
                  borderRadius: "14px",
                  border: activePlan === plan.name ? `2px solid ${plan.color}` : "1px solid #eee",
                  height: "100%"
                }}
              >
                <Card.Body>
                  <span style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#0f3460",
                    background: `${plan.color}33`,
                    padding: "3px 10px",
                    borderRadius: "12px"
                  }}>
                    {plan.tag}
                  </span>
                  <h5 className="mt-2">{plan.name}</h5>
                  <h3 style={{ fontWeight: 800 }}>{plan.price}</h3>
                  <p style={{ fontSize: "13px", color: "#666" }}>{plan.period}</p>

                  {plan.features.map((f, j) => (
                    <div key={j} className="d-flex align-items-center mb-2">
                      <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: "8px", color: "#0f3460", fontSize: "13px" }} />
                      <span style={{ fontSize: "13px" }}>{f}</span>
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
                      color: "#fff",
                      fontWeight: 600
                    }}
                  >
                    Get Started <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* TRUST / SECURITY STRIP */}
      <div className="mb-5">
        <div style={{
          background: "#f8f9fa",
          borderRadius: "14px",
          padding: "30px",
          border: "1px solid #eee"
        }}>
          <Row className="align-items-center g-3">
            <Col md={8}>
              <h5 style={{ fontWeight: 700 }}>Security Isn't an Afterthought.</h5>
              <p style={{ color: "#666", margin: 0 }}>
                Every AI workflow and blockchain integration we build is designed with verification 
                and auditability in mind — so every automated decision and every transaction can be traced.
              </p>
            </Col>
            <Col md={4} className="text-md-end">
              <div className="d-flex gap-3 justify-content-md-end flex-wrap">
                <div style={{ textAlign: "center" }}>
                  <FontAwesomeIcon icon={faLock} style={{ color: "#0f3460", fontSize: "18px" }} />
                  <p style={{ fontSize: "11px", color: "#666", margin: "4px 0 0" }}>Encrypted</p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <FontAwesomeIcon icon={faNetworkWired} style={{ color: "#0f3460", fontSize: "18px" }} />
                  <p style={{ fontSize: "11px", color: "#666", margin: "4px 0 0" }}>Blockchain-Backed</p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <FontAwesomeIcon icon={faBolt} style={{ color: "#0f3460", fontSize: "18px" }} />
                  <p style={{ fontSize: "11px", color: "#666", margin: "4px 0 0" }}>Real-Time</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-5">
        <h5 style={{ fontWeight: 700, marginBottom: "20px" }}>Frequently Asked Questions</h5>
        {faqs.map((item, i) => (
          <div
            key={i}
            onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
            style={{
              background: "#fff",
              border: "1px solid #eee",
              borderRadius: "12px",
              padding: "16px 20px",
              marginBottom: "10px",
              cursor: "pointer"
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <h6 style={{ fontWeight: 600, margin: 0, fontSize: "14px" }}>{item.q}</h6>
              <FontAwesomeIcon icon={openFaq === i ? faMinus : faPlus} style={{ color: "#0f3460", fontSize: "12px" }} />
            </div>
            {openFaq === i && (
              <p style={{ fontSize: "13px", color: "#666", marginTop: "10px", marginBottom: 0, lineHeight: 1.7 }}>
                {item.a}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* FINAL CTA */}
      <div style={{
        background: "linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)",
        borderRadius: "16px",
        padding: "50px",
        textAlign: "center"
      }}>
        <h3 style={{ color: "#fff", fontWeight: 800, marginBottom: "12px" }}>
          Ready to Automate and Modernize Your Business?
        </h3>
        <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "560px", margin: "0 auto 24px", lineHeight: 1.7 }}>
          AI handles the repetitive work. Web3 secures the records that matter. Let's build it into your systems.
        </p>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
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
            Get Started
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
    </>
  );
};