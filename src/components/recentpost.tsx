import React from 'react'
import Image from 'next/image'

const post = [
    {
        id: 1,
        tittle:"Going all-in with millennial design",
        year: 2022,
        date:"03 Aug ",
        image:"/recentpost/Rectangle 69 (4).png"

    },
    {
        id: 2,
        tittle:"Exploring new ways of decorating",
        year: 2022,
        date:"03 Aug ",
        image:"/recentpost/Rectangle 69 (5).png"

    },
    {
        id: 3,
        tittle:"Handmade pieces that took time to make",
        year: 2022,
        date:"03 Aug ",
        image:"/recentpost/Rectangle 69 (6).png"

    },
    {
        id: 4,
        tittle:"Modern home in Milan",
        year: 2022,
        date:"03 Aug ",
        image:"/recentpost/Rectangle 69 (7).png"

    },
    {
        id: 5,
        tittle:"Colorful office redesign",
        year: 2022,
        date:"03 Aug",
        image:"/recentpost/Rectangle 69 (8).png"

    },
]
export default function Recentpost() {
  return (
    <div className='m-24'>
      <h3 className='font-medium text-2xl'>Recent Posts</h3>

      <div className='space-y-8 mt-8'>
          {post.map((work) => (
             <div 
             key={work.id}
             className='flex items-center'>
               <div>
                 <Image
                    src={work.image}
                    alt={work.tittle}
                    width={80}
                    height={80}
                  />
              </div>
                  <div className='p-4 w-44'>
                    <h3 className='font-normal text-sm '>{work.tittle}</h3>
                    <div className='text-footer text-xs font-normal mt-2'>
                      <span>{work.date}</span>
                      <span>{work.year}</span>
                    </div>
                  </div>
             </div>
          ))}
      </div>
    </div>
  )
}
