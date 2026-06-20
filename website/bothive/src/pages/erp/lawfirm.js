import React from "react";
import { Col, Row } from "@themesberg/react-bootstrap";

import {
  LawFirmHeroWidget,
  LawFirmOverviewWidget,
  LawFirmModulesWidget,
  LawFirmReportsWidget,
  LawFirmWhyChooseWidget,
  LawFirmChallengesWidget,
  LawFirmFeaturesWidget,
  LawFirmGetStartedWidget,
} from "../../components/lawerpwidgets";

export default function LawFirmDashboard() {
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

        .lawfirm-page-row {
          align-items: stretch;
        }
      `}</style>

      {/* HERO SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <LawFirmHeroWidget />
        </Col>
      </Row>

      {/* OVERVIEW SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <LawFirmOverviewWidget />
        </Col>
      </Row>

      {/* MODULES SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <LawFirmModulesWidget />
        </Col>
      </Row>

      {/* REPORTS SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <LawFirmReportsWidget />
        </Col>
      </Row>

      {/* WHY CHOOSE SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <LawFirmWhyChooseWidget />
        </Col>
      </Row>

      {/* CHALLENGES SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <LawFirmChallengesWidget />
        </Col>
      </Row>

      {/* FEATURES SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <LawFirmFeaturesWidget />
        </Col>
      </Row>

      {/* GET STARTED SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <LawFirmGetStartedWidget />
        </Col>
      </Row>
    </>
  );
}