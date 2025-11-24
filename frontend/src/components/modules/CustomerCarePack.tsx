import React from 'react'
import { Truck, Headphones, ShieldCheck } from "lucide-react"

const sureLists = [
  { id: 1, name: "Free & Fast Delivery", discription:"Free delivery for all orders over $140", icon: <Truck size={40} /> },
  { id: 2, name: "24/7 Customer Service", discription:"We reurn money within 30 days",  icon: <Headphones size={40} /> },
  { id: 3, name: "Money Back Guarantee", discription:"Friendly 24/7 customer support", icon: <ShieldCheck size={40} /> },
]


const CustomerCarePack = () => {
  
  return (
    <section className='w-[80%] mx-auto h-auto flex '>
      <div className='flex flex-col md:grid grid-cols-3  mx-auto max-gap-10'>
        {sureLists.map((sure)=>
        <div
        className='flex flex-col justify-center items-center w-[249px] h-[161px] '
        key={sure.name}
        >
          <div className='max-w-[70px] max-h-[70px] flex justify-center items-center rounded-full  bg-black border-8 border-[gray] text-white '>
            {sure.icon}
          </div>
          <div className='text-[20px] md:text-[15px] lg:text-[20px] leading-[28px] font-semibold text-[#000] '>
            {sure.name}
          </div>
          <div className='text-[14px] md:text-[10px] lg:text-[14px] text-[#000] leading-[21px] '>
            {sure.discription}
          </div>

        </div>
        )}
      </div>
    </section>
    
  )
}

export default CustomerCarePack