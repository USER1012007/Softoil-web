import Textbox from "./Textbox.jsx";
import SoftLogo from "../Img/soft.png";
import Card from "./Card.jsx";

function Body(){

  return(
    <>
      <div>
        <div className="Biglogo">
          <img src={SoftLogo} />
        </div>
        <div>
          <Textbox/>
        </div>
      </div>
    </>
  );
}

export default Body
