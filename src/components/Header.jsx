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
        </div>
        <div className="navBarBig1">
          <div className="menu">
            <div className="list">
              <img className="logoSoft" src={logo} />
              <a className="a" data-target="Inicio" onClick={() => handleLinkClick("Inicio")}>Inicio</a>
              <a className="a" data-target="AboutUs" onClick={() => handleLinkClick("AboutUs")}>Nosotros</a>
              <a className="a" data-target="Worths" onClick={() => handleLinkClick("Worths")} >Valores</a>
              <a className="a" data-target="Solutions" onClick={() => handleLinkClick("Solutions")} >Soluciones</a>
              <a className="a" data-target="Afiliations" onClick={() => handleLinkClick("Afiliations")} >Clientes</a>
              <a className="a" data-target="Contact" onClick={() => handleLinkClick("Contact")} >Contacto</a>
              <div className="btnsContainer" >
                <ColorSwitchbtn />
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
                          <a data-target="Inicio" onClick={() => handleLinkClick("Inicio")}>Inicio</a>
                        </li>
                        <li>
                          <a data-target="AboutUs" onClick={() => handleLinkClick("AboutUs")}>Nosotros</a>
                        </li>
                        <li>
                          <a data-target="Worths" onClick={() => handleLinkClick("Worths")} >Valores</a>
                        </li>
                        <li>
                          <a data-target="Solutions" onClick={() => handleLinkClick("Solutions")}>Soluciones</a>
                        </li>
                        <li>
                          <a data-target="Afiliations" onClick={() => handleLinkClick("Afiliations")}>Clientes</a>
                        </li>
                        <li>
                          <a data-target="Contact" onClick={() => handleLinkClick("Contact")}>Contacto</a>
                        </li>
                      </ul>
                    </nav>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header

