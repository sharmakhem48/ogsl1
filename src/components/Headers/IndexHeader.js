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
            backgroundImage: `url(https://cdn.pixabay.com/photo/2016/03/17/23/07/abstract-1264071_960_720.png)`,
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
