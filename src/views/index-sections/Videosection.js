import React from "react";


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

const styleObj2 = {
    fontSize: 20,
    backgroundImage:`url(https://cdn.pixabay.com/photo/2019/01/26/11/56/flowers-3956074_960_720.jpg)`,
    height: '100%',
    width: '100%',
    backgroundAttachment:'fixed',
    backgroundPosition: 'center',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
  }

const items = [
  {
    src: "https://www.instagram.com/p/CEqZiFoh3vy/embed/?rel=0&amp;autoplay=0&mute=0",
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
    <div id='know-us' >
      <div className="section" id="carousel" style={styleObj2}>
        <Container>
          <div className="title">
            <h4 align='center'>CHECK US OUT</h4> <br/><br/>
          </div>
          <Row className="justify-content-center">
            <Col lg="8" md="10">
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
                   <iframe width="730" height="460" src={item.src} frameborder="0" allowfullscreen></iframe>
                      <div className="carousel-caption d-none d-md-block">
                        <h5>{item.caption}</h5>
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
