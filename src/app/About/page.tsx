import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import Image from "next/image";

export default async function About() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {/* first sec */}
    <div className=" flex flex-col justify-between items-center w-11/12 m-auto md:flex-row">
    <div className="w-full md:w-5/12">
      <h1 className="text-3xl font-bold my-6">Our Story</h1>
      <p className="my-3">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
    <p className="my-3">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
    </div>
    <div>
      <Image src="/about1.png" alt="about" width={500} height={500} />
    </div>

    </div>
    {/* seconde sec */}
    <div className=" w-11/12 m-auto grid grid-cols-1 md:grid-cols-4 gap-12 mt-10">
    <div className=" border-2 border-gray-300 flex flex-col justify-center p-5 items-center hover:bg-red-300 ">
      <Image src='/icon1.png' alt="icon" width={100} height={100}/>
      <h1 className="text-3xl font-bold my-3">10.5k </h1>
      <p className="">Sallers active our site</p>
    </div>
     <div className=" border-2 border-gray-300 flex flex-col justify-center p-5 items-center hover:bg-red-300 ">
      <Image src='/icon1.png' alt="icon" width={100} height={100}/>
      <h1 className="text-3xl font-bold my-3">10.5k </h1>
      <p className="">Sallers active our site</p>
    </div>
     <div className=" border-2 border-gray-300 flex flex-col justify-center p-5 items-center hover:bg-red-300 ">
      <Image src='/icon1.png' alt="icon" width={100} height={100}/>
      <h1 className="text-3xl font-bold my-3">10.5k </h1>
      <p className="">Sallers active our site</p>
    </div>
     <div className=" border-2 border-gray-300 flex flex-col justify-center p-5 items-center hover:bg-red-300 ">
      <Image src='/icon1.png' alt="icon" width={100} height={100}/>
      <h1 className="text-3xl font-bold my-3">10.5k </h1>
      <p className="">Sallers active our site</p>
    </div>
 

    </div>
    {/* third section */}
    
    <div className=" w-11/12 m-auto grid grid-cols-1 md:grid-cols-3 md:gap-50 mt-10 ">
    <div >
      <div className="bg-gray-300 flex justify-center">
        <Image src='/person1.png' alt="person" width={150} height={200}/>

      </div>
      <p className=" px-3 text-2xl font-bold">Tom Cruise</p>
      <p className="px-3">Founder & Chairman</p>
    </div>
      <div >
      <div className="bg-gray-300 flex justify-center">
        <Image src='/person1.png' alt="person" width={150} height={200}/>

      </div>
      <p className=" px-3 text-2xl font-bold">Tom Cruise</p>
      <p className="px-3">Founder & Chairman</p>
    </div>
      <div >
      <div className="bg-gray-300 flex justify-center">
        <Image src='/person1.png' alt="person" width={150} height={200}/>

      </div>
      <p className=" px-3 text-2xl font-bold">Tom Cruise</p>
      <p className="px-3">Founder & Chairman</p>
    </div>

    </div>
    {/* four */}
    <div className="w-11/12  m-auto mt-10 flex flex-col gap-6 md:flex-row justify-around">
    <div className=" flex flex-col gap-4 items-center justify-center">
      <Image src='/icon1.png'
      alt="icon1"
      width={100}
      height={100}
      />
      <p className=" font-bold">FREE AND FAST DELIVERY</p>
      <p>Free delivery for all orders over $140</p>
    </div>
    <div className=" flex flex-col  gap-4 items-center justify-center">
      <Image src='/icon2.png'
      alt="icon2"
      width={100}
      height={100}
      />
      <p className=" font-bold">24/7 CUSTOMER SERVICE</p>
      <p>Friendly 24/7 customer support</p>
    </div>
    <div className=" flex flex-col   gap-4 items-center justify-center">
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
