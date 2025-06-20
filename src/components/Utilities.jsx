import React from 'react'
import thumb from '../assets/svg/thumbs-up.svg'
import { features } from '../utils/helper'

function Utilities() {
    return (
        <div className='mb-[162px]'>
            <div className="max-w-[1140px] mx-auto px-3">
                <p className='font-normal text-5xl leading-[1.1] text-[#00171F] mb-4 text-center max-md:text-[42px] max-sm:text-[40px] '>
                    Why Choose Us for <span className='font-bold'>Utilities</span>
                </p>

                <p className='font-normal text-base leading-[1.5] text-[#1A2F36] max-w-[620px] text-center mx-auto mb-[58px] max-sm:text-[15px] '>
                    This emphasizes both the action and the benefits, drawing in potential customers with a clear value proposition. Let me know if you'd like any adjustments!
                </p>

                <div className='flex max-[1000px]:flex-col gap-6'>
                    {/* Left Card */}
                    <div className="bg-[#003459] text-white p-10 rounded-sm flex-1 lg:max-w-[424px] max-[1000px]:flex max-[1000px]:gap-20 max-[1000px]:items-center max-[670px]:flex-col max-[670px]:items-start max-[670px]:gap-10">
                        <img src={thumb} alt="img" className='mb-[30px]' />


                        <div>
                            <p className="font-normal text-2xl mb-3">
                                Tailored Recommendations
                            </p>

                            <p className="font-normal text-base leading-[1.5] text-[#E5EAEE] mb-[22px] max-w-[344px] ">
                                Our platform analyzes your unique energy needs and preferences to suggest
                                the best utility providers, ensuring you get the most personalized options
                                available.
                            </p>
                            <button className="bg-white w-16 h-[52px] rounded-[446px] flex items-center justify-center cursor-pointer ">
                                <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 5.36914L1 5.36914M13 5.36914L8.63636 1.36914M13 5.36914L8.63636 9.36914" stroke="#010101" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Card */}
                    <div className="grid min-[485px]:grid-cols-2 grid-cols-1 gap-6 flex-1">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white shadow-md p-6 rounded-sm border border-[#E6E8E9] ">
                                <img src={feature.icon} alt={feature.title} className="w-[60px] h-[60px] mb-[18px] " />
                                <p className="font-normal text-2xl text-[#010101] mb-3">
                                    {feature.title}
                                </p>
                                <p className="font-normal text-base leading-[1.5] text-[#1A2F36]">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Utilities