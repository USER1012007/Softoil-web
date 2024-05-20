import "../css/Contact.css";
import FooterMedia from "./FooterMedia";
import logo from "../Img/soft.png"
import React, { useState } from 'react';

function Contact() {

  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (targetId) => {
    setActiveLink(targetId);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="footer">
        <div className="footerList">
          <img className="logoSoft" src={logo} />
          <a data-target="Inicio" onClick={() => handleLinkClick("Inicio")}>Inicio</a>
          <a data-target="AboutUs" onClick={() => handleLinkClick("AboutUs")}>Nosotros</a>
          <a data-target="Worths" onClick={() => handleLinkClick("Worths")} >Valores</a>
          <a data-target="Solutions" onClick={() => handleLinkClick("Solutions")} >Soluciones</a>
          <a data-target="Afiliations" onClick={() => handleLinkClick("Afiliations")} >Clientes</a>
          <a data-target="Contact" onClick={() => handleLinkClick("Contact")} >Contacto</a>
        </div>
        <div className="footerMedia">
          <FooterMedia/>
          <hr />
          <p>&copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </>
  );
}

export default Contact;

