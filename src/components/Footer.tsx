import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import { PiInstagramLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="px-12 max-w-full flex flex-col gap-16 items-end justify-end bg-[#C9C6B5]/45 py-20">
      <div className="w-full flex items-center justify-between gap-3">
        <div className="min-w-56 flex flex-col gap-4  ">
          <h2 className="text-2xl font-medium">About the Brand</h2>
          <span className="w-3/6">
            All products in this store are for demo purposes only. They have
            been generously provided by Wolf Circus and Alohas.
          </span>
          <div className="ml-3 flex items-center gap-3">
            <PiInstagramLogo size={20} cursor="pointer" />
            <AiFillTikTok size={20} cursor="pointer" />
          </div>
        </div>
        <div className="min-w-56 flex flex-col gap-4 ">
          <span className="text-2xl font-medium">Customer Care</span>
          <span>Blog</span>
          <span>About</span>
          <span>FAQ</span>
          <span>Contact</span>
        </div>
        <div className="min-w-56  flex flex-col gap-4 ">
          <span className="text-2xl font-medium">Resources</span>
          <span>Jewelry Care</span>
          <span>Sizing</span>
          <span>Shipping Policy</span>
          <span>Refund Policy</span>
        </div>
        <div className="min-w-96 flex  flex-col gap-4 ">
          <span className="text-2xl font-medium">Stay in Touch</span>
          <span className="w-[75%]">
            Subscribe to get special offers, free giveaways, and
            once-in-a-lifetime deals.
          </span>
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
        </div>
      </div>
      <div className="max-w-[800px] gap-8 flex items-center justify-between">
        <span>&copy; Broadcast Clean 2024</span>
        <span>Shipping Policy</span>
        <span>Refund Policy</span>
        <span>Privacy Policy</span>
        <span>Terms of service</span>
      </div>
    </div>
  );
};

export default Footer;
