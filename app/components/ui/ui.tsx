import React from 'react'
import { Button } from './button'
import styles from "../../Button.module.css";
import { Images } from '@/app/assets/images'



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
    <div className='w-full py-[5%] h-[60vh]' ><img src={Images.milkyway.src} alt="milkyway" /> </div>
 )
}

