import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { FadeInComponent } from '../Animations';

type HeroSectionProps = {
  title: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
};

const HeroSection = ({
  title,
  buttonText,
  buttonLink,
  backgroundImage
}: HeroSectionProps) => {
  return (
    <section className="relative" id="main">
      <Image
        src={backgroundImage}
        alt="Main Screen"
        fill
        className="object-cover pointer-events-none"
        priority
        quality={100}
      />
      <FadeInComponent delay={0.5}>
        <div className="container relative z-[1] min-h-svh flex max-md:justify-evenly flex-col pt-32">
          <h1 className="text-white font-semibold text-[50px] md:text-[80px] md:leading-[96px] lg:text-8xl leading-[60px] max-w-[1050px] lg:leading-[129px]">
            {title}
          </h1>

          <Button href={buttonLink} variant={'contact'} className="mt-[20px]">
            {buttonText}
            <div className="bg-red w-[36px] h-[36px] aspect-square rounded-tl-[8px] rounded-br-[8px] flex justify-center items-center group-hover:bg-white transition-colors duration-300 ease-in-out text-black">
              <ArrowRight size={14} />
            </div>
          </Button>
        </div>
      </FadeInComponent>
    </section>
  );
};

export default HeroSection;
