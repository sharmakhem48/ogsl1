import React from "react";
import './typography.css';


// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

const styleobj1= {
  height: '50px',
  width: '50px',
  backgroundColorolor:'#555',
  border:'solid'
};

function Typography() {
  return (
  <div className='card-container'>
    <div className="flip-card">
      <div className="flip-card-inner">
          <div className="flip-card-front">
              <img src='https://www.kindpng.com/picc/b/59/598788.png'/>
          </div>
        <div className="flip-card-back">
          <img src='https://www.kindpng.com/picc/b/59/598788.png'/>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
          <div className="flip-card-front">
              <img src='https://image.flaticon.com/icons/svg/197/197593.svg'/>
          </div>
        <div className="flip-card-back">
          <img src='https://image.flaticon.com/icons/svg/197/197593.svg'/>
        </div>
      </div>
    </div>

    <div className="flip-card">
      <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src='https://cdn.countryflags.com/thumbs/germany/flag-button-round-250.png'/>
          </div>
        <div className="flip-card-back">
          <img src='https://cdn.countryflags.com/thumbs/germany/flag-button-round-250.png'/>
        </div>
      </div>
    </div>

    <div className="flip-card">
      <div className="flip-card-inner">
          <div className="flip-card-front">
                <img src='https://image.flaticon.com/icons/svg/197/197626.svg'/>
          </div>
        <div className="flip-card-back">
          <img src='https://image.flaticon.com/icons/svg/197/197626.svg'/>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
          <div className="flip-card-front">
              <img src='https://www.iconfinder.com/data/icons/european-country-flags/83/france-512.png'/>
          </div>
        <div className="flip-card-back">
          <img src='https://www.iconfinder.com/data/icons/european-country-flags/83/france-512.png'/>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
          <div className="flip-card-front">
                <img src='https://cdn.countryflags.com/thumbs/india/flag-button-round-250.png'/>
          </div>
        <div className="flip-card-back">
            <img src='https://cdn.countryflags.com/thumbs/india/flag-button-round-250.png'/>
        </div>
      </div>
    </div>

  </div>
  );
}

export default Typography;
