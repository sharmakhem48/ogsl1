import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './Navbar.styles.css';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


const Navigation = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const handleClickAway = () => {
      setCollapsed(true);
    };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
    <div>
      <Navbar className='navbar fixed-top navbar-light'>
        <NavbarBrand  href="/ogsl1" className="mr-auto">OGSL</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/ogsl1" onClick={toggleNavbar}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ogsl1/#about" onClick={toggleNavbar}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ogsl1/#contactpage" onClick={toggleNavbar}>Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ogsl1/reviews" onClick={toggleNavbar}>Reviews</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ogsl1/courses" onClick={toggleNavbar}>Courses</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    </ClickAwayListener>
  );
}

export default Navigation;
