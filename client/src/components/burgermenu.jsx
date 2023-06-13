import React, { useState, useEffect } from 'react';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = ''; // Restore default scrolling when menu is closed
    }
  }, [isOpen]);

  return (
    <div className='text-white flex justify-end relative sm:hidden'>
      <button className={`m-3 z-10 ${isOpen ? 'fixed top-0' : ''}`} onClick={toggleMenu}>
        <span className={`block w-7 h-1 bg-white mb-1 transform transition-all duration-500 ${isOpen ? 'rotate-45 translate-y-2 bg-white' : ''}`}></span>
        <span className={`block w-6 h-1 bg-white ml-1 transform transition-all duration-500 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-7 h-1 bg-white mt-1 transform transition-all duration-500 ${isOpen ? '-rotate-45 -translate-y-2 bg-white' : ''}`}></span>
      </button>
      {isOpen && (
        <div className="fixed top-0 bg-[#1a1a1a] h-[100vh] w-[100vw]">
          <ul className='flex flex-col justify-center items-center h-[100vh]'>
            <li className='text-white uppercase border-b-2 border-white font-bold text-[2rem]'>Menu 1</li>
            <li className='text-white uppercase font-bold text-[2rem]'>Menu 2</li>
            <li className='text-white uppercase border-t-2 border-white font-bold text-[2rem]'>Menu 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;