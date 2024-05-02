import Textbox from "./Textbox.jsx";
import SoftLogo from "../Img/soft.png";

function Body(){

  const Data = {
    title: "qwerty",
    content: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
  };

  return(
    <>
      <div>
        <div className="Biglogo">
          <img src={SoftLogo} />
        </div>
        <div>
          <Textbox data={Data} />
        </div>
      </div>
    </>
  );
}

export default Body
