import React from 'react'
import HomeDetails from '../components/homedetails'
import { BgBlur } from '../components/ui/ui'

const Home = () => {
  return (
    <div   id='home' className=' md:px-32 top-55 relative w-full h-[100vh]'>
        <BgBlur/>
        <HomeDetails />
    </div>
  )
}

export default Home