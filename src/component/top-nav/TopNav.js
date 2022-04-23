import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logonew.png";

export default function TopNav() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#logo">
            <img
              src={logo}
              className="figure-img img-fluid rounded img-thumbnail"
              alt="Aavas"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#about">About Me</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <nav className="navbar navbar-expand-md navbar-light">
        <div className="container">
          <a className="navbar-brand" href="logo">
            <img
              src={logo}
              className="figure-img img-fluid rounded img-thumbnail"
              alt="Aavas"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#skills"
                >
                  Skill
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </div>
  );
}
