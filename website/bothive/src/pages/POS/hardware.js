import React from "react";
import { Col, Row } from "@themesberg/react-bootstrap";

import {
  HardwareHeroWidget,
  HardwareFeaturesWidget,
  HardwareReportsWidget,
  HardwareWhyChooseWidget,
  HardwareChallengesWidget,
  HardwareKeyFeaturesWidget,
  HardwareGetStartedWidget,
} from "../../components/hardwarewidgets";

export default function HardwareDashboard() {
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

        .hardware-page-row {
          align-items: stretch;
        }
      `}</style>

      {/* HERO SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <HardwareHeroWidget />
        </Col>
      </Row>

      {/* FEATURES SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <HardwareFeaturesWidget />
        </Col>
      </Row>

      {/* REPORTS SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <HardwareReportsWidget />
        </Col>
      </Row>

      {/* WHY CHOOSE SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <HardwareWhyChooseWidget />
        </Col>
      </Row>

      {/* CHALLENGES SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <HardwareChallengesWidget />
        </Col>
      </Row>

      {/* KEY FEATURES SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <HardwareKeyFeaturesWidget />
        </Col>
      </Row>

      {/* GET STARTED SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <HardwareGetStartedWidget />
        </Col>
      </Row>
    </>
  );
}