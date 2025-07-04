'use client';

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { assets } from 'assets/assets';
import { motion } from 'motion/react';

type NavbarProps = {
  isDarkMode: boolean;
};

const Header: React.FC<NavbarProps> = ({ isDarkMode }) => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 pt-24 sm:pt-28 bg-white text-black dark:bg-darkTheme">
      <div className="w-full max-w-4xl text-center flex flex-col items-center gap-6">

        {/* Profile Image with Glow */}
        <div className="relative group w-36 sm:w-72">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="relative z-10"
          >
            <Image
              src={assets.profile_img}
              alt="Profile"
              className="rounded-3xl border-4 border-black shadow-xl transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500"
            />
          </motion.div>

          {/* Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-50 group-hover:opacity-70 transition duration-500 z-0" />
        </div>

        {/* Greeting Line */}
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-2 text-lg sm:text-2xl font-medium mt-6 font-Ovo dark:text-white"
        >
          Hi! I'm Jun Yuen
          <Image src={assets.hand_icon} alt="wave" className="w-5 sm:w-6" />
        </motion.h3>

        {/* Typing Title */}
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight min-h-[90px] font-Ovo dark:text-white"
        >
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              1200,
              'from Puchong, Malaysia',
              1200,
              'Full Stack Developer\nfrom Puchong, Malaysia',
              2000,
            ]}
            speed={50}
            style={{ whiteSpace: 'pre-line', display: 'inline-block' }}
            wrapper="span"
            repeat={Infinity}
          />
        </motion.h1>

        {/* Bio Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-sm sm:text-base max-w-md sm:max-w-2xl mt-1 leading-relaxed text-gray-700 font-Ovo dark:text-white"
        >
          I enjoy reading tech blogs, traveling, jogging, playing badminton, and video games.
          I'm passionate about exploring new technologies and building mobile & web apps.
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-5">
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href="#contact"
            className="px-6 py-2 text-sm sm:text-base rounded-lg bg-black text-white flex items-center gap-2 hover:bg-gray-100 dark:border border-white dark:text-white transition"
          >
            Contact Me
            <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
          </motion.a>
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            href="/Chong_Jun_Yuen_Resume.pdf"
            download
            className="px-6 py-2 text-sm sm:text-base rounded-lg border border-gray-400 text-black flex items-center gap-2 hover:bg-gray-100 dark:border dark:text-white transition"
          >
            My Resume
            <Image src={assets.download_icon} alt="download" className="w-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Header;
