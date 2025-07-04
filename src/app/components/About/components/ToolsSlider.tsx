'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { toolsData } from 'assets/assets';
import { motion } from 'motion/react';

const ToolsSlider = () => {
  const sliderRef = useRef<HTMLUListElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate tools for seamless looping
  const extendedTools = [...toolsData, ...toolsData];

  // === Auto Scroll (Infinite Loop) ===
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollAmount = 100;
    let timeoutId: number;

    const scroll = () => {
      if (isPaused) {
        timeoutId = window.setTimeout(scroll, 2000);
        return;
      }

      const maxScroll = slider.scrollWidth / 2;
      if (slider.scrollLeft >= maxScroll) {
        slider.scrollLeft = 0; // Seamless reset
      } else {
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }

      timeoutId = window.setTimeout(scroll, 2000);
    };

    timeoutId = window.setTimeout(scroll, 2000);
    return () => clearTimeout(timeoutId);
  }, [isPaused]);

  // === Mouse Drag Scroll + Seamless Loop (both directions) ===
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startX = e.pageX - slider.offsetLeft;
      scrollStart = slider.scrollLeft;
      setIsPaused(true);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();

      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 0.5; // Smoother & slower drag
      slider.scrollLeft = scrollStart - walk;

      const halfScroll = slider.scrollWidth / 2;

      // Seamless loop to right
      if (slider.scrollLeft >= halfScroll - 5) {
        slider.scrollLeft -= halfScroll;
        scrollStart = slider.scrollLeft;
        startX = e.pageX - slider.offsetLeft;
      }

      // Seamless loop to left
      if (slider.scrollLeft <= 5) {
        slider.scrollLeft += halfScroll;
        scrollStart = slider.scrollLeft;
        startX = e.pageX - slider.offsetLeft;
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
      setIsPaused(false);
    };

    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mousemove', handleMouseMove);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mouseleave', handleMouseUp);

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mousemove', handleMouseMove);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mouseleave', handleMouseUp);
    };
  }, []);

  // === Pause Auto Scroll on Hover ===
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const pause = () => setIsPaused(true);
    const resume = () => setIsPaused(false);

    slider.addEventListener('mouseenter', pause);
    slider.addEventListener('mouseleave', resume);

    return () => {
      slider.removeEventListener('mouseenter', pause);
      slider.removeEventListener('mouseleave', resume);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden touch-none">
      <motion.ul
        ref={sliderRef}
        className="flex gap-4 whitespace-nowrap scroll-smooth overflow-x-auto cursor-grab active:cursor-grabbing select-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
      >
        {extendedTools.map((tool, i) => (
          <motion.li
            whileHover={{ scale: 1.1 }}
            key={i}
            className="flex items-center justify-center min-w-[3.5rem] sm:min-w-[3.75rem] aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 transition duration-500 bg-white shrink-0"
          >
            <Image
              src={tool}
              alt="Tool"
              className="w-6 sm:w-7 h-auto pointer-events-none"
            />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default ToolsSlider;
