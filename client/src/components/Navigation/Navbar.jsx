// import React from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';

// const Navbar = () => {
//   return (
//     <div>Navbar</div>
//   )
// }

// Alejandra made this nav bar. Feel free to style it. It was just my way of checking if the pages were rendering correctly.
const Navbar = () => {


  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };


  return (
    <header className='navBar'>
      <div className="container">
        <Link to="/">
          <h1>Playful Pixels</h1>
        </Link>
        <nav>
          <div>
            <button onClick={handleClick}>Log out</button>
          </div>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
          <Link to="/candy">Candy Crush</Link>
        </nav>
      </div>
    </header>
  )
}


export default Navbar