import React from "react";
import TeamSection from "./TeamSection";
import Contact from "./Contact";

const TeamAndContact = () => {
  return (
    <div className="bg-background grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* צוות (Team) בצד שמאל */}
      <div>
        <TeamSection />
      </div>

      {/* צור קשר (Contact) מתחיל מהסוף של TeamSection */}
      <div className="flex flex-col self-end mb-16">
        <Contact />
      </div>
    </div>
  );
};

export default TeamAndContact;
