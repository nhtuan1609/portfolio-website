import "./ContactMe.css";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Button } from "react-bootstrap";
import { FaPhone, FaFacebookSquare } from "react-icons/fa/";
import { AiOutlineMail, AiOutlineGithub } from "react-icons/ai/";

export default function ContactMe() {
  return (
    <div id="contact">
      <Container className="contact-container">
        <Row className="contact-header">
          <Col>CONTACT ME</Col>
        </Row>
        <Row className="contact-body">
          <Col className="contact-body-list">
            <div className="contact-body-item">
              <a
                href="tel:+84797750056"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="contact-btn"
                  size="lg"
                  variant="info"
                  title="Call to +84 79 775 0056"
                >
                  <FaPhone className="contact-btn-icon" /> Call Me
                </Button>
              </a>
            </div>
            <div className="contact-body-item">
              <a
                href="mailto:nhtuan1609@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="contact-btn"
                  size="lg"
                  variant="danger"
                  title="nhtuan1609@gmail.com"
                >
                  <AiOutlineMail className="contact-btn-icon" /> Email Me
                </Button>
              </a>
            </div>
            <div className="contact-body-item">
              <a
                href="https://www.facebook.com/profile.php?id=100009292009630"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="contact-btn"
                  size="lg"
                  variant="primary"
                  title="Say hello on Facebook"
                >
                  <FaFacebookSquare className="contact-btn-icon" /> Facebook
                </Button>
              </a>
            </div>
            <div className="contact-body-item">
              <a
                href="https://github.com/nhtuan1609"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="contact-btn"
                  size="lg"
                  variant="dark"
                  title="My other projects"
                >
                  <AiOutlineGithub className="contact-btn-icon" /> GitHub
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
