import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Backdrop from './Backdrop';
import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs';

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};


const Modal = ({ open, onClose, name, info }) => {
  if (!open) return null;
  return (

   
    <Backdrop onClick={onClose}>
      
      <motion.div
        onClick={(e) => {
          e.stopPropagation();
        }}
        key="modal"
        className='modalContainer'
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"

      >
        
        <div className='modalRight'>
          <button className='closeBtn' onClick={onClose}>
            X
          </button>
          <div className='content'>
            <p>{name}</p>
            <h1>{info}</h1>
            
          </div>
          <div className='btnContainer'>
            
          </div>
        </div>
      </motion.div>
      
    </Backdrop>
  
    
  );
};

export default Modal;

