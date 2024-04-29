"use client"
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import DropdownWithSearch from "../component/dropdownWithSearch"
import CarData from "../../data/styleCars.json"
import performanceEngine from "../../data/performence-engine"
import performancetransition from "../../data/performence-transition"
import DropdownWithMaxMin from './dropdownWithMaxMin';
import minEngine from "../../data/minEngine.json"
const Performence = () => {
    const [fundDrop, setFundDrop] = useState(false)
    const fundamentalsDropdown = () => {
        setFundDrop(!fundDrop)
    }
    return (
        <div>
            <div className='rounded-xl relative  border p-3 mt-5 bg-white'>
                <div className=' flex justify-between items-center  cursor-pointer' onClick={fundamentalsDropdown}>
                    <h1 className='text-xl text-[#1A202C] font-medium'>Performance</h1>
                    {fundDrop ? <MdOutlineKeyboardArrowUp className='text-2xl' /> : <MdKeyboardArrowDown className='text-2xl' />}
                </div>
                {fundDrop && (
                    <>
                        <hr className='border my-3' />

                        {/* first drop down */}
                        <DropdownWithSearch Data={performanceEngine} title="Transmission" subTitle="Automatic" />

                        {/* second dropdown */}

                        <DropdownWithSearch Data={performancetransition} title="Engine Type" subTitle="Petrol" />
                     <div className='bg-[#F6F7F9] mt-5 p-3 rounded-xl'>
                        <p className='text-sm font-medium'>Engine Capacity (CC)</p>
                     <div className='flex bg-white p-3 rounded-xl mt-3  w-full items-center gap-5'>

<DropdownWithMaxMin title="Min " number="500" Data={minEngine} />
<DropdownWithMaxMin title="Max " number="1200" Data={minEngine} />
</div>
                     </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Performence
