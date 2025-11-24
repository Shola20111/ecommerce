import StarsComp from '@/components/common/StarsComp'
import { useCard } from '@/context/CardContext'
import Image from 'next/image'
import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import { FiEye } from 'react-icons/fi'

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}



const bestSellingList = [
  {
    id: 1,
    name: "The north coat",
    price: 260,
    oldPrice: 360,
    image: "/laptop.png",
  },
  {
    id: 2,
    name: "Gaming Mouse X15",
    price: 960,
    oldPrice: 1160,
    image: "/monitor.png",
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    price: 150,
    oldPrice: 200,
    image: "/game.png",
  },
  {
    id: 4,
    name: "Small BookSelf",
    price: 70,
    oldPrice: 100,
    image: "/keyboard.png",
  },
]
export default function JustForYou() {
  const { addToCart } = useCard();
  return (
    <section>
      <div className='mb-10 flex gap-1 '>
        <div className='w-4 h-8 rounded-[4px] bg-[#DB4444]'></div>
        <button className='w-25 rounded-[4px] '>Just For You</button>
      </div>
      <div className='w-full h-auto flex flex-col gap-3 overflow-x-auto sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {bestSellingList.map((item) => (
          <div
            key={item.id}
            className='w-[340px] sm:w-full md:w-full h-[350px] flex flex-col justify-between items-start mx-auto rounded-[6px]'
          >

            <div className='w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center rounded-[4px] relative'>
              <Image
                src={item.image}
                width={140}
                height={140}
                alt='image'
              />
              <div className="flex flex-col justify-center items-center gap-2 absolute top-10 right-4">
                <div className="w-[25px] h-[25px] bg-white flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200">
                  <FiEye size={15} />
                </div>
              </div>
              <div
                onClick={() =>
                  addToCart({
                    ...item,
                    id: String(item.id),
                    quantity: 1,
                    count: 1, // ✅ add this line
                  })
                }


                className="w-full h-[41px] rounded-b-4 bg-[#000] text-[#fff] text-[16px] leading-[24px] font-medium flex justify-center items-center gap-2 absolute right-0 left-0 bottom-0 cursor-pointer"
              >
                <BsCart3 className={`w-[25px] h-[20px]`} />
                <div>
                  Add to Cart
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className='h-[84px] w-auto flex flex-col px-1'>
              <div className='text-[16px] leading-[24px] font-bold'>
                {item.name}
              </div>
              <div className='flex text-[16px] leading-[24px] gap-3'>
                <div className='text-[#DB4444]'>${item.price}</div>
                <div className='text-black opacity-50 line-through'>${item.oldPrice}</div>
              </div>
              <StarsComp />
            </div>
          </div>
        ))}
      </div>
    </section>


  )
}
