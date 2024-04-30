"use client"
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image"
const DropdownWithCar = ({ Data, title, subTitle }) => {
    console.log(Data)
    const [porche, setPorche] = useState(false)
    const porcheDrop = () => {
        setPorche(!porche)
    }
    return (
        <div className=''>

            <div onClick={porcheDrop} className='bg-[#F6F7F9] mt-2  rounded-xl p-3 flex justify-between items-center cursor-pointer '>
                <div>
                    <p className='text-sm font-medium text-[#1A202C]'>{title}</p>
                    <h1 className='text-md text-[#90A3BF] '>{subTitle}</h1>
                </div>
                <MdKeyboardArrowDown className='text-2xl' />
            </div>
            {porche && (
                <div className=' absolute left-0 z-40 grid  grid-cols-3 gap-2 bg-white right-0  p-2'>
                    {Data.map((item) => (
                     <div className='bg-[#EDEDED] rounded-lg p-2 h-22'>
                        <Image src="/image 6.png" alt="image 6" width={71} height={32}/>
                        <button className='bg-[#0B5CFF] text-white text-center rounded-md w-full   text-[7px] p-1 mt-2'>Suv/ Crossover</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default DropdownWithCar
