import React from "react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact", isButton: true },
];

const Header = () => {
  return (
    <header
      className="sticky top-0 bg-accent font-chivo text-white shadow-lg relative z-50 w-full flex justify-between items-center
      h-[40px] sm:h-[50px] md:h-auto pt-[env(safe-area-inset-top)] md:pt-[calc(25px+env(safe-area-inset-top))] 
      pr-[15px] sm:pr-[25px] md:pr-[50px] xl:pr-[100px] pb-1 sm:pb-2 md:pb-[25px] 
      pl-[15px] sm:pl-[25px] md:pl-[50px] xl:pl-[100px]"
      style={{
        paddingTop: "max(10px, env(safe-area-inset-top))",
      }}
    >
      <div className="w-full flex justify-between items-center relative">
        {/* ✅ לוגו - ממורכז בהתאם למסך */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 md:-translate-y-1/3 z-10">
          <img
            src="Logo/dowlogo.png"
            alt="Dust of War Logo"
            className="w-[80px] h-[50px] sm:w-[100px] sm:h-[60px] md:w-[120px] md:h-[70px] lg:w-[300px] lg:h-[200px]"
          />
        </div>

        {/* ✅ ניווט - יישור למרכז אנכי תמיד */}
        <nav className="hidden lg:flex space-x-10 ml-auto items-center h-full">
          {NAV_ITEMS.map(({ label, href, isButton }) => (
            <a
              key={label}
              href={href}
              className={`relative text-nav leading-nav flex items-center h-full transition duration-200 px-2 py-1 ${
                isButton
                  ? "bg-highlight text-black hover:bg-white px-4 py-2"
                  : "group"
              }`}
            >
              {label}
              {!isButton && (
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
              )}
            </a>
          ))}
        </nav>

        {/* ✅ ניווט - מצב צר (רק כפתור Contact), גם ממורכז אנכית */}
        <nav className="hidden sm:flex lg:hidden ml-auto items-center h-full">
          {NAV_ITEMS.filter((item) => item.isButton).map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="bg-highlight text-black hover:bg-white relative text-nav leading-nav flex items-center h-full transition duration-200 px-2 py-1"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
