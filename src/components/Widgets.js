import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faChartArea, faChartBar, faChartLine, faFlagUsa, faFolderOpen, faGlobeEurope, faPaperclip, faUserPlus, faCashRegister, faStar, faStarHalfAlt, faRobot, faHeadset, faTimes, faUndo, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faBootstrap, faReact, faVuejs, faGoogle, faFacebook, faInstagram, faTiktok, faTwitter, faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

import { Col, Row, Card, Image, Button, ListGroup, ProgressBar } from '@themesberg/react-bootstrap';

import { CircleChart, BarChart, SalesValueChart, SalesValueChartphone } from "./Charts";

import Profile1 from "../assets/img/team/profile-picture-1.jpg";
import ProfileCover from "../assets/img/profile-cover.jpg";
import EtimsLogo from "../assets/img/etims.jpg";
import MaintenanceImg from "../assets/img/maintainance.png";

import teamMembers from "../data/teamMembers";

export const SocialMediaWidget = () => {
  const platforms = [
    { name: "Facebook", icon: faFacebook, color: "#1877F2", bg: "#E8F0FE", handle: "@yourbusiness", url: "https://facebook.com/yourbusiness" },
    { name: "Instagram", icon: faInstagram, color: "#E1306C", bg: "#FCE4EC", handle: "@yourbusiness", url: "https://instagram.com/yourbusiness" },
    { name: "TikTok", icon: faTiktok, color: "#010101", bg: "#F3F3F3", handle: "@yourbusiness", url: "https://tiktok.com/@yourbusiness" },
    { name: "X", icon: faTwitter, color: "#14171A", bg: "#F0F0F0", handle: "@yourbusiness", url: "https://x.com/yourbusiness" },
    { name: "Telegram", icon: faTelegram, color: "#0088CC", bg: "#E3F2FD", handle: "@yourbusiness", url: "https://t.me/yourbusiness" },
    { name: "WhatsApp", icon: faWhatsapp, color: "#25D366", bg: "#E8F5E9", handle: "+254 700 000000", url: "https://wa.me/254700000000" },
  ];

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Find Us Online</h5>
        <small className="text-muted">Follow & connect with us</small>
      </Card.Header>
      <Card.Body>
        <Row className="g-3">
          {platforms.map((p, i) => (
            <Col xs={6} md={4} key={i}>
              <a href={p.url} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px 12px",
                    borderRadius: "10px",
                    background: p.bg,
                    cursor: "pointer",
                    transition: "opacity 0.2s",
                  }}
                  onMouseOver={e => e.currentTarget.style.opacity = 0.8}
                  onMouseOut={e => e.currentTarget.style.opacity = 1}
                >
                  <FontAwesomeIcon icon={p.icon} style={{ fontSize: "20px", color: p.color, flexShrink: 0 }} />
                  <div style={{ overflow: "hidden" }}>
                    <p style={{ margin: 0, fontSize: "13px", fontWeight: 500, color: p.color }}>{p.name}</p>
                    <p style={{ margin: 0, fontSize: "11px", color: "#888", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.handle}</p>
                  </div>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export const MaintenanceAdWidget = ({ onContact }) => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center">
          <Col xl={5} className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0">
            <img
              src={MaintenanceImg}
              alt="Maintenance & Support"
              style={{ width: "100%", maxWidth: "120px", height: "80px", objectFit: "cover", borderRadius: "8px" }}
            />
          </Col>
          <Col xs={12} xl={7} className="px-xl-0">
            <small className="text-muted d-block">POS & Web Support</small>
            <h3 className="mb-1" style={{ color: "#185FA5" }}>We've Got You</h3>
            <small className="d-block" style={{ color: "#444" }}>
              <span style={{ color: "#1D9E75", fontWeight: 500 }}>Remote & Onsite</span> POS maintenance
            </small>
            <small className="d-block" style={{ color: "#444" }}>
              <span style={{ color: "#1D9E75", fontWeight: 500 }}>24/7</span> Web design & hosting support
            </small>
            <div className="mt-2">
              <Button variant="outline-primary" size="sm" onClick={onContact}>
                Contact us
              </Button>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const ProfileCardWidget = () => {
  return (
    <Card border="light" className="text-center p-0 mb-4">
      <div style={{ backgroundImage: `url(${ProfileCover})` }} className="profile-cover rounded-top" />
      <Card.Body className="pb-5">
        <Card.Img src={Profile1} alt="Neil Portrait" className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4" />
        <Card.Title>Neil Sims</Card.Title>
        <Card.Subtitle className="fw-normal">Senior Software Engineer</Card.Subtitle>
        <Card.Text className="text-gray mb-4">New York, USA</Card.Text>
        <Button variant="primary" size="sm" className="me-2">
          <FontAwesomeIcon icon={faUserPlus} className="me-1" /> Connect
        </Button>
        <Button variant="secondary" size="sm">Send Message</Button>
      </Card.Body>
    </Card>
  );
};

export const ChoosePhotoWidget = (props) => {
  const { title, photo } = props;
  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">{title}</h5>
        <div className="d-xl-flex align-items-center">
          <div className="user-avatar xl-avatar">
            <Image fluid rounded src={photo} />
          </div>
          <div className="file-field">
            <div className="d-flex justify-content-xl-center ms-xl-3">
              <div className="d-flex">
                <span className="icon icon-md">
                  <FontAwesomeIcon icon={faPaperclip} className="me-3" />
                </span>
                <input type="file" />
                <div className="d-md-block text-start">
                  <div className="fw-normal text-dark mb-1">Choose Image</div>
                  <div className="text-gray small">JPG, GIF or PNG. Max size of 800K</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export const CounterWidget = (props) => {
  const { icon, iconColor, category, title, period, percentage } = props;
  const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center">
          <Col xl={5} className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0">
            <div className={`icon icon-shape icon-md icon-${iconColor} rounded me-4 me-sm-0`}>
              <FontAwesomeIcon icon={icon} />
            </div>
            <div className="d-sm-none">
              <h5>{category}</h5>
              <h3 className="mb-1">{title}</h3>
            </div>
          </Col>
          <Col xs={12} xl={7} className="px-xl-0">
            <div className="d-none d-sm-block">
              <h5>{category}</h5>
              <h3 className="mb-1">{title}</h3>
            </div>
            <small>{period}, <FontAwesomeIcon icon={faGlobeEurope} size="xs" /> WorldWide</small>
            <div className="small mt-2">
              <FontAwesomeIcon icon={percentageIcon} className={`${percentageColor} me-1`} />
              <span className={`${percentageColor} fw-bold`}>{percentage}%</span> Since last month
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const EtimsAdWidget = ({ onLearnMore }) => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center">
          <Col xl={5} className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0">
            <img src={EtimsLogo} alt="KRA eTIMS" style={{ width: "100%", maxWidth: "120px", height: "auto", objectFit: "contain" }} />
          </Col>
          <Col xs={12} xl={7} className="px-xl-0">
            <small className="text-muted d-block">Tax Compliance</small>
            <h3 className="mb-1" style={{ color: "#C8102E" }}>eTIMS</h3>
            <small className="text-dark fw-bold d-block">Now integrated with your dashboard</small>
            <small className="text-muted d-block mt-1">KRA-compliant invoicing, automated & real-time.</small>
            <div className="mt-2">
              <Button variant="outline-danger" size="sm" onClick={onLearnMore}>Learn more</Button>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const GoogleReviewWidget = (props) => {
  const { rating = 4.5, totalReviews = 128, onViewMore } = props;
  const renderStars = (rating) => {
    return [1, 2, 3, 4, 5].map((star) => {
      if (rating >= star) return <FontAwesomeIcon key={star} icon={faStar} className="text-warning" />;
      if (rating >= star - 0.5) return <FontAwesomeIcon key={star} icon={faStarHalfAlt} className="text-warning" />;
      return <FontAwesomeIcon key={star} icon={faStarEmpty} className="text-warning" />;
    });
  };
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center">
          <Col xl={5} className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0">
            <div className="icon icon-shape icon-md icon-shape-secondary rounded me-4 me-sm-0">
              <FontAwesomeIcon icon={faGoogle} />
            </div>
            <div className="d-sm-none">
              <h5>Google Reviews</h5>
              <h3 className="mb-1">{rating}/5</h3>
            </div>
          </Col>
          <Col xs={12} xl={7} className="px-xl-0">
            <div className="d-none d-sm-block">
              <h5>Google Reviews</h5>
              <h3 className="mb-1">{rating}/5</h3>
            </div>
            <div className="mb-1">{renderStars(rating)}</div>
            <small className="text-muted">Based on {totalReviews} reviews</small>
            <div className="mt-2">
              <Button variant="outline-primary" size="sm" onClick={onViewMore}>View more</Button>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const CircleChartWidget = (props) => {
  const { title, data = [] } = props;
  const series = data.map(d => d.value);
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center">
          <Col xs={12} xl={5} className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0">
            <CircleChart series={series} />
          </Col>
          <Col xs={12} xl={7} className="px-xl-0">
            <h5 className="mb-3">{title}</h5>
            {data.map(d => (
              <h6 key={`circle-element-${d.id}`} className="fw-normal text-gray">
                <FontAwesomeIcon icon={d.icon} className={`icon icon-xs text-${d.color} w-20 me-1`} />
                {` ${d.label} `}{`${d.value}%`}
              </h6>
            ))}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const BarChartWidget = (props) => {
  const { title, value, percentage, data = [] } = props;
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const series = data.map(d => d.value);
  const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="d-flex flex-row align-items-center flex-0 border-bottom">
        <div className="d-block">
          <h6 className="fw-normal text-gray mb-2">{title}</h6>
          <h3>{value}</h3>
          <small className="mt-2">
            <FontAwesomeIcon icon={percentageIcon} className={`${percentageColor} me-1`} />
            <span className={`${percentageColor} fw-bold`}>{percentage}%</span>
          </small>
        </div>
        <div className="d-block ms-auto">
          {data.map(d => (
            <div key={`bar-element-${d.id}`} className="d-flex align-items-center text-end mb-2">
              <span className={`shape-xs rounded-circle bg-${d.color} me-2`} />
              <small className="fw-normal">{d.label}</small>
            </div>
          ))}
        </div>
      </Card.Body>
      <Card.Body className="p-2">
        <BarChart labels={labels} series={series} />
      </Card.Body>
    </Card>
  );
};

export const ProjectsWidget = () => {
  const projects = [
    { type: "POS", name: "Naivas Supermarket" },
    { type: "Website", name: "savannasafaris.co.ke" },
    { type: "POS", name: "Java House Kenya" },
    { type: "Website", name: "horizonrealty.co.ke" },
    { type: "POS", name: "Quickmart Retail" },
    { type: "Website", name: "eliteclinics.co.ke" },
    { type: "POS", name: "Carrefour Kenya" },
    { type: "Website", name: "greenleafacademy.co.ke" },
  ];
  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light d-flex justify-content-between">
        <h5 className="mb-0">Our Projects</h5>
        <Button variant="secondary" size="sm">See all</Button>
      </Card.Header>
      <Card.Body>
        <table className="table table-hover">
          <thead>
            <tr>
              <th style={{ width: "30%" }}>Type</th>
              <th>Brand / Domain</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td>
                  <span style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    padding: "3px 10px",
                    borderRadius: "6px",
                    background: project.type === "POS" ? "#E8F0FE" : "#E1F5EE",
                    color: project.type === "POS" ? "#185FA5" : "#0F6E56",
                  }}>
                    {project.type}
                  </span>
                </td>
                <td style={{ fontSize: "14px", color: "#444", verticalAlign: "middle" }}>
                  {project.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card.Body>
    </Card>
  );
};

export const TeamMembersWidget = () => {
  const TeamMember = (props) => {
    const { name, statusKey, image, icon, btnText } = props;
    const status = {
      online: { color: "success", label: "Online" },
      inMeeting: { color: "warning", label: "In a meeting" },
      offline: { color: "danger", label: "Offline" }
    };
    const statusColor = status[statusKey] ? status[statusKey].color : 'danger';
    const statusLabel = status[statusKey] ? status[statusKey].label : 'Offline';
    return (
      <ListGroup.Item className="px-0">
        <Row className="align-items-center">
          <Col className="col-auto">
            <a href="#top" className="user-avatar">
              <Image src={image} className="rounded-circle" />
            </a>
          </Col>
          <Col className="ms--2">
            <h4 className="h6 mb-0"><a href="#!">{name}</a></h4>
            <span className={`text-${statusColor}`}>● </span>
            <small>{statusLabel}</small>
          </Col>
          <Col className="col-auto">
            <Button variant="tertiary" size="sm">
              <FontAwesomeIcon icon={icon} className="me-1" /> {btnText}
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  };
  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light d-flex justify-content-between">
        <h5 className="mb-0">Team members</h5>
        <Button variant="secondary" size="sm">See all</Button>
      </Card.Header>
      <Card.Body>
        <ListGroup className="list-group-flush list my--3">
          {teamMembers.map(tm => <TeamMember key={`team-member-${tm.id}`} {...tm} />)}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export const ProgressTrackWidget = () => {
  const Progress = (props) => {
    const { title, percentage, icon, color, last = false } = props;
    const extraClassName = last ? "" : "mb-2";
    return (
      <Row className={`align-items-center ${extraClassName}`}>
        <Col xs="auto">
          <span className={`icon icon-md text-${color}`}>
            <FontAwesomeIcon icon={icon} className="me-1" />
          </span>
        </Col>
        <Col>
          <div className="progress-wrapper">
            <div className="progress-info">
              <h6 className="mb-0">{title}</h6>
              <small className="fw-bold text-dark"><span>{percentage} %</span></small>
            </div>
            <ProgressBar variant={color} now={percentage} min={0} max={100} />
          </div>
        </Col>
      </Row>
    );
  };
  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Progress track</h5>
      </Card.Header>
      <Card.Body>
        <Progress title="Rocket - SaaS Template" color="purple" icon={faBootstrap} percentage={34} />
        <Progress title="Pixel - Design System" color="danger" icon={faAngular} percentage={60} />
        <Progress title="Spaces - Listings Template" color="tertiary" icon={faVuejs} percentage={45} />
        <Progress title="Stellar - Dashboard" color="info" icon={faReact} percentage={35} />
        <Progress last title="Volt - Dashboard" color="purple" icon={faBootstrap} percentage={34} />
      </Card.Body>
    </Card>
  );
};

export const ConsultationWidget = () => {
  const [formData, setFormData] = React.useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = React.useState(false);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };
  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Schedule a Free Consultation</h5>
        <small className="text-muted">We'll get back to you within 24 hours</small>
      </Card.Header>
      <Card.Body>
        {submitted ? (
          <div className="text-center py-4">
            <span style={{ fontSize: "40px", color: "#1D9E75" }}>✓</span>
            <h5 className="mt-2" style={{ color: "#1D9E75" }}>Thank you!</h5>
            <small className="text-muted">We've received your request and will be in touch shortly.</small>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <Row className="mb-2">
              <Col xs={12} sm={6} className="mb-2">
                <label style={{ fontSize: "12px", color: "#888", marginBottom: "4px", display: "block" }}>Full Name</label>
                <input type="text" name="name" required placeholder="John Doe" value={formData.name} onChange={handleChange} style={{ width: "100%", padding: "7px 10px", fontSize: "13px", border: "0.5px solid #ccc", borderRadius: "6px", outline: "none" }} />
              </Col>
              <Col xs={12} sm={6} className="mb-2">
                <label style={{ fontSize: "12px", color: "#888", marginBottom: "4px", display: "block" }}>Phone Number</label>
                <input type="tel" name="phone" required placeholder="+254 700 000000" value={formData.phone} onChange={handleChange} style={{ width: "100%", padding: "7px 10px", fontSize: "13px", border: "0.5px solid #ccc", borderRadius: "6px", outline: "none" }} />
              </Col>
            </Row>
            <div className="mb-2">
              <label style={{ fontSize: "12px", color: "#888", marginBottom: "4px", display: "block" }}>Email Address</label>
              <input type="email" name="email" required placeholder="john@example.com" value={formData.email} onChange={handleChange} style={{ width: "100%", padding: "7px 10px", fontSize: "13px", border: "0.5px solid #ccc", borderRadius: "6px", outline: "none" }} />
            </div>
            <div className="mb-2">
              <label style={{ fontSize: "12px", color: "#888", marginBottom: "4px", display: "block" }}>Service Interested In</label>
              <select name="service" required value={formData.service} onChange={handleChange} style={{ width: "100%", padding: "7px 10px", fontSize: "13px", border: "0.5px solid #ccc", borderRadius: "6px", outline: "none", background: "#fff" }}>
                <option value="">Select a service...</option>
                <option value="pos">POS System Setup</option>
                <option value="webdesign">Web Design</option>
                <option value="webhosting">Web Hosting</option>
                <option value="maintenance">Remote / Onsite Maintenance</option>
                <option value="etims">eTIMS Integration</option>
              </select>
            </div>
            <div className="mb-3">
              <label style={{ fontSize: "12px", color: "#888", marginBottom: "4px", display: "block" }}>Message <span style={{ color: "#bbb" }}>(optional)</span></label>
              <textarea name="message" rows={3} placeholder="Tell us a bit about your needs..." value={formData.message} onChange={handleChange} style={{ width: "100%", padding: "7px 10px", fontSize: "13px", border: "0.5px solid #ccc", borderRadius: "6px", outline: "none", resize: "none" }} />
            </div>
            <Button type="submit" variant="primary" className="w-100">Book Free Consultation</Button>
          </form>
        )}
      </Card.Body>
    </Card>
  );
};

export const RankingWidget = () => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between border-bottom border-light pb-3">
          <div>
            <h6><FontAwesomeIcon icon={faGlobeEurope} className="icon icon-xs me-3" /> Global Rank</h6>
          </div>
          <div>
            <Card.Link href="#" className="text-primary fw-bold">
              #755 <FontAwesomeIcon icon={faChartLine} className="ms-2" />
            </Card.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between border-bottom border-light py-3">
          <div>
            <h6 className="mb-0"><FontAwesomeIcon icon={faFlagUsa} className="icon icon-xs me-3" />Country Rank</h6>
            <div className="small card-stats">United States <FontAwesomeIcon icon={faAngleUp} className="icon icon-xs text-success ms-2" /></div>
          </div>
          <div>
            <Card.Link href="#top" className="text-primary fw-bold">
              #32 <FontAwesomeIcon icon={faChartLine} className="ms-2" />
            </Card.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between pt-3">
          <div>
            <h6 className="mb-0"><FontAwesomeIcon icon={faFolderOpen} className="icon icon-xs me-3" />Category Rank</h6>
            <Card.Link href="#top" className="small card-stats">Travel &gt; Accomodation</Card.Link>
          </div>
          <div>
            <Card.Link href="#top" className="text-primary fw-bold">
              #16 <FontAwesomeIcon icon={faChartLine} className="ms-2" />
            </Card.Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export const DoneProjectsWidget = () => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between border-bottom border-light pb-3">
          <div>
            <h6><FontAwesomeIcon icon={faChartBar} className="icon icon-xs me-3" /> POS Systems</h6>
          </div>
          <div>
            <Card.Link href="#" className="text-primary fw-bold">
              99+ <FontAwesomeIcon icon={faChartLine} className="ms-2" />
            </Card.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between border-bottom border-light py-3">
          <div>
            <h6 className="mb-0"><FontAwesomeIcon icon={faFolderOpen} className="icon icon-xs me-3" /> Websites</h6>
            <div className="small card-stats">Delivered <FontAwesomeIcon icon={faAngleUp} className="icon icon-xs text-success ms-2" /></div>
          </div>
          <div>
            <Card.Link href="#top" className="text-primary fw-bold">
              99+ <FontAwesomeIcon icon={faChartLine} className="ms-2" />
            </Card.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between pt-3">
          <div>
            <h6 className="mb-0"><FontAwesomeIcon icon={faGlobeEurope} className="icon icon-xs me-3" /> Web Hosting</h6>
            <div className="small card-stats">Sites Hosted</div>
          </div>
          <div>
            <Card.Link href="#top" className="text-primary fw-bold">
              99+ <FontAwesomeIcon icon={faChartLine} className="ms-2" />
            </Card.Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export const SalesValueWidget = () => {
  const services = [
    { id: 1, icon: faCashRegister, title: "Custom POS Systems", description: "Streamline your sales with a powerful point-of-sale system tailored to your business needs. Fast, reliable, and easy to use.", color: "#a8edea" },
    { id: 2, icon: faChartArea, title: "Web Design", description: "Get a stunning, conversion-focused website that represents your brand and keeps customers coming back.", color: "#fed6e3" },
    { id: 3, icon: faChartBar, title: "Web Hosting", description: "Fast, secure, and always-on hosting solutions so your business never misses a beat — guaranteed uptime.", color: "#d4fc79" }
  ];
  return (
    <Card style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)", border: "none", borderRadius: "16px", boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }}>
      <Card.Body className="p-4">
        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={service.id} xs={12} md={4} style={{ borderRight: index < 2 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
              <div className="d-flex flex-column align-items-center text-center h-100 px-3">
                <div style={{ width: 60, height: 60, borderRadius: "50%", background: `${service.color}22`, border: `2px solid ${service.color}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                  <FontAwesomeIcon icon={service.icon} style={{ color: service.color, fontSize: "1.4rem" }} />
                </div>
                <h5 style={{ color: "#ffffff", fontWeight: 700, marginBottom: "10px", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>{service.title}</h5>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "20px", flexGrow: 1 }}>{service.description}</p>
                <Button size="sm" style={{ background: `linear-gradient(90deg, ${service.color}, ${service.color}aa)`, border: "none", color: "#1a1a2e", fontWeight: 700, borderRadius: "20px", padding: "6px 20px" }}>Get Started</Button>
              </div>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export const SalesValueWidgetPhone = () => {
  const services = [
    { id: 1, icon: faCashRegister, title: "Custom POS Systems", description: "Streamline your sales with a powerful point-of-sale system tailored to your business needs.", color: "#a8edea" },
    { id: 2, icon: faChartArea, title: "Web Design", description: "Get a stunning, conversion-focused website that represents your brand and keeps customers coming back.", color: "#fed6e3" },
    { id: 3, icon: faChartBar, title: "Web Hosting", description: "Fast, secure, and always-on hosting so your business never misses a beat.", color: "#d4fc79" }
  ];
  return (
    <div className="d-flex flex-column gap-3">
      {services.map(service => (
        <Card key={service.id} style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)", border: "none", borderRadius: "16px", boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }}>
          <Card.Body className="p-4">
            <div className="d-flex flex-column align-items-center text-center">
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: `${service.color}22`, border: `2px solid ${service.color}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
                <FontAwesomeIcon icon={service.icon} style={{ color: service.color, fontSize: "1.3rem" }} />
              </div>
              <h5 style={{ color: "#ffffff", fontWeight: 700, marginBottom: "10px", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>{service.title}</h5>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "18px" }}>{service.description}</p>
              <Button size="sm" style={{ background: `linear-gradient(90deg, ${service.color}, ${service.color}aa)`, border: "none", color: "#1a1a2e", fontWeight: 700, borderRadius: "20px", padding: "6px 20px" }}>Get Started</Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export const LocationWidget = () => {
  return (
    <Card border="light" className="shadow-sm h-100">
      <Card.Header className="border-bottom border-light d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Find Us</h5>
        <small className="text-muted">Our location</small>
      </Card.Header>
      <Card.Body className="p-0" style={{ minHeight: "280px" }}>
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853743783!2d36.68258474628809!3d-1.3028617900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1690000000000"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "0 0 8px 8px", display: "block", minHeight: "280px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Card.Body>
    </Card>
  );
};

export const AcquisitionWidget = () => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <h5>Acquisition</h5>
        <p>Tells you where your visitors originated from, such as search engines, social networks or website referrals.</p>
        <div className="d-block">
          <div className="d-flex align-items-center pt-3 me-5">
            <div className="icon icon-shape icon-sm icon-shape-danger rounded me-3">
              <FontAwesomeIcon icon={faChartBar} />
            </div>
            <div className="d-block">
              <label className="mb-0">Bounce Rate</label>
              <h4 className="mb-0">33.50%</h4>
            </div>
          </div>
          <div className="d-flex align-items-center pt-3">
            <div className="icon icon-shape icon-sm icon-shape-quaternary rounded me-3">
              <FontAwesomeIcon icon={faChartArea} />
            </div>
            <div className="d-block">
              <label className="mb-0">Sessions</label>
              <h4 className="mb-0">9,567</h4>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export const AboutBothiveWidget = () => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <h5>About Bothive</h5>
        <p>We build technology that powers your business — custom POS software, high-converting websites, and reliable web hosting, all under one roof.</p>
        <div className="d-block">
          <div className="d-flex align-items-center pt-3 me-5">
            <div className="icon icon-shape icon-sm icon-shape-danger rounded me-3">
              <FontAwesomeIcon icon={faChartBar} />
            </div>
            <div className="d-block">
              <label className="mb-0">Custom POS Software</label>
              <h4 className="mb-0">Tailored for You</h4>
            </div>
          </div>
          <div className="d-flex align-items-center pt-3">
            <div className="icon icon-shape icon-sm icon-shape-quaternary rounded me-3">
              <FontAwesomeIcon icon={faChartArea} />
            </div>
            <div className="d-block">
              <label className="mb-0">Web Hosting</label>
              <h4 className="mb-0">99.9% Uptime</h4>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export const BothiveAIWidget = () => {
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState(null);
  const [messages, setMessages] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleIceBreaker = (selected) => {
    setMode(selected);

    if (selected === "agent") {
      setMessages([
        {
          role: "assistant",
          text:
            "Connecting you to a live agent... In the meantime, you can reach us directly on WhatsApp. We typically respond within minutes 💬",
        },
      ]);
    } else {
      setMessages([
        {
          role: "assistant",
          text:
            "Hi! I'm the Bothive AI assistant. Ask me anything about POS systems, websites, or hosting services 🚀",
        },
      ]);
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();

    setInput("");
    setMessages((prev) => [
      ...prev,
      { role: "user", text: userMessage },
    ]);

    setLoading(true);

    try {
      const response = await fetch(
        "https://api.anthropic.com/v1/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "claude-sonnet-4-20250514",
            max_tokens: 1000,
            system:
              "You are the Bothive AI assistant. Bothive builds custom POS software, websites and web hosting. Be helpful, concise and sales-focused.",
            messages: [
              ...messages.map((m) => ({
                role: m.role,
                content: m.text,
              })),
              {
                role: "user",
                content: userMessage,
              },
            ],
          }),
        }
      );

      const data = await response.json();

      const reply =
        data.content?.[0]?.text ||
        "Sorry, I couldn't get a response.";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: reply },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            "Something went wrong. Please try again later.",
        },
      ]);
    }

    setLoading(false);
  };

  const handleReset = () => {
    setMode(null);
    setMessages([]);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background:
            "linear-gradient(135deg,#1a1a2e 0%,#0f3460 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 9999,
          boxShadow: "0 4px 20px rgba(0,0,0,.25)",
        }}
      >
        <FontAwesomeIcon
          icon={faRobot}
          style={{
            color: "#a8edea",
            fontSize: "1.3rem",
          }}
        />
      </div>

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "24px",
            width: "320px",
            maxHeight: "500px",
            background: "#fff",
            borderRadius: "16px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            zIndex: 9998,
            boxShadow: "0 8px 30px rgba(0,0,0,.2)",
          }}
        >
          {/* Header */}
          <div
            style={{
              background:
                "linear-gradient(135deg,#1a1a2e 0%,#0f3460 100%)",
              padding: "14px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                Bothive Assistant
              </div>
              <div
                style={{
                  color: "#a8edea",
                  fontSize: "11px",
                }}
              >
                Always here to help
              </div>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              {mode && (
                <FontAwesomeIcon
                  icon={faUndo}
                  onClick={handleReset}
                  style={{
                    color: "#a8edea",
                    cursor: "pointer",
                  }}
                />
              )}

              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => setOpen(false)}
                style={{
                  color: "#fff",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>

          {/* Body */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "14px",
            }}
          >
            {!mode && (
              <>
                <p
                  style={{
                    fontSize: "13px",
                    textAlign: "center",
                    marginBottom: "12px",
                  }}
                >
                  👋 Hi there! How can Bothive help today?
                </p>

                {/* Agent */}
                <div
                  onClick={() =>
                    handleIceBreaker("agent")
                  }
                  style={{
                    border: "1px solid #0f3460",
                    borderRadius: "10px",
                    padding: "12px",
                    marginBottom: "10px",
                    cursor: "pointer",
                  }}
                >
                  <strong>
                    Connect to Live Agent
                  </strong>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#777",
                    }}
                  >
                    Chat with support team
                  </div>
                </div>

                {/* AI */}
                <div
                  onClick={() =>
                    handleIceBreaker("ai")
                  }
                  style={{
                    border: "1px solid #1D9E75",
                    borderRadius: "10px",
                    padding: "12px",
                    cursor: "pointer",
                  }}
                >
                  <strong>Ask AI a Question</strong>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#777",
                    }}
                  >
                    Instant answers 24/7
                  </div>
                </div>
              </>
            )}

            {/* Messages */}
            {mode &&
              messages.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent:
                      msg.role === "user"
                        ? "flex-end"
                        : "flex-start",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "80%",
                      padding: "8px 12px",
                      borderRadius: "12px",
                      background:
                        msg.role === "user"
                          ? "#0f3460"
                          : "#f4f4f4",
                      color:
                        msg.role === "user"
                          ? "#fff"
                          : "#333",
                      fontSize: "13px",
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

            {loading && (
              <div
                style={{
                  fontSize: "12px",
                  textAlign: "center",
                  color: "#888",
                }}
              >
                Bothive AI is typing...
              </div>
            )}
          </div>

          {/* AI Input */}
          {mode === "ai" && (
            <div
              style={{
                borderTop: "1px solid #eee",
                padding: "10px",
                display: "flex",
                gap: "8px",
              }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) =>
                  setInput(e.target.value)
                }
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  handleSend()
                }
                placeholder="Type your question..."
                style={{
                  flex: 1,
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "8px",
                }}
              />

              <button
                onClick={handleSend}
                disabled={loading}
                style={{
                  border: "none",
                  background: "#0f3460",
                  color: "#fff",
                  borderRadius: "8px",
                  padding: "8px 12px",
                }}
              >
                <FontAwesomeIcon
                  icon={faPaperPlane}
                />
              </button>
            </div>
          )}

          {/* Agent Mode */}
          {mode === "agent" && (
            <div
              style={{
                borderTop: "1px solid #eee",
                padding: "10px",
              }}
            >
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "block",
                  background: "#25D366",
                  color: "#fff",
                  textAlign: "center",
                  padding: "10px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "13px",
                }}
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="me-2"
                />{" "}
                Chat on WhatsApp
              </a>
            </div>
          )}
        </div>
      )}
    </>
  );
};