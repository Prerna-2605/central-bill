import React from 'react'
import section2 from '../assets/png/section2.png'
import Button from '../components/common/Button'


function Switch() {
    return (
        <div className='lg:mb-[162px] mb-[100px]'>
            <div className="max-w-[1140px] mx-auto px-3">
                <div className="flex flex-wrap items-center max-[921px]:flex-col max-[921px]:gap-10 ">
                    <div className="w-1/2 max-[921px]:w-full px-3">
                        <img src={section2} alt="img" className='min-[921px]:w-full mx-auto' />
                    </div>

                    <div className="w-1/2 max-[921px]:w-full px-3">
                        <p className='font-normal text-5xl leading-[1.1] text-[#00171F] min-[921px]:max-w-[406px] mb-4 max-md:text-[44px] max-sm:text-[40px] '>
                            <span className='font-bold'>Switching Energy</span> Made Simple
                        </p>

                        <p className='font-normal text-base leading-[1.5] text-[#00171F] min-[921px]:max-w-[558px] mb-[38px] max-sm:text-[15px] '>
                            Say goodbye to confusing energy plans! We simplify the process by providing clear and competitive electricity and gas recommendations. Whether you're moving or just seeking a better deal, our platform connects you with the best energy providers quickly and easily, helping you save on energy bills.
                        </p>

                        <p className='font-normal text-[24px] leading-[1.1] text-[#003459] mb-7'>
                            Benefits of Comparing Energy Plans
                        </p>

                        <ul className='list-disc flex flex-col gap-2 pl-4 mb-[42px]'>
                            <li className='font-normal text-base leading-[1.5] text-[#00171F]'>
                                Save money by finding cheaper deals.
                            </li>

                            <li className='font-normal text-base leading-[1.5] text-[#00171F]'>
                                Get better customer service.
                            </li>

                            <li className='font-normal text-base leading-[1.5] text-[#00171F]'>
                                Explore greener, more sustainable energy options.
                            </li>
                        </ul>

                        <Button buttonText={"Compare With Us"} buttonClass='bg-[#00A8E8] py-3 px-5 text-[#FFFFFF] text-base font-bold' svgColor={'stroke-[#FFFFFF]'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Switch