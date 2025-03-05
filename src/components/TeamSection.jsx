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
  {
    name: "REUVEN FRANK",
    role: "UI/UX Designer",
    image: "/team/itamar-zion.png",
  },
];

const TeamSection = () => (
  <div id="team" className="p-20">
    <h3 className="font-sans text-5xl mb-12 text-white">TEAM MATES</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
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
