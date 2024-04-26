"use client"
import React, { useState } from 'react'
import { TbFilterSearch } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const UsedCar = () => {
    const [fundDrop, setFundDrop] = useState(false)
    const [porche, setPorche] = useState(false)

    const fundamentalsDropdown = () => {
        setFundDrop(!fundDrop)
    }
    const porcheDrop = () => {
        setPorche(!porche)
    }
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
                    <div className='rounded-xl  border p-3 mt-5'>
                        <div className=' flex justify-between items-center  cursor-pointer' onClick={fundamentalsDropdown}>
                            <h1 className='text-xl text-black font-medium'>Fundamentals</h1>
                            {fundDrop ? <MdOutlineKeyboardArrowUp className='text-2xl' /> : <MdKeyboardArrowDown className='text-2xl' />}
                        </div>
                        {fundDrop && (
                            <>
                                <hr className='border my-3' />
                                <div onClick={porcheDrop} className='bg-[#F6F7F9] rounded-xl p-3 flex justify-between items-center cursor-pointer '>
                                    <div>
                                        <p className='text-xs text-black'>Make</p>
                                        <h1 className='text-md text-[#90A3BF] '>Porche</h1>
                                    </div>

                                    <MdKeyboardArrowDown className='text-2xl' />
                                </div>
                                {porche && (
                                    <div className='mt-5'>
                                        <div className='w-full relative'>
                                            <CiSearch className='absolute left-3  top-2 text-[#787878] md:text-md text-xl ' />
                                            <input type='text' placeholder='Search by keyword' className='bg-[#F6F7F9] p-2 pl-9 text-xs text-[#90A3BF] focus:border-[#0B5CFF] outline-none border-2 border-white w-full  rounded-xl ' />
                                        </div>
                                        <div className='flex items-center mt-5 space-x-2 text-md pl-3 hover:bg-[#0B5CFF] p-1 hover:text-white rounded-lg cursor-pointer'>
                                            <input type="checkbox" className='border-[#787878] w-4 h-4' />
                                            <h1>All</h1>
                                            <p className='text-[10px] text-[#90A3BF]'>(2,367)</p>
                                        </div>
                                        <div className='flex items-center mt-2 space-x-2 text-md pl-3 hover:bg-[#0B5CFF] p-1 hover:text-white rounded-lg cursor-pointer'>
                                            <input type="checkbox" className='border-[#787878] w-4 h-4' />
                                            <h1>Honda</h1>
                                            <p className='text-[10px] text-[#90A3BF]'>(989)</p>
                                        </div>
                                        <div className='flex items-center mt-2 space-x-2 text-md pl-3 hover:bg-[#0B5CFF] p-1 hover:text-white rounded-lg cursor-pointer'>
                                            <input type="checkbox" className='border-[#787878] w-4 h-4' />
                                            <h1>Ford</h1>
                                            <p className='text-[10px] text-[#90A3BF]'>(281)</p>
                                        </div>
                                        <div className='flex items-center mt-2 space-x-2 text-md pl-3 hover:bg-[#0B5CFF] p-1 hover:text-white rounded-lg cursor-pointer'>
                                            <input type="checkbox" className='border-[#787878] w-4 h-4' />
                                            <h1>Volkswagen</h1>
                                            <p className='text-[10px] text-[#90A3BF]'>(56)</p>
                                        </div>
                                        <div className='flex items-center mt-2 space-x-2 text-md pl-3 hover:bg-[#0B5CFF] p-1 hover:text-white rounded-lg cursor-pointer'>
                                            <input type="checkbox" className='border-[#787878] w-4 h-4' />
                                            <h1>BMW</h1>
                                            <p className='text-[10px] text-[#90A3BF]'>(80)</p>
                                        </div>
                                        <div className='flex items-center mt-2 space-x-2 text-md pl-3 hover:bg-[#0B5CFF] p-1 hover:text-white rounded-lg cursor-pointer'>
                                            <input type="checkbox" className='border-[#787878] w-4 h-4' />
                                            <h1>Chevrolet</h1>
                                            <p className='text-[10px] text-[#90A3BF]'>(13)</p>
                                        </div>
                                        <div className='flex items-center mt-2 space-x-2 text-md pl-3 hover:bg-[#0B5CFF] p-1 hover:text-white rounded-lg cursor-pointer'>
                                            <input type="checkbox" className='border-[#787878] w-4 h-4' />
                                            <h1>Mercedes-Benz</h1>
                                            <p className='text-[10px] text-[#90A3BF]'>(6)</p>
                                        </div>
                                        <div className='flex items-center mt-2 space-x-2 text-md pl-3 hover:bg-[#0B5CFF] p-1 hover:text-white rounded-lg cursor-pointer'>
                                            <input type="checkbox" className='border-[#787878] w-4 h-4' />
                                            <h1>Jeep</h1>
                                            <p className='text-[10px] text-[#90A3BF]'>(32)</p>
                                        </div>
                                        <div className='flex items-center mt-2 space-x-2 text-md pl-3 hover:bg-[#0B5CFF] p-1 hover:text-white rounded-lg cursor-pointer'>
                                            <input type="checkbox" className='border-[#787878] w-4 h-4' />
                                            <h1>Porche</h1>
                                            <p className='text-[10px] text-[#90A3BF]'>(18)</p>
                                        </div>
                                    </div>
                                )}

                                {/* <div className='bg-[#F6F7F9] my-3 rounded-xl p-3 flex justify-between items-center  '>
                                    <div>
                                        <p className='text-xs text-black'>Model</p>
                                        <h1 className='text-md text-[#90A3BF] '>Gt3 RS</h1>
                                    </div>
                                    <MdKeyboardArrowDown className='text-2xl' />
                                </div>
                                <div className='bg-[#F6F7F9] rounded-xl p-3 flex justify-between items-center  '>
                                    <div>
                                        <p className='text-xs text-black'>Zip Code</p>
                                        <h1 className='text-md text-[#90A3BF] '>796854</h1>
                                    </div>
                                </div>
                                <div className='flex items-center mt-10 gap-5'>
                                    <div className='  bg-[#F6F7F9] w-full p-3 rounded-xl'>
                                        <form class="max-w-sm mx-auto ">
                                            <label for="countries" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Min Price</label>
                                            <select id="countries" class="bg-gray-50  text-[#90A3BF] text-lg -ml-1 outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  ">
                                                <option value="US" className='text-sm text-black mt-3'>Select</option>
                                                <option selected className='text-sm text-black mt-3'>20,000</option>
                                                <option value="US" className='text-sm text-black mt-3'>15,000</option>
                                                <option value="CA" className='text-sm text-black mt-3'>25,000</option>
                                                <option value="FR" className='text-sm text-black mt-3'>35,000</option>
                                                <option value="DE" className='text-sm text-black mt-3'>45,000</option>
                                                <option className='text-sm text-black mt-3'>55,000</option>
                                                <option value="US" className='text-sm text-black mt-3'>65,000</option>
                                                <option value="CA" className='text-sm text-black mt-3'>75,000</option>
                                                <option value="FR" className='text-sm text-black mt-3'>85,000</option>
                                                <option value="DE" className='text-sm text-white mt-3'>95,000</option></select>
                                        </form>
                                    </div>
                                    <div className='  bg-[#F6F7F9]  w-full p-3 rounded-xl'>
                                        <form class="max-w-sm mx-auto ">
                                            <label for="countries" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Max Price</label>
                                            <select id="countries" class="bg-gray-50  text-[#90A3BF] text-lg -ml-1 outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  ">
                                                <option value="US" className='text-sm text-black mt-3'>Select</option>
                                                <option selected className='text-sm text-black mt-3'>80,000</option>
                                                <option value="US" className='text-sm text-black mt-3'>15,000</option>
                                                <option value="CA" className='text-sm text-black mt-3'>25,000</option>
                                                <option value="FR" className='text-sm text-black mt-3'>35,000</option>
                                                <option value="DE" className='text-sm text-black mt-3'>45,000</option>
                                                <option className='text-sm text-black mt-3'>55,000</option>
                                                <option value="US" className='text-sm text-black mt-3'>65,000</option>
                                                <option value="CA" className='text-sm text-black mt-3'>75,000</option>
                                                <option value="FR" className='text-sm text-black mt-3'>85,000</option>
                                                <option value="DE" className='text-sm text-white mt-3'>95,000</option></select>
                                        </form>
                                    </div>
                                </div> */}
                            </>
                        )}

                    </div>
                    {/* styles */}
                    {/* <div className='rounded-xl  border p-3 mt-5'>
                        <div className=' flex justify-between items-center  cursor-pointer' onClick={fundamentalsDropdown}>
                            <h1 className='text-xl text-black font-medium'>Style</h1>
                            {fundDrop ? <MdOutlineKeyboardArrowUp className='text-2xl' /> : <MdKeyboardArrowDown className='text-2xl' />}
                        </div>
                        {fundDrop && (
                            <>
                                <hr className='border my-3' />
                                <div className='bg-[#F6F7F9] rounded-xl p-3 flex justify-between items-center  '>
                                    <div>
                                        <p className='text-xs text-black'>Body Style</p>
                                        <h1 className='text-md text-[#90A3BF] '>Sports Car</h1>
                                    </div>
                                    
                                    <MdKeyboardArrowDown className='text-2xl' />
                                </div>
                                <div className='bg-[#F6F7F9] my-3 rounded-xl p-3 flex justify-between items-center  '>
                                    <div>
                                        <p className='text-xs text-black'>Model Category</p>
                                        <h1 className='text-md text-[#90A3BF] '>Luxury</h1>
                                    </div>
                                    <MdKeyboardArrowDown className='text-2xl' />
                                </div>
                                <div className='bg-[#F6F7F9] rounded-xl p-3 flex justify-between items-center  '>
                                    <div>
                                        <p className='text-xs text-black'>Exterior Color</p>
                                        <h1 className='text-md text-[#90A3BF] '>Red</h1>
                                    </div>
                                    <div>
                                    <MdKeyboardArrowDown className='text-2xl' />
                                    </div>
                                </div>
                              
                                    <div className='  bg-[#F6F7F9] w-full p-3 rounded-xl'>
                                        <form class="max-w-sm mx-auto ">
                                            <label for="countries" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Min Price</label>
                                            <select id="countries" class="bg-gray-50  text-[#90A3BF] text-lg -ml-1 outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  ">
                                                <option value="US" className='text-sm text-black mt-3'>Select</option>
                                                <option selected className='text-sm text-black mt-3'>20,000</option>
                                                <option value="US" className='text-sm text-black mt-3'>15,000</option>
                                                <option value="CA" className='text-sm text-black mt-3'>25,000</option>
                                                <option value="FR" className='text-sm text-black mt-3'>35,000</option>
                                                <option value="DE" className='text-sm text-black mt-3'>45,000</option>
                                                <option className='text-sm text-black mt-3'>55,000</option>
                                                <option value="US" className='text-sm text-black mt-3'>65,000</option>
                                                <option value="CA" className='text-sm text-black mt-3'>75,000</option>
                                                <option value="FR" className='text-sm text-black mt-3'>85,000</option>
                                                <option value="DE" className='text-sm text-white mt-3'>95,000</option></select>
                                        </form>
                                    </div>
                                    <div className='  bg-[#F6F7F9]  w-full p-3 rounded-xl'>
                                        <form class="max-w-sm mx-auto ">
                                            <label for="countries" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Max Price</label>
                                            <select id="countries" class="bg-gray-50  text-[#90A3BF] text-lg -ml-1 outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  ">
                                                <option value="US" className='text-sm text-black mt-3'>Select</option>
                                                <option selected className='text-sm text-black mt-3'>80,000</option>
                                                <option value="US" className='text-sm text-black mt-3'>15,000</option>
                                                <option value="CA" className='text-sm text-black mt-3'>25,000</option>
                                                <option value="FR" className='text-sm text-black mt-3'>35,000</option>
                                                <option value="DE" className='text-sm text-black mt-3'>45,000</option>
                                                <option className='text-sm text-black mt-3'>55,000</option>
                                                <option value="US" className='text-sm text-black mt-3'>65,000</option>
                                                <option value="CA" className='text-sm text-black mt-3'>75,000</option>
                                                <option value="FR" className='text-sm text-black mt-3'>85,000</option>
                                                <option value="DE" className='text-sm text-white mt-3'>95,000</option></select>
                                        </form>
                                    </div>
                                
                            </>
                        )}

                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default UsedCar
