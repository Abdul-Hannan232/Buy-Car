"use client"
import React, { useState } from 'react'
import { IoMdStar } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { PiMedalFill } from "react-icons/pi";
import { IoIosCall } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Image from 'next/image';
import popularCars from '../component/popularCars';
import HomeData from "../../data/home.json"
import Reviews from "../../data/reviews.json"
import renderStars from '@/utils/rating';
const Dealership = () => {
    const [showAll, setShowAll] = useState(false);
    console.log(renderStars(3), "renderStars")
    const toggleShowAll = () => {
        setShowAll(!showAll);
    };
    return (
        <div className='mx-5'>
            <div className='flex justify-center items-center gap-3 mt-40'>
                <Image src="/redLogo.png" alt="image" width={100} height={100} className='lg:w-[135px] lg:h-[135px]' />
                <div>
                    <h1 className='lg:text-md text-sm text-black'>DealerShip</h1>
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
            <div className='flex items-center justify-center gap-2 bg-white rounded-xl p-3 lg:w-[67%] w-full mx-auto mt-20'>
                <p className='text-black lg:text-sm text-xs font-bold'>All Cars from </p>
                <p className='text-[#0B5CFF] lg:text-sm text-xs font-bold'>Sunshine Honda</p>
            </div>
            <div className='lg:w-[70%] w-full mx-auto'>
                <popularCars Data={HomeData} grid="3" />
            </div>
            <div className='flex items-center justify-center gap-2 bg-white rounded-xl p-3 lg:w-[67%] w-full mx-auto mt-20'>
                <p className='text-black lg:text-sm text-xs font-bold'>All Reviews of  </p>
                <p className='text-[#0B5CFF] lg:text-sm text-xs font-bold'>Sunshine Honda</p>
            </div>
            <div className=' bg-white lg:p-8 p-5 rounded-xl lg:w-[67%] w-full mx-auto mb-52 mt-5'>
                <div className='flex items-center  justify-between '>
                    <div>
                        <h1 className='font-bold'>Reviews</h1>
                        <div className='flex items-center space-x-1'>
                            <PiMedalFill className='lg:block hidden text-md  text-[#90A3BF]  mr-1' />
                            <p className='lg:block hidden 2xl:text-md text-xs text-[#90A3BF] '>4.0</p>
                            <IoMdStar className='lg:block hidden  text-[#FBAD39] text-md ' />
                            <IoMdStar className='lg:block hidden  text-[#FBAD39] text-md ' />
                            <IoMdStar className='lg:block hidden  text-[#FBAD39] text-md ' />
                            <IoMdStar className='lg:block hidden  text-[#FBAD39] text-md ' />
                            <IoMdStar className=' lg:block hidden focus:text-[#FBAD39] text-md text-[#90A3BF]' />
                            <p className='text-sm lg:block hidden text-[#90A3BF]'>(23 reviews)</p>
                            <p className='text-sm font-bold  text-[#90A3BF]'>(23)</p>

                        </div>
                    </div>
                    <button className='bg-[#0B5CFF] text-white text-center lg:p-3 p-2 lg:rounded-xl  rounded-lg lg:w-44 w-20 hover:bg-opacity-90 cursor-pointer lg:text-md text-[10px]'> Add Review</button>
                </div>
                <hr className='my-10 border-2' />
                <div>
                    <div className='grid lg:grid-cols-2 place-items-center items-center justify-center gap-10'>
                        {Reviews.slice(0, showAll ? Reviews.length : 2).map((item, index) => (
                            <div key={index} className='lg:w-[410px] lg:m-5 m-1'>
                                <div className='flex items-center gap-2'>
                                    <Image src="/user.png" alt="user" width={45} height={45} />
                                    <div>
                                        <h1 className='text-lg font-bold'>{item.userName}</h1>
                                        <div className='flex items-center'>
                                            <p className='2xl:text-md text-xs text-[#90A3BF]'>4.0</p>
                                            {renderStars(item.rating)}
                                        </div>
                                    </div>
                                </div>
                                <p className='text-[#90A3BF] text-sm mt-5'>{item.review}</p>
                            </div>
                        ))}
                    </div>
                    <hr className='border-2 my-5' />
                    <div className='flex justify-center items-center lg:text-lg text-sm cursor-pointer text-[#0B5CFF] my-5' onClick={toggleShowAll}>
                        <p>{showAll ? "Show Less" : "Show More"}</p>
                        {showAll ? <MdKeyboardArrowUp className='lg:text-3xl text-xl' /> : <MdKeyboardArrowDown className='lg:text-3xl text-xl' />}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dealership
