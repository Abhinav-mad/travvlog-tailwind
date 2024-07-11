import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ServicesSlider({ services }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
      {services.map((service, index) => (
        <div key={index} className="p-6 border rounded-lg shadow-md">
          <div className="text-6xl mb-4">{service.icon}</div>
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </Slider>
  );
}

export default ServicesSlider;
