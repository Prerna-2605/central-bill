import React from 'react'
import { slider } from '../utils/helper';
import Slider from 'react-slick';

const Company = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        speed: 2000,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: false,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 4,
                }
            },
        ]
    };

    return (
        <div className='max-w-[1140px] mx-auto lg:mb-[162px] mb-[100px]'>
            <Slider {...settings}>
                {slider.map((items, index) => (
                    <div key={index} className='lg:px-3 px-1 w-[186px] '>
                        <img src={items.image} alt={`slide-${index}`} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}


export default Company