import "../css/Contact.css";
import React, { useState, useRef, useEffect } from 'react';

function Contact() {

  return (
    <>

      <div className="form">
        <form action="">

          <div className="form-item">
            <input type="text" id="name" autoComplete="off" required />
            <label htmlFor="name">Nombre</label>
          </div>

          <div className="form-item">
            <input type="tel" id="number" autoComplete="off" required />
            <label htmlFor="number">Numero</label>
          </div>

          <div className="form-item">
            <input type="email" id="email" autoComplete="off" required />
            <label htmlFor="email">Correo</label>
          </div>
          <div className="form-item">
            <input type="text" id="tema" autoComplete="off" required />
            <label htmlFor="tema">Tema</label>
          </div>

          <div className="full-width form-item area">
            <input className="area" type="message" id="message" autoComplete="off" required />
            <label htmlFor="message">Mensaje</label>
          </div>


          <div className="full-width buttonContent">
            <button className="button">
              <span className="button-content">Enviar</span>
            </button>
          </div>

        </form>
      </div>
    </>
  );
}

export default Contact;





