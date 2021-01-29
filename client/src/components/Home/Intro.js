import React from "react";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import LaptopIcon from "@material-ui/icons/Laptop";
import { useHistory } from "react-router";
import { Container } from "react-bootstrap";

const Intro = () => {
  const { push } = useHistory();
  return (
    <div className="intro-wrapper">
      <Container>
        <div className="intro-content">
          <h1 data-aos="zoom-in-up" data-aos-duration="2000">
            <strong>TechitOn</strong>
          </h1>
          <h2 data-aos="zoom-out" data-aos-delay="200">
            The best Web development bootcamps suited to you.
          </h2>
          <div className="button-wrapper">
            <Button
              variant="contained"
              id="link-btn"
              size="large"
              endIcon={<SearchIcon />}
              onClick={() => push("/search")}
              data-aos="zoom-in"
            >
              Browse course catalog
            </Button>
          </div>
          <h2 data-aos="zoom-out" data-aos-delay="200">
            Start some short courses instead{" "}
          </h2>
          <div className="button-wrapper" data-aos-delay="300">
            <Button
              variant="contained"
              id="link-btn"
              size="large"
              endIcon={<LaptopIcon />}
              onClick={() => push("/resources")}
              data-aos="zoom-in"
            >
              Tech it on yourself
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Intro;
