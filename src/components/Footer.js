import React from "react";
import { Row, Col } from "@themesberg/react-bootstrap";

export default () => {
  return (
    <div>
      {/* FOOTER ONLY */}
      <footer className="footer section py-4">
        <Row>
          <Col xs={12}>
            <p className="mb-0 text-center text-muted small">
              Terms and Conditions Apply , Copyright © 2026 Bothive
            </p>
          </Col>
        </Row>
      </footer>
    </div>
  );
};