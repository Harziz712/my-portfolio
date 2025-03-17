"use client";

import { Button } from "../components/ui/button";
import { Mail, Phone } from "lucide-react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import Link from "next/link";
// import { div } from "../components/ui/ui";

export default function Footer() {
  return (
    <div data-aos="zoom-out"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" className="flex flex-col">
    <div className="w-full py-8 px-6 md:px-16 lg:px-24 flex flex-row justify-between  items-end">
      {/* Left Section */}
      <div className="text-left md:text-left mb-4 md:mb-0">
        <h1 className="text-2xl font-semibold">Logo</h1>
        {/* <p className="text-sm mt-2">Sect. A Room 7, Abode Lodge, Akure, Ondo State, NG</p> */}
        <p className="text-sm text-primary flex items-center gap-2 mt-1">
          <Mail size={16} /> akanbiazeez117@gmail.com
        </p>
      </div>
      

      
      {/* Right Section */}
      <div className="flex flex-col items-center md:items-end gap-4">
        <Button variant="outline" className="flex items-center gap-2 rounded-[10px] border-none ease-in-out bg-primary hover:bg-accent">
          <Mail size={16} /> Contact me
        </Button>
        <div className="flex gap-4 text-primary">
          <Link href="#"><FaLinkedin size={20} /></Link>
          <Link href="#"><FaTwitter size={20} /></Link>
          <Link href="#"><FaFacebook size={20} /></Link>
          <Link href="#"><LuInstagram size={20} /></Link>
        </div>
        <Link href="https://wa.me/+2347087875399">
          <p className="text-primary flex items-center gap-2 text-sm">
            <Phone size={16} /> (+234) 8146447551
          </p>
        </Link>
      </div>
 
    </div>
               {/* Center Section */}
               <div className="text-center text-gray-500 text-sm mb-4 md:mb-0">
        &copy; 2025 HarzizDesigns. All rights reserved.
      </div>
    </div>
  );
}