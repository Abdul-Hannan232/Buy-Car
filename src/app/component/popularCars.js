import React from 'react'
import { IoHeart } from "react-icons/io5";
import Image from "next/image"
import { IoMdStar } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { TbBuilding } from "react-icons/tb";
import { PiMedalFill } from "react-icons/pi";
import Data from "../../data/carData.json"
const PopularCars = () => {
    console.log(Data,"DATA")
    return (
        <div className='md:w-[80%] w-[90%] mx-auto md:mt-14 mt-5 '>
            <div className=' mt-20 flex items-center justify-between'>

                <h1 className='md:text-4xl text-2xl font-medium text-[#90A3BF]'>Popular Cars</h1>
                <button className='text-[#0B5CFF] bg-[#0B5CFF] bg-opacity-30 md:rounded-xl rounded-md cursor-pointer md:p-3 p-1 md:w-24 w-20 font-medium md:text-md text-sm text-center'>View All</button>
            </div>
            <div className='mt-14 grid xl:grid-cols-4 lg:grid-cols-3 justify-center  md:grid-cols-2 gris-cols-1 gap-5'>
                {Data.map((item) => (
                    <div className='2xl:w-[340px] w-[260px] mb-20 rounded-3xl 2xl:p-10 p-6 bg-white 2xl:h-[450px] h-[380px] relative shadow-xl'>

                        <div className='flex justify-between'>
                            <div>
                                <h1 className='2xl:text-2xl text-xl font-bold'>{item.name}</h1>
                                <p className='text-[#90A3BF] text-md mt-1'>{item.quality}</p>
                            </div>
                            <IoHeart className=' text-xl cursor-pointer text-[#ED3F3F]' />

                        </div><br />
                        <Image src={item.image} alt="car" width={180} height={56} className='w-44 h-20' />
                        <h1 className='2xl:text-4xl text-2xl font-bold text-[#0B5CFF] 2xl:my-7 my-4'>{item.amount}</h1>
                        <div className='flex items-center space-x-1'>
                            <PiMedalFill className='2xl:text-md text-sm  text-[#90A3BF] text-3xl mr-2' />
                            <p className='2xl:text-sm text-xs text-[#90A3BF] '>4.0</p>
                            <IoMdStar className=' text-[#FBAD39] 2xl:text-sm text-xs' />
                            <IoMdStar className=' text-[#FBAD39] 2xl:text-sm text-xs' />
                            <IoMdStar className=' text-[#FBAD39] 2xl:text-sm text-xs' />
                            <IoMdStar className=' text-[#FBAD39] 2xl:text-sm text-xs' />
                            <IoMdStar className=' focus:text-[#FBAD39] text-md text-[#90A3BF]' />
                            <p className='2xl:text-xs text-[10px] text-[#90A3BF] font-bold'>(32 reviews)</p>
                        </div>
                        <div className='flex items-center my-3 gap-2 space-x-1'>
                            <FaLocationDot className='2xl:text-md text-sm  text-[#90A3BF] text-3xl' />
                            <p className='2xl:text-sm text-xs text-[#90A3BF] font-bold'>{item.country}</p>
                        </div>
                        <div className='flex items-center gap-2 space-x-1'>
                            <TbBuilding className='2xl:text-md text-sm text-[#90A3BF] text-3xl' />

                            <p className=' 2xl:text-sm text-xs  text-[#90A3BF] font-bold'>{item.building}</p>
                        </div>
                        <button className='w-44  absolute left-0 right-0 hover:bg-opacity-90 2xl:mt-10  mt-8 flex justify-center  mx-auto text-white bg-[#0B5CFF] text-center py-3 rounded-xl text-md font-medium'>Check Availability </button>

                    </div>
               ) ) }
            </div>
            <button className='md:w-60 w-40 md:p-5 p-3 rounded-2xl hover:bg-opacity-90 text-center text-md text-white bg-[#0B5CFF] flex justify-center mx-auto mt-10 mb-32'>Show more cars</button>
        </div>
    )
}

export default PopularCars
