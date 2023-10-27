/* eslint-disable @next/next/no-img-element */
import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src={`https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/cb/cc/3e/cbcc3eb6-9446-e67b-92d1-f9a9e311efcd/AppIcon-1x_U007emarketing-0-7-0-85-220.png/246x0w.webp`} alt='apple' width={50} height={50} className="stroke-white-500 mr-2 rounded-lg" />
      </div>
      <div className="text-black text-base font-semibold text-center flex items-center justify-center flex-grow">
        <a href="#" className="mr-6 ml-6">Emotions</a>
        <a href="#" className="mr-6 ml-6">Manifesto</a>
        <a href="#" className="mr-6 ml-6">Self-awareness test</a>
        <a href="#" className="mr-6 ml-6">Work With Us</a>
      </div>
      <a href='#'><button className='rounded-full bg-black text-white px-4 py-3 font-semibold'>Download App</button></a>
    </nav>
  );
}

export default Navbar;
