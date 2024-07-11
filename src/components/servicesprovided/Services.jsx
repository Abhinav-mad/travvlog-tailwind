import React from "react";
import ServicesSlider from "./ServicesSlider";
import destinations from "./destinations";
import { FaStar, FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

function Services() {
  const services = [
    {
      title: "Best Tour Guide",
      description:
        "What looked like a small patch of purple grass, above five feet.",
      icon: "🌍",
    },
    {
      title: "Easy Booking",
      description: "Square, was moving across the sand in their direction.",
      icon: "📅",
    },
    {
      title: "Your Best Destination",
      description:
        "What looked like a small patch of purple grass, above five feet.",
      icon: "🏝",
    },
  ];

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="title-highlight text-3xl font-bold mb-8">Services</h2>
          <h2 className="text-3xl font-bold mb-8">
            Our top value categories for you
          </h2>
          <div className="">
            <ServicesSlider services={services} />
          </div>
        </div>
      </section>
      <section id="special-deals" className="py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <div className="flex justify-between">
            <h2 className="title-highlight text-3xl">Top Destinations</h2>
            <div>
              <button className="arrow-button">
                <FaArrowCircleLeft />
              </button>
              <button className="arrow-button">
                <FaArrowCircleRight />
              </button>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-8">Explore top destination</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <div key={index} className="card border rounded-lg shadow-md">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="rounded mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{dest.title}</h3>
                <p className="text-gray-600 mb-2">{dest.location}</p>
                <p className="text-red-500 font-bold mb-2">{dest.price}</p>
                <p className="text-yellow-500">⭐ {dest.rating}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
