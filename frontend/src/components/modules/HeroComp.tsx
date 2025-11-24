import React from 'react'
import { VscChevronRight } from 'react-icons/vsc'
import Card from '@/components/common/Card'

const HeroComp = () => {
  return (
    <div className='w-[80%] mx-auto gap-[20px] md:gap-[40px] flex flex-col md:grid grid-cols-[225px_1fr] h-auto '>
      <div className='flex flex-col gap-4 pt-10 pr-[13px] w-[225px] mx-auto md:mx-0 border-r border-[#e4e0e0] text-[#000000]'>
        <div className='flex justify-between pr-2'>
            <p className='font-normal text-[16px] leading-[24px]'>Woman’s Fashion</p>
            <VscChevronRight className='w-[15] h-[15px]'/>
        </div>
        <div className='flex justify-between pr-2'>
            <p className='font-normal text-[16px] leading-[24px]'>Men’s Fashion</p>
            <VscChevronRight className='w-[15] h-[15px]'/>
        </div>
        <p className='font-normal text-[16px] leading-[24px]'>Electronics</p>
        <p className='font-normal text-[16px] leading-[24px]'>Home & Lifestyle</p>
        <p className='font-normal text-[16px] leading-[24px]'>Medicine</p>
        <p className='font-normal text-[16px] leading-[24px]'>Sports & Outdoor</p>
        <p className='font-normal text-[16px] leading-[24px]'>Baby’s & Toys</p>
        <p className='font-normal text-[16px] leading-[24px]'>Groceries & Pets</p>
        <p className='font-normal text-[16px] leading-[24px]'>Health & Beauty</p>

      </div>
      <div className='pt-10 w-full relative '>
        <Card/>
      </div>
     
      
    </div>
  )
}

export default HeroComp
