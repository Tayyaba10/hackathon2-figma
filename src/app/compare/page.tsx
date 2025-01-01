import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";


export default function compare() {
  return (
    <>
      <div className="relative">
          <Image src={'/contact/Rectangle 1.png'} alt="background image" width={1440} height={316} className='w-full h-auto'/>
              
              <div className="absolute top-[1%] sm:top-[5%] md:top-[10%] lg:top-[30%] left-[33%] flex justify-center flex-col items-center">
                  
                  <Image src={'/navbar-img/logo.png'} alt="logo" width={77} height={77} className='w-[50px]'/>
                  <h3 className="font-medium text-2xl sm:text-4xl md:text-5xl">Product Comparison</h3>
                   
                    <div className="flex items-center space-x-2 ">
                      <h3 className="font-medium text-sm sm:text-base ml-16">Home</h3>
                      <IoIosArrowForward className='text-lg'/>
                       <h3 className="font-light text-sm sm:text-base">Comparison</h3>
                      </div>

              </div>
      </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-4 m-10'>
          <div>
            <h1 className='w-full lg:w-[223px] font-medium text-[28px]'>Go to Product page for more Products</h1>
            <button className='font-medium text-xl text-[#727272] underline mt-4'> View More</button>
          </div>
          
           
          <div>
            <Image src={'/Asgaard sofa 3.png'} alt='sofa image' width={280} height={177} className='bg-[#F9F1E7] w-[90%] rounded-xl'/>
            <h1 className='font-medium text-2xl mt-4'>Asgaard Sofa</h1>
            <p className='font-medium text-lg'>Rs. 250,000.00</p>
            <div className='flex items-center gap-1'>
              <p className='font-medium text-lg'>4.7</p>
              <Image src={'/Group 160.png'} alt='star' width={124} height={20}/>
              <p className='text-footer '>|</p>
              <p className='text-footer font-normal text-[13px] '>204 Review</p>
            </div>
          </div>

          <div>
            <Image src={"/cart/Outdoor sofa set 1.png"} alt='sofa set' width={280} height={177} className='bg-[#F9F1E7] w-[90%] rounded-xl'/>
            <h1 className='font-medium text-2xl mt-4'>Outdoor Sofa Set</h1>
            <p className='font-medium text-lg' >Rs. 224,000.00</p>
            <div className='flex items-center gap-1'>
              <p className='font-medium text-lg'>4.2</p>
              <Image src={'/Group 160.png'} alt='star' width={124} height={20}/>
              <p className='text-footer '>|</p>
              <p className='text-footer font-normal text-[13px] '>145 Review</p>
            </div>
          </div>

          <div>
            <h1 className='font-semibold text-2xl'>Add A Product</h1>
            <button className='w-[242px] h-[39px] font-semibold text-sm text-white bg-button rounded-lg'>Choose a Product</button>
          </div>
        </div>
           
           <div className='border '></div>
             <div>
              
             </div>


           <div className=" mt-12 py-12 px-4 bg-[#FAF3EA]">
               <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">    
                   < div className="flex items-center space-x-4">
               
                   <Image src="/contact/trophy 1.png" width={60} height={60} alt="trophy" />
                    <div>
                     <h4 className="font-semibold text-[20px] sm:text-[25px]">High Quality</h4>
                     <p className="font-medium text-base sm:text-lg text-cardtext">crafted from top materials</p>
                    </div>
                   </div>
           
                   <div className="flex items-center space-x-4">
                   <Image src="/contact/guarantee.png" width={60} height={60} alt="wwarranty" />
                     <div>
                     <h4 className="font-semibold text-[20px] sm:text-[25px]">Warranty Protection</h4>
                     <p className="font-medium text-base sm:text-lg text-cardtext">Over 2 years</p>
                     </div>
                   </div>
           
                   <div className="flex items-center space-x-4">
                   <Image src="/contact/shipping.png" width={60} height={60} alt="shipping" />
                     <div>
                     <h4 className="font-semibold text-[20px] sm:text-[25px]">Free Shipping</h4>
                     <p className="font-medium text-bases sm:text-lg text-cardtext">Order over 150 $</p>
                     </div>
                   </div>
           
                   <div className="flex items-center space-x-4">
                   <Image src="/contact/Vector (2).png" width={60} height={60} alt="support" />
                     <div>
                     <h4 className="font-semibold text-[20px] sm:text-[25px]">24 / 7 Support</h4>
                     <p className="font-medium text-base sm:text-lg text-cardtext">Dedicated support</p>
                     </div>
                   </div>
               </div>    
            </div>       
    </>
  )
};
