import React from "react";
import { Card } from "react-bootstrap";
import shortcourses from "../data/shortcourse.json";
import Button from "@material-ui/core/Button";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LanguageIcon from "@material-ui/icons/Language";

const Shortcourse = () => {
  return (
    <div>
      {shortcourses && shortcourses.length > 0 ? (
        shortcourses.map((shortcourse) => (
          <Card className="card">
            <div id="card-style" key={shortcourse.company}>
              <Card.Body id="card-body">
                <div className="img-inline">
                  <Card.Img
                    src={shortcourse.imageLink}
                    alt={shortcourse.company}
                    className="img"
                  />
                  <Card.Text className="card-title">
                    {shortcourse.company}
                  </Card.Text>
                </div>
                <Card.Text className="card-text">
                  <MenuBookIcon />
                  <span className="span-text">{shortcourse.title}</span>{" "}
                </Card.Text>
                <Button
                  className="link-btn"
                  href={shortcourse.courseLink}
                  target="_blank"
                  size="large"
                  endIcon={<LanguageIcon />}
                >
                  Explore
                </Button>
              </Card.Body>
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
