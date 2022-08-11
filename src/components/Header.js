import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <nav>
    <div class="nav-wrapper">
      <Link to="/" class="brand-logo">Logo</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
    </div>
  </nav>
  )
}

export default Header
