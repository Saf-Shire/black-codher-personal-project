import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../stylesheets/Search.css";
import axios from "axios";

const SearchBar = ({ searchDatabases,addBootcamp }) => {
  const [searching, setSearching] = useState(false);
  const [message, setMessage] = useState(null);
  const [query, setQuery] = useState("");
  const [bootcamps, setBootcamps] = useState([]);
  const [savedlist, setSavedlist] = useState([]);
  
  const handleChange = async (e) => {
    e.preventDefault();
    setSearching(true);
    setQuery(e.target.value);
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
      <Form id="searchBar" onSubmit={searchDatabases}>
        {/* <Form.Label> Search for a Bootcamp </Form.Label> */}
        <Form.Control
          type="text"
          name="query"
          placeholder="Search bootcamp by name..."
          className="form-control"
          value={query}
          onChange={handleChange}
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
              <span class="font-normal text-base">
                {bootcamp.company}
              </span>
            </p>
            <p class="font-medium text-lg">
              Location:{" "}
              <span class="font-normal text-base 1">
                {bootcamp.city}
              </span>
            </p>
            <p class="font-medium text-lg">
              Duration:{" "}
              <span class="font-normal text-base 1">
                {bootcamp.durationType}
              </span>
            </p>
            <Button
              id="controlButtons"
              onClick={() => favouriteBootcamp(bootcamp._id)}
            >
              {" "}
              Add +
            </Button>
            {/* <Button
              id="controlButtons"
              onClick={() => removeBootcamp(bootcamp._id)}
            >
              {" "}
              Remove -
            </Button> */}
          </Card.Body>
        </div>
      </Card>
    ))
  )}
</Container>

 {/* <Results  searchDatabases={searchDatabases} addBootcamp={addBootcamp} handleChange={handleChange} favouriteBootcamp={favouriteBootcamp} removeBootcamp={removeBootcamp} message={message} setMessage={setMessage} searching={searching} setSearching={setSearching} bootcamps={bootcamps} setBootcamps={setBootcamps}/> */}
  </Container>
  
  );
};

export default SearchBar;
