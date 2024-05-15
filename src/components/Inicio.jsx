import marco from "../Img/marco.png";
import logoSoft from "../Img/Iconos/logo_SoftOil.png";
import imagen_Refineria from "../Img/imagen_Refineria.png";
import "../css/Inicio.css";
import React, { useEffect } from 'react';

function Inicio() {
  useEffect(() => {
    const element = document.getElementById("typed");
    const text = element.textContent.trim();
    element.textContent = "";

    let index = 0;

    let typr = document.getElementById("type");

  function typeWriter() {
    if (index < text.length) {
      typr.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 70);
    }
  }

  typeWriter();

  }, []);

  return (
    <>
      <section>
        <div className="gridPrincipalHome">
          <div className="gf0">
            <img src={marco} alt="Marco1_SoftOil" />
          </div>
          <div className="flex gf1">
            <img src={logoSoft} alt="logo_SoftOil" className="logo" />
          </div>
          <div className="flex gf2">
            <p id="typed">
              Soluciones Tecnológicas Innovadoras En Hidrocarburos Y Petrolíferos
            </p>
            <p id="type" style={{ textAlign: "center" }}></p>
          </div>
          <div className="flex gf3">
            <img src={imagen_Refineria} alt="Imagen_Refineria" className="refi2" />
          </div>
          <div className="gf4">
            <img src={marco} alt="Marco1_SoftOil" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Inicio;
