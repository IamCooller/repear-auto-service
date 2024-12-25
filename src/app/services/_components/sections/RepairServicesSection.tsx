import SubTitle from '@/components/ui/SubTitle';
import React from 'react';
import Image from 'next/image';
import { FadeInComponent } from '@/components/Animations';
const RepairServicesSection = () => {
  return (
    <section className="pt-[60px]">
      <FadeInComponent className="container">
        <SubTitle text="Expert Services for Every Vehicle Need" />
        <div className="text-red font-black text-[42px] md:text-[120px] min-[1400px]:text-[168px] leading-none">
          Repair services
        </div>
        <Image
          src="/services/repair-services.png"
          width={1618}
          height={1266}
          quality={100}
          className="w-100% h-auto object-cover"
          alt="repair-services"
        />
      </FadeInComponent>
    </section>
  );
};

export default RepairServicesSection;
