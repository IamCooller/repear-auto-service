import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import Image from 'next/image';
const carouselItems = [
  {
    id: 1,
    title: 'Collision Repair',
    description:
      'Comprehensive repair solutions to get your car back on the road.',
    image: '/services/1.png',
    alt: 'Collision Repair'
  },
  {
    id: 2,
    title: 'Body Repair',
    description:
      'Restore your vehicle’s exterior to perfection after any damage.',
    image: '/services/2.png',
    alt: 'Body Repair'
  },
  {
    id: 3,
    title: 'Repair of Plastic',
    description: 'Specialized plastic repairs for bumpers, panels, and more.',
    image: '/services/3.png',
    alt: 'Repair of Plastic'
  },
  {
    id: 4,
    title: 'Mechanical Work',
    description:
      'From engine repairs to brake services, we ensure smooth and safe driving.',
    image: '/services/4.png',
    alt: 'Mechanical Work'
  },
  {
    id: 5,
    title: 'Express Service',
    description: 'Quick, efficient services for minor repairs and maintenance.',
    image: '/services/5.png',
    alt: 'Express Service'
  },
  {
    id: 6,
    title: 'Diagnostics',
    description:
      'Identify and resolve issues with precision using state-of-the-art technology.',
    image: '/services/6.png',
    alt: 'Diagnostics'
  }
];

const ServiceCarousel = () => {
  return (
    <Carousel>
      <CarouselContent classNameMain={'overflow-visible'}>
        {carouselItems.map(item => (
          <CarouselItem key={item.id} className="basis-1/2 xl:basis-1/3  ">
            <div className="relative overflow-hidden w-full h-[227px] lg:h-[449px] lg:rounded-tl-[48px] rounded-tl-[24px] rounded-br-[24px] lg:rounded-br-[48px] mb-[24px] group">
              <Image
                src={item.image}
                fill
                className="object-cover object-center"
                alt={item.alt}
              />
              <Button
                href="#contact"
                variant={'black'}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
              >
                Contact Us
              </Button>
            </div>
            <div className="">
              <div className="font-semibold text-[24px] sm:text-[32px] lg:text-[48px] mb-[12px]">
                {item.title}
              </div>
              <p className="font-roboto lg:text-[24px]">{item.description}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="relative flex items-center justify-end gap-[10px] mt-[20px] md:mt-[60px]">
        <CarouselPrevious className="bg-red aspect-square border-none w-[36px] text-white" />
        <CarouselNext className="bg-red aspect-square border-none w-[36px] text-white" />
      </div>
    </Carousel>
  );
};

export default ServiceCarousel;
