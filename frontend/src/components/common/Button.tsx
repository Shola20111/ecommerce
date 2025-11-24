import React from 'react'
type ButtonProp = {
  text:string,
}
export default function Button({text}:ButtonProp) {
  return (
    <button className='flex justify-center items-center bg-[#DB4444] rounded-[4px] py-[10px] px-[30px] text-[#FAFAFA] text-[16px] leading-[24px] '>{text}</button>
  )
}
