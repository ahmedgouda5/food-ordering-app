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
import { PizzaProps } from "../../../constents";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Confirm from "./Btn";

const Moduel = ({ pizza }: { pizza: PizzaProps }) => {
  return (
    <Dialog>
      <DialogTrigger className="bg-orange-500 text-white  px-4 py-2 rounded-full hover:bg-orange-600 transition">
        Add to cart
      </DialogTrigger>
      <DialogContent className="flex flex-col items-center justify-center ">
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
        <Confirm />
      </DialogContent>
    </Dialog>
  );
};

export default Moduel;
