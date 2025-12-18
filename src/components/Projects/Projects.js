import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// SAME images (no change to avoid errors)
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Projects highlighting technical analysis, application support,
          troubleshooting, and cloud fundamentals.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* 1️⃣ GCP PROJECT */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="GCP Monitoring & Log Analysis"
              description="Configured monitoring and log analysis for applications hosted on Google Cloud Platform. Used Cloud Monitoring and Cloud Logging to track system health, analyze errors, and support incident resolution."
              ghLink="#"
            />
          </Col>

          {/* 2️⃣ TECHNICAL SUPPORT PROJECT */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Application Support & Issue Resolution"
              description="Provided L2/L3 application support by analyzing logs, reproducing issues, and coordinating with development teams to resolve production defects and improve system stability."
              ghLink="#"
            />
          </Col>

          {/* 3️⃣ INCIDENT & RCA */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Incident Management & Root Cause Analysis"
              description="Handled production incidents by identifying root causes, documenting findings, and implementing preventive measures to reduce repeat issues and downtime."
              ghLink="#"
            />
          </Col>

          {/* 4️⃣ DOCUMENTATION */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Technical Documentation & SOPs"
              description="Created and maintained technical documentation, SOPs, and troubleshooting guides to support operations teams and ensure consistent issue resolution."
              ghLink="#"
            />
          </Col>

          {/* 5️⃣ AUTOMATION / TOOLS */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Support Automation & Health Checks"
              description="Automated routine support tasks and system health checks using scripts and monitoring tools to improve response time and reduce manual effort."
              ghLink="#"
            />
          </Col>

          {/* 6️⃣ CUSTOMER COMMUNICATION */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Customer Issue Analysis & Reporting"
              description="Analyzed customer-reported issues, provided clear technical explanations, tracked resolutions, and ensured SLA compliance through structured reporting."
              ghLink="#"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
