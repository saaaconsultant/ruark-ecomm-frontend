import Image from "next/image";
import React from "react";
import logoImg from "../assets/Ruark_Logo_Lockup_SL_2023_Grey.png";
import { CiSearch } from "react-icons/ci";
import { PiHandbagSimpleThin } from "react-icons/pi";
import { PiUserCircleLight } from "react-icons/pi";

const Header = () => {
  const LinksArray: string[] = ["Shop", "Featured", "About"];
  const RightLinksArray = [
    {
      icon: (
        <PiUserCircleLight
          size={25}
          className="cursor-pointer hover:text-gray-400 transition-all "
        />
      ),
    },
    {
      icon: (
        <CiSearch
          size={25}
          className="cursor-pointer hover:text-gray-400 transition-all "
        />
      ),
    },
    {
      icon: (
        <PiHandbagSimpleThin
          size={25}
          className="cursor-pointer hover:text-gray-400 transition-all "
        />
      ),
    },
  ];
  return (
    <div className="max-w-full p-2 flex items-center bg-white/50 backdrop-blur-md justify-center ">
      <div className="w-full py-4 px-8 flex items-center justify-between">
        <ul className="min-w-32 whitespace-nowrap  flex items-center justify-center gap-8">
          {LinksArray?.map((link, index) => (
            <li
              key={index}
              className="text-sm font-light text-gray-800 cursor-pointer hover:text-gray-400 transition-all  "
            >
              {link}
            </li>
          ))}
        </ul>
        <div className="min-w-32  whitespace-nowrap">
          <Image
            alt="logo.png"
            src={logoImg}
            width={130}
            height={130}
            objectFit="contain"
          />
        </div>
        <div className="min-w-32  flex items-center justify-center gap-5">
          {RightLinksArray?.map((link, index) => (
            <div key={index} className="flex items-center justify-center gap-2">
              {link.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
