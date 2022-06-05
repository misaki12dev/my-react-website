import React from "react";
import MV from "../../assets/mv.jpg";

const Hero = () => {
  return (
    <section className="py-20 container mx-auto">
      <img
        src={MV}
        className="bg-gray-900 opacity-75 lg:h-[80vh] mx-auto"
        alt=""
      />
    </section>
  );
};

export default Hero;
