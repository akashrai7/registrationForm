import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        mobile: body.mobile,
        password: body.password,
      },
    });
    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    console.error('Registration failed:', error); //  Use the error
    return new Response(JSON.stringify({ error: 'Registration failed' }), { status: 500 });
  }
}
