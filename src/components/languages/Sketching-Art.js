import React from 'react';
import './language.styles.css';
import DataTable from 'react-data-table-component';


class Sketching extends React.Component {
  constructor() {
    super();
    this.state = {
      c1:[]
      }
    }

  componentDidMount() {
    fetch('http://127.0.0.1:5000/content')
    .then(response => response.json())
    .then(content => this.setState({c1:content}))
    .catch(error => console.log('I have errored'));
  }
    render() {
      const {SketchingArt, columns} = this.state['c1'];
      return (
        <div className='table'>
        <div className='table-title'>Sketching Art</div>
        <DataTable className='table-content' data={SketchingArt}
        columns={columns} />
        <br/>
        <div className='notes'><strong className='heading'>Course Inclusions</strong>:<br/>
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
        </div>
        </div>
      )
   }
   };

export default Sketching;
