// "use client";
// import Image from "next/image";
// import React, { useEffect, useRef, useState } from "react";
// import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

// const Carousel = (
//   items = [],
//   autoPlay = false,
//   interval = 3000,
//   showDots = true
// ) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     if (!autoPlay) return;

//     const timer = setInterval(() => {
//       handleNext();
//     }, interval);

//     return () => clearInterval(timer);
//   }, [currentIndex, autoPlay, interval]);

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "ArrowLeft") {
//         handlePrevious();
//       } else if (e.key === "ArrowRight") {
//         handleNext();
//       }
//     };

//     if (carouselRef.current) {
//       carouselRef.current.addEventListener("keydown", handleKeyDown);
//     }

//     return () => {
//       if (carouselRef.current) {
//         carouselRef.current.removeEventListener("keydown", handleKeyDown);
//       }
//     };
//   }, [currentIndex]);

//   const handlePrevious = () => {
//     setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
//   };

//   const handleDotClick = (index) => {
//     setCurrentIndex(index);
//   };

//   const handleTouchStart = (e) => {
//     setTouchStart(e.touches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     setTouchEnd(e.touches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;

//     const distance = touchStart - touchEnd;
//     const isLeftSwipe = distance > 50;
//     const isRightSwipe = distance < -50;

//     if (isLeftSwipe) {
//       handleNext();
//     } else if (isRightSwipe) {
//       handlePrevious();
//     }

//     setTouchStart(0);
//     setTouchEnd(0);
//   };

//   return (
//     <div
//       className="relative w-full max-w-4xl mx-auto"
//       ref={carouselRef}
//       tabIndex={0}
//       aria-label="Image carousel"
//       role="region"
//     >
//       {/* Main carousel container */}
//       <div
//         className="relative overflow-hidden h-64 rounded-lg"
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//       >
//         <div
//           className="flex transition-transform duration-300 ease-in-out h-full"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {items?.map((item, index) => (
//             <div
//               key={index}
//               className="w-full flex-shrink-0"
//               aria-hidden={currentIndex !== index}
//             >
//               <Image
//                 src={item.imageUrl}
//                 alt={item.alt || `Slide ${index + 1}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation buttons */}
//       <button
//         onClick={handlePrevious}
//         className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//         aria-label="Previous slide"
//       >
//         <BiChevronLeft className="w-6 h-6" />
//       </button>

//       <button
//         onClick={handleNext}
//         className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//         aria-label="Next slide"
//       >
//         <BiChevronRight className="w-6 h-6" />
//       </button>

//       {/* Enhanced Dots Navigation */}
//       {showDots && (
//         <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3 p-2">
//           {items.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handleDotClick(index)}
//               className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                 currentIndex === index
//                   ? "bg-blue-600 scale-110"
//                   : "bg-gray-300 hover:bg-gray-400"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//               aria-current={currentIndex === index}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Carousel;
