import React from 'react'

type NavbuttonProp = {
    text:string,
}
const Navbutton = ({text}:NavbuttonProp) => {
  return (
    <div className='text-[15px] lg:text-[20px] '>
      {text}
    </div>
  )
}

export default Navbutton
