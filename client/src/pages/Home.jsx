
import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { IoMdDownload } from 'react-icons/io';
import { useTheme } from '../components/ThemeContext';
import ProgressBar from '../components/ProgressBar';
import CircleProgress from '../components/CircleProgress';
import MyPic from '../../images/mypic.png';

function Home() {
    const { theme } = useTheme();

    return (
        <div className={`home ${theme}`}>
            <div className='flex flex-col-reverse justify-center items-center md:flex-row pt-4'>
                <div className='w-full md:w-1/2 ps-1 md:ps-12 flex flex-col justify-center gap-3'>
                    <span className='text-4xl'>👋</span>
                    <div className='px-4 md:ps-8 flex flex-col gap-8'>
                        <p className='font-semibold'>
                            <span className='text-4xl'>Hi, I'm</span>
                            <span className='text-4xl text-[#64ffda]'> Sushil Chaudhary </span>
                        </p>
                        <p className='text-xl'>a passionate Web Developer with a love for Front-end Development. Here, you'll find a showcase of my projects, skills, and the creative journey I've embarked on. Let's connect and create something amazing together!</p>
                    </div>
                </div>
                <div className='flex items-center justify-center w-full md:w-1/2 h-96 bg-cover rounded-full overflow-hidden'>
                    <div className={`ring ${theme} ring-[8px] ring-[#64ffda] ring-offset-1 ring-offset-slate-50 dark:ring-offset-white w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden`}>
                        <img className='' src={MyPic} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex items-center p-4 ps-[30%] md:ps-[20%]'>
                <button className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        <a href="https://drive.google.com/file/d/1Ro1-77jJhQJEKBY0wEV1eojfEwhvD_pE/view?usp=drive_link" className='flex items-center gap-2'><IoMdDownload /> Downloads CV</a>
                    </span>
                </button>
            </div>
            <p className='p-4 text-4xl font-semibold'>MY SKILL</p>
            <div className='flex flex-col md:flex-row'>
                <div className="p-4 w-full md:w-1/2 flex flex-col gap-4">
                    <p className='text-3xl font-semibold'>Technical Skill</p>
                    <div className="flex md:flex-row justify-around flex-wrap">
                        <CircleProgress percent={85} colorFrom="#E53935" colorTo="#E53935">
                            <a href="#" className="text-red-600 text-3xl hover:text-red-500">
                                <i className='text-5xl'><FaHtml5 /><p className='text-sm'>85%</p></i>
                            </a>
                        </CircleProgress>
                        <CircleProgress percent={75} colorFrom="#1E88E5" colorTo="#1E88E5">
                            <a href="#" className="text-blue-600 text-3xl hover:text-blue-500">
                                <i className='text-5xl'><FaCss3Alt /><p className='text-sm'>75%</p></i>
                            </a>
                        </CircleProgress>
                        <CircleProgress percent={60} colorFrom="#FFEB3B" colorTo="#FFEB3B">
                            <a href="#" className="text-yellow-500 text-3xl hover:text-yellow-400">
                                <i className='text-5xl'><IoLogoJavascript /><p className='text-sm'>60%</p></i>
                            </a>
                        </CircleProgress>
                        <CircleProgress percent={55} colorFrom="#2196F3" colorTo="#2196F3">
                            <a href="#" className="text-blue-500 text-3xl hover:text-blue-400">
                                <i className='text-5xl'><FaReact /><p className='text-sm'>55%</p></i>
                            </a>
                        </CircleProgress>
                        <CircleProgress percent={20} colorFrom="#43A047" colorTo="#43A047">
                            <a href="#" className="text-green-600 text-3xl hover:text-green-500">
                                <i className="text-6xl"><FaNodeJs /><p className='text-sm'>20%</p></i>
                            </a>
                        </CircleProgress>
                    </div>
                </div>
                <div className='p-4 w-full md:w-1/2 flex flex-col gap-4'>
                    <p className='text-3xl font-semibold'>Professional Skill</p>
                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-col gap-2'>
                            <p>Creative</p>
                            <ProgressBar percent={75} colorFrom="#43A047" colorTo="#43A047"></ProgressBar>
                        </div>
                        <div>
                            <p>Communication</p>
                            <ProgressBar percent={90} colorFrom="#108ee9" colorTo="#87d068"></ProgressBar>
                        </div>
                        <div>
                            <p>Problem Solving</p>
                            <ProgressBar percent={70} colorFrom="#108ee9" colorTo="#87d068"></ProgressBar>
                        </div>
                        <div>
                            <p>Teamwork</p>
                            <ProgressBar percent={75} colorFrom="#108ee9" colorTo="#87d068"></ProgressBar>
                        </div>
                    </div>
                </div>
            </div>

            {/* <p className='p-4 text-4xl font-semibold'>PROJECT</p>
            <div className='flex flex-wrap justify-around'>
                <div className='flex flex-col gap-8'>
                    <div className={`card ${theme} h-auto w-72 mt-8`}>
                        <img src="/images/backend.png" alt="" />
                        <div className='flex flex-col gap-6'>
                            <p className='pt-2 text-2xl font-semibold'>Backend Developer</p>
                            <p>Our backend services ensure robust, secure, and scalable solutions to power your applications efficiently.</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    <div className={`card ${theme} h-auto w-72 mt-8`}>
                        <img src="/images/backend.png" alt="" />
                        <div className='flex flex-col gap-6'>
                            <p className='pt-2 text-2xl font-semibold'>Backend Developer</p>
                            <p>Our backend services ensure robust, secure, and scalable solutions to power your applications efficiently.</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    <div className={`card ${theme} h-auto w-72 mt-8`}>
                        <img src="/images/backend.png" alt="" />
                        <div className='flex flex-col gap-6'>
                            <p className='pt-2 text-2xl font-semibold'>Backend Developer</p>
                            <p>Our backend services ensure robust, secure, and scalable solutions to power your applications efficiently.</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Home;
