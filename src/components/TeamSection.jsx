import React from "react";
import TeamCard from "./TeamCard";
import { u } from "framer-motion/client";

const teamMembers = [
  {
    name: "Itai Levin",
    role: "Team Lead",
    image: "/team/itai-levin.png",
    url: "https://www.linkedin.com/in/itai-levin-793538180/",
  },
  {
    name: "Eliad Ayalon",
    role: "Project Manager",
    image: "/team/eliad-ayalon.png",
  },
  {
    name: "Ori Atias",
    role: "Software Engineer & Game Developer",
    image: "/team/ori-atias.png",
    url: "https://www.linkedin.com/in/oriatias/",
  },
  {
    name: "Chanan Berkovitz",
    role: "Software Engineer & Game Developer",
    image: "/team/chanan-berkotitz.png",
    url: "https://www.linkedin.com/in/chanan-berkovits-219419244/",
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
    name: "Yossef Cohen",
    role: "Software Engineer & Game Developer",
    image: "/team/yossef-cohen.jpeg",
    url: "https://www.linkedin.com/in/yossef-cohen-704268235/",
  },
  {
    name: "Saar Partush",
    role: "Lead Designer & Environment Artist",
    image: "/team/saar-partush.png",
    url: "https://www.linkedin.com/in/saar-partush",
  },
  // {
  //   name: "Dotan Greenberg",
  //   role: "Game Developer & DevOps Engineer",
  //   image: "/team/dotan-greenberg.png",
  // },
  {
    name: "Eden Bitush",
    role: "Environment Artist",
    image: "/team/eden-bitush.png",
    url: "https://www.linkedin.com/in/eden-bitush-a46128211/",
  },
  {
    name: "Scotty Faktorovich",
    role: "Character Modeler",
    image: "/team/scotty.jpeg",
    url: "",
  },
  {
    name: "Roy Tennenbaum",
    role: "Game Developer",
    image: "/team/roey-tenenbaum.png",
    url: "https://www.linkedin.com/in/roy-tennenbaum-fullstack-developer/",
  },
  {
    name: "Sagi Levin",
    role: "Graphic Designer",
    image: "/team/sagi-levin.png",
  },
  {
    name: "Ori Achinoam",
    role: "Music Composer & Sound Designer",
    image: "/team/ori-achinoam.png",
  },

  {
    name: "Itamar Zion",
    role: "Music Composer & Sound Designer",
    image: "/team/itamar-zion.jpeg",
    url: "https://www.linkedin.com/in/itamar-zion-402653252/",
  },
  {
    name: "REUVEN FRANK",
    role: "UI/UX Designer",
    image: "/team/reuven-frank.jpeg",
    url: "https://www.linkedin.com/in/reuvenfrank/",
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
