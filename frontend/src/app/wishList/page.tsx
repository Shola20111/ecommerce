// 'use client';
// import Header from "@/components/common/header/Header";
// import { CartLogo, HeartLogo } from "@/components/common/header/headerTools";
// import UserLogoComp from "@/components/common/header/UserLogoComp";
// import JustForYou from "@/components/modules/wish-list/JustForYou";
// import { useCard } from "@/context/CardContext";
// import Image from "next/image";
// import Link from "next/link";
// import { BsCart3 } from "react-icons/bs";
// import { RiDeleteBin6Line } from "react-icons/ri";

// const WishList = () => {
//   const { removeCards, clickedCards, isActive, setIsActive }: any = useCard();

//   return (
//     <section className='w-[80%] flex flex-col items-center mb-[60px]'>

//       <div className='w-full flex items-center gap-[16px] mt-4 pb-2 border-b border-[#e4e0e0] '>
//         <Header />
//         <div className="h-[60px] flex gap-[16px] items-center">
//           <div>
//             <HeartLogo/>
//           </div>

//           <CartLogo/>
//           <UserLogoComp />
//         </div>
//       </div>
//       <div className='w-full mt-14 flex flex-col gap-[60px]'>
//         <div className='w-[130px] h-[21px] flex justify-between'>
//           <Link href='/' className='text-gray-400' >Home</Link> /
//           <Link href='/wishList' className='text-black'>Wishlist</Link>
//         </div>

//         <div className="mt-6 flex flex-col gap-20">
//           <section>
//             <div className="w-full flex justify-between items-center mb-10">
//               <h2 className="font-bold text-lg">Wishlst ({clickedCards.length})</h2>
//               <button className="border w-[150px] rounded-[4px] py-1 ">
//                 Move All To Bag
//               </button>
//             </div>

//             {clickedCards.length === 0 ? (
//               <p className="text-gray-500">No product clicked yet.</p>
//             ) : (

//               <main
//                 className="flex overflow-x-auto gap-3 scrollbar-hide scroll-smooth"
//               >
//                 {clickedCards.map((product:any) => (
//                   <section key={product.id} className="min-w-[260px] max-w-[270px] h-[350px] flex flex-col">
//                     <div
//                       onMouseEnter={() => setIsActive(product.id)}
//                       onMouseLeave={() => setIsActive(null)}
//                       className="w-full h-[250px] flex justify-center items-center rounded-[4px] bg-[#f5f5f5] relative"
//                     >
//                       <div className="w-[172px] h-[152px] flex justify-center items-center">
//                         <Image src={product.image} width={172} height={152} alt={product.name} className="w-[85%] h-[86%]" />

//                         {isActive === product.id && (
//                           <div
//                             // onClick={() => toggleCard(product)} // 👈 trigger duplication on click
//                             className="w-full h-[41px] rounded-b-4 bg-[#000] text-[#fff] text-[16px] leading-[24px] font-medium flex justify-center items-center gap-2 absolute right-0 left-0 bottom-0 cursor-pointer"
//                           >
//                             <BsCart3 className={`w-[25px] h-[20px]`} />
//                             <div>Add to Cart</div>
//                           </div>
//                         )}
//                       </div>


//                       <div className="bg-[#DB4444] w-[55px] h-[26px] rounded-[4px] flex justify-center items-center absolute left-2 top-2">
//                         <p className="text-white">{product.discount}</p>
//                       </div>


//                       <div className="flex flex-col justify-center items-center gap-2 absolute top-10 right-4">
//                         <div className="w-[25px] h-[25px] bg-white flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200">
//                           <RiDeleteBin6Line
//                             onClick={() => removeCards(product.id)}
//                             size={20} />
//                         </div>
//                       </div>
//                     </div>


//                     <div className="h-auto flex flex-col gap-[8px] mt-2">
//                       <h4 className="text-[16px] leading-[24px] font-medium">
//                         {product.name}
//                       </h4>
//                       <div className="flex w-[85px] items-center text-[16px] gap-[12px]">
//                         <p className="text-[red]">${product.price}</p>
//                         <p className="line-through text-gray-500">${product.oldPrice}</p>
//                       </div>
//                       {/* <StarsComp /> */}
//                     </div>

//                   </section>
//                 ))}

//               </main>
//             )}
//           </section>
          

          
//           <div>
//             <JustForYou/>
//           </div>
//         </div>
//       </div>
//     </section>



//   );
// };

// export default WishList;


'use client';

import Header from "@/components/common/header/Header";
import { CartLogo, HeartLogo } from "@/components/common/header/headerTools";
import UserLogoComp from "@/components/common/header/UserLogoComp";
import JustForYou from "@/components/modules/wish-list/JustForYou";
import { useCard } from "@/context/CardContext";
import Image from "next/image";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import React from "react";

const WishList: React.FC = () => {
  // ✅ Type-safe destructure from context
  const { removeCards, clickedCards, isActive, setIsActive } = useCard();

  return (
    // <section className="w-[80%] flex flex-col items-center mb-[60px]">
    //   {/* Header section */}
    //   <div className="w-full flex items-center gap-[16px] mt-4 pb-2 border-b border-[#e4e0e0] ">
    //     <Header />
    //     <div className="h-[60px] flex gap-[16px] items-center">
    //       <div>
    //         <HeartLogo />
    //       </div>
    //       <CartLogo />
    //       <UserLogoComp />
    //     </div>
    //   </div>

    //   {/* Breadcrumb */}
    //   <div className="w-full mt-14 flex flex-col gap-[60px]">
    //     <div className="w-[130px] h-[21px] flex justify-between">
    //       <Link href="/" className="text-gray-400">
    //         Home
    //       </Link>{" "}
    //       /
    //       <Link href="/wishList" className="text-black">
    //         Wishlist
    //       </Link>
    //     </div>

    //     {/* Wishlist Section */}
    //     <div className="mt-6 flex flex-col gap-20">
    //       <section>
    //         <div className="w-full flex justify-between items-center mb-10">
    //           <h2 className="font-bold text-lg">
    //             Wishlist ({clickedCards.length})
    //           </h2>
    //           <button className="border w-[150px] rounded-[4px] py-1 ">
    //             Move All To Bag
    //           </button>
    //         </div>

    //         {clickedCards.length === 0 ? (
    //           <p className="text-gray-500">No product clicked yet.</p>
    //         ) : (
    //           <main className="flex overflow-x-auto gap-3 scrollbar-hide scroll-smooth">
    //             {/* ✅ Properly typed clickedCards */}
    //             {clickedCards.map((product) => (
    //               <section
    //                 key={product.id}
    //                 className="min-w-[260px] max-w-[270px] h-[350px] flex flex-col"
    //               >
    //                 <div
    //                   onMouseEnter={() => setIsActive(product.id)}
    //                   onMouseLeave={() => setIsActive(null)}
    //                   className="w-full h-[250px] flex justify-center items-center rounded-[4px] bg-[#f5f5f5] relative"
    //                 >
    //                   <div className="w-[172px] h-[152px] flex justify-center items-center">
    //                     <Image
    //                       src={product.image!}
    //                       width={172}
    //                       height={152}
    //                       alt={product.name}
    //                       className="w-[85%] h-[86%]"
    //                     />

    //                     {isActive === product.id && (
    //                       <div
    //                         className="w-full h-[41px] rounded-b-4 bg-[#000] text-[#fff] text-[16px] leading-[24px] font-medium flex justify-center items-center gap-2 absolute right-0 left-0 bottom-0 cursor-pointer"
    //                       >
    //                         <BsCart3 className="w-[25px] h-[20px]" />
    //                         <div>Add to Cart</div>
    //                       </div>
    //                     )}
    //                   </div>

    //                   <div className="bg-[#DB4444] w-[55px] h-[26px] rounded-[4px] flex justify-center items-center absolute left-2 top-2">
    //                     <p className="text-white">{product.discount}</p>
    //                   </div>

    //                   <div className="flex flex-col justify-center items-center gap-2 absolute top-10 right-4">
    //                     <div className="w-[25px] h-[25px] bg-white flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200">
    //                       <RiDeleteBin6Line
    //                         onClick={() => removeCards(product.id)}
    //                         size={20}
    //                       />
    //                     </div>
    //                   </div>
    //                 </div>

    //                 <div className="h-auto flex flex-col gap-[8px] mt-2">
    //                   <h4 className="text-[16px] leading-[24px] font-medium">
    //                     {product.name}
    //                   </h4>
    //                   <div className="flex w-[85px] items-center text-[16px] gap-[12px]">
    //                     <p className="text-[red]">${product.price}</p>
    //                     <p className="line-through text-gray-500">
    //                       ${product.oldPrice}
    //                     </p>
    //                   </div>
    //                 </div>
    //               </section>
    //             ))}
    //           </main>
    //         )}
    //       </section>

    //       <div>
    //         <JustForYou />
    //       </div>
    //     </div>
    //   </div>
    // </section>


    <section className="w-[90%] md:w-[80%] mx-auto flex flex-col items-center mb-16">
  {/* Header Section */}
  <div className="w-full flex flex-wrap justify-between items-center gap-4 mt-4 pb-2 border-b border-[#e4e0e0]">
    <Header />
    <div className="h-[60px] flex gap-4 items-center">
      <HeartLogo />
      <CartLogo />
      <UserLogoComp />
    </div>
  </div>

  {/* Breadcrumb */}
  <div className="w-full mt-10 flex flex-col gap-10">
    <div className="flex items-center gap-1 text-sm sm:text-base">
      <Link href="/" className="text-gray-400 hover:text-gray-600">
        Home
      </Link>
      <span>/</span>
      <Link href="/wishList" className="text-black font-medium">
        Wishlist
      </Link>
    </div>

    {/* Wishlist Section */}
    <div className="mt-6 flex flex-col gap-16">
      <section>
        {/* Wishlist Header */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
          <h2 className="font-bold text-lg">
            Wishlist ({clickedCards.length})
          </h2>
          <button className="border border-gray-400 w-full sm:w-[150px] rounded py-1 hover:bg-gray-100 transition-colors">
            Move All To Bag
          </button>
        </div>

        {/* Wishlist Items */}
        {clickedCards.length === 0 ? (
          <p className="text-gray-500">No product clicked yet.</p>
        ) : (
          <main className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth pb-2">
            {clickedCards.map((product) => (
              <section
                key={product.id}
                className="min-w-[240px] sm:min-w-[260px] max-w-[270px] h-auto flex flex-col rounded-lg shadow-md bg-white p-2"
              >
                {/* Image Section */}
                <div
                  onMouseEnter={() => setIsActive(product.id)}
                  onMouseLeave={() => setIsActive(null)}
                  className="w-full h-[220px] sm:h-[250px] flex justify-center items-center rounded-md bg-[#f5f5f5] relative"
                >
                  <Image
                    src={product.image!}
                    width={172}
                    height={152}
                    alt={product.name}
                    className="w-[80%] h-[80%] object-contain"
                  />

                  {/* Hover Add to Cart */}
                  {isActive === product.id && (
                    <div className="w-full h-[41px] bg-[#000] text-white text-[15px] font-medium flex justify-center items-center gap-2 absolute bottom-0 rounded-b-md cursor-pointer hover:bg-[#222] transition-colors">
                      <BsCart3 className="w-[22px] h-[20px]" />
                      <div>Add to Cart</div>
                    </div>
                  )}

                  {/* Discount Tag */}
                  {product.discount && (
                    <div className="bg-[#DB4444] w-[55px] h-[26px] rounded-md flex justify-center items-center absolute left-2 top-2">
                      <p className="text-white text-sm">{product.discount}</p>
                    </div>
                  )}

                  {/* Delete Icon */}
                  <div className="flex flex-col justify-center items-center gap-2 absolute top-4 right-3">
                    <div
                      onClick={() => removeCards(product.id)}
                      className="w-[28px] h-[28px] bg-white flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200 transition"
                    >
                      <RiDeleteBin6Line size={18} />
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col gap-2 mt-3">
                  <h4 className="text-[15px] sm:text-[16px] font-medium line-clamp-1">
                    {product.name}
                  </h4>
                  <div className="flex items-center text-[15px] sm:text-[16px] gap-3">
                    <p className="text-red-600 font-semibold">
                      ${product.price}
                    </p>
                    <p className="line-through text-gray-500 text-sm">
                      ${product.oldPrice}
                    </p>
                  </div>
                </div>
              </section>
            ))}
          </main>
        )}
      </section>

      {/* Just For You Section */}
      <div>
        <JustForYou />
      </div>
    </div>
  </div>
</section>

  );
};

export default WishList;
