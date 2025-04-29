import HeroSection from '@/components/sections/HeroSection';

import React from 'react';
import ServiceSection from './_components/sections/ServiceSection';
import RepairServicesSection from './_components/sections/RepairServicesSection';

import DetailingSection from './_components/sections/DetailingSection';
import ContactSection from '@/components/sections/ContactSection';

const Page = () => {
  return (
    <>
      <HeroSection
        title="Unmatched Car Service Excellence for Over 25 Years"
        buttonText="Contact Us"
        buttonLink="#contact"
        backgroundImage="/services/main.png"
      />
      <RepairServicesSection />
      <ServiceSection />
      <DetailingSection />
      <ContactSection />
    </>
  );
};

export default Page;
