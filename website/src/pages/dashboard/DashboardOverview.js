import React from "react";
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
  ProjectsWidget,
  BothiveAIWidget,
  BlogWidget,
  FAQWidget,
  PaymentIntegrationWidget,
  BothivePOSWebsitePackageWidget,
  WebsiteFeaturesWidget,
  POSFeaturesWidget
} from "../../components/Widgets";

export default function DashboardOverview() {
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
          <SalesValueWidget
            title="Sales Value"
            value="10,567"
            percentage={10.57}
          />
        </Col>

        {/* Mobile Sales */}
        <Col xs={12} className="mb-4 d-sm-none">
          <SalesValueWidgetPhone
            title="Sales Value"
            value="10,567"
            percentage={10.57}
          />
        </Col>

        {/* ETIMS */}
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <EtimsAdWidget
            onLearnMore={() =>
              window.open("https://etims.kra.go.ke", "_blank")
            }
          />
        </Col>

        {/* Maintenance */}
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <MaintenanceAdWidget
            onContact={() =>
              window.open("https://wa.me/254700000000", "_blank")
            }
          />
        </Col>

        {/* Reviews */}
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <GoogleReviewWidget
            rating={4.9}
            totalReviews={128}
            onViewMore={() =>
              window.open(
                "https://g.page/r/your-business/review",
                "_blank"
              )
            }
          />
        </Col>

      </Row>

      {/* MAIN DASHBOARD */}
      <Row className="dashboard-cols-row">

        {/* LEFT COLUMN */}
        <Col xs={12} xl={8} className="dashboard-left-col">

          <Row>

            {/* Projects */}
            <Col xs={12} className="mb-4">
              <ProjectsWidget />
            </Col>

            {/* Consultation */}
            <Col xs={12} lg={6} className="mb-4">
              <ConsultationWidget />
            </Col>

            {/* Location */}
            <Col xs={12} lg={6} className="mb-4">
              <LocationWidget />
            </Col>

           

            {/* Blog */}
            <Col xs={12} className="mb-4">
              <BlogWidget />
            </Col>

            {/* FAQ */}
            <Col xs={12} className="mb-4">
              <FAQWidget />
            </Col>

            {/* Bottom Strip */}
            <Col xs={12} className="mb-4">
              <AboutBothiveWidget />
            </Col>

          </Row>

        </Col>

        {/* RIGHT COLUMN */}
        <Col xs={12} xl={4} className="dashboard-right-col">

          <Row>

            

            
 {/* Payment Integration */}
            <Col xs={12} className="mb-4">
              <PaymentIntegrationWidget />
            </Col>

            {/* POS + WEBSITE PACKAGE */}
            <Col xs={12} className="mb-4">
              <BothivePOSWebsitePackageWidget />
            </Col>
            {/* About */}
            


           


            <Col xs={12} className="mb-4">
  <POSFeaturesWidget />
</Col>

<Col xs={12} className="mb-4">
  <WebsiteFeaturesWidget />
</Col>

 {/* Projects Done */}
            <Col xs={12} className="mb-4">
              <DoneProjectsWidget />
            </Col>
{/* Social */}
            <Col xs={12} className="mb-4">
              <SocialMediaWidget />
            </Col>
            
          </Row>
        </Col>
      </Row>
    </>
  );
}