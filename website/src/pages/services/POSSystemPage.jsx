import React from "react";
import { Col, Row } from "@themesberg/react-bootstrap";

import {
  POSHeroWidget,
  POSSolutionsWidget,
  WhyBothiveWidget,
  POSIntegrationsWidget,
  POSPricingWidget,
  POSPlansSummaryWidget,
  POSQuickContactWidget,
} from "../../components/POSWidgets";

// Re-use existing widgets from your Widgets.js
import {
  SocialMediaWidget,
  EtimsAdWidget,
  MaintenanceAdWidget,
  GoogleReviewWidget,
  PaymentIntegrationWidget,
  BothivePOSWebsitePackageWidget,
  POSFeaturesWidget,
  WebsiteFeaturesWidget,
} from "../../components/Widgets";

export default function POSDashboard() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800;900&display=swap');

        @media (min-width: 768px) {
          .content {
            margin-left: auto !important;
            margin-right: auto !important;
            padding-left: 60px !important;
            padding-right: 60px !important;
            max-width: 1200px !important;
          }
        }

        .pos-dashboard-row {
          align-items: stretch;
        }

        .pos-left-col,
        .pos-right-col {
          display: flex;
          flex-direction: column;
        }
      `}</style>

      {/* ── HERO BANNER ── */}
      <Row className="justify-content-md-center">
        <Col xs={12} className="mb-4">
          <POSHeroWidget />
        </Col>
      </Row>

      {/* ── TOP PROMO ROW ── */}
      <Row className="justify-content-md-center">

        {/* eTIMS */}
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <EtimsAdWidget
            onLearnMore={() => window.open("https://etims.kra.go.ke", "_blank")}
          />
        </Col>

        {/* QuickBooks */}
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <MaintenanceAdWidget
            onContact={() => window.open("https://wa.me/254713077490", "_blank")}
          />
        </Col>

        {/* AI Agents */}
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <GoogleReviewWidget
            onViewMore={() => window.open("https://bothive.co.ke", "_blank")}
          />
        </Col>

      </Row>

      {/* ── MAIN TWO-COLUMN LAYOUT ── */}
      <Row className="pos-dashboard-row">

        {/* ── LEFT COLUMN (main content) ── */}
        <Col xs={12} xl={8} className="pos-left-col">
          <Row>

            {/* POS Solutions Grid */}
            <Col xs={12} className="mb-4">
              <POSSolutionsWidget />
            </Col>

            {/* Why Bothive */}
            <Col xs={12} className="mb-4">
              <WhyBothiveWidget />
            </Col>

            {/* Integrations */}
            <Col xs={12} className="mb-4">
              <POSIntegrationsWidget />
            </Col>

            {/* Pricing Plans */}
            <Col xs={12} className="mb-4">
              <POSPricingWidget />
            </Col>

           

          </Row>
        </Col>

        {/* ── RIGHT COLUMN (sidebar) ── */}
        <Col xs={12} xl={4} className="pos-right-col">
          <Row>

            {/* Quick Contact */}
            <Col xs={12} className="mb-4">
              <POSQuickContactWidget />
            </Col>

            {/* Plans Summary */}
            <Col xs={12} className="mb-4">
              <POSPlansSummaryWidget />
            </Col>

            {/* Payment Integration */}
            <Col xs={12} className="mb-4">
              <PaymentIntegrationWidget />
            </Col>

            {/* POS + Website Package */}
            <Col xs={12} className="mb-4">
              <BothivePOSWebsitePackageWidget />
            </Col>

            {/* POS Features Grid */}
            <Col xs={12} className="mb-4">
              <POSFeaturesWidget />
            </Col>

            {/* Website Features Grid */}
            <Col xs={12} className="mb-4">
              <WebsiteFeaturesWidget />
            </Col>

            {/* Social Media */}
            <Col xs={12} className="mb-4">
              <SocialMediaWidget />
            </Col>

          </Row>
        </Col>

      </Row>
    </>
  );
}
