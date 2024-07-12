import React from "react";
import discountimg from "../assets/images/discountimg.png";
import specialimg from "../assets/images/specialdealimg2.png";
import offer1 from "../assets/images/offer1.png";
import offer2 from "../assets/images/offer2.png";
import offer3 from "../assets/images/offer3.png";

function SpecialDeals() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="w-full md:w-1/2 p-4">
            <img
              src={discountimg}
              alt="Discounted Price"
              className="rounded shadow-md mb-4"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">
              We help you find your dream location
            </h2>
            <p className="text-gray-600 mb-4">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>
            <div className="flex justify-between mb-4 flex-col md:flex-row">
              <div>
                <h3 className="text-xl text-orange-400 font-bold">500+</h3>
                <p className="text-gray-600">Holiday Packages</p>
              </div>
              <div>
                <h3 className="text-xl text-orange-400 font-bold">100</h3>
                <p className="text-gray-600">Luxury Hotels</p>
              </div>
              <div>
                <h3 className="text-xl text-orange-400 font-bold">7</h3>
                <p className="text-gray-600">Premium Airlines</p>
              </div>
              <div>
                <h3 className="text-xl text-orange-400 font-bold">2k+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between">
          <div className="text-left mb-8 lg:mb-0 lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">We offer best services</h2>
            <p className="text-gray-600 mb-8">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>
            <div className="flex justify-between deals-list">
              <div>
                <div className="deal-item flex justify-evenly p-6 border rounded-lg shadow-md">
                  <img src={offer1}></img>
                  <div className="ml-1">
                    <h3 className="text-xl font-bold mb-2">
                      We offer best services
                    </h3>
                    <p className="text-gray-600">
                      Lorem Ipsum is not simply random text.
                    </p>
                  </div>
                </div>
                <div className="deal-item flex justify-evenly p-6 border rounded-lg shadow-md">
                  <img src={offer2}></img>
                  <div className="ml-1">
                    <h3 className="text-xl font-bold mb-2">
                      Schedule your trip
                    </h3>
                    <p className="text-gray-600">
                      Lorem Ipsum is not simply random text.
                    </p>
                  </div>
                </div>
                <div className="deal-item flex justify-evenly p-6 border rounded-lg shadow-md">
                  <img src={offer3}></img>
                  <div className="ml-1">
                    <h3 className="text-xl font-bold mb-2">
                      Get discounted coupons
                    </h3>
                    <p className="text-gray-600">
                      Lorem Ipsum is not simply random text.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center ">
            <img
              src={specialimg}
              alt="Paradise on Earth"
              className="deals-section-image rounded shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialDeals;
