import React from "react";
import { Card } from "react-bootstrap";
import youtubers from "../data/youtube.json";

const Youtube = () => {
  return (
    <div>
      {youtubers && youtubers.length > 0 ? (
        youtubers.map((youtuber) => (
          <Card className="card">
            <div id="card-style" key={youtuber.name}>
              <h3>{youtuber.name}</h3>
              <Card.Img
                src={youtuber.imageLink}
                alt={youtuber.name}
                className="img"
              />
              <p> {youtuber.channelLink} </p>
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
