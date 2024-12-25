import type { Metadata } from 'next';
import '@/styles/globals.scss';

import { epilogue, roboto } from '@/styles/fonts/fonts';
import Header from '@/components/sections/Header/Header';
import { Toaster } from '@/components/ui/toaster';
import Footer from '@/components/sections/Footer/Footer';

const title = '';
const description = '';

export const metadata: Metadata = {
  title: {
    template: `%s | ${title}`,
    default: title
  },
  description: description,
  openGraph: {
    title: title,
    description: description,

    siteName: title,
    locale: 'en_CA',
    type: 'website',
    images: [{ url: `/favicon.svg` }]
  },
  icons: {
    shortcut: [{ url: `/favicon.svg` }]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${epilogue.className} ${roboto.variable} antialiased relative`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
