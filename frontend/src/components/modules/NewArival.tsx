'use client'
import Image from "next/image"
import Subheader from "../common/Subheader"

const NewArival = ()=>{
	return(
		<div className=" w-[80%] mx-auto h-auto flex flex-col gap-4  ">
			<div className="w-full">
				<Subheader title="New arival" subTitle="Featured"/>
			</div>
			<div className="w-full h-auto  grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="h-full bg-[#000] flex justify-center items-end relative"  >
					<Image src='/new-arival1.png' width={511} height={511} alt="New arival1"/>
					<div className="absolute bottom-8 left-8 w-[242px] flex flex-col gap-3" >
						<h2 className="text-[24px] md:text-[20px] lg:text-[24px] leading-[24px] tracking-[3%] text-[#FAFAFA] font-semibold ">PlayStation 5</h2>
						<p className="text-[14px] md:text-[12px] lg:text-[14px] text-[#FAFAFA] leading-[21px] ">Black and White version of the PS5 coming out on sale.</p>
						<div className="font-medium text-[16px] text-[#fff] leading-[24px] ">Shop Now</div>
					</div>
				</div>
				<div className="grid grid-rows-2 gap-4">
					<div className="bg-[#000] flex items-end relative">
						<div className="w-full h-full flex justify-end items-end ">
							<Image src='/woman-cap.png' width={243} height={246} alt="Woman Cap" className="object-cover w-[85%] h-full" />
						</div>
							<div className="absolute left-8 bottom-8 w-[242px] flex flex-col gap-3" >
						<h2 className="text-[24px] md:text-[20px] lg:text-[24px] leading-[24px] tracking-[3%] text-[#FAFAFA] font-semibold ">Women’s Collections</h2>
						<p className="text-[14px] md:text-[12px] lg:text-[14px] text-[#FAFAFA] leading-[21px] ">Featured woman collections that give you another vibe.</p>
						<div className="font-medium text-[16px] text-[#fff] leading-[24px] ">Shop Now</div>
					</div>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div className="w-full h-full bg-black flex justify-center items-center relative ">
							<Image src='/speakers.png' width={190} height={221} alt="Speakers" className="h-[85%] w-[85%" />
							<div className="absolute left-3 lg:left-8 bottom-8 w-full flex flex-col lg:gap-3" >
								<h2 className="text-[24px] md:text-[20px] lg:text-[24px] leading-[24px] tracking-[3%] text-[#FAFAFA] font-semibold ">Speaker</h2>
								<p className="text-[14px] md:text-[10px] lg:text-[14px] text-[#FAFAFA] leading-[21px] ">Amazon wireless speakers</p>
								<div className="font-medium text-[16px] text-[#fff] leading-[24px] ">Shop Now</div>
							</div>
						</div>
						<div className="w-full h-full bg-black flex justify-center items-center relative ">
							<Image src='/perfume.png' width={190} height={221} alt="Speakers" className="h-[85%] w-[85%]" />
							<div className="absolute left-3 lg:left-8 bottom-8  flex flex-col gap-3 md:gap-0 lg:gap-3" >
								<h2 className="text-[24px] md:text-[20px] lg:text-[24px] leading-[24px] tracking-[3%] text-[#FAFAFA] font-semibold ">Perfume</h2>
								<p className="text-[14px] md:text-[10px] lg:text-[14px] text-[#FAFAFA] leading-[21px] ">GUCCI INTENSE OUD EDP</p>
								<div className="font-medium text-[16px] text-[#fff] leading-[24px] ">Shop Now</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default NewArival