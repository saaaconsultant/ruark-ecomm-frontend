"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

interface CarouselProps {
  images: {
    src: string;
    description: string;
    title: string;
    buttonText: string;
    buttonLink: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = (index: number) => {
    if (index !== currentIndex && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
      }, 100);
    }
  };

  const gotoPrevious = () => {
    goToSlide((currentIndex === 0 ? images.length : currentIndex) - 1);
  };

  const goToNext = () => {
    goToSlide((currentIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full bg-[#fcfbf9]  mx-auto">
      <div className="overflow-hidden min-h-96 relative">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-[600px] transition-transform duration-300 ease-in-out"
              style={{
                flexBasis: "100%",
                transform:
                  currentIndex === index && !isAnimating
                    ? "scale(1.05)"
                    : "scale(1)",
              }}
            >
              <Image
                src={image.src}
                alt={`Slide ${currentIndex}`}
                objectFit="cover"
                className="w-full h-[600px] object-cover "
              />

              <div className="absolute inset-0 pl-10 bg-black bg-opacity-40 flex items-end justify-start">
                <div className="text-left text-white  p-8 pb-12">
                  <h2 className="text-[53px] font-normal font-heading mb-3">
                    {image.title}
                  </h2>
                  <p className="text-[16px] font-body font-normal mb-5 max-w-md">
                    {image.description}
                  </p>

                  {image.buttonText && image.buttonLink && (
                    <div className="w-full flex items-start justify-start gap-3">
                      <button
                        className="inline-block bg-[#212121] border border-[#212121] text-white px-6 py-3  
                      hover:bg-opacity-90 transition duration-300 
                      font-button font-normal text-sm  uppercase tracking-wider"
                      >
                        SHOP ALL PRODUCTS
                      </button>
                      <button
                        className="inline-block bg-white text-black px-6 py-3  
                      hover:bg-opacity-90 transition duration-300 
                      font-button text-sm font-normal uppercase tracking-wider"
                      >
                        {image.buttonText}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={gotoPrevious}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white "
      >
        <MdOutlineArrowBackIosNew size={30} />
      </button>

      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white "
      >
        <MdOutlineArrowForwardIos size={30} />
      </button>

      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? "bg-gray-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
