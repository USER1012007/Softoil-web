import Textbox from "./Textbox.jsx";
import SoftLogo from "../Img/soft.png";

function Body(){

  const Products = {
    title: <h1>Productos</h1>,
    content: <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
  };

  const Solutions = {
    content: <h1>Soluciones</h1>,
    title: <p><li>oijuhgv</li><li>oijuhgv</li><li>oijuhgv</li></p>
  }
  return(
    <>
      <div>
        <div className="Biglogo">
          <img src={SoftLogo} />
        </div>
        <div>
          <Textbox data={Products}/>
          <Textbox data={Solutions}/>
        </div>
      </div>
    </>
  );
}

export default Body
