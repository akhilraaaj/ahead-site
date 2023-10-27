/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { PageWrapperLeft } from '../motion/pageWrapperLeft';
import { PageWrapperUp } from '../motion/PageWrapperUp';

function Self() {
  return (
    <div className='p-4 ml-24'>
      <PageWrapperLeft>
        <h3 className="text-lg mb-2 mt-20 ml-6">Wrong with self-improvement & how we're fixing it.</h3>
        <div className='flex items-center mb-10'>
        <h1 className="text-5xl font-bold ml-6 mb-2">Self-improvement. Ugh.</h1>
        <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQzvXdyKp2KSNxm_wu9Uw9BF65wYeQSj5VVIU42QSREgDofUrel' alt="logo" width={80} height={80} className="stroke-white-500 mb-2 rounded-lg" />
        </div>
        </PageWrapperLeft>
        <PageWrapperUp>
    <div className="max-w-lg mx-auto overflow-y-auto h-[350px] custom-scrollbar1">
      <div className="relative">
        <div className="mb-8">
          <div className="border-r-2 border-[#603FF1] absolute h-full top-0" style={{ left: '10px' }}></div>
          <div className="mb-3 flex items-center">
            <div className="bg-[#603FF1] rounded-full h-8 w-8"></div>
            <div className="ml-4 font-semibold text-gray-800">It's not as easy as 1-2-3</div>
          </div>
          <div className="ml-12">
            <p className="text-gray-700">The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).</p>
          </div>
        </div>

        
        <div className="mb-8">
          <div className="border-r-2 border-[#603FF1] absolute h-full top-0" style={{ left: '10px' }}></div>
          <div className="mb-3 flex items-center">
            <div className="bg-[#603FF1] rounded-full h-8 w-8"></div>
            <div className="ml-4 font-semibold text-gray-800">Old habits are hard to break</div>
          </div>
          <div className="ml-12">
            <p className="text-gray-700">And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use.</p>
          </div>
        </div>

        <div className="mb-8">
          <div className="border-r-2 border-[#603FF1] absolute h-full top-0" style={{ left: '10px' }}></div>
          <div className="mb-3 flex items-center">
            <div className="bg-[#603FF1] rounded-full h-8 w-8"></div>
            <div className="ml-4 font-semibold text-gray-800">You and your motivation don't have a long-term relationship.</div>
          </div>
          <div className="ml-12">
            <p className="text-gray-700">Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exercises will help you stick to your goals.</p> 
          </div>
        </div>

        <div className="mb-8">
          <div className="border-r-2 border-[#603FF1] absolute h-full top-0" style={{ left: '10px' }}></div>
          <div className="mb-3 flex items-center">
            <div className="bg-[#603FF1] rounded-full h-8 w-8"></div>
            <div className="ml-4 font-semibold text-gray-800">Books just don't offer practical solutions.</div>
          </div>
          <div className="ml-12">
            <p className="text-gray-700">Remember when you learned to ride a bike just by reading? Those were the days when a simple book could teach us anything.</p>
          </div>
        </div>

      </div>
    </div>
    </PageWrapperUp>
    </div>
  );
}

export default Self;
