import React from 'react';
import Textbox from "./Textbox.jsx";
import WorthsBox from "./Worths.jsx";
import SolutionsBox from "./SolutionsBox.jsx";
import Inicio from "./Inicio.jsx";
import AfiliationsBox from "./Afiliations.jsx";
import AboutUsBox from './AboutUs.jsx';
import tomza from "../Img/Tomza-logo.png";

function Body() {

  const AboutUs = {
    title: <label className='colorBlue'><h1>SOBRE NOSOTROS</h1></label>,
    content: <AboutUsBox />,
    dataTarget: "AboutUs"
  };

  const Worths = {
    title: <label className='colorRed'><h1>NUESTROS VALORES</h1></label>,
    content: <WorthsBox />,
    dataTarget: "Worths"
  };

  const Solutions = {
    title: <label className='colorBlue'><h1>SOLUCIONES</h1></label>,
    content: <SolutionsBox />,
    dataTarget: "Solutions"
  };

  const Afiliations = {
    title: <label className='colorRed'><h1>CLIENTES</h1></label>,
    content: <AfiliationsBox elements={tomza} />,
    dataTarget: "Afiliations"
  };

  const Contact = {
    title: <label className='colorBlue'><h1>CONTACTO</h1></label>,
    content: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    dataTarget: "Contact"
  };

  return (
    <>
      <div>
        <div>
          <Inicio />
          <Textbox data={AboutUs} />
          <Textbox data={Worths} />
          <Textbox data={Solutions} />
          <Textbox data={Afiliations} />
          <Textbox data={Contact} />
        </div>
      </div>
    </>
  );
}

export default Body;
