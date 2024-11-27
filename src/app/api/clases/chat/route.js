import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
    try {
        /**
         * Obtener los datos enviados en el cuerpo de la solicitud
         */
        const body = await request.json();

        const newChat = await prisma.chats.create({
            data: {
                username: body?.username,
                typeUser: body?.typeUser,
                message: body?.message
            }
        })
        return NextResponse.json({
            status: 200,
            message: 'Ok'
        })
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            status: 500,
            message: 'Internal Server Error',
        })
    }
}


export const GET = async (request) => {
    try {
        const chats = await prisma.chats.findMany();
        return NextResponse.json({
            status: 200,
            data: chats,
        });
    } catch (error) {
        console.error('error', error);
        return NextResponse.json({
            status: 500,
            message: 'Error inesperado.',
        });
    }
};
