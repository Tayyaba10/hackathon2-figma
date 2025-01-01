import React from 'react'

export default function Customized() {
  return (
    <div className='flex flex-col gap-6 '>
      <h4 className='font-normal text-sm text-footer'>Size</h4>
      <ul className='flex items-center gap-3'>
        <li className='text-white text-[13px] font-normal py-1 px-4 bg-button cursor-pointer'>L</li>
        <li className='text-black text-[13px] font-normal py-1 px-4 bg-[#F9F1E7] cursor-pointer'>XL</li>
        <li className='text-black text-[13px] font-normal py-1 px-4 bg-[#F9F1E7] cursor-pointer'>XS</li>
      </ul>

      <h4 className='font-normal text-sm text-footer'>Color</h4>
      <ul className='flex items-center gap-3'>
        <li className='w-8 h-8 rounded-full bg-[#816DFA] cursor-pointer relative '></li>
        <li className='w-8 h-8 rounded-full bg-black cursor-pointer relative '></li>
        <li className='w-8 h-8 rounded-full bg-button cursor-pointer relative '></li>
      </ul>
      
    </div>
  )
}
