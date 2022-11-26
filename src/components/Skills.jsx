import React from 'react';
import Modal from "./Modal";
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import AWS from '../assets/aws.png';
import Cpp from '../assets/cpp.png';
import Swift from '../assets/swift.webp';
import SQL from '../assets/sql.png';
import Java from '../assets/java.png';
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Skills = () => {

    const nameJS = "JavaScript";
    const infoJS = "Along with HTML and CSS, I used JavaScript for every web application I've created to date. I taught myself JavaScript over a period of about 3 weeks when I was creating my first web application. The professor gave us no requirements as far as language and framework, after a bit of research our group concluded that using JS was the best course of action. For the purpose of web development and frontend work, JS is my language of choice.";
    const nameReact = "ReactJS";
    const infoReact = "ReactJS is my go to web application framework of choice. I have some experience with Vue and Angular as well but I prefer react paired with node and express. I prefer react simply because of the farmiliarity I have with it and its libraries. TailwindCSS and framer-motion are some of my favorites! They make transitions and animations a breeze and easily make a simple webpage look more appealing and professional. This page was created using react.";
    const nameNode = "NodeJS";
    const infoNode = "I prefer to use NodeJS as my serverside enviornment when designing fullstack applications. I prefer node because of its flexiblity and cross-platform capabilities. I usually pair it with Express and reactJS on the frontend.";
    const nameAWS = "Amazon Web Services";
    const infoAWS = "I have experience using AWS hosting my work using their cloud services. This portfolio page is hosted on an amazon S3 bucket, using Route 53 to secure the domain name and cloudfront for caching and maintaining a secure connection. I also hosted my Fullstack applications using AWS's EC2 ubuntu instance";
    const nameCpp = "C++";
    const infoCpp = "Throughout my coursework at UH we where taught strictly using C++. From learning simple data structures an algorithms to multi-threading and thread synchronization. C++ was the first programming language I learned and was exposed to. This has led to other new languages being very simple to learn and pick up.";
    const nameSQL = "MySQL";
    const infoSQL = "During my studies at UH we learned about databases and SQL. We where taught how to organize and create databases. Putting my knowledge into practice I used MySQL on my fullstack applications. I choose MySQL because the MySQL workbench tool, which allowed me to viualize the database.";
    const nameSwift = "Swift";
    const infoSwift = "At UH one of my electives was ubiqutous computing, Which turned out to be iOS design. We where exposed to swiftUi and xcode. We made small apps throught the course that exposed us to all the different functionalities apple made available to design their apps, everything from creating simple card matching games to diving into apple maps and geotagging. By the end of the course I was able to combine my learned knowledge and create a fully functioning iOS application.";
    const nameGH = "Github";
    const infoGH = "I was exposed to and learned how to use github well before our professors ever mentioned it in univversity. During our software design class where the professor had us create fullstack applications from scratch, he highly recommended we use some form of source control. Up until this point I have used github, but not in a group enviornment. We used github to create a seperate branch for each team member and would merge our code once a week at least, more often if we where sprinting.";
    const [openModal, setOpenModal] = useState(false);
    const [name, setName] = useState("");
    const [info, setInfo] = useState("");
    

  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-yellow-600 '>Skills</p>
              <p className='py-4'>These are some of the technologies I've worked with, click for more info.</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
             
            <motion.button 
                className='shadow-md shadow-[#040c16]' 
                whileHover={{scale: 1.1}} 
                whileTap={{scale: 0.9}} 
                onClick={() => {setOpenModal(true); setInfo(infoJS); setName(nameJS)}}>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
            </motion.button>

            <motion.button 
                className='shadow-md shadow-[#040c16]'
                whileHover={{scale: 1.1}} 
                whileTap={{scale: 0.9}}  
                onClick={() => {setOpenModal(true); setInfo(infoReact); setName(nameReact)}}>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
            </motion.button>
             
            <motion.button 
                className='shadow-md shadow-[#040c16]' 
                whileHover={{scale: 1.1}} 
                whileTap={{scale: 0.9}} 
                onClick={() => {setOpenModal(true); setInfo(infoNode); setName(nameNode)}}>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
            </motion.button>
              
            <motion.button 
                className='shadow-md shadow-[#040c16]' 
                whileHover={{scale: 1.1}} 
                whileTap={{scale: 0.9}} 
                onClick={() => {setOpenModal(true); setInfo(infoAWS); setName(nameAWS)}}>
                  <img className='w-20 mx-auto' src={AWS} alt="HTML icon" />
                  <p className='my-4'>AWS</p>
            </motion.button>

            <motion.button 
                className='shadow-md shadow-[#040c16]' 
                whileHover={{scale: 1.1}} 
                whileTap={{scale: 0.9}} 
                onClick={() => {setOpenModal(true); setInfo(infoCpp); setName(nameCpp)}}>
                  <img className='w-20 mx-auto' src={Cpp} alt="HTML icon" />
                  <p className='my-4'>C++</p>
            </motion.button>

            <motion.button 
                className='shadow-md shadow-[#040c16]' 
                whileHover={{scale: 1.1}} 
                whileTap={{scale: 0.9}} 
                onClick={() => {setOpenModal(true); setInfo(infoSQL); setName(nameSQL)}}>
                  <img className='w-20 mx-auto' src={SQL} alt="HTML icon" />
                  <p className='my-4'> MYSQL</p>
            </motion.button>

            <motion.button 
                className='shadow-md shadow-[#040c16]'
                whileHover={{scale: 1.1}} 
                whileTap={{scale: 0.9}}  
                onClick={() => {setOpenModal(true); setInfo(infoSwift); setName(nameSwift)}}>
                  <img className='w-20 mx-auto' src={Swift} alt="HTML icon" />
                  <p className='my-4'>Swift</p>
            </motion.button>

            <motion.button 
                className='shadow-md shadow-[#040c16]' 
                whileHover={{scale: 1.1}} 
                whileTap={{scale: 0.9}} 
                onClick={() => {setOpenModal(true); setInfo(infoGH); setName(nameGH)}}>
              <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />  
              
                  <p className='my-4'>Github</p>
            </motion.button>
             
             <AnimatePresence>
                {openModal&&<Modal 
                open={openModal} 
                onClose={() => setOpenModal(false)} 
                info={info}
                name={name}
                />}
            </AnimatePresence> 
     
          </div>
      </div>
    </div>
  );
};

export default Skills;