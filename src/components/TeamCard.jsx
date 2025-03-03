import React from "react";

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
    <div className="flex flex-col lg:flex-row ">
      <h3 className="font-chivo text-white text-hero uppercase mr-2">{name}</h3>
      <p className="text-gray-300">{role}</p>
    </div>

    {/* LinkedIn Icon */}
    <div className="flex-shrink-0">
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-8 h-8 border border-gray-500 text-gray-300 hover:bg-gray-700 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </a>
    </div>
  </div>
);

export default TeamCard;
