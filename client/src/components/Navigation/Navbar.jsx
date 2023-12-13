import React from 'react'
import "./Navbar.css";

import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import arcadeMachine from "../../assets/images/machine.png"



// Alejandra made this nav bar. Feel free to style it. It was just my way of checking if the pages were rendering correctly.
const Navigation = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <div className="navBar">
        <Navbar className="bg-body-tertiary">
          {/* if user is logged in... */}
          {user && (
            <div className="log-out">
                <Navbar.Text className="navLink">
                  Signed in as:{" "}
                  <Link to="#login" >
                    <div className='currentUser'>{user.username}</div>
                  </Link>
                </Navbar.Text>
                <div className='icon'>
              <Link to="/" className='navLink'>Home</Link>
              <img src={arcadeMachine} alt="Home" className='aracdeMachine' />
              </div>
              <button onClick={handleClick} className='logOutBtn'>Log out</button>
            </div>
          )}
        </Navbar>
        {/* if user is logged out... */}
        {!user && (
          <div className="links">
            <Link to="/login">🕹️Login</Link>
            <Link to="/signup">🎮Signup</Link>
          </div>
        )}
    </div>
    
  );
};

export default Navigation;

// import React from 'react';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { useLogout } from '../../hooks/useLogout';
// import { useAuthContext } from '../../hooks/useAuthContext';
// import arcadeMachine from '../../assets/images/machine.png';

// const Navigation = () => {
//   const { logout } = useLogout();
//   const { user } = useAuthContext();

//   const handleClick = () => {
//     logout();
//   };

//   return (
//     <Navbar bg="body-tertiary" expand="sm">
//       <Navbar.Brand>
//         <Link to="/" className="navLink">
//           <img src={arcadeMachine} alt="Home" className="arcadeMachine" />
//         </Link>
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         {user ? (
//           <Nav className="ml-auto">
//             <NavDropdown title={`Signed in as: ${user.email}`} id="basic-nav-dropdown">
//               <NavDropdown.Item as={Link} to="#login">
//                 Profile
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item onClick={handleClick}>Log out</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         ) : (
//           <Nav className="ml-auto">
//             <Link to="/login" className="navLink">
//               🕹️Login
//             </Link>
//             <Link to="/signup" className="navLink">
//               🎮Signup
//             </Link>
//           </Nav>
//         )}
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default Navigation;
