"use client"
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import DropdownWithcar from "../component/dropdownWithCar"
import DropdownWithSearch from "../component/dropdownWithSearch"
import CarData from "../../data/styleCars.json"
import CarColor from "../../data/carColor.json"
import DropddownCar from "../../data/dropDownCar.json"
const Style = () => {
    const [fundDrop, setFundDrop] = useState(false)
    const fundamentalsDropdown = () => {
        setFundDrop(!fundDrop)
    }
    return (
        <div>
            <div className='rounded-xl relative  border p-3 mt-5 bg-white'>
                <div className=' flex justify-between items-center  cursor-pointer' onClick={fundamentalsDropdown}>
                    <h1 className='text-xl text-[#1A202C] font-medium'>Style</h1>
                    {fundDrop ? <MdOutlineKeyboardArrowUp className='text-2xl' /> : <MdKeyboardArrowDown className='text-2xl' />}
                </div>
                {fundDrop && (
                    <>
                        <hr className='border my-3' />

                        {/* first drop down */}
                        <DropdownWithcar Data={DropddownCar} title="Model Category" subTitle="Luxury" />

                        {/* second dropdown */}

                        <DropdownWithSearch Data={CarColor} title="Exterior Color" subTitle="Red" />

                        <DropdownWithSearch Data={CarColor} title="Interior Color" subTitle="Orange" />

                    </>
                )}
            </div>
        </div>
    )
}

export default Style
