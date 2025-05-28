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

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'User creation failed' }, { status: 500 });
  }
}
