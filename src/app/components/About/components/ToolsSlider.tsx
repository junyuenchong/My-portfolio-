'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { toolsData } from 'assets/assets';
import { motion } from 'framer-motion';

const ToolsSlider = () => {
  const sliderRef = useRef<HTMLUListElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragScrollStart = useRef(0);

  const extendedTools = [...toolsData, ...toolsData]; // Duplicate for infinite scroll

  // === Auto Scroll Per Item (Smooth & Fast Loop) ===
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const itemWidth = slider.firstElementChild?.clientWidth || 0;
    const gap = 16; // Tailwind gap-4 = 16px
    const scrollAmount = itemWidth + gap;
    const scrollInterval = 800; // Faster speed (800ms)

    let intervalId: NodeJS.Timeout;

    const autoScroll = () => {
      if (isPaused || isDragging) return;

      const maxScroll = slider.scrollWidth / 2;
      if (slider.scrollLeft + scrollAmount >= maxScroll) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };

    intervalId = setInterval(autoScroll, scrollInterval);

    return () => clearInterval(intervalId);
  }, [isPaused, isDragging]);

  // === Drag Scroll (Smooth & Infinite) ===
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const getX = (e: MouseEvent | TouchEvent) =>
      'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;

    const handleDragStart = (e: MouseEvent | TouchEvent) => {
      setIsDragging(true);
      setIsPaused(true);
      dragStartX.current = getX(e);
      dragScrollStart.current = slider.scrollLeft;
      slider.style.cursor = 'grabbing';
      slider.style.scrollBehavior = 'auto';
    };

    const handleDragMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();

      const x = getX(e);
      const walk = (x - dragStartX.current) * 0.5;
      slider.scrollLeft = dragScrollStart.current - walk;

      const halfScroll = slider.scrollWidth / 2;
      const buffer = 10;

      if (slider.scrollLeft <= buffer) {
        slider.scrollLeft += halfScroll;
        dragScrollStart.current = slider.scrollLeft;
        dragStartX.current = x;
      } else if (slider.scrollLeft >= halfScroll + buffer) {
        slider.scrollLeft -= halfScroll;
        dragScrollStart.current = slider.scrollLeft;
        dragStartX.current = x;
      }
    };

    const handleDragEnd = () => {
      setIsDragging(false);
      setIsPaused(false);
      slider.style.cursor = 'grab';
      slider.style.scrollBehavior = 'smooth';
    };

    slider.addEventListener('mousedown', handleDragStart);
    window.addEventListener('mousemove', handleDragMove);
    window.addEventListener('mouseup', handleDragEnd);

    slider.addEventListener('touchstart', handleDragStart);
    window.addEventListener('touchmove', handleDragMove, { passive: false });
    window.addEventListener('touchend', handleDragEnd);

    return () => {
      slider.removeEventListener('mousedown', handleDragStart);
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);

      slider.removeEventListener('touchstart', handleDragStart);
      window.removeEventListener('touchmove', handleDragMove);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [isDragging]);

  // === Pause on Hover ===
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
    <div className="w-full overflow-x-hidden touch-none">
      <motion.ul
        ref={sliderRef}
        className="flex gap-4 whitespace-nowrap scroll-smooth overflow-x-auto cursor-grab active:cursor-grabbing select-none scrollbar-hide"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        style={{ userSelect: 'none' }}
      >
        {extendedTools.map((tool, i) => (
          <motion.li
            whileHover={{ scale: isDragging ? 1 : 1.1 }}
            key={i}
            className={`flex items-center justify-center min-w-[3.5rem] sm:min-w-[3.75rem] aspect-square border border-gray-300 rounded-lg hover:-translate-y-1 transition duration-500 bg-white shrink-0 ${
              isDragging ? 'transition-none' : ''
            }`}
            style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
          >
            <Image
              src={tool}
              alt="Tool"
              className="w-6 sm:w-7 h-auto pointer-events-none"
              draggable="false"
            />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default ToolsSlider;
