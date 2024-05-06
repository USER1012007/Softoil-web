import logo from "../Img/soft.png"
import '../css/menu.css';
import React, { useState } from 'react';

function Header() {

  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (targetId) => {
    setActiveLink(targetId);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  };

    // const [isChecked, setIsChecked] = useState(false);
    //
    // const handleCheckboxChange = (event) => {
    //   setIsChecked(event.target.checked); // Update state on checkbox change
    //   if (!isChecked) {
    //     document.body.style.backgroundColor = '#1c1b22';
    //   } else {
    //     document.body.style.backgroundColor = '#ffffff';
    //   }
    // };
      return(
      <>
      <div className="header">
        <div className="navBarBig">
          <div className="menuDrop">
            <label className="popup">
              <input className="none" type="checkbox"/>
              <div className="burger" tabIndex="0">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <nav className="popup-window">
                <legend>Softoil</legend>
                <ul className="list">
                  <li>
                   <a data-target="Products" onClick={() => handleLinkClick("Home")}>Inicio</a>
                  </li>
                  <li>
                    <a data-target="Products" onClick={() => handleLinkClick("Products")}>Productos</a>
                  </li>
                  <li>
                    <a data-target="Solutions" onClick={() => handleLinkClick("Solutions")}>Soluciones</a>
                  </li>
                  <li>
                    <a data-target="Afiliations" onClick={() => handleLinkClick("Afiliations")}>Afiliaciones</a>
                  </li>
                  <li>
                    <a data-target="Company" onClick={() => handleLinkClick("Company")}>Compañía</a>
                  </li>
                  <li>
                    <a data-target="Values" onClick={() => handleLinkClick("Values")}>Valores</a>
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
                <img data-target="Products" onClick={() => handleLinkClick("Home")} src={logo}/>
                  <a data-target="Products" onClick={() => handleLinkClick("Products")}>Productos</a>
                  <a data-target="Solutions" onClick={() => handleLinkClick("Solutions")} >Soluciones</a>
                  <a data-target="Afiliations" onClick={() => handleLinkClick("Afiliations")} >Afiliaciones</a>
                  <a data-target="Company" onClick={() => handleLinkClick("Company")} >Compañía</a>
                  <a data-target="Values" onClick={() => handleLinkClick("Values")} >Valores</a>
                  <a>Demo</a>
              </div>
          </div>
        </div>
        <div className="colorMode">
          <input type="checkbox" className="theme-checkbox" id="myCheckbox" name="myCheckbox"/>
        </div>
      </div>
      </>
    );
}

export default Header

