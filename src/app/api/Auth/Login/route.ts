import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const newUser = await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: body.password,
      },
    });

    // رجّع الـ id كجزء من الاستجابة
    return NextResponse.json(
      {
        message: "User created successfully",
        userId: newUser.id,
        user: newUser,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}





