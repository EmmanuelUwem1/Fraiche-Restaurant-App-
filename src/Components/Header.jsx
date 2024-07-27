import "../App.css"
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'

function Header(props) {
  const [HamMenuOpen, setHamMenu] = useState(false)
  function toggleHamMenu(){
    setHamMenu(!HamMenuOpen);
  }
  function closeHamMenu(){
    setHamMenu(false)
  }
 

  return (
    <header>
      <Link to='/' className="logo" onClick={closeHamMenu}>Fraiche</Link>
      <nav>
        <div className={HamMenuOpen ? "nav-links open" : "nav-links"}>
        <NavLink to='/'  onClick={closeHamMenu}>Home</NavLink>
        <NavLink to='/Menu' onClick={closeHamMenu}>Menu</NavLink>
        <NavLink to='/About' onClick={closeHamMenu}>About</NavLink>
        <NavLink to='/Gallery' onClick={closeHamMenu}>Gallery</NavLink>
        <NavLink to='/Contact' onClick={closeHamMenu}>Contact</NavLink>
        </div>
        <button className="sec-btn">Order Now</button>
        <div className={HamMenuOpen ? "ham-menu open": "ham-menu"} onClick={toggleHamMenu}>
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="bar3"></span>

                <div className="cancel-menu-icon">
                    <span className="bar1"></span>
                    <span className="bar2"></span>
                </div>
            </div>
      </nav>
    </header>
  );
}
export default Header;
