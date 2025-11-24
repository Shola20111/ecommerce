import React from 'react'
type SubheaderProps = {
  subTitle: string;
  title: string;
};
export default function Subheader({subTitle, title}:SubheaderProps) {
  return (
    <div className=" flex flex-col w-auto md:w-auto h-auto md:h-full justify-between gap-2">
            <div className=" flex gap-2 items-center w-auto  h-[40px]">
              <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
              <div className="text-[16px] leading-[20px] font-semibold ml-2 md:ml-0 text-[#DB4444]">
                {subTitle}
              </div>
            </div>
            <div className="text-[24px] md:text-[36px] leading-[32px] md:leading-[48px] font-semibold tracking-[4%] text-[#000000]">
              {title}
            </div>
          </div>
  )
}
