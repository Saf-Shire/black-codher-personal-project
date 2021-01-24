import React from "react";
import { Card } from "react-bootstrap";
import practices from "../data/practice.json";
import Button from "@material-ui/core/Button";
import SynchIcon from "@material-ui/icons/Sync"

const Practice = () => {
  return (
    <div>
      {practices && practices.length > 0 ? (
        practices.map((practice) => (
          <Card className="card">
            <div id="card-style" key={practice.name}>
              <Card.Img
                src={practice.imageLink}
                alt={practice.name}
                className="img"
              />
              <Card.Body id="card-body">
                <Card.Text className="card-title">{practice.name}</Card.Text>
                <Button
                  className="link-btn"
                  href={practice.webLink}
                  target="_blank"
                  size="large"
                  endIcon={<SynchIcon />}
                >
                  Practice
                </Button>
              </Card.Body>
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
