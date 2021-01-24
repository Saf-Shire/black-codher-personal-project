import React, { useState,useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import AOS from "aos";
import "aos/dist/aos.css";
import "./stylesheets/App.css";
import Jumbotron from "./components/Jumbotron"
import Copyright from "./components/Copyright";
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
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              <Jumbotron/>
            
           
            </React.Fragment>
          )}
        />
         <Route
          exact
          path="/search"
          render={() => (
            <React.Fragment>
          
              <LandingPage addBootcamp={addBootcamp} />
             
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
      <Copyright />
    </BrowserRouter>
  );
}
export default App;
