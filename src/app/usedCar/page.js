"use client"
import React, { useState } from 'react'
import { TbFilterSearch } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import Fundamentals from '../component/fundamentals';
import Style from "../component/style"
import Performence from '../component/performance';
import Features from '../component/features';
import { RxCrossCircled } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import HighestPrice from '../component/highestPrice';
import PriceData from "../../data/highestPrice.json"
import HomeData from "../../data/home.json"
import PopularCars from '../component/usedCarData.js';
const UsedCar = () => {
    return (
        <div className='mt-40 h-screen w-[90%] mx-auto  '>
            <div className=' lg:flex justify-around gap-10'>
                <div className='bg-white mt-20 p-3 w-80 rounded-xl'>
                    <button className='bg-[#0B5CFF] w-72 p-4 text-white rounded-2xl flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <TbFilterSearch className='text-3xl' />
                            <h1 className='text-xl'>Filters</h1>
                        </div>
                        <MdKeyboardArrowDown className='text-3xl' />
                    </button>

                    {/* fundamentals */}
                    <Fundamentals />
                    <Style />
                    <Performence />
                    <Features />
                    <button className='bg-[#0B5CFF] text-white p-3 rounded-xl mt-3 w-full text-center text-xl'>Update</button>
                    <div>

                    </div>

                </div>
                <div className='w-full'>
                    <div className='w-full flex items-end justify-between'>
                        <div>
                            <p className='text-[#0B5CFF]'>12,530 Results</p>
                            <h1 className='xl:text-4xl text-3xl font-bold text-black'>Explore Used Cars For Sale</h1>
                        </div>
                        <div className='bg-[#0B5CFF] text-white rounded-xl p-3 w-52 h-10 flex items-center justify-center'>
                            <RxCrossCircled />
                            <p>Clear All Filters</p>
                        </div>
                    </div>
                 <div className='w-full bg-white mt-5 rounded-xl flex p-3 items-center gap-2'>
                 <div className='w-full relative '>
                        <CiSearch className='absolute md:left-8 left-4 md:top-5 top-2 text-[#90A3BF] md:text-3xl text-xl ' />
                        <input type='text' placeholder='Search by keyword' className='md:text-lg bg-[#F6F7F9] text-sm text-[#90A3BF] focus:border-[#0B5CFF] outline-none border-2 border-white w-full md:pl-16 pl-10 md:p-5 p-2 md:rounded-xl rounded-lg ' />
                    </div>
                    <HighestPrice Data={PriceData} title={"Sort by"} subTitle={"Highest Price"} />
                 </div>
                 <PopularCars  Data={HomeData}/>
                 <PopularCars  Data={HomeData}/>

                </div>

            </div>
        </div>
    )
}

export default UsedCar
