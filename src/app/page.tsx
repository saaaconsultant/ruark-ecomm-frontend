// import Image from "next/image";

import Carousel from "@/components/Carousel";
import logoimg from "../assets/Ruark_Logo_Lockup_SL_2023_Black.jpg";
export default function Home() {
  const items = [
    {
      imageUrl: logoimg,
      alt: "Description 1",
    },
    {
      imageUrl: logoimg,
      alt: "Description 2",
    },
  ];
  return (
    <div className="">
      Carousel
      {/* <Carousel items={items} autoPlay={true} interval={5000} showDots={true} /> */}
    </div>
  );
}
