import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="w-full md:relative">
    
    <div className="">
      <Image
        src="/hero-img/bg-hero.png"
        width={1440}
        height={100}
        alt="image"
        layout='responsive'
      />
      <div className="bg-pink lg:absolute lg:top-[30%] lg:left-[50%] lg:w-[38%] ">
        <div className='ml-6 mt-8 '>
        <h6 className='text-base font-semibold '>New Arrival</h6>
        <h3 className='text-button text-[42px] sm:text-[52px] font-bold'>Discover Our <br />New Collection</h3>
        <p className='text-lg font-medium mt-2'>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
         elit tellus, luctus nec ullamcorper mattis.</p>
          <button className="bg-button text-textwhite font-bold px-[72px] py-[25px] mt-10 mb-6">BUY NOW</button>
        </div>  
      </div>
    </div>
  </div>
  )
}
