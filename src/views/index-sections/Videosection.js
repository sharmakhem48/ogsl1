import React from "react";
import './Video.styles.css';
import video from '../../assets/ogsl.mp4';


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
      <div className='video-section' style={{'background-color':'#FFFFF0'}}>
      <h4 className='video-section-title' align='center'>OUR WORK</h4>
      <div className='inner-video-section'>
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
  <div className="embed-responsive embed-responsive-16by9">
    <video id='iframe' className="embed-responsive-item" controls='0' autoplay='0' muted='1' src={item.src} ></video>
  </div>
                    </CarouselItem>
                  );
                })}
              </Carousel>
            </Col>
          </Row>
          </div>
        </div>
  );
}

export default VideoSection;
