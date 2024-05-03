"use client"
import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

const HighestPrice = ({ Data, title, subTitle }) => {
  
    const [porche, setPorche] = useState(false)
    const porcheDrop = () => {
        setPorche(!porche)
    }
    return (
        <div className='lg:w-60 w-full'>
            <div onClick={porcheDrop} className='bg-[#F6F7F9]   rounded-xl p-3 flex justify-between items-center cursor-pointer '>
                <div>
                    <p className='lg:text-sm text-xs font-medium text-[#1A202C]'>{title}</p>
                    <h1 className='lg:text-md text-sm text-[#90A3BF] '>{subTitle}</h1>
                </div>
                <MdKeyboardArrowDown className='text-2xl' />
            </div>
            <div className=''>
            {porche && (
                <div className='absolute  z-40 md:w-64 w-full  bg-white right-0  p-3'>
                    {Data.map((item) => (
                        <div className='flex items-center mt-1  space-x-2 text-sm pl-3 hover:bg-[#0B5CFF] p-1 hover:text-white rounded-lg cursor-pointer'>
                            <h1>{item.name}</h1>
                        </div>
                    ))}
                </div>
            )}
            </div>
        </div>
    )
}

export default HighestPrice
