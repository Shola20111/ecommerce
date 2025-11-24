'use client'
import { Facebook, SendHorizontal } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { AiOutlineCopyright } from 'react-icons/ai'
import { CiInstagram, CiTwitter } from 'react-icons/ci'

import { TfiLinkedin } from 'react-icons/tfi'
import { TiSocialFacebook } from 'react-icons/ti'

const Footer = () => {
const pathname = usePathname()
  // const [activeKey, setActiveKey] = useState(false)
  return (
    <div className='w-full h-auto lg:h-[440px] bg-[#000] pt-4 flex flex-col justify-between items-center'>
      <div className='w-[80%] h-auto gap-5 lg:h-[236px] flex flex-col md:grid grid-cols-2 lg:flex lg:flex-row justify-between my-auto' >
        <div className='w-[217px] h-[188px] flex flex-col gap-3'>
          <h1 className='text-[24px] font-extrabold leading-[24px] tracking-[3%] text-[#fafafa]'>Exclusive</h1>
          <h5 className='leading-[28px] text-[20px] font-medium text-[#fafafa]  '>Subscribe</h5>
          <p className='text-[16px] leading-[24px] text-[#fafafa] '>Get 10% off your first order</p>
          <div className='w-[220px] border-[3px] border-[#797777] flex'>
            <input type="text" placeholder='Enter your email' className='w-[170px] text-[16px] leading-[24px] text-[#fafafa] py-[12px] pl-[16px] outline-0 bg-transparent ' />
            <SendHorizontal size={40} className='text-[#797777]' />
          </div>
        </div>
        <div className='w-[175px] h-[188px] flex flex-col gap-3'>
          <h5 className='leading-[28px] text-[20px] font-medium text-[#fafafa]  '>Support</h5>
          <p className='text-[16px] leading-[24px] text-[#fafafa] '>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
          <p className='text-[16px] leading-[24px] text-[#fafafa] '>exclusive@gmail.com</p>
          <p className='text-[16px] leading-[24px] text-[#fafafa] '>+88015-88888-9999</p>
        </div>
        <div className='w-[123px] h-[188px] flex flex-col gap-3'>
          <h5 className='leading-[28px] text-[20px] font-medium text-[#fafafa]  '>Account</h5>
          <Link href='/myAccount' >
            <p className='text-[16px] leading-[24px] text-[#fafafa] '>My Account</p>
          </Link>
          
          
          <div className='flex'>
            <Link href='/login' >
              <span className={`${pathname === '/login' && 'underline'} text-[16px] leading-[24px] text-[#fafafa] `}>Login</span>
            </Link> 
            <span className={`${pathname === '/register' && 'underline'} text-[16px] leading-[24px] text-[#fafafa] mr-1`}>/</span> 
            <Link href='/register'>
              <span className='text-[16px] leading-[24px] text-[#fafafa] '>Register</span>
            </Link>
          </div>
          <Link href="/cart">
            <p className='text-[16px] leading-[24px] text-[#fafafa] '>Cart</p>
          </Link>
          
          <Link href='/wishList' >
            <p className={`${pathname === '/login' && 'underline'} text-[16px] leading-[24px] text-[#fafafa] `}>Wishlist</p>
          </Link>
          
          <p className='text-[16px] leading-[24px] text-[#fafafa] '>Shop</p>
        </div>
        <div className='w-[109px] h-[188px] flex flex-col gap-3'>
          <h5 className='leading-[28px] text-[20px] font-medium text-[#fafafa]  '>Quick Link</h5>
          <p className='text-[16px] leading-[24px] text-[#fafafa] '>Private Policy</p>
          <p className='text-[16px] leading-[24px] text-[#fafafa] '>Terms of Use
          </p>
          <p className='text-[16px] leading-[24px] text-[#fafafa] '>FAQ</p>
          <Link href='/contact' >
            <p className='text-[16px] leading-[24px] text-[#fafafa] '>Contact</p>
          </Link>
        </div>
        <div className='w-[198px] h-auto flex flex-col gap-3'>
          <h5 className='leading-[28px] text-[20px] font-medium text-[#fafafa]  '>Download App</h5>
          <p className='text-[12px] leading-[18px] opacity-[70%] text-[#fafafa] '>Save $3 with App New User Only</p>
          <div className='flex gap-0.5'>
            <div className='w-[80px] h-[80px] flex justify-center items-center'>
              <Image src='/Qrcode.png' width={76} height={76} alt='Qrcode' className='w-full h-full'/>
            </div>
            <div className='flex flex-col gap-0.5'>
              <div className='w-[110px] h-[40px] flex justify-center items-center '>
                <Image src='/play-store.png' width={104} height={30} alt='Play Store' className='w-full h-full'/>
              </div>
              <div className='w-[110px] h-[40px] flex justify-center items-center '>
                <Image src='/appstore.png' width={104} height={30} alt='Apple Store' className='w-full h-full'/>
              </div>
            </div>
          </div>
          <div className='flex gap-6 pl-2'>
            <div>
              <TiSocialFacebook className='w-[15px] h-[20px] text-white'/>
            </div>
            <div>
              <CiTwitter className='w-[15px] h-[20px] text-white'/>
            </div>
            <div>
              <CiInstagram className='w-[15px] h-[20px] text-white'/>
            </div>
            <div>
              <TfiLinkedin className='w-[15px] h-[20px] text-white'/>
            </div>
          </div>
        </div>
        
        
      </div>

      <div className='w-full h-[40px] flex justify-center gap-1 items-center text-white opacity-[20%] border-t'>
        <div className='w-6 h-6 rounded-full flex justify-center items-center'>
          <AiOutlineCopyright className='w-4 h-4 ' />
        </div>
        <div className='text-[16px] leading-[24px]  '>
          Copyright Rimel 2022. All right reserved
        </div>
      </div>

    </div>
  )
}

export default Footer