'use client';

import React, { useState } from 'react';
import { ProjectContent } from '../types/types';


const ProjectsSection = ({ content }: { content: ProjectContent }) => {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggle = (i: number) =>
    setOpenSections(prev => prev.includes(i) ? prev.filter(idx => idx !== i) : [...prev, i]);

  return (
    <div className="text-sm text-gray-700 ">
      {content.map((section, i) => (
        <div key={i} className="mb-3">
          <button
            onClick={() => toggle(i)}
            className="w-full text-left font-medium bg-gray-100 px-3 py-2 rounded hover:bg-gray-200"
          >
            {section.category}
          </button>
          {openSections.includes(i) && (
            <ul className="mt-2 ml-4 list-disc">
              {section.items.map((proj, j) => (
                <li key={j}>
                  {proj.link ? (
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {proj.name}
                    </a>
                  ) : proj.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;
