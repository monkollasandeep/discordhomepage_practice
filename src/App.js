import React from "react";
import HomePage from "./Components/Pages/HomePage";
import LandingPage from "./Components/Pages/LandingPage";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FloatHome from "./Components/Pages/FloatHome";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <FloatHome />
        </Route>
        <Route path="/homepage">
          <HomePage />
        </Route>
        <Route path="/landingpage">
          <LandingPage />
        </Route>
        <Route path="/floathome">
          <FloatHome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
