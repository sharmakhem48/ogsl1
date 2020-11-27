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
      fetch('https://122.176.16.34:5001/api/course')
      .then(response => response.json())
      .then(data => this.setState({courses:data.response.data}))
      .catch(error => console.log('I have errored'));
    }

  render() {
    const {courses} = this.state;
    console.log(courses);
    return (
      <div className="grid-container">
      {
      courses.map((course) => (
        <Curriculum key={course.id} {...course} />
      ))
    }
</div>
  )
  }
};

export default Courses;
