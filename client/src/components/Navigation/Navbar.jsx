// import React from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <div>Navbar</div>
//   )
// }

// Alejandra made this nav bar. Feel free to style it. It was just my way of checking if the pages were rendering correctly.
const Navbar = () => {
  return (
    <header className='navBar'>
      <div className="container">
        <Link to="/">
          <h1>Playful Pixels</h1>
        </Link>
        <nav>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}


export default Navbar