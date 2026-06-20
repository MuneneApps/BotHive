import React from "react";
import { Col, Row } from "@themesberg/react-bootstrap";

import {
  ElectronicsHeroWidget,
  ElectronicsFeaturesWidget,
  ElectronicsReportsWidget,
  ElectronicsWhyChooseWidget,
  ElectronicsChallengesWidget,
  ElectronicsKeyFeaturesWidget,
  ElectronicsGetStartedWidget,
} from "../../components/electronicswidgets";

export default function ElectronicsDashboard() {
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

        .electronics-page-row {
          align-items: stretch;
        }
      `}</style>

      {/* HERO SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <ElectronicsHeroWidget />
        </Col>
      </Row>

      {/* FEATURES SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <ElectronicsFeaturesWidget />
        </Col>
      </Row>

      {/* REPORTS SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <ElectronicsReportsWidget />
        </Col>
      </Row>

      {/* WHY CHOOSE SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <ElectronicsWhyChooseWidget />
        </Col>
      </Row>

      {/* CHALLENGES SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <ElectronicsChallengesWidget />
        </Col>
      </Row>

      {/* KEY FEATURES SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <ElectronicsKeyFeaturesWidget />
        </Col>
      </Row>

      {/* GET STARTED SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <ElectronicsGetStartedWidget />
        </Col>
      </Row>
    </>
  );
}