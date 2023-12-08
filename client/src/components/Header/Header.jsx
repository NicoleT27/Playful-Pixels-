import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
const header = () => {
  return (
    <div className='header'>
      <Link to="/">
  <h1>Welcome to Playful Pixels</h1>
  </Link>
</div>
  )
}

export default header