import "../css/Worths.css";

function Worths() {
  return (
    <>
      <div className="gridAbout">
        <div className="grid1">
          <p><b>[Misión]</b></p>
          <p>
            Ayudamos a nuestros clientes del sector de hidrocarburos a
            perfeccionar sus modelos operativos a través de soluciones
            tecnológicas y consultoría especializada.
          </p>
        </div>
        <div className="grid2">
          <p><b>[Visión]</b></p>
          <p>
            Posicionar a la marca como referente de soluciones informáticas
            en el sector de hidrocarburos.
          </p>
        </div>
        <div className="grid3">
          <div className="gridWorth">
            <p><b>[Valores]</b></p>
            <div>
              <ul>
                <li>Innovación</li>
                <li>Excelencia</li>
                <li>Diferencia</li>
                <li>Responsabilidad</li>
                <li>Lealtad</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Worths
