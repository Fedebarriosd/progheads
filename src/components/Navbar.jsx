import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function AppNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      sticky="top"
      expand="lg"
      collapseOnSelect
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className="navbar-custom"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Progheads_PY
        </Navbar.Brand>

        {/* Botón personalizado */}
        <Navbar.Toggle aria-controls="main-navbar">
          <div className={`hamburger ${expanded ? "open" : ""}`}>
            <span />
            <span />
            <span />
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              end
              onClick={() => setExpanded(false)}
            >
              Inicio
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about_us"
              onClick={() => setExpanded(false)} // y este también
            >
              Sobre nosotros
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/blog"
              onClick={() => setExpanded(false)}
            >
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
