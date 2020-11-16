import React from "react";
import './Contact.styles.css';

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Contact() {
  return (
    <div className=" section-download " id="contactpage">
      <Container className='icons'>
        <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
            <h3 className="title">Contact-Us</h3>
          </Col>
          <Col className="text-center" lg="8" md="12">
            <span className="fas fa-phone">
            <span className='description'>: +91-9811468673</span> </span>
          </Col>
          <Col className="text-center" lg="8" md="12" sm="8">
            <span className="fas fa-envelope">
            <span className='description'>: Opengateschooloflearning@gmail.com </span></span>
          </Col>
          <Col className="text-center" lg="8" md="12">
            <span className="fas fa-building">
            <span className='description'>: 88/3,Aurobindo Marg Adchini,New Delhi-110017 </span></span>
            </Col>
        </Row>
        <div class="fixed-bottom copyright">© Copyright 2020 Ogsl. All rights reserved.</div>
      </Container>
    </div>
  );
}

export default Contact;
