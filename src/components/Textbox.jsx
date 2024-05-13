import '../css/Textbox.css';
import React, { useEffect } from 'react';


function Textbox(props) {

  const { title, content, dataTarget } = props.data;

  // const fadeInElements = document.querySelectorAll(".Afiliations");
  //
  //
  // const handleScroll = () => {
  //   fadeInElementsIfVisible(fadeInElements);
  // };
  //
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);
  return (
    <>
      <span id={dataTarget}></span>
      <div className="Textbox">
          <div className="TextboxTitle">
            {title}
          </div>
          <div className='TextboxContent'>
            {content}
          </div>
        </div>
    </>
  );
}

//
// function fadeInElementsIfVisible(fadeElements) {
//   fadeElements.forEach(function (element) {
//     console.log(isElementInViewport(element))
//     if (isElementInViewport(element)) {
//       element.classList.remove("active");
//     } else {
//       element.classList.add("active");
//     }
//   });
// }
//
// function isElementInViewport(el) {
//   var rect = el.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }
//
export default Textbox
