/*eslint-disable*/
import React from "react";
import './IndexHeader.styles.css'


// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

 const span ={
   textAlign:'center',
   display: 'table-cell',
   verticalAlign:'middle'
 }
  return (
    <div className='header'>
      <div className="page-header clear-filter" filter-color="white">
        <div
          className="page-header-image"
          style={{
            backgroundImage: `url(https://cdn.pixabay.com/photo/2014/08/12/20/40/moon-416973_960_720.jpg)`,
          }}
          ref={pageHeader}
        ></div>
      </div>
      <div className='Container'>
          <span className="h1-seo" style={span} ><strong>Open Gate School of Learning </strong></span>
      </div>
    </div>
  );
}

export default IndexHeader;
