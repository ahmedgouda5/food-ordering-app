"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-6 text-orange-600">
        About Pizza 🍕
      </h1>

      <p className="text-lg text-gray-700 mb-4 text-center">
        Welcome to <span className="font-semibold">Pizza</span> — your
        ultimate pizza ordering experience! Whether you’re craving a classic
        Margherita, a spicy Pepperoni, or a loaded Veggie Supreme, we’ve got you
        covered.
      </p>

      <div className="flex justify-center my-6">
        <Image
          src="/PizzaOne.png"
          alt="Pizza Banner"
          width={500}
          height={300}
          className="rounded-xl shadow-md object-contain"
        />
      </div>

      <p className="text-md text-gray-600 leading-relaxed mb-6 text-center">
        At <strong>Pizza</strong>, we take pride in serving freshly baked
        pizzas crafted with love and premium ingredients. From our classic
        Margherita to our spicy Pepperoni and flavorful Veggie Supreme, every
        slice is made to satisfy your cravings. With a passion for quality and a
        cozy atmosphere, PizzaTime is your go-to destination for an
        unforgettable pizza experience.
      </p>
    </main>
  );
};

export default About;
