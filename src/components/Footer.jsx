import React from "react";

const Footer = () => (
  <footer className="bg-primaryDark text-grayNeutral py-8">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      {/* Left Section */}
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h5 className="text-yellowBright text-xl font-bold uppercase tracking-wider">
          Dust of War
        </h5>
        <p className="text-grayLighter mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>

      {/* Social Links */}
      <div className="flex space-x-6">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-grayLighter hover:text-blue-400 transition duration-300"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin text-2xl"></i>
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-grayLighter hover:text-pink-400 transition duration-300"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram text-2xl"></i>
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-grayLighter hover:text-black transition duration-300"
          aria-label="X (Twitter)"
        >
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a
          href="https://discord.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-grayLighter hover:text-purple-400 transition duration-300"
          aria-label="Discord"
        >
          <i className="fab fa-discord text-2xl"></i>
        </a>
      </div>

      {/* Right Section */}
      <div className="text-center md:text-right mt-6 md:mt-0">
        <a
          href="#about"
          className="text-grayLighter hover:text-yellowBright mx-3 transition duration-300 uppercase text-sm tracking-wide"
        >
          About
        </a>
        <a
          href="#home"
          className="text-grayLighter hover:text-yellowBright mx-3 transition duration-300 uppercase text-sm tracking-wide"
        >
          Home
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
