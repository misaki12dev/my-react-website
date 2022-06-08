import React from "react";

const Hero = () => {
  return (
    <section id="home" className="backdrop-blur-lg hero py-20 mx-auto">
      <div className="relative h-full">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span>HELLO</span><br />
          <span>I'm</span><br />
          <span>Misaki Kawano</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
