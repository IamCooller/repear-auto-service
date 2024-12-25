import SubTitle from '@/components/ui/SubTitle';
import Title from '@/components/ui/Title';
import React from 'react';
import WhyChooseUsCard from '../ui/WhyChooseUsCard';
import AnimatedGrid from '@/components/Animations/AnimatedGrid';
const WhyChooseUsSection = () => {
  const cardsData = [
    {
      id: 1,
      title: 'Experience',
      description:
        'Certified technicians using the latest tools and techniques',
      icon: '/icons/award.svg',
      bgColor: 'bg-black',
      iconBg: 'bg-white',
      textColor: 'text-white'
    },
    {
      id: 2,
      title: 'Integrity',
      description: 'Honest pricing and transparent communication',
      icon: '/icons/phone.svg',
      bgColor: 'bg-white',
      iconBg: 'bg-red',
      textColor: 'text-black'
    },
    {
      id: 3,
      title: 'Efficiency',
      description: 'Quick turnaround without compromising on quality',
      icon: '/icons/zap.svg',
      bgColor: 'bg-white',
      iconBg: 'bg-red',
      textColor: 'text-black'
    }
  ];
  return (
    <section className=" pb-[60px] md:pb-[160px]" id="why-us">
      <div className="container">
        <SubTitle text="Why Choose Us" />
        <Title>Experience, Quality, and Customer Care You Can Trust</Title>

        <AnimatedGrid className="grid lg:grid-cols-3 gap-[20px]">
          {cardsData.map(card => (
            <WhyChooseUsCard key={card.id} {...card} />
          ))}
        </AnimatedGrid>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
