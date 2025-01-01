import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className='border-t'>
  <div className="container px-5 py-8 mx-auto">
    <div className="flex flex-wrap md:text-left text-center ">

      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="font-bold text-2xl text-black mb-3">Funiro</h2>
        <div className="list-none mb-10">
        <p className=" text-base font-normal text-footer mt-8">400 University Drive Suite 200 Coral Gables,
        <br/> FL 33134 USA</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="text-footer font-medium text-base mb-10">Link</h2>
        <div className="list-none mb-10 space-y-10">
          <li>
            <Link href="/" className="text-black font-medium text-base ">Home</Link>
          </li>
          <li>
            <Link href="/shop" className="text-black font-medium text-base ">Shop</Link>
          </li>
          <li>
            <Link href="/" className="text-black font-medium text-base ">About</Link>
          </li>
          <li>
            <Link href="/contact" className="text-black font-medium text-base">Contact</Link>
          </li>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="text-footer font-medium text-base mb-10">Help</h2>
        <div className="list-none mb-10 space-y-10">
          <li>
            <Link href={'/'} className="text-black font-medium text-base">Payment Option</Link>
          </li>
          <li>
            <Link href={'/'} className="text-black font-medium text-base ">Return</Link>
          </li>
          <li>
            <Link href={'/'} className="text-black font-medium text-base ">Privacy Policies</Link>
          </li>
          
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="text-footer font-medium text-base mb-10">Newsletter</h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-60 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2 flex gap-3"> 
            <input type="text" id="footer-field" name="footer-field" placeholder='Enter Your Email Address' className="w-full underline underline-black border text-sm text-footer py-1 px-3 "/>
            <button className="lg:mt-2 xl:mt-0 underline ">Subscribe</button>
          </div>
        </div>  
      </div>

    </div>
  </div>
  
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col border-t border-[#D9D9D9] ">
         <p className="text-base font-normal text-black ">2023 furino. All rights reverved</p>
   </div>
  
</footer>
    </div>
  )
}
