import React from "react";
import { Container } from "react-bootstrap";
import ShortCourses from "../components/Resources/ShortCourses";
import Youtube from "../components/Resources/Youtube";
import Practice from "../components/Resources/Practice";
import Reference from "../components/Resources/Reference";
import CodingHelp from "../components/Resources/CodingHelp";

const Resources = () => {
  return (
    <Container id="result-section">
      <h3 data-aos="fade-left"data-aos-delay="200">Here are some free short courses</h3>
      <ShortCourses />
      <h3 data-aos="fade-left"data-aos-delay="200">Some of the best Web development youtubers</h3>
      <Youtube />
      <h3 data-aos="fade-left"data-aos-delay="200"> Put your skills into practice...</h3>
      <Practice />
      <h3 data-aos="fade-left"data-aos-delay="200">Read about tips , accessibility and more..</h3>
      <Reference/>
      <h3 data-aos="fade-left"data-aos-delay="200">Getting stuck?</h3>
      <CodingHelp />
    </Container>
  );
};

export default Resources;
