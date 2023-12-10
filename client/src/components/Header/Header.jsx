import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import NavBar from '../Navigation/Navbar'
const header = () => {
  return (
    <div>
  <h1>Playful Pixels</h1>
    <NavBar />
</div>

  )
}

export default header