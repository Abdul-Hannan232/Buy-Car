import React from 'react'
import { CiSearch } from "react-icons/ci";
import PopularCars from './component/popularCars';
import HomeData from "../data/home.json"
const Home = () => {

  return (
    <>
      <div className='homebanner w-full md:h-[80vh] h-[40vh] flex flex-col justify-center text-center items-center'>
        <div className='md:w-[50%] w-[80%] mx-auto '>
          <button className='bg-[#0B5CFF] hover:bg-opacity-90 text-white md:p-5 md:text-sm text-[10px]   p-2 md:rounded-xl rounded-lg mx-auto w-40 text-center md:w-52'>Explore Used Cars</button>
          <div className='w-full relative md:mt-8 mt-3'>
            <CiSearch className='absolute md:left-7 left-4 md:top-5 top-2 text-[#90A3BF] md:text-3xl text-xl ' />
            <input type='text' placeholder='Search by keyword' className='md:text-lg text-sm text-[#90A3BF] focus:border-[#0B5CFF] outline-none border-2 border-white w-full md:pl-20 pl-10 md:p-5 p-2 md:rounded-xl rounded-lg ' />
          </div>
        </div>
      </div>
      <div className='md:w-[80%] w-[90%] mx-auto md:mt-14 mt-5'> <div className=' mt-20 flex items-center justify-between'>
        <h1 className='md:text-4xl text-2xl font-medium text-[#90A3BF]'>Popular Cars</h1>
        <button className='text-[#0B5CFF] bg-[#0B5CFF] bg-opacity-30 md:rounded-xl rounded-md cursor-pointer md:p-3 p-1 md:w-24 w-20 font-medium md:text-md text-sm text-center'>View All</button>
      </div>
        <PopularCars Data={HomeData} grid={"4"} color={"#0B5CFF"} textColor={"#FFFFFF"} borderRadius={"full"}/>
        <button className=' buttonBackground md:w-60 w-40 md:p-5 p-3 rounded-full  text-center text-md text-white  flex justify-center mx-auto mt-10 mb-32'>Show more cars</button>
      </div>
    </>
  )
}

export default Home
