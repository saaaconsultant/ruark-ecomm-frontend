"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
interface CardData {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  hoverImageUrl?: string;
  category: string;
}
const YoumayLike = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const cards: CardData[] = [
    {
      id: 2,
      title: "MR1 BLUETOOTH SPEAKER SYSTEM",
      price: 180,
      category: "SALE",
      imageUrl:
        "https://ruarkaudio.in/cdn/shop/files/Rich_walnut_FRONT.png?v=1698049501&width=550",
      hoverImageUrl:
        "https://ruarkaudio.in/cdn/shop/files/MR1-Side_1.jpg?v=1692853979&width=700",
    },
    {
      id: 3,
      title: "R2 Mk4 SMART MUSIC SYSTEM",
      price: 145,
      category: "BEST SELLER",
      imageUrl:
        "https://ruarkaudio.in/cdn/shop/files/Group14856684.png?v=1698050739&width=550",
      hoverImageUrl:
        "https://ruarkaudio.in/cdn/shop/files/R2-HomePage_1.jpg?v=1692853953&width=700",
    },
    {
      id: 4,
      title: "R3S Compact Music System",
      price: 160,
      category: "NEW",
      imageUrl:
        "https://ruarkaudio.in/cdn/shop/files/R3WalnutSIDEonw_1.png?v=1698052532&width=550",
      hoverImageUrl:
        "https://ruarkaudio.in/cdn/shop/files/R3-HomePage.jpg?v=1692854362&width=700",
    },
    {
      id: 5,
      title: "MR1 BLUETOOTH SPEAKER SYSTEM",
      price: 180,
      category: "SALE",
      imageUrl:
        "https://ruarkaudio.in/cdn/shop/files/Rich_walnut_FRONT.png?v=1698049501&width=550",
      hoverImageUrl:
        "https://ruarkaudio.in/cdn/shop/files/MR1-Side_1.jpg?v=1692853979&width=700",
    },
    {
      id: 6,
      title: "R2 Mk4 SMART MUSIC SYSTEM",
      price: 145,
      category: "BEST SELLER",
      imageUrl:
        "https://ruarkaudio.in/cdn/shop/files/Group14856684.png?v=1698050739&width=550",
      hoverImageUrl:
        "https://ruarkaudio.in/cdn/shop/files/R2-HomePage_1.jpg?v=1692853953&width=700",
    },
    {
      id: 7,
      title: "R3S Compact Music System",
      price: 160,
      category: "NEW",
      imageUrl:
        "https://ruarkaudio.in/cdn/shop/files/R3WalnutSIDEonw_1.png?v=1698052532&width=550",
      hoverImageUrl:
        "https://ruarkaudio.in/cdn/shop/files/R3-HomePage.jpg?v=1692854362&width=700",
    },
  ];
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
    <div className="w-full flex flex-col items-center justify-center gap-6 p-10 bg-[#EFEFEF]">
      <h1 className="font-thin text-[#212121] tracking-widest text-2xl font-productTitle">
        YOU MAY ALSO LIKE
      </h1>

      <div className="relative max-w-full  mx-auto">
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-[11] 
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
            className="absolute right-8 top-1/2 -translate-y-1/2 z-[11] 
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
          className="flex overflow-x-auto px-10 scrollbar-hide space-x-8 
          pb-4 scroll-smooth "
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="flex-shrink-0 w-[380px] h-[520px] ">
            <div className="relative w-full h-[520px] bg-cover ">
              <div className="absolute bottom-10  left-3">
                <p className="text-[#212121] font-semibold font-subheading">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sapiente, quo?
                </p>
                <button className="bg-[#212121] py-2 px-5 mt-2 border-none">
                  <span className="tracking-widest text-sm text-white font-subheading ">
                    SHOP NOW
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoumayLike;
