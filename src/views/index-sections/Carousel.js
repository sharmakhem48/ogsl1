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

const items = [
  {
    src: require("assets/img/ogsl_1.jpg"),
    altText: "ogsl",
    caption: "ogsl",
  },
  {

      src: require("assets/img/ogsl_2.jpg"),
      altText: "ogsl",
      caption: "ogsl",
  },
  {

      src: require("assets/img/ogsl_3.jpg"),
      altText: "ogsl",
      caption: "ogsl",
  },
  {

      src: require("assets/img/ogsl_4.jpg"),
      altText: "ogsl",
      caption: "ogsl",
  },
  {

      src: require("assets/img/ogsl_6.jpg"),
      altText: "ogsl",
      caption: "ogsl",
  },
];

const styleObj = {
    fontSize: 10,
    display: 'table',
    color: "white",
    backgroundImage:`url(https://cdn.pixabay.com/photo/2018/02/03/08/00/background-3127102_960_720.jpg)`,
    padding :'90px',
    height: '100%',
    width: '100%',
    backgroundAttachment:'fixed',
    backgroundPositionosition: 'center',
    backgroundRepeatepeat:'no-repeat',
    backgroundSize:'cover'
}
function CarouselSection() {
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
      <div className="section" id="carousel" style={styleObj}>
        <Container>
          <div className="title" Align='center'>
            <h1 >PHOTO SPOT</h1>
          </div>
          <Row className="justify-content-center">
            <Col lg="8" md="12">
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
                      <img src={item.src} alt={item.altText} />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>{item.caption}</h5>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default CarouselSection;
