import React from "react";
import { Card } from "react-bootstrap";
import references from "../data/reference.json";

const Reference = () => {
  return (
    <div>
      {references && references.length > 0 ? (
        references.map((reference) => (
          <Card className="card">
            <div id="card-style" key={reference.name}>
              <h3>{reference.name}</h3>
              <Card.Img
                src={reference.imageLink}
                alt={reference.name}
                className="img"
              />
              <p> {reference.refLink} </p>
            </div>
          </Card>
        ))
      ) : (
        <p>No result found</p>
      )}
    </div>
  );
};

export default Reference;
