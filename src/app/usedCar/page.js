"use client"
import React, { useState } from 'react'
import { TbFilterSearch } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import Fundamentals from '../component/fundamentals';
import Style from "../component/style"
import Performence from '../component/performance';
import Features from '../component/features';
import { RxCrossCircled } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import HighestPrice from '../component/highestPrice';
import PriceData from "../../data/highestPrice.json"
import HomeDataJson from "../../data/home.json"
import PopularCars from '../component/popularCars';
const UsedCar = () => {
    const [checkedItems, setCheckedItems] = useState([]);
    const [HomeData, setHomeData] = useState(HomeDataJson);
    const [filter, setFilter] = useState(false)
    const filterDrop = () => {
        setFilter(!filter)
    }


    // const filterData = (inputValue) => {
    //     const filteredCars = HomeData.filter(car => {
    //         return car.name.toLowerCase().includes(inputValue.toLowerCase()) ||
    //             car.building.toLowerCase().includes(inputValue.toLowerCase());
    //     });
    //     if (inputValue) {
    //         setHomeData(filteredCars); // Log the filtered cars array
    //     } else {
    //         setHomeData(HomeDataJson)
    //     }
    // };

    const filterData = (inputValue) => {
        // Set the filtered data
        let filteredCars;
    
        if (typeof inputValue === 'string' && inputValue!="") {
            console.log("test",inputValue)
            // If inputValue is a string, filter based on car name or building
            filteredCars = HomeData.filter(car => {
                return car.name.toLowerCase().includes(inputValue.toLowerCase()) ||
                    car.building.toLowerCase().includes(inputValue.toLowerCase());
            });
        } else if (Array.isArray(inputValue) && inputValue.length > 0) {
            // If inputValue is a non-empty array, extract names from objects and filter based on those names
            const names = inputValue.map(obj => obj.name.toLowerCase());
            filteredCars = HomeData.filter(car => {
                return names.includes(car.make.toLowerCase());
            });
        } else {
            // If inputValue is empty or not an array, set HomeData to HomeDataJson
            setHomeData(HomeDataJson);
            return;
        }
    
        // Set HomeData to filteredCars
        setHomeData(filteredCars);
    };
    
    
 

    // Example usage: Call filterData function when the input value changes
    const handleInputChange = (event) => {
        const inputValue = event.target.value;

        filterData(inputValue); // Filter the data based on the input value
    };

    const handleFilterClick = (checkBox) => {
        filterData(checkBox)
    }


    return (
        <div className='lg:mt-40 mt-24 h-screen w-[90%] mx-auto xl:mb-[1700px] md:mb-[2200px] relative mb-[4700px]  '>
            <div className=' lg:flex justify-around gap-10'>
                <div className='bg-white md:block hidden mt-20   h-[90px] rounded-xl'>
                    <button onClick={filterDrop} className='bg-[#0B5CFF] hover:bg-opacity-90 cursor-pointer w-72 p-4 m-4 text-white rounded-2xl flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <TbFilterSearch className='text-3xl' />
                            <h1 className='text-xl'>Filters</h1>
                        </div>
                        <MdKeyboardArrowDown className='text-3xl' />
                    </button>
                    {filter && (
                        <div className='bg-white w-80  p-3 -mt-4 rounded-xl'>
                            <Fundamentals handleFilterClick={handleFilterClick} />
                            <Style />
                            <Performence />
                            <Features />
                            <button className='bg-[#0B5CFF] hover:bg-opacity-90 cursor-pointer text-white p-3 rounded-xl mt-3 w-full text-center text-xl'>Update</button>
                        </div>
                    )}
                </div>
                <div className='w-full '>
                    <div className='w-full lg:flex items-end justify-between'>
                        <div>
                            <p className='text-[#0B5CFF] font-medium'>{HomeData.length} Results</p>
                            <h1 className='xl:text-4xl md:text-4xl text-xl font-medium text-[#1A202C]'>Explore Used Cars For Sale</h1>
                        </div>
                        <div className='lg:block hidden'>
                            <div className='bg-[#0B5CFF] hover:bg-opacity-90 cursor-pointer cursor-pointer text-white rounded-xl p-3 w-52 h-10 flex gap-2 items-center justify-center'>
                                <RxCrossCircled className='text-xl' />
                                <p className='text-lg'>Clear All Filters</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full bg-white mt-5 rounded-xl lg:flex p-3 items-center gap-2'>
                        <div className='w-full relative lg:mb-0 mb-2'>
                            <CiSearch className='absolute md:left-8 left-4 md:top-4 top-2 text-[#90A3BF] md:text-3xl text-xl ' />
                            <input type='text' placeholder='Search by keyword' onChange={handleInputChange} className='md:text-lg bg-[#F6F7F9] text-sm text-[#90A3BF] focus:border-[#0B5CFF] outline-none border-2 border-white w-full md:pl-16 pl-10 md:p-4 p-2 md:rounded-2xl rounded-lg ' />
                        </div>
                        <div className='w'>
                            <HighestPrice Data={PriceData} title={"Sort by"} subTitle={"Highest Price"} />
                        </div>
                    </div>
                    <div className='bg-white  md:hidden block mt-3 lg:w-80 p-3 h-[90px] rounded-xl'>
                        <button onClick={filterDrop} className='bg-[#0B5CFF] z-80 lg:w-72 p-4 w-full text-white rounded-2xl flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <TbFilterSearch className='text-2xl' />
                                <h1 className='text-md'>Filters</h1>
                            </div>
                            <MdKeyboardArrowDown className='text-3xl' />
                        </button>
                        {filter && (
                            <div className='bg-white absolute z-40 left-0 right-0  w-full p-3 rounded-xl'>
                                <Fundamentals />
                                <Style />
                                <Performence />
                                <Features />
                                <button className='bg-[#0B5CFF] text-white p-3 rounded-xl mt-3 w-full text-center text-xl'>Update</button>
                            </div>
                        )}
                    </div>
                    <PopularCars column={"12"} Data={HomeData} grid={"xl:grid-cols-3"} color={"#D3E2FF"} textColor={'text-[#0B5CFF]'} borderRadius={"2xl"} />

                </div>

            </div>
        </div>
    )
}

export default UsedCar
