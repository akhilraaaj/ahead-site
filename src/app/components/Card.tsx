/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import Logo1 from '../assets/logo1.png'
import { PageWrapperRight } from '../motion/pageWrapperRight';

function Card() {
  return (
    <>
    <PageWrapperRight>
    <div className='flex items-center mb-10 ml-20'>
  <h1 className="text-5xl font-bold ml-6">Does this sound familiar...</h1>
  <Image src={Logo1} alt="logo" width={80} height={80} className="stroke-white-500 rounded-lg self-center" />
</div>


    <div className="rounded overflow-hidden mt-20 flex space-x-4 m-4">
      <div className="w-1/4 px-6 py-4 bg-blue-200 rounded-3xl">
        <img className="w-10 mb-2" src="https://em-content.zobj.net/source/apple/354/face-with-steam-from-nose_1f624.png" alt="Emoji 1" />
        <div className="font-bold text-xl mb-2">Squabble with your partner</div>
        <p className="text-gray-700 text-base font-medium">
        Instead of constructive conversations, you and your partner frequently engage in heated arguments, impeding issue resolution.</p>
      </div>

      <div className="w-1/4 px-6 py-4 bg-[#BEADFA] rounded-3xl">
        <img className="w-10 mb-2" src="https://em-content.zobj.net/source/apple/354/angry-face_1f620.png" alt="Emoji 2" />
        <div className="font-bold text-xl mb-2">You argue with a colleague</div>
        <p className="text-gray-700 text-base font-medium">
          You get angry and defensive, instead of staying open and working towards common ground.
        </p>
      </div>

      <div className="w-1/4 px-6 py-4 bg-blue-500 rounded-3xl">
        <img className="w-10 mb-2" src="https://em-content.zobj.net/source/apple/354/flushed-face_1f633.png" alt="Emoji 3" />
        <div className="font-bold text-xl mb-2">You get a promotion at work</div>
        <p className="text-gray-700 text-base font-medium">
          You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself & your abilities.
        </p>
      </div>

      <div className="w-1/4 px-6 py-4 bg-[#ECE5C7] rounded-3xl">
        <img className="w-10 mb-2" src="https://em-content.zobj.net/source/apple/354/face-with-raised-eyebrow_1f928.png" alt="Emoji 4" />
        <div className="font-bold text-xl mb-2">You attend a class reunion</div>
        <p className="text-gray-700 text-base font-medium">
          Instead of comparing yourself to others' achievements, focus on making self-judgment more independent of external factors.
        </p>
      </div>
    </div>
    </PageWrapperRight>
    </>
  );
}

export default Card;
