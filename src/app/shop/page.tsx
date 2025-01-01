import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import BlowHero from "@/components/shopBlowHero";

export default function ShopHero() {
  interface Card {
    name: string;
    age: number;
    description: string;
    image: string;
    discount:string,
    price: string;
    fixPrice: string
  }

  const data: Card[] = [
    {
      name: 'Syltherine',
      price: "Rp 2.500.000",
      fixPrice:"Rp 3.500.000",
      age: 30,
      image: "/product/image 1.png",
      discount:"/shop/Discount.png",
      description: 'Stylish cafe chair',
    },
    {
      name: 'Leviosa',
      price: "Rp 2.500.000",
      fixPrice:"",
      age: 25,
      image: "/product/image 7.png",
      discount:"/shop/Discount.png",
      description: 'Stylish cafe chair',
    },
    {
      name: 'Lolito',
      price: "Rp 7.000.000",
      fixPrice:"Rp 14.000.000",
      age: 28,
      image: '/product/Images.png',
      discount:"/shop/Discount.png",
      description: 'Luxury big sofa',
    },
    {
      name: 'Respira',
      price: "Rp 500.000",
      fixPrice:"",
      age: 28,
      image: '/product/Images (1).png',
      discount:"/shop/Label.png",
      description: 'Outdoor bar table and stool',
    },
    {
      name: 'Syltherine',
      price: "Rp 2.500.000",
      fixPrice:"Rp 3.500.000",
      age: 30,
      image: "/product/image 1.png",
      discount:"/shop/Discount.png",
      description: 'Stylish cafe chair',
    },
    {
      name: 'Leviosa',
      price: "Rp 2.500.000",
      fixPrice:"",
      age: 25,
      image: "/product/image 7.png",
      discount:"/shop/Discount.png",
      description: 'Stylish cafe chair',
    },
    {
      name: 'Lolito',
      price: "Rp 7.000.000",
      fixPrice:"Rp 14.000.000",
      age: 28,
      image: '/product/Images.png',
      discount:"/shop/Discount.png",
      description: 'Luxury big sofa',
    },
    {
      name: 'Respira',
      price: "Rp 500.000",
      fixPrice:"",
      age: 28,
      image: '/product/Images (1).png',
      discount:"/shop/Label.png",
      description: 'Outdoor bar table and stool',
    },{
      name: 'Syltherine',
      price: "Rp 2.500.000",
      fixPrice:"Rp 3.500.000",
      age: 30,
      image: "/product/image 1.png",
      discount:"/shop/Discount.png",
      description: 'Stylish cafe chair',
    },
    {
      name: 'Leviosa',
      price: "Rp 2.500.000",
      fixPrice:"",
      age: 25,
      image: "/product/image 7.png",
      discount:"/shop/Discount.png",
      description: 'Stylish cafe chair',
    },
    {
      name: 'Lolito',
      price: "Rp 7.000.000",
      fixPrice:"Rp 14.000.000",
      age: 28,
      image: '/product/Images.png',
      discount:"/shop/Discount.png",
      description: 'Luxury big sofa',
    },
    {
      name: 'Respira',
      price: "Rp 500.000",
      fixPrice:"",
      age: 28,
      image: '/product/Images (1).png',
      discount:"/shop/Label.png",
      description: 'Outdoor bar table and stool',
    },
    {
      name: 'Syltherine',
      price: "Rp 2.500.000",
      fixPrice:"Rp 3.500.000",
      age: 30,
      image: "/product/image 1.png",
      discount:"/shop/Discount.png",
      description: 'Stylish cafe chair',
    },
    {
      name: 'Leviosa',
      price: "Rp 2.500.000",
      fixPrice:"",
      age: 25,
      image: "/product/image 7.png",
      discount:"/shop/Discount.png",
      description: 'Stylish cafe chair',
    },
    {
      name: 'Lolito',
      price: "Rp 7.000.000",
      fixPrice:"Rp 14.000.000",
      age: 28,
      image: '/product/Images.png',
      discount:"/shop/Discount.png",
      description: 'Luxury big sofa',
    },
    {
      name: 'Respira',
      price: "Rp 500.000",
      fixPrice:"",
      age: 28,
      image: '/product/Images (1).png',
      discount:"/shop/Label.png", 
      description: 'Outdoor bar table and stool',
    },
   
  ];

  return (
    <>
      {/* shopsect */}
      <div className="relative">
        <Image src={'/contact/Rectangle 1.png'} alt="Picture" width={1440} height={316}/>

        <div className="absolute top-[1%] sm:top-[5%] md:top-[10%] lg:top-[30%] left-[46%] flex justify-center flex-col items-center ">
        
        <Image src={'/navbar-img/logo.png'} alt="logo" width={77} height={77} className="w-[50px]"/>
          <h3 className="font-medium text-2xl sm:text-4xl md:text-5xl">Shop</h3>

          <div className="flex items-center space-x-2">
            <h3 className="font-medium text-sm sm:text-base">Home</h3>
            <IoIosArrowForward />
            <h3 className="font-light text-sm sm:text-base">Shop</h3>
          </div>
          
        </div>
        
      </div>
      
      <BlowHero />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-evenly ml-4 mr-4 m-10 gap-4">
        {data.map((card, index) => (

          <div  key={index}  className="w-[285px] h-[446px] cursor-pointer hover:scale-105" >

             <div className="absolute p-2 mt-2 ml-[213px]">
              <Image src={card.discount} alt="dicount" width={48} height={48}/>
             </div>

            <Image
              src={card.image}
              alt="card"
             width={285} height={301}
            />
           
            <div className="bg-bgcard p-4">
              <h5 className="font-semibold text-2xl">
                {card.name}
              </h5>
              <p className="text-base font-medium text-cardtext">{card.description}</p>

              <div className="flex items-center justify-between">
              <h5 className="font-semibold text-blackheading text-xl">
                {card.price}
              </h5>
              <h6 className="text-pricetext text-base font-normal">{card.fixPrice}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    <div className=" flex gap-2 justify-center " >
     <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-button cursor-pointer text-white:">1</button>
     <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-button cursor-pointer text-white:">2</button>
     <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-button cursor-pointer text-white:">3</button>
     <button className="w-[4rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-button cursor-pointer text-white:">Next</button>
    </div>

     <div className="mt-12 py-12 px-4 bg-[#FAF3EA]">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
        
        <div className="flex items-center space-x-4">
    
        <Image src="/contact/trophy 1.png" width={60} height={60} alt="trophy" />
         <div>
          <h4 className="font-semibold text-[20px] sm:text-[25px]">High Quality</h4>
          <p className="font-medium text-base sm:text-lg text-cardtext">crafted from top materials</p>
         </div>
        </div>

        <div className="flex items-center space-x-4">
        <Image src="/contact/guarantee.png" width={60} height={60} alt="warrenty" />
          <div>
          <h4 className="font-semibold text-[20px] sm:text-[25px]">Warranty Protection</h4>
          <p className="font-medium text-base sm:text-lg text-cardtext">Over 2 years</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
        <Image src="/contact/shipping.png" width={60} height={60} alt="shipping" />
          <div>
          <h4 className="font-semibold text-[20px] sm:text-[25px]">Free Shipping</h4>
          <p className="font-medium text-base sm:text-lg text-cardtext">Order over 150 $</p>
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
  );
}