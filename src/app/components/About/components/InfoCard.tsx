import Image from 'next/image';
import SkillsSection from './SkillsSection';
import EducationSection from './EducationSection';
import ProjectsSection from './ProjectsSection';
import { InfoItem } from '../types/types';
import { motion } from "motion/react"

const InfoCard = ({ item }: { item: InfoItem }) => {
  return (
    <motion.li 
    whileInView={{opacity:1.05}} 
    className="p-5 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:bg-neutral-200  hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-blue-400  dark:bg-darkTheme dark:hover:bg-white/30">
      <div className="flex items-center gap-3 mb-3 ">
        <Image className=' dark:bg-white'  src={item.icon} alt={item.title} width={28} height={28} />
        <h3 className="font-semibold text-base text-gray-800  dark:text-white">{item.title}</h3>
      </div>
      {item.title === 'Skills' && <SkillsSection content={item.content as any} />}
      {item.title === 'Education' && <EducationSection content={item.content as any} />}
      {(item.title === 'Projects' || item.title === 'Projects & Tools') && (
        <ProjectsSection content={item.content as any} />
      )}
    </motion.li>
  );
};

export default InfoCard;
