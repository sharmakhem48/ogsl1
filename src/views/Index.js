import React from "react";
import { Switch, Route } from 'react-router-dom';

// reactstrap components
// import {
// } from "reactstrap";

// core components
import Navigation from "../components/Navbars/Navbar.js";
import Homepage from "./index-sections/Homepage.js";
import Reviewpage from './index-sections/Review-page.js';


function Index() {
  return (
    <div>
    <div>
    <Navigation />
    </div>
    <Switch>
    <Route exact path='/' component={Homepage} />
    <Route exact path='/reviews' component={Reviewpage} />
    </Switch>
  </div>
  );
}

export default Index;
