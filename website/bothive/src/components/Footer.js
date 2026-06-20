import React from "react";
import { Row, Col } from "@themesberg/react-bootstrap";
import termsPdf from "./terms-and-conditions.pdf";

export default () => {
  return (
    <div>
      {/* FOOTER ONLY */}
      <footer className="footer section py-4">
        <Row>
          <Col xs={12}>
            <p className="mb-0 text-center text-muted small">
              <a
                href={termsPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted"
                style={{ textDecoration: "underline" }}
              >
                Terms and Conditions
              </a>
              . Copyright © 2026 Bothive
            </p>
          </Col>
        </Row>
      </footer>
    </div>
  );
};