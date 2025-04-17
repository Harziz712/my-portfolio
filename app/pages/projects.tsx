"use client"

import React from 'react'
import { BgBlur, Glassmorphism, GlassShadow, TitleText } from '../components/ui/ui'
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"
import { ProjectList, testimonials } from '../data/data'
import Link from 'next/link'
import { Button } from '../components/ui/button'
import { ArrowBigRight } from 'lucide-react'
import { LuArrowRight } from 'react-icons/lu'


const Projects = () => {
  const autoplayPlugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  

  return (
    <div id="testimonial" className="h-auto min-h-screen w-full md:px-[10%] py-[10%] relative flex flex-col items-center gap-12">
      <BgBlur className="left-[40%] top-[40%] z-0 absolute" />
   <div data-aos="fade-down"
      data-aos-easing="ease-in-cubic" className='text-center space-y-2'>
   <TitleText title="Projects">My</TitleText>
   <p>Recent works</p>
   </div>
      <GlassShadow />


            <div className=" px-8 md:px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full pt-10 ">
           {ProjectList.map((project, id) => (
                <Glassmorphism key={id} className="w-[300px]  p-0 mt-4 rounded-2xl  shadow-md  overflow-hidden">
                  <GlassShadow/>
          
                <div data-aos="zoom-in-down"
                data-aos-easing="ease-in-cubic" className="flex flex-col items-center ">
                <Image
                  src={project.image}
                  alt="project1"
                  className="w-full h-full object-cover "
                />
 
          
              <div className="w-full px-4 py-3 inset-1 rounded-2xl  text-center space-y-2 flex flex-col items-center ">
                <h3 className=" font-semibold text-lg text-primary uppercase">{project.title}</h3>
                <p className="text-sm overflow-ellipsis">{project.description}  </p>
            <Button className={" flex px-6 py-3 font-bold text-sm rounded-2xl cursor-pointer mt-4" }>   <Link href={project.link}   target="_blank" rel="noopener noreferrer" className='flex justify-center items-center gap-1' > Visit  <LuArrowRight/></Link>  </Button>

              </div>
            </div>
            </Glassmorphism>
          
            ))}
            </div>

    </div>
  );
};

export default Projects;
