import React from "react";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css";
import Portfolio1 from "../../assets/portfolio03.png";

const data = [
  {
    id: 1,
    image: Portfolio1,
    title: "サイト1",
    description:
      "nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.cia deserunt mollit anim id est laborum",
    github: "https://github.com/",
  },
  {
    id: 2,
    image: Portfolio1,
    title: "サイト2",
    description:
      "nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.cia deserunt mollit anim id est laborum",
    github: "https://github.com/",
  },
  {
    id: 3,
    image: Portfolio1,
    title: "サイト3",
    description:
      "nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.cia deserunt mollit anim id est laborum",
    github: "https://github.com/",
  },
];

const Portfolio = () => {
  return (
    <section className="container p-20 mx-auto">
      <h2 className="">Portfolio</h2>
      <div className="max-w-screen-md mx-auto">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((portfolio) => (
            <SwiperSlide key={portfolio.id}>
              <div className="shadow-lg p-5 m-5 rounded-xl flex justify-center gap-10 ">
                <div className="image w-2/5">
                  <img className="rounded-xl" src={portfolio.image} alt="" />
                </div>
                <div className="flex flex-col w-3/5">
                  <div className="text-lg font-bold pb-3">{portfolio.title}</div>
                  <p className="pb-5">{portfolio.description}</p>
                  <div className="button">
                    <button className="mr-5 inline-block px-6 py-2.5 bg-coral text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-coral-300 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                      <a href={portfolio.github}>GitHub</a>
                    </button>
                    <button className="inline-block px-6 py-2.5 bg-coral text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-coral-300 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                      <a href={portfolio.github}>LINK</a>
                    </button>

                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
