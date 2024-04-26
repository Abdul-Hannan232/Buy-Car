import React from 'react'
import { CiSearch } from "react-icons/ci";
import PopularCars from './component/popularCars';
const Home = () => {
  return (
    <>
   <div className='homebanner w-full md:h-[60vh] h-[20vh] flex flex-col justify-center text-center items-center'>
      <div className='md:w-[50%] w-[80%] mx-auto '>
        <button className='bg-[#0B5CFF] text-white md:p-5 md:text-sm text-[10px]   p-2 md:rounded-xl rounded-lg mx-auto w-40 text-center md:w-52'>Explore Used Cars</button>
        <div className='w-full relative md:mt-8 mt-3'> 
        <CiSearch className='absolute left-4 md:top-4 top-2 text-[#90A3BF] md:text-3xl text-xl '/>
            <input type='text' placeholder='Search by keyword' className='md:text-md text-xs text-[#90A3BF] focus:border-[#0B5CFF] outline-none border-2 border-white w-full md:pl-16 pl-10 md:p-5 p-2 md:rounded-xl rounded-lg '/>
        </div>
        </div>
    </div>
    <PopularCars/>
</>
  )
}

export default Home
