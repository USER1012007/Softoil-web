import logo from "../Img/soft.png"
import '../css/menu.css';
import React, { useState } from 'react';

function Header() {

  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (targetId) => {
    setActiveLink(targetId);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  };

    return(
      <>
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
      </>
    );
}

export default Header

