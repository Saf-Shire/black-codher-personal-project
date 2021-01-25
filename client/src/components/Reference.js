import React from "react";
import { Card } from "react-bootstrap";
import references from "../data/reference.json";
import Button from "@material-ui/core/Button";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";

const Reference = () => {
  return (
    <div>
      {references && references.length > 0 ? (
        references.map((reference) => (
          <Card className="card">
            <div id="card-style" key={reference.name}>
              <Card.Body id="card-body">
              <div className="img-inline">
                              <Card.Img
                src={reference.imageLink}
                alt={reference.name}
                className="img"
              />
                <Card.Text className="card-title">{reference.name}</Card.Text>
                </div>
                <Button
                  className="link-btn"
                  href={reference.refLink}
                  target="_blank"
                  size="large"
                  endIcon={<CreateOutlinedIcon/>}
                >
                  Take note
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

export default Reference;
