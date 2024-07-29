import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Fetch data from a db
  // If not found return 404 error
  // Else return data
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!product)
    return NextResponse.json({ error: "product not found" }, { status: 404 });
  return NextResponse.json(product);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Validate the request body
  // If invalid return 400
  // Fetch the product with the given id
  // If doesn't exist, return 404
  // Update the product
  // Return the updated product
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!body.name || !body.email)
    return NextResponse.json(validation.error?.errors, { status: 400 });
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!product)
    return NextResponse.json({ error: "product not found" }, { status: 400 });
  const updatedproduct = await prisma.product.update({
    where: { id: product.id },
    data: {
      name: body.name,
      price: body.price,
    },
  });
  return NextResponse.json(updatedproduct, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Fetch the product from db
  // If not found, return 404
  // Delete the product
  // return 200
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!product)
    return NextResponse.json({ error: "product not found" }, { status: 400 });
  await prisma.product.delete({
    where: {
      id: parseInt(params.id),
    },
  });
  return NextResponse.json({});
}
