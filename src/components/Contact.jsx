import "../css/Contact.css";

function Contact() {
  return (
    <>
      <form className="myForm">
        <label htmlFor="customer_name">Nombre completo</label>
        
        <div className="form">
          <input className="input" placeholder="nombre completo" required="" type="text"/>
            <span className="input-border"></span>
        </div>

        <label htmlFor="email_address">Correo electrónico</label>

        
        <div className="form">
          <input className="input" placeholder="correo electrónico" required="" type="email"/>
            <span className="input-border"></span>
        </div>

        <label htmlFor="phone">Telefono</label>
        <div className="form">
          <input className="input" placeholder="numero" required="" type="tel"/>
            <span className="input-border"></span>
        </div>

        <div id="comment-box">
          <label htmlFor="comments">Comentarios</label>
          <textarea name="comments" id="comments" placeholder="mensaje" maxLength="500"></textarea>
        </div>

        <button className="btn">Enviar</button>
      </form>
    </>
  );
}


export default Contact;

