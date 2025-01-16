import React from "react";
import TeamCard from "./TeamCard";

const teamMembers = [
  { name: "Itai Levin", role: "Team Lead", image: "/team/itai-levin.png" },
  {
    name: "Ori Atias",
    role: "Software Engineer & Game Developer",
    image: "/team/ori-atias.png",
  },
  {
    name: "Chanan Berkotitz",
    role: "Software Engineer",
    image: "/team/chanan-berkotitz.png",
  },
  {
    name: "Yonatan Haba",
    role: "Software Engineer & Game Developer",
    image: "/team/yonatan-haba.png",
  },
  {
    name: "Shmuel Metzger",
    role: "Software Engineer",
    image: "/team/shmuel-metzger.png",
  },
  {
    name: "Saar Partush",
    role: "Lead Designer & Environment Artist",
    image: "/team/saar-partush.png",
  },
  {
    name: "Dotan Greenberg",
    role: "Game Developer & DevOps Engineer",
    image: "/team/dotan-greenberg.png",
  },
  {
    name: "Roey Tenenbaum",
    role: "Game Developer",
    image: "/team/roey-tenenbaum.png",
  },
  { name: "Sagi Lavin", role: "Graphic Design", image: "/team/sagi-levin.png" },
  {
    name: "Ori Achinoam",
    role: "Composer & Sound Designer",
    image: "/team/ori-achinoam.png",
  },
  {
    name: "Eliad Ayalon",
    role: "Music Composer & Sound Designer",
    image: "/team/eliad-ayalon.png",
  },
  {
    name: "Itamar Zion",
    role: "Music Composer & Sound Designer",
    image: "/team/itamar-zion.png",
  },
];

const TeamSection = () => (
  <div className="bg-primaryDark py-20 px-6">
    <h3 className="text-5xl text-center mb-16 uppercase tracking-widest text-grayLighter relative">
      Meet the Team
      <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] h-1 w-32 bg-gold"></span>
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {teamMembers.map((member, index) => (
        <TeamCard
          key={index}
          name={member.name}
          role={member.role}
          image={member.image}
        />
      ))}
    </div>
  </div>
);

export default TeamSection;
