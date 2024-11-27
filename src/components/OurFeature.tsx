import Image from "next/image";
import React from "react";
import backgroundImage1 from "@/assets/carouselImg/MR1Walnut-0422.jpg";
import backgroundImage2 from "@/assets/carouselImg/MR1Walnut0718-2HR.jpg";
const OurFeature = () => {
  return (
    <div className="bg-[fcfbf9] w-full flex flex-col items-start justify-start gap-3 p-10">
      <h4 className="text-lg font-subheading text-[#212121]">Our Feature</h4>
      <h1 className="text-5xl font-heading font-thin text-[#333]">
        Lorem ipsum dolor sit amet.
      </h1>
      <span className="text-sm font-nav text-[#212121]">
        We ensure our products contribute to the well-being of people and
        planet, towards a brighter future.
      </span>

      <div className="w-full flex items-center justify-center mt-4 gap-8">
        <div className="relative w-full h-[450px] bg-cover bg-center flex items-center justify-center">
          <Image
            src={backgroundImage1}
            alt="Background Image"
            fill
            priority
            quality={100}
            className="absolute z-0 object-cover"
          />
          <div className="absolute inset-0 bg-black/50 "></div>
          <div className="absolute left-12 bottom-16  flex flex-col gap-4">
            <h3 className="text-5xl font-thin text-slate-50 font-heading">
              Lorem ipsum .
            </h3>
            <span className="text-slate-50  text-lg font-nav font-thin">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </span>
            <button className="w-32 bg-transparent text-slate-50 text-sm font-thin font-button tracking-widest outline-none border border-slate-50 px-4 py-3">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="relative w-full h-[450px] bg-cover bg-center flex items-center justify-center">
          <Image
            src={backgroundImage2}
            alt="Background Image"
            fill
            priority
            quality={100}
            className="absolute z-0 object-cover"
          />
          <div className="absolute inset-0 bg-black/50 "></div>
          <div className="absolute left-12 bottom-16  flex flex-col gap-4">
            <h3 className="text-5xl text-slate-50 font-thin font-heading">
              Lorem ipsum .
            </h3>
            <span className="text-slate-50 text-lg font-thin font-nav ">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </span>
            <button className="w-32 bg-transparent text-slate-50 text-sm font-button tracking-widest font-thin outline-none border border-slate-50 px-4 py-3">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeature;
