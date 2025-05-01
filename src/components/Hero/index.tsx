import React from "react";

import Image from "next/image";
import CustomBtn from "../CustomBtn";

const Hero = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[80vh]  px-2 md:px-8 ">
      <div className="flex justify-center flex-col items-center md:block   space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-600">
          Slice into Happiness
        </h2>
        <p className="text-gray-600 max-w-md text-xl font-semibold text-center md:text-left">
          Enjoy the best pizza in town delivered hot and fresh to your door.
        </p>
        <div className="flex gap-4">
         <CustomBtn/>
        </div>
      </div>

      <div className=" hidden  md:block relative  w-full h-[300px] md:h-[400px] ">
        <Image
          src="/pizzaOne.png"
          alt="Delicious Pizza"
          fill
          className="object-contain"
          loading="lazy"
        
        />
      </div>
    </main>
   
  );
}; 

export default Hero;
