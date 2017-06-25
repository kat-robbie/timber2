import React from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'



const Nav = () => {
  return (
    <div className="nav">
      <div className="container">
        <Router>
          <ul className="list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="contact">Contact</Link></li>
          </ul>
        </Router>
      </div>
    </div>
  )
}
export default Nav
