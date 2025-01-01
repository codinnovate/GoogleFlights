import Image from "next/image";
import flightBg from  '../assets'

export default function Hero (){
    return (
        <div className="flex flex-col justify-center items-center">
            <Image 
            src={flightBg}
            alt="Flight Background Image"
            className="w-full"
             />
          <h1 className="text-5xl text-white mt-2">Flights</h1>
         </div>
    )
}