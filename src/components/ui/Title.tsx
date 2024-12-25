import { cn } from '@/lib/utils';
import React from 'react';

const Title = ({
  className,
  children
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <h3
      className={cn(
        'font-semibold text-[32px] leading-[38px] md:text-[58px] md:leading-[72px] mb-[40px] md:mb-[60px] [&>span]:text-red',
        className
      )}
    >
      {children}
    </h3>
  );
};

export default Title;
