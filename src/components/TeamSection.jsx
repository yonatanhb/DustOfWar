import React from "react";
import TeamCard from "./TeamCard";
import { u } from "framer-motion/client";

const teamMembers = [
  {
    name: "Itai Levin",
    role: "Team Lead",
    image: "/team/itai-levin.png",
    url: "https://www.linkedin.com/in/itai-levin",
  },
  {
    name: "Eliad Ayalon",
    role: "Project Manager",
    image: "/team/eliad-ayalon.png",
    url: "",
  },
  {
    name: "Ori Atias",
    role: "Software Engineer & Game Developer",
    image: "/team/ori-atias.png",
  },
  {
    name: "Chanan Berkotitz",
    role: "Software Engineer",
    image: "/team/chanan-berkotitz.png",
    url: "https://www.linkedin.com/in/chanan-berkotitz",
  },
  {
    name: "Yonatan Haba",
    role: "Software Engineer & Game Developer",
    image: "/team/yonatan-haba.png",
    url: "https://www.linkedin.com/in/yonatan-haba",
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
    url: "https://www.linkedin.com/in/saar-partush",
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
    name: "Itamar Zion",
    role: "Music Composer & Sound Designer",
    image: "/team/itamar-zion.jpeg",
  },
  {
    name: "REUVEN FRANK",
    role: "UI/UX Designer",
    image: "/team/reuven-frank.jpeg",
    url: "https://www.linkedin.com/in/reuvenfrank/",
  },
  {
    name: "Yossef Cohen",
    role: "Software & Game Developer",
    image: "/team/yossef-cohen.jpeg",
  },
];

const TeamSection = () => (
  <div id="team">
    <h3 className="font-sans text-5xl mb-12 text-white">TEAM MATES</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
      {teamMembers.map((member, index) => (
        <TeamCard
          key={index}
          name={member.name}
          role={member.role}
          image={member.image}
          linkedinUrl={member.url}
        />
      ))}
    </div>
  </div>
);

export default TeamSection;
