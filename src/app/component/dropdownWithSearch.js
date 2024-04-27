"use client"
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";

const DropdownWithSearch = ({ Data, title, subTitle }) => {
    console.log(Data)
    const [porche, setPorche] = useState(false)
    const porcheDrop = () => {
        setPorche(!porche)
    }
    return (
        <div className=''>

            <div onClick={porcheDrop} className='bg-[#F6F7F9] mt-2  rounded-xl p-3 flex justify-between items-center cursor-pointer '>
                <div>
                    <p className='text-sm font-medium text-black'>{title}</p>
                    <h1 className='text-md text-[#90A3BF] '>{subTitle}</h1>
                </div>
                <MdKeyboardArrowDown className='text-2xl' />
            </div>
            {porche && (

                <div className=' absolute left-0 z-40  bg-white right-0  p-3'>
                    <div className='w-full relative mb-3'>
                        <CiSearch className='absolute left-3  top-2 text-[#787878] md:text-md text-xl ' />
                        <input type='text' placeholder='Search by keyword' className='bg-[#F6F7F9] p-2 pl-9 text-xs text-[#90A3BF] focus:border-[#0B5CFF] outline-none border-2 border-white w-full  rounded-xl ' />
                    </div>
                    {Data.map((item) => (
                        <div className='flex items-center  space-x-2 text-md pl-3 hover:bg-[#0B5CFF] p-1 hover:text-white rounded-lg cursor-pointer'>
                            <input type="checkbox" className='border-[#787878] w-4 h-4' />
                            <h1>{item.name}</h1>
                            <p className='text-[10px] text-[#90A3BF]'>{item.count}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default DropdownWithSearch
