import React from 'react';

import logo from "../images/Booki.png";
import "../style.css";

function Header() {
    return (
      <header>
        <img src={logo} alt="logo-Booki" />
        <nav>
          <a href="#hebergements" className="nav-links"> Hébergements</a>
          <a href="#activite" className="nav-links"> Activités</a>
        </nav>
      </header>
    );
}

export default Header;
