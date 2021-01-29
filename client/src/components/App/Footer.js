import React from "react";
import { Container, Row } from "react-bootstrap";
import "../../stylesheets/Footer.css";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <Container>
        <div className="footer-content">
          <a href="/resources" target="_blank" className="footer-link">
            Resources
          </a>
          <a href="/about-us" target="_blank" className="footer-link">
            About us
          </a>
          <a href="/privacy-policy" target="_blank" className="footer-link">
            Privacy Policy
          </a>
          <a href="/terms" target="_blank" className="footer-link">
            Terms & conditions
          </a>
          <a href="/cookies" target="_blank" className="footer-link">
            Manage cookies
          </a>
        </div>
        <Row>
          <Copyright />
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
