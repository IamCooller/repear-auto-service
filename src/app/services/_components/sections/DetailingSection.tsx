import SubTitle from '@/components/ui/SubTitle';
import React from 'react';
import Image from 'next/image';
import DetailingCard from '../ui/DetailingCard';
import AnimatedGrid from '@/components/Animations/AnimatedGrid';
const DetailingSection = () => {
  const services = [
    {
      id: 1,
      title: 'COMPLETE INTERIOR',
      price: (
        <>
          Sedan $100 <br /> SUV $125
        </>
      ),
      features: [
        'All dashboard vents and openings completely cleaned',
        'Streak-free window cleaning',
        'All upholstery and carpeting shampooed and vacuumed',
        'All vinyl and leather reconditioned',
        'Entire Interior detailed',
        'Entire exterior and door jambs waxed'
      ],
      buttonColor: 'bg-black'
    },
    {
      id: 2,
      title: 'Full Detail',
      price: (
        <>
          Sedan $200 <br /> SUV $250
        </>
      ),
      features: [
        'Complete interior and exterior detailing',
        'Exterior of car hand washed',
        'Wheels cleaned, tires dressed',
        'Entire exterior and door jambs waxed',
        'All vinyl and leather reconditioned',
        'All upholstery and carpeting shampooed and vacuumed',
        'Streak-free window cleaning',
        'All dashboard vents and openings thoroughly cleaned',
        'Engine bay steam washed (+25$)'
      ],
      buttonColor: 'bg-red'
    },
    {
      id: 3,
      title: 'COMPLETE EXTERIOR',
      price: (
        <>
          Sedan $100 <br />
          SUV $125
        </>
      ),
      features: [
        'Complete interior and exterior detailing',
        'Exterior of car hand washed',
        'Weels cleaned',
        'Streak-free window cleaning',
        'Tires dressed',
        'Entire exterior and door jambs waxed'
      ],
      buttonColor: 'bg-black'
    }
  ];
  return (
    <section className="bg-black py-[60px] md:mb-[160px] mb-[60px]">
      <div className="container">
        <SubTitle
          text="Make your car look new in only few minutes"
          className="text-white"
        />
        <div className="text-[73px] sm:text-[130px] md:text-[150px] lg:text-[200px] min-[1440px]:text-[270px] font-black leading-none text-red">
          Detailing
        </div>
      </div>
      <div className="relative w-full h-[150px] sm:h-[200px] md:h-[350px] min-[1440px]:h-[560px] pointer-events-none">
        <Image
          src={'/services/detailing2.png'}
          width={1440}
          height={810}
          className=" object-center absolute top-[-100px] min-[770px]:top-[-200px] min-[1100px]:top-[-350px] min-[1880px]:top-[-500px] mix-blend-lighten right-0 w-full"
          alt="detailing"
        />
        <Image
          src={'/services/detailing3.png'}
          width={1440}
          height={810}
          className=" object-center absolute top-[-100px] min-[770px]:top-[-200px] min-[1100px]:top-[-350px] min-[1880px]:top-[-500px] right-0 w-full "
          alt="detailing"
        />
      </div>

      <div className="container relative ">
        <AnimatedGrid className="grid lg:grid-cols-3 gap-[20px]">
          {services.map(service => (
            <DetailingCard key={service.id} {...service} />
          ))}
        </AnimatedGrid>
      </div>
      <div className="container">
        <p className="font-semibold text-[32px] lg:text-[60px] lg:leading-[72px] text-white mt-[20px] md:mt-[40px]">
          Our employees will go over the vehicle with the owner to identify any
          interior stains or exterior scratches that require further attention
          beyond detailing.
        </p>
      </div>
    </section>
  );
};

export default DetailingSection;
