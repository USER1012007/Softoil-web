import logo from "../Img/soft.png"
import '../css/menu.css';
import React, { useState } from 'react';

function Header() {

  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (targetId) => {
    setActiveLink(targetId);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  };

  const handleCheckboxChange = (event) => {
    const bodyElement = document.body;
    const computedStyle = getComputedStyle(bodyElement);
    const backgroundColor = computedStyle.backgroundColor;
    const navbar = document.querySelector(".menu");
    const textBox = document.querySelectorAll('.Textbox');

    textBox.forEach(element => {
      if (backgroundColor === 'rgb(226, 230, 235)') {
        // Hacer modo oscuro
        bodyElement.style.backgroundColor = "rgb(49, 49, 49)";
        element.style.backgroundColor = '#151a1f';
        element.style.color = '#ffffff';
        navbar.style.backgroundColor = '#151a1f';
      } else {
        // Hacer modo claro
        bodyElement.style.backgroundColor = 'rgb(226, 230, 235)';
        element.style.backgroundColor = '#f6f8fc';
        element.style.color = '#000';
        navbar.style.backgroundColor = '#f6f8fc';
      }
    });


  };
  return (
    <>
      <div className="header">
        <div className="navBarBig">
          <div className="menuDrop">
            <label className="popup">
              <input className="none" type="checkbox" />
              <div className="burger" tabIndex="0">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <nav className="popup-window">
                <legend>Softoil</legend>
                <ul className="list">
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
              <img src={logo} />
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
          <input type="checkbox" id="checkboxInput" onChange={handleCheckboxChange} />
          <label htmlFor="checkboxInput" className="toggleSwitch">

            <div className="speaker"><svg className="icon icon-sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="5"></circle><line x1="12" x2="12" y1="1" y2="3"></line><line x1="12" x2="12" y1="21" y2="23"></line><line x1="4.22" x2="5.64" y1="4.22" y2="5.64"></line><line x1="18.36" x2="19.78" y1="18.36" y2="19.78"></line><line x1="1" x2="3" y1="12" y2="12"></line><line x1="21" x2="23" y1="12" y2="12"></line><line x1="4.22" x2="5.64" y1="19.78" y2="18.36"></line><line x1="18.36" x2="19.78" y1="5.64" y2="4.22"></line></svg></div>

            <div className="mute-speaker"> <svg className="icon icon-moon" viewBox="0 0 24 24"><path d="m12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8c-4.9.1-8.7 4.1-8.7 9 0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2s-.9-.2-1.2.1c-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8-.1 4.2 3.4 7.6 7.6 7.6z"></path></svg></div>
          </label>
        </div>
      </div>
    </>
  );
}

export default Header

