import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';


import './navbar.css';

function Navbar({ scrollHandler, sectionRefs }) {
  return (
    <div className="Nav">
      <ul className="nav">
        <li className="navitems">&lt; Aryan /&gt;</li>
        <li onClick={() => scrollHandler(sectionRefs.section1)} className="navitems">
          About
        </li>
        <li onClick={() => scrollHandler(sectionRefs.section2)} className="navitems">
          Skills
        </li>
        <li className="navitems">
          Projects
        </li>
        <li onClick={() => scrollHandler(sectionRefs.section4)} className="navitems">
          Contact Me
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
