import React from 'react'
import { Glassmorphism } from './ui/ui'
import { Images } from '../assets/images'
import Image from 'next/image'

const AboutImg = () => {
  return (
<Glassmorphism className="overflow-hidden h-fit p-0 border-none shadow-2xl rounded-2xl">
  <div  data-aos="zoom-in"
      data-aos-easing="ease-in-cubic" className="w-[300px] h-[380px] p-0 flex items-center justify-center rounded-2xl">
    <Image className="object-contain" src={Images.profileImag} alt={''} />
  </div>
</Glassmorphism>
  )
}

export default AboutImg