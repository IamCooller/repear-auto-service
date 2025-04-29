import SubTitle from '@/components/ui/SubTitle';
import Title from '@/components/ui/Title';
import Link from 'next/link';
import Image from 'next/image';
import ReviewCard from '../ui/ReviewCard';
import AnimatedGrid from '@/components/Animations/AnimatedGrid';
import { _addressLink } from '@/lib/constants';

const ReviewsSection = () => {
  const reviews = [
    {
      text: '“...They did everything for me - arranged a rental from close by Enterprize, accomodated me with my tough schedule and fixed my expensive Toyota plugin Hybrid to the point of the brand new car!”',
      author: 'Luba Lazarev',
      rating: 5
    },
    {
      text: `“...For me, dealing with trustworthy people and having a great experience is as important as the quality of their work. You'll get both at John's Auto body...”`,
      author: 'Frank Forte',
      rating: 5
    },
    {
      text: `“I cannot say enough good things about this business. I went to them after being hit and run and I can tell you now that they went above and beyond for me!”`,
      author: 'Ryan Abbaspour',
      rating: 5
    },
    {
      text: `“...Shortly after bringing my car in, I was amazed at the work they’ve done! My car looks brand new. Amazing job guys 10/10”`,
      author: 'Charisma Thornton',
      rating: 5
    },
    {
      text: `“...My car looks brand new , not only they clean my car inside and out, they also fix the little scratches that was in the car previously. I’m so happy with their work excellent customer service 10 out of 10.”`,
      author: 'Lovely Payen',
      rating: 5
    },
    {
      text: `“...Overall great experience and great people. I will be back for all of my auto body needs. Thank you so much!!!”`,
      author: 'Anna Gyulakian',
      rating: 5
    }
  ];
  return (
    <section className="pt-[60px] md:pt-[160px] pb-[40px]" id="reviews">
      <div className="container">
        <SubTitle text="Expert Services for Every Vehicle Need" />
        <Title>
          Hear directly from our customers about our excellent service
        </Title>

        <AnimatedGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} highlight={index === 0} />
          ))}
        </AnimatedGrid>
        <Link
          href={_addressLink}
          target="_blank"
          className="flex items-center font-roboto gap-[10px] py-[7px] px-[10px] mt-[60px] bg-red text-white hover:bg-red/80 transition-colors duration-300 ease-in-out w-fit ml-auto"
        >
          Explore More on{' '}
          <Image
            src={'/icons/google-reviews.svg'}
            alt="Google"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </section>
  );
};

export default ReviewsSection;
