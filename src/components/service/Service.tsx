import React from "react";
import Slider from "react-slick";
import ser1 from "../../images/service/ser1.jpg";
import ser2 from "../../images/service/ser2.jpg";
import ser3 from "../../images/service/ser3.jpg";
import ser4 from "../../images/service/ser4.jpg";

import "./service.scss";

const Service = () => {
  const settings2 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    fade: true,
    arrows: false,
    autoplayspeed: 1000,
    infinite: true,
  };
  return (
    <>
      <div>
        <header className="service-header__container">
          <Slider {...settings2}>
            <div className="service-img-box">
                <h1>
                    DLACZEGO <br/>
                    WARTO ZE MNĄ WSPÓŁPRACOWAĆ
                </h1>
                <h3>
                    Doświadczenie
                </h3>
              <img src={ser1} alt="slider-img1" />
            </div>{" "}
            <div className="service-img-box">
            <h1>
                    DLACZEGO <br/>
                    WARTO ZE MNĄ WSPÓŁPRACOWAĆ
                </h1>
                <h3>
                    Jakość
                </h3>
              <img src={ser2} alt="slider-img2" />
            </div>{" "}
            <div className="service-img-box">
            <h1>
                    DLACZEGO <br/>
                    WARTO ZE MNĄ WSPÓŁPRACOWAĆ
                </h1>
                <h3>
                    Dokładność
                </h3>
              <img src={ser3} alt="slider-img3" />
            </div>{" "}
            <div className="service-img-box">
            <h1>
                    DLACZEGO <br/>
                    WARTO ZE MNĄ WSPÓŁPRACOWAĆ
                </h1>
                <h3>
                    Szczerość
                </h3>
              <img src={ser4} alt="slider-img4" />
            </div>
          </Slider>
        </header>
      </div>
    </>
  );
};

export default Service;
