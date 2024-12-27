import {
  _address,
  _addressLink,
  _instagram,
  _phone,
  _postalCode,
  MenuLinks
} from '@/lib/constants';
import { formatPhoneNumber } from '@/lib/helpers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black pt-[40px] md:pt-[80px] pb-[40px] text-white">
      <div className="container">
        <div className="flex pb-[20px] gap-[20px] border-b border-white justify-between flex-wrap">
          <Link href="/" className=" shrink-0">
            <Image
              src="/logo-without-background.svg"
              alt="logo"
              width={168}
              height={48}
            />
          </Link>
          <div className="gap-[20px] flex flex-col md:text-end md:ml-auto">
            <Link
              href={_addressLink}
              target="_blank"
              className=" font-semibold text-[32px] leading-[38px] hover:text-red transition-colors duration-300 ease-in-out"
            >
              {_address}, {_postalCode}
            </Link>
            <Link
              href={'tel:' + formatPhoneNumber(_phone)}
              className=" font-semibold text-[32px] leading-[38px] hover:text-red transition-colors duration-300 ease-in-out"
            >
              {_phone}
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-start py-[40px] gap-[20px] font-roboto flex-wrap">
          <ul className="space-y-[20px]">
            <li>Navigation</li>
            {MenuLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className=" hover:text-red transition-colors duration-300 ease-in-out"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-[20px] leading-none">
            <li>Working hours</li>
            <li>
              Monday — Friday <br />
              8am — 6pm
            </li>
            <li>
              Saturday <br />
              9am — 2pm
            </li>
            <li>
              Sunday <br />
              <span className="text-red">Closed</span>
            </li>
          </ul>
          <ul className="space-y-[20px]">
            <li>Follow us</li>
            {/*  <li>
              <Link
                href={_facebook}
                target="_blank"
                className="hover:text-red transition-colors duration-300 ease-in-out"
              >
                Facebook
              </Link>
            </li> */}
            <li>
              <Link
                href={_instagram}
                target="_blank"
                className="hover:text-red transition-colors duration-300 ease-in-out"
              >
                Instagram
              </Link>
            </li>
          </ul>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2953.6294823734715!2d-71.1490055!3d42.2437281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37fb20b440001%3A0x730da0e8b68208d6!2s20%20Cliff%20Way%2C%20Dedham%2C%20MA%2002026%2C%20USA!5e0!3m2!1sen!2sca!4v1735106995884!5m2!1sen!2sca"
            width="670"
            height="170"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex items-center justify-between font-roboto flex-wrap gap-[32px]">
          <p>® 2025, John Auto Body Collision</p>
          <div className="flex items-center gap-[20px] w-full max-w-[360px] justify-between">
            <p>
              Site by{' '}
              <Link
                href="https://offthegridlab.com/"
                target="_blank"
                className="underline"
              >
                Offthegrid
              </Link>
            </p>
            <Link href="#main">Back to top</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
