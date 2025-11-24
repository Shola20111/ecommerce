"use client"
import Header from '@/components/common/header/Header'
import { CartLogo, HeartLogo } from '@/components/common/header/headerTools'
import UserLogoComp from '@/components/common/header/UserLogoComp'
import { useCard } from '@/context/CardContext'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc'

const ProductDetails = () => {
  const { cartItems, total } = useCard();
  return (
    <section className="w-[90%] lg:w-[80%] mx-auto flex flex-col items-center mb-16">
      {/* Header */}
      <div className="w-full flex items-center justify-between gap-4 mt-4 pb-2 border-b border-[#e4e0e0]">
        <Header />
        <div className="h-[60px] flex gap-4 items-center">
          <HeartLogo />
          <CartLogo />
          <UserLogoComp />
        </div>
      </div>


      <main className="w-full h-auto flex flex-col">

        <div className="flex flex-wrap gap-2 text-sm text-gray-500">
          <Link href="/account" className="hover:text-black">Account</Link> /
          <Link href="/my-account" className="hover:text-black">Gaming</Link> /
          <Link href="/checkout" className="text-black font-medium">Havic HV G-92 Gamepad</Link>
        </div>

        <div className='flex'>
          <section className="grid grid-cols-2 gap-4">
            <div className='grid grid-cols-1 gap-3'>
              <div className='w-[170px] h-[138px] bg-gray-300 '></div>
              <div className='w-[170px] h-[138px] bg-gray-300 '></div>
              <div className='w-[170px] h-[138px] bg-gray-300 '></div>
              <div className='w-[170px] h-[138px] bg-gray-300 '></div>
            </div>
            
            <div className='w-[500px] h-[600px] bg-gray-300 '></div>
          </section>

          <section className="w-full flex flex-col justify-start md:justify-center">
            right
          </section>
        </div>

      </main>
    </section>

  )
}

export default ProductDetails