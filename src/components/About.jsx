import React from "react";
import Card from "./Card";
import TeamSection from "./TeamSection";

const About = () => (
  <div id="about" className="text-white py-20 bg-primaryDark">
    <div className="container mx-auto px-6">
      {/* כותרת הסקשן */}
      <h2 className="text-5xl font-extrabold text-center mb-16 uppercase tracking-widest text-yellowBright relative">
        About Us
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] h-1 w-24 bg-yellowBright"></span>
      </h2>

      {/* פסקת המבוא */}
      <div className="text-lg text-left max-w-3xl mx-auto mb-20 leading-relaxed text-grayNeutral text-center">
        <p>
          Dust of War is a tactical FPS military simulator created by combat
          veterans.
        </p>
        <p className="mt-4">
          Our mission is to redefine the genre by delivering unmatched realism
          and tactical gameplay, inspired by real-life combat experience.
        </p>
      </div>

      {/* 3 Key Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="relative bg-secondaryDark p-6 text-center shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-bold text-yellowBright mb-4 uppercase">
            Our Mission
          </h3>
          <p className="text-grayNeutral leading-relaxed">
            To shatter the glass ceiling of tactical FPS games, combining
            real-world military experience with innovative game mechanics.
          </p>
        </div>

        <div className="relative bg-secondaryDark p-6 text-center shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-bold text-yellowBright mb-4 uppercase">
            Our Game
          </h3>
          <p className="text-grayNeutral leading-relaxed">
            Powered by Unreal Engine 5, Dust of War captures every nuance of
            combat, from weapon handling to teamwork under pressure.
          </p>
        </div>

        <div className="relative bg-secondaryDark p-6 text-center shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-bold text-yellowBright mb-4 uppercase">
            Our Team
          </h3>
          <p className="text-grayNeutral leading-relaxed">
            Led by veterans from elite IDF units, our team brings a fresh
            perspective, grounded in real-life expertise, to redefine tactical
            FPS games.
          </p>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="mt-28">
        <TeamSection />
      </div>
    </div>
  </div>
);

export default About;
