"use client"
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
import Contact from './pages/contact';
import Footer from './pages/footer';
import Projects from './pages/projects';


const Page = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="bg-accent-foreground text-accent h-full m-0 p-0 overflow-hidden">
      <Navbar />
      <div className=" relative pt-10 md:pt-0"> 
        <Home /> 
        <Milkyway />
        <About />
        <Service/>
        <Projects/>
        <Testimonial/>
        <Contact/>
      <div className="h-[2px] w-full bg-primary mb-3"/>
        <Footer/>
      </div>
    </div>
  );
};

export default Page;
