import React from "react";

const About = () => (
  <div id="about" className="text-white py-20 bg-background relative">
    <div className="container mx-auto px-10 relative">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
        ].map(({ title, content, icon }, index) => (
          <div
            key={index}
            className="fontsize-about relative bg-accent p-2 text-left "
          >
            {/* תוכן הכרטיס */}
            <div className="">
              <h3 className="text-white mb-4 uppercase">{title}</h3>
              <p className="leading-relaxed">{content}</p>
            </div>
          </div>
        ))}
      </div>
      {/* פסקת סיום */}
      <div className="bg-accent text-left mt-20 grid grid-cols-1 md:grid-cols-2 ">
        <div>
          <div className="p-6">
            <h3 className="mb-36 uppercase font-bold">Unparalleled Realism</h3>
            <p>
              We didn’t invent groundbreaking mechanics — we brought the raw
              reality of war. Dust of War captures the sights, sounds, and
              intensity of combat exactly as we lived it. From the crack of
              gunfire to the exhaustion of long engagements, the game reflects
              the physical and mental toll of real combat. Every bullet, step,
              and decision carries weight.
              <br />
              <br />
              Dust of War is about resilience, precision, and the unrelenting
              reality of warfare – no superpowers, no second chances. This isn’t
              just a game – it’s the closest you’ll get to the battlefield
              without ever stepping into one.
            </p>
          </div>
        </div>

        {/* תמונה בחצי הימני */}
        <div className="flex justify-center ml-10">
          <img src="assets/img1.png" alt="Placeholder Image" />
        </div>
      </div>
    </div>
  </div>
);

export default About;
