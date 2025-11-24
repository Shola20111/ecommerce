'use client'
import { useRef, useState } from "react"
import { CiHeart } from "react-icons/ci"
import { FiEye } from "react-icons/fi"
import StarsComp from "../StarsComp"
import Image from "next/image"

const cards = [
    {
    id: 1,
    name: "Jr. Zoom Soccer Cleats",
    price: 120,
    oldPrice: 160,
    discount: "-40%",
    image: "/yellow-soccer.png",
  },
  {
    id: 2,
    name: "Jr. Zoom Soccer Cleats",
    price: 90,
    oldPrice: 130,
    discount: "-30%",
    image: "/red-soccer.png",
  },
]

export const Card2 = () => {
    const changeRef = useRef<HTMLDivElement | null>(null)

    const [toShow, setToShow] = useState<number | null>(1)

    return (
            <main 
                className="flex flex-col w-full h-auto gap-[-2px]"
                ref={changeRef}
            >   
						{cards.filter(card=>card.id === toShow).map((card) => (
								<section
										key={card.id}
										className="min-w-[260px] max-w-[270px] h-[350px] flex flex-col"
								>
									
										<div 
										
										className="w-full h-[250px] flex justify-center items-center rounded-[4px] bg-[#f5f5f5] relative">
												<div className="w-[172px] h-[152px] flex justify-center items-center">
														<Image
																src={card.image}
																width={172}
																height={152}
																alt={card.name}
														/>
												</div>
														
												
												{/* <div className="bg-[#00FF66] w-[55px] h-[26px] rounded-[4px] flex justify-center items-center absolute left-2 top-2">
														<p className="text-white">{card.discount}</p>
												</div> */}

											
												<div className="flex flex-col justify-center items-center gap-2 absolute top-10 right-4">
														<div className="w-[25px] h-[25px] bg-white flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200">
																<CiHeart size={20} />
														</div>
														<div className="w-[25px] h-[25px] bg-white flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200">
																<FiEye size={15} />
														</div>
												</div>
										</div>

										
										<div className="h-auto flex flex-col gap-[8px] mt-2">
												<h4 className="text-[16px] leading-[24px] font-medium">
														{card.name}
												</h4>
												<div className="flex w-[85px] items-center text-[16px] gap-[12px]">
														<p className="text-[red]">${card.price}</p>
														<p className="line-through text-gray-500">${card.oldPrice}</p>
												</div>
												<StarsComp />
												<div className="flex gap-2">
														<div className={`w-4 h-4 ${toShow === 1? 'border-2 border-[rgb(0,0,0)] ':"border-0"}  rounded-full flex justify-center items-center`}>
                <button
                  onClick={() => setToShow(1)}
                  className={`bg-[#f8e80b] w-3 h-3 ${toShow === 1? 'border border-[white] ':"border-0"} rounded-full`}>
                  </button>
              </div>
              <div className={`w-4 h-4 ${toShow === 2? 'border-2 border-[black] ':"border-0"}  rounded-full flex justify-center items-center`}>
                <button
                  onClick={() => setToShow(2)}
                  className={`bg-[red] w-3 h-3 ${toShow === 2? 'border border-[white] ':"border-0"} rounded-full`}>
                  </button>
              </div>
										</div>
										</div>
										
								</section>
						))}
        </main>
    )
}
