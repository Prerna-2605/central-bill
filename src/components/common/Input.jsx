import React from 'react'
import Button from './Button'

function Input({buttonText, placeholder, className='', type, divClass, buttonClass} ) {
  return (
      <div className={`relative ${divClass}`}>
          <input type={`${type}`} placeholder={`${placeholder}`} className={`w-full bg-white py-5 rounded-br-[50px] rounded-tr-[50px] rounded-bl-[40px] ${className}`} />
          <Button buttonText={`${buttonText}`} buttonClass={`bg-[#00A8E8] py-3 px-5 text-white text-base absolute placeholder-text-base placeholder-text-[#7F8A8E] placeholder-leading-[1.1] ${buttonClass}`} svgColor={'stroke-[#FFF]'} />
      </div>
  )
}

export default Input