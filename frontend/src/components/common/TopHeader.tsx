"use client"
import React, { useEffect, useState, useRef } from 'react'
import { VscChevronDown } from 'react-icons/vsc'

const TopHeader = () => {
	const [open, setOpen] = useState(false)
  const [lang, setLang] = useState('Englsh')
  const dropdownRef = useRef<HTMLDivElement>(null);

 
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuClick = (menu: string) => {
    setLang(menu); 
    setOpen(false); 
  };

	
  return (
    <div className='w-full bg-[#000] text-[#fff] mx-auto flex justify-end items-center pr-[5%] md:pr-[10%] py-2 '>
        <div className='w-full h-full flex justify-start md:justify-center items-center gap-1 md:gap-2'>
            <div className=' '>
                <p className='text-[10px] text-center md:text-[14px] leading-[21px] font-poppins'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            </div>
                <big 
                    className='font-semibold hover:underline font-poppins text-[10px] md:text-[18px]' 
                    >
                    ShopNow
                </big>
        </div>
        <div className=' h-full flex justify-center relative cursor-pointer' ref={dropdownRef}>
            <button onClick={()=>setOpen(!open)} className=' flex items-center justify-end gap-1.5 px-2 font-poppins'>
              
                <p>{lang}</p>
              <VscChevronDown className={`${open&& 'rotate-[180deg]'}`}/>
            </button>
            
							{
								open &&
							
                <div  className='flex flex-col justify-start text-[20px] bg-[#fff] text-[#000] h-auto w-[200px] gap-3 p-2 absolute top-[48px] left-[-100px] z-50' style={{boxShadow:'0 0 10px rgba(0, 0, 0, 0.5)'}}>
                  {["English", "Arabic", "French"].map((menu) => (
                    <button
                      key={menu}
                      onClick={()=>handleMenuClick(menu)}
                      className=''
                    >
                      {menu}
                    </button>
                   ))}
                </div>								
							}
        </div>
    </div>
  )
}

export default TopHeader