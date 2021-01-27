import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "../stylesheets/Header.css";

const Header = () => {
  return (
    <Navbar     >
      <Navbar.Brand href="/">Techiton</Navbar.Brand>

      <Nav className="navbar-nav"    data-aos="zoom-in-up"
    data-aos-duration="2000"
    >
        <Nav.Item >
          <Nav.Link>
            <Link to="/" exact>Home</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link>
            <Link to="/search" exact>Find your course</Link>
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