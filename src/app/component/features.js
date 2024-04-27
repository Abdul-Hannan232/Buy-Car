"use client"
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import DropdownWithSearch from "../component/dropdownWithSearch"
import CarData from "../../data/styleCars.json"
import AdditionalFeatures from "../../data/additionalFeatures.json"
import CarColor from "../../data/carColor.json"
const Features = () => {
    const seatingCapacity = [
        {name:"Select",count:"(2,367)"},
        {name:"02",count:"(989)"},
        {name:"04",count:"(475))"},
        {name:"06",count:"(281)"},
    ]
    const [fundDrop, setFundDrop] = useState(false)
    const fundamentalsDropdown = () => {
        setFundDrop(!fundDrop)
    }
    return (
        <div>
            <div className='rounded-xl relative  border p-3 mt-5 bg-white'>
                <div className=' flex justify-between items-center  cursor-pointer' onClick={fundamentalsDropdown}>
                    <h1 className='text-xl text-black font-medium'>Features </h1>
                    {fundDrop ? <MdOutlineKeyboardArrowUp className='text-2xl' /> : <MdKeyboardArrowDown className='text-2xl' />}
                </div>
                {fundDrop && (
                    <>
                        <hr className='border my-3' />

                        {/* first drop down */}
                        <DropdownWithSearch Data={seatingCapacity} title="Seating Capacity" subTitle="6" />

                        {/* second dropdown */}

                        <DropdownWithSearch Data={seatingCapacity} title="Number of Doors" subTitle="4" />

                        <DropdownWithSearch Data={AdditionalFeatures} title="Additional Features" subTitle="Cameras" />

                    </>
                )}
            </div>
        </div>
    )
}

export default Features
