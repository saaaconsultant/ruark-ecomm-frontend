import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import { PiInstagramLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="px-10 max-w-full flex flex-col gap-16 items-end justify-end bg-[#C9C6B5]/45 py-20">
      <div className="w-full flex items-start justify-between gap-4 ">
        <div className="w-1/4 flex flex-col  gap-5 ">
          <h2 className="text-2xl text-[#212121] font-normal font-heading">
            About the Brand
          </h2>
          <span className=" text-[#212121] font-subheading font-normal">
            All products in this store are for demo purposes only. They have
            been generously provided by Wolf Circus and Alohas.
          </span>
          <div className="ml-3 flex items-center gap-3">
            <PiInstagramLogo
              size={20}
              cursor="pointer"
              className="text-[#212121] "
            />
            <AiFillTikTok
              size={20}
              cursor="pointer"
              className="text-[#212121] "
            />
          </div>
        </div>
        <div className="w-1/5 flex flex-col gap-5 ">
          <span className="text-2xl text-[#212121] font-normal font-heading">
            Customer Care
          </span>
          <span className="text-[#212121] font-subheading font-normal">
            Blog
          </span>
          <span className="text-[#212121] font-subheading font-normal">
            About
          </span>
          <span className="text-[#212121] font-subheading font-normal">
            FAQ
          </span>
          <span className="text-[#212121] font-subheading font-normal">
            Contact
          </span>
        </div>
        <div className="w-1/5  flex flex-col gap-5 ">
          <span className="text-2xl text-[#212121] font-normal font-heading">
            Resources
          </span>
          <span className="text-[#212121] font-subheading font-normal">
            Jewelry Care
          </span>
          <span className="text-[#212121] font-subheading font-normal">
            Sizing
          </span>
          <span className="text-[#212121] font-subheading font-normal">
            Shipping Policy
          </span>
          <span className="text-[#212121] font-subheading font-normal">
            Refund Policy
          </span>
        </div>
        <div className="w-1/3 flex  flex-col gap-5 ">
          <span className="text-2xl text-[#212121] font-normal font-heading">
            Stay in Touch
          </span>
          <span className=" text-[#212121] font-subheading font-normal">
            Subscribe to get special offers, free giveaways, and
            once-in-a-lifetime deals.
          </span>
          <input
            type="text"
            placeholder="Name"
            className="placeholder-[#212121] bg-transparent border-b border-b-black  text-[#212121]  font-normal font-subheading  outline-none p-2   "
          />
          <input
            type="email"
            placeholder="Email"
            className="placeholder-[#212121] bg-transparent border-b border-b-black text-[#212121]  font-normal font-subheading  outline-none p-2   "
          />
          <button className="bg-black border-none p-2 font-nav  text-white">
            JOIN
          </button>
        </div>
      </div>
      <div className="w-[50%]  flex items-center justify-between">
        <span className="text-[#212121] text-sm font-subheading font-normal">
          &copy; Broadcast Clean 2024
        </span>
        <span className="text-[#212121] text-sm font-subheading font-normal">
          Shipping Policy
        </span>
        <span className="text-[#212121] text-sm font-subheading font-normal">
          Refund Policy
        </span>
        <span className="text-[#212121] text-sm font-subheading font-normal">
          Privacy Policy
        </span>
        <span className="text-[#212121] text-sm font-subheading font-normal">
          Terms of service
        </span>
      </div>
    </div>
  );
};

export default Footer;
