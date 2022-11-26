import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Resume from "../assets/Resume-Tudor-Popescu.pdf"
import { BsDownload } from 'react-icons/bs';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-yellow-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Tudor Popescu
        </h1>
        
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a software developer specializing in building and designing full-stack web applications and mobile applications.
        </p>
        <div className="">
        <Link to='work' smooth={true} duration={500}>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600'>
            View Projects
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>

          


          </Link>
          <a href={Resume} download>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#565f69]' >
            Download Resume
            <span className='duration-300'>
              <BsDownload className='ml-3 ' />
            </span>
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;