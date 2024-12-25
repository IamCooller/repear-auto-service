import AnimatedCounter from '@/components/Animations/AnimatedCounter';
import React from 'react';

type FactCardProps = {
  title: string;
  value: string;
  bgColor: string;
  border?: string;
  textColor: string;
};

const FactCard: React.FC<FactCardProps> = ({
  title,
  value,
  bgColor,
  border,
  textColor
}) => {
  // Разделяем числовую часть и текст
  const numberMatch = value.match(/\d+([,.]\d+)*(\+)?/); // Ищет числа с запятыми и плюсом
  const numberPart = numberMatch ? numberMatch[0] : null;
  const textPart = value.replace(numberPart || '', ''); // Убирает число из строки, оставляя текст

  return (
    <div
      className={`${bgColor} ${
        border || ''
      } ${textColor} w-full p-[20px] flex flex-col justify-between h-[270px]`}
    >
      <h5 className="font-semibold text-[32px]">{title}</h5>
      <h2 className="font-semibold text-[80px] leading-none min-[1340px]:text-8xl">
        {numberPart ? (
          <>
            <AnimatedCounter value={numberPart} className="inline-block" />
            {textPart}
          </>
        ) : (
          value
        )}
      </h2>
    </div>
  );
};

export default FactCard;
