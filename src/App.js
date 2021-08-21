import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalFonts from "./fonts/fonts";

import Header from "./components/Header.js";
import Movies from "./components/Movies.js";
import Characters from "./components/Characters.js";
import Comics from "./components/Comics.js";
import TVshows from "./components/TVshows.js";
import Home from "./components/Home.js";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalFonts />
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/characters" component={Characters} />
          <Route path="/tv_shows" component={TVshows} />
          <Route path="/comics" component={Comics} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
