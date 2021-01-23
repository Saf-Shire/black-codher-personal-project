import React from "react";
import { Card } from "react-bootstrap";
import codinghelp from "../data/codinghelp.json";

const CodingHelp = () => {
  return (
    <div>
      {codinghelp && codinghelp.length > 0 ? (
        codinghelp.map((help) => (
          <Card className="card">
            <div id="card-style" key={help.name}>
              <h3>{practice.name}</h3>
              <Card.Img
                src={codinghelp.imageLink}
                alt={codinghelp.name}
                className="img"
              />
            </div>
          </Card>
        ))
      ) : (
        <p>No result found</p>
      )}
    </div>
  );
};

export default CodingHelp;
