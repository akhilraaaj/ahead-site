/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import Location from '../assets/location.png';
import Email from '../assets/email.png';

function Footer() {
  return (
    <>
      <hr className="mt-20  ml-20  w-90 mr-10 border-gray-300" />
    <div className="flex flex-col items-center justify-center">
      <div className="items-center">
        <img src='https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/cb/cc/3e/cbcc3eb6-9446-e67b-92d1-f9a9e311efcd/AppIcon-1x_U007emarketing-0-7-0-85-220.png/246x0w.webp' alt="footer-logo" width={50} height={50} className="stroke-white-500 mr-2 mb-1 mt-4 rounded-lg" />
        <h1 className='font-bold text-blue-600 text-lg'>ahead</h1>
      </div>
      <div className='flex items-center mt-5'>
        <div className='flex mr-14'>
        <Image src={Location} alt="apple" width={20} height={20} className="stroke-white-500" />
        <h1 className='ml-2 mr-4'>Auguststraße 26, 10117 Berlin</h1>
        </div>
        <Image src={Email} alt="apple" width={20} height={20} className="stroke-white-500 mr-2" />
        <h1>hi@ahead-app.com</h1>
      </div>
      <a href='/'><button className="flex items-center justify-center border-none rounded-md py-0 mt-4 cursor-pointer focus:outline-none">
          <Image src="https://www.ahead-app.com/images/app-store.svg" alt='apple' width={150} height={150} className="stroke-white-500 mr-2 mt-3" />
        </button></a>
        <p className='text-xs font-medium mt-7 mb-20'>© 2022 Ahead app. All right reserved</p>
    </div>
    </>
  );
}

export default Footer;
