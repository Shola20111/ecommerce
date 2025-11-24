import Header from '@/components/common/header/Header'
import { HeartLogo } from '@/components/common/header/headerTools'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import { CiHeart } from 'react-icons/ci'

export default function Contact() {
  return (
    // <section className='w-[80%] flex flex-col items-center mb-[60px]'>

    //   <div className='w-full flex items-center gap-[16px] mt-4 pb-2 border-b border-[#e4e0e0] '>
    //     <Header />
    //     <div className="h-[60px] flex gap-[16px] items-center">
    //       <HeartLogo />
    //       <BsCart3 className={`w-[25px] h-[20px]`} />
    //       <Image src='/user.png' width={18} height={18} alt='User' />
    //     </div>
    //   </div>
    //   <div className='w-full mt-14 flex flex-col gap-[60px]'>
    //     <div className='w-[130px] h-[21px] flex justify-between'>
    //       <Link href='/' className='text-gray-400' >Home</Link> /
    //       <Link href='/contact' className='text-black'>Contact</Link>
    //     </div>

    //     <div className='w-full flex justify-between h-[457px]'>
    //       <div className='w-[340px] h-full rounded[4px] flex flex-col justify-between px-10 py-14 shadow-[0_0_10px_rgba(0,0,0,0.5)]'>
    //         <div className=' flex flex-col gap-3'>
    //           <div className='flex gap-3 w-[135px] h-10 items-center'>
    //             <div className='w-10 backdrop-hue-rotate-180'>
    //               <Image src='/icons-phone.png' width={40} height={40} alt='Icon Phone' />
    //             </div>
    //             <div className='font-medium text-[16px] leading-6 text-[#000]'>Call To Us</div>
    //           </div>
    //           <div className='text-[14px] leading-[21px] text-[#000]'>
    //             We are available 24/7, 7 days a week.
    //           </div>
    //           <div className='text-[14px] leading-[21px] text-[#000] '>
    //             Phone: +8801611112222
    //           </div>
    //         </div>
    //         <div className='w-full border'></div>
    //         <div className=' flex flex-col gap-3 '>
    //           <div className='flex gap-3 w-[135px] h-10 items-center'>
    //             <div className='w-10 backdrop-hue-rotate-180'>
    //               <Image src='/icons-mail.png' width={40} height={40} alt='Email Phone' />
    //             </div>
    //             <div className='font-medium text-[16px] leading-6 text-[#000]'>Write To Us</div>
    //           </div>
    //           <div className='text-[14px] leading-[21px] text-[#000]'>
    //             Fill out our form and we will contact you within 24 hours.
    //           </div>
    //           <div className='text-[14px] leading-[21px] text-[#000] '>
    //             Emails: customer@exclusive.com
    //           </div>
    //           <div className='text-[14px] leading-[21px] text-[#000] '>
    //             Emails: support@exclusive.com
    //           </div>
    //         </div>
    //       </div>
    //       <div className='w-[710px] h-full rounded py-5 px-5 flex flex-col gap-5 shadow-[0_0_10px_rgba(0,0,0,0.5)]'>
    //         <div className='w-full flex gap-2'>

    //           <input className='bg-gray-200 flex-1 h-10 px-2' type="text" placeholder='Your Name' />


    //           <input className='bg-gray-200 flex-1 h-10 px-2' type="email" placeholder='Your Email' />


    //           <input className='bg-gray-200 flex-1 h-10 px-2' type="number" placeholder='your Phone' />

    //         </div>
    //         <div className='w-full h-full flex'>
    //           <textarea className='bg-gray-200 flex-1 ' name="text" id="text">Your Massage</textarea>
    //         </div>
    //         <div className='w-full flex justify-end mt-3'>
    //           <button className='px-10 py-2 bg-[#DB4444] text-[#FAFAFA] text-[16px] cursor-pointer'>
    //             Send
    //           </button>
    //         </div>
    //       </div>
    //     </div>

    //   </div>
    // </section>


    <section className="w-[90%] md:w-[80%] mx-auto flex flex-col items-center mb-[60px]">
  {/* Header Section */}
  <div className="w-full flex flex-wrap justify-between items-center gap-4 mt-4 pb-2 border-b border-[#e4e0e0]">
    <Header />
    <div className="h-[60px] flex gap-4 items-center">
      <HeartLogo />
      <BsCart3 className="w-6 h-5" />
      <Image src="/user.png" width={20} height={20} alt="User" />
    </div>
  </div>

  {/* Breadcrumb + Main Section */}
  <div className="w-full mt-10 flex flex-col gap-10 md:gap-[60px]">
    {/* Breadcrumb */}
    <div className="flex justify-start items-center text-sm sm:text-base gap-1">
      <Link href="/" className="text-gray-400 hover:text-gray-600">
        Home
      </Link>
      <span>/</span>
      <Link href="/contact" className="text-black font-medium">
        Contact
      </Link>
    </div>

    {/* Contact Container */}
    <div className="w-full flex flex-col lg:flex-row justify-between gap-8">
      {/* Contact Info */}
      <div className="w-full lg:w-[340px] h-auto rounded-[4px] flex flex-col justify-between p-6 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        {/* Call Section */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <div className="w-10">
              <Image src="/icons-phone.png" width={40} height={40} alt="Phone Icon" />
            </div>
            <div className="font-medium text-[16px] text-[#000]">Call To Us</div>
          </div>
          <p className="text-sm text-[#000] leading-6">
            We are available 24/7, 7 days a week.
          </p>
          <p className="text-sm text-[#000]">Phone: +8801611112222</p>
        </div>

        <div className="w-full border my-4"></div>

        {/* Email Section */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <div className="w-10">
              <Image src="/icons-mail.png" width={40} height={40} alt="Mail Icon" />
            </div>
            <div className="font-medium text-[16px] text-[#000]">Write To Us</div>
          </div>
          <p className="text-sm text-[#000] leading-6">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="text-sm text-[#000]">Emails: customer@exclusive.com</p>
          <p className="text-sm text-[#000]">Emails: support@exclusive.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full lg:w-[710px] h-auto rounded-[4px] py-6 px-5 flex flex-col gap-5 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        {/* Input Row */}
        <div className="w-full flex flex-col sm:flex-row gap-3">
          <input
            className="bg-gray-200 flex-1 h-10 px-2 rounded focus:outline-none"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="bg-gray-200 flex-1 h-10 px-2 rounded focus:outline-none"
            type="email"
            placeholder="Your Email"
          />
          <input
            className="bg-gray-200 flex-1 h-10 px-2 rounded focus:outline-none"
            type="number"
            placeholder="Your Phone"
          />
        </div>

        {/* Message Area */}
        <div className="w-full">
          <textarea
            className="bg-gray-200 w-full min-h-[150px] p-3 rounded resize-none focus:outline-none"
            name="message"
            placeholder="Your Message"
          ></textarea>
        </div>

        {/* Button */}
        <div className="w-full flex justify-end mt-3">
          <button className="px-10 py-2 bg-[#DB4444] text-[#FAFAFA] text-[16px] rounded hover:bg-[#c53c3c] transition-colors duration-300">
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
