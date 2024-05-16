import '../css/Textbox.css';


function Textbox(props) {

  const { title, content } = props.data;

  return (
    <>
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
