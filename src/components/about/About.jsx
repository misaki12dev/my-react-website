import React from "react";
import Profile from "../../assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="p-20 bg-dark text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:gap-24">
          <div className="mx-auto">
            <img
              src={Profile}
              className="max-h-80 rounded-full"
              alt="profile"
            />
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h3 className="text-3xl pb-3">Misaki Kawano</h3>
              <p className="mb-8">
                1994年生まれ　神奈川県在住
                <br />
                大学を卒業後、不動産業界・建築業界を経て、
                <br />
                自分が楽しいと思える仕事がしたいと思い、
                <br />
                学生の頃から興味のあったWEB業界で働くため、
                <br />
                WEB制作を独学。その後、WEB制作コーダーとして１年半勤務。<br/>
                現在は、さらにスキルアップ・仕事の幅を広げるため、バックエンドエンジニアを目指してプログラミングを学んでいます！
              </p>
              <button class="bg-coral text-black hover:bg-white font-bold py-2 px-4 rounded">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
