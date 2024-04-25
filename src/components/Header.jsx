import React from "react";

function NavBar() {
  return (
    <nav className="navigation-bar">
      <ul className="navigation">
        <li className="navigation__item navigation__item--active" id="nav-hero">
          <a href="#hero">Home</a>
        </li>
        <li className="navigation__item" id="nav-about">
          <a href="#about">About</a>
        </li>
        <li className="navigation__item" id="nav-projects">
          <a href="#projects">Projects</a>
        </li>
        <li className="navigation__item" id="nav-contact">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
