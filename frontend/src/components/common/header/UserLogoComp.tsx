// 'use client'
// import { on } from 'events'
// import Image from 'next/image'
// import React, { useEffect, useRef, useState } from 'react'
// import { CiUser } from 'react-icons/ci'

// const UserLogoComp = () => {
//     const [onRegister, setOnRegister] = useState(false)
// 		const menuRef = useRef<HTMLDivElement | null>(null);

//   // 🔹 Detect click outside the dropdown
//   useEffect(() => {
//     const handleClickOutside = (event:any) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setOnRegister(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <div ref={menuRef} className='relative '>
//       <CiUser  onClick={()=>setOnRegister(!onRegister)} className={`cursor-pointer ${onRegister && 'bg-[#DB4444] text-white w-[16px] h-[16px] rounded-full ' }`} />
// 				{
// 					onRegister && 
				
//       <div onClick={()=>setOnRegister(!onRegister)} className='w-[160px] h-[150px] bg-[#9e9999] text-white absolute right-0 top-5 p-2 flex flex-col justify-between'>
// 				<div className='w-auto flex gap-2'>
// 					<CiUser />
// 					<p className='text-[12px] '>Manage My Account</p>
// 				</div>

// 				<div className='w-auto flex gap-2'>
// 					<Image src='/icon-mallbag.png' width={18} height={18} alt='User'/>
// 					<p className='text-[12px] '>My Orders</p>
// 				</div>

// 				<div className='w-auto flex gap-2'>
// 					<Image src='/icon-cancel.png' width={18} height={18} alt='User'/>
// 					<p className='text-[12px] '>My cancellations</p>
// 				</div>

// 				<div className='w-auto flex gap-2'>
// 					<Image src='/icon-reviews.png' width={18} height={18} alt='User'/>
// 					<p className='text-[12px] '>My Reviews</p>
// 				</div>

// 				<div className='w-auto flex gap-2'>
// 					<Image src='/icon-logout.png' width={18} height={18} alt='User'/>
// 					<p className='text-[12px] '>Logout</p>
// 				</div>

//       </div>
// }
//     </div>
//   )
// }

// export default UserLogoComp

'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { CiUser } from 'react-icons/ci';

const UserLogoComp: React.FC = () => {
  const [onRegister, setOnRegister] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // ✅ Properly typed event handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOnRegister(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="relative">
      <CiUser
        onClick={() => setOnRegister(!onRegister)}
        className={`cursor-pointer ${
          onRegister ? 'bg-[#DB4444] text-white w-[16px] h-[16px] rounded-full' : ''
        }`}
      />

      {onRegister && (
        <div
          onClick={() => setOnRegister(!onRegister)}
          className="w-[160px] h-[150px] bg-[#9e9999] text-white absolute right-0 top-5 p-2 flex flex-col justify-between"
        >
          <Link href='/myAccount' className="flex gap-2">
            <CiUser />
            <p className="text-[12px]">Manage My Account</p>
          </Link>

          <div className="flex gap-2">
            <Image src="/icon-mallbag.png" width={18} height={18} alt="User" />
            <p className="text-[12px]">My Orders</p>
          </div>

          <div className="flex gap-2">
            <Image src="/icon-cancel.png" width={18} height={18} alt="User" />
            <p className="text-[12px]">My Cancellations</p>
          </div>

          <div className="flex gap-2">
            <Image src="/icon-reviews.png" width={18} height={18} alt="User" />
            <p className="text-[12px]">My Reviews</p>
          </div>

          <div className="flex gap-2">
            <Image src="/icon-logout.png" width={18} height={18} alt="User" />
            <p className="text-[12px]">Logout</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserLogoComp;
