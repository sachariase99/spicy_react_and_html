import React, { useState } from 'react';
import Burgermenu from './burgermenu'
import MyForm from './form'

const Placeholder = () => {
  // Tilstanden for at afgøre om modalen er åben eller lukket
  const [isOpen, setIsOpen] = useState(false);

  // Funktion til at åbne modalen
  const openModal = () => {
    setIsOpen(true);
  };

  // Funktion til at lukke modalen
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <nav className='bg-black'>
      <ul className='hidden sm:flex text-[#dddddd] max-w-[1000px] m-auto text-[1.5rem] gap-4 p-2 cursor-pointer'>
        <li className='hover:text-[#0e5a94]'><a href="#start">Start</a></li>
        <li className='hover:text-[#0e5a94]'><a href="#spicy">Om Spicy</a></li>
        <li className='hover:text-[#0e5a94]'><a href="#galleri">Galleri</a></li>
        <li className='hover:text-[#0e5a94]'><a href="#favorit">Favorit</a></li>
        <li className='hover:text-[#0e5a94]' onClick={openModal}>Kontakt</li>
        {isOpen && (
        <div className="bg-[#1a1a1a] text-[#a1a1a1] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[400px] w-[350px] rounded-[20px]">
          <div>
            {/* Knap til at lukke modalen */}
            <span className="absolute right-[0] text-[3rem] cursor-pointer text-white" onClick={closeModal}>&times;</span>
            <div className='flex justify-center items-center h-[400px]'>
              <MyForm />
            </div>
          </div>
        </div>
      )}
      </ul>
      <Burgermenu />
    </nav>
  )
}

export default Placeholder