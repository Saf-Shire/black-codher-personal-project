import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

import "./stylesheets/App.css";
import About from "./pages/About";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import SavedList from "./components/SavedList";
import Resources from "./pages/Resources";

function App() {
  const [savedbootcamp, setSavedBootcamp] = useState([]);
  function addBootcamp(bootcamp) {
    console.log(bootcamp);
    setSavedBootcamp([...savedbootcamp, ...bootcamp]);
  }
  function removeBootcamp() {
    setSavedBootcamp([]);
  }

  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              {/* <Filter count={bootcamps.length}/> */}
              <About />
              <LandingPage addBootcamp={addBootcamp} />
              <Footer />
            </React.Fragment>
          )}
        />

        <Route
          exact
          path="/saved"
          render={() => (
            <React.Fragment>
              <SavedList
                savedBootcamp={savedbootcamp}
                removeBootcamp={removeBootcamp}
              />
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/resources"
          render={() => (
            <React.Fragment>
              <Resources/>
            </React.Fragment>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
