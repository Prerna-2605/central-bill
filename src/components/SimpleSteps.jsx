import React, { useEffect, useState } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { cards } from '../utils/helper';

function SimpleSteps() {
    const [isSlider, setIsSlider] = useState(window.innerWidth < 1140);

    useEffect(() => {
        const handleResize = () => {
            setIsSlider(window.innerWidth < 1140);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className='mb-[162px]'>
            <div className="max-w-[1140px] mx-auto px-3">
                <p className='font-normal text-5xl leading-[1.1] text-[#00171F] mb-4 text-center max-md:text-[42px] max-sm:text-[40px] '>
                    Simple Steps to <span className='font-bold'>Switch</span>
                </p>

                <p className='font-normal text-base leading-[1.6] text-[#4B4B4B] mb-[58px] max-w-[610px] text-center mx-auto max-sm:text-[15px] '>
                    Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum
                </p>
            </div>

            <div className="px-3">
                {isSlider ? (
                    <Swiper
                        breakpoints={{
                            450: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                        }}
                        modules={[Autoplay]}
                        autoplay={true}
                    >
                        {cards.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Card item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                        {cards.map((item, index) => (
                            <div key={index}>
                                <Card item={item} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

function Card({ item }) {
    return (
        <div className="overflow-hidden">
            <div className='group relative after:content-[""] after:absolute after:top-0 hover:after:-top-full after:left-0 after:w-full after:h-full after:bg-[#EAF9FFF0] after:transition-all after:duration-400 hover:after:opacity-0'>
                <p className='absolute w-full z-[1] -rotate-90 font-normal text-[32px] leading-[1.1] top-[65%] left-1/2 -translate-1/2 group-hover:-top-full transition-all duration-400 whitespace-nowrap max-lg:text-[29px] max-md:text-[26px]'>{item.title}</p>
                <img src={item.img} alt="img" className='w-full' />
                <div className='py-8 pl-[42px] pr-8 bg-[#003459] absolute group-hover:bottom-0 -bottom-full transition-all duration-200'>
                    <p className='font-normal text-[32px] leading-[1.1] text-[#FFFFFF] mb-[14px]'>{item.title}</p>
                    <p className='font-normal text-base text-[#E5EAEE]'>{item.content}</p>
                </div>
            </div>
        </div>
    );
}

export default SimpleSteps;
