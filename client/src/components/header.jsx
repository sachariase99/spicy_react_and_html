import React from 'react'
import logo from '../images/Logo-Spicy-White.png'

const header = () => {
  return (
    <div id='start'>
      <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <img src={logo} alt="Logo" />
      </div>
    </div>
  )
}

export default header
