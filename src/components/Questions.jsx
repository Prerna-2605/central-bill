import React, { useState } from 'react'
import { QUEST } from '../utils/helper'

function Questions() {
    const [isOpen, setIsOpen] = useState(null);
    return (
        <div className='mb-[327px] '>
            <div className="max-w-[1140px] mx-auto px-3">
                <p className='font-normal text-5xl leading-[1.1] text-[#00171F] mb-4 text-center max-md:text-[42px] max-sm:text-[40px] '>
                    Frequently Asked <span className='font-bold'>Questions</span>
                </p>

                <p className='font-normal text-base leading-[1.5] text-[#1A2F36] text-center mx-auto max-w-[556px] mb-[56px] max-sm:text-[15px] '>
                    Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum
                </p>

                <div className='max-w-[916px] md:mx-auto mx-3 '>
                    {QUEST.map((items, index) => (
                        <div key={index} className={`transition-all duration-200 ease-in-out p-6 shadow-md rounded-sm mb-7 ${isOpen === index ? 'bg-[#003459] ' : 'bg-white'}`}>

                            <button onClick={() => setIsOpen(isOpen === index ? null : index)} className={`font-normal text-[24px] leading-[1.1] text-[#00171F] w-full text-left transition-all duration-200 cursor-pointer flex justify-between items-center gap-5 max-md:text-[21px] max-sm:text-[17px] ${isOpen === index ? 'text-white mb-[14px] ' : 'h-full overflow-hidden'}`}>
                                {items.quest}
                                <div className={`size-7 flex items-center justify-center border-[2px] rounded-[50%] max-w-[28px] w-full ${isOpen === index ? 'border-white ' : 'border-[#00171F]'} `}>
                                    <div className={`h-[2.55px] w-[12.72px] absolute transition-all duration-200  ${isOpen === index ? 'bg-white' : 'bg-[#00171F]  rotate-180'} `}></div>
                                    <div className={`h-[2.55px] w-[12.72px] -rotate-90 transition-all duration-200 ${isOpen === index ? 'bg-white -rotate-[360deg]' : 'bg-[#00171F]'} `}></div>
                                </div>
                            </button>
                            <p className={`font-normal text-base max-md:text-[15px] leading-[1.6] text-[#00171F] transition-[max-height] duration-300 ease-in-out ${isOpen === index ? 'max-h-[200px]   text-white' : 'max-h-0 overflow-auto absolute -top-full'} `}>
                                {items.ans}
                            </p>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Questions