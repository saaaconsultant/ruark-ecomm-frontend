"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

interface TimelineItem {
  id: string;
  title: string;
  paragraph: string;
  description: string;
  imageUrl: string;
}

const timelineData: TimelineItem[] = [
  {
    id: "1",
    title: "First Milestone",
    paragraph: "Initial journey begins with exciting steps",
    description:
      "Detailed description of the first major achievement and its significance",
    imageUrl: "/images/image1.jpg",
  },
  {
    id: "2",
    title: "Second Phase",
    paragraph: "Progressing towards new horizons",
    description:
      "Comprehensive overview of the second stage and its transformative impact",
    imageUrl: "/images/image2.jpg",
  },
  {
    id: "3",
    title: "Third Breakthrough",
    paragraph: "Marking a new era of innovation",
    description:
      "In-depth exploration of the third milestone and its groundbreaking implications",
    imageUrl: "/images/image3.jpg",
  },
];

const ScrollTimeLine: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [lineProgress, setLineProgress] = useState<number[]>(
    new Array(timelineData.length).fill(0)
  );
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const lastScrollTop = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineContainerRef.current) return;

      // Determine scroll direction
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollDirection = scrollTop > lastScrollTop.current ? "down" : "up";
      lastScrollTop.current = scrollTop;

      const containerTop =
        timelineContainerRef.current.getBoundingClientRect().top;

      itemsRef.current.forEach((itemRef, index) => {
        if (!itemRef) return;

        const itemTop = itemRef.getBoundingClientRect().top;
        const itemHeight = itemRef.offsetHeight;

        // Check if item is in the middle of the viewport
        if (
          itemTop < window.innerHeight / 2 &&
          itemTop + itemHeight > window.innerHeight / 2
        ) {
          setActiveIndex(index);

          // Update line progress based on scroll direction
          setLineProgress((prev) => {
            const newProgress = [...prev];

            if (scrollDirection === "down") {
              // Increase progress when scrolling down
              newProgress[index] = Math.min(
                (newProgress[index] || 0) + 10,
                100
              );
            } else {
              // Decrease progress when scrolling up
              newProgress[index] = Math.max((newProgress[index] || 0) - 10, 0);

              // If progress reaches 0, reset previous segments
              if (newProgress[index] === 0 && index > 0) {
                newProgress[index - 1] = 0;
              }
            }

            return newProgress;
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        ref={timelineContainerRef}
        className="relative w-full max-w-6xl mx-auto px-4 py-16"
      >
        {/* Vertical Line Container */}
        <div className="absolute left-20 top-0 bottom-0 w-1 bg-gray-300">
          {/* Colored Progress Lines */}
          {timelineData.map((_, index) => (
            <div
              key={`progress-${index}`}
              className="absolute w-full bg-blue-500 transition-all duration-300 ease-out"
              style={{
                top: `${index * 33.33}%`,
                height: `${lineProgress[index]}%`,
              }}
            />
          ))}
        </div>

        <div className="flex">
          {/* Left Column: Timeline Markers */}
          <div className="w-1/3 pr-8 space-y-16 relative">
            {timelineData.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => (itemsRef.current[index] = el)}
                className={`
                relative p-4 rounded-lg transition-all duration-300
                ${
                  activeIndex === index
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-800"
                }
              `}
              >
                <div className="absolute left-[-25px] top-1/2 transform -translate-y-1/2">
                  <div
                    className={`
                    w-5 h-5 rounded-full 
                    ${activeIndex === index ? "bg-blue-600" : "bg-gray-300"}
                  `}
                  />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm mt-2">{item.paragraph}</p>
              </div>
            ))}
          </div>

          {/* Right Column: Content and Images */}
          <div className="w-2/3 pl-8 space-y-16">
            {timelineData.map((item, index) => (
              <div
                key={item.id}
                className={`
                transition-all duration-500 
                ${
                  activeIndex === index
                    ? "opacity-100 translate-x-0"
                    : "opacity-50 translate-x-10"
                }
              `}
                style={{
                  display: activeIndex === index ? "block" : "none",
                }}
              >
                <p className="text-lg mb-4">{item.description}</p>
                <div className="relative w-full h-96 rounded-lg overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollTimeLine;
