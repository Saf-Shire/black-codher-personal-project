import React from "react";
import { Card } from "react-bootstrap";
import shortcourses from "../data/shortcourse.json";

const Shortcourse = () => {
  return (
    <div>
      {shortcourses && shortcourses.length > 0 ? (
       shortcourses.map((shortcourse) => (
          <Card className="card">
            <div id="card-style" key={shortcourse.company}>
              <h3>{shortcourse.company}</h3>
                <p>{shortcourse.title} </p>
              <Card.Img
                src={shortcourse.imageLink}
                alt={shortcourse.company}
                className="img"
              />
            <p>{shortcourse.courseLink} </p>

            </div>
          </Card>
        ))
      ) : (
        <p>No courses found</p>
      )}
    </div>
  );
};

export default Shortcourse;
