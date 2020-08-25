import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import scrollToTop from "./components/scrollToTop";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { RoomProvider } from "./context";

ReactDOM.render(
  <RoomProvider>
    <scrollToTop>
      <Router>
        <App />
      </Router>
    </scrollToTop>
  </RoomProvider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
