/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { PageWrapperUp } from '../motion/PageWrapperUp'
import { PageWrapperLeft } from '../motion/pageWrapperLeft'

function Signature() {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="text-center mt-10">
        <h3 className='text-lg mb-4 font-medium'>We take privacy seriously</h3>
        <h1 className='text-3xl font-extrabold m-4'>Before you get started</h1>
        <h3 className='text-lg mb-4 max-w-lg font-medium'>"We won't share your answers with anyone (and won't ever tell you which friends said what about you)"</h3>
        <PageWrapperLeft><h3 className='text-lg m-6'>With love, Team Ahead</h3></PageWrapperLeft>
    <PageWrapperUp>
        <a href='/'><button className='rounded-full bg-black text-white py-3 px-5'>Start a test</button></a>
    </PageWrapperUp>  

        <p className='mt-4 text-sm font-medium mb-20'>Take only 5 minutes</p>
      </div>
    </div>
  );
}

export default Signature;
