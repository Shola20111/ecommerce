
"use client";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import StarsComp from "./StarsComp";
import { useScroll } from "@/context/ScrollProvider";
import { Product, ClickedCard, useCard } from "@/context/CardContext";

const products: Product[] = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    discount: "-40%",
    image: "/game.png",
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 90,
    oldPrice: 130,
    discount: "-30%",
    image: "/keyboard.png",
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 150,
    oldPrice: 200,
    discount: "-25%",
    image: "/monitor.png",
  },
  {
    id: 4,
    name: "S-Series Comfort Chair ",
    price: 70,
    oldPrice: 100,
    discount: "-30%",
    image: "/chair.png",
  },
  {
    id: 5,
    name: "Smartwatch Z10",
    price: 220,
    oldPrice: 300,
    discount: "-27%",
    image: "/game.png",
  },
  {
    id: 6,
    name: "Portable Speaker P90",
    price: 45,
    oldPrice: 65,
    discount: "-20%",
    image: "/game.png",
  },
];

const Products = () => {
  const { scrollRef } = useScroll();

  // Properly typed
  const {
    toggleCard,
    isActive,
    setIsActive,
    addToCart,
  }: {
    toggleCard: (product: ClickedCard) => void;
    isActive: number | string | null;
    setIsActive: (id: number | string | null) => void;
    addToCart: (product: Product) => void;
  } = useCard();

  return (
  //   <main
  //     ref={scrollRef}
  //     className="
  //   flex 
  //   overflow-x-auto 
  //   overflow-y-hidden
  //   gap-3 
  //   scroll-smooth 
  //   scrollbar-hide 
  //   w-full 
  //   max-w-full
  // "
  //   >
  //     {products.map((product) => (
  //       <section
  //         key={product.id}
  //         className="min-w-[260px] max-w-[270px] h-[350px] flex flex-col shrink-0"
  //       >
  //         <div
  //           onMouseEnter={() => setIsActive(product.id)}
  //           onMouseLeave={() => setIsActive(null)}
  //           onClick={() => toggleCard({ ...product, count: 1 })}
  //           className="w-full h-[250px] flex justify-center items-center rounded-[4px] bg-[#f5f5f5] relative"
  //         >
  //           <div className="w-[172px] h-[152px] flex justify-center items-center">
  //             <Image
  //               src={product.image!}
  //               width={172}
  //               height={152}
  //               alt={product.name}
  //               className="w-[85%] h-[86%]"
  //             />

  //             {isActive === product.id && (
  //               <button
  //                 onClick={(e) => {
  //                   e.stopPropagation();
  //                   addToCart(product);
  //                 }}
  //                 className="w-full h-[41px] bg-[#000] text-[#fff] text-[16px] leading-[24px] font-medium absolute right-0 left-0 bottom-0 rounded-b-[4px]"
  //               >
  //                 Add to Cart
  //               </button>
  //             )}
  //           </div>

  //           <div className="bg-[#DB4444] w-[55px] h-[26px] rounded-[4px] flex justify-center items-center absolute left-2 top-2">
  //             <p className="text-white">{product.discount}</p>
  //           </div>

  //           <div className="flex flex-col justify-center items-center gap-2 absolute top-10 right-4">
  //             <div className="w-[25px] h-[25px] bg-white flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200">
  //               <CiHeart size={20} />
  //             </div>
  //             <div className="w-[25px] h-[25px] bg-white flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200">
  //               <FiEye size={15} />
  //             </div>
  //           </div>
  //         </div>

  //         <div className="h-auto flex flex-col gap-[8px] mt-2">
  //           <h4 className="text-[16px] leading-[24px] font-medium">{product.name}</h4>
  //           <div className="flex w-[85px] items-center text-[16px] gap-[12px]">
  //             <p className="text-[red]">${product.price}</p>
  //             <p className="line-through text-gray-500">${product.oldPrice}</p>
  //           </div>
  //           <StarsComp />
  //         </div>
  //       </section>
  //     ))}
  //   </main>


//   <main
//   ref={scrollRef}
//   className="
//     flex
//     overflow-x-auto
//     overflow-y-hidden
//     gap-4
//     scroll-smooth
//     scrollbar-hide
//     w-full
//     py-4
//   "
// >
//   {products.map((product) => (
//     <section
//       key={product.id}
//       className="
//         flex-shrink-0
//         w-[70vw] sm:w-[260px] md:w-[270px]
//         h-[350px]
//         flex flex-col
//         cursor-pointer
//       "
//     >
//       <div
//         onMouseEnter={() => setIsActive(product.id)}
//         onMouseLeave={() => setIsActive(null)}
//         onClick={() => toggleCard({ ...product, count: 1 })}
//         className="relative w-full h-[250px] bg-[#f5f5f5] rounded-[4px] flex justify-center items-center transition-transform duration-300 hover:scale-105"
//       >
//         <div className="w-[172px] h-[152px] flex justify-center items-center">
//           <Image
//             src={product.image!}
//             width={172}
//             height={152}
//             alt={product.name}
//             className="w-[85%] h-[86%] object-contain"
//           />

//           {isActive === product.id && (
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 addToCart(product);
//               }}
//               className="absolute bottom-0 left-0 right-0 h-[41px] bg-black text-white font-medium text-[16px] leading-[24px] rounded-b-[4px] transition hover:bg-gray-900"
//             >
//               Add to Cart
//             </button>
//           )}
//         </div>

//         {/* Discount badge */}
//         <div className="absolute top-2 left-2 w-[55px] h-[26px] bg-[#DB4444] rounded-[4px] flex justify-center items-center">
//           <p className="text-white">{product.discount}</p>
//         </div>

//         {/* Action icons */}
//         <div className="absolute top-4 right-4 flex flex-col gap-2">
//           <div className="w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center hover:bg-gray-200 transition">
//             <CiHeart size={20} />
//           </div>
//           <div className="w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center hover:bg-gray-200 transition">
//             <FiEye size={15} />
//           </div>
//         </div>
//       </div>

//       {/* Product info */}
//       <div className="mt-2 flex flex-col gap-1">
//         <h4 className="text-[16px] font-medium truncate">{product.name}</h4>
//         <div className="flex items-center gap-2">
//           <p className="text-red-500 font-semibold">${product.price}</p>
//           <p className="line-through text-gray-500 text-sm">${product.oldPrice}</p>
//         </div>
//         <StarsComp />
//       </div>
//     </section>
//   ))}
// </main>


<main
  ref={scrollRef}
  className="
    flex
    gap-4
    overflow-x
    overflow-y-hidden
    scroll-smooth
    scrollbar-hide
    w-full
    py-4
  "
>
  {products.map((product) => (
    <section
      key={product.id}
      className="
        flex-shrink-0
        w-[260px] sm:w-[260px] md:w-[270px]
        h-[350px]
        flex flex-col
        cursor-pointer
      "
    >
      <div
        onMouseEnter={() => setIsActive(product.id)}
        onMouseLeave={() => setIsActive(null)}
        onClick={() => toggleCard({ ...product, count: 1 })}
        className="relative w-full h-[250px] bg-[#f5f5f5] rounded-[4px] flex justify-center items-center transition-transform duration-300 hover:scale-105"
      >
        <div className="w-[172px] h-[152px] flex justify-center items-center">
          <Image
            src={product.image!}
            width={172}
            height={152}
            alt={product.name}
            className="w-[85%] h-[86%] object-contain"
          />

          {isActive === product.id && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
              }}
              className="absolute bottom-0 left-0 right-0 h-[41px] bg-black text-white font-medium text-[16px] leading-[24px] rounded-b-[4px] transition hover:bg-gray-900"
            >
              Add to Cart
            </button>
          )}
        </div>

        {/* Discount badge */}
        <div className="absolute top-2 left-2 w-[55px] h-[26px] bg-[#DB4444] rounded-[4px] flex justify-center items-center">
          <p className="text-white">{product.discount}</p>
        </div>

        {/* Action icons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <div className="w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center hover:bg-gray-200 transition">
            <CiHeart size={20} />
          </div>
          <div className="w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center hover:bg-gray-200 transition">
            <FiEye size={15} />
          </div>
        </div>
      </div>

      {/* Product info */}
      <div className="mt-2 flex flex-col gap-1">
        <h4 className="text-[16px] font-medium truncate">{product.name}</h4>
        <div className="flex items-center gap-2">
          <p className="text-red-500 font-semibold">${product.price}</p>
          <p className="line-through text-gray-500 text-sm">${product.oldPrice}</p>
        </div>
        <StarsComp />
      </div>
    </section>
  ))}
</main>


  );
};

export default Products;
