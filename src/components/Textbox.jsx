
function Textbox(props){
  if (!props.data) {
    return null; 
  }
  const { title, content } = props.data;

  return(
    <>
      <div className="Textbox">
        <div>
          <div>
            <h1>{title}</h1>
          </div>
          <div>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </>
  );
}

const fadeInElements = document.querySelectorAll(".Textbox");

function fadeInElementsIfVisible(fadeElements) {
  fadeElements.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

fadeInElementsIfVisible(fadeInElements);

document.addEventListener("scroll", function () {
  fadeInElementsIfVisible(fadeInElements);
});

export default Textbox
