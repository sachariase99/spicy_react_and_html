import React from 'react'
import { SlArrowUp } from 'react-icons/sl'

const Scrolltop = () => {
  return (
    <div>
      <div className='fixed bottom-0 right-0 bg-[#333333] text-4xl text-white p-4 rounded-full m-4'>
        <a href="#start"><SlArrowUp /></a>
      </div>
    </div>
  )
}

export default Scrolltop
