import React from "react";
import dp from "../assets/DP.jpg"

function Hero() {
  return (
    <div className="bg-black text-white text-center py-16 ">
      <img src={dp} alt="picture" className="mx-auto mb-8 w-48 rounded-full object-cover transform transition-transform duration-300 hover:sacle-105"/>
      <h1 className="text-4xl font-bold">
        I'm {""}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500">Amrith P,</span>
        React Js Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300" >I specialize in building modern and responsive web applications.</p>
      <div className="mt-8 space-x-4">
 
      <button className="bg-gradient-to-r from-gray-500 to-blue-900 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-4 rounded-full my-1">Download Resume</button>
      </div>
    </div>
  );
}

export default Hero;