import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";

// pages for this kit
import Index from "views/Index.js";
ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}><Index /></Router>,
  document.getElementById("root")
);
