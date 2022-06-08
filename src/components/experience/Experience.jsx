import React from "react";

function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-bold text-center">EXPERIENCES</h2>
      <div className="experience mx-auto">
        <div className=" flex justify-center gap-10 mx-auto">
          <div className="left border p-3 bg-primary_color rounded-xl">
            <h4 className="text-center text-xl pb-5">FrontEnd</h4>
            <ul className=" grid grid-cols-2 gap-5">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>TailWind</li>
              <li>React</li>
            </ul>
          </div>

          <div className="left border p-3 bg-primary_color rounded-xl">
            <h4 className="text-center text-xl pb-5">Backend</h4>
            <ul className=" grid grid-cols-2 gap-5">
              <li>PHP</li>
              <li>Ruby</li>
              <li>Ruby on Rails</li>
              <li>MySQL</li>
            </ul>
          </div>

          <div className="left border p-3 bg-primary_color rounded-xl">
            <h4 className="text-center text-xl pb-5">CMS</h4>
            <ul className=" grid grid-cols-2 gap-5">
              <li>WordPress</li>
              <li>MakeShop</li>
              <li>Shopify</li>
              <li>FutureShop</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
