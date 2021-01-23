import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "../stylesheets/Header.css";

const Header = () => {
  return (
    <Header className="header">
      <div className="container"> 
      
        <Nav className="navbar">
          <Navbar.Brand href="/">Techiton</Navbar.Brand>
          <Nav.Link className="nav-link">
            <Link to="/" exact>Home</Link>
          </Nav.Link>
          <Nav.Link className="nav-link">
            <Link to="/about">About</Link>
          </Nav.Link>
          <Nav.Link className="nav-link">
            <Link to="/saved">Saved</Link>
          </Nav.Link>
          <Nav.Link className="nav-link">
            <Link to="/resources"> Resources</Link>
          </Nav.Link>
        </Nav>
      </div>
    </Header>

    // <Navbar expand="lg">
    //   <Navbar.Brand href="/">Techiton</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    //   <Navbar.Collapse id="basic-navbar-nav">
    //          <Nav >
       
       
    //   </Nav> 
    //   </Navbar.Collapse>
    // </Navbar>
  );
};

export default Header;
