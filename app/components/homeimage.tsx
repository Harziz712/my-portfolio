import React from "react";
import { Glassmorphism } from "./ui/ui";
import Image from "next/image";
import { Images } from "../assets/images";

const HomeImage = () => {
  return (
    <Glassmorphism  className="overflow-hidden h-fit p-0 border-none shadow-2xl rounded-2xl">
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2500" className="w-[300px] h-[380px] p-0 flex items-center justify-center rounded-2xl">
        <Image className="object-contain" src={Images.profileImag} alt="Profile Image" />
      </div>
    </Glassmorphism>
  );
};

export default HomeImage;
