'use client'
import Products from '../common/Products'
import ToGoComp from '../common/TogoComp'
import Button from '../common/Button'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useScroll } from '@/context/ScrollProvider'
import Subheader from '../common/Subheader'


const DailyMarket = () => {
  const { prev, next } = useScroll()
  return (
    <section className="w-[90%] h-auto md:h-[493px] flex flex-col gap-[30px] ml-[10%] md:px-0">

      <div className="w-[90%] h-auto md:h-[103px] flex flex-col md:flex-row justify-between items-end">

        <div className="w-full md:w-[600px] h-auto md:h-full flex flex-col md:flex-row justify-between md:justify-start lg:justify-between items-start md:items-end gap-4">
          <Subheader title='Flash Sales' subTitle="Today's" />


          <div className="w-full md:w-[302px] h-[50px] text-[18px] md:text-[20px] text-red-600 font-bold flex justify-start md:justify-around">
            <ToGoComp />
          </div>


        </div>
        <div className='w-[90px] h-[46px] flex justify-between items-center '>
          <button
            type="button"
            onClick={() => prev()}
            className='w-9 h-9 bg-[#F5F5F5]  flex justify-center items-center rounded-full'>
            <FaArrowLeft className='w-[15px] h-[15px] ' />
          </button>
          <button
            type="button"
            onClick={() => next()}
            className='w-9 h-9 bg-[#F5F5F5] flex justify-center items-center rounded-full'>
            <FaArrowRight className='w-[15px] h-[15px]' />
          </button>
        </div>
      </div>


      <div className="mt-6 md:mt-0">
        <Products />
      </div>
      <div className='w-full h-auto flex justify-center items-center'>
        <Button text="View All Products" />
      </div>

    </section>

  )
}

export default DailyMarket
