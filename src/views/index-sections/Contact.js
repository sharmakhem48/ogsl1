import React from "react";
import './Contact.styles.css';

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

  const spanstyle={
    color:'#00FFFF',
    fontSize:20,
    fontWeight: 'bold',
    }

  const copyright ={
    position: 'absolute',
    bottom: '8px',
  right: '16px',
  fontSize: '10px'
  }

function Contact() {
  return (
    <div id='contactpage'>
      <div className="section contact"
      style={{ backgroundImage:`url(https://cdn.pixabay.com/photo/2016/11/21/17/52/abstract-1846822_960_720.jpg)` }} >
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title">Contact-us</h2>
              <h5 className="description">
              <span style={spanstyle} color='blue'>+91-98114 68673</span><br/>
              <span style={spanstyle}>Opengateschooloflearning.info@gmail.com</span><br/>
              <span style={spanstyle}>88/3,Aurobindo-Marg,Adhcini,New Delhi-110017</span>
              </h5>
            </Col>
          </Row>
        </Container>
        <div className="et_pb_text_inner" style={copyright} >
        <h5 className="p1"  align='right'>
        © Copyright 2020 Open gate school of learning.&nbsp;All rights reserved.</h5>
      </div>
      </div>
    </div>
  );
}

export default Contact;
