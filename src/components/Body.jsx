import Textbox from "./Textbox.jsx";
import ValuesBox from "./Values.jsx";
import SolutionsBox from "./SolutionsBox.jsx";
import natgas from "../Img/natgas-logo.svg";
import kansas from "../Img/Kansas-logo.svg";
import repsol from "../Img/Repsol-logo.png";
import glencore from "../Img/Glencore-logo.jpg";
import tomza from "../Img/gasTomza-logo.png";

function Body() {

  const Products = {
    title: <h1>Somos un equipo multidisciplinario con más de 25 años de experiencia en tecnología para petrolíferos e hidrocarburos</h1>,
    content: <div><p> Ayudamos a tu empresa a cumplir con el anexo 30 Cumplimos los criterios de aceptación referente al los programas informáticos del Control Volumétrico de Hidrocarburos y Petrolíferos requerido por el SAT conforme al artículo 28 del Código Fiscal de la Federación y la Resolución de Miscelánea Fiscal 2022 con la finalidad de conocer las especificaciones de los Equipos y Programas Informáticos que se deben utilizar. </p></div>,
    dataTarget: "Products"
  };

  const Solutions = {
    title: <div><h1>Soluciones</h1></div>,
    content: <SolutionsBox/>,
    dataTarget: "Solutions"
  }

  const Afiliations = {
    title: <div><h1>Afiliaciones</h1></div>,
    content: <div className="Afiliations">
      <div>
        <img src={natgas} />
      </div>
      <div className="Img-x"></div>
      <div>
        <img className="transparentImg" src={kansas} />
      </div>
      <div className="Img-x"></div>
      <div>
        <img src={repsol} />
      </div>

      <div className="Img-x"></div>
      <div>
        <img className="transparentImg" src={glencore} />
      </div>
      <div className="Img-x"></div>
      <div>
        <img src={tomza} />
      </div>
      <div className="Img-x"></div>
    </div>,
    dataTarget: "Afiliations"
  };

  const Values = {
    title: <div><h1>Nuestros Valores</h1></div>,
    content: <ValuesBox />,
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
