import React from 'react'
import { Glassmorphism } from './ui/ui'
import { Card } from './ui/card'
import { cn } from '@/lib/utils'
import { Images } from '../assets/images'
import Image from 'next/image'

const AboutImg = () => {
  return (
<Glassmorphism className="overflow-hidden h-fit p-0 border-none shadow-2xl rounded-2xl">
  <Card className="w-[300px] h-[380px] p-0 flex items-center justify-center rounded-2xl">
    <Image className="object-contain" src={Images.profileImag} alt={''} />
  </Card>
</Glassmorphism>
  )
}

export default AboutImg