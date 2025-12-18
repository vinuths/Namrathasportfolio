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
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Vinuth S</h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Vinuth S</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {/* GitHub - REAL PROFILE */}
            <li className="social-icons">
              <a
                href="https://github.com/vinuths"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
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
                <AiOutlineTwitter />
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
                <FaLinkedinIn />
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
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
