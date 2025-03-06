import React from "react";
import { useMediaQuery } from "react-responsive";

const Layout = ({ children }) => {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 }); // lg breakpoint in Tailwind

  return isLargeScreen ? (
    <div className="bg-background text-white min-h-screen">
      <div className="max-w-[1736px] mx-auto px-0">{children}</div>
    </div>
  ) : (
    <>{children}</>
  );
};

export default Layout;
