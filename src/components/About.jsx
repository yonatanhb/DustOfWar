import React from "react";

const About = () => (
  <div
    id="about"
    className="text-white py-20 bg-gradient-to-b from-black via-secondaryDark to-primaryDark relative"
  >
    <div className="container mx-auto px-6 relative z-10">
      {/* כותרת הסקשן */}
      <h2 className="text-5xl text-center mb-16 uppercase tracking-widest text-yellowBright relative">
        About Us
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] h-1 w-24 bg-yellowBright"></span>
      </h2>

      {/* טקסט ראשי */}
      <div className="text-3xl text-left max-w-3xl mx-auto mb-20 leading-relaxed text-grayNeutral text-center">
        <p>
          Dust of War redefines tactical FPS games with unparalleled realism and
          immersion. It’s more than a game — it’s an experience.
        </p>
      </div>

      {/* כרטיסים עם תוכן */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          {
            title: "It’s Not About Winning",
            content:
              "Victory isn’t the goal — it’s the journey. Every battle draws you deeper into the most immersive combat simulation.",
            icon: "/assets/icon-target.png",
          },
          {
            title: "It’s a Team Effort",
            content:
              "Survival is built on coordination, strategy, and trust. Lone wolves fall; squads turn the tide.",
            icon: "/assets/icon-teamwork.png",
          },
          {
            title: "Outthink, Outplay, Outlast",
            content:
              "Dust of War rewards strategy, not speed. Planning and teamwork define the battlefield.",
            icon: "/assets/icon-strategy.png",
          },
          {
            title: "No Capes, No Heroes",
            content:
              "There are no superpowers. Combat drains your body and mind. Every choice carries weight.",
            icon: "/assets/icon-soldier.png",
          },
        ].map(({ title, content, icon }, index) => (
          <div
            key={index}
            className="relative bg-secondaryDark p-6 text-center shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border border-gray-700 rounded-lg overflow-hidden group"
          >
            {/* תוכן הכרטיס */}
            <div className="relative z-10">
              <h3 className="text-yellowBright mb-4 uppercase tracking-wider">
                {title}
              </h3>
              <p className="text-lg text-grayNeutral leading-relaxed">
                {content}
              </p>
            </div>

            {/* גבול זוהר */}
            <div className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-yellowBright transition-all"></div>
          </div>
        ))}
      </div>

      {/* פסקת סיום */}
      <div className="text-2xl text-left max-w-3xl mx-auto mt-20 leading-relaxed text-grayNeutral text-center">
        <h3 className="text-3xl text-yellowBright mb-6 uppercase">
          Unparalleled Realism
        </h3>
        <p>
          We didn’t invent groundbreaking mechanics — we brought the raw reality
          of war.
          <br /> Dust of War captures the sights, sounds, and intensity of
          combat exactly as we lived it.
        </p>
        <p className="mt-4">
          From the crack of gunfire to the exhaustion of long engagements, the
          game reflects the physical and mental toll of real combat. Every
          bullet, step, and decision carries weight.
          <br />
          Dust of War is about resilience, precision, and the unrelenting
          reality of warfare – no superpowers, no second chances.
        </p>
        <p className="mt-4">
          This isn’t just a game – it’s the closest you’ll get to the
          battlefield without ever stepping into one.
        </p>
      </div>
    </div>
  </div>
);

export default About;
