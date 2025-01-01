import React from 'react'
import Image from 'next/image'

export default function Subhero() {
  return (
    
    <div className='w-full px-[131px] flex flex-col items-center justify-center'>
      {/* Title Section */}
      <div className='w-full text-center'>
        <h1 className='font-poppins font-bold text-[32px] text-text'>
          Browse The Range
        </h1>
        
        {/* Paragraph Section */}
        <p className='mt-[10px] font-poppins font-normal text-xl text-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:flex-row flex-col flex justify-between mt-[30px] gap-4 ">
        {/* Dining Image */}
        <div className="flex flex-col items-center cursor-pointer hover:scale-105">
          <Image 
            src="/hero-img/dining.png" 
            alt="Dining Area" 
            width={381} height={480}
            className=" object-cover"
          />
          <h2 className="mt-4 font-poppins font-semibold text-center text-2xl text-text">Dining </h2>
        </div>

        {/* Living Room Image */}
        <div className="flex flex-col items-center cursor-pointer hover:scale-105">
          <Image 
            src="/hero-img/living.png" 
            alt="Living Room" 
            width={381} height={480}
            className=" object-cover"
          />
          <h2 className="mt-4 font-poppins text-center font-semibold text-2xl text-text">Living </h2>
        </div>

        {/* Bedroom Image */}
        <div className="flex flex-col items-center cursor-pointer hover:scale-105">
          <Image
            src="/hero-img/bedroom.png" 
            alt="Bedroom" 
            width={381} height={480}
            className="object-cover"
          />
          <h2 className="mt-4 font-poppins font-semibold text-center text-2xl text-text">Bedroom</h2>
        </div>
      </div>
    </div>

  )
}
