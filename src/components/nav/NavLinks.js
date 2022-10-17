import React, { useContext } from 'react';
import './NavLinks.css';
import { Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
const NavLinks = () => {
   const navigate = useNavigate();
   const logout = () => {
      auth.logout();
      navigate('/auth');
   };
   return (
      <>
         <Nav >
            <Nav.Link
               className=""
               as={Link}
               to="/"
              
               
            >
               EPS-logo
            </Nav.Link>

            <Nav.Link
               as={Link}
               to="/contact"
               
            >
               CONTACT
            </Nav.Link>

            <Nav.Link as={Link} to="/about">
            ABOUT
            </Nav.Link>
            <Nav.Link as={Link} to="/history">
            HISTORY
            </Nav.Link>
         </Nav>
               
        
      </>
   );
};
export default NavLinks;
