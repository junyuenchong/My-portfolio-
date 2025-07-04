import React from 'react';
import { EducationContent } from '../types/types';


const EducationSection = ({ content }: { content: EducationContent }) => (
  <div className="text-sm text-gray-700 space-y-3 ">
    {content.map((edu, i) => (
      <div key={i}>
        <p className="font-medium  dark:text-white">{edu.degree}</p>
        <p className=' dark:text-white'>{edu.school}</p>
        <p className="text-xs text-gray-500  dark:text-white">{edu.date} | {edu.grade}</p>
      </div>
    ))}
  </div>
);

export default EducationSection;
