import type { Metadata } from 'next';
import '@/styles/globals.scss';

import { epilogue, roboto } from '@/styles/fonts/fonts';
import Header from '@/components/sections/Header/Header';
import { Toaster } from '@/components/ui/toaster';
import Footer from '@/components/sections/Footer/Footer';
import { _siteUrl } from '@/lib/constants';
import SnowClient from './SnowClient';

const title = 'Auto Body Shop in Dedham MA | John`s Auto Body Inc.';
const description =
  'John`s Auto Body Inc. has been providing the highest quality Auto Repairs since 1995 in Dedham MA. Auto Body Shop fully licenced';

export const metadata: Metadata = {
  metadataBase: new URL(
    _siteUrl.startsWith('http') ? _siteUrl : `https://${_siteUrl}`
  ),
  title: {
    template: `%s | ${title}`,
    default: title
  },
  description: description,
  verification: { google: 'YNqtiY9yi9CSFwr9IITa6JB6nl9-8Y_CxvjmN4qfDNY' },
  openGraph: {
    title: title,
    description: description,

    siteName: title,
    locale: 'en_CA',
    type: 'website',
    images: [{ url: `/favicon.svg`, width: 168, height: 48 }]
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
        <SnowClient />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
