import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-600 text-gray-300'>Contact Information</p>
                
                <p className='text-2xl font-bold text-gray-300 py-4'>Name - Tudor Popescu</p>
                <p className='text-2xl font-bold text-gray-300 py-4'>Email - tudor.s.popescu@gmail.com</p>
                <p className='text-2xl font-bold text-gray-300 py-4'>Cell - (832)-792-9362</p>
                
            </div>
            
           
        </form>
    </div>
  )
}

export default Contact