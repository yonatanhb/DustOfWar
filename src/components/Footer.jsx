import React from "react";
import { FaLinkedin, FaDiscord, FaInstagram } from "react-icons/fa";
import { MdClose } from "react-icons/md"; // X icon

const Footer = () => {
  return (
    <footer className="bg-background text-white relative w-full mx-auto">
      <div className="hidden xl:flex flex-col items-center p-[100px] max-w-[1728px] mx-auto">
        <div className="flex flex-col justify-end items-center w-[518px] h-[837px] mb-[42px]">
          <p className="font-sans font-normal text-[102px] leading-[102px] text-center uppercase text-white w-full">
            "UNDER THE SUN IN THE DUST OF THE WAR, ONE NATION STANDING STRONGER
            THAN BEFORE"
          </p>
          <p className="font-chivo font-semibold text-[18px] leading-[21px] uppercase text-white mt-4">
            "Counterstrike" by Sabaton
          </p>
        </div>

        <div className="flex flex-row justify-between items-end w-full max-w-[1528px] gap-[918px]">
          <div className="flex flex-row justify-end items-center gap-[25px] w-[317.88px]">
            <p className="font-chivo font-semibold text-[18px] leading-[21px] uppercase">
              FOLLOW US:
            </p>
            <a
              href="https://www.linkedin.com/company/dust-of-war/"
              className="text-white hover:text-highlight transition-colors"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href="https://discord.gg/eXYM7Kkdmc"
              className="text-white hover:text-highlight transition-colors"
            >
              <FaDiscord size={25} />
            </a>
            <a
              href="https://x.com/DustOfWarGame"
              className="text-white hover:text-highlight transition-colors"
            >
              <MdClose size={25} /> {/* X icon */}
            </a>
            <a
              href="#"
              className="text-white hover:text-highlight transition-colors"
            >
              <FaInstagram size={25} />
            </a>
          </div>

          <div className="flex flex-col items-end w-[281px]">
            <p className="font-chivo font-semibold text-[18px] leading-[21px] uppercase">
              DUST OF WAR
            </p>
            <p className="font-chivo font-semibold text-[18px] leading-[21px] uppercase">
              © 2025 ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex xl:hidden flex-row justify-center items-end p-[100px] gap-[50px] max-w-[1173px] mx-auto">
        <div className="flex flex-col justify-end items-center flex-grow">
          <p className="font-sans font-normal text-[52px] leading-[52px] text-center uppercase text-white w-full max-w-[461.5px]">
            "UNDER THE SUN IN THE DUST OF THE WAR, ONE NATION STANDING STRONGER
            THAN BEFORE"
          </p>
          <p className="font-chivo font-semibold text-[18px] leading-[21px] uppercase text-white mt-4">
            "Counterstrike" by Sabaton
          </p>
        </div>

        <div className="flex flex-col items-center gap-[50px] flex-grow">
          <div className="flex flex-row justify-end items-center gap-[25px] w-[317.88px]">
            <p className="font-chivo font-semibold text-[18px] leading-[21px] uppercase">
              FOLLOW US:
            </p>
            <a
              href="https://www.linkedin.com/company/dust-of-war/"
              className="text-white hover:text-highlight transition-colors"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href="https://discord.gg/eXYM7Kkdmc"
              className="text-white hover:text-highlight transition-colors"
            >
              <FaDiscord size={25} />
            </a>
            <a
              href="https://x.com/DustOfWarGame"
              className="text-white hover:text-highlight transition-colors"
            >
              <MdClose size={25} />
            </a>
            <a
              href="#"
              className="text-white hover:text-highlight transition-colors"
            >
              <FaInstagram size={25} />
            </a>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-chivo font-semibold text-[18px] leading-[21px] uppercase">
              DUST OF WAR
            </p>
            <p className="font-chivo font-semibold text-[18px] leading-[21px] uppercase w-[292px] text-center">
              © 2025 ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:flex lg:hidden flex-col justify-end items-center p-[50px] gap-[50px] max-w-[866px] mx-auto">
        <div className="flex flex-col justify-end items-center w-[318px]">
          <p className="font-sans font-normal text-[52px] leading-[52px] text-center uppercase text-white w-full">
            "UNDER THE SUN IN THE DUST OF THE WAR, ONE NATION STANDING STRONGER
            THAN BEFORE"
          </p>
          <p className="font-chivo font-semibold text-[18px] leading-[21px] uppercase text-white mt-4 whitespace-nowrap min-w-[250px]">
            "Counterstrike" by Sabaton
          </p>
        </div>

        <div className="flex flex-row justify-between items-end w-full gap-[25px]">
          <div className="flex flex-row justify-end items-center gap-[25px]">
            <p className="font-chivo font-semibold text-[18px] leading-[21px] uppercase">
              FOLLOW US:
            </p>
            <a
              href="#"
              className="text-white hover:text-highlight transition-colors"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href="#"
              className="text-white hover:text-highlight transition-colors"
            >
              <FaDiscord size={25} />
            </a>
            <a
              href="#"
              className="text-white hover:text-highlight transition-colors"
            >
              <MdClose size={25} /> {/* X icon */}
            </a>
            <a
              href="#"
              className="text-white hover:text-highlight transition-colors"
            >
              <FaInstagram size={25} />
            </a>
          </div>

          <div className="flex flex-col items-end">
            <p className="font-chivo font-semibold text-[18px] leading-[21px] uppercase">
              DUST OF WAR
            </p>
            <p className="font-chivo font-semibold text-[18px] leading-[21px] uppercase">
              © 2025 ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-col justify-end items-center p-[40px] gap-[30px] max-w-[762px] mx-auto">
        <div className="flex flex-col justify-end items-center w-[260px]">
          <p className="font-sans text-[24px] leading-[28px] sm:text-[28px] sm:leading-[32px] text-center uppercase text-white w-full">
            "UNDER THE SUN IN THE DUST OF THE WAR, ONE NATION STANDING STRONGER
            THAN BEFORE"
          </p>
          <p className="font-chivo font-semibold text-[12px] leading-[16px] sm:text-[14px] sm:leading-[18px] uppercase text-white mt-4 whitespace-nowrap">
            "Counterstrike" by Sabaton
          </p>
        </div>

        <div className="flex flex-col items-center gap-[20px] w-full">
          <div className="flex flex-row justify-center items-center gap-[15px]">
            <p className="font-chivo font-semibold text-[12px] leading-[16px] sm:text-[14px] sm:leading-[18px] uppercase">
              FOLLOW US:
            </p>
            <a
              href="https://www.linkedin.com/company/dust-of-war/"
              className="text-white hover:text-highlight transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://discord.gg/eXYM7Kkdmc"
              className="text-white hover:text-highlight transition-colors"
            >
              <FaDiscord size={20} />
            </a>
            <a
              href="https://x.com/DustOfWarGame"
              className="text-white hover:text-highlight transition-colors"
            >
              <MdClose size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-highlight transition-colors"
            >
              <FaInstagram size={20} />
            </a>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-chivo font-semibold text-[12px] leading-[16px] sm:text-[14px] sm:leading-[18px] uppercase">
              DUST OF WAR
            </p>
            <p className="font-chivo font-semibold text-[12px] leading-[16px] sm:text-[14px] sm:leading-[18px] uppercase text-center">
              © 2025 ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
