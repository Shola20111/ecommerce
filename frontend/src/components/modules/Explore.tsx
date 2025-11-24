'use client'
import React from 'react'
import Button from '../common/Button'
import Subheader from '../common/Subheader'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Card2 } from '../common/productsExplore2/Card2'
import { Card3 } from '../common/productsExplore2/Card3'
import { Card4 } from '../common/productsExplore2/Card4'
import { Card1 } from '../common/productsExplore2/card1'
import { useExploreScroll } from '@/context/ExploreScrollProvider'
import ProductsExplore from './ProductsExplore'



const Explore = () => {
  const { exploreScrollRef, prev, next } =useExploreScroll()

  return (
    <section className='w-[80%] mx-auto flex flex-col h-auto gap-5'>
      <div className='flex justify-between items-end'>
        <Subheader title='Explore Our Products' subTitle='Our Products' />
        <div className='w-[90px] h-[46px] flex justify-between items-center '>
          <button 
            type="button"
            onClick={() => prev()}
            className='w-9 h-9 bg-[#F5F5F5]  flex justify-center items-center rounded-full'>
            <FaArrowLeft className='w-[15px] h-[15px] '/>
          </button>
          <button 
            type="button"
            onClick={() => next()}
            className='w-9 h-9 bg-[#F5F5F5] flex justify-center items-center rounded-full'>
            <FaArrowRight className='w-[15px] h-[15px]'/>
          </button>
        </div>
      </div>
      <div>
        <ProductsExplore/>
      </div>
      <div 
      ref={exploreScrollRef}
      className='flex w-full h-auto gap-3 overflow-x-auto scrollbar-hide scroll-smooth'>
        <Card1/>
        <Card2/>
        <Card3/>
        <Card4/>
      </div>
      <div className='mx-auto'>
        <Button text='View All Products'/>
      </div>
    </section>
  )
}

export default Explore
