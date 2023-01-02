import React from 'react'
import { Link } from 'react-scroll'
import '../App.css'

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className="nav-item">
          <Link to="apropos" spy={true} smooth={true} offset={0} duration={700}>
            A propos
          </Link>
        </li>
        <li className="nav-item">
          <Link to="projets" spy={true} smooth={true} offset={0} duration={700}>
            Projets
          </Link>
        </li>
        <li className="nav-item">
          <Link to="contact" spy={true} smooth={true} offset={0} duration={700}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
