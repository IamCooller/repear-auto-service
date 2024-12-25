import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-red text-white hover:bg-white hover:text-red border-2 border-transparent hover:border-red active:scale-95 text-center font-roboto font-bold px-[24px] py-[29px]  transition-all duration-300 ease-in-out',
        outline:
          'border border-neutral-300 bg-transparent text-neutral-900 hover:bg-neutral-100 hover:text-black',
        black:
          'bg-black text-white text-base font-roboto font-bold px-[19px] py-[12px] rounded-[16px] hover:bg-white hover:text-red transition-colors duration-300 ease-in-out',
        white:
          'bg-white text-red font-bold font-roboto px-[24px] py-[12px] border border-transparent rounded-[16px] hover:bg-red hover:border-red hover:text-white text-[32px] transition-colors',
        ghost: 'bg-transparent text-neutral-900 hover:bg-neutral-100',
        link: 'text-neutral-900 underline-offset-4 hover:underline',
        contact:
          'relative bg-white flex items-center justify-between h-[80px] w-full sm:w-[335px] px-[24px] rounded-tl-[16px] rounded-br-[16px] hover:bg-red hover:text-white group transition-colors duration-300 ease-in-out'
      },
      size: {
        default: ''
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string; // Для работы с Link
  target?: string; // Для внешних ссылок
  linkProps?: Omit<React.ComponentProps<typeof Link>, 'href' | 'children'>; // Остальные props для Link
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      href,
      target,
      linkProps,
      ...props
    },
    ref
  ) => {
    const Comp: React.ElementType = asChild ? Slot : href ? Link : 'button';
    const componentProps = href ? { href, target, ...linkProps } : {};

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...componentProps}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
