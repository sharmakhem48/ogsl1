import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";




function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  let a = <a>Photos</a>
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 99 ||
        document.body.scrollTop > 99
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 100 ||
        document.body.scrollTop < 100
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <div className='navmenu'>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
            <NavItem>
              <NavLink
                href="#ogsl"
                onClick={(e) => {
                  document
                    .getElementById("ogsl")
                    .scrollIntoView();
                }}
              >
                <i className="now-ui-icons shopping_shop"></i>
                <p>Home</p>
              </NavLink>
            </NavItem>
              <NavItem>
                <NavLink
                href="#about"
                  onClick={(e) => {
                    document
                      .getElementById("about")
                      .scrollIntoView()
                  }}
                >
                  <i className="now-ui-icons travel_info"></i>
                  <p>About</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                href="#photos"
                  onClick={(e) => {
                    document
                      .getElementById("carousel")
                      .scrollIntoView()
                  }}
                >
                  <i className="now-ui-icons design_image"></i>
                  <p>Photos</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                href="#videos"
                  onClick={(e) => {
                    document
                      .getElementById("know-us")
                      .scrollIntoView()
                  }}
                >
                  <i className="now-ui-icons design_image"></i>
                  <p>Know-us</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                href="#contact"
                  onClick={(e) => {
                    document
                      .getElementById("contactpage")
                      .scrollIntoView()
                  }}
                >
                  <i className="now-ui-icons ui-1_email-85"></i>
                  <p>Contact-us</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href=""
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href=""
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://instagram.com/opengateschooloflearning?igshid=1qkij1v56tcy0"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default IndexNavbar;
