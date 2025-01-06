import React from "react";

const Card = ({ title, content }) => (
  <div
    className=" shadow-md hover:shadow-lg overflow-hidden max-w-md mx-auto"
    style={{ maxWidth: "731px" }}
  >
    {/* כותרת עם פס צהוב */}
    <div className="bg-gold py-2 px-4">
      <h3 className="text-white text-4xl">{title}</h3>
    </div>

    {/* תוכן הכרטיס */}
    <div className="bg-grayLight p-8">
      <p className="leading-relaxed">{content}</p>
    </div>
  </div>
);

export default Card;
