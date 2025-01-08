import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.create({
      data: {
        email,
        password,
      },
    });

    return NextResponse.json({
      message: "You have been signed up",
      user,
    });
  } catch (error) {
    console.log("Error in POST /api/user:", error);
    return NextResponse.json(
      {
        message: "An error occurred",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  const user = await prisma.user.findFirst();

  return NextResponse.json({
    user,
  });
}
