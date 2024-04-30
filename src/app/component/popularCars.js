"use client"
import React, { useState } from 'react';
import { IoHeart } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { PiMedalFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { TbBuilding } from "react-icons/tb";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import renderStars from '@/utils/rating';

const PopularCars = ({ Data, grid, color, textColor, column }) => {
    const [clickedItems, setClickedItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(column); // Number of items per page

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Data.slice(indexOfFirstItem, indexOfLastItem);

    const handleClick = (index) => {
        const newClickedItems = [...clickedItems];
        newClickedItems[index] = !newClickedItems[index];
        setClickedItems(newClickedItems);
        const isBookmarked = newClickedItems[index];
        const message = isBookmarked ? 'Add into Bookmarked' : 'Remove From Bookmarked';
        // Show toast notification
        toast.success(message);
    };

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className=' mx-auto md:mt-14 mt-5  '>
            <ToastContainer />

            <div className={`mt-14 grid ${grid} lg:grid-cols-3 z-20 justify-between  md:grid-cols-2 place-items-center  grid-cols-1 gap-5`}>
                {currentItems.map((item, index) => (
                  
                        <div className='2xl:w-[340px] w-[260px] mb-20 rounded-3xl 2xl:p-10 p-6 bg-white 2xl:h-[450px] h-[380px] relative shadow-xl'>
                            <div className='flex justify-between'>
                                <div>
                                    <h1 className='2xl:text-2xl text-xl font-bold'>{item.name}</h1>
                                    <p className='text-[#90A3BF] text-md mt-1'>{item.quality}</p>
                                </div>
                                <IoHeart
                                    className={`text-xl cursor-pointer   ${item.bookmark ? "text-red-500" : ""} ${clickedItems[index] ? 'text-red-500' : 'text-[#90A3BF]'}`}
                                    onClick={() => handleClick(index)}
                                />
                            </div><br />
                            <Link href="/carDetail" key={index}>
                                 <Image src={item.image ? item.image[0] : "/car1.png"} alt="car" width={180} height={56} className='w-44 h-20' />
                                 </Link> 
                            <h1 className='2xl:text-4xl text-2xl font-bold text-[#0B5CFF] 2xl:my-7 my-4'>{item.amount}</h1>
                            <div className='flex items-center space-x-1'>
                                <PiMedalFill className='2xl:text-md text-sm  text-[#90A3BF] text-3xl mr-2' />
                                <p className='2xl:text-sm text-xs text-[#90A3BF] '>{item.rating}.0</p>
                                {renderStars(item.rating)}
                                <p className='2xl:text-xs text-[10px] text-[#90A3BF] font-bold'>(32 reviews)</p>
                            </div>
                            <div className='flex items-center my-3 gap-2 space-x-1'>
                                <FaLocationDot className='2xl:text-md text-sm  text-[#90A3BF] text-3xl' />
                                <p className='2xl:text-sm text-xs text-[#90A3BF] font-bold'>{item.country}</p>
                            </div>
                            <div className='flex items-center gap-2 space-x-1'>
                                <TbBuilding className='2xl:text-md text-sm text-[#90A3BF] text-3xl' />
                                <p className=' 2xl:text-sm text-xs  text-[#90A3BF] font-bold'>{item.building}</p>
                            </div>
                            <button className={`w-44  absolute  left-0 right-0 2xl:mt-10  mt-8 flex justify-center  mx-auto ${textColor}  bg-[${color}] text-center font-bold py-3 rounded-2xl text-md font-medium`}>Check Availability</button>
                        </div>
                ))}
            </div>

            {/* Pagination */}
            <ul className="flex justify-end">
                {[...Array(Math.min(10, Math.ceil(Data.length / itemsPerPage))).keys()].map(number => (
                    <li key={number} className="mx-1 my-1">
                        <button
                            onClick={() => paginate(number + 1)}
                            className={`px-3 py-1 rounded-lg ${currentPage === number + 1 ? 'bg-[#0B5CFF] text-white' : 'bg-white'}`}
                        >
                            {number + 1}
                        </button>
                    </li>
                ))}
            </ul>


        </div>
    );
};

export default PopularCars;
