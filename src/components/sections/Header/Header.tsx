import Image from 'next/image';
import Link from 'next/link';
import Menu from './Menu';
import { Button } from '@/components/ui/button';
import { _address, _addressLink, MenuLinks } from '@/lib/constants';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-10 ">
      <div className="absolute top-0 w-full h-[5px] bg-red" />
      <div className="container py-9 flex items-center">
        {/* Логотип */}
        <Link href="/" className="shrink-0 relative z-20">
          <Image src="/logo.svg" width={168} height={48} alt="logo" priority />
        </Link>

        <Menu links={MenuLinks} address={_address} addressLink={_addressLink} />

        {/* Адрес и кнопка */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href={_addressLink}
            target="_blank"
            className="text-white text-base font-roboto underline hover:text-red transition-colors duration-300 ease-in-out"
          >
            {_address}
          </Link>

          {/* Ссылка на внешний ресурс */}
          <Button variant="black" href="#contact">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
