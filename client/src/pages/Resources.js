import React from "react";
import { Container } from "react-bootstrap";
import ShortCourses from "../components/ShortCourses";
import Youtube from "../components/Youtube";
import Network from "../components/Network";


const Resources = () => {
  return (
    <Container id="result-section">
      <h2>Here are some free short courses</h2>
      <ShortCourses />
      <h2>Some of the best Web development youtubers</h2>
      <Youtube />
      <h2> Put your skills into practice...</h2>
      {/* <Practice /> */}
      <h2>Getting stuck?</h2>
      {/* <CodingHelp /> */}
      <h2>Find a network near you </h2>
      <Network />
      <h2>Start applying for your dream job</h2>
      {/* <JobSupport/> */}
      {/* <Reference/> */}
    </Container>
  );
};

export default Resources;
