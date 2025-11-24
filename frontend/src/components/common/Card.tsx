
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";


const cards = [
  {
    id: 1,
    title:"banner",
    callToAction: "Shop Now",
    image: "/banner.png",
  },
  {
    id: 2,
    title:"banner",
    callToAction: "Shop Now",
    image: "/monitor.png",
  },
  {
    id: 3,
    title:"banner",
    callToAction: "Shop Now",
    image: "/banner.png",
  },
];

export default function Card() {
  const [activeIndex, setActiveIndex] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
     
      <div className="relative flex flex-col items-center justify-center w-full h-[250px] md:h-[344px]">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`absolute inset-0 flex flex-col items-center justify-center text-white transition-opacity duration-700 w-full h-[250px] md:h-[344px] ${
              index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            
            <Image
              src={card.image}
              alt={card.title}
              fill
              className=" w-full h-full -z-10"
            />

            
            <p className="flex items-center mt-2 max-w-md absolute bottom-10 left-15 z-10">
              {card.callToAction}
              <GoArrowRight className="ml-2"/>
            </p>
          </div>
        ))}

        
        <div className="absolute bottom-4 flex gap-2 z-20">
          {cards.map((_, index) => (
            <input
              key={index}
              type="radio"
              name="card-indicator"
              checked={activeIndex === index}
              onChange={() => setActiveIndex(index)}
              className="h-3 w-3 appearance-none rounded-full border border-white checked:bg-white cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
