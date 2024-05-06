import Textbox from "./Textbox.jsx";
import SoftLogo from "../Img/soft.png";
import Natgas from "../Img/natgas-logo.png";
import Tomza from "../Img/gasTomza-logo.png";
import Kansas from "../Img/Kansas-logo.png";
import Repsol from "../Img/Repsol-logo.png";
import Glencore from "../Img/Glencore-logo.jpg";

function Body(){

  const Products = {
    title: <h1>Productos</h1>,
    content: <div><p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p></div>,
    dataTarget: "Products"
  };

  const Solutions = {
    title: <div><h1>Soluciones</h1></div>,
    content: <div><li>oijuhgv</li><li>oijuhgv</li><li>oijuhgv</li></div>,
    dataTarget: "Solutions"
  }

  const Afiliations = {
    title: <div><h1>Afiliaciones</h1></div>,
    content:  <div className="tabla">
      <div className="inner">
        <div className="tag"><img src={Natgas} className="celda"/></div>
        <div className="tag"><img src={Tomza} className="celda"/></div>
        <div className="tag"><img src={Kansas} className="celda"/></div>
        <div className="tag"><img src={Repsol} className="celda"/></div>
        <div className="tag"><img src={Glencore} className="celda"/></div>
      </div>
  </div>,
    dataTarget: "Afiliations"
  };

  const Company = {
    title: <div><h1>Compañía</h1></div>,
    content: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    dataTarget: "Company"
  };

  const Values = {
    title: <div><h1>Valores</h1></div>,
    content: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    dataTarget: "Values"
  };
  return(
    <>
      <div id="Home">
        <div className="Biglogo">
          <img src={SoftLogo} />
        </div>
        <div>
          <Textbox data={Products}/>
          <Textbox data={Solutions}/>
          <Textbox data={Afiliations }/>
          <Textbox data={Company}/>
          <Textbox data={Values}/>
        </div>
      </div>
    </>
  );
}

export default Body
