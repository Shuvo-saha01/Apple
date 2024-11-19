import React, { useState } from 'react'
import { FaBeer } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

function Carousel( {slides}) {
    let[curr, setCurr] = useState(0);
    let prev = () => {
        if (curr === 0) setCurr(slides.length - 1)
        else setCurr((prev) => prev -1)
    }
    let next = () => {
        if (curr === slides.length - 1) setCurr(0)
        else setCurr((prev) => prev +1)
    }

  return (
   <div className='overflow-hidden relative'>
     <div className='flex transition ease-out duration-400' 
     style={{
        transform : `translateX(-${curr * 100}%) `
     }}
     >
        {slides.map((s) => {
            return <img src={s} />;
        })}
    </div>
    <div className='absolute top-0 h-full w-full justify-between flex items-center text-white text-2xl px-10'>
        <button onClick={prev}><FaArrowCircleLeft /></button>
        <button onClick={next}><FaArrowCircleRight /></button>
    </div>
   </div>
  )
}

export default Carousel