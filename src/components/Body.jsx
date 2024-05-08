import Textbox from "./Textbox.jsx";
import natgas from "../Img/natgas-logo.png";
import kansas from "../Img/Kansas-logo.png";
import repsol from "../Img/Repsol-logo.png";
import glencore from "../Img/Glencore-logo.jpg";
import tomza from "../Img/gasTomza-logo.png";

function Body() {

  const Products = {
    title: <h1>Inicio</h1>,
    content: <div><p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p></div>,
    dataTarget: "Products"
  };

  const Solutions = {
    title: <div><h1>Soluciones</h1></div>,
    content: <div><li>oijujhgv</li><li>oijuhgv</li><li>oijuhgv</li></div>,
    dataTarget: "Solutions"
  }

  const Afiliations = {
    title: <div><h1>Afiliaciones</h1></div>,
    content: <div className="Afiliations">
      <div className="Img-1">
        <img className="transparentImg" src={natgas} />
      </div>
      <div className="Img-x"></div>
      <div className="Img-2">
        <img className="transparentImg" src={kansas} />
      </div>
      <div className="Img-x"></div>
      <div className="Img-3">
        <img src={repsol} />
      </div>

      <div className="Img-x"></div>
      <div className="Img-4">
        <img className="transparentImg" src={glencore} />
      </div>
      <div className="Img-x"></div>
      <div className="Img-5">
        <img src={tomza} />
      </div>
      <div className="Img-x"></div>
    </div>,
    dataTarget: "Afiliations"
  };

  const Values = {
    title: <div><h1>Valores</h1></div>,
    content: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    dataTarget: "Values"
  };

  const Contact = {
    title: <div><h1>Contacto</h1></div>,
    content: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    dataTarget: "Contact"
  };
  return (
    <>
      <div>
        <div>
          <Textbox data={Products} />
          <Textbox data={Solutions} />
          <Textbox data={Afiliations} />
          <Textbox data={Values} />
          <Textbox data={Contact} />
        </div>
      </div>
    </>
  );
}

export default Body
