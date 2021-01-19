import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SavedList = (props, { removeBootcamp }) => {
  const [savedlist, setSavedlist] = useState([]);

  function unfavouriteBootcamp(id) {
    const newBootcamps = savedlist.filter((bootcamp) => {
      return bootcamp._id !== id;
    });
    setSavedlist(newBootcamps);
    removeBootcamp()//savedlist);
  }

  return (
    <React.Fragment>
      <div>
        {props.savedBootcamp.map((bootcamp) => (
          <Card className="search-result">
            <div className="result-style" key={bootcamp._id}>
              {
                <Card.Img
                  src={bootcamp.logo}
                  alt="bootcampimage"
                  className="img"
                />
              }
              <Card.Body className="body">
                <Card.Title class="title">
                  Title:{" "}
                  <span class="font-normal text-base leadin-relaxed">
                    {bootcamp.title}
                  </span>
                </Card.Title>
                <p class="font-medium text-lg">
                  Company:{" "}
                  <span class="font-normal text-base">{bootcamp.company}</span>
                </p>
                <p class="font-medium text-lg">
                  Location:{" "}
                  <span class="font-normal text-base 1">{bootcamp.city}</span>
                </p>
                <p class="font-medium text-lg">
                  Duration:{" "}
                  <span class="font-normal text-base 1">
                    {bootcamp.durationType}
                  </span>
                </p>
                <Button
                  id="controlButtons"
                  onClick={() => unfavouriteBootcamp(bootcamp._id)}
                >
                  {" "}
                  Remove -
                </Button>
              </Card.Body>
            </div>
          </Card>
        ))}
      </div>
    </React.Fragment>
  );
};

export default SavedList;
