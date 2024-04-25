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
        <div className='md:w-[80%] w-[90%] mx-auto md:mt-20 mt-5 '>
            <div className=' mt-20 flex items-center justify-between'>

                <h1 className='md:text-5xl text-2xl font-medium text-[#90A3BF]'>Popular Cars</h1>
                <button className='text-[#0B5CFF] bg-[#0B5CFF] bg-opacity-30 md:rounded-xl rounded-md cursor-pointer md:p-3 p-1 md:w-28 w-20 font-medium md:text-xl text-sm text-center'>View All</button>
            </div>
            <div className='mt-20 grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 gris-cols-1 gap-5'>
                {Data.map((item) => (
                    <div className='md:w-[350px] mb-20 rounded-3xl p-8 bg-white h-[520px] relative shadow-xl'>

                        <div className='flex justify-between'>
                            <div>
                                <h1 className='2xl:text-2xl text-xl font-bold'>{item.name}</h1>
                                <p className='text-[#90A3BF] text-md mt-1'>{item.quality}</p>
                            </div>
                            <IoHeart className='md:text-3xl text-xl text-[#ED3F3F]' />

                        </div><br />
                        <Image src={item.image} alt="car" width={180} height={56} className='w-80 h-32' />
                        <h1 className='2xl:text-4xl text-3xl font-bold text-[#0B5CFF] 2xl:my-7 my-4'>{item.amount}</h1>
                        <div className='flex items-center space-x-1'>
                            <PiMedalFill className='text-md text-[#90A3BF] text-3xl mr-2' />
                            <p className='text-md text-[#90A3BF] '>4.0</p>
                            <IoMdStar className=' text-[#FBAD39] text-xl ' />
                            <IoMdStar className=' text-[#FBAD39] text-xl ' />
                            <IoMdStar className=' text-[#FBAD39] text-xl ' />
                            <IoMdStar className=' text-[#FBAD39] text-xl ' />
                            <IoMdStar className=' focus:text-[#FBAD39] text-xl text-[#90A3BF]' />
                            <p className='text-sm text-[#90A3BF] font-bold'>(32 reviews)</p>
                        </div>
                        <div className='flex items-center my-3 gap-2 space-x-1'>
                            <FaLocationDot className='text-md text-[#90A3BF] text-3xl' />
                            <p className='text-sm text-[#90A3BF] font-bold'>{item.country}</p>
                        </div>
                        <div className='flex items-center gap-2 space-x-1'>
                            <TbBuilding className='text-md text-[#90A3BF] text-3xl' />

                            <p className=' text-sm  text-[#90A3BF] font-bold'>{item.building}</p>
                        </div>
                        <button className='w-[60%]  absolute left-0 right-0 2xl:mt-6 mt-10 flex justify-center  mx-auto text-white bg-[#0B5CFF] text-center py-5 rounded-xl text-md font-medium'>Check Availability </button>

                    </div>
               ) ) }
            </div>
            <button className='w-60 p-5 rounded-2xl text-center text-md text-white bg-[#0B5CFF] flex justify-center mx-auto mt-20 mb-40'>Show more cars</button>
        </div>
    )
}

export default PopularCars
