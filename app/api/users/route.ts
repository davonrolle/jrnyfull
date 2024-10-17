// app/api/users/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    const { name, email, password } = await request.json();
    
    try {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
            },
        });
        return NextResponse.json(user);
    } catch (error) {
        console.error('Error creating user:', error);
        return NextResponse.json({ error: 'Error creating user' }, { status: 500 });
    }
}