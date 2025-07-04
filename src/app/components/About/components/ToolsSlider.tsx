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

  // === Mouse & Touch Drag Scroll + Seamless Loop ===
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;

    const getX = (e: MouseEvent | TouchEvent) =>
      'touches' in e ? e.touches[0].pageX : (e as MouseEvent).pageX;

    const startDrag = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      startX = getX(e) - slider.offsetLeft;
      scrollStart = slider.scrollLeft;
      setIsPaused(true);
    };

    const onDrag = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = getX(e) - slider.offsetLeft;
      const walk = (x - startX) * 0.5; // Smooth & slow drag
      slider.scrollLeft = scrollStart - walk;

      const halfScroll = slider.scrollWidth / 2;

      // Seamless loop to right
      if (slider.scrollLeft >= halfScroll - 5) {
        slider.scrollLeft -= halfScroll;
        scrollStart = slider.scrollLeft;
        startX = getX(e) - slider.offsetLeft;
      }

      // Seamless loop to left
      if (slider.scrollLeft <= 5) {
        slider.scrollLeft += halfScroll;
        scrollStart = slider.scrollLeft;
        startX = getX(e) - slider.offsetLeft;
      }
    };

    const endDrag = () => {
      isDragging = false;
      setIsPaused(false);
    };

    // Mouse events
    slider.addEventListener('mousedown', startDrag);
    slider.addEventListener('mousemove', onDrag);
    slider.addEventListener('mouseup', endDrag);
    slider.addEventListener('mouseleave', endDrag);

    // Touch events
    slider.addEventListener('touchstart', startDrag);
    slider.addEventListener('touchmove', onDrag);
    slider.addEventListener('touchend', endDrag);

    return () => {
      // Cleanup
      slider.removeEventListener('mousedown', startDrag);
      slider.removeEventListener('mousemove', onDrag);
      slider.removeEventListener('mouseup', endDrag);
      slider.removeEventListener('mouseleave', endDrag);

      slider.removeEventListener('touchstart', startDrag);
      slider.removeEventListener('touchmove', onDrag);
      slider.removeEventListener('touchend', endDrag);
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
