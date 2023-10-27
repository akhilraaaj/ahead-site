import Image from 'next/image';
import React from 'react';
import Star from '../assets/star.svg';
import { PageWrapperUp } from '../motion/PageWrapperUp';
import { PageWrapperLeft } from '../motion/pageWrapperLeft';

function Card2() {
  return (
    <div className='flex flex-col h-96 p-10'>
      <PageWrapperLeft>
        <h1 className='text-5xl font-semibold mb-5 ml-28 p-10'>Open vacancies</h1>
      </PageWrapperLeft>
      <PageWrapperUp>
        <div className='rounded overflow-hidden flex space-x-4 ml-20 gap-4'>
          <div className='group relative px-6 py-4 bg-[#FEFBEC] rounded-3xl ml-20 items-center justify-center'>
            <div className='font-bold text-xl mb-2 p-2'>Senior Full Stack Engineer</div>
            <ul className='list-disc text-gray-700 text-base font-normal ml-6'>
              <li>Full-time position</li>
              <li>Berlin or remote</li>
              <li>€40-55k 0.25-0.50% equity share options</li>
            </ul>
            <div className='text-center mt-5 ml-2'>
              <button className='hidden group-hover:block bg-black text-white px-3 py-2 rounded-full hover:opacity-100 transition-opacity duration-300'>
                See Details
              </button>
            </div>
          </div>

          <div className='group relative px-6 py-4 bg-[#FEFBEC] rounded-3xl'>
            <div className='font-bold text-xl mb-2 p-2'>Senior Engineer</div>
            <ul className='list-disc text-gray-700 text-base font-normal ml-6'>
              <li>Full-time position</li>
              <li>Berlin or remote</li>
              <li>€40-55k 0.25-0.50% equity share options</li>
            </ul>
            <div className='text-center mt-5 ml-2'>
              <button className='hidden group-hover:block bg-black text-white px-3 py-2 rounded-full hover:opacity-100 transition-opacity duration-300'>
                See Details
              </button>
            </div>
          </div>

          <div className='group relative px-6 py-4 bg-[#FEFBEC] rounded-3xl'>
            <div className='font-bold text-xl mb-2 p-2'>Superstar Intern</div>
            <ul className='list-disc text-gray-700 text-base font-normal ml-6'>
              <li>Full-time position</li>
              <li>Berlin or remote</li>
              <li>€40-55k 0.25-0.50% equity share options</li>
            </ul>
            <div className='text-center mt-5 ml-2'>
              <button className='hidden group-hover:block bg-black text-white px-3 py-2 rounded-full hover:opacity-100 transition-opacity duration-300'>
                See Details
              </button>
            </div>
          </div>
        </div>
      </PageWrapperUp>
    </div>
  );
}

export default Card2;
