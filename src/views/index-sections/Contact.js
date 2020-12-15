import React from "react";
import './Contact.styles.css';

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
const style ={
  color :'black',
  size:'20px'
}

function Contact() {
  return (
    <div className="section-download" id="contactpage">
    <div className="text-center" lg="8" md="12" xs='2'>
      <h3 className="title1">Contact-Us</h3>
    </div>
      <Container className='icons'>
        <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
            <span className="fas fa-phone">
            <span className='description'> : +91-9811468673</span> </span>
          </Col>
          <Col className="text-center" lg="8" md="12" sm="8">
            <span className="fas fa-envelope">
            <span className='description'> : Opengateschooloflearning@gmail.com </span></span>
          </Col>
          <Col className="text-center" lg="8" md="12">
            <span className="fas fa-building white">
            <span className='description'> : 88/3,Aurobindo Marg Adchini,New Delhi-110017 </span></span>
          </Col>
        </Row>
        <Row className='contact-icons'>
        <Col className="text-center">
        <a className="contact-buttons"  href='https://www.instagram.com/opengateschooloflearning/'>
        <i className="fab fa-instagram fa-2x fa-blue" /></a> &nbsp; &nbsp;
        <a className="contact-buttons"  href='https://www.facebook.com/Open-Gate-School-of-Learning-101851898267149'>
        <i className="fab fa-facebook fa-2x" style={{'color':'blue'}}/></a>
        </Col>
        </Row>
        <div class="fixed-bottom copyright">© Copyright 2020 Ogsl.All rights reserved.</div>
      </Container>
    </div>
  );
}

export default Contact;
