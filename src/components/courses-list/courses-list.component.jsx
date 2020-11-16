import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Curriculum = ({ name, history, linkUrl , match }) => {

  return (
  <div className="container mt-2">
 <div className="card card-block mb-2" onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <h4 className="card-title">{name}</h4>
  </div>
  </div>
)
};

export default withRouter(Curriculum);
