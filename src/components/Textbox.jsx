import '../css/Textbox.css';


function Textbox(props) {

  const { title, content, dataTarget } = props.data;

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

export default Textbox;
