import React from 'react'
import { BgBlur, ContactInfo, GlassShadow, TitleText } from '../components/ui/ui'
import { ContactForm } from '../components/ui/contactform'

const Contact = () => {
  return (
<div id="contact" className="h-auto min-h-screen w-full px-5 md:px-[10%] py-[10%] relative flex flex-col items-center  gap-10">
  <BgBlur className="left-[40%] top-[40%] z-0 absolute" />
  <TitleText title='me' >Contact</TitleText>
  <GlassShadow/>

  <div className="flex flex-col md:flex-row items-center justify-center gap-20 md:gap-48 w-full">
    <ContactInfo/>
    <ContactForm/>
    </div>


</div>
  )
}

export default Contact