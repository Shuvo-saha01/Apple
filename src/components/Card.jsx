import React from 'react'
import laptop from '../laptop'

function Card({data}) {
  return (
    <div className='flex flex-col justify-center items-center text-2xl font-poppins'>
        <img className='w-[250px] h-auto' src={data.Image} alt="" />
        <h1 className='font-semibold mt-3'>{data.Name}</h1>
        <h1 className='text-lg mt-1' >From ${data.Price}</h1>
        <button className='border-2 border-black p-3 rounded-lg text-lg mt-3 bg-[#DB4444] font-semibold text-white'>Buy Now</button>
    </div>
  )
}

export default Card