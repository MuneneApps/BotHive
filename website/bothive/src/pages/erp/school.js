import React from "react";
import { Col, Row } from "@themesberg/react-bootstrap";

import {
  SchoolHeroWidget,
  SchoolOverviewWidget,
  SchoolModulesWidget,
  SchoolReportsWidget,
  SchoolWhyChooseWidget,
  SchoolChallengesWidget,
  SchoolFeaturesWidget,
  SchoolGetStartedWidget,
} from "../../components/schoolerpwidgets";

export default function SchoolDashboard() {
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

        .school-page-row {
          align-items: stretch;
        }
      `}</style>

      {/* HERO SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <SchoolHeroWidget />
        </Col>
      </Row>

      {/* OVERVIEW SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <SchoolOverviewWidget />
        </Col>
      </Row>

      {/* MODULES SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <SchoolModulesWidget />
        </Col>
      </Row>

      {/* REPORTS SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <SchoolReportsWidget />
        </Col>
      </Row>

      {/* WHY CHOOSE SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <SchoolWhyChooseWidget />
        </Col>
      </Row>

      {/* CHALLENGES SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <SchoolChallengesWidget />
        </Col>
      </Row>

      {/* FEATURES SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <SchoolFeaturesWidget />
        </Col>
      </Row>

      {/* GET STARTED SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <SchoolGetStartedWidget />
        </Col>
      </Row>
    </>
  );
}