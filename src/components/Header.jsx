import logo from "../Img/soft.png"
import BorderImage from "../Img/marginSoft.png";

function Header() {

    return(
      <header>
        <div className="border-img" ><img src={BorderImage} alt="BorderImage" /></div>
              <div className="menu">
                  <div className="list">
                    <img src={logo}/>
                      <a href="#">Productos</a>
                      <a href="#">Soluciones</a>
                      <a href="#">Afiliaciones</a>
                      <a href="#">Compañía</a>
                      <a href="#">Contactos</a>
                      <a href="#">Demo</a>
                  </div>
              </div>
      </header>
    );
}

export default Header

