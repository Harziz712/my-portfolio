import React from 'react'
import { BgBlur, GlassShadow, ServiceBox, TitleText } from '../components/ui/ui'

const Service = () => {
  return (
<div id="service" className="h-auto min-h-screen w-full px-5 md:px-[10%] py-[10%] relative flex flex-col items-center ">
  <BgBlur className="left-[40%] top-[40%] z-0 absolute" />
  <TitleText title='Services' >My</TitleText>
  <GlassShadow/>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full pt-10 px-[10%]">
    <ServiceBox/>

  </div>
</div>
  )
}

export default Service