import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";

// sections for this page
import Typography from "./index-sections/Typography.js";
import Carousel from "./index-sections/Carousel.js";
import VideoSection from "./index-sections/Videosection.js";
import Contact from "./index-sections/Contact.js";
import WhoWeAre from "./index-sections/Whoweare.js";
import About from "./index-sections/About.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <div id='ogsl'>
      <IndexNavbar />
        <IndexHeader />
        <Typography />
          <Carousel/>
          <VideoSection />
          <WhoWeAre />
          <About />
          <Contact />
        </div>
  );
}

export default Index;
