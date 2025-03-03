import React from "react";

const Hero = () => (
  <div
    id="hero"
    className="relative text-white text-hero font-chivo flex justify-left h-[1052px]"
    style={{
      backgroundImage: "url('assets/img2.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* לוגו ותוכן במרכז */}
    <div className="text-left ml-12 mt-[25%] lghero:mt-[25%] xl:mt-[25%] mb-[10%] mr-[20%]">
      {/* כותרת ראשית */}
      <h3 className="">BY IDF ELITE COMBAT VETERANS</h3>

      <h1 className="font-sans text-[32px] sm:text-[52px] lghero:text-[102px] uppercase leading-tight">
        It’s the closest you’ll get
        <br /> to the battlefield without
        <br /> ever stepping into one.
      </h1>

      <div className="font-chivo grid grid-cols-1 lghero:grid-cols-2  gap-8 mt-8 text-hero">
        <p>
          Dust of War is a{" "}
          <span className="underline">
            tactical FPS military
            <br /> simulator
          </span>{" "}
          created by combat veterans.
        </p>
        <p>
          Our mission is to redefine the genre by
          <br /> delivering unmatched realism and tactical
          <br /> gameplay, inspired by real-life combat
          <br /> experience.
        </p>
      </div>
    </div>
  </div>
);

export default Hero;
