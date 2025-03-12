import React from 'react'
import { Button } from './button'
import styles from "../../Button.module.css";
import { Images } from '@/app/assets/images'



export const Glassmorphism = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={`backdrop-blur-md shadow-md ${className}`}>{children}</div>
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
export const BgBlur = () => {
  return (
<div className='h-[250px] w-[250px] blur-3xl  bg-primary  opacity-30 absolute  top-[20%] left-[40%] z-0 '></div>
  )
}

export const Milkyway = () => {
  return (
<img src={Images.milkyway.src} alt="milkyway" className='w-full' />  )
}

