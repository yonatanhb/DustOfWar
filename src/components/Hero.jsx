import React from "react";

const Hero = () => (
  <div>
    <div
      className="flex flex-col justify-end items-start w-full min-h-[95vh] p-12 md:p-16 lg:p-24 xl:p-[100px] gap-12 md:gap-16 lg:gap-[199px]"
      style={{
        background:
          "linear-gradient(180deg, rgba(49, 47, 44, 0) 46.15%, rgba(49, 47, 44, 0.9) 100%), url(/assets/img2.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-start gap-6 md:gap-8 lg:gap-12 xl:gap-[50px] w-full max-w-[616px] md:max-w-[504px] lg:max-w-[663px] xl:max-w-[993px]">
        {/* Section title */}
        <h3 className="w-full text-white uppercase font-chivo font-semibold text-[12px] leading-[18px] md:text-lg md:leading-[21px]">
          By IDF Elite Combat Veterans
        </h3>

        {/* Main headline with responsive font sizes */}
        <h1 className="w-full text-white uppercase font-sans font-normal text-[32px] leading-[36px] md:text-[52px] md:leading-[52px] lg:text-[102px] lg:leading-[102px]">
          It's the closest you'll get to the battlefield without ever stepping
          into one.
        </h1>

        {/* Description paragraphs - stacked on mobile, side by side on larger screens */}
        <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-[25px] w-full">
          <p className="w-full lg:w-1/2 text-white font-chivo font-light text-[11px] leading-[17px] md:text-lg md:leading-[26px]">
            Dust of War is a{" "}
            <span className="font-medium">tactical FPS military simulator</span>{" "}
            created by combat veterans.
          </p>

          <p className="w-full lg:w-1/2 text-white font-chivo font-light text-[11px] leading-[17px] md:text-lg md:leading-[26px]">
            Our mission is to redefine the genre by delivering unmatched realism
            and tactical gameplay, inspired by real-life combat experience.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
