import React from "react";
import { Col, Row } from "@themesberg/react-bootstrap";

import {
  RestaurantHeroWidget,
  RestaurantOverviewWidget,
  RestaurantFeaturesWidget,
  RestaurantOrderFlowWidget,
  RestaurantBenefitsWidget,
  RestaurantTypesWidget,
  RestaurantSpecsWidget,
  RestaurantQuickContactWidget,
  RestaurantCTAWidget,
} from "../../components/RestaurantWidgets";

export default function Restaurant() {
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
          <RestaurantHeroWidget />
        </Col>
      </Row>

      {/* MAIN LAYOUT */}
      <Row className="dashboard-cols-row">

        {/* LEFT COLUMN */}
        <Col xs={12} xl={8} className="dashboard-left-col">
          <Row>

            {/* Overview */}
            <Col xs={12} className="mb-4">
              <RestaurantOverviewWidget />
            </Col>

            {/* Order Flow Highlight */}
            <Col xs={12} className="mb-4">
              <RestaurantOrderFlowWidget />
            </Col>

            {/* Features Grid */}
            <Col xs={12} className="mb-4">
              <RestaurantFeaturesWidget />
            </Col>

            {/* Benefits */}
            <Col xs={12} className="mb-4">
              <RestaurantBenefitsWidget />
            </Col>

            {/* CTA Banner */}
            <Col xs={12} className="mb-4">
              <RestaurantCTAWidget />
            </Col>

          </Row>
        </Col>

        {/* RIGHT COLUMN */}
        <Col xs={12} xl={4} className="dashboard-right-col">
          <Row>

            {/* Quick Contact */}
            <Col xs={12} className="mb-4">
              <RestaurantQuickContactWidget />
            </Col>

            {/* Establishment Types */}
            <Col xs={12} className="mb-4">
              <RestaurantTypesWidget />
            </Col>

            {/* System Specs */}
            <Col xs={12} className="mb-4">
              <RestaurantSpecsWidget />
            </Col>

          </Row>
        </Col>

      </Row>
    </>
  );
}