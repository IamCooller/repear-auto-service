import { Button } from '@/components/ui/button';
import React from 'react';

const DetailingCard = ({
  title,
  price,
  features,
  buttonColor
}: {
  title: string;
  price: string;
  features: string[];
  buttonColor: string;
}) => {
  return (
    <div className="flex flex-col p-[20px] bg-white h-full">
      <div className="font-roboto text-[24px] uppercase mb-[20px]">{title}</div>
      <div className="font-extrabold text-[42px] mb-[28px]">{price}</div>
      <ul className="space-y-[10px] [&>li]:border-b [&>li]:border-black [&>li]:pb-[10px] [&>li]:last:border-0 [&>li]:last:pb-0 mb-[50px]">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <Button className={`mt-auto w-full ${buttonColor}`} href="#contact">
        Contact Us
      </Button>
    </div>
  );
};

export default DetailingCard;
