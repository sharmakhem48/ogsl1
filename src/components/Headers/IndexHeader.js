/*eslint-disable*/
import React from "react";
import './IndexHeader.styles.css'
import ogsl_logo from '../../assets/img/ogsl_logo.jpeg';


// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
 const span ={
   textAlign:'center',
   display: 'table-cell',
   verticalAlign:'middle'
 }
  return (
    <div className='header'>
    <img src={ogsl_logo} className="rounded mx-auto d-block"  alt="Responsive image" />
    </div>
  );
}

export default IndexHeader;
