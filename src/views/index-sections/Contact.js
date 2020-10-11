import React from "react";
import './Contact.styles.css';

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Contact() {
  return (
    <div id='contactpage'>
      <div className="section contact"
      style={{ backgroundColor: "maroon" }} >
        <Container className="text-center">
          <Row className="justify-content-md-center justify-content-sm-center">
            <Col>
            <div className='contents'>
              <h2 className="title">Contact-us</h2>
              <span id='s1'>+91-98114 68673</span><br/>
              <span id='s2'>Opengateschooloflearning.info@gmail.com</span><br/>
              <span id='s3'>88/3,Aurobindo-Marg,Adhcini,New Delhi-110017</span>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="et_pb_text_inner" >
        <h5 className="p1"  align='right'>
        © Copyright 2020 Open gate school of learning.&nbsp;All rights reserved.</h5>
      </div>
      </div>
    </div>
  );
}

export default Contact;
