import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import Image from 'next/image';
import Link from "next/link"
const Footer = () => {
    return (
      <div className='md:w-[87%] w-[87%] mx-auto bg-white md:rounded-3xl rounded-xl  md:p-20 p-7'>
          <div className='grid xl:grid-cols-2 justify-between '>
            <div >
                <Image src="/website-logo.png" alt="logo" width={133} height={31}  className='xl:w-56  w-32 '/>
                <p className='md:w-96 text-[#90A3BF] md:text-lg text-xs my-5'>We're dedicated to providing exceptional service and value to our customers. Thank you for choosing us."</p>
                <div className='flex items-center gap-3 md:w-52 w-32' >
                    <div className='md:w-12 md:h-12 w-8 h-8   xl:rounded-xl rounded-lg bg-[#F6F7F9] mx-auto flex items-center  flex-col justify-center'>
                        <RiInstagramFill className='text-[#0B5CFF] xl:text-2xl md:text-xl text-md' />
                    </div>
                    <div className='md:w-12 md:h-12 w-8 h-8   xl:rounded-xl rounded-lg bg-[#F6F7F9] mx-auto flex items-center  flex-col justify-center'>
                        <FaFacebookF className='text-[#0B5CFF] xl:text-2xl md:text-xl text-md' />
                    </div>
                    <div className='md:w-12 md:h-12 w-8 h-8   xl:rounded-xl rounded-lg bg-[#F6F7F9] mx-auto flex items-center  flex-col justify-center'>
                        <FaYoutube className='text-[#0B5CFF] xl:text-2xl md:text-xl text-md' />
                    </div>
                </div>
            </div>
           <div className='md:flex items-center gap-28'>
           <div>
                <ul className='text-[#90A3BF] md:text-xl lg:mt-0 mt-10 text-sm md:space-y-4 space-y-2'>
                    <li> <Link href="#">Buy Used Cars</Link></li>
                    <li>  <Link href="#">Car Payment Calculator</Link></li>
                    <li> <Link href="#">Dealers</Link></li>
                    <li> <Link href="#">Become a member</Link></li>
                    <li> <Link href="#">Dealers</Link></li>
                    <li>   <Link href="#">Become a member</Link></li>
                </ul>
            </div>
            <div>
                <ul  className='text-[#90A3BF] md:mt-0 mt-8 md:text-xl text-sm md:space-y-4 space-y-2'>
                    <li> <Link href="#">Buy Used Cars</Link></li>
                    <li>  <Link href="#">Car Payment Calculator</Link></li>
                    <li> <Link href="#">Dealers</Link></li>
                    <li> <Link href="#">Become a member</Link></li>
                    <li> <Link href="#">Dealers</Link></li>
                    <li>   <Link href="#">Become a member</Link></li>
                </ul>
            </div>
           </div>
           
        </div>
        <hr className='border-2 border-[#C3D4E9] md:mb-5 md:mt-20 my-10'/>
        <div className='md:flex items-center  md:mt-10 mt-5 justify-between'>
            <p className='md:text-xl text-xs text-[#90A3BF] md:block hidden md:text-start text-center'>© 2024 Buycars. All rights reserved.</p>
            <div >
                <ul className='text-[#90A3BF] md:text-xl text-sm md:flex items-center xl:space-x-36 md:space-x-10  space-y-2'>
                    <li><Link href="#">Terms & Conditions</Link></li>
                    <li><Link href="#">Privacy Policy</Link></li>
                    <li><Link href="#">Contact Us</Link></li>
                </ul>
            </div>
            <p className='md:text-xl text-xs text-[#90A3BF] md:hidden block mt-10 md:text-start text-center'>© 2024 Buycars. All rights reserved.</p>

            </div>
      </div>
    )
}

export default Footer
