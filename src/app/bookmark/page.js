import React from 'react'
import { CiSearch } from "react-icons/ci";
import PopularCars from '../component/popularCars';
import BookmarkData from "../../data/carData.json"
const BookMark = () => {
    return (
        <div>
            <div className=' w-full md:h-[30vh] md:mt-40 mt-24 h-[20vh] flex flex-col justify-center text-center items-center'>
                <div className='md:w-[50%] w-[80%] mx-auto '>
                    <p className='text-md text-[#0B5CFF] text-center'>Your Saved Cars</p>
                    <h1 className='text-5xl font-bold text-[#1A202C] text-center'>Bookmarks</h1>
                    <div className='bg-white relative md:rounded-xl rounded-lg '>
                        <div className='w-full  md:mt-6 mt-3 p-2'>
                            <CiSearch className='absolute left-8 md:top-9 top-5 text-[#90A3BF] md:text-3xl text-xl ' />
                            <input type='text' placeholder='Search by keyword' className='bg-[#F6F7F9] md:text-lg text-xs text-[#90A3BF] focus:border-[#0B5CFF] outline-none border-2 border-white w-full md:pl-16 pl-12 md:p-5 p-3 md:rounded-xl rounded-lg ' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[80%] mx-auto'>
            <PopularCars Data={BookmarkData} />
            <PopularCars Data={BookmarkData} />

            </div>
        </div>
    )
}

export default BookMark
