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
    const infoJS = "test";
    const nameReact = "ReactJS";
    const infoReact = "test";
    const nameNode = "NodeJS";
    const infoNode = "test";
    const nameAWS = "Amazon Web Services";
    const infoAWS = "test";
    const nameCpp = "C++";
    const infoCpp = "test";
    const nameSQL = "MySQL";
    const infoSQL = "test";
    const nameSwift = "Swift";
    const infoSwift = "test";
    const nameGH = "Github";
    const infoGH = "test";
    const [openModal, setOpenModal] = useState(false);
    const [name, setName] = useState("");
    const [info, setInfo] = useState("");
    

  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-yellow-600 '>Skills</p>
              <p className='py-4'>// These are some of the technologies I've worked with</p>
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
              <button className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'  onClick={() => {setOpenModal(true); setInfo(infoReact); setName(nameReact)}}>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </button>
             
              <button className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' onClick={() => {setOpenModal(true); setInfo(infoNode); setName(nameNode)}}>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </button>
              
              <button className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' onClick={() => {setOpenModal(true); setInfo(infoAWS); setName(nameAWS)}}>
                  <img className='w-20 mx-auto' src={AWS} alt="HTML icon" />
                  <p className='my-4'>AWS</p>
              </button>
              <button className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' onClick={() => {setOpenModal(true); setInfo(infoCpp); setName(nameCpp)}}>
                  <img className='w-20 mx-auto' src={Cpp} alt="HTML icon" />
                  <p className='my-4'>C++</p>
              </button>
              <button className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' onClick={() => {setOpenModal(true); setInfo(infoSQL); setName(nameSQL)}}>
                  <img className='w-20 mx-auto' src={SQL} alt="HTML icon" />
                  <p className='my-4'> MYSQL</p>
              </button>
              <button className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' onClick={() => {setOpenModal(true); setInfo(infoSwift); setName(nameSwift)}}>
                  <img className='w-20 mx-auto' src={Swift} alt="HTML icon" />
                  <p className='my-4'>Swift</p>
              </button>
              <button className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' onClick={() => {setOpenModal(true); setInfo(infoGH); setName(nameGH)}}>
              <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />  
              
                  <p className='my-4'>Github</p>
              </button>
             
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