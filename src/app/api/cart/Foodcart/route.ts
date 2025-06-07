import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const newItem = await prisma.cart.create({
      data: {
        userId: body.userId,
        productName: body.productName,
        productDescription: body.productDescription,
        price: body.price,
        size :body.size,
        Image :body.image
      },
    });

    return NextResponse.json(newItem);
  } catch (error) {
    console.error("Error creating cart:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
