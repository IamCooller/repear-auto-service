import React from 'react';
import FactCard from '../ui/FactCard';
import AnimatedGrid from '@/components/Animations/AnimatedGrid';

const FactSection = () => {
  const factsData = [
    {
      title: 'Some',
      value: 'FACTS',
      bgColor: 'bg-transparent',
      border: 'border border-white',
      textColor: 'text-white'
    },
    {
      title: 'Trusted by happy customers',
      value: '10,000+',
      bgColor: 'bg-red',
      textColor: 'text-white'
    },
    {
      title: 'Providing top-tier service since',
      value: '1995',
      bgColor: 'bg-red',
      textColor: 'text-white'
    }
  ];
  return (
    <section className="bg-black py-[40px]" id="facts">
      <AnimatedGrid className="container grid lg:grid-cols-3 gap-[20px]">
        {factsData.map((fact, index) => (
          <FactCard key={index} {...fact} />
        ))}
      </AnimatedGrid>
    </section>
  );
};

export default FactSection;
