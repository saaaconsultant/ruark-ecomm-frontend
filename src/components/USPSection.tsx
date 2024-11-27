import React from "react";
import { PiStarFourLight } from "react-icons/pi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";

const USPSection = () => {
  return (
    <div className="w-full p-16 bg-[#C9C6B5]/25">
      <div className="max-w-5xl px-16 gap-8 mx-auto flex justify-between items-center">
        <div className=" flex flex-col gap-4 justify-center items-center">
          <PiStarFourLight size={35} className="text-[#212121] font-normal " />
          <p className=" text-[22px] text-[#212121] font-thin font-subheading">
            Ethical Sourcing
          </p>
          <span className="font-body text-[14px]">
            Fully traceable supply chain
          </span>
        </div>
        <div className=" flex flex-col gap-4 items-center">
          <LiaHandHoldingHeartSolid
            size={35}
            className="text-[#212121] font-normal "
          />
          <p className=" text-[22px] text-[#212121] font-thin font-subheading">
            Giving Back
          </p>
          <span className="font-body text-[14px]">
            1% to orgs and communities
          </span>
        </div>
        <div className=" flex flex-col gap-4 items-center">
          <IoChatbubblesOutline
            size={35}
            className="text-[#212121] font-normal "
          />
          <p className=" text-[22px] text-[#212121] font-thin font-subheading">
            On Demand Stylists
          </p>
          <span className="font-body text-[14px]">Available everyday</span>
        </div>
      </div>
    </div>
  );
};

export default USPSection;
