"use client";
import Carousel from "@/components/Carousel";
import logoimg1 from "@/assets/carouselImg/R2MK4(HR)Espresso-042.jpg";
import logoimg2 from "@/assets/carouselImg/R2MK4Espresso(HR)-0422-1.jpg";
import logoimg3 from "@/assets/carouselImg/R2MK4Espresso(HR)-0422-3.jpg";
import logoimg4 from "@/assets/carouselImg/R2MK4Espresso(HR)-0422-4.jpg";
import logoimg5 from "@/assets/carouselImg/R2MK4LightCream(HR)-0422-1.jpg";
import logoimg6 from "@/assets/carouselImg/R2MK4LightCream(HR)-0422-3.jpg";
import logoimg7 from "@/assets/carouselImg/R2MK4LightCream(HR)-044.jpg";

import ShopSummary from "@/components/ShopSummary";
import Marquee from "@/components/Marquee";
import { useEffect, useState } from "react";
import TimerBanner from "@/components/TimerBanner";
import bgimg from "@/assets/carouselImg/MR1Walnut-0422.jpg";
import ScrollTimeLine from "@/components/ScrollTimeLine";
import USPSection from "@/components/USPSection";
import OurFeature from "@/components/OurFeature";
import ProductCarousel from "@/components/ProductCarousel";

export default function Home() {
  const images = [
    {
      src: logoimg1,
      description: "A beautiful sunrise over the mountains.",
      title: "Discover Our Collection",
      buttonText: "Shop Now",
      buttonLink: "/shop",
    },
    {
      src: logoimg2,
      title: "Summer Sale",
      description: "A serene lake surrounded by lush forest.",
      buttonText: "View Deals",
      buttonLink: "/sale",
    },
    {
      src: logoimg3,
      description: "A vibrant cityscape during sunset.",
      title: "Summer Sale",
      buttonText: "View Deals",
      buttonLink: "/sale",
    },
    {
      src: logoimg4,
      description: "A vibrant cityscape during sunset.",
      title: "Summer Sale",
      buttonText: "View Deals",
      buttonLink: "/sale",
    },
    {
      src: logoimg5,
      description: "A vibrant cityscape during sunset.",
      title: "Summer Sale",
      buttonText: "View Deals",
      buttonLink: "/sale",
    },
    {
      src: logoimg6,
      description: "A vibrant cityscape during sunset.",
      title: "Summer Sale",
      buttonText: "Super Deals",
      buttonLink: "/sale",
    },
    {
      src: logoimg7,
      description: "A vibrant cityscape during sunset.",
      title: "OFF Sale",
      buttonText: "View More",
      buttonLink: "/sale",
    },
  ];

  const [timeLeft, setTimeLeft] = useState({
    days: 338,
    hours: 15,
    minutes: 27,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
              days--;
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="">
      <Carousel images={images} />
      <ShopSummary />
      <Marquee
        text={[
          "'Express yourself in your own way .'",
          "'Express yourself in your own way.'",
          "'Express yourself in your own way.'",
          "'Express yourself in your own way.'",
          "'Express yourself in your own way.'",
        ]}
        speed={50}
      />
      <TimerBanner
        backgroundImage={bgimg}
        title="Last chance"
        description="Get 20% off all sale items"
        days={timeLeft.days}
        hours={timeLeft.hours}
        minutes={timeLeft.minutes}
        seconds={timeLeft.seconds}
      />
      <ProductCarousel />
      {/* <ScrollTimeLine /> */}
      <OurFeature />
      <USPSection />
    </div>
  );
}
