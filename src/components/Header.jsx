import React, { useEffect, useState } from 'react'
import logo from '../assets/svg/logo.svg'
import { nav } from '../utils/helper'
import Button from './common/Button'
import section1 from '../assets/png/section1.png'
import dots from '../assets/svg/dots.svg'

function Header() {
    const [state, setIsOpen] = useState(null)
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 1);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className='bg-[url(src/assets/png/section1-bg.png)] lg:bg-size-[100%_810px] bg-top bg-cover bg-no-repeat mb-16 '>
            <nav className={`fixed top-0 w-full z-20 transition-all duration-150 ${hasScrolled ? 'bg-[#09476E] shadow-lg ' : 'bg-transparent'}`}>
                <div className='max-w-[1140px] mx-auto px-3 py-4 flex items-center justify-between'>
                    <a href="">
                        <img src={logo} alt="logo" />
                    </a>
                    <div>
                        <ul className={`flex items-center gap-6 menu-list max-[837px]:flex-col max-[837px]:justify-center max-[837px]:fixed max-[837px]:top-0 max-[837px]:w-[70%] max-[837px]:h-full max-[837px]:gap-10 max-[837px]:bg-[#00A8E8] max-[837px]:text-white z-9 transition-[right] duration-400 ${state === "show" ? 'right-0' : 'max-[837px]:right-[-100%]'}`}>
                            {nav.map((items, index) => (
                                <li key={index}>
                                    <a href={items.link} className='capitalize text-[#E6ECF0] relative group hover:text-white transition-colors duration-200'>
                                        {items.name}
                                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#E6ECF0] group-hover:w-full transition-all duration-300"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Button buttonText={"Get Started"} buttonClass='bg-[#FFFFFF] py-3 px-5 text-#00171F text-base max-sm:text-[15px] font-bold' svgColor={'stroke-[#00171F]'} />
                        <button onClick={() => setIsOpen(state === "show" ? null : "show")} className={`menu-icon min-[837px]:hidden w-[35px] flex flex-col justify-between z-10 ${state === "show" ? 'h-[29px]' : 'h-[30px]'} `}>
                            <span className={`block w-full h-1 bg-white rounded-[50px] transition-all duration-200 ${state === "show" ? 'rotate-[45deg] origin-left ' : ''}`}></span>
                            <span className={`block w-full h-1 bg-white rounded-[50px] transition-all duration-200 ${state === "show" ? 'hidden' : ''}`}></span>
                            <span className={`block w-full h-1 bg-white rounded-[50px] transition-all duration-200 ${state === "show" ? 'rotate-[-45deg] origin-left ' : ''}`}></span>
                        </button>
                    </div>
                </div>
            </nav>
            <div className="max-w-[1140px] mx-auto px-3 pt-[190px]">
                <div className="flex flex-wrap items-center max-[825px]:flex-col-reverse max-[825px]:gap-10 max-[825px]:pb-5 ">
                    <div className='w-1/2 max-[825px]:w-full px-3 flex flex-col justify-between gap-10'>
                        <div className='min-[825px]:max-w-[506px]'>
                            <p className='font-normal text-[64px] text-white leading-[110%] mb-4 max-[1025px]:text-[58px] max-md:text-[52px] max-sm:text-5xl'>
                                Easily Compare <span className='font-bold'>Energy, Gas, And Internet</span> Plans
                            </p>

                            <p className='font-normal text-base text-white leading-[1.5] mb-[42px] max-[1025px]:text-[15px] '>
                                Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place.
                            </p>

                            <div className='max-w-[476px] relative'>
                                <input type="text" placeholder='Start typing your address' className='w-full bg-white py-5 pl-[22px] pr-[145px] rounded-br-[50px] rounded-tr-[50px] rounded-bl-[40px]' />
                                <Button buttonText={"Compare"} buttonClass='bg-[#00A8E8] py-3 px-5 text-white text-base font-bold absolute top-[8px] right-[9px] placeholder-text-base placeholder-text-[#7F8A8E] placeholder-leading-[1.1]' svgColor={'stroke-[#FFF]'} />
                            </div>
                        </div>
                        <div>
                            <p className='font-normal text-[38px] leading-[1.1] lg:text-[#003459] text-white max-md:text-[36px] max-sm:text-[32px] '>
                                More than <span className='font-bol text-[#00A8E8]'>80,000</span>+ companies trust bill central
                            </p>
                        </div>
                    </div>
                    <div className="w-1/2 max-[825px]:w-full px-3 relative">
                        <img src={section1} alt="img" className='relative z-1 min-[825px]:w-full max-[768px]:w-[70%] w-[60%] mx-auto max-sm:w-full ' />
                        <img src={dots} alt="img" className='absolute top-[-55px] right-0 xl:right-[-25px] max-[825px]:right-[9%] max-[768px]:right-[3%] max-sm:right-0 ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header