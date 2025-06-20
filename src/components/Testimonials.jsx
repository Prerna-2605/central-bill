import React from 'react';
import { testimonial } from '../utils/helper';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
    <div
        onClick={onClick}
        className="z-5 group absolute min-[1232px]:left-[-55px] min-[1232px]:top-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full border border-[#000] flex items-center justify-center cursor-pointer bg-white shadow-md max-[769px]:hidden active:bg-black max-[1232px]:bottom-[-35%] max-[1232px]:right-[5.5%] max-[921px]:right-[7%]  ">

        <svg className='group-active:text-white' width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5198 1.26932C10.6643 1.40326 10.781 1.56434 10.8632 1.74337C10.9454 1.9224 10.9915 2.11587 10.9989 2.31274C11.0064 2.5096 10.9749 2.70599 10.9065 2.89071C10.838 3.07543 10.7338 3.24485 10.5998 3.38929L3.54606 10.8692L10.5998 18.349C10.7338 18.4935 10.838 18.6629 10.9064 18.8476C10.9749 19.0323 11.0063 19.2287 10.9989 19.4256C10.9915 19.6225 10.9453 19.8159 10.8631 19.995C10.7809 20.174 10.6643 20.3351 10.5198 20.469C10.3754 20.603 10.206 20.7071 10.0213 20.7756C9.83654 20.8441 9.64015 20.8755 9.4433 20.8681C9.24644 20.8606 9.05298 20.8145 8.87395 20.7323C8.69493 20.6501 8.53384 20.5335 8.3999 20.389L0.400168 11.8892C0.142934 11.6118 0 11.2475 0 10.8692C0 10.4909 0.142934 10.1266 0.400168 9.84918L8.3999 1.34932C8.53383 1.20485 8.69491 1.08819 8.87394 1.00598C9.05297 0.923771 9.24644 0.877636 9.44329 0.870208C9.64015 0.862779 9.83655 0.894202 10.0213 0.962683C10.206 1.03116 10.3754 1.13536 10.5198 1.26932Z" fill="currentColor" />
        </svg>
    </div>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
    <div
        onClick={onClick}
        className="z-5 group absolute min-[1232px]:right-[-55px] min-[1232px]:top-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full border border-[#000] flex items-center justify-center cursor-pointer bg-white shadow-md max-[769px]:hidden active:bg-black max-[1232px]:bottom-[-35%] max-[1232px]:right-[1%] ">

        <svg className="rotate-180 group-active:text-white" width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5198 1.26932C10.6643 1.40326 10.781 1.56434 10.8632 1.74337C10.9454 1.9224 10.9915 2.11587 10.9989 2.31274C11.0064 2.5096 10.9749 2.70599 10.9065 2.89071C10.838 3.07543 10.7338 3.24485 10.5998 3.38929L3.54606 10.8692L10.5998 18.349C10.7338 18.4935 10.838 18.6629 10.9064 18.8476C10.9749 19.0323 11.0063 19.2287 10.9989 19.4256C10.9915 19.6225 10.9453 19.8159 10.8631 19.995C10.7809 20.174 10.6643 20.3351 10.5198 20.469C10.3754 20.603 10.206 20.7071 10.0213 20.7756C9.83654 20.8441 9.64015 20.8755 9.4433 20.8681C9.24644 20.8606 9.05298 20.8145 8.87395 20.7323C8.69493 20.6501 8.53384 20.5335 8.3999 20.389L0.400168 11.8892C0.142934 11.6118 0 11.2475 0 10.8692C0 10.4909 0.142934 10.1266 0.400168 9.84918L8.3999 1.34932C8.53383 1.20485 8.69491 1.08819 8.87394 1.00598C9.05297 0.923771 9.24644 0.877636 9.44329 0.870208C9.64015 0.862779 9.83655 0.894202 10.0213 0.962683C10.206 1.03116 10.3754 1.13536 10.5198 1.26932Z" fill="currentColor" />
        </svg>
    </div>
);

const Testimonials = () => {
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2.5,
                }
            },
            {
                breakpoint: 939,
                settings: {
                    slidesToShow: 2.25,
                }
            },
            {
                breakpoint: 855,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1.75,
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1.5,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <div className="testimonial max-w-[1140px] px-3 mx-auto mb-[162px] ">
            <Slider {...settings}>
                {testimonial.map((content, index) => (
                    <div key={index} className='p-5 border border-[#E6E6E6] rounded-sm flex flex-col shadow-md max-w-[364px] '>
                        <div className='flex gap-2 items-center mb-6'>
                            <img src={content.profile} alt="profile" className='size-[60px]' />
                            <div>
                                <p className='font-normal text-2xl leading-[1.5] text-blackmax-md:text-[22px] '>
                                    {content.name}
                                </p>
                                <p className='font-normal text-base leading-[1.5] text-[#808080] max-md:text-[15px] '>
                                    {content.handle}
                                </p>
                            </div>
                        </div>
                        <img src={content.rating} alt="img" className='max-w-[99.2px] ' />
                        <p className='font-normal text-base leading-[1.5] text-[#1A2F36] mt-[18px] max-w-[324px]max-md:text-[15px] '>
                            {content.description}
                        </p>
                    </div>
                ))
                }
            </Slider>
        </div>
    )
};

export default Testimonials;
