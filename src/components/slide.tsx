import React from 'react'
import Image from 'next/image'
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Slide() {
  return (
    <div>
      <div className="w-full bg-bgpink h-[600px] flex items-center">
        <div className="w-[422px] pt-9 ml-[100px]">

        <h4 className=" font-bold text-[40px] text-blackheading ">50+ Beautiful rooms inspiration</h4>
        <p className='font-medium text-base text-textgray mb-4'>
          Our designer already made a lot of beautiful 
          prototipe of rooms that inspire you
        </p>
        <button className="bg-button w-[176px] h-[48px] text-white p-2 ">Explore More</button>
        </div>

        <div className='relative ml-14 cursor-pointer hover:scale-105'>

           <Image src={'/slideimg/inner.png'} width={404} height={582} alt="inner"  />

         <div className='w-[190px] h-[120px] absolute top-[403px] left-[30px] bg-[#FFFFFFB8] pl-4 pt-6'>
          <div className='flex gap-4'>
           <p className='text-textgray font-medium text-base'>01</p>
           <p className='text-textgray '>-----</p>
           <p className='text-textgray font-medium text-base'> Bed Room</p>
          </div> 
          <h1 className='text-blackheading text-[28px] font-semibold '>Inner Peace</h1>  
         </div>

         <button className='bg-button w-[48px] h-[48px] text-white p-2 absolute top-[475px] left-[221px]'><IoIosArrowRoundForward size={30}/></button>
        
        </div>

        <div className='ml-8 mb-12 cursor-pointer hover:scale-105'>
          <Image src={'/slideimg/dining.png'} width={372} height={486} alt="dinner" />

          <div className='flex gap-4 mt-8 '>
              <button className='rounded-full hover:outline-offset-8 hover:outline outline-button bg-[#D8D8D8] hover:bg-button w-[11px] h-[11px] border'></button>
              <button className='rounded-full hover:outline-offset-8 hover:outline outline-button bg-[#D8D8D8] hover:bg-button w-[11px] h-[11px] border'></button>
              <button className='rounded-full hover:outline-offset-8 hover:outline outline-button bg-[#D8D8D8] hover:bg-button w-[11px] h-[11px] border'></button>
              <button className='rounded-full hover:outline-offset-8 hover:outline outline-button bg-[#D8D8D8] hover:bg-button w-[11px] h-[11px] border'></button>
          </div>
        </div>
        
      </div>
    </div>
  )
}
