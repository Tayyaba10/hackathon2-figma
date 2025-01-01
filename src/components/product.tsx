import Image from "next/image";
import Link from "next/link";

export default function Products(){

    interface Card{
        name: string,
        age: number,
        description: string,
        image: string,
        price: string,
        fixprice:string,
        discount:string,
      }

    const data: Card[] = [
        {
          name: 'Syltherine',
          price: "Rp 2.500.000",
          fixprice:"Rp 3.500.000",
          age: 30,
          image: "/product/image 1.png",
          discount:'/shop/Discount.png',
          description: 'Stylish cafe chair',
        },
        {
          name: 'Leviosa',
          price: "Rp 2.500.000",
          fixprice:"",
          age: 25,
          image: "/product/image 7.png",
          discount:"/shop/Label.png",
          description: 'Stylish cafe chair',
        },
        {
          name: 'Lolito',
          price: "Rp 7.000.000",
          fixprice :"Rp 14.000.000",
          age: 28,
          image: '/product/Images.png',
          discount:'/shop/Discount.png',
          description: 'Luxury big sofa',
        },
        {
          name: 'Respira',
          price: "Rp 500.000",
          fixprice:"",
          age: 28,
          image: '/product/Images (1).png',
          discount:"/shop/Label.png",
          description: 'Outdoor bar table and stool',
        },
        {
          name: 'Grifo',
          price: "Rp 1.500.000",
          fixprice:"",
          age: 28,
          image: '/product/Image 5.png',
          discount:"/shop/Discount.png ",
          description: 'Night lamp',
        },
        {
          name: 'Muggo',
          price: "Rp 150.000",
          fixprice:"",
          age: 28,
          image: '/product/image 6.png',
          discount:"/shop/Label.png",
          description: 'Small mug',
        },
        {
          name: 'Pingky',
          price: "Rp 7.000.000",
          fixprice :"Rp 14.000.000",
          age: 28,
          image: '/product/Images (2).png',
          discount:'/shop/Discount.png',
          description: 'Cute bed set',
        },
        {
          name: 'Potty',
          price: "Rp 500.000",
          fixprice:"",
          age: 28,
          image: '/product/Images (3).png',
          discount:'/shop/Label.png',
          description: 'Minimalist flower pot',
        },
      ];
    
    return (
      <div className="w-full ">
           <div>
            <h2 className="text-center p-2 font-bold text-3xl sm:text-3xl lg:text-5xl">Our Product</h2>
            </div>
            
          <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  p-10">
            {data.map((card, index) => (
              
            <Link href={'/singleproduct'}>
              <div key={index}  className="w-[270px] h-[446px] cursor-pointer hover:scale-105">

              <div className="absolute p-2 mt-2 ml-[200px]">
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
                  <h5 className="font-semibold text-blackheading text-x">
                    {card.price}
                  </h5>
                  <h6 className="text-pricetext text-base font-normal">
                  {card.fixprice}</h6>
                  </div>
              
                </div>

            </div>
            </Link>
              ))}
          </div>

        <div className="flex items-center justify-center mb-12">
          <button className=" text-button p-2 border-2 border-button"><Link href={'/shop'}>Show More</Link></button>
        </div>
    </div>
    )
}