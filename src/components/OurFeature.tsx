import Image from "next/image";
import React from "react";
import backgroundImage from "@/assets/carouselImg/img3.jpg";
const OurFeature = () => {
  return (
    <div className="bg-[fcfbf9] w-full flex flex-col items-start justify-start gap-3 p-12">
      <h4 className="text-lg font-thin text-[#212121]">Our Feature</h4>
      <h1 className="text-5xl font-thin text-gray-800">
        Lorem ipsum dolor sit amet.
      </h1>
      <span className="text-lg font-thin text-[#212121]">
        We ensure our products contribute to the well-being of people and
        planet, towards a brighter future.
      </span>

      <div className="w-full flex items-center justify-center gap-8">
        <div className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center">
          <Image
            src={backgroundImage}
            alt="Background Image"
            fill
            priority
            quality={100}
            className="absolute z-0 object-cover"
          />
          <div className="absolute inset-0 bg-black/50 "></div>
          <div className="absolute left-12 bottom-16  flex flex-col gap-4">
            <h3 className="text-5xl text-slate-50 font-thin">Lorem ipsum .</h3>
            <span className="text-slate-50 text-lg font-thin">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </span>
            <button className="w-32 bg-transparent text-slate-50 text-sm font-thin outline-none border border-slate-50 px-4 py-3">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center">
          <Image
            src={backgroundImage}
            alt="Background Image"
            fill
            priority
            quality={100}
            className="absolute z-0 object-cover"
          />
          <div className="absolute inset-0 bg-black/50 "></div>
          <div className="absolute left-12 bottom-16  flex flex-col gap-4">
            <h3 className="text-5xl text-slate-50 font-thin">Lorem ipsum .</h3>
            <span className="text-slate-50 text-lg font-thin">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </span>
            <button className="w-32 bg-transparent text-slate-50 text-sm font-thin outline-none border border-slate-50 px-4 py-3">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeature;
