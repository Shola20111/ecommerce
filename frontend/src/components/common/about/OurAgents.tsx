'use client'
import React, { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const OurAgents = () => {
  const cards = [
    {
      img: "/Tom-Cruise.png",
      title: "Tom-Cruise",
      text: "Founder & Chairman"
    },
    {
      img: "/Emma-Watson.png",
      title: "Emma Watson",
      text: "Managing Director"
    },
    {
      img: "/Will-Smith.png",
      title: "Will Smith",
      text: "Product Designer"
    },
    {
      img: "/Tom-Cruise.png",
      title: "Tom-Cruise",
      text: "Founder & Chairman"
    },
    {
      img: "/Emma-Watson.png",
      title: "Emma Watson",
      text: "Managing Director"
    },
    {
      img: "/Will-Smith.png",
      title: "Will Smith",
      text: "Product Designer"
    },
    {
      img: "/Tom-Cruise.png",
      title: "Tom-Cruise",
      text: "Founder & Chairman"
    },
    {
      img: "/Emma-Watson.png",
      title: "Emma Watson",
      text: "Managing Director"
    },
    {
      img: "/Will-Smith.png",
      title: "Will Smith",
      text: "Product Designer"
    },
    {
      img: "/Tom-Cruise.png",
      title: "Tom-Cruise",
      text: "Founder & Chairman"
    },
    {
      img: "/Emma-Watson.png",
      title: "Emma Watson",
      text: "Managing Director"
    },
    {
      img: "/Will-Smith.png",
      title: "Will Smith",
      text: "Product Designer"
    },
    {
      img: "/Tom-Cruise.png",
      title: "Tom-Cruise",
      text: "Founder & Chairman"
    },
    {
      img: "/Emma-Watson.png",
      title: "Emma Watson",
      text: "Managing Director"
    },
    {
      img: "/Will-Smith.png",
      title: "Will Smith",
      text: "Product Designer"
    },
    {
      img: "/Tom-Cruise.png",
      title: "Tom-Cruise",
      text: "Founder & Chairman"
    },
    {
      img: "/Emma-Watson.png",
      title: "Emma Watson",
      text: "Managing Director"
    },
    {
      img: "/Will-Smith.png",
      title: "Will Smith",
      text: "Product Designer"
    },
    
  ]

  const [current, setCurrent] = useState(0)

  const cardsPerSlide = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  const totalSlides = Math.ceil(cards.length / cardsPerSlide);

  // Auto-slide every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides)
    }, 10000)
    return () => clearInterval(timer)
  }, [totalSlides])

  


  return (
    <div className="w-full h-auto mx-auto">
  {/* Slide container */}
  <div className="overflow-hidden">
    <div 
      className="flex transition-transform duration-700"
      style={{ transform: `translateX(-${current * 100}%)` }}
    >
      {Array.from({ length: totalSlides }).map((_, slideIndex) => (
        <div 
          key={slideIndex} 
          className="flex min-w-full gap-4 justify-center flex-wrap"
        >
          {cards
            .slice(slideIndex * cardsPerSlide, slideIndex * cardsPerSlide + cardsPerSlide)
            .map((card, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center bg-white rounded-2xl overflow-hidden gap-2
                           w-[90%] sm:w-[45%] lg:w-[30%] transition-transform"
              >
                {/* Image */}
                <div className="rounded-[4px] w-full">
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-full h-[400px] object-cover rounded-[4px]"
                  />
                </div>

                {/* Content */}
                <div className="w-full flex flex-col items-start px-2">
                  <h2 className="text-lg font-bold mt-2">{card.title}</h2>
                  <p className="text-sm text-gray-600 text-center">{card.text}</p>

                  <div className="flex items-start w-full py-3 gap-3">
                    <FaTwitter className="text-xl cursor-pointer hover:scale-110 transition" />
                    <FaInstagram className="text-xl cursor-pointer hover:scale-110 transition" />
                    <FaFacebook className="text-xl cursor-pointer hover:scale-110 transition" />
                  </div>
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  </div>

  {/* Dots */}
  <div className="flex justify-center mt-4 space-x-2">
    {Array.from({ length: totalSlides }).map((_, index) => (
      <button
        key={index}
        className={`w-3 h-3 rounded-full ${current === index ? 'bg-blue-600' : 'bg-gray-400'}`}
        onClick={() => setCurrent(index)}
      ></button>
    ))}
  </div>
</div>


  )
}

export default OurAgents