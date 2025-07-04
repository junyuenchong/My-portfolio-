import { assets, serviceData } from 'assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"



const Service = ({  }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}

            id='service' className="w-full px-[8%] pt-[1px] py-10 scroll-mt-20 bg-gray-50 dark:bg-darkTheme ">
            {/* Section Headings */}
            <motion.h4 
             initial={{y:-20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.3,duration:0.5}}
            className="text-center mb-2 text-lg text-gray-500 dark:text-white">What I Offer</motion.h4>
            <motion.h2
            initial={{y:-20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.5,duration:0.5}}
            className="text-center text-4xl sm:text-5xl font-bold text-gray-800 mb-12 dark:text-white">My Services</motion.h2>

            {/* Intro Paragraph */}
            <motion.p 
            initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.7,duration:0.5}}
            className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-black dark:text-white">
                As a fresh graduate from Malaysia with a strong foundation in software development, I specialize in
                building modern web and mobile applications. Through university coursework, personal projects, and
                continuous self-learning, I have developed proficiency in technologies such as HTML, CSS, JavaScript,
                TypeScript, Next.js, Node.js, Dart, PHP, Python, Flutter, and React Native — along with other tools
                and frameworks commonly used in full-stack development. I am eager to contribute to innovative teams
                by delivering clean code, adaptable solutions, and a strong willingness to learn and grow within the company.
            </motion.p>

            {/* Services Grid */}
            <motion.div 
             initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.9,duration:0.6}}
            className='grid grid-cols-auto gap-6 my-10'>
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <motion.div 
                    whileHover={{scale:1.05}}
                    key={index}
                        className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black hover:shadow-lg cursor-pointer hover:bg-gray-200 hover:-translate-y-1 duration-500  dark:hover:shadow-blue-400 dark:hover:bg-white/30 '>
                        <Image src={icon} alt='' className='w-10' />
                        <h3 className='text-lg my-4 text-gray-700 dark:text-white'>
                            <p className='text-sm text-gray-600 leading-5 dark:text-white'>
                                {description}
                            </p>
                            <a href={link} className='flex items-center gap-2  text-sm mt-5'>
                                Read More<Image src={assets.right_arrow} className='w-4' alt='' />
                            </a>
                        </h3>

                    </motion.div>
                ))}
            </motion.div>

        </motion.div>
    )
}

export default Service
