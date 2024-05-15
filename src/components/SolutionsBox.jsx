import "../css/SolutionsBox.css";
import React from 'react';
import { Swiper } from 'swiper';
import 'swiper/css';

function SolutionsBox() {

  var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: "true",
    fade: "true",
    gragCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      850: {
        slidesPerView: 2,
      },
      1150: {
        slidesPerView: 3,
      },
    },
  });

  return (
    <>
      <section>
        <div className="SolutionSection">
          <div className="slide-container swiper">
            <div className="slide-content">
              <div className="card-wrapper swiper-wrapper">
                <div className="card swiper-slide">
                  <div className="image-content">
                    <span className="overlay"></span>
                    <span className="overlay2"></span>
                    <img src="Assets/Sgm.png" alt="" className="card-img" />
                  </div>
                  <div className="card-content">
                    <h2 className="content-title">SGM</h2>
                    <p className="content-description">
                      El Sistema de Gestión de las Mediciones tiene como objetivo
                      dar cumplimiento a lo relacionado con la configuración de
                      sistemas de medición utilizados para determinar las
                      cantidades de volumen, de petrolíferos que se reciben
                      (compras), almacenan y se despachan (ventas)
                    </p>
                    <button className="content-button">Solicitar Demo</button>
                  </div>
                </div>
                <div className="card swiper-slide">
                  <div className="image-content">
                    <span className="overlay"></span>
                    <span className="overlay2"></span>
                    <img src="Assets/CrtVol.png" alt="" className="card-img" />
                  </div>
                  <div className="card-content">
                    <h2 className="content-title">Control Volumétrico</h2>
                    <p className="content-description">
                      Los anexos 30, 31 y 32 establecen especificaciones técnicas
                      para los equipos y programas informáticos que deben
                      utilizarse para llevar a cabo este control, así como los
                      requisitos y obligaciones de los proveedores de estos
                      equipos y programas.
                    </p>
                    <button className="content-button">Solicitar Demo</button>
                  </div>
                </div>
                <div className="card swiper-slide">
                  <div className="image-content">
                    <span className="overlay"></span>
                    <span className="overlay2"></span>
                    <img src="Assets/Iconos/logo_SoftOil.png" alt="" className="card-img" />
                  </div>
                  <div className="card-content">
                    <h2 className="content-title">LOREM</h2>
                    <p className="content-description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Consectetur numquam, vel delectus voluptatem iusto expedita
                      quae ea enim! Vero dolor tempora nihil sint magni mollitia
                      libero dolores iste commodi dolorem?
                    </p>
                    <button className="content-button">Solicitar Demo</button>
                  </div>
                </div>
                <div className="card swiper-slide">
                  <div className="image-content">
                    <span className="overlay"></span>
                    <span className="overlay2"></span>
                    <img src="Assets/Iconos/logo_SoftOil.png" alt="" className="card-img" />
                  </div>
                  <div className="card-content">
                    <h2 className="content-title">LOREM</h2>
                    <p className="content-description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Consectetur numquam, vel delectus voluptatem iusto expedita
                      quae ea enim! Vero dolor tempora nihil sint magni mollitia
                      libero dolores iste commodi dolorem?
                    </p>
                    <button className="content-button">Solicitar Demo</button>
                  </div>
                </div>
                <div className="card swiper-slide">
                  <div className="image-content">
                    <span className="overlay"></span>
                    <span className="overlay2"></span>
                    <img src="Assets/Iconos/logo_SoftOil.png" alt="" className="card-img" />
                  </div>
                  <div className="card-content">
                    <h2 className="content-title">LOREM</h2>
                    <p className="content-description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Consectetur numquam, vel delectus voluptatem iusto expedita
                      quae ea enim! Vero dolor tempora nihil sint magni mollitia
                      libero dolores iste commodi dolorem?
                    </p>
                    <button className="content-button">Solicitar Demo</button>
                  </div>
                </div>
                <div className="card swiper-slide">
                  <div className="image-content">
                    <span className="overlay"></span>
                    <span className="overlay2"></span>
                    <img src="Assets/Iconos/logo_SoftOil.png" alt="" className="card-img" />
                  </div>
                  <div className="card-content">
                    <h2 className="content-title">LOREM</h2>
                    <p className="content-description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Consectetur numquam, vel delectus voluptatem iusto expedita
                      quae ea enim! Vero dolor tempora nihil sint magni mollitia
                      libero dolores iste commodi dolorem?
                    </p>
                    <button className="content-button">Solicitar Demo</button>
                  </div>
                </div>
              </div>
              <div className="swiper-button-next" style={{ color: '#097ab3' }}></div>
              <div className="swiper-button-prev" style={{ color: '#097ab3' }}></div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SolutionsBox
