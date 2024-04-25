"use client"
import React, { useState } from 'react';
import Image from "next/image"
import { LuHeart } from "react-icons/lu";
import Link from "next/link"
import { IoIosMenu } from "react-icons/io";
import { RiHome5Line } from "react-icons/ri";
import { LiaCarSolid } from "react-icons/lia";
import { TbCalculator } from "react-icons/tb";

const Navbar = () => {
    const [activeButton, setActiveButton] = useState('signup');
    const [dropDown, setDropDown] = useState(false)
    const handleLoginClick = () => {
        setActiveButton('login');
    };

    const handleSignupClick = () => {
        setActiveButton('signup');
    };
    const navbarDropDown = () => {
        setDropDown(!dropDown)
    }

    return (
       <div className='bg-white shadow-xl '>
         <div className='flex relative bg-white  items-center xl:justify-around  justify-between  w-[95%] mx-auto xl:p-10  px-2 py-5'>
            <div className='xl:border-r-[#CACACA] xl:pr-10 xl:border-2 border-transparent'>
                <Image src="/website-logo.png" alt="Logo" width={102} height={31} className='xl:w-64  w-32 ' />
            </div>
            <div className='xl:block hidden'>
                <ul className='text-xl font-medium flex items-center xl:space-x-20 space-x-4  ' >
                    <li className='hover:border-b-black border-transparent pb-1 border-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-700 '><Link href="#">Home</Link></li>
                    <li className='hover:border-b-black border-transparent pb-1 border-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-700 '><Link href="#">Used Cars</Link></li>
                    <li className='hover:border-b-black border-transparent pb-1 border-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-700 '><Link href="#">Car Payment Calculator</Link></li>
                </ul>
            </div>
            <div className='flex items-center xl:space-x-5 space-x-2'>
                <div className='xl:w-16 xl:h-16 md:w-12 md:h-12 w-8 h-8   xl:rounded-2xl rounded-lg bg-[#F6F7F9] mx-auto flex items-center  flex-col justify-center'>
                    <Image src="/setting-icon.png" alt="setting-icon" width={28} height={28} className='xl:w-[28px] xl:h-[28px] w-4 h-4' />
                </div>
                <div className='xl:w-16 xl:h-16 md:w-12 md:h-12 w-8 h-8   xl:rounded-2xl rounded-lg bg-[#F6F7F9] mx-auto flex items-center  flex-col justify-center'>
                    <LuHeart className='text-[#0B5CFF] xl:text-3xl md:text-xl text-md' />
                </div>
                <div onClick={navbarDropDown} className='xl:w-16 xl:h-16 md:w-12 md:h-12 w-8 h-8   xl:rounded-2xl rounded-lg xl:hidden block bg-[#0B5CFF] mx-auto flex items-center  flex-col justify-center'>
                    <IoIosMenu className='text-white xl:text-3xl text-xl' />
                </div>
                <div className='flex items-center gap-1 xl:border-[#0B5CFF] xl:border-2 xl:rounded-3xl xl:p-2'>
                    <button
                        className={`focus:bg-[#0B5CFF] xl:block hidden cursor-pointer w-28 text-xl text-white rounded-2xl text-center p-3 ${activeButton === 'login' ? 'bg-[#0B5CFF]' : ''
                            }`}
                        onClick={handleLoginClick}
                    >
                        Login
                    </button>
                    <button
                        className={`focus:bg-[#0B5CFF]  xl:block hidden cursor-pointer w-28 text-xl text-white rounded-2xl text-center p-3 ${activeButton === 'signup' ? 'bg-[#0B5CFF]' : ''
                            }`}
                        onClick={handleSignupClick}
                    >
                        Signup
                    </button>
                </div>
            </div>
            {/* mobile navbar dropdown */}
            {dropDown && (
                <div className='bg-gray-100 absolute md:top-20 top-16 h-screen right-0 left-0 transition-all duration-300 ease-in-out'>
                    <div className='w-[85%] mx-auto mt-20'>
                        <div className='flex items-center mt-2 gap-4 p-3 bg-white hover:bg-[#0B5CFF] rounded-xl hover:text-white text-black'>
                            <RiHome5Line className='text-3xl' />
                            <Link href="#" className='text-md font-medium'>Home</Link>
                        </div>
                        <div className='flex items-center mt-2 gap-4 p-3 hover:bg-[#0B5CFF] bg-white rounded-xl hover:text-white'>
                            <LiaCarSolid className='text-3xl' />
                            <Link href="#" className='text-md font-medium'>Used Cars</Link>
                        </div>
                        <div className='flex items-center mt-2 gap-4 p-3 bg-white hover:bg-[#0B5CFF] rounded-xl hover:text-white text-black'>
                            <TbCalculator className='text-3xl' />
                            <Link href="#" className='text-md font-medium'>Car Payment Calculator</Link>
                        </div>
                        <div className='flex items-center gap-2 mt-20'>
                            <button className='bg-[#D3E2FF] text-sm w-full text-center p-3 rounded-xl'>Login</button>
                            <button className='bg-[#D3E2FF] text-sm w-full text-center p-3 rounded-xl'>Signup</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
       </div>
    )
}

export default Navbar
