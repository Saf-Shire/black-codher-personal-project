import React from "react";
import { Card } from "react-bootstrap";
import practices from "../data/practice.json";

const Practice = () => {
  return (
    <div>
      {practices && practices.length > 0 ? (
        practices.map((practice) => (
          <Card className="card">
            <div id="card-style" key={practice.name}>
              <h3>{practice.name}</h3>
              <Card.Img
                src={practice.imageLink}
                alt={practice.name}
                className="img"
              />
              <p> {practice.webLink} </p>
            </div>
          </Card>
        ))
      ) : (
        <p>No result found</p>
      )}
    </div>
  );
};

export default Practice;
