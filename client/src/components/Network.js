import React from "react";
import networks from "../data/network.json";
import { Card, Container } from "react-bootstrap";


const Network = () => {
  return (
    <div>
      {networks && networks.length > 0 ? (
        networks.map((network) => (
          <Card className="card">
              <div id="card-style" key={network.name}>
                <h3>{network.name}</h3>
            <Card.Img
              src={network.imageLink}
              alt={network.name}
              className="img"
            />    
              </div>
          
          </Card>
        ))
      ) : (
        <p>No Networks found</p>
      )}
    </div>
  );
};

export default Network;
