import Image from 'next/image'
import React from 'react'
import ToGoComp from '../common/TogoComp'

export default function CategoryBanner() {
  return (
    <div className='w-[80%] mx-auto bg-black flex flex-col md:flex-row justify-between items-center md:items-start px-6 md:px-10 lg:px-10 py-10 relative'>

      <div className='flex flex-col w-full md:w-1/2 md:py-20 justify-between items-start space-y-6'>
        <h4 className='text-[14px] md:text-[16px] font-semibold text-[#00FF66]'>
          Categories
        </h4>
        <h1 className='font-semibold text-[28px] md:text-[36px] lg:text-[48px] leading-tight md:leading-[50px] lg:leading-[60px] tracking-wide text-[#FAFAFA] w-full md:w-[443px] '>
          Enhance Your Music Experience
        </h1>
        <ToGoComp />
        <button className='w-[140px] md:w-[174px] h-[48px] md:h-[56px] rounded-[4px] bg-[#00FF66] text-[#fff] '>
          Buy Now
        </button>
      </div>

      
      <div className="hidden md:block w-[350px] md:w-[450px] lg:w-[500px] h-[350px] md:h-[450px] lg:h-[500px] rounded-full bg-[#D9D9D9] opacity-10 shadow-[inset_0_0px_600px_rgba(0,0,0,1)]"></div>


      <div className='w-full md:w-[390px] lg:w-[558px] h-[195px] md:h-[250px] lg:h-[300px] mt-8 md:mt-0 md:absolute md:top-20 md:right-10'>
        <Image 
          src='/mpRadio.png' 
          width={558} 
          height={320} 
          alt='Mp Radio' 
          className='w-full h-full object-contain' 
        />
      </div>
    </div>

  )
}
