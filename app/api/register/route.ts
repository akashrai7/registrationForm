import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, mobile, password } = body;

  try {
    const user = await prisma.user.create({
      data: { name, email, mobile, password },
    });
// update error line
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error('Registration failed:', error); //  Use the error
    return new Response(JSON.stringify({ error: 'Registration failed' }), { status: 500 });
  }
}
