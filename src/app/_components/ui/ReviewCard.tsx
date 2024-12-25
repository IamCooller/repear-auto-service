import Image from 'next/image';

interface ReviewCardProps {
  text: string;
  author: string;
  rating: number;
  highlight?: boolean;
}

const ReviewCard = ({ text, author, rating, highlight }: ReviewCardProps) => {
  return (
    <div
      className={`border border-black p-[20px] flex flex-col h-full ${
        highlight ? 'bg-black text-white' : 'bg-white'
      }`}
    >
      <p className="font-semibold text-[24px] pb-[20px] leading-[28px]">
        {text}
      </p>
      <div className="flex items-center justify-between border-t border-black pt-[9px] mt-auto">
        <p className="font-roboto">{author}</p>
        <div className="flex items-center">
          {[...Array(rating)].map((_, starIndex) => (
            <Image
              key={starIndex}
              src="/icons/star.svg"
              alt="Star"
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
