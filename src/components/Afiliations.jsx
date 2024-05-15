import natgas from "../Img/natgas-logo.svg";
import kansas from "../Img/Kansas-logoBlack.png";
import repsol from "../Img/Repsol-logo.png";
import glencore from "../Img/Glencore-logo.png";
import tomza from "../Img/Tomza-logo.png";
import '../css/Afiliations.css';

function Afiliations() {

  return (
    <>
      <div className="Afiliations" data-aos="fade-up">
        <div>
          <img src={natgas} />
        </div>
        <div className="Img-x"></div>
        <div>
          <img src={kansas} />
        </div>
        <div className="Img-x"></div>
        <div>
          <img src={repsol} />
        </div>

        <div className="Img-x"></div>
        <div>
          <img id="GlencoreFilter" src={glencore} />
        </div>
        <div className="Img-x"></div>
        <div>
          <img id="GlencoreFilter" className="transparentImgsvg" src={tomza} />
        </div>
        <div className="Img-x"></div>
      </div>
    </>
  );
}

export default Afiliations;
