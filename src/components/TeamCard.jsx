const TeamCard = ({ name, role, image }) => (
  <div className="relative bg-gradient-to-b from-primaryDark to-secondaryDark shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300 rounded-xl p-6 border border-gray-700 overflow-hidden">
    {/* אפקט רקע דינמי */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-20"
      style={{
        backgroundImage: `url('/assets/pattern-grid.png')`, // טקסטורה חדשה
      }}
    ></div>

    {/* תוכן הקארד */}
    <div className="relative z-10 flex flex-col items-center text-center">
      {/* תמונה */}
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-yellowBright shadow-lg">
        <img
          src={image}
          alt={`${name}'s photo`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* שם */}
      <h4 className="mt-4 text-2xl font-semibold text-grayLighter tracking-widest">
        {name}
      </h4>

      {/* תפקיד */}
      <p className="text-grayNeutral text-sm mt-2 px-4 italic">{role}</p>
    </div>
  </div>
);

export default TeamCard;
