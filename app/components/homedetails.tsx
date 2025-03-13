import React from 'react'
import { Homebtn } from './ui/ui'

const HomeDetails = () => {
  return (
    <div className="w-full md:w-[50%] text-center md:text-left space-y-5  z-10 relative">
      <Homebtn />
      <h1 className="text-[35px] md:text-[50px] font-[700] leading-tight pt-2">
        Awww, Common! You found me too?!
      </h1>
      <p className="text-[18px] md:text-[20px] font-[500]">
        Oh well, I guess I have to introduce myself all over again.
      </p>
      <p className="text-[18px] md:text-[20px] font-[500]">Alright, here goes.</p>
      <h2 className="text-[25px] md:text-[30px] font-[700] leading-8">
        I am the <span className="text-primary">AKANBI <br /> ABDULAZEEZ KOLAWOLE</span>
      </h2>
    </div>
  );
};

export default HomeDetails;

