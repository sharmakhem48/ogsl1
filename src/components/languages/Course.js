import React from 'react';
import './language.styles.css';
import DataTable from 'react-data-table-component';


class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: 0,
      c1:[]
      }
    }

  componentDidMount() {
    const courseId = this.props.match.params.id;
    fetch(`http://122.176.16.34:5000/api/course/${courseId}`)
    .then(response => response.json())
    .then(data => this.setState({c1:data.response.data}))
    .catch(error => console.log('I have errored'));
  }

  convertUppercase(string) {
    return (
      string.toUpperCase()
    );
  }

  renderNotes() {
      if (this.state.c1.name === "Tattoo-Art") {
        return(
          <div className='notes'><strong className='heading'>Course Inclusions</strong>:<br/>
                                  1. Sketching and Designing<br/>
                                  2. Element and Art Study<br/>
                                  3. Finalising the Art Work<br/>
                                  4. From Paper to Skin<br/>
                                  5. Study of Skin Types<br/>
                                  6. After Care and Hygine<br/>
                                  <strong className='heading'>Complementary Skills</strong>:<br/>
                                  • Photoshop<br/>
                                  • Communication and Counselling
          </div>)
      }
      else if (this.state.c1.name === "Sketching-Art") {
        return(<div className='notes'><strong className='heading'>Course Inclusions</strong>:<br/>
                                1. Brain-Train<br/>
                                2. Lining Work<br/>
                                3. Shading and Textures<br/>
                                4. Lighting and Rendering<br/>
                                5. Live Sketching<br/>
                                <strong className='heading'>Know your trainer:</strong>:<br/>
                                <div className="contact-buttons">
                                <a  href="https://www.instagram.com/firangitattoostudio/"
                                className="btn-floating btn-lg btn-ins" type="button" role="button"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.youtube.com/watch?v=8_lQtJfR070&feature=youtu.be"
                                className="btn-floating btn-lg btn-yt" type="button" role="button"><i class="fab fa-youtube"></i></a>
                                </div >
        </div>)
      } else if (this.state.c1.name === "IELTS") {
        return(<div className='notes'><strong className='heading'>Skills Covered</strong>:<br/>
                                1.Listeninig<br/>
                                2.Reading<br/>
                                3.Writing<br/>
                                4.Speaking<br/>
                                Note: Also includes 2 mock tests and 2 sessions on Grammer
              </div>)
      }

      else {
        return(<div />)
      }
  }

    render() {
      const data = this.state.c1.content;
      const columns = [
                      {
                      "name": "Type",
                      "selector":"type",
                      "soratable":"Type"
                      },
                      {"name": "Duration",
                      "selector":"duration",
                      "soratable":"Duration"
                      },
                      {"name": "Price (INR)",
                      "selector":"price",
                      "soratable":"Price (INR)"
                      },
                      {"name": "Level",
                      "selector":"level",
                      "soratable":"Level"
                      }]
      return (
        <div>
          <div className='table'>
            <div className='table-title'> {this.state.c1.name} details </div>
              <DataTable className='table-content' data={data} columns={columns} />
          </div>
          {this.renderNotes()}
        </div>
      )};
    }

export default Course;
