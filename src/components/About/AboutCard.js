import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I’m <span className="purple">Namratha Sringeshwara</span> from <span className="purple">Bangalore, India</span>.
            <br />
            I work as a <span className="purple">Technical Solutions Specialist</span> at <span className="purple">Infosys Ltd</span>, supporting enterprise customers on <span className="purple">Google Cloud Platform (GCP)</span>.
            <br />
            I specialize in cloud infrastructure troubleshooting, database migration, IAM security, networking, and monitoring.
            <br /><br />
            Some highlights of my work include:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Resolved 450+ customer issues while maintaining 95%+ SLA compliance
            </li>
            <li className="about-activity">
              <ImPointRight /> Designed multi-region disaster recovery solutions
            </li>
            <li className="about-activity">
              <ImPointRight /> Implemented Cloud Monitoring and Logging to reduce incident resolution time by 35%
            </li>
            <li className="about-activity">
              <ImPointRight /> Optimized IAM roles and enforced least-privilege access
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Committed to improving system reliability and providing exceptional cloud support."
          </p>
          <footer className="blockquote-footer">Namratha Sringeshwara</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
