import React from "react";
import { Col, Row } from "@themesberg/react-bootstrap";

import {
  RetailHeroWidget,
  RetailOverviewWidget,
  RetailFeaturesWidget,
  RetailBenefitsWidget,
  RetailWhyUsWidget,
  RetailFAQWidget,
  RetailSpecsWidget,
  RetailBusinessTypesWidget,
  RetailQuickContactWidget,
  RetailCTAWidget,
} from "../../components/RetailWidgets";

export default function Retail() {
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

      {/* HERO */}
      <Row className="justify-content-md-center">
        <Col xs={12} className="mb-4">
          <RetailHeroWidget />
        </Col>
      </Row>

      {/* MAIN LAYOUT */}
      <Row className="dashboard-cols-row">

        {/* LEFT COLUMN */}
        <Col xs={12} xl={8} className="dashboard-left-col">
          <Row>

            {/* Overview */}
            <Col xs={12} className="mb-4">
              <RetailOverviewWidget />
            </Col>

            {/* Features Grid */}
            <Col xs={12} className="mb-4">
              <RetailFeaturesWidget />
            </Col>

            {/* Benefits */}
            <Col xs={12} className="mb-4">
              <RetailBenefitsWidget />
            </Col>

            {/* Why Choose Us */}
            <Col xs={12} className="mb-4">
              <RetailWhyUsWidget />
            </Col>

            {/* FAQ */}
            <Col xs={12} className="mb-4">
              <RetailFAQWidget />
            </Col>

            {/* CTA Banner */}
            <Col xs={12} className="mb-4">
              <RetailCTAWidget />
            </Col>

          </Row>
        </Col>

        {/* RIGHT COLUMN */}
        <Col xs={12} xl={4} className="dashboard-right-col">
          <Row>

            {/* Quick Contact */}
            <Col xs={12} className="mb-4">
              <RetailQuickContactWidget />
            </Col>

            {/* Business Types */}
            <Col xs={12} className="mb-4">
              <RetailBusinessTypesWidget />
            </Col>

            {/* System Specs */}
            <Col xs={12} className="mb-4">
              <RetailSpecsWidget />
            </Col>

          </Row>
        </Col>

      </Row>
    </>
  );
}