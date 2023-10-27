import React from 'react';
import Image from 'next/image';
import Header3Img from '../assets/header3.png';
import HeaderLineImg from '../assets/headerLineImg.png';
import { PageWrapperUp } from '../motion/PageWrapperUp'

function Header3() {
  return (
      <div className='overflow-hidden m-5'>
      <div className="container flex flex-col px-20 bg-[#EDF8FE] rounded-3xl items-center">
    <PageWrapperUp>    

        <h3 className="text-lg mb-2 mt-20 ml-6">Let your friends, and co-workers (anonymously) rate your social skills</h3>
        <h1 className="mt-2 text-5xl font-bold ml-6">Ever wondered what others think of you?</h1>
        <Image src={HeaderLineImg} width={1000} height={1000} alt='avatar1' className='ml-14 mt-5' />
        <Image src={Header3Img} width={1000} height={1000} alt='avatar1' className='ml-14' />
    </PageWrapperUp>

      </div>
    </div>
  );
}

export default Header3;
