// import React from 'react'
import "./Navbar.css";

import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
// import machine from '../../assets/images/Arcade machine-amico.png';


// Alejandra made this nav bar. Feel free to style it. It was just my way of checking if the pages were rendering correctly.
const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header className="navBar">
      <div className="container">
        <nav>
          {/* if user is logged in... */}
          {user && (
            <div>
              <div>{user.email}</div>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}

          {/* if user is logged out... */}
          {!user && (
            <div className="links">
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
