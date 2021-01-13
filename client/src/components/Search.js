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
  const SearchDatabases = async (e) => {
    e.preventDefault();
    setSearching(true);
    const url = `http://localhost:5000/api/bootcamp?q=${query}`;
    try {
      // const response = await fetch(url);
      // const data = await response.json();
      const response= await axios.get(url);
      const data = response.data ;
      setMessage(null);
      console.log(data);
      setBootcamps(data);
      setSearching(false);
    } catch (err) {
      setBootcamps([])
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

  return (
    <div className="container mx-auto pt-6">
      <div class="flex justify-center max-w-screen-sm mx-auto overflow-hidden px-10">
        <Form class="searchBar" onSubmit={SearchDatabases}>
          {/* <Form.Label> Search for a Bootcamp </Form.Label> */}
          <Form.Control
            type="text"
            name="query"
            placeholder="Search bootcamp by name..."
            class="appearance-none w-full outline-none focus:outline-none active:outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <i class="fas fa-search"></i>
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

      <div class="container mx-auto">
        {searching && !message ? (
          <span> loading... </span>
        ) : message ? (
          <div className="message"> {message} </div>
        ) : (
          bootcamps.map((bootcamp) => (
            <div class="inline-block px-2 w-64 h-64">
              <div
                class="bg-white rounded-lg overflow-hidden shadow-xl my-8 py-4"
                key={bootcamp._id}
              >
                {
                  <img
                    src={bootcamp.imageLinks.logo}
                    alt="bootcampimage"
                    class="w-full h-64"
                  />
                }
                <div class="p-4">
                  <p class="font-medium text-lg">
                    Title:{" "}
                    <span class="font-normal text-base leadin-relaxed">
                      {bootcamp.title}
                    </span>
                  </p>
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
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default Search;
