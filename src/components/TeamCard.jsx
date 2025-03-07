import React from "react";
import { ExternalLink } from "lucide-react";

const TeamCard = ({ name, role, image, linkedinUrl }) => (
  <div className="flex items-center gap-4 ">
    {/* Profile Image in Circle */}
    <div className="flex-shrink-0">
      <img
        src={image}
        alt={`${name}'s photo`}
        className="w-12 h-12 rounded-full object-cover border-2 border-gray-600"
      />
    </div>

    {/* Name and Role */}
    <div className="flex flex-col lg:flex-row text-[11px] mdteam:text-[18px]">
      <h3 className="font-chivo text-white uppercase mr-2 leading[100%]">
        {name}
      </h3>
      <p className="font-chivo text-white leading-[17.4px] mdteam:leading-[26.4px]">
        {role}
      </p>
    </div>

    {/* LinkedIn Icon */}
    <div className="flex-shrink-0">
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-8 h-8  text-gray-300 hover:bg-gray-700 transition-colors"
      >
        <ExternalLink size={18} />
      </a>
    </div>
  </div>
);

export default TeamCard;
