import React, { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import "../stylesheets/filter.css"

// SERVICES
import bootcampService from "../services/bootcampService";

const Filter = () => {
  const [bootcamps, setBootcamps] = useState([]);

  useEffect(() => {
    if (!bootcamps) {
      getbootcamps();
    }
  });

  const getbootcamps = async () => {
    let res = await bootcampService.getAll();
    const filterdiscounts = res.filter((e) =>
      e.availableDiscounts.includes("Women diversity")
    );
    setBootcamps(filterdiscounts);
  };

  return (
    <React.Fragment>
    <Container fluid className="filter">
      <div>
      {bootcamps.map((bootcamp) => (
        <Card className="card">
          <div id="card-style" key={bootcamp._id}>
            {
              <Card.Img
                src={bootcamp.logo}
                alt={bootcamp.company}
                className="img"
              />
            }
            <Card.Body id="card-body">
              <Card.Text className="card-text">
                Title:
                <span className="span-text">{bootcamp.title}</span>
              </Card.Text>
              <Card.Text className="card-text">
                Company:
                <span className="span-text">{bootcamp.company}</span>
              </Card.Text>
              <Card.Text className="card-text">
                Location:
                <span className="span-text">{bootcamp.city}</span>
              </Card.Text>
              <Card.Text className="card-text">
                Duration:
                <span className="span-text">{bootcamp.durationType}</span>
              </Card.Text>
              <Button
                className="apply-btn"
                href="{bootcamp.applicationLink}"
                target="_blank"
              >
                Apply
              </Button>
            </Card.Body>
          </div>
        </Card>
  
      ))}
        </div>
    </Container>
   </React.Fragment>
  );
};
export default Filter;

