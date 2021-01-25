import React from "react";
import { Card } from "react-bootstrap";
import codinghelp from "../data/codinghelp.json";
import Button from "@material-ui/core/Button";
import ContactSupportSharpIcon from "@material-ui/icons/ContactSupportSharp";

const CodingHelp = () => {
  return (
    <div>
      {codinghelp && codinghelp.length > 0 ? (
        codinghelp.map((help) => (
          <Card className="card">
            <div id="card-style" key={help.name}>
              <Card.Body id="card-body">
              <div className="img-inline">
                <Card.Img src={help.imageLink} alt={help.name} className="img" />
                <Card.Text className="card-title">{help.name} </Card.Text>
                </div>
              </Card.Body>
              <Button
                  className="link-btn"
                  href={help.webLink}
                  target="_blank"
                  size="large"
                  endIcon={<ContactSupportSharpIcon />}
                >
                  Ask 
                </Button>
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
