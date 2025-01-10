import React from "react";

import Espresso from "../assets/espresso.png"
import Americano from "../assets/americano.png"
import Cappuccino from "../assets/cappuccino.png"
import Latte from "../assets/latte.png"

import Tea from "../assets/tea.png"
import GreenTea from "../assets/green_tea.png"
import PeppermintTea from "../assets/peppermint_tea.png"

import Croissant from "../assets/croissant.png"
import CinnamonRoll from "../assets/cinnamon_roll.png"
import Donut from "../assets/donut.png"
import LemonSlice from "../assets/lemon_slice.png"
import PainAuChocolat from "../assets/pain_au_chocolat.png"

import Cheesecake from "../assets/cheesecake.png"
import Brownies from "../assets/brownies.png"
const DrinksData = [
  {
    id: 1,
    img: Espresso,
    name: "Espresso",
    description:
      "£3.99 | Start your morning the right way, with our fresh and steamy hot shot of premium espresso.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Americano,
    name: "Americano",
    description:
      "£4.99 | A classic coffee experience with a robust flavor and rich aroma, made with the finest beans.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Cappuccino,
    name: "Cappuccino",
    description:
      "£4.99 | A delightful mix of espresso, steamed milk, and a frothy top sprinkled with cocoa.",
    aosDelay: "500",
  },
  {
    id: 4,
    img: Latte,
    name: "Latte",
    description:
      "£4.99 | Smooth, creamy, and perfectly balanced with a rich shot of espresso and velvety milk.",
    aosDelay: "500",
  },
  {
    id: "gap-1",
    img: null,
    name: "",
    description: "",
    aosDelay: "0",
  },
  {
    id: "gap-2",
    img: null,
    name: "",
    description: "",
    aosDelay: "0",
  },
  {
    id: 5,
    img: Tea,
    name: "Tea",
    description:
      "£3.99 | A comforting cup of classic tea, steeped to perfection for a soothing break.",
    aosDelay: "500",
  },
  {
    id: 6,
    img: GreenTea,
    name: "Green Tea",
    description:
      "£4.49 | Light, refreshing, and packed with antioxidants—enjoy the pure goodness of green tea.",
    aosDelay: "500",
  },
  {
    id: 7,
    img: PeppermintTea,
    name: "Peppermint Tea",
    description:
      "£4.49 | A fragrant and refreshing herbal tea with the cooling essence of peppermint.",
    aosDelay: "500",
  },
];

const PastriesData = [
  {
    id: 1,
    img: Croissant,
    name: "Croissant",
    description:
      "£2.49 | Buttery, flaky, and freshly baked—a perfect start to your day.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: CinnamonRoll,
    name: "Cinnamon Roll",
    description:
      "£2.99 | Swirls of cinnamon and a sweet glaze make this roll irresistible.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Donut,
    name: "Donut",
    description:
      "£2.99 | A soft, sweet treat with a golden glaze or a sprinkle of your choice.",
    aosDelay: "500",
  },
  {
    id: 4,
    img: LemonSlice,
    name: "Lemon Slice",
    description:
      "£3.49 | Tangy and sweet, with a zesty lemon flavor in every bite.",
    aosDelay: "500",
  },
  {
    id: 5,
    img: PainAuChocolat,
    name: "Pain Au Chocolat",
    description:
      "£2.99 | A flaky pastry filled with rich, melted chocolate—pure indulgence.",
    aosDelay: "500",
  },
];

const DessertData = [
  {
    id: 1,
    img: Cheesecake,
    name: "Cheesecake",
    description:
      "£3.49 | Creamy, rich, and perfectly sweet with a buttery biscuit base.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Brownies,
    name: "Brownies",
    description:
      "£2.99 | Fudgy and decadent with a deep chocolate flavor—an all-time favorite.",
    aosDelay: "100",
  },
];

const formatDescription = (description) => {
  const [price, ...rest] = description.split(" | ");
  return { price, details: rest.join(" | ") };
};

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Drinks Section */}
          <div id="drinks" className="text-center mb-20">
            <h1 className="text-5xl font-bold font-cursive2 text-primary">
              Drinks
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {DrinksData.map(
              (service) =>
                service.img && (
                  <div
                    key={service.id}
                    data-aos="fade-up"
                    data-aos-delay={service.aosDelay}
                    className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
                  >
                    <div className="h-[122px]">
                      <img
                        src={service.img}
                        alt={service.name}
                        className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300 mt-11"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h1 className="text-xl font-bold">{service.name}</h1>
                      {(() => {
                        const { price, details } = formatDescription(
                          service.description
                        );
                        return (
                          <>
                            <p className="text-primary font-bold text-md">
                              {price}
                            </p>
                            <p className="text-gray-500 group-hover:text-white duration-high text-sm">
                              {details}
                            </p>
                          </>
                        );
                      })()}
                    </div>
                  </div>
                )
            )}
          </div>

          {/* Pastries Section */}
          <div id="pastries" className="text-center mb-20">
            <h1 className="text-5xl font-bold font-cursive2 text-primary">
              Pastries
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {PastriesData.map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[122px]">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300 mt-11"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  {(() => {
                    const { price, details } = formatDescription(
                      service.description
                    );
                    return (
                      <>
                        <p className="text-primary font-bold text-md">
                          {price}
                        </p>
                        <p className="text-gray-500 group-hover:text-white duration-high text-sm">
                          {details}
                        </p>
                      </>
                    );
                  })()}
                </div>
              </div>
            ))}
          </div>
          {/* Dessert Section */}
          <div id="dessert" className="text-center mb-20">
            <h1 className="text-5xl font-bold font-cursive2 text-primary">
              Dessert
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {DessertData.map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[122px]">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300 mt-11"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  {(() => {
                    const { price, details } = formatDescription(
                      service.description
                    );
                    return (
                      <>
                        <p className="text-primary font-bold text-md">
                          {price}
                        </p>
                        <p className="text-gray-500 group-hover:text-white duration-high text-sm">
                          {details}
                        </p>
                      </>
                    );
                  })()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
