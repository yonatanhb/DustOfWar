import React from "react";

const About = () => (
  <div id="about" className="text-white py-20 bg-primaryDark">
    <div className="container mx-auto px-6">
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {[
          {
            title: "It’s Not About Winning",
            content:
              "Victory isn’t the goal — it’s the journey. Every battle draws you deeper into the most immersive combat simulation.",
          },
          {
            title: "It’s a Team Effort",
            content:
              "Survival is built on coordination, strategy, and trust. Lone wolves fall; squads turn the tide.",
          },
          {
            title: "Outthink, Outplay, Outlast",
            content:
              "Dust of War rewards strategy, not speed. Planning and teamwork define the battlefield.",
          },
          {
            title: "No Capes, No Heroes",
            content:
              "There are no superpowers. Combat drains your body and mind. Every choice carries weight.",
          },
        ].map(({ title, content }, index) => (
          <div
            key={index}
            className="relative bg-secondaryDark p-6 text-center shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            <h3 className="text-lg text-yellowBright mb-4 uppercase">
              {title}
            </h3>
            <p className="text-grayNeutral leading-relaxed">{content}</p>
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
          of war. Dust of War captures the sights, sounds, and intensity of
          combat exactly as we lived it.
        </p>
        <p className="mt-4">
          From the crack of gunfire to the exhaustion of long engagements, the
          game reflects the physical and mental toll of real combat. Every
          bullet, step, and decision carries weight. Dust of War is about
          resilience, precision, and the unrelenting reality of warfare – no
          superpowers, no second chances.
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
