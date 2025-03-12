import Link from 'next/link'
import React from 'react'

const NavLinks = () => {
  return (
    <div className="sm: grid md:flex justify-between items-center p-4 gap-8 ">
      <Link href="#home">Home</Link>
      <Link href="#about">About</Link>
      <Link href="#testiomonial">Testimonial</Link>
      <Link href="#blog">Blog</Link>
      <Link href="#newsletter">Newsletters</Link>
    </div>
  )
}

export default NavLinks