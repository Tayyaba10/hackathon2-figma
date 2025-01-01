'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function Cardmodel() {
  const cartItem = true

  return (
    <div className='w-max absolute p-4 rounded-md bg-white top-12 right-4 flex flex-col gap-6 z-20'>
      {!cartItem ? (
        <div className=''>Cart is Empty</div>
      ) : (
        <>
        <div className='flex justify-between border-b '>
        <h2 className='font-semibold text-2xl  '>Shopping Cart</h2>
        <Image src={'/cart/Vector (1).png'} alt='bag' width={16.63} height={19} className='w-[22px] h-[22px]'/>
        </div>
        {/* list  */}
        <div className='flex flex-col gap-8'>

          {/* item 1*/}
         <div className='flex gap-8'>
          <Image src={'/Asgaard sofa 3.png'} alt='sofa' width={108} height={105} 
          className='object-cover rounded-md bg-[#F9F1E7]'/>
          
          <div className='flex items-center justify-between w-full'>
            {/* tittle */}
             <div className='flex flex-col justify-between w-full '>
              <h3 className=' font-normal text-black text-base'>Asgaard sofa</h3>
              <div className='flex items-center gap-4 py-2'>
                <span className='font-light text-black'>1</span>
                <span className='font-light text-xs'>x</span>
                <div className='text-button '>Rs. 250,000.00</div>
              </div>
             </div>  

            {/* left */}
            <div className='flex text-sm ml-12'>
              <span className='bg-footer text-white rounded-full w-5 text-center cursor-pointer'>x</span>
            </div>

          </div>
        </div>

        {/* item 2 */}
        <div className='flex gap-4'>
          <Image src={'/cart/Group 146.png'} alt='' width={108} height={105} 
          className='object-cover rounded-md '/>
          
          <div className='flex items-center justify-between w-full'>

            {/* tittle */}
             <div className='flex flex-col justify-between w-full ml-4' >
              <h3 className=' font-normal text-base text-black'>Casaliving Wood</h3>
              <div className='flex items-center gap-4 py-2'>
                <span className='font-light text-black'>1</span>
                <span className='font-light text-xs'>x</span>
              <div className='text-button'>Rs. 250,000.00</div>
              </div>
             </div>
            

            {/* left */}
            <div className='flex text-sm'>
              <span className='rounded-full w-5 text-center bg-footer text-white cursor-pointer'>x</span>
            </div>

          </div>
        </div>
        </div>

          {/* bottom  */}
          <div>
            <div className='flex items-center justify-between font-semibold mt-36'>
              <span className='font-normal text-base'>Subtotal</span>
              <span className='font-semibold text-base text-button'>Rs. 520,000.00</span>
            </div>
            <div className='border mt-4'></div>
            <div className='flex justify-between text-sm mt-8 '>
              <button className='rounded-full border border-black font-normal text-xs px-8 py-2'><Link href={'/cart'}>Cart</Link></button>
              <button className='rounded-full border border-black font-normal text-xs px-6 py-2'><Link href={'/checkout'}>Checkout</Link></button>
              <button className='rounded-full border border-black font-normal text-xs px-4 py-2'><Link href={'/compare'}>Comparison</Link></button>
            </div>
          </div>
        </>  
      )}
    </div>
  )
}
