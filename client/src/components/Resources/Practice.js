import React from "react";
import { Card } from "react-bootstrap";
import practices from "../../data/practice.json";
import Button from "@material-ui/core/Button";
import SynchIcon from "@material-ui/icons/Sync";

const Practice = () => {
  return (
    <div>
      {practices && practices.length > 0 ? (
        practices.map((practice) => (
          <Card className="card" data-aos="zoom-in-up"  data-aos-duration="2000">
            <div id="card-style" key={practice.name}>
              <Card.Body id="card-body">
                <div className="img-inline">
                  <Card.Img
                    src={practice.imageLink}
                    alt={practice.name}
                    className="img"
                  />
                  <Card.Text className="card-title">{practice.name}</Card.Text>
                </div>
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
