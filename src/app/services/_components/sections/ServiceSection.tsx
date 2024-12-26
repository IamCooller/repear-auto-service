import Title from '@/components/ui/Title';
import React from 'react';

import ServiceCarousel from '../ui/ServiceCarousel';
import { FadeInComponent } from '@/components/Animations';
const ServiceSection = () => {
  return (
    <section className="pt-[80px] pb-[60px] md:pb-[160px]">
      <div className="container overflow-hidden">
        <Title>
          At <span>John’s Auto Body Collision</span>, we’ve got you covered from
          bumper to bumper
        </Title>

        <FadeInComponent>
          <ServiceCarousel />
        </FadeInComponent>
      </div>
    </section>
  );
};

export default ServiceSection;
