import { Epilogue, Roboto } from 'next/font/google';

export const epilogue = Epilogue({
  weight: ['400', '500', '600', '900', '700'],
  subsets: ['latin'],
  variable: '--font-epilogue'
});
export const roboto = Roboto({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-roboto'
});
