import React from 'react';
import './language.styles.css';
import DataTable from 'react-data-table-component';


class IELTS extends React.Component {
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
      const {IELTS, columns} = this.state['c1'];
      return (
        <div className='table'>
        <div className='table-title'>IELTS Training</div>
        <DataTable className='table-content' data={IELTS}
        columns={columns} />
        <br/>
        <div className='notes'><strong className='heading'>Skills Covered</strong>:<br/>
                                1.Listeninig<br/>
                                2.Reading<br/>
                                3.Writing<br/>
                                4.Speaking<br/>
                                Note: Also includes 2 mock tests and 2 sessions on Grammer
        </div>
        </div>
      )
   }
   };

export default IELTS;
