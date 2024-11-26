import Image, { StaticImageData } from "next/image";
import React from "react";
interface CountdownBannerProps {
  backgroundImage: StaticImageData;
  title: string;
  description: string;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TimerBanner: React.FC<CountdownBannerProps> = ({
  backgroundImage,
  title,
  description,
  days,
  hours,
  minutes,
  seconds,
}) => {
  return (
    <div className="relative w-full h-[300px] bg-cover bg-center flex items-center justify-center">
      <Image
        src={backgroundImage}
        alt="Background Image"
        fill
        priority
        quality={100}
        className="absolute z-0 object-cover"
      />
      <div className="absolute inset-0 bg-black/50 "></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-between ">
        {/* Left Content */}
        <div className="w-1/2 ">
          <h6 className="text-lg font- text-white mb-4">{title}</h6>
          <h3 className="text-4xl text-gray-200 mb-4">{description}</h3>
          <button className="border text-gray-200 border-gray-200 py-4 px-6  text-sm font-light">
            SHOP 20% OFF NOW
          </button>
        </div>

        {/* Right Countdown */}
        <div className="w-1/2 flex justify-end">
          <div className="p-6 text-center">
            <div className="grid grid-cols-4 gap-8 text-white">
              <div>
                <span className="block text-6xl font-light">
                  {days.toString().padStart(2, "0")}
                </span>
                <span className="block text-sm">Days</span>
              </div>
              <div>
                <span className="block text-6xl font-light">
                  {hours.toString().padStart(2, "0")}
                </span>
                <span className="block text-sm">Hours</span>
              </div>
              <div>
                <span className="block text-6xl font-light">
                  {minutes.toString().padStart(2, "0")}
                </span>
                <span className="block text-sm">Minutes</span>
              </div>
              <div>
                <span className="block text-6xl font-light">
                  {seconds.toString().padStart(2, "0")}
                </span>
                <span className="block text-sm">Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerBanner;
