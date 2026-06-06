import React from "react";
import { Col, Row } from "@themesberg/react-bootstrap";

import {
  WinesHeroWidget,
  WinesOverviewWidget,
  WinesFeaturesWidget,
  WinesTheftWidget,
  WinesBenefitsWidget,
  WinesSpecsWidget,
  WinesStoreTypesWidget,
  WinesQuickContactWidget,
  WinesCTAWidget,
} from "../../components/WinesWidgets";

export default function Wines() {
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
          <WinesHeroWidget />
        </Col>
      </Row>

      {/* MAIN LAYOUT */}
      <Row className="dashboard-cols-row">

        {/* LEFT COLUMN */}
        <Col xs={12} xl={8} className="dashboard-left-col">
          <Row>

            {/* Overview */}
            <Col xs={12} className="mb-4">
              <WinesOverviewWidget />
            </Col>

            {/* Theft Prevention Highlight */}
            <Col xs={12} className="mb-4">
              <WinesTheftWidget />
            </Col>

            {/* Features Grid */}
            <Col xs={12} className="mb-4">
              <WinesFeaturesWidget />
            </Col>

            {/* Benefits */}
            <Col xs={12} className="mb-4">
              <WinesBenefitsWidget />
            </Col>

            {/* CTA Banner */}
            <Col xs={12} className="mb-4">
              <WinesCTAWidget />
            </Col>

          </Row>
        </Col>

        {/* RIGHT COLUMN */}
        <Col xs={12} xl={4} className="dashboard-right-col">
          <Row>

            {/* Quick Contact */}
            <Col xs={12} className="mb-4">
              <WinesQuickContactWidget />
            </Col>

            {/* Store Types */}
            <Col xs={12} className="mb-4">
              <WinesStoreTypesWidget />
            </Col>

            {/* System Specs */}
            <Col xs={12} className="mb-4">
              <WinesSpecsWidget />
            </Col>

          </Row>
        </Col>

      </Row>
    </>
  );
}