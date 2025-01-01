import Image from "next/image";

export default function BlowHero(){
    return (
    <>
     <div className=" w-[100%] lg:h-[100px] bg-[#F9F1E7] flex flex-col lg:flex-row justify-between px-4 lg:px-16 py-4" >
        <div className="flex items-center justify-center gap-4 lg:gap-8 ml-0 lg:ml-16">
            <div className="flex items-center gap-2">
               <Image src={'/shop/system-uicons_filtering.png'} width={25} height={25} alt="filter image" />
               <p className="font-normal text-sm lg:text-xl">Filter</p>
            </div>
           <div className="flex items-center gap-2">
              <Image src={'/shop/ci_grid-big-round.png'} alt="icon" width={28} height={28}/>
              <Image src={'/shop/bi_view-list.png'} alt="icon" width={24} height={24}/>
          </div>
              <p className="text-footer hidden lg:block">|</p>
              <p className="font-normal text-xs lg:text-base"> Showing 1–16 of 32 results</p>
        </div>

        <div className="flex items-center justify-center gap-4 lg:gap-8 mr-0 lg:mr-32">
            <p className="font-normal text-sm lg:text-xl">Show</p>
            <input className="w-[2.5rem] h-[2.5rem] text-footer text-center self-center" type="text" placeholder="16" name="" id="" />
            <p className="font-normal text-sm lg:text-xl">Short by</p>
            <input className="w-[8rem] h-[2.5rem] text-footer text-center self-center" type="text" placeholder="Default" name="" id="" />
        </div>
     </div>
  </>
 )
}