import React, { useState } from "react";
import { Row, Col, Card } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe, faBolt, faCloud, faShieldAlt, faHeadset,
  faMobileAlt, faUsers, faCheckCircle, faArrowRight,
  faStar, faSync, faRobot, faServer, faTools,
  faSearch, faShoppingCart, faChartLine, faPalette,
  faCodeBranch, faLock, faClock, faCreditCard,
  faMoneyBillWave, faDatabase, faRocket, faCalendarCheck,
  faMagic, faPlus, faMinus
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();
  const [activePlan, setActivePlan] = useState("Business");
  const [openFaq, setOpenFaq] = useState(0);

  // ── STATS ────────────────────────────────────────────
  const stats = [
    { value: "150+", label: "Websites Launched" },
    { value: "99%", label: "Uptime SLA" },
    { value: "<1.5s", label: "Avg. Page Load" },
    { value: "24/7", label: "Support Coverage" },
  ];

  // ── CORE FEATURES ────────────────────────────────────
  const coreFeatures = [
    { icon: faPalette, color: "#a8edea", title: "Custom UI/UX Design", desc: "Designed to attract, impress, and convert your visitors into paying clients." },
    { icon: faMobileAlt, color: "#fed6e3", title: "Mobile Optimized", desc: "Perfect experience across phones, tablets, and desktops." },
    { icon: faBolt, color: "#d4fc79", title: "Blazing Fast", desc: "Optimized for speed — no slow loading pages." },
    { icon: faSearch, color: "#a8edea", title: "SEO Ready", desc: "Structured to rank on Google and bring organic traffic." },
    { icon: faShoppingCart, color: "#fed6e3", title: "E-Commerce Ready", desc: "Sell products or services with secure, M-Pesa and Stripe-ready checkout." },
    { icon: faRobot, color: "#d4fc79", title: "Automation Ready", desc: "Integrate AI, chatbots, and smart workflows." },
    { icon: faServer, color: "#7dd3fc", title: "Managed Hosting", desc: "Fast, secure infrastructure with 99% uptime, monitored around the clock." },
    { icon: faSync, color: "#7dd3fc", title: "Daily Backups", desc: "Automated backups so your data is never at risk." },
    { icon: faShieldAlt, color: "#7dd3fc", title: "Free SSL & Security", desc: "Every site ships with SSL, firewalls, and malware scanning included." },
  ];

  // ── PROCESS ──────────────────────────────────────────
  const process = [
    { icon: faSearch, title: "Discovery & Planning", desc: "We learn your business, goals, and audience to map out the right structure." },
    { icon: faPalette, title: "Design & Build", desc: "Custom design and development — marketing site, booking platform, or full store." },
    { icon: faRocket, title: "Launch & Host", desc: "We deploy to fast, secure hosting with SSL, backups, and monitoring from day one." },
    { icon: faHeadset, title: "Ongoing Support", desc: "Updates, maintenance, and support so your site keeps performing long after launch." },
  ];

  // ── PRICING ──────────────────────────────────────────
  const plans = [
    {
      name: "Starter",
      price: "KES 12,000",
      period: "+ KES 2,500/mo hosting",
      color: "#a8edea",
      tag: "Small businesses",
      features: ["5 Pages", "Shared Hosting & SSL", "Mobile Responsive", "Basic SEO", "Daily Backups"]
    },
    {
      name: "Business",
      price: "KES 30,000",
      period: "+ KES 5,500/mo hosting",
      color: "#fed6e3",
      tag: "Most Popular 🔥",
      features: ["15 Pages", "VPS Hosting & SSL", "Custom Design", "SEO + Analytics", "M-Pesa & Stripe Setup", "Maintenance Included"]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Tailored infrastructure",
      color: "#d4fc79",
      tag: "Advanced systems",
      features: ["Unlimited Pages", "Dedicated VPS", "Web Apps & Integrations", "Git-Based Deployments", "Dedicated Support"]
    }
  ];

  // ── FAQ ───────────────────────────────────────────────
  const faqs = [
    { q: "Do I need to manage hosting separately?", a: "No — hosting is handled entirely by us. You get your own cPanel access, but backups, updates, and uptime monitoring are all managed on our end." },
    { q: "Can I accept M-Pesa and card payments?", a: "Yes. M-Pesa and Stripe integrations are available on Business and Enterprise plans, fully configured during build." },
    { q: "What's the difference between Shared and VPS hosting?", a: "Shared hosting is cost-effective for smaller sites with moderate traffic. VPS gives your site dedicated resources, better performance, and room to scale without sharing a server with others." },
    { q: "Do you support Git-based deployments?", a: "Yes, available on Business and Enterprise plans — push updates through version control instead of manual uploads." },
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
            WEBSITES & HOSTING
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
            We build marketing sites, booking platforms, and full ecommerce stores with M-Pesa, 
            Stripe, and AI baked in — then host them on fast, secure infrastructure with a 99% 
            uptime SLA. Design and hosting, handled by one team.
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
        {/* WEB DESIGN PANEL */}
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
                <FontAwesomeIcon icon={faPalette} style={{ fontSize: "22px", color: "#0f3460" }} />
              </div>
              <h4 style={{ fontWeight: 700, marginBottom: "10px" }}>Web Design</h4>
              <p style={{ color: "#666", lineHeight: 1.8, fontSize: "14px", marginBottom: "16px" }}>
                Your website is your best salesperson — it never sleeps. We build marketing sites, 
                booking platforms, and full ecommerce stores with M-Pesa, Stripe, and AI baked in.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["Marketing site", "Bookings", "Ecommerce", "M-Pesa", "Stripe", "AI-powered"].map((tag, i) => (
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

        {/* HOSTING PANEL */}
        <Col md={6}>
          <Card className="service-panel shadow-sm h-100" style={{ borderRadius: "16px", border: "1px solid #eee" }}>
            <Card.Body className="p-4">
              <div style={{
                width: 52,
                height: 52,
                borderRadius: "12px",
                background: "#7dd3fc33",
                border: "1.5px solid #7dd3fc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px"
              }}>
                <FontAwesomeIcon icon={faServer} style={{ fontSize: "22px", color: "#0f3460" }} />
              </div>
              <h4 style={{ fontWeight: 700, marginBottom: "10px" }}>Hosting</h4>
              <p style={{ color: "#666", lineHeight: 1.8, fontSize: "14px", marginBottom: "16px" }}>
                Fast, secure, always on. Your own cPanel, Git version control, and a 99% uptime SLA — 
                on shared or VPS infrastructure that scales without drama.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["cPanel", "Git control", "99% uptime", "VPS", "Shared hosting", "SSL included"].map((tag, i) => (
                  <span key={i} style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    background: "#F0F9FF",
                    color: "#0f3460",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    border: "1px solid #7dd3fc"
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
        <h5 style={{ fontWeight: 700 }}>Everything You Need, Built In</h5>
        <p style={{ color: "#666", fontSize: "13px", marginBottom: "8px" }}>
          From design to deployment — one team handles your site and the infrastructure it runs on.
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
        <h5 style={{ fontWeight: 700, marginBottom: "20px" }}>Website + Hosting Plans</h5>
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

      {/* TRUST / SUPPORT STRIP */}
      <div className="mb-5">
        <div style={{
          background: "#f8f9fa",
          borderRadius: "14px",
          padding: "30px",
          border: "1px solid #eee"
        }}>
          <Row className="align-items-center g-3">
            <Col md={8}>
              <h5 style={{ fontWeight: 700 }}>Hosting? Already Handled.</h5>
              <p style={{ color: "#666", margin: 0 }}>
                Your website runs on fast, secure hosting managed by us — including daily backups, 
                security patches, and round-the-clock uptime monitoring. You get cPanel access and 
                Git deployments if you want them, but you never have to deal with the server yourself.
              </p>
            </Col>
            <Col md={4} className="text-md-end">
              <div className="d-flex gap-3 justify-content-md-end flex-wrap">
                <div style={{ textAlign: "center" }}>
                  <FontAwesomeIcon icon={faLock} style={{ color: "#0f3460", fontSize: "18px" }} />
                  <p style={{ fontSize: "11px", color: "#666", margin: "4px 0 0" }}>SSL Secured</p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <FontAwesomeIcon icon={faClock} style={{ color: "#0f3460", fontSize: "18px" }} />
                  <p style={{ fontSize: "11px", color: "#666", margin: "4px 0 0" }}>99% Uptime</p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <FontAwesomeIcon icon={faSync} style={{ color: "#0f3460", fontSize: "18px" }} />
                  <p style={{ fontSize: "11px", color: "#666", margin: "4px 0 0" }}>Daily Backups</p>
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
          Ready for a Website That Works as Hard as You Do?
        </h3>
        <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "560px", margin: "0 auto 24px", lineHeight: 1.7 }}>
          Design and hosting from one team — no handoffs, no finger-pointing, no surprises.
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
    </>
  );
};