import React from "react";
import Slider from "react-slick";
import "./offerslider.scss";
import datapl from "../../../offerspl.json";
import dataen from "../../../offersen.json";
import { useTranslation } from "react-i18next";
export default function OfferSlider() {

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    arrows: true,
    autoplayspeed: 1000,
    infinite: true,
    centerMode: true,
    centerPadding: "100px",

    responsive: [
      {
        breakpoint: 1824,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 750,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  const { t } = useTranslation();


  return (
    <div className="main-slider-container">
      <div className="offer-slider-box">
        <Slider {...settings}>
          {localStorage.getItem("i18nextLng") === "en"  && dataen.map((offer, i) => (
            <>
              <div className="slider-offer" key={i + offer.id}>
                <img src={offer.photo} alt={`${offer.id}`} />
                <h1>{offer.name}</h1>
                <h3>{offer.description}</h3>
                <p>
                  {t("size")} {offer.size} m²
                </p>
                <div className="slider-details__box">
                  <p>{offer.type}</p>
                  <p>{offer.price.toLocaleString()} zł</p>
                </div>
              </div>
              <div className="slider-button">
                <a href={`${offer.link}`}>
                  <button>{t("see-more")}</button>
                </a>
              </div>
            </>
          ))}
            {localStorage.getItem("i18nextLng") !== "en"  && datapl.map((offer, i) => (
            <div className="slider-conx">
              <div className="slider-offer" key={i + offer.id}>
                <img src={offer.photo} alt={`${offer.id}`} />
                <h1>{offer.name}</h1>
                <h3>{offer.description}</h3>
                <p>
                  {t("size")} {offer.size} m²
                </p>
                <div className="slider-details__box">
                  <p>{offer.type}</p>
                  <p>{offer.price.toLocaleString()} zł</p>
                </div>
              </div>
              <div className="slider-button">
                <a href={`${offer.link}`}>
                  <button>{t("see-more")}</button>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
