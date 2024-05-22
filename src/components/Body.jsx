import React from 'react';
import Textbox from "./Textbox.jsx";
import WorthsBox from "./Worths.jsx";
import SolutionsBox from "./SolutionsBox.jsx";
import Inicio from "./Inicio.jsx";
import AfiliationsBox from "./Afiliations.jsx";
import AboutUsBox from './AboutUs.jsx';
import FooterBox from './Footer.jsx';
import ContactBox from './Contact.jsx';
import tomza from "../Img/Tomza-logo.png";

function Body() {

  const AboutUs = {
    title: <label className='colorBlue'><h1>SOBRE NOSOTROS</h1></label>,
    content: <AboutUsBox />
  };

  const Worths = {
    title: <label className='colorRed worth'><h1>NUESTROS VALORES</h1></label>,
    content: <WorthsBox />
  };

  const Solutions = {
    title: <label className='colorBlue'><h1>SOLUCIONES</h1></label>,
    content: <SolutionsBox />
  };

  const Afiliations = {
    title: <label className='colorRed'><h1>CLIENTES</h1></label>,
    content: <AfiliationsBox elements={tomza} />
  };

  const Contact = {
    title: <label className='colorBlue'><h1>Contacto</h1></label>,
    content: <ContactBox/>,
  }

  return (
    <>
      <Inicio />
      <div className='empty' id='AboutUs'><div></div></div>
      <Textbox data={AboutUs} />
      <div className='empty' id='Worths'><div></div></div>
      <Textbox data={Worths} />
      <div className='empty' id='Solutions'><div></div></div>
      <Textbox data={Solutions} />
      <div className='empty' id='Afiliations'><div></div></div>
      <Textbox data={Afiliations} />
      <div className='empty' id='Contact'><div></div></div>
      <Textbox data={Contact} />
      <div className='empty'></div>
      <FooterBox />
    </>
  );
}

export default Body;
