import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import "../stylesheets/App.css";


import { useHistory } from "react-router";

const Jumbotron = () => {
  return (
    <Jumbo fluid className="jumbo" data-aos="fade-up" data-aos-duration="2000">
      <div className="overlay"></div>
      <Container>
        <div>
          <h1 data-aos="zoom-in-up" >
            <strong>TechitOn</strong>
          </h1>
          <h2 data-aos="zoom-out" data-aos-delay="200">
            Start your journey to become a web developer by searching for the
            bootcamp that suits you.
          </h2>
        </div>
      </Container>
    </Jumbo>
  );
};

export default Jumbotron;
