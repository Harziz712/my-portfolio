import React from 'react'
import Navbar from './components/navbar'
import Home from './pages/home'
import { Milkyway } from './components/ui/ui'

const page = () => {
  return (
    <div className='bg-accent-foreground text-accent min-h-[100vh]'>
      <Navbar/>
      <Home/>
      <Milkyway/>

    </div>
  )
}

export default page