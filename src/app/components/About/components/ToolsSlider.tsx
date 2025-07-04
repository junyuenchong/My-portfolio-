'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { toolsData } from 'assets/assets';
import { motion } from 'motion/react';

const ToolsSlider = () => {
  const sliderRef = useRef<HTMLUListElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Extend tools for seamless loop (triple copy)
  const extendedTools = [...toolsData, ...toolsData, ...toolsData];

  // === Auto Scroll with Seamless Looping (Improved with requestAnimationFrame) ===
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrameId: number;
    let lastTimestamp: number | null = null;

    // Start in the middle
    slider.scrollLeft = slider.scrollWidth / 3;

    const scrollSpeed = 0.4; // pixels per ms

    const autoScroll = (timestamp: number) => {
      if (!slider) return;

      if (isPaused) {
        lastTimestamp = null;
        animationFrameId = requestAnimationFrame(autoScroll);
        return;
      }

      if (lastTimestamp !== null) {
        const delta = timestamp - lastTimestamp;
        slider.scrollLeft += scrollSpeed * delta;
      }

      // Loop back to middle if near ends
      if (
        slider.scrollLeft <= slider.scrollWidth / 3 - slider.clientWidth ||
        slider.scrollLeft >= (slider.scrollWidth / 3) * 2
      ) {
        slider.scrollLeft = slider.scrollWidth / 3;
      }

      lastTimestamp = timestamp;
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // === Mouse Drag Scroll ===
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
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollStart - walk;
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
    <div className="w-full overflow-hidden">
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
              alt={`Tool ${i}`}
              className="w-6 sm:w-7 h-auto pointer-events-none"
            />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default ToolsSlider;
