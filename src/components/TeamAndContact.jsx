import React from "react";
import TeamSection from "./TeamSection";
import Contact from "./Contact";

const TeamAndContact = () => {
  return (
    <div className="p-[1.4rem] bg-background grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <TeamSection />
      </div>

      <div className="flex flex-col self-end ">
        <Contact />
      </div>
    </div>
  );
};

export default TeamAndContact;
