import React from "react";
import { Container } from "react-bootstrap";
import ShortCourses from "../components/ShortCourses";
import Youtube from "../components/Youtube";
import Practice from "../components/Practice";
import Reference from "../components/Reference";
import CodingHelp from "../components/CodingHelp";

const Resources = () => {
  return (
    <Container id="result-section">
      <h2 data-aos="fade-left"data-aos-delay="200">Here are some free short courses</h2>
      <ShortCourses />
      <h2>Some of the best Web development youtubers</h2>
      <Youtube />
      <h2> Put your skills into practice...</h2>
      <Practice />
      <h2>Read about tips , accessibility and more..</h2>
      <Reference/>
      <h2>Getting stuck?</h2>
      <CodingHelp />
    </Container>
  );
};

export default Resources;
