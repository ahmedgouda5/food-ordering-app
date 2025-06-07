"use client";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Order, PizzaProps } from "../../../constents";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { createOrder } from "../../../actions/Appactions";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import { useRouter } from "next/navigation";

const Moduel = ({ pizza }: { pizza: PizzaProps }) => {
  const [size, setSize] = useState("medium");
  const Token = useSelector((state: RootState) => state.auth.Token);
  const router = useRouter();

  const handleAddToCart = async () => {
   
     
    let price: string | undefined;

    if (size === "small") price = pizza.small;
    else if (size === "medium") price = pizza.medium;
    else price = pizza.price;

    if (!price) {
      return;
    }

    const data: Order = {
      userId: Token,
      productName: pizza.name,
      productDescription: pizza.desc,
      image: pizza.image,
      size,
      price,
    };

    try {
      const response = await createOrder(data);
      console.log("✅ تم إضافة العنصر للعربية:", response);
    } catch (error) {
      console.error("❌ فشل في الإضافة:", error);
    }
  };

  const handleTriggerClick = () => {
    if (!Token) {
      router.push("/Auth/Login");
    }
  };

  return (
    <Dialog>
      <DialogTrigger
        onClick={handleTriggerClick}
        className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
      >
        Add to cart
      </DialogTrigger>

      <DialogContent className="flex flex-col items-center justify-center">
        <DialogHeader>
          <DialogTitle className="text-center">{pizza.name}</DialogTitle>
          <DialogDescription>{pizza.desc}</DialogDescription>
        </DialogHeader>

        <Image
          src={`/${pizza.image}`}
          alt={pizza.name}
          width={200}
          height={200}
          className="mx-auto object-contain"
        />

        <RadioGroup
          defaultValue="medium"
          value={size}
          onValueChange={setSize}
          className="space-y-2 w-full p-4 rounded-lg"
        >
          <div className="flex bg-orange-400 p-2 items-center justify-between rounded">
            <label htmlFor="small" className="text-sm">
              Small
            </label>
            <span>{pizza.small}$</span>
            <RadioGroupItem value="small" id="small" />
          </div>

          <div className="flex bg-orange-400 p-2 items-center justify-between rounded">
            <label htmlFor="medium" className="text-sm">
              Medium
            </label>
            <span>{pizza.medium}$</span>
            <RadioGroupItem value="medium" id="medium" />
          </div>

          <div className="flex bg-orange-400 p-2 items-center justify-between rounded">
            <label htmlFor="large" className="text-sm">
              Large
            </label>
            <span>{pizza.price}$</span>
            <RadioGroupItem value="large" id="large" />
          </div>
        </RadioGroup>

        <button
          onClick={handleAddToCart}
          className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition"
        >
          Confirm
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default Moduel;
