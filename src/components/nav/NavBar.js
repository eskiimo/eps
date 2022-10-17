import React, { useState } from 'react';
import { Navbar, NavbarBrand,NavLink,NavItem, Nav, NavbarToggler, Collapse } from 'reactstrap';

import './NavBar.css';
import NavLinks from './NavLinks';
// import NavLinks from './NavLinks';

const ResponsiveAppBar = () => {

   const[isOpen,setIsOpen]=useState(false)
const toggle=()=>{
   setIsOpen(!isOpen)
}
   return (
      <div>
          <Navbar
            className="my-2"
            color="dark"
            dark="true"
         >
            {/* <NavbarBrand href="/">
               EPS
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse navbar isOpen={isOpen}>
            <Nav navbar className='me-auto'>
               <NavItem>
               <NavLink to="/about">About</NavLink>
               </NavItem>

               
               <NavItem>
               <NavLink to="/history">History</NavLink>
               </NavItem>
               <NavItem>
               <NavLink to="/contact">Contact</NavLink>
               </NavItem>
            </Nav>
            </Collapse>
            <Nav className='uncollapse' >
               <NavItem>
               <NavLink to="/about">About</NavLink>
               </NavItem>

               
               <NavItem>
               <NavLink to="/History">History</NavLink>
               </NavItem>
               <NavItem>
               <NavLink to="/contact">Contact</NavLink>
               </NavItem>
            </Nav> */}
            <NavLinks/>
         </Navbar>
      </div>
   );
};
export default ResponsiveAppBar;
