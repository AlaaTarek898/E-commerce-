import Image from "next/image";
import Slider from "./_components/Slider/Slider";
import Category from "./_components/CategoryParent/Category/Category";
// import SubCategoryContainer from "./_components/CategoryParent/subCategory/subCategory";
import BestSelling from "./_components/BestSelling/BestSelling";
import Cover from "./_components/Cover/Cover";
import Explore from "./_components/Explore/Explore";

export default function Home() {
  return (
  <div className="conatiner" > 
 
  <Slider/>
   <Category/>
   <BestSelling items={4}/>
<Cover/>
<Explore/>
<div className=" relative w-12/12 m-auto mt-10 h-[500px]">
<Image src="/cover2.png" alt="cover" fill />
</div>
<div className="w-12/12 m-auto mt-10 flex flex-col  justify-around md:flex-row">
<div className=" flex flex-col items-center justify-center">
  <Image src='/icon1.png'
  alt="icon1"
  width={100}
  height={100}
  />
  <p className=" font-bold">FREE AND FAST DELIVERY</p>
  <p>Free delivery for all orders over $140</p>
</div>
<div className=" flex flex-col items-center justify-center">
  <Image src='/icon2.png'
  alt="icon2"
  width={100}
  height={100}
  />
  <p className=" font-bold">24/7 CUSTOMER SERVICE</p>
  <p>Friendly 24/7 customer support</p>
</div>
<div className=" flex flex-col items-center justify-center">
  <Image src='/icon3.png'
  alt="icon3"
  width={100}
  height={100}
  />
  <p className=" font-bold">MONEY BACK GUARANTEE</p>
   <p> We reurn money within 30 days

</p>
</div>
</div>
  </div>
  );
}
