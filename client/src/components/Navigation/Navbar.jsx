// import React from 'react'
import "./Navbar.css";

import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

// const Navbar = () => {
//   return (
//     <div>Navbar</div>
//   )
// }

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
        <Link to="/">
          <h1 className="title">Playful Pixels</h1>
        </Link>
        <nav>
          {/* if user is logged in... */}
          {user && (
            <div>
              <div>{user.email}</div>
              {/* for now, regardless of whether the user is logged in or out, the nav bar will display all games... this is while we are in the development stage. */}
              <button onClick={handleClick}>Log out</button>
              <Link to="/candy">Candy Crush</Link>
              <Link to="">Memory Game</Link>
              <Link to="">Tic Tac Toe</Link>
            </div>
          )}

          {/* if user is logged out... */}
          {!user && (
            <div className="links">
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
              {/* for now, regardless of whether the user is logged in or out, the nav bar will display all games... this is while we are in the development stage. */}
              <Link to="/candy">Candy Crush</Link>
              <Link to="">Memory Game</Link>
              <Link to="">Tic Tac Toe</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
