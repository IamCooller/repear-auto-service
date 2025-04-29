const LazyVideo = dynamic(() => import('@/components/ui/LazyVideo'), {
  loading: () => (
    <div className="h-full w-full flex justify-center items-center">
      <LoadingSpinner />
    </div>
  )
});
import LoadingSpinner from '@/app/loading';
import { FadeInComponent } from '@/components/Animations';
import SubTitle from '@/components/ui/SubTitle';
import Title from '@/components/ui/Title';
import dynamic from 'next/dynamic';
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-[60px] md:py-[160px]" id="about-us">
      <FadeInComponent className="container">
        <SubTitle text="25+ Years of Perfecting the Art of Car Detailing" />
        <Title>
          At <span>John’s Auto Body Collision</span>, we’ve been committed to
          delivering <span>top-notch</span> auto body and detailing services{' '}
          <span>since 1995</span>.
        </Title>
        <div className="mt-[60px]">
          <LazyVideo
            desktopSrc="/home/HORIZONTAL.mp4"
            mobileSrc="/home/KVADRAT.mp4"
          />
        </div>
        <p className="mt-[20px] font-roboto md:text-[32px]">
          With over 10,000+ satisfied clients, we’re proud to be your go-to
          choice for bringing your car back to life. Our skilled technicians use
          cutting-edge tools and techniques to ensure every job meets the
          highest standards.
        </p>
      </FadeInComponent>
    </section>
  );
};

export default AboutSection;
