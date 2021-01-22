import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  Col,
  Card,
  Badge,
  Button,
  Collapse,
} from "react-bootstrap";
import "../stylesheets/Search.css";
import Icon from "@material-ui/icons"
import axios from "axios";


const SearchForm = ({ searchDatabases, addBootcamp }) => {
  const [searching, setSearching] = useState(false);
  const [message, setMessage] = useState(null);
  // const [query,setQuery]=useState("");
  const [searchOptions, setSearchOptions] = useState("");
  const [bootcamps, setBootcamps] = useState([]);
  const [savedlist, setSavedlist] = useState([]);
  const [open, setOpen] = useState(false);

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
    setParams(e.target.name);
    // setQuery(e.target.value);
    try {
      const url = `http://localhost:5000/api/bootcamp?q=${e.target.name}`;
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

            <Button type="submit" id="searchbtn">
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
                    id="controlButtons"
                    onClick={() => favouriteBootcamp(bootcamp._id)}
                  >
                    Add +
                  </Button>

                  {/* <Button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.assign("{bootcamp.applicationLink}");
                    }}
                  >
                    {" "}
                    Apply here
                  </Button> */}

                  <div className="wrap-collapse">
                    <Button
                      onClick={() => setOpen(!open)}
                      aria-controls="collapse-element"
                      aria-expanded={open}
                      variant="primary"
                    >
                      {open ? "Hide Details" : "View Details"}
                    </Button>

                    <Collapse in={open}>
                      <div id="collapse-element">
                        <Button
                          className="apply-btn"
                          href="{bootcamp.applicationLink}"
                          target="_blank"
                        >
                          Apply
                        </Button>
                      </div>
                    </Collapse>
                  </div>
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
