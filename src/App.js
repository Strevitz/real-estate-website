import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Apartments from "./pages/Apartments";
import About from "./pages/About";
import SingleApartment from "./pages/SingleApartment";
import Error from "./pages/404";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/apartments/" component={Apartments} />
        <Route exact path="/about/" component={About} />
        <Route exact path="/apartments/:slug" component={SingleApartment} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
