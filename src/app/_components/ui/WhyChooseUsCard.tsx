import React from 'react';
const WhyChooseUsCard = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div
      className={` h-[192px] p-[20px] flex flex-col border border-black justify-between group hover:bg-black hover:text-white transition-colors duration-300 ease-in-out`}
    >
      <div className="flex items-center gap-[20px]">
        <div
          className={`w-[48px] aspect-square flex items-center justify-center bg-red group-hover:bg-white group-hover:text-red transition-colors duration-300 ease-in-out text-white`}
        >
          {icon}
        </div>
        <h5 className="font-semibold text-[24px]">{title}</h5>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default WhyChooseUsCard;
