'use server';

import { PrismaClient } from "@prisma/client";
import { User } from "../constents";
import { revalidatePath } from "next/cache";




const prisma = new PrismaClient();


// ! create a new user

export const createUser = async (user: User) => {
   
      const newUser = await prisma.user.create({
        data: user,
      });
  
      revalidatePath("/");
      return newUser;
  
  };
  