"use client";
import React, { useState, useRef, useEffect } from "react";

interface MarqueeProps {
  text?: string[];
  speed?: number;
}

const Marquee: React.FC<MarqueeProps> = ({
  text = [
    "Welcome to the Marquee",
    "Hover to Pause",
    "Scroll in Smooth Motion",
    "Interactive Text Display",
    "Next.js 14 Component",
  ],
  speed = 50,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const requestRef = useRef<number>();

  const animate = () => {
    if (marqueeRef.current && animationRef.current && !isHovered) {
      setOffset((prevOffset) => {
        const newOffset = prevOffset - 1;
        const marqueeWidth = marqueeRef.current!.scrollWidth / 2;

        return newOffset <= -marqueeWidth ? 0 : newOffset;
      });
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isHovered]);

  const displayText = [...text, ...text];

  return (
    <div
      className="w-full overflow-hidden relative p-7 bg-[#f5f2ec]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div ref={marqueeRef} className="flex whitespace-nowrap">
        <div
          ref={animationRef}
          className="flex"
          style={{
            transform: `translateX(${offset}px)`,
            transition: "transform 0s linear",
          }}
        >
          {displayText.map((item, index) => (
            <span
              key={index}
              className="px-4 text-xl font-heading text-[#333] font-normal  transition-colors duration-300 cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
