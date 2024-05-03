"use client"
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import makePorch from "../../data/makeData.json"
import model from "../../data/model.json"
import DropdownWithSearch from '../component/dropdownWithSearch';
import DropdownWithMaxMin from '../component/dropdownWithMaxMin';
import minData from "../../data/minMax.json"
import minYear from "../../data/minMaxYear.json"
const Fundamentals = ({handleFilterClick}) => {
  const [fundDrop, setFundDrop] = useState(false)
  const fundamentalsDropdown = () => {
    setFundDrop(!fundDrop)
  }
  return (
    <div>
      <div className='rounded-xl relative  border p-3 mt-5 bg-white'>
        <div className=' flex justify-between items-center  cursor-pointer' onClick={fundamentalsDropdown}>
          <h1 className='text-xl text-[#1A202C] font-medium'>Fundamentals</h1>
          {fundDrop ? <MdOutlineKeyboardArrowUp className='text-2xl' /> : <MdKeyboardArrowDown className='text-2xl' />}
        </div>
        {fundDrop && (
          <>
            <hr className='border my-3' />

            {/* first drop down */}
     
            <DropdownWithSearch Data={makePorch} title="Make" handleFilterClick={handleFilterClick} subTitle="Porch" />

            {/* second dropdown */}

          <DropdownWithSearch Data={model} title="Model" subTitle="GT3RS" /> 


            <div className='bg-[#F6F7F9] rounded-xl mt-2 p-3 w-full '>
              <div>
                <p className='text-xs text-[#1A202C]'>Zip Code</p>
                <input type="number" placeholder='796854' className='bg-[#F6F7F9] w-full  text-md text-[#90A3BF] outline-none' />
              </div>
            </div>
            {/* Min max PrICE */}

            <div className='flex  w-full items-center mt-10 gap-5'>

              <DropdownWithMaxMin title="Min Price" number="20,000" Data={minData} />
              <DropdownWithMaxMin title="Max Price" number="80,000" Data={minData} /> 
            </div>

            {/* Min Max Year */}

            <div className='flex  w-full items-center mt-10 gap-5'>

             <DropdownWithMaxMin title="Min Year" number="2018" Data={minYear} />
              <DropdownWithMaxMin title="Max Year" number="2023" Data={minYear} /> 
            </div>
            
            <div className='bg-[#F6F7F9] rounded-xl mt-10 p-3 w-full '>
              <div>
                <p className='text-xs text-[#1A202C]'>Mileage (Miles)</p>
                <input type="number" placeholder='45,000' className='bg-[#F6F7F9] w-full  text-md text-[#90A3BF] outline-none' />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Fundamentals
