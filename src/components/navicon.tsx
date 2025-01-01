'use client'
import React, { useReducer } from 'react'
import { MdPersonOutline } from "react-icons/md";
import { CiSearch  } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from 'react';
import Cardmodel from './cardmodel';

export default function Navicon() {

    const [isCart, setCart] = useState (false);

    const handleCart = () => {}

  return (
    
    <div className='flex items-center gap-4 lg:gap-6 relative'>

      <MdPersonOutline size={28} className='cursor-pointer' />
       <CiSearch size={28} className='cursor-pointer'/>
       <GoHeart size={28} className='cursor-pointer'/>
       <AiOutlineShoppingCart size={28} 
       className='cursor-pointer'
       onClick = {() => setCart((prev) => !prev)} />
       
      {isCart && <Cardmodel/> }
    </div>
  )
}
