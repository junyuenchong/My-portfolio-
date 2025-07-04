'use client';

import React, { useState } from 'react';
import { SkillContent } from '../types/types';


const SkillsSection = ({ content }: { content: SkillContent }) => {
  const [filter, setFilter] = useState('All');

  return (
    <div>
      <label htmlFor="skillFilter" className="text-sm text-gray-600 dark:text-white">Filter by Category:</label>
      <select
        id="skillFilter"
        className="block my-2 border border-gray-300 px-2 py-1 rounded text-sm w-full  dark:bg-darkTheme "
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      >
        {content.filters.map((f) => (
          <option key={f} value={f}>{f === 'All' ? 'Show All' : f}</option>
        ))}
      </select>
      <ul className="list-disc ml-5 text-sm text-gray-700 grid grid-cols-2 gap-x-4  dark:text-white">
        {content.items
          .filter(item => filter === 'All' || item.type === filter)
          .map((item, i) => <li key={i}>{item.name}</li>)}
      </ul>
    </div>
  );
};

export default SkillsSection;
