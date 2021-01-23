import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import "../stylesheets/App.css";


const Jumbotron = () => {
  return (
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <div>
          <h1><strong>TechitOn</strong></h1>
          <p className="lead"> Start your journey to become a web developer by searching for the bootcamp that suits you. </p>

        </div>
      </Container>
    </Jumbo>
  );
};

export default Jumbotron;
