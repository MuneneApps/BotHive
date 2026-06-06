import React from "react";
import { Col, Row } from "@themesberg/react-bootstrap";

import {
  SupermarketHeroWidget,
  SupermarketOverviewWidget,
  SupermarketFeaturesWidget,
  SupermarketAdvantagesWidget,
  SupermarketSpecsWidget,
  SupermarketStoreTypesWidget,
  SupermarketQuickContactWidget,
  SupermarketCTAWidget,
} from "../../components/SupermarketWidgets";

export default function Supermarket() {
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
          <SupermarketHeroWidget />
        </Col>
      </Row>

      {/* MAIN LAYOUT */}
      <Row className="dashboard-cols-row">

        {/* LEFT COLUMN */}
        <Col xs={12} xl={8} className="dashboard-left-col">
          <Row>

            {/* Overview */}
            <Col xs={12} className="mb-4">
              <SupermarketOverviewWidget />
            </Col>

            {/* Features Grid */}
            <Col xs={12} className="mb-4">
              <SupermarketFeaturesWidget />
            </Col>

            {/* Advantages */}
            <Col xs={12} className="mb-4">
              <SupermarketAdvantagesWidget />
            </Col>

            {/* CTA Banner */}
            <Col xs={12} className="mb-4">
              <SupermarketCTAWidget />
            </Col>

          </Row>
        </Col>

        {/* RIGHT COLUMN */}
        <Col xs={12} xl={4} className="dashboard-right-col">
          <Row>

            {/* Quick Contact */}
            <Col xs={12} className="mb-4">
              <SupermarketQuickContactWidget />
            </Col>

            {/* Store Types */}
            <Col xs={12} className="mb-4">
              <SupermarketStoreTypesWidget />
            </Col>

            {/* System Specs */}
            <Col xs={12} className="mb-4">
              <SupermarketSpecsWidget />
            </Col>

          </Row>
        </Col>

      </Row>
    </>
  );
}