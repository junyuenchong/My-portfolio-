import { assets } from 'assets/assets'
import Image from 'next/image'
import React from 'react'

type NavbarProps = {
    isDarkMode: boolean;
  };

const Footer: React.FC<NavbarProps> = ({ isDarkMode}) => {
    return (
        <div className='mt-5'>
            <div className='text-center'>
                <Image src={isDarkMode? assets.logodark:assets.logo} alt='' className='w-36 mx-auto mb-2 bg-transparent' />


                <div className='w-max flex items-center gap-2 mx-auto'>
                    {/* Email Text */}
                    <Image src={assets.mail_icon} alt='' className='w-6' />
                    junyuenchong1998@gmail.com
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                {/* Footer Text */}
                <p className="text-xs text-gray-500 dark:text-white">
                    © {new Date().getFullYear()} CJY Portfolio. Built with ❤️ using Next.js & Tailwind CSS.
                </p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' href="https://github.com/junyuenchong">GitHub</a></li>
                    <li><a target='_blank' href="https://linkedin.com/in/chong-jun-yuen-063313202">LinkedIn</a></li>
                </ul>
            </div>


        </div>



    )
}

export default Footer
