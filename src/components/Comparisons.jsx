import React, { useState } from 'react'
import section3 from '../assets/png/section3-img.png'
import { ARROW,comparisonsDropdown } from '../utils/Icons'

function Comparisons() {
    const [isOpen, setIsOpen] = useState(null);
    return (
        <div className='lg:mb-[162px] mb-[100px]'>
            <div className="max-w-[1140px] mx-auto px-3">
                <div className="flex flex-wrap max-[1000px]:flex-col-reverse max-[1000px]:gap-10 ">
                    <div className="w-1/2 px-3 max-[1000px]:w-full ">
                        <p className='font-normal text-5xl leading-[1.1] text-[#00171F] w-full max-[1000px]:text-center min-[1000px]:max-w-[456px] mb-[46px] max-md:text-[42px] max-sm:text-[40px] '>
                            Comprehensive Utility <span className='font-bold'>Comparisons</span>
                        </p>
                        {comparisonsDropdown.map((items, index) => {
                            const Icon = items.svg;
                            return (
                                <div key={index} className={`p-[14px] md:w-[90%] mx-auto min-[1000px]:max-w-[558px] border border-[#00000014] rounded-sm mb-6 ${isOpen === index ? 'shadow-lg' : ''}`}>
                                    <div className='flex gap-6'>
                                        <div className={`size-16 rounded-[50%] flex items-center justify-center max-w-[64px] w-full transition-all duration-300 ${isOpen === index ? 'bg-[#003459]' : 'bg-[#EAF9FF]'} `}>
                                            <Icon className={`transition-all duration-300 ${isOpen === index ? 'text-white' : 'text-[#007EA7]'}`} />
                                        </div>
                                        <div className='relative overflow-hidden w-full transition-all duration-150'>
                                            <button onClick={() => setIsOpen(isOpen === index ? null : index)} className={`font-normal text-[24px] max-md:text-[22px] max-sm:text-[18px]  text-[#00171F] w-full text-left cursor-pointer py-3 max-md:py-4 flex justify-between items-center ${isOpen === index ? 'mb-2' : ''}`}>
                                                {items.question}
                                                <span className={`${isOpen === index ? 'rotate-180' : 'rotate-0'} transition-all duration-150`}>
                                                    <ARROW />
                                                </span>
                                            </button>
                                            <p className={`max-w-[442px] w-full font-normal text-base leading-[1.6] text-[#00171F] transition-[max-height] duration-300 ease-in-out ${isOpen === index ? 'max-h-41' : 'max-h-0'
                                                }`}>
                                                {items.ans}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="w-1/2 px-3 max-[1000px]:w-full ">
                        <img src={section3} alt="img" className='min-[1000px]:w-full mx-auto' />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Comparisons