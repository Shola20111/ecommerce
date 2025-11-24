"use client"
import { useRouter } from "next/navigation";
import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'

const SearchBar = () => {

	const router =useRouter();

	const handleSearch = (e: React.FormEvent<HTMLFormElement>)=>{
		e.preventDefault();

	const formData = new FormData(e.currentTarget);
	const name = formData.get("name") as string;

	if(name){
		router.push(`list?name=${name}`)
	}
	}

	

  return (
    <div>
			<form 
				onSubmit={handleSearch}
				className='max-w-[250px] flex items-center justify-center gap-[34px rounded-[4px] bg-[#F5F5F5]'>
				<input type="type" name='name' placeholder='What are you looking for?' className='w-[153px] h-full outline-none text-[15px] p-3 leading-[25px] flex-1' />
				<button className='w-[30px] h-full px-1'>
					<IoSearchOutline  className='w-full h-[20px]'/>
				</button>
				
			</form>
    </div>
  )
}

export default SearchBar