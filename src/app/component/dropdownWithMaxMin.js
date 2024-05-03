import React from 'react'

const   DropdownWithMaxMin = ({ title, number, Data }) => {
  return (

    <div className='  bg-[#F6F7F9] w-[100%] p-3 rounded-xl'>
      <form class="max-w-sm mx-auto ">
        <label for="countries" class="block mb-1 text-sm font-medium text-black ">{title}</label>
        <select id="countries" class="bg-gray-50 cursor-pointer text-[#90A3BF] text-lg -ml-1 outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  ">
          <option value="US" className='text-sm text-[#1A202C] mt-3'>Select</option>
          <option selected className='text-sm text-[#1A202C] mt-3'>{number}</option>
          {Data.map((item => (
            <option value="US" className='text-sm text-[#1A202C] mt-3'>{item.price}</option>
          )))}
        </select>
      </form>
    </div>

  )
}

export default DropdownWithMaxMin
