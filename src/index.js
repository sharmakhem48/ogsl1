import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";

// pages for this kit
import Index from "views/Index.js";
ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}><Index /></Router>,
  document.getElementById("root")
);
