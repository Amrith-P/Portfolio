import React from 'react'

function Navbar() {
  return (
    <nav className='bg-black text-white px-8'>
        <div className=' py-2 flex justify-between md:justify-between item-center'>
            <div className='text-2xl font-bold hidden md:inline py-4'>
                Amrith
            </div>
            <div className='space-x-6 py-4 flex-1 flex justify-center'>
                <a href="#home"className='hover:text-blue-800'>Home</a>
                <a href="#about"className='hover:text-blue-800'>About Me</a>
                <a href="#services"className='hover:text-blue-800'>Services</a>
                <a href="#projects"className='hover:text-blue-800'>Projects</a>
                <a href="#contact"className='hover:text-blue-800'>Contact</a>
            </div>
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full my-2">
            Contact Me
        </button>
        </div>
    </nav>
  )
}

export default Navbar