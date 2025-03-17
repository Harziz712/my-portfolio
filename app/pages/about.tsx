import React, { useEffect } from 'react'
import AboutImg from '../components/aboutimg'
import Aboutdetails from '../components/aboutdetails'
import { BgBlur } from '../components/ui/ui'

const About = () => {

  return (
<div id="about" className="h-auto min-h-screen w-full px-5 md:px-[10%] py-[10%] relative flex flex-col items-center justify-center">
  <BgBlur className="left-[40%] top-[40%] z-0 absolute" />
  
  
  <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 w-full px-20">

    <AboutImg />
    <Aboutdetails />
  </div>
</div>

  )
}

export default About