"use client"

import React from 'react'
import { Button } from './button'
import styles from "../../Button.module.css";
import { Images } from '@/app/assets/images'
import Image from 'next/image';
import { Services } from '@/app/data/data';
import { Mail } from 'lucide-react';



export const Glassmorphism = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={`backdrop-blur-md shadow-md ${className}`}>{children}</div>
    // <div className={`backdrop-blur-md bg-white/10 shadow-md ${className}`}>{children}</div>
  )
}

export const Homebtn = () => {
  return (
    // <div className='rounded-full py-2 px-4 border-3 items-center text-center border-primary w-[8%] -rotate-12 absolute -top-10'>Welcome</div>
    // <Button className='rounded-full py-2 px-4 border-3 items-center text-center border-primary -rotate-12 absolute -top-10'>Welcome</Button>
    <Button className={styles.animatedButton}>
     <h2 className={styles.animatedButtonText}>Welcome</h2>
    </Button>
  )
}
export const BgBlur = ({ className }: { className?: string }) => {
  return (
    <div
      className={`absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] blur-3xl bg-primary opacity-30 ${className}`}
    ></div>
  );
};


export const Milkyway = () => {
  return (
    <div className='w-full py-[20%] md:py-[5%] h-[60vh]' ><img src={Images.milkyway.src} alt="milkyway" /> </div>
 )
}
export const TitleText =({title,  children,}: {children?: React.ReactNode, title: string }) => {
  return (
    <div className="text-primary text-[30px] font-[700]"><span className='text-accent'>{children}</span> {title}</div>
  )
}
export const GlassShadow = () => {
  return (
    <div className="w-[240px] h-[220px] bg-primary absolute top-[48%] left-[42%] blur-3xl"></div>
  );
};

export const ServiceBox = () => {
  return (
<>   
 {Services.map((service) => (
      <Glassmorphism  className="w-[300px]  p-0 rounded-2xl  shadow-md  overflow-hidden">
      <div data-aos="zoom-in-down"
      data-aos-easing="ease-in-cubic" className="flex flex-col items-center gap-4 p-5">
    <div className="w-full h-[150px] overflow-hidden rounded-2xl">
      <Image
        src={service.image}
        alt="service1"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Text Content */}

    <div className="w-full px-4 py-3 inset-1 rounded-2xl shadow-lg text-center space-y-2">
      <h3 className=" font-semibold text-lg text-primary uppercase">{service.title}</h3>
      <p className=" text-sm">{service.description}  </p>
    </div>
  </div>
  </Glassmorphism>

  ))}
  </>

  )
}


export const ContactInfo = () => {
  return (
<div data-aos="zoom-in-up"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000" className="flex flex-col px-3 md:p-0 items-center md:w-[40%] gap-5">
  <div className="flex flex-col items-left gap-2 space-y-4">
    <h2 className="text-primary text-[30px] font-[700]">Interested in collaborating on a project? Let's bring your creative ideas to life</h2>
    <p className="text-[15px] font-[500]">Feel free to send an email or fill out the form below:</p>
    <div className='flex gap-3'><Mail/> <p>akanbiazeez117@gmail.com</p></div>
  </div>

<div  className='relative pt-[120px] hidden md:flex'>    <Image
      src={Images.cute.src}
      alt="contact"
      width={100}
      height={100}
      objectFit='cover'
      style={{scale: 2.5, position: 'relative'}}
    /></div>
</div>
  )}

