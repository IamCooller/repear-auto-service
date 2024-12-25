import React from 'react';
import Image from 'next/image';
const WhyChooseUsCard = ({
  bgColor,
  iconBg,
  textColor,
  icon,
  title,
  description
}: {
  bgColor: string;
  iconBg: string;
  textColor: string;
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div
      className={`${bgColor} h-[192px] p-[20px] flex flex-col border border-black justify-between ${textColor}`}
    >
      <div className="flex items-center gap-[20px]">
        <div
          className={`w-[48px] aspect-square flex items-center justify-center ${iconBg}`}
        >
          <Image src={icon} alt={title} width={24} height={24} />
        </div>
        <h5 className="font-semibold text-[24px]">{title}</h5>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default WhyChooseUsCard;
