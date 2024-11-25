import React from "react";

const Footer = () => {
  return (
    <div className="px-8 max-w-full  py-8">
      <div className="w-full flex items-center justify-between gap-4">
        <div className="min-w-32 flex flex-col gap-3  ">
          <h2>About the Brand</h2>
          <span className=" min-w-4">
            All products in this store are for demo purposes only. They have
            been generously provided by Wolf Circus and Alohas.
          </span>
          <span>dsdsd</span>
        </div>
        <div className="min-w-32 flex flex-col gap-3 ">
          <span>Customer Care</span>
          <span>dsdsd</span>
          <span>dsdsd</span>
        </div>
        <div className="min-w-32 flex flex-col gap-3 ">
          <span>Resources</span>
          <span>dsdsd</span>
          <span>dsdsd</span>
        </div>
        <div className="min-w-32 flex flex-col gap-3 ">
          <span>Stay in Touch</span>
          <span>
            Subscribe to get special offers, free giveaways, and
            once-in-a-lifetime deals.
          </span>
          <span>dsdsd</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
