import React from 'react'
import Subheader from '../common/Subheader'
import Button from '../common/Button'
import BestProducts from '../common/BestProducts'

const MonthlyMarket = () => {
  return (
    <section className='w-[80%] mx-auto h-auto flex flex-col justify-between gap-[30px] '>
      <div className='flex justify-between w-full h-auto'>
        <Subheader title='Best Selling Products' subTitle='This Month' />
        <div className='flex items-end'>
          <Button text = 'View All'/>
        </div>
      </div>
      <div>
        <BestProducts/>
      </div>

    </section>
  )
}

export default MonthlyMarket
