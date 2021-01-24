import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import "../stylesheets/App.css";

// import { Link } from "react-router-dom";
// import Button from "@material-ui/core/Button";
// import SearchIcon from "@material-ui/icons/Search";
// import { useHistory } from "react-router";

const Jumbotron = () => {
  // const { push } = useHistory();
  return (
    <Jumbo fluid className="jumbo" data-aos="fade-up-right" data-aos-duration="2000"
    >
      <div className="overlay"></div>
      <Container>
        <div>
          <h1 data-aos="zoom-in-up">
            <strong>TechitOn</strong>
          </h1>
          <h2>
            {" "}
            Start your journey to become a web developer by searching for the
            bootcamp that suits you.{" "}
          </h2>
{/* 
          <Button
            variant="contained"
            className="link-btn"
            size="large"
            endIcon={<SearchIcon />}
            onClick={() => push("/search")}
          >
            Browse course catalog
          </Button>
          <Link to="/search" exact>
            Browse{" "}
          </Link> */}
        </div>
      </Container>
    </Jumbo>
  );
};

export default Jumbotron;
