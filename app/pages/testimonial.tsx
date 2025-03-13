import React from 'react'
import { BgBlur, TitleText } from '../components/ui/ui'

const Testimonial = () => {
  return (
<div id="testimonial" className="h-auto min-h-screen w-full px-5 md:px-[10%] py-[10%] relative flex flex-col items-center ">

  <BgBlur className="left-[40%] top-[40%] z-0 absolute" />
  
  <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 w-full">
  <TitleText title='Testimonials' >My</TitleText>

  </div>
</div>
  )
}

export default Testimonial