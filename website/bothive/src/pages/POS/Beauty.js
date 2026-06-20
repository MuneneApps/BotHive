import React from "react";
import { Col, Row } from "@themesberg/react-bootstrap";

import {
  BeautyHeroWidget,
  BeautyFeaturesWidget,
  BeautyReportsWidget,
  BeautyWhyChooseWidget,
  BeautyChallengesWidget,
  BeautyKeyFeaturesWidget,
  BeautyGetStartedWidget,
} from "../../components/beautywidgets";

export default function BeautyDashboard() {
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

        .beauty-page-row {
          align-items: stretch;
        }
      `}</style>

      {/* HERO SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <BeautyHeroWidget />
        </Col>
      </Row>

      {/* FEATURES SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <BeautyFeaturesWidget />
        </Col>
      </Row>

      {/* REPORTS SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <BeautyReportsWidget />
        </Col>
      </Row>

      {/* WHY CHOOSE SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <BeautyWhyChooseWidget />
        </Col>
      </Row>

      {/* CHALLENGES SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <BeautyChallengesWidget />
        </Col>
      </Row>

      {/* KEY FEATURES SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <BeautyKeyFeaturesWidget />
        </Col>
      </Row>

      {/* GET STARTED SECTION */}
      <Row className="mb-4">
        <Col xs={12}>
          <BeautyGetStartedWidget />
        </Col>
      </Row>
    </>
  );
}