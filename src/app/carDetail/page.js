import Head from 'next/head';
import Carousel from '../component/carousel.js';
import Image from "next/image"
import { IoMdStar } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { PiMedalFill } from "react-icons/pi";
import { IoIosCall } from "react-icons/io";
import { RxExternalLink } from "react-icons/rx";
import CarDetail from "../../data/carDetail.json"

export default function Home() {
    const style = [
        {
            key: "Body Style",
            value: "Sedan"
        },

        {
            key: "Model Category",
            value: "Family Car"
        },
        {
            key: "Exterior Color",
            value: "Orange"
        },
        {
            key: "Interior Color",
            value: "Red"
        }
    ]
    const performence = [
        {
            key: "Transmission",
            value: "Automatic"
        },

        {
            key: "Engine Type",
            value: "Hybrid"
        },
        {
            key: "Engine Capacity (CC)",
            value: "2,000 CC"
        }
    ]
    const features = [
        {
            key: "Seating Capacity",
            value: "05"
        },

        {
            key: "Number of Doors",
            value: "04"
        },
        {
            key: "Additional Features",
            value: "Rearview camera, Lane departure warning, Apple CarPlay/Android Auto, Navigation system, Automatic emergency braking"
        }
    ]
    return (
        <>
            <div className='flex  mt-32 gap-10 w-[85%] mx-auto '>
                <main className="container mx-auto w-[60%] ">
                    <Carousel />
                    <div className='flex items-end gap-5 mt-5 '>
                        <div className='w-full'>
                            <h1 className='text-2xl font-bold text-[#313131] '>Honda Civic</h1>
                            <h1 className='text-5xl font-bold text-[#0B5CFF]'> $20,000</h1>
                            <div className='mt-10 grid grid-cols-4 justify-between px-2 rounded-xl bg-white  py-3'>
                                <div className='text-center'>
                                    <Image src="/calendar.png" alt="image1" width={24} height={24} className='mx-auto' />
                                    <h1 className='text-[#90A3BF] text-sm'>2023</h1>
                                </div>
                                <div className='text-center'>
                                    <Image src="/speedometer.png" alt="image1" width={24} height={24} className='mx-auto' />
                                    <h1 className='text-[#90A3BF] text-sm'>25K miles</h1>
                                </div>
                                <div className='text-center'>
                                    <Image src="/gas-station.png" alt="image1" width={24} height={24} className='mx-auto' />
                                    <h1 className='text-[#90A3BF] text-sm'>Hybrid</h1>
                                </div>
                                <div className='text-center'>
                                    <Image src="/Group 110.png" alt="image1" width={24} height={24} className='mx-auto' />
                                    <h1 className='text-[#90A3BF] text-sm'>Automatic</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=' mt- bg-white w-56 rounded-xl p-3'>
                                <div className='flex  gap-3'>
                                    <Image src="/redLogo.png" alt="image" width={44} height={44} className='' />
                                    <div>
                                        <h1 className=' text-sm text-[#1A202C]'>DealerShip</h1>
                                        <h1 className='text-[#90A3BF]  text-sm font-medium'>Sunshine Honda</h1>
                                    </div>
                                    <RxExternalLink className='text-[#90A3BF] text-xl ' />

                                </div>
                                <div className='flex items-center lg:my-2 my-1 gap-2 space-x-1'>
                                    <IoIosCall className='2xl:text-md text-sm  text-[#90A3BF] text-3xl' />
                                    <p className=' text-[9px] text-[#90A3BF] '>123 - 456 - 789</p>
                                </div>
                                <div className='flex items-center lg:my-2 my-1 gap-2 space-x-1'>
                                    <FaLocationDot className='2xl:text-md text-sm  text-[#90A3BF] text-3xl' />
                                    <p className=' text-[9px] text-[#90A3BF] '>123 Main Street, Anytown, USA</p>
                                </div>
                                <div className='flex items-center space-x-1'>
                                    <PiMedalFill className='2xl:text-md text-sm  text-[#90A3BF] text-3xl mr-2' />
                                    <p className='lg:text-md text-[9px] text-[#90A3BF] '>4.0</p>
                                    <IoMdStar className=' text-[#FBAD39] text-[9px]' />
                                    <IoMdStar className=' text-[#FBAD39] text-[9px]' />
                                    <IoMdStar className=' text-[#FBAD39] text-[9px]' />
                                    <IoMdStar className=' text-[#FBAD39] text-[9px]' />
                                    <IoMdStar className=' focus:text-[#FBAD39]  text-[9px] text-[#90A3BF]' />
                                    <p className='text-[9px]  text-[#90A3BF]'>(32 reviews)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <div className='w-full  bg-white p-3 rounded-xl'>
                    <h1 className='text-2xl text-[#313131] font-bold text-center'>Contact Dealer</h1>
                    <hr className='border my-3' />
                    <div className='relative  w-full'>
                        <h1 className='text-sm text-[#1A202C] absolute left-3 top-3'>Name</h1>
                        <input type='text ' placeholder='Chris Dewlon' className='outline-none hover:border-[#0B5CFF] border-2   bg-[#F6F7F9]  w-full  mt-2 rounded-xl py-5 text-sm px-2 text-[#90A3BF]' />
                    </div>
                    <div className='relative mt-3 w-full'>
                        <h1 className='text-sm text-[#1A202C] absolute left-3 top-3'>Email  </h1>
                        <input type='text ' placeholder='dewlon@gmail.com' className='outline-none hover:border-[#0B5CFF] border-2  bg-[#F6F7F9]  w-full  mt-2 rounded-xl py-5 text-sm px-2 text-[#90A3BF]' />
                    </div>
                    <div className='relative mt-3 w-full'>
                        <h1 className='text-sm text-[#1A202C] absolute left-3 top-3'>Phone</h1>
                        <input type='text ' placeholder='123 456 789' className=' outline-none hover:border-[#0B5CFF] border-2 bg-[#F6F7F9]  w-full  mt-2 rounded-xl py-5 text-sm px-2 text-[#90A3BF]' />
                    </div>
                    <div className='relative mt-3 w-full'>
                        <h1 className='text-sm text-[#1A202C] absolute left-3 top-3'>Reason For Contact</h1>
                        <input type='text ' placeholder='Check availability' className='outline-none hover:border-[#0B5CFF] border-2  bg-[#F6F7F9]  w-full  mt-2 rounded-xl py-5 text-sm px-2 text-[#90A3BF]' />
                    </div>
                    <div className='relative   mt-3    w-full'>
                        <h1 className='text-sm text-[#1A202C] absolute left-3 top-3'>Message</h1>
                        <textarea type='text ' placeholder='Im interested in learning more about your inventory of [specific car make/model]. Could you please provide me with additional details such as available trim levels, pricing options, and any current promotions or discounts? Also, Id appreciate any insights you can offer regarding financing options and trade-in possibilities.' className=' bg-[#F6F7F9]  w-full  mt-2 rounded-xl pt-8 pb-8 h-48 utline-none hover:border-[#0B5CFF] border-2   text-sm px-3 text-[#90A3BF]' />
                    </div>
                    <button className='bg-[#0B5CFF] text-white text-center p-3 w-full rounded-xl mt-3 text-xl'>Submit</button>
                </div>
            </div>
            <div className='bg-white w-[85%] mx-auto px-24 pt-24 pb-10 mt-20 rounded-xl'>
                <div className='flex justify-center'>
                    <button className='text-lg font-bold flex justify-center text-center p-3 rounded-xl text-[#0B5CFF] w-48  bg-[#D3E2FF]'>CAR DETAILS</button>
                </div>
                <div className='bg-[#F6F7F9] p-2 rounded-xl text-lg w-full font-bold px-8 text-[#313131] mt-5'>Fundamentals</div>
                {/* fundamentals */}
                <div className='  '>
                    {CarDetail.map((item) => (
                        <>
                            <div className='mb-4 grid grid-cols-2 w-[600px] ml-8'>
                                <p className='text-lg mt-5  text-[#90A3BF]'>{item.key}</p>
                                <p className='text-lg  mt-5  text-[#90A3BF] text-start font-light'>{item.value}</p>
                            </div>
                            <hr />
                        </>
                    ))}
                </div>
                {/* style */}
                <div className='bg-[#F6F7F9] p-2 rounded-xl text-lg w-full font-bold px-8 text-[#313131] mt-14'>Style</div>

                <div className='  '>
                    {style.map((item) => (
                        <>
                            <div className='mb-4 grid grid-cols-2 w-[600px] ml-8'>
                                <p className='text-lg mt-5  text-[#90A3BF]'>{item.key}</p>
                                <p className='text-lg  mt-5  text-[#90A3BF] text-start font-light'>{item.value}</p>
                            </div>
                            <hr />
                        </>
                    ))}
                </div>
                {/* Performance */}
                <div className='bg-[#F6F7F9] p-2 rounded-xl text-lg w-full font-bold px-8 text-[#313131] mt-14'>Performance</div>

                <div className='  '>
                    {performence.map((item) => (
                        <>
                            <div className='mb-4 grid grid-cols-2 w-[600px] ml-8'>
                                <p className='text-lg mt-5  text-[#90A3BF]'>{item.key}</p>
                                <p className='text-lg  mt-5  text-[#90A3BF] text-start font-light'>{item.value}</p>
                            </div>
                            <hr />
                        </>
                    ))}
                </div>
                {/* Performance */}
                <div className='bg-[#F6F7F9] p-2 rounded-xl text-lg w-full font-bold px-8 text-[#313131] mt-14'>Features</div>

                <div className='  '>
                    {features.map((item) => (
                        <>
                            <div className='mb-4 grid grid-cols-6  ml-8'>
                                <p className='text-lg mt-5  col-span-2 text-[#90A3BF]'>{item.key}</p>
                                <p className='text-lg  mt-5 col-span-4 text-[#90A3BF] text-start font-light'>{item.value}</p>
                            </div>
                            <hr />
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}
