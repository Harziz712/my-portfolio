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

      {/* <Carousel
        plugins={[autoplayPlugin.current]}
        className="w-full max-w-sm md:max-w-max py-10  border-2 border-amber-400"
        onLoadStart={autoplayPlugin.current.stop}
        onMouseLeave={autoplayPlugin.current.reset}
      >
        <CarouselContent className="ml-1 md:ml-0 md:w-full h-full py-10 "> */}
          {/* {testimonials.map(({ id, imageUrl, name, position, testimonial }) => (
            <CarouselItem key={id} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div  className="p-1">
                <Glassmorphism className="relative justif</div>y-center items-center h-[300px] p-6 border-none shadow-2xl rounded-2xl bg-accent">
                  <div className="absolute left-1/2 z-20 -top-6 -translate-x-1/2 w-20 h-12">
                    <Image
                      src={imageUrl}
                      alt={name}
                      style={{
                        left: '32%',
                        zIndex: 10,
                        objectFit: 'contain',
                        position: 'absolute',
                      }}
                      className="rounded-full shadow-md"
                    />
                  </div>
                  <div className="pt-20 text-center h-[200px]">
                    <h3 className="text-lg font-bold text-primary">{name}</h3>
                    <p className="text-sm text-gray-500">{position}</p>
                    <p className="italic text-gray-700 mt-3">{testimonial}</p>
                  </div>
                </Glassmorphism>
                
              </div>
            </CarouselItem>
          ))} */}
            <div className=" px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full pt-10 ">
           {ProjectList.map((project, id) => (
                <Glassmorphism key={id} className="w-[300px]  p-0 mt-4 rounded-2xl  shadow-md  overflow-hidden">
                  <GlassShadow/>
          
                <div data-aos="zoom-in-down"
                data-aos-easing="ease-in-cubic" className="flex flex-col items-center ">
              {/* <div className="w-full h-[150px] overflow-hidden rounded-2xl"> */}
                <Image
                  src={project.image}
                  alt="project1"
                  className="w-full h-full object-cover "
                />
              {/* </div> */}
          
              {/* Text Content */}
          
              <div className="w-full px-4 py-3 inset-1 rounded-2xl  text-center space-y-2 flex flex-col items-center ">
                <h3 className=" font-semibold text-lg text-primary uppercase">{project.title}</h3>
                <p className="text-sm overflow-ellipsis">{project.description}  </p>
            <Button className={" flex px-6 py-3 font-bold text-sm rounded-2xl cursor-pointer mt-4" }>   <Link href={project.link}> </Link>  Visit  <LuArrowRight/></Button>

              </div>
            </div>
            </Glassmorphism>
          
            ))}
            </div>
        {/* </CarouselContent>
        <CarouselPrevious className="bg-primary" />
        <CarouselNext className="bg-primary" />
      </Carousel> */}
    </div>
  );
};

export default Projects;
