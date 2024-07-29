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
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Validate the request body
  // If invalid return 400
  // Fetch the user with the given id
  // If doesn't exist, return 404
  // Update the user
  // Return the updated user
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!body.name || !body.email)
    return NextResponse.json(validation.error?.errors, { status: 400 });
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 400 });
  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(updatedUser, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Fetch the user from db
  // If not found, return 404
  // Delete the user
  // return 200
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 400 });
  await prisma.user.delete({
    where: {
      id: parseInt(params.id),
    },
  });
  return NextResponse.json({});
}
