import Header from '@/components/common/header/Header'
import { CartLogo, HeartLogo } from '@/components/common/header/headerTools'
import UserLogoComp from '@/components/common/header/UserLogoComp'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    // <section className='w-[80%] flex flex-col items-center mb-[60px]'>
          
    //   <div className='w-full flex items-center gap-[16px] mt-4 pb-2 border-b border-[#e4e0e0] '>
    //     <Header/>
    //     <div className="h-[60px] flex gap-[16px] items-center">
    //       <HeartLogo/>
    //       <CartLogo/>
    //       <UserLogoComp/>
    //     </div>
    //   </div>
    //   <div className='w-full mt-14 flex flex-col gap-[60px]'>
    //     <div className='w-[130px] h-[21px] flex justify-between'>
    //       <Link href='/' className='text-gray-400' >Home</Link> /
    //       <div className='text-black'>404 Error</div>
    //     </div>
		// 		<div className='w-full h-[250px] flex flex-col justify-between items-center '>
		// 			<h1 className='font-medium text-[110px] leading-[115px] tracking-[3%] '>404 Not Found</h1>
		// 			<p className='text-[16px] leading-[24px] '>Your visited page not found. You may go home page</p>
		// 			<Link href='/'>
		// 				<button className='w-[254px] h-[56px] rounded-[4px] py-4 px-[48px] text-center bg-[#DB4444] text-white cursor-pointer'>Back to home page</button>
		// 			</Link>
					
		// 		</div>
					
    //     </div>

    // </section>

    <section className="w-[80%] max-w-[1200px] mx-auto flex flex-col items-center mb-20 px-4">
  {/* Header */}
  <div className="w-full flex items-center gap-4 mt-4 pb-2 border-b border-[#e4e0e0]">
    <Header />
    <div className="h-14 flex gap-4 items-center">
      <HeartLogo />
      <CartLogo />
      <UserLogoComp />
    </div>
  </div>

  {/* Breadcrumb */}
  <div className="w-full mt-14 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-start sm:justify-between items-center">
    <div className="flex gap-1 flex-wrap text-gray-400 text-sm sm:text-base">
      <Link href="/" className="hover:underline">Home</Link> /
      <span className="text-black font-medium">404 Error</span>
    </div>
  </div>

  {/* Main 404 Content */}
  <div className="w-full flex flex-col justify-center items-center text-center mt-20 gap-6">
    <h1 className="font-bold text-[80px] sm:text-[100px] md:text-[120px] leading-[1] tracking-[3%] text-red-600">
      404
    </h1>
    <p className="text-gray-700 text-base sm:text-lg md:text-xl">
      The page you are looking for does not exist. You may go back to the homepage.
    </p>
    <Link href="/">
      <button className="mt-4 bg-[#DB4444] text-white rounded-md px-8 py-3 text-base sm:text-lg hover:bg-[#b63535] transition">
        Back to Home
      </button>
    </Link>
  </div>
</section>

  )
}
