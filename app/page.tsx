import React from 'react';
import Navbar from './components/navbar';
import Home from './pages/home';
import { Milkyway } from './components/ui/ui';
import About from './pages/about';
import Service from './pages/service';
import Testimonial from './pages/testimonial';

const Page = () => {
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
