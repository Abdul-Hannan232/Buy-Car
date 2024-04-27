"use client"
import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

const HighestPrice = ({ Data, title, subTitle }) => {
    console.log(Data)
    const [porche, setPorche] = useState(false)
    const porcheDrop = () => {
        setPorche(!porche)
    }
    return (
        <div className='w-60'>

            <div onClick={porcheDrop} className='bg-[#F6F7F9]   rounded-xl p-3 flex justify-between items-center cursor-pointer '>
                <div>
                    <p className='text-sm font-medium text-black'>{title}</p>
                    <h1 className='text-md text-[#90A3BF] '>{subTitle}</h1>
                </div>
                <MdKeyboardArrowDown className='text-2xl' />
            </div>
            {porche && (
                <div className=' absolute left-0 z-40  bg-white right-0  p-3'>
                    
                    {Data.map((item) => (
                        <div className='flex items-center  space-x-2 text-md pl-3 hover:bg-[#0B5CFF] p-1 hover:text-white rounded-lg cursor-pointer'>
                            <h1>{item.name}</h1>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default HighestPrice
