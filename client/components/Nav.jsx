import React from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'



const Nav = () => {
  return (
    <div>
      <Router>
      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="contact">Contact</Link></li>
      </ul>
      </Router>
    </div>
  )
}
export default Nav
