import React from 'react';
import Navbar from './components/navbar';
import Home from './pages/home';
import { Milkyway } from './components/ui/ui';
import About from './pages/about';
import Service from './pages/service';
import Testimonial from './pages/testimonial';
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css";


const Page = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="bg-accent-foreground text-accent h-full m-0 p-0">
      <Navbar />
      <div className=" relative"> 
        <Home /> 
        <Milkyway />
        <About />
        <Service/>
        <Testimonial/>
      </div>
    </div>
  );
};

export default Page;
