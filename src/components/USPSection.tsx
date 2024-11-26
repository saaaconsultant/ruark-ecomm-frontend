import React from "react";
import { PiStarFourLight } from "react-icons/pi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";

const USPSection = () => {
  return (
    <div className="w-full p-16 bg-[#C9C6B5]/25">
      <div className="max-w-5xl px-16 gap-8 mx-auto flex justify-between items-center">
        <div className=" flex flex-col gap-5 justify-center items-center">
          <PiStarFourLight size={30} />
          <p className="text-2xl  font-thin">Ethical Sourcing</p>
          <span>Fully traceable supply chain</span>
        </div>
        <div className=" flex flex-col gap-3 items-center">
          <LiaHandHoldingHeartSolid size={30} />
          <p className="text-2xl  font-thin">Giving Back</p>
          <span>1% to orgs and communities</span>
        </div>
        <div className=" flex flex-col gap-3 items-center">
          <IoChatbubblesOutline size={30} />
          <p className="text-2xl  font-thin">On Demand Stylists</p>
          <span className=" font-thin">Available everyday</span>
        </div>
      </div>
    </div>
  );
};

export default USPSection;
