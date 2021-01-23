import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form, Col, Card } from "react-bootstrap";
import "../stylesheets/Search.css";
import Button from "@material-ui/core/Button";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import LanguageIcon from "@material-ui/icons/Language";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import LocationIcon from "@material-ui/icons/LocationOn";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import RotateRightOutlinedIcon from "@material-ui/icons/RotateRightOutlined";
import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";



const SearchForm = ({ searchDatabases, addBootcamp }) => {
  const [searching, setSearching] = useState(false);
  const [message, setMessage] = useState(null);
  // const [query,setQuery]=useState("");
  const [params, setParams] = useState([]);
  const [searchOptions, setSearchOptions] = useState("");
  const [bootcamps, setBootcamps] = useState([]);
  const [savedlist, setSavedlist] = useState([]);

  const handleChange = async (e) => {
    e.preventDefault();
    setSearching(true);
    setSearchOptions(e.target.value);
    // setQuery(e.target.value);
    try {
      const url = `http://localhost:5000/api/bootcamp?q=${e.target.value}`;
      const response = await axios.get(url);
      const data = response.data.bootcamp;
      setMessage(null);
      console.log(typeof data);
      setBootcamps(data);
      setSearching(false);
    } catch (err) {
      setBootcamps([]);
      console.log(err);
      setMessage("An unexpected error occured.");
      setSearching(false);
    }
  };

  const handleCheck = async (e) => {
    e.preventDefault();
    setSearching(true);
    setParams(e.target.value);
    try {
      const url = `http://localhost:5000/api/bootcamp?q=${e.target.value}`;
      const response = await axios.get(url);
      const data = response.data.bootcamp;
      setBootcamps(data);
    } catch (err) {
      setBootcamps([]);
    }
  };

  function favouriteBootcamp(id) {
    console.log(`The Bootcamp course ${id} was favourited`);
    const newBootcamps = bootcamps.filter((bootcamp) => id !== bootcamp._id);
    const chosenBootcamp = bootcamps.filter((bootcamp) => id === bootcamp._id);
    setBootcamps(newBootcamps);
    setSavedlist([...savedlist, ...chosenBootcamp]);
    addBootcamp(chosenBootcamp);
  }

  useEffect(() => {
    document.title = `${savedlist.length} bootcamp(s) saved`;
  }, [savedlist]);

  return (
    <Container className="search-section">
      <div className="search-header">
        <Form id="searchForm" onSubmit={searchDatabases}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Check
                onChange={handleCheck}
                type="checkbox"
                value={params.free}
                label="Only Free"
              ></Form.Check>
            </Form.Group>
          </Form.Row>
          <Form.Row id="searchBar">
            <Form.Control
              type="text"
              name="query"
              placeholder="Search bootcamp by name..."
              className="form-control"
              value={searchOptions.company}
              // value={query}
              onChange={handleChange}
            />

            <Button type="submit" className="searchbtn">
              <svg
                className="searchicon"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </Button>
          </Form.Row>
        </Form>
      </div>

      <Container id="result-section">
        {searching && !message ? (
          <span> loading... </span>
        ) : message ? (
          <div className="message"> {message} </div>
        ) : (
          bootcamps.map((bootcamp) => (
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
                  <Card.Text className="card-title">{bootcamp.title}</Card.Text>
                  <Card.Text className="card-text">
                    Company:
                    <span className="span-text">{bootcamp.company}</span>
                  </Card.Text>
                  <LocationIcon />
                  <span className="span-text">{bootcamp.city}</span>
                  <TimelapseIcon />
                  <span className="span-text">
                    {bootcamp.durationType}|{bootcamp.weeksLength} weeks|{bootcamp.totalAmountOfHours}
                  </span>
                  <CreditCardIcon />
                  <span className="span-text">£{bootcamp.tutionFee}</span>
                  <RotateRightOutlinedIcon />
                  <span className="span-text">{bootcamp.applicationCycles} application cycle(s) </span>
                  <ContactMailOutlinedIcon/>
                  <span className="span-text">{bootcamp.emailAddress} application cycle(s) </span>
                  <Button
                    id="controlButtons"
                    onClick={() => favouriteBootcamp(bootcamp._id)}
                    endIcon={<StarOutlineIcon />}
                  >
                    Favourite
                  </Button>
                  {/* <a  href={encodeURIComponent(bootcamp.applicationLink)}>
            Apply 
          </a> */}

                  <Button
                    className="apply-btn"
                    href={encodeURIComponent(bootcamp.applicationLink)}
                    target="_blank"
                    endIcon={<LanguageIcon />}
                  >
                    Apply
                  </Button>
                </Card.Body>
              </div>
            </Card>
          ))
        )}
      </Container>
    </Container>
  );
};

export default SearchForm;
