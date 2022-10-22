import React, { useContext } from 'react';
import './NavLinks.css';
import { Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from 'reactstrap';
const NavLinks = () => {
   const navigate = useNavigate();

   return (
      <>
         <Nav>
            <Nav.Item href="#section-1">
               <img
                  src="/assets/epslogo.png"
                  height="50px"
                  className="d-inline-block align-top"
               />
            </Nav.Item>
            <h1 className="txt-secondary">EPS</h1>
            {/* <Nav.Link as={Link} to="/about">
               ABOUT
            </Nav.Link>
            <Nav.Link as={Link} to="/history">
               HISTORY
            </Nav.Link> */}
         </Nav>
      </>
   );
};
export default NavLinks;
