import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';

import { Col, Row } from '@themesberg/react-bootstrap';
import { SalesValueWidget, SalesValueWidgetPhone, EtimsAdWidget, MaintenanceAdWidget, GoogleReviewWidget, ProjectsWidget, ConsultationWidget, LocationWidget, SocialMediaWidget, DoneProjectsWidget, AboutBothiveWidget, BothiveAIWidget } from "../../components/Widgets";
import { PageVisitsTable } from "../../components/Tables";
import { trafficShares, totalOrders } from "../../data/charts";

export default () => {
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
      `}</style>

      <BothiveAIWidget />

      <Row className="justify-content-md-center">

        <Col xs={12} className="mb-4 d-none d-sm-block">
          <SalesValueWidget
            title="Sales Value"
            value="10,567"
            percentage={10.57}
          />
        </Col>
        <Col xs={12} className="mb-4 d-sm-none">
          <SalesValueWidgetPhone
            title="Sales Value"
            value="10,567"
            percentage={10.57}
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <EtimsAdWidget
            onLearnMore={() => window.open("https://etims.kra.go.ke", "_blank")}
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <MaintenanceAdWidget
            onContact={() => window.open("https://wa.me/your-number", "_blank")}
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <GoogleReviewWidget
            onViewMore={() => window.open("https://g.page/your-business/review", "_blank")}
          />
        </Col>

      </Row>

      <Row>
        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={8} className="mb-4">
              <Row>
                <Col xs={12} className="mb-4">
                  <ProjectsWidget />
                </Col>
                <Col xs={12} lg={6} className="mb-4">
                  <ConsultationWidget />
                </Col>
                <Col xs={12} lg={6} className="mb-4">
                  <LocationWidget />
                </Col>
              </Row>
            </Col>

            <Col xs={12} xl={4}>
              <Row>
                <Col xs={12} className="mb-4">
                  <SocialMediaWidget />
                </Col>
                <Col xs={12} className="px-0 mb-4">
                  <DoneProjectsWidget />
                </Col>
                <Col xs={12} className="px-0">
                  <AboutBothiveWidget />
                </Col>
              </Row>
            </Col>

          </Row>
        </Col>
      </Row>
    </>
  );
};