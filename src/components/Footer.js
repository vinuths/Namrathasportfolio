import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer" style={{ padding: "20px 0" }}>
      <Row className="text-center text-md-left">
        {/* Designed and Developed */}
        <Col xs={12} md={4} className="footer-copywright mb-2 mb-md-0">
          <h3>Designed and Developed by Vinuth S</h3>
        </Col>

        {/* Copyright */}
        <Col xs={12} md={4} className="footer-copywright mb-2 mb-md-0">
          <h3>Copyright © {year} Vinuth S</h3>
        </Col>

        {/* Social Icons */}
        <Col xs={12} md={4} className="footer-body">
          <ul className="footer-icons" style={{ display: "flex", justifyContent: "center", gap: "15px", padding: 0, listStyle: "none" }}>
            {/* GitHub - REAL PROFILE */}
            <li className="social-icons">
              <a
                href="https://github.com/vinuths"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub size={25} />
              </a>
            </li>

            {/* Twitter - generic */}
            <li className="social-icons">
              <a
                href="https://twitter.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter size={25} />
              </a>
            </li>

            {/* LinkedIn - generic */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={25} />
              </a>
            </li>

            {/* Instagram - generic */}
            <li className="social-icons">
              <a
                href="https://www.instagram.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram size={25} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
