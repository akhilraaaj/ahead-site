/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { PageWrapperLeft } from '../motion/pageWrapperLeft'

function Work() {
  return (
    <div className="overflow-x-hidden m-5">
      <div className="container py-8 bg-[#EEEAFD] rounded-3xl">
      <PageWrapperLeft>
        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-bold mb-5 ml-20 p-10">Work with us</h1>
          <h1 className="text-4xl font-bold text-blue-800 mr-24">ahead</h1>
        </div>
        </PageWrapperLeft>
        <div className="mt-2 flex">
  <div className="left-side-card">
    <div className="rounded overflow-hidden max-w-lg ml-24">
      <div className="w-full px-6 py-8 bg-white rounded-3xl">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoQf4ROHUuqDde2iCb1lhIxyyhNQHfTVl_CsUczj3dSXtUjXJP' alt='apple' width={60} height={60} className="stroke-white-500 mr-2" />
        <div className="font-bold text-2xl mb-2 mt-2">About</div>
        <p className="text-gray-700 text-lg font-medium mb-4">
          At ahead our goal is to make self-improvement fun and lasting. We know there's a way how to make it work. And that's what aHead is all about!
        </p>
      </div>
    </div>

    <div className="rounded overflow-hidden max-w-lg ml-24 -mt-8">
      <div className="w-full px-6 py-8 bg-[#FEF7F1] rounded-3xl">
        <div className="font-bold text-2xl mb-2">Product</div>
        <p className="text-gray-700 text-lg font-medium">
          Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did....
        </p>
      </div>
    </div>
  </div>



          <div className="right-side-cards ml-auto mr-24 max-h-[25rem] overflow-y-auto custom-scrollbar">
            <div className="rounded overflow-hidden max-w-lg m-4">
              <div className="w-full px-6 py-8 bg-white rounded-3xl">
                <div className="font-bold text-lg mb-2 mt-2">Power through, even when the going gets tough</div>
                <p className="text-gray-700 text-sm font-medium">
                We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.
                </p>
              </div>
            </div>
            <div className="rounded overflow-hidden max-w-lg m-4">
              <div className="w-full px-6 py-8 bg-white rounded-3xl">
                <div className="font-bold text-lg mb-2 mt-2">Learn more about who you are and where you want to go</div>
                <p className="text-gray-700 text-lg font-medium">
                We ask the right questions to help you better understand why you do things the way you do
                </p>
              </div>
            </div>
            <div className="rounded overflow-hidden max-w-lg m-4">
              <div className="w-full px-6 py-8 bg-white rounded-3xl">
                <div className="font-bold text-lg mb-2 mt-2">Play and grow together with others on the same journey</div>
                <p className="text-gray-700 text-lg font-medium">
                Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
