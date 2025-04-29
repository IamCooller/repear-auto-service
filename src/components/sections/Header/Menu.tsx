'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import MobileIcon from '@/components/ui/SVG/MobileIcon';
import { Button } from '@/components/ui/button';

const Menu = ({
  links,
  address,
  addressLink
}: {
  links: { name: string; href: string }[];
  address: string;
  addressLink: string;
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Функция для плавного скролла к секции
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  // Навигация по якорям или переход на другую страницу
  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      const sectionId = href.replace('#', '');

      if (pathname === '/') {
        handleScrollToSection(sectionId);
      } else {
        router.push(`/#${sectionId}`);
      }
    } else {
      router.push(href);
    }
    setIsMobileMenuOpen(false);
  };

  // Прокрутка к якорю после загрузки страницы
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.replace('#', '');
      handleScrollToSection(sectionId);
    }
  }, [pathname]); // Выполняется при изменении пути

  return (
    <>
      {/* Десктопная навигация */}
      <nav className="ml-14 flex-1 hidden lg:flex items-center gap-4">
        {links.map((link, index) => (
          <button
            key={index}
            onClick={() => handleNavigation(link.href)}
            className={` text-base font-roboto hover:text-red transition-colors duration-300 ease-in-out ${
              pathname === link.href ? 'text-red' : 'text-white'
            }`}
          >
            {link.name}
          </button>
        ))}
      </nav>

      {/* Мобильное меню */}
      <div className="lg:hidden ml-auto">
        <motion.button
          initial={false}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="focus:outline-none relative z-20"
        >
          <MobileIcon isOpen={isMobileMenuOpen} />
        </motion.button>

        <motion.div
          initial="closed"
          animate={isMobileMenuOpen ? 'opened' : 'closed'}
          variants={{
            opened: { y: '0%', transition: { duration: 0.5 } },
            closed: { y: '-100%', transition: { duration: 0.5 } }
          }}
          className="overflow-hidden bg-red text-white fixed top-0 right-0 bottom-0 left-0 z-10 pt-[88px]"
        >
          <div className="container flex flex-col h-full pb-[40px]">
            <motion.nav className="flex flex-col items-center py-6 gap-[48px] flex-1 justify-center">
              {links.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(link.href)}
                  className="text-[32px] font-roboto hover:font-bold transition-transform duration-300 ease-in-out"
                >
                  {link.name}
                </button>
              ))}
            </motion.nav>

            <motion.div className="mt-auto flex flex-col items-center gap-[20px]">
              <Button
                href="#contact"
                variant={'white'}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Button>
              <Link
                href={addressLink}
                target="_blank"
                className="underline font-roboto transition-colors"
              >
                {address}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Menu;
