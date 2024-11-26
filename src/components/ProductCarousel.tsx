"use client";
import React, { useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}
const ProductCarousel: React.FC = () => {
  const cards: CardData[] = [
    { id: 1, title: "Card 1", description: "Description for card 1" },
    { id: 2, title: "Card 2", description: "Description for card 2" },
    { id: 3, title: "Card 3", description: "Description for card 3" },
    { id: 4, title: "Card 4", description: "Description for card 4" },
    { id: 5, title: "Card 5", description: "Description for card 5" },
    { id: 6, title: "Card 6", description: "Description for card 6" },
    { id: 7, title: "Card 7", description: "Description for card 7" },
    { id: 8, title: "Card 8", description: "Description for card 8" },
    { id: 9, title: "Card 8", description: "Description for card 8" },
    { id: 10, title: "Card 8", description: "Description for card 8" },
    { id: 11, title: "Card 8", description: "Description for card 8" },
    { id: 12, title: "Card 8", description: "Description for card 8" },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

    // Check if can scroll left (not at the beginning)
    setCanScrollLeft(scrollLeft > 0);

    // Check if can scroll right (not at the end)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth; // Scroll by one viewport width

    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="bg-[fcfbf9] w-full flex flex-col items-start justify-start gap-3 ">
      <div className="p-12 w-full">
        <h4 className="text-lg font-thin text-[#212121]">
          Exceptional Product
        </h4>
        <h1 className="text-5xl font-thin text-gray-800">
          Lorem ipsum dolor sit amet.
        </h1>
      </div>
      <div className="relative w-full  mx-auto">
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-10 
            bg-white hover:bg-white shadow-md 
            w-10 h-10 flex items-center justify-center"
          >
            <BiChevronLeft className="text-gray-700" size={30} />
          </button>
        )}

        {/* Next Button */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-10 
            bg-white hover:bg-white shadow-md  
            w-10 h-10 flex items-center justify-center"
          >
            <BiChevronRight className="text-gray-700" size={30} />
          </button>
        )}

        {/* Scrollable Grid Container */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto scrollbar-hide space-x-4 
          pb-4 scroll-smooth"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-[380px] scroll-snap-align-start"
            >
              <div className="bg-white h-[400px]  p-4 border">
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
