import React, { useState } from "react";
import axios from "axios";
import "../../stylesheets/Search.css";
import SearchForm from "./SearchForm";

const LandingPage = ({ addBootcamp }) => {
  const [bootcamps, setBootcamps] = useState([]);
  // const [query, setQuery] = useState("");
  const [searchOptions, setSearchOptions] = useState("");
  const [message, setMessage] = useState(null);

  const searchDatabases = async () => {
    const url = `http://localhost:5000/api/bootcamp?q=${searchOptions.company}`;
    // const url =`http://localhost:5000/api/bootcamp?q=${query}`;
    const response = await axios.get(url);
    const data = response.data.bootcamp;
    setBootcamps(data);
  };

  return (
    <React.Fragment>
      <SearchForm
        addBootcamp={addBootcamp}
        searchDatabases={searchDatabases}
        searchOptions={searchOptions}
        setSearchOptions={setSearchOptions}
        message={message}
        setMessage={setMessage}
      />
    </React.Fragment>
  );
};
export default LandingPage;
