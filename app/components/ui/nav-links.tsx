import Link from 'next/link'
import React from 'react'

const NavLinks = () => {
  return (
    <div  className="sm: grid md:flex justify-between items-center p-4 gap-8 ">
      <Link   data-aos="fade-down"
  data-aos-duration="1000"
  data-aos-delay="300"
  data-aos-offset="200" href="#home">Home</Link>
      <Link   data-aos="fade-down"
  data-aos-duration="1500"
  data-aos-delay="300"
  data-aos-offset="200" href="#about">About</Link>
      <Link   data-aos="fade-down"
  data-aos-duration="2000"
  data-aos-delay="300"
  data-aos-offset="200" href="#service">Services</Link>
      <Link   data-aos="fade-down"
  data-aos-duration="2500"
  data-aos-delay="300"
  data-aos-offset="200" href="#testimonial">Testimonial</Link>
      <Link   data-aos="fade-down"
  data-aos-duration="3000"
  data-aos-delay="300"
  data-aos-offset="200" href="#newsletter">Newsletters</Link>
    </div>
  )
}

export default NavLinks