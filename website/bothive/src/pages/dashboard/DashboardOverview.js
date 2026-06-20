import React, { useRef } from "react";
import { Col, Row } from "@themesberg/react-bootstrap";

import {
  SocialMediaWidget,
  DoneProjectsWidget,
  ConsultationWidget,
  SalesValueWidget,
  SalesValueWidgetPhone,
  GoogleReviewWidget,
  EtimsAdWidget,
  MaintenanceAdWidget,
  LocationWidget,
  AboutBothiveWidget,
  BothiveAIWidget,
  BlogWidget,
  FAQWidget,
  PaymentIntegrationWidget,
  BothivePOSWebsitePackageWidget,
  SpecialPackageOfferWidget,
} from "../../components/Widgets";

import { POSSolutionsWidget } from "../../components/POSWidgets";

export default function DashboardOverview() {
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

        .dashboard-cols-row {
          align-items: stretch;
        }

        .dashboard-left-col,
        .dashboard-right-col {
          display: flex;
          flex-direction: column;
        }
      `}</style>

      {/* AI Widget */}
      <BothiveAIWidget />

      {/* TOP SECTION */}
      <Row className="justify-content-md-center">

        {/* Desktop Sales */}
        <Col xs={12} className="mb-4 d-none d-sm-block">
          <SalesValueWidget />
        </Col>

        {/* Mobile Sales */}
        <Col xs={12} className="mb-4 d-sm-none">
          <SalesValueWidgetPhone />
        </Col>

        {/* ETIMS */}
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <EtimsAdWidget />
        </Col>

        {/* Maintenance */}
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <MaintenanceAdWidget consultationRef={consultationRef} />
        </Col>

        {/* AI & Web3 */}
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <GoogleReviewWidget />
        </Col>

      </Row>

      {/* MAIN DASHBOARD */}
      <Row className="dashboard-cols-row">

        {/* LEFT COLUMN */}
        <Col xs={12} xl={8} className="dashboard-left-col">

          <Row>

            {/* Payment Integration - mobile only, above POS Solutions */}
            <Col xs={12} className="mb-4 d-xl-none">
              <PaymentIntegrationWidget />
            </Col>

            {/* POS Solutions */}
            <Col xs={12} className="mb-4">
              <POSSolutionsWidget />
            </Col>

            {/* Special Package Offer - mobile only, below POS Solutions */}
            <Col xs={12} className="mb-4 d-xl-none">
              <SpecialPackageOfferWidget />
            </Col>

            {/* Consultation */}
            <Col xs={12} lg={6} className="mb-4" ref={consultationRef}>
              <ConsultationWidget />
            </Col>

            {/* Location */}
            <Col xs={12} lg={6} className="mb-4">
              <LocationWidget />
            </Col>

            {/* FAQ */}
            <Col xs={12} className="mb-4">
              <FAQWidget />
            </Col>

            {/* About Bothive - desktop only, hidden on mobile */}
            <Col xs={12} className="mb-4 d-none d-xl-block">
              <AboutBothiveWidget />
            </Col>

          </Row>

        </Col>

        {/* RIGHT COLUMN */}
        <Col xs={12} xl={4} className="dashboard-right-col">

          <Row>

            {/* Payment Integration - desktop only, original position */}
            <Col xs={12} className="mb-4 d-none d-xl-block">
              <PaymentIntegrationWidget />
            </Col>

            {/* Pricing & Plans - desktop only, original position */}
            <Col xs={12} className="mb-4 d-none d-xl-block">
              <SpecialPackageOfferWidget />
            </Col>

            {/* Projects Done / Reviews */}
            <Col xs={12} className="mb-4">
              <DoneProjectsWidget />
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