import { FadeInComponent } from '@/components/Animations';
import SubTitle from '@/components/ui/SubTitle';
import Title from '@/components/ui/Title';

import React from 'react';
/* const BeforeAfterSlider = dynamic(
  () => import('@/components/sections/BeforeAfterSlider'),
  {
    loading: () => (
      <div className="h-full w-full flex justify-center items-center">
        <LoadingSpinner />
      </div>
    )
  }
); */
const BeforeAfterSection = () => {
  return (
    <section
      className="bg-black py-[40px] rounded-br-[44px] md:rounded-br-[88px]"
      id="before-after"
    >
      <FadeInComponent className="container text-white">
        <SubTitle text="See Our Work in Action" />
        <Title>
          From Damaged to Delivered – Witness the Remarkable Transformation!
        </Title>
        {/*     <BeforeAfterSlider /> */}
      </FadeInComponent>
    </section>
  );
};

export default BeforeAfterSection;
