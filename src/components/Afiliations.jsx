import natgas from "../Img/natgas-logo.svg";
import kansas from "../Img/Kansas-logo.png";
import repsol from "../Img/Repsol-logo.png";
import glencore from "../Img/Glencore-logo.png";
import tomza from "../Img/Tomza-logo.png";
import '../css/Afiliations.css';
import React, { useEffect, useRef } from 'react';

const Afiliations = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      console.log(imageRefs)
      imageRefs.current.forEach((imageRef) => {
        if (imageRef) {
          const rect = imageRef.getBoundingClientRect();
          const isVisible =
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth);
          if (isVisible) {
            imageRef.classList.add("active");
          } else {
            imageRef.classList.remove("active");
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToRefs = (el) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  return (
    <div className="Afiliations">
      <div ref={addToRefs}>
        <img src={natgas} />
      </div>
      <div className="Img-x"></div>
      <div ref={addToRefs}>
        <img src={kansas} />
      </div>
      <div className="Img-x"></div>
      <div ref={addToRefs}>
        <img src={repsol} />
      </div>
      <div className="Img-x"></div>
      <div ref={addToRefs}>
        <img id="GlencoreFilter" src={glencore} />
      </div>
      <div className="Img-x"></div>
      <div ref={addToRefs}>
        <img id="GlencoreFilter" src={tomza} className="transparentImgsvg" />
      </div>
      <div className="Img-x"></div>
    </div>
  );
};

export default Afiliations;
