"use client"
import React, { useState } from 'react'
import { TbFilterSearch } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import Fundamentals from '../component/fundamentals';
import Style from "../component/style"
import Performence from '../component/performance';
import Features from '../component/features';
const UsedCar = () => {
    return (
        <div className='mt-40 h-screen'>
            <div className=''>
                <div className='bg-white p-3 w-80'>
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
                </div>

            </div>
        </div>
    )
}

export default UsedCar
