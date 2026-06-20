import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCapsules, faClipboard, faUsers, faPills, faFileAlt,
  faShoppingCart, faMapMarkerAlt, faCheckCircle, faTimes, faBell,
  faChartBar, faExclamationTriangle, faBox, faClock, faPhone, faEnvelope,
  faAngleDown, faStar, faExternalLinkAlt, faPlus, faEdit, faTrash
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Col, Row, Card, Button, Modal, Form } from '@themesberg/react-bootstrap';

const pharmacyGreen = "#0f5c3a";
const lightGreen = "#e8f5e9";
const accentGreen = "#16c79a";

// ═══════════════════════════════════════════════════════════════
// PHARMACY SALES WIDGET
// ═══════════════════════════════════════════════════════════════
export const PharmacySalesWidget = () => {
  const stats = [
    { label: "Today's Sales", value: "KES 45,230", icon: faCapsules, color: "#16c79a" },
    { label: "Transactions", value: "142", icon: faFileAlt, color: "#0f5c3a" },
    { label: "Avg. Sale", value: "KES 318", icon: faChartBar, color: "#1D9E75" },
  ];

  return (
    <Card border="light" className="shadow-sm h-100">
      <Card.Body>
        <div style={{ marginBottom: "14px" }}>
          <small style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: pharmacyGreen, letterSpacing: "0.07em" }}>
            Sales Overview
          </small>
          <h5 className="mt-1 mb-0">Daily Performance</h5>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {stats.map((stat, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", paddingBottom: "12px", borderBottom: i < stats.length - 1 ? "0.5px solid #e0e0e0" : "none" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: `${stat.color}20`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FontAwesomeIcon icon={stat.icon} style={{ color: stat.color, fontSize: "18px" }} />
              </div>
              <div style={{ flex: 1 }}>
                <small style={{ fontSize: "11px", color: "#888" }}>{stat.label}</small>
                <h6 style={{ fontSize: "15px", fontWeight: 700, color: "#111", marginBottom: 0 }}>{stat.value}</h6>
              </div>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

// ═══════════════════════════════════════════════════════════════
// MEDICATION STOCK WIDGET
// ═══════════════════════════════════════════════════════════════
export const MedicationStockWidget = () => {
  const medications = [
    { name: "Paracetamol 500mg", stock: 245, min: 100, unit: "tabs" },
    { name: "Amoxicillin 250mg", stock: 87, min: 150, unit: "caps", critical: true },
    { name: "Metformin 500mg", stock: 312, min: 100, unit: "tabs" },
  ];

  return (
    <Card border="light" className="shadow-sm h-100">
      <Card.Body>
        <small style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: pharmacyGreen, letterSpacing: "0.07em" }}>
          Inventory Status
        </small>
        <h5 className="mt-1 mb-3">Top Medications</h5>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {medications.map((med, i) => {
            const percentage = (med.stock / (med.min * 2)) * 100;
            const barColor = med.critical ? "#C8102E" : percentage < 50 ? "#FFA500" : "#16c79a";

            return (
              <div key={i}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                  <small style={{ fontSize: "11px", fontWeight: 600, color: "#333" }}>{med.name}</small>
                  <small style={{ fontSize: "10px", color: "#888" }}>{med.stock} {med.unit}</small>
                </div>
                <div style={{ height: "6px", borderRadius: "3px", background: "#e0e0e0", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${Math.min(percentage, 100)}%`, background: barColor, borderRadius: "3px" }} />
                </div>
                {med.critical && (
                  <small style={{ fontSize: "9px", color: "#C8102E", fontWeight: 600, marginTop: "2px", display: "block" }}>
                    ⚠ Below minimum
                  </small>
                )}
              </div>
            );
          })}
        </div>
      </Card.Body>
    </Card>
  );
};

// ═══════════════════════════════════════════════════════════════
// PRESCRIPTION TRACKER WIDGET
// ═══════════════════════════════════════════════════════════════
export const PrescriptionTrackerWidget = () => {
  const [prescriptions] = useState([
    { id: 1, patient: "John Doe", doctor: "Dr. Kariuki", items: "Amoxicillin 250mg x10, Paracetamol 500mg x20", status: "pending", date: "Today 10:30 AM" },
    { id: 2, patient: "Mary Smith", doctor: "Dr. Kipchoge", items: "Metformin 500mg x30, Lisinopril 10mg x30", status: "completed", date: "Today 09:15 AM" },
    { id: 3, patient: "Peter Mwangi", doctor: "Dr. Omondi", items: "Vitamin B Complex x10", status: "pending", date: "Today 11:45 AM" },
    { id: 4, patient: "Jane Njeri", doctor: "Dr. Kiplagat", items: "Azithromycin 500mg x6, Ibuprofen 400mg x20", status: "completed", date: "Today 08:30 AM" },
  ]);

  const getStatusColor = (status) => {
    return status === "pending" ? "#FFA500" : "#16c79a";
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light d-flex justify-content-between align-items-center">
        <h5 className="mb-0">📋 Active Prescriptions</h5>
        <Button variant="success" size="sm">New Prescription</Button>
      </Card.Header>

      <div style={{ maxHeight: "420px", overflowY: "auto" }}>
        {prescriptions.map((rx, i) => (
          <div key={rx.id} style={{ padding: "14px 16px", borderBottom: i < prescriptions.length - 1 ? "0.5px solid #f0f0f0" : "none" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
              <div style={{ flex: 1 }}>
                <h6 style={{ fontSize: "13px", fontWeight: 600, color: "#111", marginBottom: "4px" }}>
                  {rx.patient}
                </h6>
                <small style={{ fontSize: "11px", color: "#666", display: "block", marginBottom: "3px" }}>
                  👨‍⚕️ {rx.doctor}
                </small>
                <small style={{ fontSize: "11px", color: "#888", display: "block", marginBottom: "6px", lineHeight: 1.4 }}>
                  {rx.items}
                </small>
                <small style={{ fontSize: "10px", color: "#aaa" }}>
                  🕐 {rx.date}
                </small>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <span style={{
                  fontSize: "10px",
                  fontWeight: 600,
                  padding: "4px 10px",
                  borderRadius: "12px",
                  background: `${getStatusColor(rx.status)}20`,
                  color: getStatusColor(rx.status),
                  display: "inline-block",
                  textTransform: "uppercase",
                }}>
                  {rx.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

// ═══════════════════════════════════════════════════════════════
// EXPIRY ALERTS WIDGET
// ═══════════════════════════════════════════════════════════════
export const ExpiryAlertsWidget = () => {
  const alerts = [
    { item: "Aspirin 75mg", daysLeft: 12, batch: "BAT-2024-0812", severity: "warning" },
    { item: "Vitamin D3 1000IU", daysLeft: 5, batch: "BAT-2024-0801", severity: "critical" },
    { item: "Cough Syrup", daysLeft: 3, batch: "BAT-2024-0798", severity: "critical" },
  ];

  const getSeverityColor = (severity) => {
    return severity === "critical" ? "#C8102E" : "#FFA500";
  };

  return (
    <Card border="light" className="shadow-sm h-100">
      <Card.Body>
        <small style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "#C8102E", letterSpacing: "0.07em" }}>
          ⏰ Expiry Alerts
        </small>
        <h5 className="mt-1 mb-3">Items Expiring Soon</h5>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {alerts.map((alert, i) => (
            <div key={i} style={{
              padding: "10px 12px",
              borderRadius: "8px",
              background: `${getSeverityColor(alert.severity)}15`,
              border: `1px solid ${getSeverityColor(alert.severity)}30`,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                <div>
                  <small style={{ fontSize: "12px", fontWeight: 600, color: "#111", display: "block", marginBottom: "2px" }}>
                    {alert.item}
                  </small>
                  <small style={{ fontSize: "10px", color: "#666" }}>
                    Batch: {alert.batch}
                  </small>
                </div>
                <span style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: getSeverityColor(alert.severity),
                  whiteSpace: "nowrap",
                }}>
                  {alert.daysLeft}d left
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

// ═══════════════════════════════════════════════════════════════
// PATIENT MANAGEMENT WIDGET
// ═══════════════════════════════════════════════════════════════
export const PatientManagementWidget = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    idNumber: "",
    allergies: "",
    chronicConditions: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New patient:", formData);
    setFormData({ name: "", phone: "", email: "", idNumber: "", allergies: "", chronicConditions: "" });
    setShowModal(false);
  };

  const recentPatients = [
    { name: "John Doe", phone: "+254712345678", visits: 5 },
    { name: "Mary Smith", phone: "+254798765432", visits: 3 },
    { name: "Peter Mwangi", phone: "+254701234567", visits: 8 },
  ];

  return (
    <>
      <Card border="light" className="shadow-sm h-100">
        <Card.Header className="border-bottom border-light d-flex justify-content-between align-items-center">
          <h5 className="mb-0">👥 Patient Records</h5>
          <Button variant="success" size="sm" onClick={() => setShowModal(true)}>+ New Patient</Button>
        </Card.Header>

        <Card.Body>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {recentPatients.map((patient, i) => (
              <div key={i} style={{
                padding: "10px 12px",
                borderRadius: "8px",
                background: lightGreen,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
                <div>
                  <h6 style={{ fontSize: "12px", fontWeight: 600, marginBottom: "2px" }}>{patient.name}</h6>
                  <small style={{ fontSize: "10px", color: "#666" }}>{patient.phone}</small>
                </div>
                <span style={{ fontSize: "11px", fontWeight: 600, color: pharmacyGreen }}>
                  {patient.visits} visits
                </span>
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: pharmacyGreen }}>Add New Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name *</Form.Label>
              <Form.Control type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number *</Form.Label>
              <Form.Control type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>ID Number</Form.Label>
              <Form.Control type="text" value={formData.idNumber} onChange={e => setFormData({ ...formData, idNumber: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Known Allergies</Form.Label>
              <Form.Control as="textarea" rows={2} value={formData.allergies} onChange={e => setFormData({ ...formData, allergies: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Chronic Conditions</Form.Label>
              <Form.Control as="textarea" rows={2} value={formData.chronicConditions} onChange={e => setFormData({ ...formData, chronicConditions: e.target.value })} />
            </Form.Group>
            <Button variant="success" type="submit" className="w-100">
              Save Patient
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

// ═══════════════════════════════════════════════════════════════
// SUPPLIER ORDERING WIDGET
// ═══════════════════════════════════════════════════════════════
export const SupplierOrderingWidget = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    supplier: "",
    medications: "",
    quantity: "",
    deliveryDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order placed:", formData);
    setFormData({ supplier: "", medications: "", quantity: "", deliveryDate: "" });
    setShowModal(false);
  };

  const suppliers = [
    { name: "Pharma Kenya Ltd", phone: "+254701000000", rating: 4.8 },
    { name: "East Africa Drugs", phone: "+254712000000", rating: 4.5 },
    { name: "Universal Suppliers", phone: "+254798000000", rating: 4.3 },
  ];

  return (
    <>
      <Card border="light" className="shadow-sm h-100">
        <Card.Header className="border-bottom border-light d-flex justify-content-between align-items-center">
          <h5 className="mb-0">📦 Suppliers</h5>
          <Button variant="success" size="sm" onClick={() => setShowModal(true)}>+ Order</Button>
        </Card.Header>

        <Card.Body>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {suppliers.map((supplier, i) => (
              <div key={i} style={{
                padding: "10px 12px",
                borderRadius: "8px",
                background: lightGreen,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <h6 style={{ fontSize: "12px", fontWeight: 600, marginBottom: "2px" }}>{supplier.name}</h6>
                    <small style={{ fontSize: "10px", color: "#666" }}>📞 {supplier.phone}</small>
                  </div>
                  <span style={{ fontSize: "11px", fontWeight: 600, color: "#FFC107" }}>
                    ⭐ {supplier.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: pharmacyGreen }}>Place Supplier Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Select Supplier *</Form.Label>
              <Form.Select value={formData.supplier} onChange={e => setFormData({ ...formData, supplier: e.target.value })} required>
                <option value="">Choose supplier...</option>
                {suppliers.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Medications (SKU/Name) *</Form.Label>
              <Form.Control as="textarea" rows={3} value={formData.medications} onChange={e => setFormData({ ...formData, medications: e.target.value })} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Delivery Date</Form.Label>
              <Form.Control type="date" value={formData.deliveryDate} onChange={e => setFormData({ ...formData, deliveryDate: e.target.value })} />
            </Form.Group>
            <Button variant="success" type="submit" className="w-100">
              Submit Order
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

// ═══════════════════════════════════════════════════════════════
// INSURANCE & PAYMENT WIDGET
// ═══════════════════════════════════════════════════════════════
export const InsurancePaymentWidget = () => {
  const [showModal, setShowModal] = useState(false);

  const insuranceProviders = [
    { name: "NHIF", coverage: "85%", status: "Active" },
    { name: "AAR Health", coverage: "90%", status: "Active" },
    { name: "Britam Health", coverage: "80%", status: "Pending" },
  ];

  const paymentMethods = [
    { method: "Cash", icon: "💰", status: "Active" },
    { method: "M-Pesa", icon: "📱", status: "Active" },
    { method: "Card", icon: "💳", status: "Active" },
    { method: "Insurance", icon: "🏥", status: "Active" },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">🏥 Insurance & Payment</h5>
      </Card.Header>

      <Card.Body>
        <div style={{ marginBottom: "20px" }}>
          <h6 style={{ fontSize: "12px", fontWeight: 600, marginBottom: "10px", color: "#333" }}>
            Integrated Insurance Providers
          </h6>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
            {insuranceProviders.map((provider, i) => (
              <div key={i} style={{
                padding: "10px 12px",
                borderRadius: "8px",
                background: lightGreen,
                textAlign: "center",
              }}>
                <small style={{ fontSize: "11px", fontWeight: 600, color: pharmacyGreen, display: "block", marginBottom: "2px" }}>
                  {provider.name}
                </small>
                <small style={{ fontSize: "10px", color: "#666" }}>
                  {provider.coverage} coverage
                </small>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h6 style={{ fontSize: "12px", fontWeight: 600, marginBottom: "10px", color: "#333" }}>
            Accepted Payment Methods
          </h6>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "10px" }}>
            {paymentMethods.map((method, i) => (
              <div key={i} style={{
                padding: "10px 12px",
                borderRadius: "8px",
                background: lightGreen,
                textAlign: "center",
              }}>
                <span style={{ fontSize: "18px", display: "block", marginBottom: "2px" }}>
                  {method.icon}
                </span>
                <small style={{ fontSize: "10px", fontWeight: 600, color: pharmacyGreen, display: "block" }}>
                  {method.method}
                </small>
              </div>
            ))}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

// ═══════════════════════════════════════════════════════════════
// PHARMACY COMPLIANCE WIDGET
// ═══════════════════════════════════════════════════════════════
export const PharmacyComplianceWidget = () => {
  const complianceItems = [
    { name: "Pharmacy License", status: "Valid", expiry: "Dec 2025", color: "#16c79a" },
    { name: "Narcotic License", status: "Valid", expiry: "Mar 2025", color: "#FFA500" },
    { name: "Hygiene Audit", status: "Passed", date: "Jan 2024", color: "#16c79a" },
  ];

  return (
    <Card border="light" className="shadow-sm h-100">
      <Card.Body>
        <small style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: pharmacyGreen, letterSpacing: "0.07em" }}>
          ✓ Compliance Status
        </small>
        <h5 className="mt-1 mb-3">Regulatory</h5>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {complianceItems.map((item, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              paddingBottom: "10px",
              borderBottom: i < complianceItems.length - 1 ? "0.5px solid #e0e0e0" : "none",
            }}>
              <FontAwesomeIcon icon={faCheckCircle} style={{ color: item.color, fontSize: "16px" }} />
              <div style={{ flex: 1 }}>
                <small style={{ fontSize: "11px", fontWeight: 600, color: "#333", display: "block" }}>
                  {item.name}
                </small>
                <small style={{ fontSize: "10px", color: "#888" }}>
                  {item.status} {item.expiry || item.date}
                </small>
              </div>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

// ═══════════════════════════════════════════════════════════════
// PHARMACY REPORTS WIDGET
// ═══════════════════════════════════════════════════════════════
export const PharmaReportsWidget = () => {
  const [selectedReport, setSelectedReport] = useState("sales");

  const reportOptions = [
    { id: "sales", label: "Sales Report", icon: faFileAlt },
    { id: "inventory", label: "Inventory Report", icon: faBox },
    { id: "prescriptions", label: "Prescriptions", icon: faClipboard },
    { id: "patients", label: "Patient Activity", icon: faUsers },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">📊 Reports & Analytics</h5>
      </Card.Header>

      <Card.Body>
        <div style={{ marginBottom: "16px" }}>
          <small style={{ fontSize: "11px", fontWeight: 600, marginBottom: "10px", display: "block", color: "#333" }}>
            Generate Report
          </small>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {reportOptions.map(option => (
              <button
                key={option.id}
                onClick={() => setSelectedReport(option.id)}
                style={{
                  padding: "10px 12px",
                  borderRadius: "8px",
                  border: selectedReport === option.id ? `2px solid ${pharmacyGreen}` : "1px solid #e0e0e0",
                  background: selectedReport === option.id ? lightGreen : "#fff",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontWeight: selectedReport === option.id ? 600 : 500,
                  color: selectedReport === option.id ? pharmacyGreen : "#666",
                  transition: "all 0.2s",
                }}
              >
                <FontAwesomeIcon icon={option.icon} style={{ marginRight: "6px" }} />
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{
          padding: "12px",
          borderRadius: "8px",
          background: lightGreen,
          marginBottom: "12px",
        }}>
          <small style={{ fontSize: "11px", color: pharmacyGreen, fontWeight: 600 }}>
            📅 Date Range
          </small>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "8px" }}>
            <input type="date" style={{ padding: "6px 8px", borderRadius: "6px", border: "0.5px solid #ccc", fontSize: "12px" }} />
            <input type="date" style={{ padding: "6px 8px", borderRadius: "6px", border: "0.5px solid #ccc", fontSize: "12px" }} />
          </div>
        </div>

        <div style={{ display: "flex", gap: "8px" }}>
          <Button variant="success" size="sm" className="flex-grow-1">
            Generate
          </Button>
          <Button variant="outline-secondary" size="sm" className="flex-grow-1">
            Download PDF
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

// ═══════════════════════════════════════════════════════════════
// PHARMACY LOCATION WIDGET
// ═══════════════════════════════════════════════════════════════
export const PharmacyLocationWidget = () => {
  return (
    <Card border="light" className="shadow-sm h-100">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">📍 Find Us</h5>
      </Card.Header>
      <Card.Body className="p-0" style={{ minHeight: "260px" }}>
        <iframe
          title="Pharmacy Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853743783!2d36.68258474628809!3d-1.3028617900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1690000000000"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "0 0 8px 8px", display: "block", minHeight: "260px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Card.Body>
    </Card>
  );
};

// ═══════════════════════════════════════════════════════════════
// PHARMACY ABOUT WIDGET
// ═══════════════════════════════════════════════════════════════
export const PharmacyAboutWidget = () => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <span style={{
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: pharmacyGreen,
        }}>
          About Our Pharmacy
        </span>
        <h5 className="mt-2 mb-3">Quality Healthcare at Your Doorstep</h5>
        <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.7, margin: 0, marginBottom: "12px" }}>
          We are a licensed pharmacy committed to providing quality medications, expert advice, and reliable service to our community.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ display: "flex", gap: "10px", fontSize: "12px" }}>
            <span style={{ color: pharmacyGreen, fontWeight: 600 }}>📞</span>
            <span style={{ color: "#666" }}>+254 713 077 490</span>
          </div>
          <div style={{ display: "flex", gap: "10px", fontSize: "12px" }}>
            <span style={{ color: pharmacyGreen, fontWeight: 600 }}>⏰</span>
            <span style={{ color: "#666" }}>Mon-Sun: 8:00 AM - 9:00 PM</span>
          </div>
          <div style={{ display: "flex", gap: "10px", fontSize: "12px" }}>
            <span style={{ color: pharmacyGreen, fontWeight: 600 }}>📍</span>
            <span style={{ color: "#666" }}>Nairobi, Kenya</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

// ═══════════════════════════════════════════════════════════════
// PHARMACY FAQ WIDGET
// ═══════════════════════════════════════════════════════════════
export const PharmacyFAQWidget = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Can I get a prescription refill without seeing a doctor?",
      a: "Most refills can be requested with your prescription details. For certain medications, we may require doctor approval. Contact us or visit our location to process your refill quickly.",
      tag: "Prescriptions",
      tagColor: "#0f5c3a",
      tagBg: lightGreen,
    },
    {
      q: "Do you offer home delivery?",
      a: "Yes! We offer delivery within Nairobi for orders above KES 2,000. Delivery usually takes 2-4 hours. Call us to arrange or use our website ordering system.",
      tag: "Services",
      tagColor: "#16c79a",
      tagBg: lightGreen,
    },
    {
      q: "Which insurance providers do you accept?",
      a: "We work with NHIF, AAR, Britam, and most major insurance providers. Bring your card or member number during purchase for direct billing.",
      tag: "Insurance",
      tagColor: "#0f5c3a",
      tagBg: lightGreen,
    },
    {
      q: "Are generic medicines available?",
      a: "Yes, we stock both branded and quality generic medications. Generics are bioequivalent but more affordable. Ask our pharmacist for options.",
      tag: "Medications",
      tagColor: "#16c79a",
      tagBg: lightGreen,
    },
    {
      q: "Do you offer vaccination services?",
      a: "Yes, we provide immunization services including flu, typhoid, yellow fever, and others. Book ahead or walk in during operating hours.",
      tag: "Services",
      tagColor: "#16c79a",
      tagBg: lightGreen,
    },
    {
      q: "Can I check medication side effects here?",
      a: "Absolutely! Our qualified pharmacists are available for free consultations on drug interactions, side effects, and proper usage.",
      tag: "Consultation",
      tagColor: "#0f5c3a",
      tagBg: lightGreen,
    },
  ];

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <div>
          <span style={{
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: pharmacyGreen,
          }}>
            Questions?
          </span>
          <h5 className="mb-0 mt-1">Frequently Asked Questions</h5>
        </div>
      </Card.Header>

      <div style={{ maxHeight: "450px", overflowY: "auto" }}>
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} style={{ borderBottom: "0.5px solid #f0f0f0" }}>
              <div
                onClick={() => toggle(i)}
                style={{
                  padding: "13px 18px",
                  cursor: "pointer",
                  background: isOpen ? "#F0FFFC" : "transparent",
                  transition: "background 0.15s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1, minWidth: 0 }}>
                    <span style={{
                      fontSize: "9px",
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
                      color: isOpen ? pharmacyGreen : "#1a1a2e",
                      lineHeight: 1.5,
                    }}>
                      {faq.q}
                    </p>
                  </div>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    style={{
                      fontSize: "12px",
                      color: isOpen ? pharmacyGreen : "#ccc",
                      flexShrink: 0,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  />
                </div>

                {isOpen && (
                  <div style={{
                    marginTop: "12px",
                    paddingTop: "12px",
                    borderTop: "0.5px solid #e8f5e9",
                  }}>
                    <p style={{ margin: 0, fontSize: "13px", color: "#555", lineHeight: 1.7 }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

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
          More questions? Reach out anytime.
        </p>

        <a
          href="https://wa.me/254713077490"
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm"
          style={{
            backgroundColor: "#16c79a",
            borderColor: "#16c79a",
            color: "#fff",
            fontSize: "13px",
            textDecoration: "none",
            padding: "6px 12px",
            borderRadius: "6px",
          }}
        >
          <FontAwesomeIcon icon={faWhatsapp} className="me-2" />
          Chat via WhatsApp
        </a>
      </div>
    </Card>
  );
};