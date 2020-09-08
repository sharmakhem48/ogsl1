import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row } from "reactstrap";

// core components

function WhoWeAre() {
  return (
    <div id='about'>
      <div className="section section-examples" data-background-color="black">
        <div className="space-50"></div>
        <Container className="text-center">
          <Row>
            <div className="col">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/ogsl_5.jpg")}
                ></img>
            </div>
            <div className="col">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/ogsl_8.jpg")}
                ></img>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default WhoWeAre;
