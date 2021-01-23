import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import './About.styles.css';

// core components

function About() {
  return (
      <div className="about-page" data-background-color="black" id="about">
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="about-title">About</h3>
              <h5 className="description"><br/>
              We are a diverse school where travel and skills are combined to give people from all around the world a unique experience. We offer language courses, courses on tattoo-making, sketching, photography and more. Apart from these, we conduct Food-walks, Heritage-walks, City-tours and Pan-India trips lead by accomplished heritage walk leaders with whom you can practice the language(s) you are learning. The idea is to learn ON THE GO! So, if you are someone who loves to travel and would love to explore India while learning a skill set, this is the place to be! All our courses are highly interactive and versatile. We make sure that all our students learn in the best possible way. The languages that we offer are taught by teachers who don’t just know the language, they are well-versed in the methodology used to teach a language because we strictly believe that a language should be taught as a language and not as a subject!
              So, join us for the EXPERIENCE.
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default About;
