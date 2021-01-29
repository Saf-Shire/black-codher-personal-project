import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "@material-ui/core/Button";
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import LanguageIcon from "@material-ui/icons/Language";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import LocationIcon from "@material-ui/icons/LocationOn";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import RotateRightOutlinedIcon from "@material-ui/icons/RotateRightOutlined";
import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";

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
                <Card.Text className="card-title">
                  {bootcamp.company} - {bootcamp.title}
                </Card.Text>
                <Card.Text className="card-text">
                  <LocationIcon />
                  <span className="span-text">{bootcamp.city}</span>
                </Card.Text>
                <Card.Text className="card-text">
                  <TimelapseIcon />
                  <span className="span-text">
                    {bootcamp.durationType}| {bootcamp.weeksLength} weeks |{" "}
                    {bootcamp.totalAmountOfHours} hours
                  </span>
                </Card.Text>
                <Card.Text className="card-text">
                  <CreditCardIcon />
                  <span className="span-text">£{bootcamp.tuitionFee}</span>
                </Card.Text>
                <Card.Text className="card-text">
                  <RotateRightOutlinedIcon />
                  <span className="span-text">
                    {bootcamp.applicationCycles} application cycle(s)
                  </span>
                </Card.Text>
                <Card.Text className="card-text">
                  <ContactMailOutlinedIcon />
                  <span className="span-text">{bootcamp.emailAddress}</span>
                </Card.Text>
                <Button
                    id="controlButtons"
                    onClick={() => unfavouriteBootcamp(bootcamp._id)}
                    size="large"
                    endIcon={<RemoveCircleOutlineIcon/>}
                  >
                    Remove
                  </Button>
                <Button
                  className="link-btn"
                  href={bootcamp.applicationLink}
                  target="_blank"
                  size="large"
                  endIcon={<LanguageIcon />}
                >
                  Apply
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
