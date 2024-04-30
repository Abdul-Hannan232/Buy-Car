import React from 'react'
import { IoMdStar } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { PiMedalFill } from "react-icons/pi";
import { IoIosCall } from "react-icons/io";
import Image from 'next/image';
import PopularCars from '../component/popularCars.js';
import HomeData from "../../data/home.json"
import Review from '../component/reviews.js';
const Dealership = () => {

    return (
        <>
            <div className='mx-5'>
                <div className='flex justify-center items-center gap-3 mt-40'>
                    <Image src="/redLogo.png" alt="image" width={100} height={100} className='lg:w-[135px] lg:h-[135px]' />
                    <div>
                        <h1 className='lg:text-md text-sm text-[#1A202C]'>DealerShip</h1>
                        <h1 className='text-[#90A3BF] lg:text-3xl text-xl font-bold'>Sunshine Honda</h1>
                        <div className='flex items-center lg:my-2 my-1 gap-2 space-x-1'>
                            <IoIosCall className='2xl:text-md text-sm  text-[#90A3BF] text-3xl' />
                            <p className='lg:text-sm text-[9px] text-[#90A3BF] '>123 - 456 - 789</p>
                        </div>
                        <div className='flex items-center lg:my-2 my-1 gap-2 space-x-1'>
                            <FaLocationDot className='2xl:text-md text-sm  text-[#90A3BF] text-3xl' />
                            <p className='lg:text-sm text-[9px] text-[#90A3BF] '>123 Main Street, Anytown, USA</p>
                        </div>
                        <div className='flex items-center space-x-1'>
                            <PiMedalFill className='2xl:text-md text-sm  text-[#90A3BF] text-3xl mr-2' />
                            <p className='lg:text-md text-[9px] text-[#90A3BF] '>4.0</p>
                            <IoMdStar className=' text-[#FBAD39] lg:text-md text-[9px]' />
                            <IoMdStar className=' text-[#FBAD39] lg:text-md text-[9px]' />
                            <IoMdStar className=' text-[#FBAD39] lg:text-md text-[9px]' />
                            <IoMdStar className=' text-[#FBAD39] lg:text-md text-[9px]' />
                            <IoMdStar className=' focus:text-[#FBAD39] lg:text-md text-[9px] text-[#90A3BF]' />
                            <p className='lg:text-sm text-[9px]  text-[#90A3BF]'>(32 reviews)</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-2 bg-white rounded-xl p-3 lg:w-[80%] w-full mx-auto mt-20'>
                    <p className='text-[#1A202C] lg:text-sm text-xs font-bold'>All Cars from </p>
                    <p className='text-[#0B5CFF] lg:text-sm text-xs font-bold'>Sunshine Honda</p>
                </div>
                <div className='lg:w-[80%] w-full mx-auto'>
                    <PopularCars Data={HomeData} grid={"xl:grid-cols-3"} color={"#D3E2FF"} textColor={"#0B5CFF"} borderRadius={"2xl"} />
                </div>
                <div className='flex items-center justify-center gap-2 bg-white rounded-xl p-3 lg:w-[80%] w-full mx-auto mt-20'>
                    <p className='text-[#1A202C] lg:text-sm text-xs font-bold'>All Reviews of  </p>
                    <p className='text-[#0B5CFF] lg:text-sm text-xs font-bold'>Sunshine Honda</p>
                </div>
                <Review grid={"2"}/>

            </div>
           

        </>
    )
}

export default Dealership
