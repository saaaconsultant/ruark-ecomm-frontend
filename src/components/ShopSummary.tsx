import Image from "next/image";
import React from "react";
import logoimg1 from "@/assets/carouselImg/R2MK4LightCream(HR)-044.jpg";
import logoimg2 from "@/assets/carouselImg/R810-0323-Walnut9.jpg";
import logoimg3 from "@/assets/carouselImg/R2MK4Espresso(HR)-0422-3.jpg";
const ShopSummary = () => {
  return (
    <div className="px-9 py-10 w-full bg-[#C9C6B5]/5">
      <div className="text-7xl md:text-7xl text-[#202020] max-w-full font-thin font-heading text-center p-6">
        Shop our Modern
        <Image
          className="inline-block w-28 hover:scale-105  transition-all duration-500 ease-in-out  h-24 mx-2 object-contain align-middle "
          alt="Logo 1"
          src={logoimg1}
        />{" "}
        heirlooms, bestselling fine
        <Image
          className="inline-block w-28 hover:scale-105  transition-all duration-500 ease-in-out h-24 mx-2 object-contain align-middle"
          alt="Logo 2"
          src={logoimg2}
        />{" "}
        jewelry and thoughtfully
        <Image
          className="inline-block w-28 hover:scale-105  transition-all duration-500 ease-in-out h-24 mx-2 object-contain align-middle"
          alt="Logo 3"
          src={logoimg3}
        />{" "}
        curated collections.
      </div>
    </div>
  );
};

export default ShopSummary;
