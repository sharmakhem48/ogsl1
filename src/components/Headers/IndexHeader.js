/*eslint-disable*/
import React from "react";


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

  const styleObj = {
      fontSize: 60,
      display: 'table',
      color: "#4a54f1",
      backgroundImage:`url(https://cdn.pixabay.com/photo/2020/02/06/01/52/frame-4822807_960_720.png)`,
      padding :'200px',
      height: '100%',
      width: '100%',
      backgroundAttachment:'fixed',
      backgroundPositionosition: 'center',
      backgroundRepeatepeat:'no-repeat',
      backgroundSize:'cover'
  }

 const span ={
   textAlign:'center',
   display: 'table-cell',
   verticalAlign:'middle'
 }
  return (
    <div>
      <div className="page-header clear-filter" filter-color="white">
        <div
          className="page-header-image"
          style={{
            backgroundImage: `url(https://cdn.pixabay.com/photo/2016/03/17/23/07/abstract-1264071_960_720.png)`,
          }}
          ref={pageHeader}
        ></div>
      </div>
      <div className='Container' style={styleObj} >
          <span className="h1-seo" style={span} ><strong>Open Gate School of Learning </strong></span>
      </div>
    </div>
  );
}

export default IndexHeader;
