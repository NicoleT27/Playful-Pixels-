import React from 'react'
import "./Navbar.css";

import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import machine from '../../assets/images/Arcade machine-amico.png';


// Alejandra made this nav bar. Feel free to style it. It was just my way of checking if the pages were rendering correctly.
const Navigation = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <container className="navBar">
      <div className="container">
        <Navbar className="bg-body-tertiary">
          {/* if user is logged in... */}
          {user && (
            <div className="log-out">
              <Container>
                <Navbar.Text>
                  Signed in as:{" "}
                  <a href="#login">
                    <div>{user.email}</div>
                  </a>
                </Navbar.Text>
              </Container>

              <Link to="/">Home</Link>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
        </Navbar>
        {/* if user is logged out... */}
        {!user && (
          <div className="links">
            {/* <Link to="/">Home</Link> */}
            <Link to="/login">🕹️Login</Link>
            <Link to="/signup">🎮Signup</Link>
            {/* <Link to="/">{machine.png}</Link> */}
          </div>
        )}
      </div>
    </container>
  );
};

export default Navigation;

// I was trying to make the navbar look more like a navbar lol I didn't have a lot of luck --Mads 

// import "./Navbar.css";

// import { Link } from "react-router-dom";
// import { useLogout } from "../../hooks/useLogout";
// import { useAuthContext } from "../../hooks/useAuthContext";
// import { Navbar, Container, Nav } from 'react-bootstrap';

// function NavBar() {
//   const { logout } = useLogout();
//   const { user } = useAuthContext();

//   const handleClick = () => {
//     logout();
//   };
//   return (
//     <>
//       <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="py-0.5 mt-0">
//         <Container>
//           <Navbar.Brand as={Link} to="/">Playful Pixels</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link as={Link} to='/'>Home</Nav.Link>
//               <Nav.Link as={Link} to='/signup'>Signup</Nav.Link>
//               <Nav.Link as={Link} to='/login'>Login</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default NavBar;
