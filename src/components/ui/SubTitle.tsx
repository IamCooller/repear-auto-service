import React from 'react';

interface SubTitleProps {
  text: string;
  iconColor?: string;
  className?: string;
}

const SubTitle = ({
  text,
  iconColor = 'bg-red',
  className = ''
}: SubTitleProps) => {
  return (
    <div
      className={`font-roboto md:text-[32px] flex items-center gap-[8px] mb-[20px] md:mb-[24px] ${className}`}
    >
      <div
        className={`rounded-full ${iconColor} w-[12px] h-[12px] shrink-0`}
      ></div>
      {text}
    </div>
  );
};

export default SubTitle;
