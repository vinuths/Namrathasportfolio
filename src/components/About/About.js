import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row 
            className="justify-content-center" 
            style={{ padding: "10px" }}
          >
            <Col
              xs={12} md={7}
              className="d-flex flex-column justify-content-center"
              style={{ paddingTop: "30px", paddingBottom: "50px" }}
            >
              <h1 className="text-center text-md-start" style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              xs={12} md={5}
              style={{ paddingTop: "30px", paddingBottom: "50px" }}
              className="about-img d-flex justify-content-center align-items-center"
            >
              <img src={laptopImg} alt="about" className="img-fluid" style={{ maxWidth: "100%" }} />
            </Col>
          </Row>

          {/* Professional Skills Section */}
          <h1 className="project-heading text-center text-md-start">
            Professional <strong className="purple">Skillset</strong>
          </h1>
          <Techstack />

          {/* Tools Section */}
          <h1 className="project-heading text-center text-md-start">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />

          {/* GitHub Projects Section */}
          {/* <Github /> */}
        </Container>
      </Container>
    </>
  );
}

export default About;
