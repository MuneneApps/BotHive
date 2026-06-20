import React, { useRef } from "react";
import { Col, Row } from "@themesberg/react-bootstrap";

import {
  PharmacySalesWidget,
  MedicationStockWidget,
  PrescriptionTrackerWidget,
  ExpiryAlertsWidget,
  PatientManagementWidget,
  InsurancePaymentWidget,
  PharmacyComplianceWidget,
  SupplierOrderingWidget,
  PharmaReportsWidget,
  PharmacyLocationWidget,
  PharmacyAboutWidget,
  PharmacyFAQWidget,
} from "../../components/pharmacywidgets";

export default function PharmacyDashboard() {
  const consultationRef = useRef(null);

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

        .pharmacy-dashboard-cols-row {
          align-items: stretch;
        }

        .pharmacy-dashboard-left-col,
        .pharmacy-dashboard-right-col {
          display: flex;
          flex-direction: column;
        }
      `}</style>

      {/* TOP HERO SECTION */}
      <Row className="justify-content-md-center mb-4">
        <Col xs={12} className="mb-4">
          <div
            style={{
              background: "linear-gradient(135deg, #1a472a 0%, #0f5c3a 50%, #0a3d2a 100%)",
              borderRadius: "16px",
              padding: "32px 24px",
              color: "#fff",
              textAlign: "center",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            }}
          >
            <h2 style={{ fontSize: "32px", fontWeight: 700, marginBottom: "10px" }}>
              💊 Pharmacy Management System
            </h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", marginBottom: 0 }}>
              Real-time inventory, prescription tracking, patient management & compliance — all in one system
            </p>
          </div>
        </Col>
      </Row>

      {/* TOP WIDGETS */}
      <Row className="justify-content-md-center mb-4">
        {/* Pharmacy Sales */}
        <Col xs={12} sm={6} xl={3} className="mb-4">
          <PharmacySalesWidget />
        </Col>

        {/* Stock Overview */}
        <Col xs={12} sm={6} xl={3} className="mb-4">
          <MedicationStockWidget />
        </Col>

        {/* Expiry Alerts */}
        <Col xs={12} sm={6} xl={3} className="mb-4">
          <ExpiryAlertsWidget />
        </Col>

        {/* Compliance */}
        <Col xs={12} sm={6} xl={3} className="mb-4">
          <PharmacyComplianceWidget />
        </Col>
      </Row>

      {/* MAIN DASHBOARD */}
      <Row className="pharmacy-dashboard-cols-row">
        {/* LEFT COLUMN */}
        <Col xs={12} xl={8} className="pharmacy-dashboard-left-col">
          <Row>
            {/* Prescription Tracker */}
            <Col xs={12} className="mb-4">
              <PrescriptionTrackerWidget />
            </Col>

            {/* Patient Management & Supplier */}
            <Col xs={12} lg={6} className="mb-4">
              <PatientManagementWidget />
            </Col>

            <Col xs={12} lg={6} className="mb-4">
              <SupplierOrderingWidget />
            </Col>

            {/* Insurance & Payment */}
            <Col xs={12} className="mb-4">
              <InsurancePaymentWidget />
            </Col>

            {/* Reports */}
            <Col xs={12} className="mb-4">
              <PharmaReportsWidget />
            </Col>

            {/* Location */}
            <Col xs={12} className="mb-4">
              <PharmacyLocationWidget />
            </Col>

            {/* FAQ */}
            <Col xs={12} className="mb-4">
              <PharmacyFAQWidget />
            </Col>

            {/* About - desktop only */}
            <Col xs={12} className="mb-4 d-none d-xl-block">
              <PharmacyAboutWidget />
            </Col>
          </Row>
        </Col>

        {/* RIGHT COLUMN */}
        <Col xs={12} xl={4} className="pharmacy-dashboard-right-col">
          <Row>
            {/* Quick Actions / Info Card */}
            <Col xs={12} className="mb-4">
              <div
                style={{
                  background: "linear-gradient(135deg, #1a472a 0%, #0f5c3a 100%)",
                  borderRadius: "12px",
                  padding: "20px",
                  color: "#fff",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                <h6 style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", opacity: 0.8, marginBottom: "12px" }}>
                  Quick Actions
                </h6>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <button
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      border: "1px solid rgba(255,255,255,0.3)",
                      color: "#fff",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontSize: "13px",
                      fontWeight: 500,
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.3)"}
                    onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
                  >
                    ➕ New Prescription
                  </button>
                  <button
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      border: "1px solid rgba(255,255,255,0.3)",
                      color: "#fff",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontSize: "13px",
                      fontWeight: 500,
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.3)"}
                    onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
                  >
                    📦 Check Stock
                  </button>
                  <button
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      border: "1px solid rgba(255,255,255,0.3)",
                      color: "#fff",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontSize: "13px",
                      fontWeight: 500,
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.3)"}
                    onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
                  >
                    🔔 View Alerts
                  </button>
                </div>
              </div>
            </Col>

            {/* About - mobile */}
            <Col xs={12} className="mb-4 d-xl-none">
              <PharmacyAboutWidget />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}