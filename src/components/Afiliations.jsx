import natgas from "../Img/natgas-logo.svg";
import kansas from "../Img/Kansas-logo.svg";
import repsol from "../Img/Repsol-logo.png";
import glencore from "../Img/Glencore-logo.jpg";
import tomza from "../Img/gasTomza-logo.png";
import '../css/Afiliations.css';
import Aos from "aos";
import { useEffect } from "react";

function Afiliations() {

  useEffect(() => {
    Aos.init({duration: 3000});
  }, []);

  return (
    <>
      <div className="Afiliations" data-aos="fade-up">
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
      </div>
    </>
  );
}

export default Afiliations
