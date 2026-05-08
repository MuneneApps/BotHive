import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faEnvelopeOpen,
  faCalendarCheck,
  faTimes,
  faPlus,
  faMinus
} from "@fortawesome/free-solid-svg-icons";

import {
  Nav,
  Form,
  Navbar,
  Dropdown,
  Container,
  ListGroup,
  InputGroup,
  Button
} from "@themesberg/react-bootstrap";

export default (props) => {
  /* ---------------- STATE ---------------- */
  const [showModal, setShowModal] = useState(false);
  const [showHardwareModal, setShowHardwareModal] = useState(false);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("");

  const [form, setForm] = useState({
    businessName: "",
    contactName: "",
    country: "Kenya",
    phone: "",
    email: "",
    businessType: "",
    location: "",
    branches: 1,
    terminals: 1,
    tills: 1,
    procurement: "",
    hardware: {},
    urgency: "Planning Stage"
  });

  /* ---------------- DATA ---------------- */
  const hardwareItems = [
    "Desktop Computer", "Laptop", "Smart Android POS",
    "Thermal Receipt Printer", "Barcode Scanner", "Cash Drawer",
    "Customer Display Screen", "Label Printer", "Card Machine",
    "Tablet POS", "Router", "UPS Backup"
  ];

  /* ---------------- HELPERS ---------------- */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const updateNumber = (field, action) => {
    const current = Number(form[field]) || 1;
    setForm({
      ...form,
      [field]: action === "plus" ? current + 1 : Math.max(1, current - 1)
    });
  };

  const toggleHardware = (item) => {
    const copy = { ...form.hardware };
    if (copy[item]) { delete copy[item]; } else { copy[item] = 1; }
    setForm({ ...form, hardware: copy });
  };

  const updateHardwareQty = (item, val) => {
    const copy = { ...form.hardware };
    copy[item] = Math.max(1, Number(val));
    setForm({ ...form, hardware: copy });
  };

  /* ---------------- VALIDATION ---------------- */
  const validateStep1 = () => {
    const e = {};
    if (!form.businessName.trim()) e.businessName = "Business name is required";
    if (!form.contactName.trim()) e.contactName = "Contact person is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.businessType.trim()) e.businessType = "Business type is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e = {};
    if (!form.location.trim()) e.location = "Location is required";
    if (!form.terminals || form.terminals < 1) e.terminals = "At least 1 terminal required";
    if (!form.procurement) e.procurement = "Please select a procurement option";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep1()) setStep(2);
  };

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep2()) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  /* ---------------- NEWSLETTER ---------------- */
  const handleNewsletter = async (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail })
      });
      const data = await res.json();
      if (data.success) {
        setNewsletterStatus("success");
        setNewsletterEmail("");
      } else {
        setNewsletterStatus("error");
      }
    } catch (err) {
      console.error("Newsletter error:", err);
      setNewsletterStatus("error");
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setShowHardwareModal(false);
    setStep(1);
    setSubmitted(false);
    setSubmitting(false);
    setErrors({});
  };

  /* ---------------- STYLES ---------------- */
  const modalOverlay = {
    position: "fixed", top: 0, left: 0,
    width: "100vw", height: "100vh",
    background: "rgba(10,20,40,.85)",
    zIndex: 99999, display: "flex",
    justifyContent: "center", alignItems: "center", padding: "16px"
  };

  const modalBox = {
    background: "#fff", borderRadius: "12px",
    width: "100%", maxWidth: "520px", overflow: "hidden"
  };

  const inputStyle = (field) => ({
    width: "100%", padding: "10px 12px",
    border: `1px solid ${errors[field] ? "#dc3545" : "#dcdcdc"}`,
    borderRadius: "8px", fontSize: "14px", outline: "none"
  });

  const labelStyle = {
    fontSize: "12px", fontWeight: 600,
    marginBottom: "5px", display: "block", color: "#555"
  };

  const errorText = {
    color: "#dc3545", fontSize: "11px", marginTop: "4px"
  };

  const meterBtn = {
    width: "36px", height: "36px",
    borderRadius: "8px", border: "1px solid #ddd", background: "#fff"
  };

  /* ---------------- UI ---------------- */
  return (
    <>
      {/* NAVBAR */}
      <Navbar variant="dark" expanded className="ps-0 pe-2 pb-0">
        <Container fluid className="px-0">
          <div className="d-flex justify-content-between w-100">

            <div className="d-none d-md-flex align-items-center" style={{ marginTop: "12px", marginBottom: "12px" }}>
              <div style={{ background: "linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)", borderRadius: "12px", padding: "10px 20px", maxWidth: "600px" }}>
                <p style={{ margin: 0, fontWeight: 600, color: "#fff" }}>
                  🚀 Start selling smarter today — custom POS systems, websites & hosting for growth.
                </p>
              </div>
            </div>

            <Nav className="align-items-center">

              {/* Bell — Newsletter */}
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link} className="text-dark icon-notifications me-lg-3">
                  <FontAwesomeIcon icon={faBell} />
                </Dropdown.Toggle>
                <Dropdown.Menu className="dashboard-dropdown dropdown-menu-lg mt-2 py-0">
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item className="px-4 py-4">
                      <p className="text-muted text-center mb-3">
                        Join our newsletter for offers & updates.
                      </p>
                      {newsletterStatus === "success" ? (
                        <p className="text-success text-center fw-bold mb-0">✅ You're subscribed!</p>
                      ) : (
                        <Form onSubmit={handleNewsletter}>
                          <InputGroup className="mb-2">
                            <InputGroup.Text>
                              <FontAwesomeIcon icon={faEnvelopeOpen} />
                            </InputGroup.Text>
                            <Form.Control
                              type="email"
                              placeholder="Enter email"
                              value={newsletterEmail}
                              onChange={(e) => setNewsletterEmail(e.target.value)}
                              required
                            />
                          </InputGroup>
                          {newsletterStatus === "error" && (
                            <p className="text-danger" style={{ fontSize: "12px" }}>Something went wrong. Try again.</p>
                          )}
                          <div className="d-grid">
                            <button type="submit" className="btn btn-primary btn-sm">Subscribe</button>
                          </div>
                        </Form>
                      )}
                    </ListGroup.Item>
                  </ListGroup>
                </Dropdown.Menu>
              </Dropdown>

              {/* Quote Button */}
              <Nav.Item>
                <Button
                  variant="outline-primary" size="sm"
                  onClick={() => setShowModal(true)}
                  className="d-flex align-items-center gap-2 fw-bold px-3"
                  style={{ borderRadius: "8px", whiteSpace: "nowrap" }}
                >
                  <FontAwesomeIcon icon={faCalendarCheck} />
                  Get a Free Quote
                </Button>
              </Nav.Item>

            </Nav>
          </div>
        </Container>
      </Navbar>

      {/* MAIN MODAL */}
      {showModal && (
        <div style={modalOverlay} onClick={(e) => e.target === e.currentTarget && closeModal()}>
          <div style={modalBox}>

            {/* HEADER */}
            <div style={{ background: "#0f3460", padding: "18px 22px" }}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p style={{ margin: 0, fontSize: "11px", color: "#a8edea", fontWeight: 700 }}>GET A FREE QUOTE</p>
                  <p style={{ margin: "4px 0 0", fontSize: "17px", color: "#fff", fontWeight: 600 }}>
                    {submitted ? "Thank You!" : `Step ${step} of 2`}
                  </p>
                </div>
                <button onClick={closeModal} style={{ border: "none", background: "transparent", color: "#fff", fontSize: "18px" }}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            </div>

            {/* SUCCESS */}
            {submitted ? (
              <div style={{ padding: "35px 24px", textAlign: "center" }}>
                <h4>🎉 Quote Request Received</h4>
                <p>We'll contact <strong>{form.contactName}</strong> soon.</p>
                <button onClick={closeModal} className="btn btn-primary">Close</button>
              </div>
            ) : (
              <>
                {/* ── STEP 1 ── */}
                {step === 1 && (
                  <div style={{ padding: "20px 24px" }}>

                    <div className="mb-3">
                      <label style={labelStyle}>Business Name *</label>
                      <input name="businessName" value={form.businessName} onChange={handleChange} style={inputStyle("businessName")} />
                      {errors.businessName && <p style={errorText}>{errors.businessName}</p>}
                    </div>

                    <div className="mb-3">
                      <label style={labelStyle}>Contact Person *</label>
                      <input name="contactName" value={form.contactName} onChange={handleChange} style={inputStyle("contactName")} />
                      {errors.contactName && <p style={errorText}>{errors.contactName}</p>}
                    </div>

                    <div className="row g-2 mb-3">
                      <div className="col-5">
                        <label style={labelStyle}>Country *</label>
                        <select name="country" value={form.country} onChange={handleChange} style={inputStyle("country")}>
                          <option>Kenya</option>
                          <option>Uganda</option>
                          <option>Tanzania</option>
                          <option>Rwanda</option>
                          <option>Ethiopia</option>
                          <option>South Sudan</option>
                          <option>Somalia</option>
                        </select>
                      </div>
                      <div className="col-7">
                        <label style={labelStyle}>Phone / WhatsApp *</label>
                        <input name="phone" value={form.phone} onChange={handleChange} style={inputStyle("phone")} />
                        {errors.phone && <p style={errorText}>{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="mb-3">
                      <label style={labelStyle}>Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} style={inputStyle("email")} />
                      {errors.email && <p style={errorText}>{errors.email}</p>}
                    </div>

                    <div className="mb-4">
                      <label style={labelStyle}>Type of Business *</label>
                      <input name="businessType" placeholder="e.g Pharmacy" value={form.businessType} onChange={handleChange} style={inputStyle("businessType")} />
                      {errors.businessType && <p style={errorText}>{errors.businessType}</p>}
                    </div>

                    <button className="btn btn-primary w-100" onClick={handleNextStep}>
                      Next →
                    </button>
                  </div>
                )}

                {/* ── STEP 2 ── */}
                {step === 2 && (
                  <form onSubmit={handleSubmit} style={{ padding: "20px 24px" }}>

                    <div className="row g-2 mb-3">
                      <div className="col-7">
                        <label style={labelStyle}>Business Location *</label>
                        <input name="location" value={form.location} onChange={handleChange} style={inputStyle("location")} />
                        {errors.location && <p style={errorText}>{errors.location}</p>}
                      </div>
                      <div className="col-5">
                        <label style={labelStyle}>Branches</label>
                        <div className="d-flex align-items-center gap-1">
                          <button type="button" style={meterBtn} onClick={() => updateNumber("branches", "minus")}>
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                          <input readOnly value={form.branches} style={{ ...inputStyle("branches"), textAlign: "center", padding: "10px 4px" }} />
                          <button type="button" style={meterBtn} onClick={() => updateNumber("branches", "plus")}>
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="row g-2 mb-3">
                      <div className="col-6">
                        <label style={labelStyle}>POS Terminals *</label>
                        <input type="number" min="1" name="terminals" value={form.terminals} onChange={handleChange} style={inputStyle("terminals")} />
                        {errors.terminals && <p style={errorText}>{errors.terminals}</p>}
                      </div>
                      {Number(form.branches) > 1 && (
                        <div className="col-6">
                          <label style={labelStyle}>Tills</label>
                          <input type="number" min="1" name="tills" value={form.tills} onChange={handleChange} style={inputStyle("tills")} />
                        </div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label style={labelStyle}>Hardware Procurement Plan *</label>
                      <select
                        name="procurement"
                        value={form.procurement}
                        onChange={(e) => {
                          handleChange(e);
                          if (e.target.value === "Include In Quotation") setShowHardwareModal(true);
                        }}
                        style={inputStyle("procurement")}
                      >
                        <option value="">Select Option</option>
                        <option>I'll Source Myself</option>
                        <option>Include In Quotation</option>
                      </select>
                      {errors.procurement && <p style={errorText}>{errors.procurement}</p>}
                    </div>

                    <div className="mb-4">
                      <label style={labelStyle}>When do you need the system?</label>
                      <select name="urgency" value={form.urgency} onChange={handleChange} style={inputStyle("urgency")}>
                        <option>Immediately</option>
                        <option>This Month</option>
                        <option>Planning Stage</option>
                      </select>
                    </div>

                    <div className="d-grid gap-2">
                      <button type="button" className="btn btn-light" onClick={() => { setStep(1); setErrors({}); }}>
                        ← Back
                      </button>
                      <button type="submit" className="btn btn-success" disabled={submitting}>
                        {submitting ? "Sending..." : "Get My Free Quote"}
                      </button>
                    </div>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* HARDWARE MODAL */}
      {showHardwareModal && (
        <div style={modalOverlay}>
          <div style={{ ...modalBox, maxWidth: "640px" }}>
            <div style={{ background: "#16213e", padding: "18px 22px" }}>
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="text-white mb-0">Select Hardware Needed</h6>
                <button onClick={() => setShowHardwareModal(false)} style={{ border: "none", background: "transparent", color: "#fff" }}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            </div>
            <div style={{ padding: "20px" }}>
              <div className="row">
                {hardwareItems.map((item) => (
                  <div className="col-md-6 mb-3" key={item}>
                    <div className="border rounded p-3">
                      <label className="fw-bold d-block mb-2">
                        <input type="checkbox" className="me-2" checked={!!form.hardware[item]} onChange={() => toggleHardware(item)} />
                        {item}
                      </label>
                      {form.hardware[item] && (
                        <input type="number" min="1" value={form.hardware[item]} onChange={(e) => updateHardwareQty(item, e.target.value)} style={inputStyle("")} placeholder="Qty" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn btn-primary w-100" onClick={() => setShowHardwareModal(false)}>Done</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};