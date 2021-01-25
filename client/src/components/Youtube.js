import React from "react";
import { Card } from "react-bootstrap";
import youtubers from "../data/youtube.json";
import Button from "@material-ui/core/Button";
import YouTubeIcon from "@material-ui/icons/YouTube";

const Youtube = () => {
  return (
    <div>
      {youtubers && youtubers.length > 0 ? (
        youtubers.map((youtuber) => (
          <Card className="card">
            <div id="card-style" key={youtuber.name}>

              <Card.Body id="card-body">
              <div className="img-inline">
                              <Card.Img
                src={youtuber.imageLink}
                alt={youtuber.name}
                className="img"
              />
                <Card.Text className="card-title">{youtuber.name}</Card.Text>
                </div>
                <Button
                  className="link-btn"
                  href= {youtuber.channelLink}
                  target="_blank"
                  size="large"
                  endIcon={<YouTubeIcon/>}
                >
                  Watch
                </Button>
              </Card.Body>
            </div>
          </Card>
        ))
      ) : (
        <p>No Youtubers found</p>
      )}
    </div>
  );
};

export default Youtube;
