import "../css/SolutionsBox.css";
import CrtVol from "../Img/CrtVol.png";
import sgm from "../Img/Sgm.png";
import logoSoftOil from "../Img/soft.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';


SwiperCore.use([Navigation, Pagination]);

function SolutionsBox() {

  return (
    <>

      <Swiper
        style={{ width: "100%" }}
        slidesPerView={3}
        spaceBetween={40}
        centerslides="true"
        fade="true"
        grabCursor={true}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          850: {
            slidesPerView: 2,
          },
          1150: {
            slidesPerView: 3,
          },
        }}
        loop={true}
      >
        <div style={{ width: "50%" }} className="swiper-wrapper">

          <SwiperSlide>
            <div className="card swiperslide">
              <div className="image-content">
                <span className="overlay"></span>
                <span className="overlay2"></span>
                <img src={CrtVol} alt="" className="card-img" />
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
          </SwiperSlide>

          <SwiperSlide>
            <div className="card swiperslide">
              <div className="image-content">
                <span className="overlay"></span>
                <span className="overlay2"></span>
                <img src={sgm} alt="" className="card-img" />
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
          </SwiperSlide>

          <SwiperSlide>
            <div className="card swiperslide">
              <div className="image-content">
                <span className="overlay"></span>
                <span className="overlay2"></span>
                <img src={CrtVol} alt="" className="card-img" />
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
          </SwiperSlide>

          <SwiperSlide>
            <div className="card swiperslide">
              <div className="image-content">
                <span className="overlay"></span>
                <span className="overlay2"></span>
                <img src={logoSoftOil} alt="" className="card-img" />
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
          </SwiperSlide>

          <SwiperSlide>
            <div className="card swiperslide">
              <div className="image-content">
                <span className="overlay"></span>
                <span className="overlay2"></span>
                <img src={logoSoftOil} alt="" className="card-img" />
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
          </SwiperSlide>

          <SwiperSlide>
            <div className="card swiperslide">
              <div className="image-content">
                <span className="overlay"></span>
                <span className="overlay2"></span>
                <img src={logoSoftOil} alt="" className="card-img" />
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
          </SwiperSlide>

          <SwiperSlide>
            <div className="card swiperslide">
              <div className="image-content">
                <span className="overlay"></span>
                <span className="overlay2"></span>
                <img src={logoSoftOil} alt="" className="card-img" />
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
          </SwiperSlide>
        </div>
        <div>
          <div className="swiper-button-next" style={{ color: "#097ab3", zIndex: "9999" }}></div>
          <div className="swiper-button-prev" style={{ color: "#097ab3", paddingRight: "251px" }}></div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </>
  );
}

export default SolutionsBox;





// <section>
// </section>
