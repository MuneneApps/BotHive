import React from "react";
import { Col, Row } from "@themesberg/react-bootstrap";

import {
  RealEstateHeroWidget,
  RealEstateOverviewWidget,
  RealEstateModulesWidget,
  RealEstateReportsWidget,
  RealEstateWhyChooseWidget,
  RealEstateChallengesWidget,
  RealEstateFeaturesWidget,
  RealEstateGetStartedWidget,
} from "../../components/realestatewidgets";

export default function RealEstateDashboard() {
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

        .realestate-page-row {
          align-items: stretch;
        }
      `}</style>

      {/* HERO SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <RealEstateHeroWidget />
        </Col>
      </Row>

      {/* OVERVIEW SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <RealEstateOverviewWidget />
        </Col>
      </Row>

      {/* MODULES SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <RealEstateModulesWidget />
        </Col>
      </Row>

      {/* REPORTS SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <RealEstateReportsWidget />
        </Col>
      </Row>

      {/* WHY CHOOSE SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <RealEstateWhyChooseWidget />
        </Col>
      </Row>

      {/* CHALLENGES SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <RealEstateChallengesWidget />
        </Col>
      </Row>

      {/* FEATURES SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <RealEstateFeaturesWidget />
        </Col>
      </Row>

      {/* GET STARTED SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <RealEstateGetStartedWidget />
        </Col>
      </Row>
    </>
  );
}