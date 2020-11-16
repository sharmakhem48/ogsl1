import React from 'react';
import './language.styles.css';
import DataTable from 'react-data-table-component';


class Tattoo extends React.Component {
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
      const {TattooArt, columns} = this.state['c1'];
      return (
        <div className='table'>
        <div className='table-title'>Tattoo Art</div>
        <DataTable className='table-content' data={TattooArt}
        columns={columns} />
        <br/>
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
        </div>
        </div>
      )
   }
   };

export default Tattoo;
