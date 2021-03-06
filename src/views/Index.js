import React from "react";
import { Switch, Route } from 'react-router-dom';

// reactstrap components
// import {
// } from "reactstrap";

// core components
import Navigation from "../components/Navbars/Navbar.js";
import Homepage from "./index-sections/Homepage.js";
import Reviewpage from './index-sections/Review-page.js';
import Courses from './index-sections/Courses.js';
import Course from '../components/languages/Course.js';



class Index extends React.Component {
  constructor() {
    super();
    }
  render() {
  return (
    <div>
    <div className='navbar'>
    <Navigation />
    </div>
    <Switch>
    <Route exact path='/' component={Homepage} />
    <Route exact path='/reviews' component={Reviewpage} />
    <Route  exact path='/courses' component={Courses} />
    <Route exact path='/courses/:id' component={Course} />
    </Switch>
  </div>
  );
}
};

export default Index;
