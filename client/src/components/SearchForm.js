import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form, Card, Row } from "react-bootstrap";
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
  const [params, setParams] = useState("");

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
          <Form.Group>
            <Form.Control as="select" id="inputCity">
              <Form.Label for="inputCity">Location</Form.Label>
              <option value={params.city}>Manchester</option>
              <option value={params.city}>London</option>
              <option value={params.city}>Bristol</option>
              <option value={params.city}>Birmingham</option>
              <option value={params.city}>Leeds</option>

              <br />
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Check
              onChange={handleCheck}
              type="checkbox"
              value={params.free}
              label="Only Free"
            ></Form.Check>
            <Form.Check
              onChange={handleCheck}
              type="checkbox"
              value={params.free}
              label="Childcare "
            ></Form.Check>
            <Form.Check
              onChange={handleCheck}
              type="checkbox"
              value={params.free}
              label="Laptop loan"
            ></Form.Check>
            <Form.Check
              onChange={handleCheck}
              type="checkbox"
              value={params.free}
              label="Certification"
            ></Form.Check>
          </Form.Group>
          <Form.Group as={Row} id="searchBar">
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
          </Form.Group>
        </Form>
      </div>

      <Container id="result-section">
        {searching && !message ? (
          <span> loading... </span>
        ) : message ? (
          <div className="message"> {message} </div>
        ) : (
          bootcamps.map((bootcamp) => (
            <Card className="card"data-aos="fade-in">
              <div id="card-style" key={bootcamp._id}>
                <Card.Body id="card-body">
                  <div className="img-inline">
                    <Card.Img
                      src={bootcamp.logo}
                      alt={bootcamp.company}
                      className="img"
                    />
                    <Card.Title className="card-title">
                      {bootcamp.company} - {bootcamp.title}
                    </Card.Title>
                  </div>

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
                    Help available:
                    <span className="span-text">
                      {bootcamp.availableHelp[0]}|{bootcamp.availableHelp[1]}
                    </span>
                  </Card.Text>
                  <Card.Text className="card-text">
                    Discounts available:
                    <span className="span-text">
                      {bootcamp.availableDiscounts[0]}|
                      {bootcamp.availableDiscounts[1]}
                    </span>
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
                    className="link-btn"
                    href={bootcamp.applicationLink}
                    target="_blank"
                    size="large"
                    endIcon={<LanguageIcon />}
                  >
                    Apply
                  </Button>
                  <Button
                    id="controlButtons"
                    onClick={() => favouriteBootcamp(bootcamp._id)}
                    size="large"
                    endIcon={<StarOutlineIcon />}
                  >
                    Favourite
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
