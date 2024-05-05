"use client"
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import PopularCars from './component/popularCars';
import HomeDataJson from "../data/home.json"
import Link from "next/link"
import Image from 'next/image';
const Home = () => {

  const [HomeData, setHomeData] = useState(HomeDataJson);


  // Example usage: Call filterData function when the input value changes
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    filterData(inputValue); // Filter the data based on the input value
  };
  // hello
  return (
    <>
      <div className='homebanner w-full md:h-[70vh] h-[40vh] flex flex-col justify-end text-center items-end'>
        <div className='md:w-[50%] w-[80%] mx-auto md:mb-20 mb-10'>
          <div className='w-full relative md:mt-5 mt-2'>
            <CiSearch className='absolute md:left-5 left-4 md:top-4 top-2 text-[#90A3BF] md:text-4xl text-xl ' />
            <input type='text' placeholder='Search by keyword' onChange={handleInputChange} className='md:text-lg text-xs text-[#90A3BF] focus:border-[#0B5CFF] outline-none border-2 border-white w-full md:pl-16 pl-10 md:p-4 p-2 md:rounded-xl rounded-lg ' />
            <div className=' md:w-14  md:h-14 cursor-pointer  w-7 h-7  absolute right-1 top-1  xl:rounded-xl rounded-lg bg-[#0B5CFF] mx-auto flex items-center  flex-col justify-center'>
              <Image src="/filter.png" alt="setting-icon" width={28} height={28} className='xl:w-[24px] cursor-pointer xl:h-[24px] w-3 h-3' />
            </div>
          </div>
        </div>
      </div>
      <div className='md:w-[80%] w-[90%] mx-auto '> <div className='  flex items-center justify-between'>
        {/* <h1 className='md:text-4xl text-2xl font-medium text-[#90A3BF]'>Popular Cars</h1> */}
        {/* <button className='text-[#0B5CFF] bg-[#0B5CFF] bg-opacity-30 md:rounded-xl rounded-md cursor-pointer md:p-3 p-1 md:w-24 w-20 font-medium md:text-md text-sm text-center'>View All</button> */}
      </div>
        <PopularCars column={"8"} Data={HomeData} grid={"xl:grid-cols-4"} color={"#0B5CFF"} textColor={'text-[#FFFFFF]'} />
        <Link href="/usedCar">
          <button className='hover:opacity-90 cursor-pointer buttonBackground md:w-60 w-44 md:p-5 p-3 rounded-2xl  text-center md:text-lg text-sm text-white  flex justify-center mx-auto mt-10 mb-32'>Show more cars</button>
        </Link>
      </div>
    </>
  )
}

export default Home
