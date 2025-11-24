"use client"
import Header from '@/components/common/header/Header'
import { CartLogo, HeartLogo } from '@/components/common/header/headerTools'
import UserLogoComp from '@/components/common/header/UserLogoComp'
import { useCard } from '@/context/CardContext'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc'

const Checkout = () => {
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

  {/* NOTE: use 1 column up to lg, then 2 columns on large screens */}
  <main className="w-full h-auto mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Billing Form Section */}
    <section className="flex flex-col gap-8">
      {/* Breadcrumb */}
      <div className="flex flex-wrap gap-2 text-sm text-gray-500">
        <Link href="/account" className="hover:text-black">Account</Link> /
        <Link href="/my-account" className="hover:text-black">My Account</Link> /
        <Link href="/product" className="hover:text-black">Product</Link> /
        <Link href="/cart" className="hover:text-black">View Cart</Link> /
        <Link href="/checkout" className="text-black font-medium">Checkout</Link>
      </div>

      <h2 className="text-black text-[26px] md:text-[30px] lg:text-[36px] leading-[30px] font-semibold mt-4">
        Billing Details
      </h2>

      <form className="flex flex-col gap-6">
        {/* First Name */}
        <div className="flex flex-col gap-2 max-w-full">
          <label htmlFor="firstname" className="text-[16px] font-medium">
            First Name <span className="text-red-500 text-sm">*</span>
          </label>
          {/* fluid width: full on mobile/tablet, constrained on large */}
          <input
            type="text"
            id="firstname"
            className="bg-[#f5f5f5] h-12 w-full lg:max-w-[470px] rounded-md px-3 outline-none"
          />
        </div>

        {/* Company Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="companyName" className="text-[16px] font-medium">Company Name</label>
          <input
            type="text"
            id="companyName"
            className="bg-[#f5f5f5] h-12 w-full lg:max-w-[470px] rounded-md px-3 outline-none"
          />
        </div>

        {/* Street Address */}
        <div className="flex flex-col gap-2">
          <label htmlFor="address" className="text-[16px] font-medium">
            Street Address <span className="text-red-500 text-sm">*</span>
          </label>
          <input
            type="text"
            id="address"
            className="bg-[#f5f5f5] h-12 w-full lg:max-w-[470px] rounded-md px-3 outline-none"
          />
        </div>

        {/* Apartment */}
        <div className="flex flex-col gap-2">
          <label htmlFor="apartment" className="text-[16px] font-medium">
            Apartment, floor, etc. (optional)
          </label>
          <input
            type="text"
            id="apartment"
            className="bg-[#f5f5f5] h-12 w-full lg:max-w-[470px] rounded-md px-3 outline-none"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label htmlFor="phoneNumber" className="text-[16px] font-medium">
            Phone Number <span className="text-red-500 text-sm">*</span>
          </label>
          <input
            type="text"
            id="phoneNumber"
            className="bg-[#f5f5f5] h-12 w-full lg:max-w-[470px] rounded-md px-3 outline-none"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-[16px] font-medium">
            Email Address <span className="text-red-500 text-sm">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="bg-[#f5f5f5] h-12 w-full lg:max-w-[470px] rounded-md px-3 outline-none"
          />
        </div>

        {/* Save Info */}
        <div className="flex items-start gap-2">
          <input type="checkbox" className="mt-1 accent-red-500" defaultChecked />
          <p className="text-[14px] text-black leading-6">
            Save this information for faster checkout next time
          </p>
        </div>
      </form>
    </section>

    {/* Order Summary Section */}
    <section className="w-full flex flex-col justify-start md:justify-center">
      <div className="flex flex-col gap-6 w-full lg:pl-8">
        {/* Cart Items */}
        <div className="flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between text-[15px]">
                <div className="flex items-center gap-3 min-w-0">
                  <Image
                    src={item.image!}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-md flex-shrink-0"
                  />
                  <p className="font-medium truncate max-w-[220px]">{item.name}</p>
                </div>
                <p className="font-medium ml-4">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))
          )}
        </div>

        {/* Totals */}
        {cartItems.length > 0 && (
          <div className="flex flex-col gap-2 border-t pt-4">
            <div className="flex justify-between text-sm">
              <p className="font-semibold">Subtotal:</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-sm">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <p>Total:</p>
              <p>${total.toFixed(2)}</p>
            </div>
          </div>
        )}

        {/* Payment Methods */}
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="flex items-center gap-2">
              <input type="radio" name="payment" />
              <p className="text-[16px]">Bank</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Image src="/banks-logo/Bkash.png" width={42} height={28} alt="Bkash" />
              <Image src="/banks-logo/Visa.png" width={42} height={28} alt="Visa" />
              <Image src="/banks-logo/Mastercard.png" width={42} height={28} alt="Mastercard" />
              <Image src="/banks-logo/Nagad.png" width={42} height={28} alt="Nagad" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input type="radio" name="payment" className="accent-black" defaultChecked />
            <p className="text-[16px]">Cash on delivery</p>
          </div>
        </div>

        {/* Coupon + Order Button */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button className="bg-white py-2 px-6 rounded-md border border-gray-200 flex-1 hover:bg-gray-100">
            Coupon Code
          </button>
          <button className="bg-[#DB4444] text-white py-2 px-6 rounded-md hover:bg-[#b63535]">
            Apply Coupon
          </button>
        </div>

        <Link href="/checkout" className="mt-4 w-full">
          <button className="w-full bg-[#DB4444] text-white py-3 rounded-md font-semibold hover:bg-[#b63535]">
            Place Order
          </button>
        </Link>
      </div>
    </section>
  </main>
</section>

  )
}

export default Checkout