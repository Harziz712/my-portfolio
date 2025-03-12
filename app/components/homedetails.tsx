import React from 'react'
import { Homebtn } from './ui/ui'

const HomeDetails = () => {
  return (
    <>    <Homebtn/>

    <div className='w-[50%] space-y-5 overflow-hidden z-10 relative'>
        <h1 className='text-[50px] font-[700] leading-15 pt-2'>Awww, Common! You found me too?!</h1>
        <p className='text-[20px] font-[500]'>Oh well, I guess I have to introduce myself all over again. </p> 
        <p className='text-[20px] font-[500]'>Alright, here goes.</p>
        <h2 className='text-[30px] font-[700] leading-8'>I am the <span className='text-primary'>AKANBI <br/>ABDULAZEEZ KOLAWOLE</span></h2>
    </div>
    </>

  )
}

export default HomeDetails