'use client'
import React, { useRef, useState } from 'react'
import Subheader from '../common/Subheader'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'


const items = [
  {
    id: 1,
    image: "/CellPhone.png",
    title: "Phones"
  },
  {
    id: 2,
    image: "/Computer.png",
    title: "Computers"
  },
  {
    id: 3,
    image: "/Smartwatch.png",
    title: "Smartwatch"
  },
  {
    id: 4,
    image: "/Camera.png",
    title: "Camera"
  },
  {
    id: 5,
    image: "/Headphone.png",
    title: "Headphone"
  },
  {
    id: 6,
    image: "/gamepad.png",
    title: "Gaming",
  },
  {
    id: 7,
    image: "/Camera.png",
    title: "Camera"
  },
  {
    id: 8,
    image: "/Headphone.png",
    title: "Headphone"
  },
  {
    id: 9,
    image: "/gamepad.png",
    title: "Gaming",
  },
]

const Categories = () => {
  const [isActive, setIsActive] = useState<number | null>(null)
  const categoryScrollRef = useRef<HTMLDivElement | null>(null);
  const prev = ()=>{
    if(categoryScrollRef.current){
      categoryScrollRef.current.scrollBy({left:-182, behavior:'smooth'})
    }
  }

  const next = ()=>{
    if(categoryScrollRef.current){
      categoryScrollRef.current.scrollBy({left:182, behavior:'smooth'})
    }
  }

  return (
    <section className="w-[80%] mx-auto flex flex-col h-auto gap-[30px] items-start">
      {/* header */}
      <div className="flex justify-between w-full">
        <Subheader title="Browse By Category" subTitle="categories" />
        <div className="flex items-end">
          <div className="w-[90px] h-[46px] flex justify-between items-center">
            <button onClick={prev} className="w-9 h-9 bg-[#F5F5F5] flex justify-center items-center rounded-full">
              <FaArrowLeft className="w-[15px] h-[15px]" />
            </button>
            <button onClick={next} className="w-9 h-9 bg-[#F5F5F5] flex justify-center items-center rounded-full">
              <FaArrowRight className="w-[15px] h-[15px]" />
            </button>
          </div>
        </div>
      </div>

      {/* categories */}
      <div ref={categoryScrollRef} className="w-full flex overflow-x-auto gap-3 scrollbar-hide scroll-smooth">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setIsActive(item.id)}
            className={`${isActive === item.id ? 'bg-[#DB4444] text-white' : ''} w-full h-[145px] rounded flex gap-[30px] items-center`}
          >
            <div className="cursor-pointer w-[170px] h-full rounded-[4px] border flex flex-col justify-center items-center gap-3">
              <Image className='outline-white' src={item.image} width={56} height={56} alt={item.title} />
              <h5>{item.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Categories