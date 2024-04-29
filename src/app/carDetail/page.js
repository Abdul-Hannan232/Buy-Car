import Head from 'next/head';
import Carousel from '../component/carousel.js';

export default function Home() {
    return (
        <div className='flex  mt-32 gap-10 w-[85%] mx-auto '>

            <main className="container mx-auto w-[60%] ">
                <Carousel />
            </main>
            <div className='w-full  bg-white p-3 rounded-xl'>
                <h1 className='text-2xl text-[#313131] font-bold text-center'>Contact Dealer</h1>
                <hr className='border my-3' />
                <div className='relative  w-full'>
                    <h1 className='text-xm text-[#1A202C] absolute left-3 top-3'>Name</h1>
                    <input type='text ' placeholder='Chris Dewlon' className='outline-none hover:border-[#0B5CFF] border-2  bg-[#F6F7F9]  w-full  mt-2 rounded-xl py-6 px-3 text-[#90A3BF]' />
                </div>
                <div className='relative mt-3 w-full'>
                    <h1 className='text-xm text-[#1A202C] absolute left-3 top-3'>Email  </h1>
                    <input type='text ' placeholder='dewlon@gmail.com' className='outline-none hover:border-[#0B5CFF] border-2  bg-[#F6F7F9]  w-full  mt-2 rounded-xl py-6 px-3 text-[#90A3BF]' />
                </div>
                <div className='relative mt-3 w-full'>
                    <h1 className='text-xm text-[#1A202C] absolute left-3 top-3'>Phone</h1>
                    <input type='text ' placeholder='123 456 789' className=' outline-none hover:border-[#0B5CFF] border-2 bg-[#F6F7F9]  w-full  mt-2 rounded-xl py-6 px-3 text-[#90A3BF]' />
                </div>
                <div className='relative mt-3 w-full'>
                    <h1 className='text-xm text-[#1A202C] absolute left-3 top-3'>Reason For Contact</h1>
                    <input type='text ' placeholder='Check availability' className='outline-none hover:border-[#0B5CFF] border-2  bg-[#F6F7F9]  w-full  mt-2 rounded-xl py-6 px-3 text-[#90A3BF]' />
                </div>
                <div className='relative   mt-3    w-full'>
                    <h1 className='text-xm text-[#1A202C] absolute left-3 top-3'>Message</h1>
                    <textarea type='text ' placeholder='Im interested in learning more about your inventory of [specific car make/model]. Could you please provide me with additional details such as available trim levels, pricing options, and any current promotions or discounts? Also, Id appreciate any insights you can offer regarding financing options and trade-in possibilities.' className=' bg-[#F6F7F9]  w-full  mt-2 rounded-xl pt-8 pb-8 h-48 utline-none hover:border-[#0B5CFF] border-2   text-sm px-3 text-[#90A3BF]' />
                </div>
                <button className='bg-[#0B5CFF] text-white text-center p-3 w-full rounded-xl mt-3 text-xl'>Submit</button>
            </div>
        </div>
    );
}
