// Header.jsx
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
// note: 'HashLink' can be renamed to anything, commonly { HashLink }.

function NavBar() {
  return (
    <nav className="navigation-bar">
      <ul className="navigation">
        <li className="navigation__item navigation__item--active" id="nav-hero">
          {/* Notice we use /#hero to ensure we route back to home and then jump to #hero */}
          <Link smooth to="/#hero">
            Home
          </Link>
        </li>
        <li className="navigation__item" id="nav-about">
          <Link smooth to="/#about">
            About
          </Link>
        </li>
        <li className="navigation__item" id="nav-projects">
          <Link smooth to="/#projects">
            Projects
          </Link>
        </li>
        <li className="navigation__item" id="nav-contact">
          <Link smooth to="/#contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
