const TeamCard = ({ name, role, image }) => (
  <div className="relative bg-secondaryDark shadow-md hover:shadow-lg transition-all duration-300 rounded-lg p-6 border border-grayLight">
    {/* רקע דינמי לכרטיס */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-10"
      style={{
        backgroundImage: `url('/assets/pattern-military.png')`, // תמונה עם טקסטורה צבאית
      }}
    ></div>
    {/* כותרת השם */}
    <div className="relative z-10">
      <h4 className="text-grayLighter text-xl font-bold mb-2 tracking-wide">
        {name}
      </h4>
      {/* תפקיד */}
      <p className="text-grayNeutral text-sm italic">{role}</p>
    </div>
    {/* תמונה */}
    <div className="relative z-10 mt-6 flex justify-center">
      <img
        src={image}
        alt={`${name}'s photo`}
        className="w-[80px] h-[100px] object-cover rounded-full border-4 border-gold shadow-md"
      />
    </div>
  </div>
);

export default TeamCard;
