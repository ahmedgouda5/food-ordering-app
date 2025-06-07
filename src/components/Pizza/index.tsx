'use client'
import React from "react";
import { PizzaProps } from "../../../constents";
import Image from "next/image";
import Moduel from "../PizaaModuel";


const Menu = () => {
  const pizzas: PizzaProps[] = [
    {
      id: crypto.randomUUID(),
      name: "Margherita",
      desc: "Classic delight with 100% real mozzarella cheese",
      price: "22.8",
      small: "12",
      medium: "16",
      image: "pizzaOne.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Pepperoni Feast",
      desc: "Loaded with extra pepperoni and cheese for meat lovers",
      price: "24.5",
      small: "13",
      medium: "17",
      image: "PizzaTwo.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Veggie Supreme",
      desc: "Topped with mushrooms, peppers, olives, and sweetcorn",
      price: "23.0",
      small: "11",
      medium: "15",
      image: "PizzaThree.png",
    },
  ];
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-3">
    {pizzas.map((pizza) => (
      <div
        key={pizza.id}
        className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex flex-col justify-between min-h-[420px]"
      >
        <Image
          loading="lazy"
          src={`/${pizza.image}`}
          alt={pizza.name}
          width={200}
          height={200}
          className="w-full h-48 object-contain mb-4"
        />
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-semibold">{pizza.name}</h2>
          <span className="text-sm font-bold mt-2 text-gray-500">
            ${pizza.price}
          </span>
        </div>
        <p className="text-gray-600 text-center mb-4">{pizza.desc}</p>
        <div className="flex items-center justify-center mt-auto">
          <Moduel pizza={pizza}/>
        </div>
      </div>
    ))}
  </div>
  
  );
};

export default Menu;
