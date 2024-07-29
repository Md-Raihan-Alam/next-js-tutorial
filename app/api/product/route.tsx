import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";
export async function GET(request: NextRequest) {
  //to remove cache object use NextRequest
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  // validate
  // if invalid return 400
  // else return
  if (!body.name)
    return NextResponse.json(validation.error?.errors, { status: 400 });
  const product = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });
  return NextResponse.json(product, { status: 201 });
}
