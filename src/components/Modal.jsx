import React from 'react';


const Modal = ({ open, onClose, name, info }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
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
      </div>
    </div>
  );
};

export default Modal;

