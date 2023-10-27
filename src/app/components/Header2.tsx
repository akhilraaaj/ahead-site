import React from 'react';
import Image from 'next/image';
import { PageWrapperLeft } from '../motion/pageWrapperLeft';

function Header2() {
  return (
    <PageWrapperLeft>
    <div className='overflow-x-hidden m-5 mt-20'>
      <div className="container flex flex-col px-20 bg-[#FEF7F1] rounded-3xl mt-20">
        <h3 className="text-lg mb-2 mt-20 ml-6">Built out of frustration</h3>
        <h1 className="mt-2 text-5xl font-bold ml-6">Meet the ahead app</h1>
        <div className='flex mt-1 justify-between'> 
          <div className="flex flex-col items-start"> 
            <Image src={`https://self-awareness.ahead-app.com/static/media/home_owel.e23a16a0.svg`} width={400} height={400} alt='avatar1' className='ml-14 mt-6 mb-8' />
          </div>
          <div className="mt-20 text-2xl max-w-lg mr-20 text-gray-600"> 
            <p className='mt-5'>
              A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence. 
            </p><br />
            <p>
              Think of it as a pocket cheerleader towards a better, more fulfilling life.
            </p>
          </div>
        </div>
      </div>
    </div>
    </PageWrapperLeft>
  );
}

export default Header2;
