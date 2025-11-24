'use client';
import { useCard } from "@/context/CardContext";
import Image from "next/image";
import Link from 'next/link'
import { CartLogo, HeartLogo } from "@/components/common/header/headerTools";
import UserLogoComp from "@/components/common/header/UserLogoComp";
import Header from "@/components/common/header/Header";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";


const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, total } = useCard();


  return (
    // <section className='w-[80%] flex flex-col items-center mb-[60px]'>

    //   <div className='w-full flex items-center gap-[16px] mt-4 pb-2 border-b border-[#e4e0e0] '>
    //     <Header />
    //     <div className="h-[60px] flex gap-[16px] items-center">
    //       <div>
    //         <HeartLogo/>
    //       </div>

    //       <CartLogo/>
    //       <UserLogoComp />
    //     </div>
    //   </div>
    //   <div className='w-full mt-14 flex flex-col gap-[60px]'>
    //     <div className='w-[130px] h-[21px] flex justify-between'>
    //       <Link href='/' className='text-gray-400' >Home</Link> /
    //       <Link href='/wishList' className='text-black'>Cart</Link>
    //     </div>

    //       {/* Header Row */}
    //       <div className="hidden md:flex items-center justify-between w-full h-[72px] text-[24px] font-semibold shadow px-4 uppercase">
    //         <p className="w-[260px] ">Products</p>
    //         <p className="md:w-40  flex justify-center items-center">Price</p>
    //         <p className="md:w-40  flex justify-center items-center">Quantity</p>
    //         <p className="md:w-40  flex justify-center items-center">Subtotal</p>
    //       </div>

    //       {/* Cart Items */}
    //       <div className="flex flex-col gap-8">
    //         {cartItems.length === 0 ? (
    //           <p className="text-gray-500 text-center mt-10">Your cart is empty.</p>
    //         ) : (
    //           cartItems.map((item) => (
    //             <div
    //               key={item.id}
    //               className="grid grid-cols-1 md:flex items-center justify-between w-full h-[102px] text-[15px] rounded-[4px] shadow  "
                  

    //             >
    //               {/* Product Info */}
    //               <div className="flex items-center w-[260px] pl-4 relative">
    //                 <Image
    //                   src={item.image!}
    //                   alt={item.name}
    //                   width={60}
    //                   height={60}
    //                   className="rounded-md"
    //                 />
    //                   <button
    //                     onClick={() => removeFromCart(item.id)}
    //                     className="text-white text-sm flex items-center justify-center hover:text-red-700 w-3 h-3 rounded-full bg-[red] absolute top-0 left-1"
    //                   >
    //                     x
    //                   </button>
    //                 <div>
    //                   <p className="font-medium">{item.name}</p>
                      
    //                 </div>
    //               </div>

    //               {/* Price (mobile-friendly) */}
    //               <div className="flex md:block justify-between items-center">
    //                 <p className="md:hidden font-semibold">Price:</p>
    //                 <p className="md:w-40 flex justify-center items-center ">${item.price}</p>
    //               </div>

    //               {/* Quantity */}
    //               <div className="flex md:block justify-between md:justify-start items-center">
    //                 <p className="md:hidden font-semibold">Qty:</p>
    //                 <div className="flex items-center gap-2  md:w-40 justify-center">
    //                   <div className="w-15 flex justify-center items-center gap-1 border rounded-[4px] ">
    //                     <span className="px-2">{item.quantity}</span>
    //                     <div className="flex flex-col-reverse ">
    //                       <button
    //                         onClick={() => updateQuantity(item.id, item.quantity - 1)}
    //                         className=" hover:bg-gray-100"
    //                       >
    //                         <VscChevronDown/>
    //                       </button>
    //                       <button
    //                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
    //                         className=" rounded hover:bg-gray-100"
    //                       >
    //                         <VscChevronUp/>
    //                       </button>
    //                     </div>
    //                   </div>
                      
                      
    //                 </div>
    //               </div>

    //               {/* Subtota for Item */}
    //               <div className="flex md:block justify-between md:justify-start items-center">
    //                 <p className="md:hidden font-semibold">Subtotal:</p>
    //                 <p className="font-medium md:w-40 flex justify-center items-center">
    //                   ${(item.price * item.quantity).toFixed(2)}
    //                 </p>
    //               </div>
    //             </div>
    //           ))
    //         )}
    //         <div className="flex justify-between h-[40px] w-full mt-5">
    //           <button className='bg-[#fff] py-2 px-10 rounded-[4px] border border-gray-200'>Return To Shop</button>
    //           <button className='bg-[#fff] py-2 px-10 rounded-[4px] border border-gray-200'>Update Cart</button>
    //         </div>
    //       </div>
          

    //       {/* Cart Total */}
    //       {cartItems.length > 0 && (
    //         <div className="w-full h-[324px] flex flex-col md:flex-row justify-end mt-6">
    //           <div className="flex justify-start gap-4 h-[40px] w-[70%] ">
    //             <button className='bg-[#fff] py-2 px-10 rounded-[4px] border border-gray-200'>Coupon Code</button>
    //             <button className='bg-[#DB4444] py-2 px-6 rounded-[4px]'>Apply Coupon</button>
    //           </div>
    //           <div className="w-full md:w-[30%] h-full bg-white border border-gray-200 p-4 rounded-lg shadow flex flex-col justify-between">
    //             <h1 className="font-bold text-[30px] ">Cart Total</h1>
    //             <div className="flex justify-between mb-2 pb-2 border-b border-b-gray-200">
    //               <p className="font-semibold">Subtotal:</p>
    //               <p>${total.toFixed(2)}</p>
    //             </div>
    //             <div className="flex justify-between mb-2 pb-2 border-b border-b-gray-200">
    //               <p>Shipping</p>
    //               <p>Free</p>
    //             </div>
    //             <div className="flex justify-between font-bold text-lg ">
    //               <p>Total:</p>
    //               <p>${total.toFixed(2)}</p>
    //             </div>
    //             <Link href='/checkout'>
    //               <button className="mt-4 mx-auto w-[200px] bg-[#DB4444] text-white py-2 rounded-md font-semibold hover:bg-[#b63535]">
    //                 Process to Checkout
    //               </button>
    //             </Link>
                
    //           </div>
    //         </div>
    //       )}
    //     </div>


    // </section>

    <section className="w-[90%] md:w-[80%] flex flex-col items-center mb-[60px] mx-auto">
  {/* Header Section */}
  <div className="w-full flex items-center justify-between gap-4 mt-4 pb-2 border-b border-[#e4e0e0]">
    <Header />
    <div className="h-[60px] flex gap-4 items-center">
      <HeartLogo />
      <CartLogo />
      <UserLogoComp />
    </div>
  </div>

  {/* Breadcrumb */}
  <div className="w-full mt-6 flex items-center gap-2 text-sm text-gray-500">
    <Link href="/" className="hover:text-black">Home</Link> /
    <Link href="/wishList" className="text-black font-medium">Cart</Link>
  </div>

  {/* Cart Content */}
  <div className="w-full mt-8 flex flex-col gap-6">
    {/* Header Row (Desktop only) */}
    <div className="hidden md:flex items-center justify-between w-full h-[72px] text-[18px] font-semibold shadow px-4 uppercase">
      <p className="w-[260px]">Products</p>
      <p className="md:w-40 text-center">Price</p>
      <p className="md:w-40 text-center">Quantity</p>
      <p className="md:w-40 text-center">Subtotal</p>
    </div>

    {/* Cart Items */}
    <div className="flex flex-col gap-4">
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center justify-between w-full p-4 text-[15px] rounded-lg shadow-sm border border-gray-100 bg-white"
          >
            {/* Product Info */}
            <div className="flex items-center w-full md:w-[260px] relative">
              <Image
                src={item.image!}
                alt={item.name}
                width={70}
                height={70}
                className="rounded-md"
              />
              <button
                onClick={() => removeFromCart(item.id)}
                className="absolute top-0 left-0 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full hover:bg-red-700"
              >
                ×
              </button>
              <div className="ml-3">
                <p className="font-medium">{item.name}</p>
              </div>
            </div>

            {/* Price */}
            <div className="flex justify-between md:block w-full md:w-40 mt-2 md:mt-0">
              <p className="md:hidden font-semibold">Price:</p>
              <p className="text-gray-700">${item.price}</p>
            </div>

            {/* Quantity */}
            <div className="flex justify-between md:block w-full md:w-40 mt-2 md:mt-0">
              <p className="md:hidden font-semibold">Qty:</p>
              <div className="flex items-center gap-2 justify-end md:justify-center">
                <div className="flex items-center gap-1 border rounded-md px-2 py-1">
                  <span className="text-sm">{item.quantity}</span>
                  <div className="flex flex-col-reverse">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="hover:text-red-600"
                    >
                      <VscChevronDown />
                    </button>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="hover:text-green-600"
                    >
                      <VscChevronUp />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtotal */}
            <div className="flex justify-between md:block w-full md:w-40 mt-2 md:mt-0">
              <p className="md:hidden font-semibold">Subtotal:</p>
              <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))
      )}
    </div>

    {/* Action Buttons */}
    <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6">
      <button className="bg-white py-2 px-8 rounded-md border border-gray-200 hover:bg-gray-100 text-sm">
        Return To Shop
      </button>
      <button className="bg-white py-2 px-8 rounded-md border border-gray-200 hover:bg-gray-100 text-sm">
        Update Cart
      </button>
    </div>

    {/* Cart Total Section */}
    {cartItems.length > 0 && (
      <div className="flex flex-col md:flex-row justify-between mt-8 gap-6">
        {/* Coupon Code */}
        <div className="flex gap-2 sm:gap-4 w-full md:w-[65%]">
          <input
            type="text"
            placeholder="Coupon Code"
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
          />
          <button className="bg-[#DB4444] text-white px-6 py-2 rounded-md hover:bg-[#b63535] text-sm">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total */}
        <div className="w-full md:w-[35%] bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
          <h1 className="font-bold text-[24px] mb-4">Cart Total</h1>
          <div className="flex justify-between mb-2 pb-2 border-b border-b-gray-200 text-sm">
            <p className="font-semibold">Subtotal:</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mb-2 pb-2 border-b border-b-gray-200 text-sm">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between font-bold text-base">
            <p>Total:</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <Link href="/cart/checkout">
            <button className="mt-5 w-full bg-[#DB4444] text-white py-2 rounded-md font-semibold hover:bg-[#b63535]">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    )}
  </div>
</section>

  )
}


export default Cart;
