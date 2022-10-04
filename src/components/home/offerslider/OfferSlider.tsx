import React from "react";
import Slider from "react-slick";
import "./offerslider.scss";
import data from "../../../offers.json";

export default function OfferSlider() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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
        breakpoint: 1224,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="main-slider-container">
      <div className="offer-slider-box">
        <Slider {...settings}>
          {data.map((offer, i) => (
            <>
              <div className="slider-offer" key={i + offer.id}>
                <img src={offer.photo} alt={`${offer.id}`} />
                <h1>{offer.name}</h1>
                <h3>{offer.description}</h3>
                <p>Powierzchnia: {offer.size} m²</p>
                <div className="slider-details__box">
                  <p>{offer.type}</p>
                  <p>{offer.price.toLocaleString()} zł</p>
                </div>
              </div>
              <div className="slider-button">
                <a href={`${offer.link}`}>
                  <button>Zobacz więcej</button>
                </a>
              </div>
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
}
