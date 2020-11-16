import React from 'react';
import Curriculum from '../../components/courses-list/courses-list.component';
import './courses.styles.css';
import { Switch, Route } from 'react-router-dom';

class Courses extends React.Component {
  constructor() {
    super();
    this.state = {
    courses:[]
  }
  }
    componentDidMount() {
      fetch('http://127.0.0.1:5000/courses')
      .then(response => response.json())
      .then(courses => this.setState({courses: courses}))
      .catch(error => console.log('I have errored'));
    }

  render() {
    const {courses} = this.state;
    return (
      <div className="grid-container">
      {
      courses.map(({id, ...othersCoursesProps}) => (
        <Curriculum key={id} {...othersCoursesProps} />
      ))
    }
</div>
  )
  }
};

export default Courses;
