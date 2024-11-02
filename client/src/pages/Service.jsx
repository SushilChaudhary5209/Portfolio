
import React from 'react'
import { useTheme } from '../components/ThemeContext';


function Service() {
  const { theme } = useTheme();

  return (
    <div className={`service ${theme} flex flex-col md:flex-row pt-4 `}>
      <div className='pb-14 w-full md:w-1/2 flex justify-center '>
        <div className='w-[90%] flex flex-col justify-center gap-10'>
          <p className='text-4xl font-semibold'>My Service</p>
          <p>As a passionate web developer, I specialize in creating custom websites that truly reflect your vision and goals. Whether you're looking for a stunning new design, a robust e-commerce platform, or improved search engine visibility, I offer tailored solutions to meet your specific needs. My approach is collaborative and detail-oriented, ensuring that every project is handled with care from concept to completion. I’m dedicated to delivering high-quality results and ongoing support, so you can focus on what you do best. Let’s work together to bring your ideas to life—reach out today to get started!</p>
        </div>
      </div>
      <div className='p-4 w-full md:w-1/2 flex flex-col flex-wrap md:flex-row items-center justify-evenly gap-8'>
        <div className='flex flex-col gap-8'>
          <div className={`card ${theme} h-auto w-72`}>
            <img src="/images/frontend.png" alt="" />
            <div className='flex flex-col gap-6 pb-4'>
              <p className='pt-2 text-2xl font-semibold'>Frontend Developer</p>
              <p>Delivering seamless and responsive web design solutions tailored to your unique business needs, ensuring an engaging user experience across all devices.</p>
            </div>
          </div>
          {/* <div className='bg-[#171717] h-auto w-72'>Service 2</div> */}
        </div>
        <div className='flex flex-col gap-8'>
          <div className={`card ${theme} h-auto w-72 mt-8`}>
            <img src="/images/backend.png" alt="" />
            <div className='flex flex-col gap-6 pb-4'>
              <p className='pt-2 text-2xl font-semibold'>Backend Developer</p>
              <p>Our backend services ensure robust, secure, and scalable solutions to power your applications efficiently.</p>
            </div>
          </div>
          {/* <div className='bg-[#171717] h-auto w-72'>Service 4</div> */}
        </div>
      </div>
    </div>
  )
}

export default Service;
