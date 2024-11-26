import Image from "next/image";
import React from "react";
import logoimg1 from "@/assets/carouselImg/img1.png";
import logoimg2 from "@/assets/carouselImg/img2.jpg";
import logoimg3 from "@/assets/carouselImg/img3.jpg";
const ShopSummary = () => {
  return (
    <div className="px-9 py-12 w-full bg-[#C9C6B5]/5">
      <h1 className="text-7xl md:text-7xl text-[#202020] w-full font-thin text-center  p-6 leading-[10px]">
        Shop our
        <Image
          className="inline-block w-28 h-24 mx-2 object-contain align-middle"
          alt="Logo 1"
          src={logoimg1}
        />{" "}
        heirlooms, bestselling fine
        <Image
          className="inline-block w-28 h-24 mx-2 object-contain align-middle"
          alt="Logo 2"
          src={logoimg2}
        />{" "}
        jewelry and thoughtfully
        <Image
          className="inline-block w-28 h-24 mx-2 object-contain align-middle"
          alt="Logo 3"
          src={logoimg3}
        />{" "}
        curated collections.
      </h1>
    </div>
  );
};

export default ShopSummary;
