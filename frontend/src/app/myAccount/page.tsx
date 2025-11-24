// 'use client'
// import Header from '@/components/common/header/Header'
// import { CartLogo, HeartLogo } from '@/components/common/header/headerTools'
// import UserLogoComp from '@/components/common/header/UserLogoComp'
// import BookAddress from '@/components/common/my-account/BookAddress'
// import MyCancellations from '@/components/common/my-account/MyCancellations'
// import MyPaymentOptions from '@/components/common/my-account/MyPaymentOptions'
// import MyProfile from '@/components/common/my-account/MyProfile'
// import MyReturns from '@/components/common/my-account/MyReturns'
// import { useAuth } from '@/context/AuthContext'
// import Link from 'next/link'
// import React, { useState } from 'react'


// const MyAccount = () => {
//   const { user, loading } = useAuth();
//   const [activeModal, setActiveModal] = useState("");

//   // ⛔ Don't render page if user or token hasn't loaded yet
//   if (loading) {
//     return (
//       <div className="w-full h-[50vh] flex items-center justify-center text-lg">
//         Loading your account...
//       </div>
//     );
//   }

//   // ⛔ If no user (token invalid or logged out)
//   if (!user) {
//     return (
//       <div className="w-full h-[50vh] flex flex-col items-center justify-center gap-4">
//         <p className="text-lg">You are not logged in.</p>
//         <Link
//           href="/login"
//           className="px-4 py-2 bg-red-500 text-white rounded-md"
//         >
//           Login
//         </Link>
//       </div>
//     );
//   }
//   return (

//     <section className="w-[90%] lg:w-[80%] mx-auto flex flex-col items-center mb-16">
//       {/* Top Header */}
//       <div className="w-full flex items-center justify-between gap-4 mt-4 pb-2 border-b border-[#e4e0e0]">
//         <Header />
//         <div className="h-[60px] flex gap-4 items-center">
//           <HeartLogo />
//           <CartLogo />
//           <UserLogoComp />
//         </div>
//       </div>

//       {/* Main Content */}
//       <main className="w-full h-auto mt-10 flex flex-col gap-10">
//         {/* Breadcrumb + Welcome Section */}
//         <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//           <div className="flex flex-wrap gap-2 text-sm text-gray-500">
//             <Link href="/account" className="hover:text-black">
//               Home
//             </Link>
//             /
//             <Link href="/checkout" className="text-black font-medium">
//               My Account
//             </Link>
//           </div>
//           <div className="flex gap-2 text-sm md:text-base">
//             <p>Welcome!</p>
//             <p className="text-red-500 font-semibold">{user?.name || "Guest"}!</p>
//             <p>Email: {user?.email}</p>
//           </div>

//         </section>

//         {/* Dashboard Layout */}
//         <section className="w-full flex flex-col lg:flex-row justify-between gap-10">
//           {/* Sidebar Navigation */}
//           <aside className="flex flex-col gap-6 w-full md:w-[60%] lg:w-[30%] border-b lg:border-b-0 lg:border-r border-gray-200 pb-6 lg:pb-0">
//             {/* Manage Account */}
//             <div className="flex flex-col gap-4">
//               <h3 className="font-bold text-lg">Manage My Account</h3>
//               <div className="ml-4 flex flex-col gap-3 text-sm md:text-base">
//                 <p
//                   onClick={() => setActiveModal("profile")}
//                   className={`cursor-pointer transition hover:text-red-500 ${activeModal === "profile" ? "text-red-500 font-medium" : ""
//                     }`}
//                 >
//                   My Profile
//                 </p>
//                 <p
//                   onClick={() => setActiveModal("addressBook")}
//                   className={`cursor-pointer transition hover:text-red-500 ${activeModal === "addressBook" ? "text-red-500 font-medium" : ""
//                     }`}
//                 >
//                   Address Book
//                 </p>
//                 <p
//                   onClick={() => setActiveModal("payment")}
//                   className={`cursor-pointer transition hover:text-red-500 ${activeModal === "payment" ? "text-red-500 font-medium" : ""
//                     }`}
//                 >
//                   My Payment Options
//                 </p>
//               </div>
//             </div>

//             {/* My Orders */}
//             <div className="flex flex-col gap-4">
//               <h3 className="font-bold text-lg">My Orders</h3>
//               <div className="ml-4 flex flex-col gap-3 text-sm md:text-base">
//                 <p
//                   onClick={() => setActiveModal("return")}
//                   className={`cursor-pointer transition hover:text-red-500 ${activeModal === "return" ? "text-red-500 font-medium" : ""
//                     }`}
//                 >
//                   My Returns
//                 </p>
//                 <p
//                   onClick={() => setActiveModal("cancellation")}
//                   className={`cursor-pointer transition hover:text-red-500 ${activeModal === "cancellation" ? "text-red-500 font-medium" : ""
//                     }`}
//                 >
//                   My Cancellations
//                 </p>
//               </div>
//             </div>

//             {/* Wishlist */}
//             <Link
//               href="/wishList"
//               className="font-bold text-lg cursor-pointer hover:text-red-500 transition"
//             >
//               My Wishlist
//             </Link>
//           </aside>

//           {/* Main Display / Content Section */}
//           <div className="w-full lg:w-[68%] flex flex-col">
//             {activeModal === "profile" && <MyProfile />}
//             {activeModal === "addressBook" && <BookAddress />}
//             {activeModal === "payment" && <MyPaymentOptions />}
//             {activeModal === "return" && <MyReturns />}
//             {activeModal === "cancellation" && <MyCancellations />}
//           </div>
//         </section>
//       </main>
//     </section>

//   )
// }

// export default MyAccount

'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/common/header/Header'
import { CartLogo, HeartLogo } from '@/components/common/header/headerTools'
import UserLogoComp from '@/components/common/header/UserLogoComp'
import MyProfile from '@/components/common/my-account/MyProfile'
import BookAddress from '@/components/common/my-account/BookAddress'
import MyPaymentOptions from '@/components/common/my-account/MyPaymentOptions'
import MyReturns from '@/components/common/my-account/MyReturns'
import MyCancellations from '@/components/common/my-account/MyCancellations'
import { useAuth } from '@/context/AuthContext'

const MyAccountPage = () => {
  const { user, loading } = useAuth()
  const [activeModal, setActiveModal] = useState('profile')

  if (loading) {
    return (
      <div className="w-full h-[50vh] flex items-center justify-center text-lg">
        Loading your account...
      </div>
    )
  }

  if (!user) {
    return (
      <div className="w-full h-[50vh] flex flex-col items-center justify-center gap-4">
        <p className="text-lg">You are not logged in.</p>
        <Link
          href="/login"
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Login
        </Link>
      </div>
    )
  }

  return (
    <section className="w-[90%] lg:w-[80%] mx-auto flex flex-col items-center mb-16">
      {/* Top Header */}
      <div className="w-full flex items-center justify-between gap-4 mt-4 pb-2 border-b border-[#e4e0e0]">
        <Header />
        <div className="h-[60px] flex gap-4 items-center">
          <HeartLogo />
          <CartLogo />
          <UserLogoComp />
        </div>
      </div>

      {/* Main Content */}
      <main className="w-full h-auto mt-10 flex flex-col gap-10">
        {/* Breadcrumb + Welcome */}
        <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-wrap gap-2 text-sm text-gray-500">
            <Link href="/account" className="hover:text-black">
              Home
            </Link>
            /
            <Link href="/checkout" className="text-black font-medium">
              My Account
            </Link>
          </div>
          <div className="flex gap-2 text-sm md:text-base">
            <p>Welcome!</p>
            <p className="text-red-500 font-semibold">{user?.name || 'Guest'}!</p>
            <p>Email: {user?.email}</p>
          </div>
        </section>

        {/* Dashboard Layout */}
        <section className="w-full flex flex-col lg:flex-row justify-between gap-10">
          {/* Sidebar Navigation */}
          <aside className="flex flex-col gap-6 w-full md:w-[60%] lg:w-[30%] border-b lg:border-b-0 lg:border-r border-gray-200 pb-6 lg:pb-0">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-lg">Manage My Account</h3>
              <div className="ml-4 flex flex-col gap-3 text-sm md:text-base">
                <p
                  onClick={() => setActiveModal('profile')}
                  className={`cursor-pointer transition hover:text-red-500 ${
                    activeModal === 'profile' ? 'text-red-500 font-medium' : ''
                  }`}
                >
                  My Profile
                </p>
                <p
                  onClick={() => setActiveModal('addressBook')}
                  className={`cursor-pointer transition hover:text-red-500 ${
                    activeModal === 'addressBook' ? 'text-red-500 font-medium' : ''
                  }`}
                >
                  Address Book
                </p>
                <p
                  onClick={() => setActiveModal('payment')}
                  className={`cursor-pointer transition hover:text-red-500 ${
                    activeModal === 'payment' ? 'text-red-500 font-medium' : ''
                  }`}
                >
                  My Payment Options
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-lg">My Orders</h3>
              <div className="ml-4 flex flex-col gap-3 text-sm md:text-base">
                <p
                  onClick={() => setActiveModal('return')}
                  className={`cursor-pointer transition hover:text-red-500 ${
                    activeModal === 'return' ? 'text-red-500 font-medium' : ''
                  }`}
                >
                  My Returns
                </p>
                <p
                  onClick={() => setActiveModal('cancellation')}
                  className={`cursor-pointer transition hover:text-red-500 ${
                    activeModal === 'cancellation' ? 'text-red-500 font-medium' : ''
                  }`}
                >
                  My Cancellations
                </p>
              </div>
            </div>

            <Link
              href="/wishList"
              className="font-bold text-lg cursor-pointer hover:text-red-500 transition"
            >
              My Wishlist
            </Link>
          </aside>

          {/* Main Content */}
          <div className="w-full lg:w-[68%] flex flex-col">
            {activeModal === 'profile' && <MyProfile />}
            {activeModal === 'addressBook' && <BookAddress />}
            {activeModal === 'payment' && <MyPaymentOptions />}
            {activeModal === 'return' && <MyReturns />}
            {activeModal === 'cancellation' && <MyCancellations />}
          </div>
        </section>
      </main>
    </section>
  )
}

export default MyAccountPage
