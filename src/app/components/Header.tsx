import Image from 'next/image';
import React from 'react';
import Star from '../assets/star.svg'
import { PageWrapperLeft } from '../motion/pageWrapperLeft';
import { PageWrapperRight } from '../motion/pageWrapperRight';


function Header() {
  return (
    
    <div className='overflow-x-hidden m-5'>
    <div className="container flex items-center justify-between py-8 bg-[#EEEAFD] rounded-3xl">
    <PageWrapperLeft>
    <div className="flex-2 ml-20 mt-8">
    <h3 className="text-xl mb-2 mt-4">Ahead App</h3>
    <h1 className="text-7xl font-bold">Master your life</h1>
    <h1 className="text-7xl font-bold">by mastering</h1>
    <h1 className="text-7xl font-bold">emotions</h1>

        <div className='flex mt-8'>
        <a href='/'><button className="flex items-center justify-center border-none rounded-md py-0  cursor-pointer focus:outline-none">
          <Image src="https://www.ahead-app.com/images/app-store.svg" alt='apple' width={150} height={150} className="stroke-white-500 mr-2 mt-3" />
        </button></a>
        <div className='mt-4 ml-4 flex flex-col items-center'>
          <div className="flex">
            {[...Array(5)].map((_, index) => ( 
              <Image key={index} src={Star} alt='star' width={24} height={28} className="stroke-white-500 mr-2" />
            ))}
          </div>
          <p className="mt-1 text-ms font-normal text-center">100+ AppStore reviews</p>
        </div>
        </div>
      </div>
      </PageWrapperLeft>
      <PageWrapperRight>
        <div className="relative mr-20 mt-10">
        <Image
          src="https://storage.googleapis.com/web-api-media-uploads/media/Image_1_8d38f94793/Image_1_8d38f94793.svg"
          alt="phone-img"
          width={500}
          height={500}
        />
      </div>
      </PageWrapperRight>

    </div>
    </div>
  );
}

export default Header;
