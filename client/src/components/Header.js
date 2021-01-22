import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "../stylesheets/Header.css";

const Header = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">Techiton</Navbar.Brand>

      <Nav className="ml-auto">
        <Nav.Item>
          <Nav.Link>
            <Link to="/" exact>Home</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/about">About</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/saved">Saved</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/resources"> Resources</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Header;
