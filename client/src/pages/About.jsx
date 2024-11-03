
import React from 'react';
import { useTheme } from '../components/ThemeContext';
import MyPic from '../../images/mypic.png';

function About() {
    const { theme } = useTheme();

    return (
        <div className={`about ${theme}  w-full flex-col md:flex-row flex justify-center items-center`}>
            <div className='flex items-center justify-center w-full md:w-1/2 h-96 bg-cover rounded-full overflow-hidden'>
                    <div className={`ring ${theme}  ring-[8px] ring-[#64ffda] ring-offset-1 ring-offset-slate-50 dark:ring-offset-white w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden`}>
                        <img className='' src={MyPic} alt="" />
                    </div>
                </div>
            <div className='w-full md:w-1/2 px-4'>
                <p className='font-bold text-4xl'>About Me</p>
                <p className='my-4 pe-6'>Hello! I'm Sushil Chaudhary, an aspiring Web Developer with a strong foundation in HTML/CSS, JavaScript, React, and Git. Despite financial challenges that led me to drop out of college, my passion for web development drives me to continually learn and innovate. My goal is to gain hands-on experience and contribute to meaningful projects with a dynamic team. I thrive on challenges, stay up-to-date with the latest tech trends, and am eager to showcase my skills and dedication through my portfolio. Let's connect at [your email] or on [LinkedIn/social media profiles].</p>
            </div>
        </div>
    );
}

export default About;
