import React from 'react'
import "./Navbar.css";

import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import arcadeMachine from "../../assets/images/machine.png";
import 'bootstrap/dist/css/bootstrap.min.css'; /* this was the missing import we needed to get the navbar inline styling to work*/



// Alejandra made this nav bar. Feel free to style it. It was just my way of checking if the pages were rendering correctly.
const Navigation = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <div className="navBar d-flex justify-content-center"  fixed="bottom">
        <Navbar expand="lg" >
          {/* if user is logged in... */}
          {user && (
            <div className="log-out d-flex justify-content-between">
                <Navbar.Text className="navLink ms-auto">
                  Signed in as:{" "}
                  <Link to="#login" >
                    <div className='currentUser d-flex-column'>{user.username}</div>
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
          <div className="links d-flex justify-content-center">
            <Link to="/login">🕹️Login</Link>
            <Link to="/signup">🎮Signup</Link>
          </div>
        )}
    </div>

  );
};

export default Navigation;

// import { Link } from "react-router-dom";
// import { useLogout } from "../../hooks/useLogout";
// import { useAuthContext } from "../../hooks/useAuthContext";
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import arcadeMachine from "../../assets/images/machine.png"
// import Container from 'react-bootstrap/Container';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./Navbar.css";




// function Navigation() {
//   const { logout } = useLogout();
//   const { user } = useAuthContext();

//   const handleClick = () => {
//     logout();
//   };

//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand><Link to="#login" >
//           <div className='currentUser'>{user.username}</div>
//         </Link></Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Logout</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Navigation;