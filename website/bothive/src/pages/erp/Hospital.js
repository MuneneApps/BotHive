import React from "react";
import { Col, Row } from "@themesberg/react-bootstrap";

import {
  HospitalHeroWidget,
  HospitalOverviewWidget,
  HospitalModulesWidget,
  HospitalReportsWidget,
  HospitalWhyChooseWidget,
  HospitalChallengesWidget,
  HospitalFeaturesWidget,
  HospitalGetStartedWidget,
} from "../../components/Hospitalerpwidgets";

export default function HospitalDashboard() {
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

        .hospital-page-row {
          align-items: stretch;
        }
      `}</style>

      {/* HERO SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <HospitalHeroWidget />
        </Col>
      </Row>

      {/* OVERVIEW SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <HospitalOverviewWidget />
        </Col>
      </Row>

      {/* MODULES SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <HospitalModulesWidget />
        </Col>
      </Row>

      {/* REPORTS SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <HospitalReportsWidget />
        </Col>
      </Row>

      {/* WHY CHOOSE SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <HospitalWhyChooseWidget />
        </Col>
      </Row>

      {/* CHALLENGES SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <HospitalChallengesWidget />
        </Col>
      </Row>

      {/* FEATURES SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <HospitalFeaturesWidget />
        </Col>
      </Row>

      {/* GET STARTED SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <HospitalGetStartedWidget />
        </Col>
      </Row>
    </>
  );
}