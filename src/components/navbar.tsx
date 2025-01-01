import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Navicon from './navicon';

export default function Navbar() {
  
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src={'/navbar-img/logo.png'} alt='logo' width={50} height={32}/>
      <span className="ml-1.5 text-[34px] font-bold">Furniro</span>
    </Link>

    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-8 ">
    
      <Link href={'/'} className="mr-5 font-medium text-base text-black">Home</Link>
      
      <Link href={'/shop'} className="mr-5 font-medium text-base text-black">Shop</Link>
      
      <Link href={'/blog'} className="mr-5 font-medium text-base text-black">Blog</Link>
      
      <Link href={'/contact'} className="mr-5 font-medium text-base text-black">Contact</Link>
      
    </nav>
 
     <Navicon/> 
     
  </div>
</header>
  )
}


