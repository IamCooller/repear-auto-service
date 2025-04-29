import SubTitle from '@/components/ui/SubTitle';
import Title from '@/components/ui/Title';
import React from 'react';
import WhyChooseUsCard from '../ui/WhyChooseUsCard';
import AnimatedGrid from '@/components/Animations/AnimatedGrid';
import AwardIcon from '@/components/ui/SVG/AwardIcon';
import PhoneIcon from '@/components/ui/SVG/PhoneIcon';
import ZapIcon from '@/components/ui/SVG/ZapIcon';
const WhyChooseUsSection = () => {
  const cardsData = [
    {
      id: 1,
      title: 'Experience',
      description:
        'Certified technicians using the latest tools and techniques',
      icon: <AwardIcon />
    },
    {
      id: 2,
      title: 'Integrity',
      description: 'Honest pricing and transparent communication',
      icon: <PhoneIcon />
    },
    {
      id: 3,
      title: 'Efficiency',
      description: 'Quick turnaround without compromising on quality',
      icon: <ZapIcon />
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
