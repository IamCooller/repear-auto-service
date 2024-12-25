'use client';

import React from 'react';

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  styleFitContainer
} from 'react-compare-slider';
import Before from './before.png';
import After from './after.png';
const BeforeAfterSlider = () => {
  const handle = (
    <div className="flex items-center justify-center  h-full relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        fill="none"
        viewBox="0 0 36 36"
        className="hover:scale-110 transition-all duration-300 ease-in-out relative z-[1] max-sm:max-w-[40px]"
      >
        <path fill="red" d="M0 0h36v36H0z"></path>
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M24.485 13.757 28.728 18l-4.243 4.243M11.515 22.243 7.272 18l4.243-4.243M28.494 18h-7.666M7.495 18h7.676"
        ></path>
      </svg>
      <div
        className="w-[4px] sm:w-[10px] bg-white h-full  absolute left-1/2 top-0
        transform -translate-x-1/2 z-0
"
      ></div>
    </div>
  );

  return (
    <ReactCompareSlider
      className="h-[310px] md:h-screen overflow-auto rounded-tl-[24px]  rounded-br-[24px] md:rounded-tl-[48px] md:rounded-br-[48px]"
      style={{
        ...styleFitContainer({
          objectFit: 'contain',
          objectPosition: 'center'
        })
      }}
      itemOne={
        <div className="relative">
          <ReactCompareSliderImage
            src={Before.src}
            srcSet={Before.src}
            alt="Damaged vehicle service before"
          />
          <p className="absolute bottom-[20px] left-[20px] font-semibold text-[32px] md:text-[60px]">
            Before
          </p>
        </div>
      }
      itemTwo={
        <div className="relative">
          <ReactCompareSliderImage
            src={After.src}
            srcSet={After.src}
            alt="Repaired vehicle service after"
          />
          <p className="absolute top-[20px] right-[20px] font-semibold text-[32px] md:text-[60px]">
            After
          </p>
        </div>
      }
      handle={handle}
    />
  );
};

export default React.memo(BeforeAfterSlider);
