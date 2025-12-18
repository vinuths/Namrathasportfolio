import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const scrollHandler = () => {
      updateNavbar(window.scrollY >= 20);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const linkStyle = (path) => ({
    color: location.pathname === path ? "#a259ff" : "#ffffff",
    fontWeight: location.pathname === path ? "600" : "500",
    margin: "0 12px",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    whiteSpace: "nowrap",
  });

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      collapseOnSelect
      style={{
        background: navColour
          ? "rgba(27,20,41,0.95)"
          : "rgba(27,20,41,0.7)",
        backdropFilter: "blur(10px)",
        transition: "0.4s ease",
        boxShadow: navColour ? "0 4px 20px rgba(0,0,0,0.4)" : "none",
        padding: "10px 0",
      }}
    >
      <Container>
        <Navbar.Toggle
          onClick={() => updateExpanded(expand ? false : "expanded")}
          aria-controls="responsive-navbar-nav"
          style={{
            border: "none",
            outline: "none",
          }}
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="ms-auto"
            style={{
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                style={linkStyle("/")}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineHome /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                style={linkStyle("/about")}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                style={linkStyle("/project")}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                style={linkStyle("/resume")}
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument /> Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
