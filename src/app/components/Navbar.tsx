'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { assets } from '../../../assets/assets.js';

type NavbarProps = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(0rem)';
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(16rem)';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Background Image */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="Background" className="w-full" />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300
        ${isScroll ? 'bg-black backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20' : 'bg-black dark:bg-lightHover'}`}
      >
        {/* Logo */}
        <a href="#top">
          <Image src={isDarkMode ? assets.logo : assets.logodark} alt="CJY Logo" className="w-16 cursor-pointer mr-14" />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
          ${isScroll ? '' : 'bg-black bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'}`}
        >
          {[
            { label: 'Home', href: '#top' },
            { label: 'About Me', href: '#about' },
            { label: 'Service', href: '#service' },
            { label: 'Contact Me', href: '#contact' },
          ].map((link, index) => (
            <li
              key={index}
              className="bg-black border-black text-white cursor-pointer px-4 py-2 rounded-md transition-all duration-300 ease-in-out 
                         hover:bg-neutral-200 hover:-translate-y-1 hover:shadow active:bg-neutral-300 active:scale-95 
                         dark:text-black border dark:border-black dark:bg-white"
            >
              <a className="font-Ovo" href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.moon_icon : assets.sun_icon} alt="Dark mode" className="w-6" />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-white text-white rounded-full ml-4 font-Ovo 
                       dark:text-black dark:border-black"
          >
            Contact
            <Image src={isDarkMode ? assets.arrow_icon : assets.arrow_icon_dark} alt="Arrow" className="w-3" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_black : assets.menu_white} alt="Menu" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-6 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-white transition-transform duration-500 dark:bg-black"
          style={{ transform: 'translateX(16rem)' }}
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="Close menu" className="w-5 cursor-pointer" />
          </div>

          {[
            { label: 'Home', href: '#top' },
            { label: 'About Me', href: '#about' },
            { label: 'Service', href: '#service' },
            { label: 'My Work', href: '#work' },
            { label: 'Contact Me', href: '#contact' },
          ].map((link, index) => (
            <li key={index}>
              <a href={link.href} onClick={closeMenu}>{link.label}</a>
              <hr className="my-2 border-gray-300 dark:border-gray-700" />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
