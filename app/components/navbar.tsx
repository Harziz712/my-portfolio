import React from 'react'
import { Glassmorphism } from './ui/ui'
import NavLinks from './ui/nav-links'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

const Navbar = () => {
  return (
    <Glassmorphism className="w-full fixed  top-0 left-0 z-99">
      <div className="flex justify-between items-center py-4 px-8">
        <h1 className="text-2xl font-semibold">Logo</h1>

        <div className="hidden md:flex justify-between items-center gap-6">
          <NavLinks />
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-8 h-8" />
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col items-center gap-4 mt-6">
                <NavLinks />
                <Button className="w-full py-3">Contact me</Button>
              </div>
            </SheetContent>
          </Sheet>
         
        </div>
        <Button className="hidden md:flex px-6 py-3 font-bold text-sm">Contact me</Button>
      </div> 
   
      <div className="h-[2px] w-full bg-primary mb-3"></div>
    </Glassmorphism>
  )
}

export default Navbar
