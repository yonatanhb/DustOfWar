import React from "react";

const Hero = () => (
  <div id="hero" className="relative text-white font-sans">
    {/* רקע ותוכן */}
    <div
      className="relative bg-cover bg-center flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('Backgrounds/dow_back_2.jpeg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "85vh", // מתאים לגובה המסך
        maxHeight: "700px", // מונע גובה מיותר בדסקטופ
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
      {/* שכבת כהות */}
      {/* לוגו במרכז התמונה */}
      <div className="relative z-10 flex flex-col items-center animate-fadeIn">
        <img
          src="Logo/dow_logo_transparent.png"
          alt="Dust of War Logo"
          className="w-32 sm:w-40 lg:w-48 h-auto mb-4"
        />
        <h1 className="text-3xl sm:text-5xl font-bold drop-shadow-md leading-tight text-center">
          BY IDF ELITE COMBAT VETERANS
        </h1>
      </div>
      {/* כותרות ותוכן */}
      <div className="relative z-10 text-center px-6 mt-4">
        {/* כותרת משנית */}
        <h3 className="text-lg sm:text-2xl text-yellowBright font-bold mt-4 animate-fadeIn delay-500">
          REALISM BORN FROM EXPERIENCE
        </h3>

        {/* תיאור */}
        <p className="text-base sm:text-lg text-gray-300 mt-6 animate-fadeIn delay-1000">
          Redefining Tactical Military Shooters
        </p>

        {/* הודעת עדכון */}
        <p className="text-md sm:text-lg font-bold text-yellowBright mt-8 tracking-wider animate-pulse">
          Wait For Update
        </p>
      </div>
    </div>
  </div>
);

export default Hero;
