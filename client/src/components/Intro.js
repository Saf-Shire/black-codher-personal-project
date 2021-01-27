import React from "react";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import LaptopIcon from "@material-ui/icons/Laptop";
import { useHistory } from "react-router";
import { Container } from "react-bootstrap";

const Intro = () => {
  const { push } = useHistory();
  return (
    <Container>
      <div>
        <h2>
          {" "}
          Start your journey to become a web developer by searching for the
          bootcamp that suits you.{" "}
        </h2>

        <Button
          variant="contained"
          className="link-btn"
          size="large"
          endIcon={<SearchIcon />}
          onClick={() => push("/search")}
          data-aos="zoom-in"
        >
          Browse course catalog
        </Button>
        <h2>Start some short courses instead </h2>
        <Button
          variant="contained"
          className="link-btn"
          size="large"
          endIcon={<LaptopIcon />}
          onClick={() => push("/resources")}
          data-aos="zoom-in"
        >
          Tech it on yourself
        </Button>
        <h2></h2>
      </div>
    </Container>
  );
};

export default Intro;
