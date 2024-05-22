import "../css/Footer.css";
import FooterMedia from "./FooterMedia";
import logo from "../Img/soft.png"
import React, { useState } from 'react';

function Footer() {

  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (targetId) => {
    setActiveLink(targetId);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="footer">
          <img className="logoSoft" src={logo} />
        <div className="footerMedia">
          <FooterMedia/>
          <hr />
        </div>
      </div>
    </>
  );
}

export default Footer;

