import React from "react";

function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-bold text-center">Experiences</h2>
      <div className="experience mx-auto">
        <div className="flex justify-center gap-10 mx-auto">
          <div className="left">
            <h4>FrontEnd</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>TailWind</li>
              <li>React</li>
            </ul>
          </div>
          <div className="right">
            <h4>Backend</h4>
            <ul>
              <li></li>
            </ul>
          </div>
          <div className="center">
            <h4>CMS</h4>
            <ul>
              <li>WordPress</li>
              <li>MakeShop</li>
              <li>Shopify</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
