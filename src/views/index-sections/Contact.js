import React from "react";
import './Contact.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core component
function Contact() {
  return (
    <div className='contact-page'>
    <div className=' container'>
    <Row className="justify-content-md-center">
      <Col className="text-center" lg="8" md="12">
      <div className='contact-page-title'> Contact us </div>
      </Col>
    </Row>
    <div className='icons-box'>
    <Row className="justify-content-md-center">
      <Col className="text-center" lg="8" md="12">
      <div className='icons'>
      <i class="fa fa-phone fa-2x" aria-hidden="true"></i>
      </div>
      </Col>
      <Col className="text-center" lg="8" md="12">
      <div className='contact-content'>
      +91-9811468673
      </div>
      </Col>
    </Row>
    </div>
    <div className='icons-box'>
    <Row className="justify-content-md-center">
      <Col className="text-center" lg="8" md="12">
      <div className='icons'>
      <i class="fas fa-map-marker-alt fa-2x" aria-hidden="true"></i>
      </div>
      </Col>
      <Col className="text-center" lg="8" md="12">
      <div className='contact-content'>
      Plot-no:94, 1st and 2nd Floor <br/> Adhchini Village <br/> Aurobindo Marg <br/> 110017
      </div>
      </Col>
    </Row>
    </div>
    <div className='icons-box'>
    <Row className="justify-content-md-center">
      <Col className="text-center" lg="8" md="12">
      <div className='icons'>
      <i class="fas fa-envelope fa-2x" aria-hidden="true"></i>
      </div>
      </Col>
      <Col className="text-center" lg="8" md="12">
      <div className='contact-content'>
      opengateschooloflearning.info@gmail.com
      </div>
      </Col>
    </Row>
    </div>
    <div className="AA d-flex justify-content-center">
    <div className='social-site-icons'>
    <a className="contact-buttons"  href='https://www.instagram.com/opengateschooloflearning/'>
        <i className="fab fa-instagram fa-2x fa-blue" /></a>
    </div>
    <div className='social-site-icons'>
    <a className="contact-buttons"  href='https://www.facebook.com/Open-Gate-School-of-Learning-101851898267149'>
        <i className="fab fa-facebook fa-2x" style={{'color':'blue'}}/></a>
    </div>
    </div>
    <div className='d-flex justify-content-end'>
    <div className="bottomright">© Copyright 2020 Ogsl.All rights reserved.</div>
    </div>
    </div>
    </div>
  );
}

export default Contact;
