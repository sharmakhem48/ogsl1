import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function About() {
  return (
      <div className="section section-download" data-background-color="black" id="about">
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">Open Gate School of Learning</h3>
              <h5 className="description">
We are a diverse school where travel and skills are combined to give people
from all around the world a unique experience. We offer language courses and courses
on film making, tattooing,
art, photography and music. The idea is to learn ON THE GO! So,
if you are someone who loves to travel and would love to explore India while learning a
skill set, this is the place to be!
All our courses are highly interactive and versatile. We make sure that
all our students learn in the best possible way.
The languages that we offer are taught by teachers who don not just know the language,
they are well-versed in the methodology used to teach a language because
we strictly believe that a language should be taught as a language and not as a subject!
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default About;
