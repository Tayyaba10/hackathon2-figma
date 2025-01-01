import Image from "next/image";

export default function FuniroFurniture(){
    return(
        <div className="w-full pt-[67px] pb-[50px] bg-lightBG">
            <div className="text-center relative w-full md:top-5 top-0">
                <h3 className="text-[14px] md:text-[20px] font-semibold text-textgray">Share your setup with</h3>
                <h2 className="text-[30px] md:text-[40px] font-bold text-blackheading">#FuniroFurniture</h2>
            </div>
            <div className="flex justify-center items-center w-full ">
                <Image src="/Images.png" width={2000} height={100} alt="images"/>
            </div>
        </div>
    )
}



// export default function Funirofuniture() {
//   return (

//     <div>
//          <div className="text-center relative w-full md:top-5 top-0 ">
//                <h3 className="text-[14px] md:text-[20px] font-semibold text-textgray">Share your setup with</h3>
//                <h2 className="text-[30px] md:text-[40px] font-bold text-blackheading">#FuniroFurniture</h2>
//           </div>

//         <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 grid-rows-2  ">

//         <div className=" overflow-hidden ml-40">
//           <Image
//             src="/furniro/Rectangle 36.png"
//             alt="Desk Setup"
//             width={500}
//             height={300}
//             className="object-cover "
//           />
//         </div>    
//         <div className=" overflow-hidden lg:mt-20">
//           <Image
//             src="/furniro/Rectangle 38.png"
//             alt="Desk Setup"
//             width={500}
//             height={300}
//             className="object-cover "
//           />
//         </div>
//         <div className="  overflow-hidden row-span-2 lg:mt-60">
//           <Image
//             src="/furniro/Rectangle 40.png"
//             alt="Dining Room"
//             width={500}
//             height={300}
//             className="object-cover "
//           />
//         </div>
//         <div className="  overflow-hidden lg:mt-12">
//           <Image
//             src="/furniro/Rectangle 43.png"
//             alt="Bedroom"
//             width={500}
//             height={300}
//             className="object-cover "
//           />
//         </div>
//         <div className=" overflow-hidden ">
//           <Image
//             src="/furniro/Rectangle 45.png"
//             alt="Living Room"
//             width={500}
//             height={300}
//             className="object-cover "
//           />
//         </div>
//         <div className=" overflow-hidden ">
//           <Image
//             src="/furniro/Rectangle 37.png"
//             alt="Shelf Setup"
//             width={500}
//             height={300}
//             className="object-cover "
//           />
//         </div>

       
//         <div className="  overflow-hidden">
//           <Image
//             src="/furniro/Rectangle 39.png"
//             alt="Wall Decor"
//             width={500}
//             height={300}
//             className="object-cover "
//           />
//         </div>
//         <div className="  overflow-hidden">
//           <Image
//             src="/furniro/Rectangle 41.png"
//             alt="Wall Decor"
//             width={500}
//             height={300}
//             className="object-cover "
//           />
//         </div>
//         <div className="b  overflow-hidden">
//           <Image
//             src="/furniro/Rectangle 44.png"
//             alt="Wall Decor"
//             width={500}
//             height={300}
//             className="object-cover "
//           />
//         </div>
//       </div>
//     </div>
//   )
// }
