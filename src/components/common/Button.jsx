import React from 'react'

const Button = ({ buttonText, buttonClass = "", svgColor }) => {
    return (
        <button className={`${buttonClass} rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px] whitespace-nowrap flex items-center gap-[9px] cursor-pointer transition-all duration-200 active:scale-95 hover:scale-[1.02] `}>{buttonText}
            <svg
                className={svgColor ? svgColor : `stroke-[#00171F]`}
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M1 14.3691L14 1.36914M14 1.36914V13.8491M14 1.36914H1.52" strokeWidth="1.93338" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    )
}

export default Button