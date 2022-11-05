import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hello, I'm Tudor Popescu. Thanks for taking the time to check out my portfolio.</p>
            </div>
            <div>
              <p>I am a recent graduate from the University of Houston. I graduated Magna Cum Laude with a Bachelor's degree in Computer Science August of 2022. Throughout my studies I focused on Web and iOS development. Please check out some of my projects to get a better understanding of some of my skills.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;

