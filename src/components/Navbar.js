import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCog, faEnvelopeOpen, faSearch, faSignOutAlt, faUserShield, faUserPlus, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { Nav, Form, Navbar, Dropdown, Container, ListGroup, InputGroup } from '@themesberg/react-bootstrap';

export default (props) => {

  return (
    <Navbar variant="dark" expanded className="ps-0 pe-2 pb-0">
      <Container fluid className="px-0">
        <div className="d-flex justify-content-between w-100">

          {/* Hero Tagline Section */}
          <div className="d-flex align-items-center" style={{ marginTop: "12px", marginBottom: "12px" }}>
            <div style={{
              background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
              borderRadius: "12px",
              padding: "10px 20px",
              maxWidth: "600px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
            }}>
              <p style={{
                margin: 0,
                fontSize: "clamp(0.75rem, 1.5vw, 0.95rem)",
                fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
                fontWeight: 600,
                letterSpacing: "0.3px",
                lineHeight: "1.4",
                background: "linear-gradient(90deg, #ffffff 0%, #a8edea 50%, #fed6e3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>
                🚀 Start selling smarter today — custom POS systems, stunning websites, and fast, secure hosting built for your business.
              </p>
            </div>
          </div>

          <Nav className="align-items-center">

            {/* Newsletter / Bell Dropdown */}
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} className="text-dark icon-notifications me-lg-3">
                <span className="icon icon-sm">
                  <FontAwesomeIcon icon={faBell} className="bell-shake" />
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-center mt-2 py-0">
                <ListGroup className="list-group-flush">
                  <Nav.Link href="#" className="text-center text-primary fw-bold border-bottom border-light py-3">
                    Stay Updated
                  </Nav.Link>
                  <ListGroup.Item className="border-bottom border-light px-4 py-4">
                    <p className="text-center text-muted mb-3" style={{ fontSize: "0.85rem" }}>
                      Join our newsletter to receive notifications, offers and more on growing your business.
                    </p>
                    <Form onSubmit={(e) => e.preventDefault()}>
                      <InputGroup className="input-group-merge mb-2">
                        <InputGroup.Text><FontAwesomeIcon icon={faEnvelopeOpen} /></InputGroup.Text>
                        <Form.Control type="email" placeholder="Enter your email" required />
                      </InputGroup>
                      <div className="d-grid">
                        <button type="submit" className="btn btn-primary btn-sm">Subscribe</button>
                      </div>
                    </Form>
                  </ListGroup.Item>
                </ListGroup>
              </Dropdown.Menu>
            </Dropdown>

            {/* Login / Create Account Dropdown */}
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
                <div className="media d-flex align-items-center">
                  <div
                    className="user-avatar md-avatar rounded-circle bg-primary d-flex align-items-center justify-content-center"
                    style={{ width: 40, height: 40 }}
                  >
                    <FontAwesomeIcon icon={faUserCircle} className="text-white" style={{ fontSize: "1.3rem" }} />
                  </div>
                  <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                    <span className="mb-0 font-small fw-bold">Account</span>
                  </div>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
                <Dropdown.Item className="fw-bold" href="/examples/sign-in">
                  <FontAwesomeIcon icon={faSignInAlt} className="text-primary me-2" /> Login
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="fw-bold" href="/examples/sign-up">
                  <FontAwesomeIcon icon={faUserPlus} className="text-success me-2" /> Create Account
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};