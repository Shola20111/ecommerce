'use client'
import { CartItem, useCard } from "@/context/CardContext"
import Link from "next/link"
import { BsCart3 } from "react-icons/bs"
import { CiHeart } from "react-icons/ci"
import { ClickedCard } from "../../../../types"
 // ✅ import only — don’t redeclare

export const HeartLogo = () => {
  const { clickedCards }: { clickedCards: ClickedCard[] } = useCard();

  return (
    <div className="relative cursor-pointer">
      <Link href="/wishList">
        <CiHeart className="w-[25px] h-[25px]" />
      </Link>

      {clickedCards.length > 0 && (
        <div className="bg-[#DB4444] w-[11px] h-[11px] flex justify-center items-center text-[10px] text-white rounded-full absolute top-[0px] right-0">
          {clickedCards.length}
        </div>
      )}
    </div>
  );
};


export const CartLogo = () => {
  const { cartItems }:{cartItems: CartItem[] } = useCard();
  return (
    <div className="relative cursor-pointer">
      <Link href="/cart">
        <BsCart3 className={`w-[25px] h-[20px]`} />
      </Link>
      
      {cartItems.length > 0 && (
        <div className="bg-[#DB4444] w-[11px] h-[11px] flex justify-center items-center text-[10px] text-white rounded-full absolute top-[0px] right-0">
          {cartItems.length}
        </div>
      )}
    </div>

  )

}