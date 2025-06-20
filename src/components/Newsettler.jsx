import React from 'react'
import Button from './common/Button'

function Newsettler() {
    return (
        <div className='bg-[linear-gradient(to_bottom,_#FFFFFF_50%,_#033B63_50%)]'>
            <div className='max-w-[1140px] mx-auto px-3 bg-[url(src/assets/png/floating.png)] bg-center bg-cover bg-no-repeat py-[54px] flex flex-col items-center max-[1165px]:mx-3'>
                <p className='mb-4 font-normal text-5xl text-[#00171F] text-center max-md:text-[42px] max-sm:text-[40px] '>
                    Join Our <span className='font-bold'>Newsletter</span>
                </p>

                <p className='font-normal text-base leading-[1.5] text-[#182E36] max-w-[620px] text-center mb-[38px] max-md:text-[15px]'>
                    Stay up to date with the latest deals, energy-saving tips, and exclusive offers! Sign up for our newsletter and never miss out on great savings opportunities again.
                </p>

                <div className='max-w-[476px] w-full relative'>
                    <input type="email" placeholder='Enter your email' className='py-5 pl-[22px] pr-[130px] bg-white rounded-tr-[100px] rounded-bl-[60px] rounded-br-[100px] w-full border border-[#CBCBCB] active:border-black ' />
                    <Button buttonText={"Submit"} buttonClass='bg-[#007EA7] py-3 px-5 text-[#FFFFFF] text-base font-bold absolute right-[9px] top-[8.5px] placeholder:text-base placeholder:font-normal' svgColor={'stroke-[#FFFFFF]'} />
                </div>
            </div>
        </div>
      )
}

export default Newsettler