import React from "react";

const About = () => (
  <div
    id="about"
    className="font-chivo text-white py-20 bg-background relative"
  >
    <div className="px-[1.4rem] mx-auto relative">
      <div className="grid grid-cols-1 mdabout:grid-cols-2 lgabout:grid-cols-4 gap-8">
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
          <div key={index} className="bg-accent p-4 text-left rounded-btn">
            <div className="grid grid-cols-1 smabout:grid-cols-2 mdabout:grid-cols-1">
              <h3 className="text-[11px] md:text-[18px] font-semibold mb-2 uppercase leading-[100%] pt-1">
                {title}
              </h3>
              <p className="font-light  leading-[17px] text-[11px] md:leading-[26.4px] md:text-[18px]">
                {content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-accent text-left mt-20 grid grid-cols-1 mdabout:grid-cols-2  rounded-btn">
        <div>
          <div className="p-6">
            <h3 className="uppercase font-bold mb-4">Unparalleled Realism</h3>
            <p className="font-light leading-[17px] md:leading-[26.4px] text-[11px] md:text-[18px]">
              Dust of War captures the sights, sounds, and intensity of combat
              exactly as we lived it. From the crack of gunfire to the
              exhaustion of long engagements, the game reflects the physical and
              mental toll of real combat. Every bullet, step, and decision
              carries weight.
              <br />
              <br />
              Dust of War is about resilience, precision, and the unrelenting
              reality of warfare – no superpowers, no second chances. This isn’t
              just a game – it’s the closest you’ll get to the battlefield
              without ever stepping into one.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          {/* <img
            src="assets/img1.png"
            alt="Placeholder Image"
            className="rounded-btn"
          /> */}
        </div>
      </div>
    </div>
  </div>
);

export default About;
