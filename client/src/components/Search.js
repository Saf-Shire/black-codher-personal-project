import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../stylesheets/Search.css";
import Card from "react-bootstrap/Card";
import { CardGroup, Container } from "react-bootstrap";
import userService from "../services/userService";
import axios from "axios";

const Search = (props) => {
  const [searching, setSearching] = useState(false);
  const [message, setMessage] = useState(null);
  const [query, setQuery] = useState("");
  const [bootcamps, setBootcamps] = useState([]);
  const [bootcamplist, setBootcamplist] = useState([]);

  const SearchDatabases = async (e) => {
    e.preventDefault();
    setSearching(true);
    const url = `http://localhost:5000/api/bootcamp?q=${query}`;
    try {
      // const response = await fetch(url);
      // const data = await response.json();
      const response = await axios.get(url);
      const data = response.data;
      setMessage(null);
      // console.log(data);
      setBootcamps(data);
      setSearching(false);
    } catch (err) {
      setBootcamps([]);
      console.log(err);
      setMessage("An unexpected error occured.");
      setSearching(false);
    }
  };

  useEffect(() => {
    console.log(typeof bootcamps);
    if (Array.isArray(bootcamps) && bootcamps.length == 0) {
      console.log(bootcamps);
      getbootcamps();
    }
  });

  const getbootcamps = async () => {
    let res = await userService.getAll();
    console.log(typeof res);
    setBootcamps(res);
  };

  function favouriteBootcamp(id) {
    console.log(`The Bootcamp course ${id} was favourited`);
    const newBootcamps = bootcamps.filter((bootcamp) => id !== bootcamp._id);
    const chosenBootcamp = bootcamps.filter((bootcamp) => id === bootcamp._id);
    setBootcamps(newBootcamps);
    setBootcamplist([...bootcamplist, ...chosenBootcamp]);
  }

  useEffect(() => {
    document.title = `${bootcamplist.length} bootcamps saved`;
  }, [bootcamplist]);

  function removeBootcamp(id) {
    const newBootcamps = bootcamplist.filter((bootcamp) => {
      return bootcamp._id !== id;
    });
    setBootcamplist(newBootcamps);
  }

  return (
    <Container className="search-section">
      <div className="search-header">
        <Form id="searchBar" onSubmit={SearchDatabases}>
          {/* <Form.Label> Search for a Bootcamp </Form.Label> */}
          <Form.Control
            type="text"
            name="query"
            placeholder="Search bootcamp by name..."
            className="form-control"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button type="submit" id="searchbtn">
            <svg
              class="searchicon"
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
        </Form>
      </div>

      <Container id="result-section">
        {searching && !message ? (
          <span> loading... </span>
        ) : message ? (
          <div className="message"> {message} </div>
        ) : (
          bootcamps.map((bootcamp) => (
            <Card className="search-result">
              <div
                className="result-style"
                key={bootcamp._id}
              >
                {
                  <Card.Img
                    src={bootcamp.imageLinks.logo}
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
                    <span class="font-normal text-base">
                      {bootcamp.company}
                    </span>
                  </p>
                  <p class="font-medium text-lg">
                    Location:{" "}
                    <span class="font-normal text-base 1">
                      {bootcamp.location.city}
                    </span>
                  </p>
                  <p class="font-medium text-lg">
                    Duration:{" "}
                    <span class="font-normal text-base 1">
                      {bootcamp.durationType}
                    </span>
                  </p>
                </Card.Body>
              </div>
            </Card>
          ))
        )}
      </Container>
    </Container>
  );
};
export default Search;
