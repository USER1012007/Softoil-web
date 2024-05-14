import logo from "../Img/soft.png"
import '../css/menu.css';
import ColorSwitchbtn from "./ColorSwitchbtn";
import React, { useState } from 'react';

function Header() {

  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (targetId) => {
    setActiveLink(targetId);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="header">
        <div className="navBarBig">
          <div className="menuDrop">
            <label className="popup">
              <input className="none" type="checkbox" />
              <div className="burger" tabIndex="0">
                <span className="burgerLine"></span>
                <span className="burgerLine"></span>
                <span className="burgerLine"></span>
              </div>
              <nav className="popup-window">
                <legend>Softoil</legend>
                <ul className="list">
                  <li>
                    <a data-target="Products" onClick={() => handleLinkClick("Products")}>Nosotros</a>
                  </li>
                  <li>
                    <a data-target="Solutions" onClick={() => handleLinkClick("Solutions")}>Soluciones</a>
                  </li>
                  <li>
                    <a data-target="Afiliations" onClick={() => handleLinkClick("Afiliations")}>Afiliaciones</a>
                  </li>
                  <li>
                    <a data-target="Values" onClick={() => handleLinkClick("Values")}>Valores</a>
                  </li>
                  <li>
                    <a data-target="Contact" onClick={() => handleLinkClick("Contact")}>Contacto</a>
                  </li>
                  <li>
                    <a>Demo</a>
                  </li>
                </ul>
              </nav>
            </label>
          </div>
        </div>
        <div className="navBarBig1">
          <div className="menu">
            <div className="list">
              <img src={logo} />
              <a data-target="Products" onClick={() => handleLinkClick("Products")}>Nosotros</a>
              <a data-target="Solutions" onClick={() => handleLinkClick("Solutions")} >Soluciones</a>
              <a data-target="Afiliations" onClick={() => handleLinkClick("Afiliations")} >Afiliaciones</a>
              <a data-target="Values" onClick={() => handleLinkClick("Values")} >Valores</a>
              <a data-target="Contact" onClick={() => handleLinkClick("Contact")} >Contacto</a>
              <a>Demo</a>
            </div>
          </div>
        </div>
        <ColorSwitchbtn />
      </div>
    </>
  );
}

export default Header

