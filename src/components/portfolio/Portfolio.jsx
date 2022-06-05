import React from "react";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css"

const Portfolio = () => {
  return (
    <section className="container p-20 mx-auto">
      <div className="max-w-lg mx-auto">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img
              src="https://placehold.jp/3d4070/ffffff/700x450.png?text=1"
              alt="1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://placehold.jp/3d4070/ffffff/700x450.png?text=2"
              alt="2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://placehold.jp/3d4070/ffffff/700x450.png?text=3"
              alt="3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://placehold.jp/3d4070/ffffff/700x450.png?text=4"
              alt="4"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
