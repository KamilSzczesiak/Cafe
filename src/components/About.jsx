import React from "react";
import BannerImg from "../assets/croissant.png";
import { CiCoffeeCup } from "react-icons/ci";
import { LuCroissant } from "react-icons/lu";
import { LuDessert } from "react-icons/lu";
import BgImg from "../assets/website/coffee-texture.jpg";

const bgImage = {
  backgroundImage: `url(${BgImg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Banner = () => {
  return (
    <>
      <span id="about"></span>
      <div style={bgImage}>
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div data-aos="zoom-in">
                <img
                  src={BannerImg}
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold font-cursive"
                >
                  Premium Fresh Products
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-gray-500 tracking-wide leading-5"
                >
                  Welcome to Kamil's Cafe, where every cup tells a story.
                  Nestled in the heart of Doncaster, we are more than just a
                  cafe; we are a community hub, a place where flavors come to
                  life and conversations flow. At Kamil's Cafe, we believe in
                  crafting exceptional coffee experiences. From our carefully
                  sourced beans to our expertly brewed beverages, each cup is a
                  testament to our passion for quality and taste. Whether you're
                  seeking a quiet corner to unwind with a book or a vibrant
                  space to catch up with friends, our cozy ambiance and friendly
                  service ensure that every visit is memorable.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <div data-aos="fade-up" className="flex items-center gap-3">
                      <CiCoffeeCup className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " />
                      <span>Drinks</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex items-center gap-3"
                    >
                      <LuCroissant className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 " />
                      <span>Pastry</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
                      <LuDessert className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                      <span>Dessert</span>
                    </div>
                  </div>
                  <div
                    data-aos="slide-left"
                    className="border-l-4 border-primary/50 pl-6 space-y-2"
                  >
                    <h1 className="text-2xl font-semibold font-cursive ">
                      Induldge in our experience
                    </h1>
                    <p className="text-sm text-gray-500">
                      Join us for a journey of flavors and connections. Discover
                      why Kamil's Cafe is not just a destination, but a part of
                      your daily ritual.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
