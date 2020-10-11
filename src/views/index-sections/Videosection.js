import React from "react";
import './Video.styles.css';
import video from '../../assets/ogsl.mp4';
import ReactPlayer from 'react-player'


// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components


const items = [
  {
    src: video,
    altText: "ogsl",
    caption: "ogsl",
  }
];

function VideoSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };

  const mute = () => {
    const myvid = document.getElementById('iframe')
    myvid.mute= true;
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <div id='know-us' >
      <div className="section-video" id="video">
        <Container>
        <div>
        <Row className="justify-content-center">
        <h4 className='title1' align='center'>OUR WORK</h4> <br/><br/><br/>
        </Row >
        </div>
          <Row className="justify-content-center">
            <Col>
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map((item) => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
  <div class="embed-responsive embed-responsive-16by9">
    <iframe id='iframe' class="embed-responsive-item" src={item.src}></iframe>
  </div>
                    </CarouselItem>
                  );
                })}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default VideoSection;
