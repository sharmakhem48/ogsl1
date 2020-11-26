import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Curriculum = ({ name, id, history, match }) => {
  return (
  <div className="container mt-2">
 <div className="card card-block mb-2" onClick={() => history.push(`${match.url}/${id}`)}>
    <h4 className="card-title">{name}</h4>
  </div>
  </div>
)
};

export default withRouter(Curriculum);
