"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import cardImg from "@/assets/carouselImg/R2MK4Espresso(HR)-0422-4.jpg";
interface CardData {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  hoverImageUrl?: string;
  category: string;
}
const ProductCarousel: React.FC = () => {
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

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    <div className="bg-[fcfbf9] w-full flex flex-col  items-start justify-start gap-2 ">
      <div className=" w-full pt-14 pb-6 px-10 flex-col flex gap-5">
        <h4 className="text-[48px] leading-5 font-normal font-heading text-[#212121]">
          Exceptional Pieces
        </h4>
        <h1 className="text-[18px] font-thin text-[#212121] font-nav">
          Lorem ipsum dolor sit amet.
        </h1>
      </div>
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
          <div className="flex-shrink-0 w-[380px] h-[520px] border">
            <div className="relative w-full h-[520px] bg-cover ">
              <Image
                alt="card.png"
                src={cardImg}
                className="h-full w-full object-cover"
              />
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
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-[380px] flex flex-col gap-3 scroll-snap-align-start"
            >
              <div
                className="bg-white cursor-pointer border overflow-hidden  "
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="w-full flex items-center justify-center gap-8 ">
                  <div className="relative w-full h-[450px] bg-cover bg-center flex items-center justify-center">
                    <div className="absolute top-1 z-10 left-1 bg-gray-100 py-1 px-4">
                      <p className="text-[#333] font-thin text-sm">
                        {card?.category}
                      </p>
                    </div>

                    <div className="absolute inset-0">
                      <Image
                        src={
                          hoveredIndex === index
                            ? card.hoverImageUrl
                            : card.imageUrl
                        }
                        alt={`${card.title} image`}
                        fill
                        priority
                        quality={100}
                        className={`absolute 
                            ${
                              hoveredIndex === index
                                ? "opacity-100 object-cover z-0 overflow-hidden transform transition-transform duration-700 delay-1000"
                                : "opacity-100 hover:opacity-0 object-contain z-0 overflow-hidden   "
                            }`}
                      />

                      {hoveredIndex === index && (
                        <div className="w-full absolute overflow-hidden  bottom-0 bg-[#BF9F86]/80 p-2 transform transition-transform duration-300  text-center cursor-pointer">
                          <span className="text-[#333] text-sm font-thin ">
                            QUICK ADD
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-1">
                <span className="text-center text-[16px] font-thin">
                  {card?.title}
                </span>
                <span className="text-gray-600 font-thin text-center ">
                  ${card?.price}.00
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
