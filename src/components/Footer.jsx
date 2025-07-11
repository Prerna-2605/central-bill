import React from 'react'
import logo from '../assets/svg/big-logo.svg'
import bgimg from '../assets/png/Footer.png'
import { footer } from '../utils/helper'
import Button from './common/Button'
import blueimg from '../assets/png/floating.png'
import Input from './common/Input'

function Footer() {
  const date = new Date()
  return (
    <div className='bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="max-w-[1140px] mx-auto px-3 ">
        <div className='-translate-y-1/2'>
          <div className='max-w-[1140px] mx-auto px-3 bg-center bg-cover bg-no-repeat py-[54px] flex flex-col items-center max-[1165px]:mx-3 ' style={{ backgroundImage: `url(${blueimg})` }}>
            <p className='mb-4 font-normal text-5xl text-[#00171F] text-center max-md:text-[42px] max-sm:text-[40px] '>
              Join Our <span className='font-bold'>Newsletter</span>
            </p>

            <p className='font-normal text-base leading-[1.5] text-[#182E36] max-w-[620px] text-center mb-[38px] max-md:text-[15px]'>
              Stay up to date with the latest deals, energy-saving tips, and exclusive offers! Sign up for our newsletter and never miss out on great savings opportunities again.
            </p>

            <Input buttonText={'Submit'} placeholder={'Enter you email'} className='pl-[22px] pr-[135px] border border-[#CBCBCB] ' divClass={'max-w-[476px] w-full '} buttonClass={'top-[9px] right-[9px] bg-[#007EA7]'} type={'email'}/>
          </div>
        </div>
        <div className='flex justify-between mb-[56.55px] mt-[-88px] max-[670px]:flex-col gap-10 '>
          <div className='max-[670px]:w-full '>
            <a href="">
              <img src={logo} alt="logo" className='mb-7' />
            </a>
            <p className='font-normal text-base text-[#E5EBEF] mb-9 min-[670px]:max-w-[297px]'>
              Ut auctor nisi mauris eu tincidunt facilisi. Diam amet sollicitudin pretium maecenas ornare lacus arcu adipiscing.
            </p>
            <p className='font-bold text-[20px] text-white mb-4'>
              Follow Us
            </p>
            <div className='flex gap-[15.39px] '>
              <div className='size-[33.5px] border border-white rounded-[50%] flex items-center justify-center transition duration-300 hover:-translate-y-1'>
                <a href="https://in.linkedin.com/" target='_blank'>
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.50975 2.20786C3.50953 2.65205 3.33287 3.07795 3.01863 3.39188C2.70438 3.70581 2.2783 3.88205 1.83412 3.88182C1.38993 3.8816 0.96403 3.70494 0.650102 3.3907C0.336173 3.07645 0.159934 2.65037 0.160156 2.20619C0.160379 1.762 0.337043 1.3361 0.651286 1.02217C0.965529 0.708243 1.39161 0.532005 1.83579 0.532227C2.27998 0.532449 2.70588 0.709113 3.01981 1.02336C3.33374 1.3376 3.50998 1.76368 3.50975 2.20786ZM3.56 5.12201H0.2104V15.6063H3.56V5.12201ZM8.85236 5.12201H5.51951V15.6063H8.81887V10.1045C8.81887 7.03966 12.8133 6.75494 12.8133 10.1045V15.6063H16.121V8.96568C16.121 3.79892 10.209 3.99152 8.81887 6.52884L8.85236 5.12201Z" fill="#FCFCFC" />
                  </svg>
                </a>
              </div>
              <div className='size-[33.5px] border border-white rounded-[50%] flex items-center justify-center transition duration-300 hover:-translate-y-1'>
                <a href="https://www.instagram.com/" target='_blank'>
                  <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.49607 0.696343C10.1071 0.693998 10.7182 0.70014 11.3291 0.714766L11.4916 0.720627C11.6792 0.727327 11.8642 0.735701 12.0878 0.745749C12.9788 0.787619 13.5868 0.928303 14.1202 1.13514C14.6729 1.34784 15.1385 1.63591 15.6041 2.1015C16.0298 2.51987 16.3592 3.02594 16.5696 3.58453C16.7764 4.11796 16.9171 4.72675 16.959 5.61774C16.969 5.84049 16.9774 6.02639 16.9841 6.21397L16.9891 6.37642C17.004 6.98705 17.0104 7.59785 17.0084 8.20865L17.0092 8.83335V9.93035C17.0113 10.5414 17.0049 11.1525 16.99 11.7634L16.9849 11.9259C16.9782 12.1134 16.9699 12.2985 16.9598 12.5221C16.9179 13.4131 16.7756 14.021 16.5696 14.5545C16.3599 15.1137 16.0304 15.6201 15.6041 16.0383C15.1853 16.464 14.679 16.7935 14.1202 17.0039C13.5868 17.2107 12.9788 17.3514 12.0878 17.3933C11.8642 17.4033 11.6792 17.4117 11.4916 17.4184L11.3291 17.4234C10.7182 17.4383 10.1071 17.4447 9.49607 17.4427L8.87137 17.4435H7.77521C7.16413 17.4456 6.55305 17.4391 5.94214 17.4242L5.77969 17.4192C5.5809 17.412 5.38215 17.4036 5.18346 17.3941C4.29247 17.3522 3.68451 17.2099 3.15025 17.0039C2.59144 16.794 2.08528 16.4644 1.66722 16.0383C1.24102 15.6199 0.911235 15.1135 0.70086 14.5545C0.494023 14.021 0.353339 13.4131 0.311469 12.5221C0.302143 12.3234 0.293769 12.1247 0.286347 11.9259L0.28216 11.7634C0.266722 11.1525 0.259743 10.5414 0.261225 9.93035V8.20865C0.258888 7.59786 0.26503 6.98705 0.279648 6.37642L0.28551 6.21397C0.292209 6.02639 0.300583 5.84049 0.310632 5.61774C0.352502 4.72591 0.493185 4.11879 0.700023 3.58453C0.910522 3.02567 1.24095 2.51973 1.66806 2.10234C2.08583 1.67589 2.59168 1.34581 3.15025 1.13514C3.68451 0.928303 4.29163 0.787619 5.18346 0.745749L5.77969 0.720627L5.94214 0.716441C6.55276 0.70101 7.16356 0.694031 7.77437 0.695505L9.49607 0.696343ZM8.63522 4.88334C8.08045 4.87549 7.52965 4.97799 7.01483 5.18486C6.50002 5.39174 6.03145 5.69887 5.63636 6.0884C5.24128 6.47794 4.92755 6.94212 4.71342 7.45396C4.49928 7.9658 4.38901 8.51509 4.38901 9.06992C4.38901 9.62475 4.49928 10.174 4.71342 10.6859C4.92755 11.1977 5.24128 11.6619 5.63636 12.0514C6.03145 12.441 6.50002 12.7481 7.01483 12.955C7.52965 13.1619 8.08045 13.2643 8.63522 13.2565C9.74568 13.2565 10.8107 12.8154 11.5959 12.0302C12.3811 11.2449 12.8222 10.18 12.8222 9.0695C12.8222 7.95904 12.3811 6.89406 11.5959 6.10885C10.8107 5.32363 9.74568 4.88334 8.63522 4.88334ZM8.63522 6.55814C8.96893 6.55199 9.30052 6.6124 9.61062 6.73584C9.92072 6.85928 10.2031 7.04328 10.4413 7.27708C10.6795 7.51089 10.8687 7.78981 10.9979 8.09757C11.1271 8.40532 11.1936 8.73573 11.1937 9.06949C11.1938 9.40326 11.1273 9.73369 10.9982 10.0415C10.8691 10.3493 10.68 10.6283 10.4419 10.8622C10.2038 11.096 9.92146 11.2801 9.6114 11.4037C9.30134 11.5272 8.96977 11.5877 8.63606 11.5817C7.96978 11.5817 7.33079 11.317 6.85967 10.8459C6.38854 10.3748 6.12386 9.73578 6.12386 9.0695C6.12386 8.40322 6.38854 7.76424 6.85967 7.29311C7.33079 6.82198 7.96978 6.5573 8.63606 6.5573L8.63522 6.55814ZM13.0316 3.62724C12.7614 3.63805 12.5059 3.75298 12.3186 3.94794C12.1313 4.1429 12.0267 4.40279 12.0267 4.67315C12.0267 4.94352 12.1313 5.2034 12.3186 5.39837C12.5059 5.59333 12.7614 5.70825 13.0316 5.71906C13.3092 5.71906 13.5754 5.60878 13.7717 5.41248C13.968 5.21618 14.0783 4.94993 14.0783 4.67232C14.0783 4.3947 13.968 4.12846 13.7717 3.93215C13.5754 3.73585 13.3092 3.62557 13.0316 3.62557V3.62724Z" fill="#FCFCFC" />
                  </svg>
                </a>
              </div>
              <div className='size-[33.5px] border border-white rounded-[50%] flex items-center justify-center transition duration-300 hover:-translate-y-1'>
                <a href="https://www.facebook.com/" target='_blank'>
                  <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.19773 10.3254H8.29123L9.12863 6.97581H6.19773V5.30101C6.19773 4.43849 6.19773 3.62621 7.87253 3.62621H9.12863V0.812549C8.85564 0.77654 7.8248 0.695312 6.73618 0.695312C4.46264 0.695312 2.84814 2.08288 2.84814 4.63109V6.97581H0.335938V10.3254H2.84814V17.4433H6.19773V10.3254Z" fill="#FCFCFC" />
                  </svg>
                </a>
              </div>
              <div className='size-[33.5px] border border-white rounded-[50%] flex items-center justify-center transition duration-300 hover:-translate-y-1'>
                <a href="https://twitter.com/" target='_blank'>
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1892 0.961914H19.2716L12.5389 8.67688L20.4599 19.1754H14.2585L9.4012 12.8069L3.84296 19.1754H0.759232L7.96045 10.9228L0.362305 0.961914H6.72194L11.112 6.78142L16.1892 0.961914ZM15.1089 17.3264H16.8172L5.79242 2.71417H3.96103L15.1089 17.3264Z" fill="#FCFCFC" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className='flex min-[670px]:gap-[78px] justify-between'>
            {footer.map((items, index) => (
              <ul key={index}>
                <li className='font-bold text-[20px] leading-[1.5] text-white mb-3 max-md:text-[18px] capitalize'>
                  {items.title}
                </li>
                {items.links.map((item, i) => (
                  <li key={i} className='mb-[14px] '>
                    <a href="" className='font-normal text-base text-[#E5EBEF] capitalize relative group max-md:text-[15px]'>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div className='w-full py-5 border-t border-[#34607E] flex justify-center'>
        <p className='font-normal text-[14px] leading-[1.5] text-[#E5EBEF]'>
          © {date.getFullYear()} BILL CENTRAL, Inc. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer