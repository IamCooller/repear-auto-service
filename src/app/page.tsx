import BeforeAfterSection from './_components/sections/BeforeAfterSection';
import HeroSection from '../components/sections/HeroSection';
import FactSection from './_components/sections/FactSection';
import AboutSection from './_components/sections/AboutSection';
import WhyChooseUsSection from './_components/sections/WhyChooseUsSection';
import GallerySection from './_components/sections/GallerySection';
import ReviewsSection from './_components/sections/ReviewsSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection
        title="Unmatched Car Service Excellence for Over 25 Years"
        buttonText="Contact Us"
        buttonLink="#contact"
        backgroundImage="/home/main-screen.png"
      />
      <FactSection />
      <BeforeAfterSection />
      <AboutSection />
      <WhyChooseUsSection />
      <GallerySection />
      <ReviewsSection />
      <ContactSection />
    </>
  );
}
