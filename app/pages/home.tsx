import React from 'react'
import HomeDetails from '../components/homedetails'
import { BgBlur, GlassShadow } from '../components/ui/ui'
import HomeImage from '../components/homeimage';

const Home = () => {
  return (
    <div id="home" className="relative w-full h-auto min-h-screen flex flex-col pt-[30%] md:pt-[10%] md:flex-row items-center justify-center px-10 md:px-32 gap-10 md:gap-20">
      <BgBlur className="top-[30%] left-[50%] translate-x-[-50%] z-0" />
      <GlassShadow/>
      <HomeDetails  />
      <HomeImage />
    </div>
  );
};

export default Home;

