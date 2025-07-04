'use client';

import { infoList } from 'assets/assets';
import InfoCard from './InfoCard';
import ToolsSlider from './ToolsSlider';
import { motion } from "motion/react";

type NavbarProps = {
  isDarkMode: boolean;
};

const About: React.FC<NavbarProps> = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-[8%] py-16 scroll-mt-20 bg-gray-50 dark:bg-darkTheme"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg text-gray-500 dark:text-white"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl sm:text-5xl font-bold text-gray-800 mb-12 dark:text-white"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <p className="mb-10 text-left text-sm sm:text-base leading-relaxed text-gray-700 dark:text-white">
          I have over five years of experience in designing, developing, and optimizing web and mobile applications,
          gained through academic coursework, projects, and self-directed learning. I'm passionate about clean code,
          intuitive UI, and solving real-world problems with modern technologies.
        </p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {infoList.map((item, i) => (
            <InfoCard key={i} item={item} />
          ))}

          {/* Tools Slider Card */}
          <motion.li
            whileHover={{ opacity: 1.05 }}
            className="p-5 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:bg-neutral-200 hover:-translate-y-1 duration-500 hover:shadow-black flex flex-col items-center justify-center dark:bg-darkTheme dark:hover:bg-white/30 dark:border-white dark:hover:shadow-blue-400"
          >
            <motion.h4
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.3, delay: 0.5 }}
              className="text-lg font-semibold text-gray-800 mb-3 dark:text-white"
            >
              Tools I Use
            </motion.h4>
            <div className="w-full border-b border-gray-200 mb-4" />
            <ToolsSlider />
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default About;
