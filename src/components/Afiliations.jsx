import natgas from "../Img/natgas-logo.svg";
import kansas from "../Img/Kansas-logo.png";
import repsol from "../Img/Repsol-logo.png";
import glencore from "../Img/Glencore-logo.png";
import tomza from "../Img/Tomza-logo.png";
import '../css/Afiliations.css';
import React, { useEffect, useRef } from 'react';

function Afiliations() {


  const affiliationRef = useRef(null);

  useEffect(() => {
    const affiliationElement = affiliationRef.current;

    const handleScroll = () => {
      if (affiliationElement) {
        const rect = affiliationElement.getBoundingClientRect();
        const isVisible =
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth);

        if (isVisible) {
          affiliationElement.classList.add("active");
        } else {
          affiliationElement.classList.remove("active");
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="Afiliations" ref={affiliationRef}>
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
          <img id="GlencoreFilter" src={tomza} className="transparentImgsvg" />
        </div>
        <div className="Img-x"></div>
      </div>
    </>
  );
}

export default Afiliations;
