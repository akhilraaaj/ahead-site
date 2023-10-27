import React from 'react';
import { PageWrapperLeft } from '../motion/pageWrapperLeft';

function EQCard() {
  return (
    <PageWrapperLeft>
    <div className="container bg-white p-8 rounded mt-24 flex mb-20">
      <h1 className="text-3xl font-semibold mb-4 ml-24 mr-auto px-2">EQ beats IQ</h1>
      <p className="font-medium text-gray-700 max-w-xs mb-2 ml-44 text-lg">
        People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
      </p>
      <p className="font-medium text-gray-700 max-w-xs mb-20 ml-auto text-lg mr-24"> 
        They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.
      </p>
    </div>
    </PageWrapperLeft>
  );
}

export default EQCard;
