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
import { testimonials } from '../data/data'


const Testimonial = () => {
  const autoplayPlugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  

  return (
    <div id="testimonial" className="h-auto min-h-screen w-full px-5 md:px-[10%] py-[10%] relative flex flex-col items-center gap-12">
      <BgBlur className="left-[40%] top-[40%] z-0 absolute" />
   <div data-aos="fade-down"
      data-aos-easing="ease-in-cubic" className='text-center space-y-2'>
   <TitleText title="Testimonials">My</TitleText>
   <p>The buzz on Azeez</p>
   </div>
      <GlassShadow />
      <Carousel
        plugins={[autoplayPlugin.current]}
        className="w-full max-w-sm md:max-w-5xl py-10"
        onMouseEnter={autoplayPlugin.current.stop}
        onMouseLeave={autoplayPlugin.current.reset}
      >
        <CarouselContent className="w-full h-full py-10">
          {testimonials.map(({ id, imageUrl, name, position, testimonial }) => (
            <CarouselItem key={id} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div  className="p-1">
                <Glassmorphism className="relative justify-center items-center h-[300px] p-6 border-none shadow-2xl rounded-2xl bg-accent">
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
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-primary" />
        <CarouselNext className="bg-primary" />
      </Carousel>
    </div>
  );
};

export default Testimonial;
